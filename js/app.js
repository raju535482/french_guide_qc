// Main Application Logic
const sections = window.sectionsData || [];

// ── Theme & Style toggles ──────────────────────────────
    let _currentTheme = 'dark';
    const VALID_STYLES = [
      'default',
      'neo-brutalist',
      'minimalist',
      'glassmorphism',
      'claymorphism',
      'cyberpunk',
      'y2k-retro',
      'maximalism'
    ];
    let _currentStyle = 'default';

    (function () {
      try {
        const savedTheme = localStorage.getItem('guideTheme');
        if (savedTheme === 'light' || savedTheme === 'dark') _currentTheme = savedTheme;
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) _currentTheme = 'light';

        const savedStyle = localStorage.getItem('guideStyle');
        if (VALID_STYLES.includes(savedStyle)) _currentStyle = savedStyle;
      } catch (e) { }
      document.documentElement.setAttribute('data-theme', _currentTheme);
      document.documentElement.setAttribute('data-style', _currentStyle);
    })();

    function toggleTheme() {
      _currentTheme = _currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', _currentTheme);
      try { localStorage.setItem('guideTheme', _currentTheme); } catch (e) { }
      applyThemeIcon();
    }

    function applyThemeIcon() {
      const icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = _currentTheme === 'dark' ? 'dark_mode' : 'light_mode';
    }

    function changeStyleTheme(style) {
      if (!VALID_STYLES.includes(style)) return;
      _currentStyle = style;
      document.documentElement.setAttribute('data-style', _currentStyle);
      try { localStorage.setItem('guideStyle', _currentStyle); } catch (e) { }
      applyStyleThemeUI();
      requestAnimationFrame(updateHeaderHeight);
    }

    function toggleStyleTheme() {
      const curIdx = VALID_STYLES.indexOf(_currentStyle);
      const nextIdx = (curIdx + 1) % VALID_STYLES.length;
      changeStyleTheme(VALID_STYLES[nextIdx]);
    }

    function applyStyleThemeUI() {
      const sel = document.getElementById('style-select');
      if (sel && sel.value !== _currentStyle) {
        sel.value = _currentStyle;
      }
    }

    // ── French TTS Pronunciation (Web Speech API) ──────
    let _audioSpeed = parseFloat(localStorage.getItem('guideAudioSpeed') || '0.9');
    let _frenchVoice = null;

    function initFrenchVoice() {
      if (!('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      if (!voices || !voices.length) return;
      // Prioritize Canadian French (fr-CA) for Quebec context, fallback to any French
      _frenchVoice = voices.find(v => v.lang === 'fr-CA') ||
                     voices.find(v => v.lang && v.lang.startsWith('fr')) ||
                     null;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = initFrenchVoice;
      initFrenchVoice();
    }

    function toggleAudioSpeed() {
      _audioSpeed = _audioSpeed === 0.9 ? 0.7 : 0.9;
      try { localStorage.setItem('guideAudioSpeed', _audioSpeed); } catch (e) { }
      const lbl = document.getElementById('audio-speed-label');
      if (lbl) lbl.textContent = _audioSpeed.toFixed(1) + 'x';
    }

    function normalizeFrenchSpeech(text) {
      if (!text) return '';
      // 1. Strip HTML tags
      let s = String(text).replace(/<\/?[^>]+(>|$)/g, '').trim();
      // 2. Completely remove anything in parentheses (...) or brackets [...] (e.g. "(m.)", "(f.)", "(Variation)", "(f. pl.)", "[m.]")
      s = s.replace(/\s*\([^)]*\)/g, '');
      s = s.replace(/\s*\[[^\]]*\]/g, '');
      // 3. Normalize smart / curly / prime apostrophes to ASCII standard apostrophe
      s = s.replace(/[\u2018\u2019\u201B\u2032`´]/g, "'");
      // 4. Remove punctuation wrappers that break TTS phonetics (brackets, guillemets, quotes, asterisks, arrows)
      s = s.replace(/([«»"“”*_:;→])/g, ' ');
      // 5. French elision rule: remove spaces between elided single consonants/particles and following vowel/h words
      // Handles: l', d', j', m', t', s', c', n', qu', jusqu', lorsqu', puisqu', quoiqu'
      // Example: "l' hôtel" -> "l'hôtel", "de l' argent" -> "de l'argent", "d' amis" -> "d'amis"
      s = s.replace(/\b([ldjmtscnáà]|qu|jusqu|lorsqu|puisqu|quoiqu)'\s+/gi, "$1'");
      // 6. Standalone contraction tokens in tables/rules (e.g. "l'", "de l'", "d'"):
      // If spoken alone, TTS spells "L" ("elle"). Adding "apostrophe" allows natural French phonetic rendering.
      s = s.replace(/^(de\s+l'|d'|l')\s*$/i, (m) => m.trim() + 'apostrophe');
      // 7. Connect words hyphenated with spaces (e.g., "peut - il" -> "peut-il", "est - ce" -> "est-ce")
      s = s.replace(/(\b[a-zA-Z\u00C0-\u017F]+)\s*-\s*([a-zA-Z\u00C0-\u017F]+)/g, '$1-$2');
      // 8. Normalize excess whitespace
      s = s.replace(/\s+/g, ' ').trim();
      return s;
    }

    function speakFrench(text, btnElement) {
      if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in this browser.');
        return;
      }
      try {
        window.speechSynthesis.cancel();
      } catch (e) { }

      // Clean, elide, and normalize French text for natural speech synthesis
      const cleanText = normalizeFrenchSpeech(text);
      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'fr-CA';
      if (_frenchVoice) utterance.voice = _frenchVoice;
      utterance.rate = _audioSpeed;

      if (btnElement) {
        btnElement.classList.add('is-speaking');
        utterance.onend = () => btnElement.classList.remove('is-speaking');
        utterance.onerror = () => btnElement.classList.remove('is-speaking');
      }

      window.speechSynthesis.speak(utterance);
    }
    window.speakFrench = speakFrench;
    window.normalizeFrenchSpeech = normalizeFrenchSpeech;
    window.toggleAudioSpeed = toggleAudioSpeed;

    // ── Pronunciation Visual Cues & Gender Formatting ──
    let _phoneticCues = localStorage.getItem('guidePhoneticCues') !== 'false';

    function togglePhoneticsCues() {
      _phoneticCues = !_phoneticCues;
      try { localStorage.setItem('guidePhoneticCues', _phoneticCues); } catch (e) { }
      updatePhoneticToggleUI();
      render();
    }
    window.togglePhoneticsCues = togglePhoneticsCues;

    function updatePhoneticToggleUI() {
      const lbl = document.getElementById('phonetic-toggle-label');
      const btn = document.getElementById('phonetic-toggle-btn');
      if (lbl) lbl.textContent = _phoneticCues ? 'Cues: On' : 'Cues: Off';
      if (btn) {
        if (_phoneticCues) {
          btn.classList.add('cues-active');
        } else {
          btn.classList.remove('cues-active');
        }
      }
    }

    // Noun-Ending Gender Predictor Engine
    function predictFrenchGender(word) {
      if (!word) return null;
      const clean = word.toLowerCase().trim().replace(/^(un|une|le|la|l'|les|du|des)\s+/i, '');
      if (!clean) return null;

      // High-accuracy linguistic rules for French noun endings
      const femRules = [
        { regex: /tion$/, ending: '-tion', conf: 99, rule: '99% feminine (la nation, la situation)' },
        { regex: /sion$/, ending: '-sion', conf: 99, rule: '99% feminine (la décision, la passion)' },
        { regex: /t[ée]e?$/, ending: '-té / -tée', conf: 95, rule: '95% feminine (la liberté, la société)' },
        { regex: /ette$/, ending: '-ette', conf: 98, rule: '98% feminine (la bicyclette, la baguette)' },
        { regex: /ance$/, ending: '-ance', conf: 98, rule: '98% feminine (la chance, l\'enfance)' },
        { regex: /ence$/, ending: '-ence', conf: 95, rule: '95% feminine (la patience, la différence)' },
        { regex: /ure$/, ending: '-ure', conf: 90, rule: '90% feminine (la voiture, la nature)' },
        { regex: /ode$/, ending: '-ode', conf: 90, rule: '90% feminine (la méthode, la période)' },
        { regex: /ade$/, ending: '-ade', conf: 95, rule: '95% feminine (la salade, la promenade)' },
        { regex: /ie$/, ending: '-ie', conf: 92, rule: '92% feminine (la vie, la mairie)' }
      ];

      const mascRules = [
        { regex: /ment$/, ending: '-ment', conf: 99, rule: '99% masculine (le moment, le sentiment)' },
        { regex: /eau$/, ending: '-eau', conf: 96, rule: '96% masculine (le bateau, le gâteau; exc: l\'eau, la peau)' },
        { regex: /isme$/, ending: '-isme', conf: 99, rule: '99% masculine (le tourisme, le réalisme)' },
        { regex: /oir$/, ending: '-oir', conf: 98, rule: '98% masculine (le miroir, le couloir)' },
        { regex: /age$/, ending: '-age', conf: 95, rule: '95% masculine (le voyage, le fromage; exc: la page, la plage)' },
        { regex: /al$/, ending: '-al', conf: 98, rule: '98% masculine (le journal, l\'animal)' },
        { regex: /phone$/, ending: '-phone', conf: 99, rule: '99% masculine (le téléphone)' },
        { regex: /in$/, ending: '-in', conf: 95, rule: '95% masculine (le matin, le jardin)' },
        { regex: /eur$/, ending: '-eur', conf: 85, rule: 'Usually masculine for objects & agents (le professeur, l\'ordinateur)' }
      ];

      for (const r of femRules) {
        if (r.regex.test(clean)) {
          return { gender: 'f', article: 'une / la', ending: r.ending, conf: r.conf, tip: r.rule, clean };
        }
      }

      for (const r of mascRules) {
        if (r.regex.test(clean)) {
          return { gender: 'm', article: 'un / le', ending: r.ending, conf: r.conf, tip: r.rule, clean };
        }
      }

      if (clean.endsWith('e')) {
        return { gender: 'f', article: 'une / la (likely)', ending: '-e', conf: 72, tip: 'Nouns ending in -e are ~72% feminine, with common exceptions (un problème, un groupe).', clean };
      }
      return { gender: 'm', article: 'un / le (likely)', ending: 'consonant', conf: 80, tip: 'Nouns ending in consonants other than -e are ~80% masculine.', clean };
    }
    window.predictFrenchGender = predictFrenchGender;

    window.runGenderPredictor = function() {
      const input = document.getElementById('gp-input');
      const res = document.getElementById('gp-result');
      if (!input || !res) return;
      const val = input.value.trim();
      if (!val) {
        res.innerHTML = '<span style="color:var(--text-muted)">Type a French noun above to analyze its ending rule.</span>';
        return;
      }
      const pred = predictFrenchGender(val);
      if (!pred) return;
      const isFem = pred.gender === 'f';
      const spk = makeSpeakerHtml(`${pred.article.split(' ')[0]} ${pred.clean}`, 'widget-speak-btn');
      res.innerHTML = `
        <div class="gp-card ${isFem ? 'gp-f' : 'gp-m'}">
          <div class="gp-top">
            <span class="gp-word">${spk}<span>${pred.clean}</span></span>
            <span class="gender-badge ${isFem ? 'gender-f' : 'gender-m'}">${isFem ? 'Féminin' : 'Masculin'} (${pred.conf}% confident)</span>
          </div>
          <div class="gp-article">Article: <strong>${pred.article}</strong></div>
          <div class="gp-tip"><span class="ms ms-sm" style="vertical-align:middle;margin-right:4px">lightbulb</span>${pred.tip}</div>
        </div>
      `;
    };

    // Formatter for French text: Visual gender tags + Phonetics (Silent letters & Liaison ties)
    function formatFrenchDisplay(rawText) {
      if (!rawText) return '';
      let s = String(rawText);

      // 1. Gender color badges: replace (m.) and (f.)
      s = s.replace(/\s*\(\s*m\.\s*\)/gi, ' <span class="gender-badge gender-m" title="Masculin">m.</span>');
      s = s.replace(/\s*\(\s*f\.\s*\)/gi, ' <span class="gender-badge gender-f" title="Féminin">f.</span>');

      // 2. Pronunciation visual cues (if enabled)
      if (_phoneticCues) {
        // Liaison ties: common French words before vowel/mute h
        const liaisonWords = '(?:les|des|mes|tes|ses|nos|vos|leurs|aux|ces|plus|très|vous|nous|ils|elles|tout|petit|grand|deux|trois|six|dix|bon|en|un|est)';
        const vowels = 'a|e|i|o|u|y|h|é|è|ê|ë|à|â|î|ï|ô|û|ù';
        const reLiaison = new RegExp('\\b(' + liaisonWords + ')\\s+(' + vowels + '[a-zA-Z\\u00C0-\\u017F]*)', 'gi');
        s = s.replace(reLiaison, '$1<span class="liaison-bridge" title="Liaison: pronounce connected">‿</span>$2');

        // Silent letter markers on well-known French words
        const silentWords = [
          { word: 'chat', stem: 'cha', silent: 't' },
          { word: 'chats', stem: 'cha', silent: 'ts' },
          { word: 'temps', stem: 'tem', silent: 'ps' },
          { word: 'froid', stem: 'froi', silent: 'd' },
          { word: 'chaud', stem: 'chau', silent: 'd' },
          { word: 'vert', stem: 'ver', silent: 't' },
          { word: 'lait', stem: 'lai', silent: 't' },
          { word: 'trop', stem: 'tro', silent: 'p' },
          { word: 'beaucoup', stem: 'beaucou', silent: 'p' },
          { word: 'nuit', stem: 'nui', silent: 't' },
          { word: 'mot', stem: 'mo', silent: 't' },
          { word: 'plat', stem: 'pla', silent: 't' },
          { word: 'grand', stem: 'gran', silent: 'd' },
          { word: 'petit', stem: 'peti', silent: 't' },
          { word: 'tard', stem: 'tar', silent: 'd' },
          { word: 'port', stem: 'por', silent: 't' },
          { word: 'prix', stem: 'pri', silent: 'x' },
          { word: 'voix', stem: 'voi', silent: 'x' },
          { word: 'bras', stem: 'bra', silent: 's' },
          { word: 'pied', stem: 'pie', silent: 'd' },
          { word: 'lit', stem: 'li', silent: 't' }
        ];
        for (const item of silentWords) {
          const re = new RegExp('\\b' + item.word + '\\b', 'gi');
          s = s.replace(re, `${item.stem}<span class="silent-letter" title="Silent letter (do not pronounce)">${item.silent}</span>`);
        }
      }

      return s;
    }
    window.formatFrenchDisplay = formatFrenchDisplay;

    const _COMMON_ENGLISH_WORDS = new Set([
      'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do',
      'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all',
      'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make',
      'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could',
      'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after',
      'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give',
      'day', 'most', 'us', 'was', 'were', 'is', 'are', 'been', 'being', 'did', 'does', 'doing', 'done', 'has', 'had', 'having',
      'happened', 'occurring', 'occurred', 'continuous', 'habitual', 'completed', 'interrupted', 'sequence', 'feeling',
      'action', 'type', 'core', 'meaning', 'scene', 'setting', 'background', 'diagnostic', 'question', 'selection', 'marker',
      'usually', 'often', 'always', 'sometimes', 'never', 'state', 'condition', 'event', 'sudden', 'result', 'cause',
      'rising', 'intonation', 'step', 'routine', 'exception', 'rule', 'note', 'english', 'french', 'pronunciation'
    ]);

    function makeSpeakerHtml(text, extraClass = 'tbl-speak-btn') {
      if (!text) return '';
      // Clean HTML tags
      let clean = String(text).replace(/<\/?[^>]+(>|$)/g, '').trim();

      // If text has definition format like 'Je savais = I knew (had knowledge all along)', take the French side
      if (clean.includes(' = ')) {
        clean = clean.split(' = ')[0].trim();
      }
      // If text has format like 'Je suis passé. — I stopped by / passed by.' or 'j\'ai vu — I saw', take the French side
      if (clean.includes(' — ')) {
        clean = clean.split(' — ')[0].trim();
      } else if (clean.includes(' - ') && !/^[a-zA-ZÀ-ÿ]+-[a-zA-ZÀ-ÿ]+$/.test(clean)) {
        // e.g. "j'ai eu - I had"
        clean = clean.split(' - ')[0].trim();
      }

      // Completely remove all parenthesized and bracketed annotations (e.g. "(Variation)", "(It was cold)", "(f.)")
      const spoken = clean.replace(/\s*\([^)]*\)/g, '').replace(/\s*\[[^\]]*\]/g, '').trim();
      if (!spoken || spoken === '—' || spoken === '-' || spoken === '∅' || spoken.length < 1) return '';

      // Pure numbers, times, percentages, or punctuation (e.g. "12", "14:30", "1:00")
      if (/^[\d\s:.,+\-%/()=➔→*#…]+$/.test(spoken)) return '';
      // Formulas or operator combinations like "+ de"
      if (/^[+/*=]/.test(spoken)) return '';

      // Must contain at least one alphabetic character
      if (!/[a-zA-ZÀ-ÿ]/.test(spoken)) return '';

      // Exclude English instructions, grammatical meta descriptions, English pronouns or English question patterns
      if (/^(before\s+vowel|after\s+a\s+negative|add\s+-s|most\s+nouns|when\s+the|used\s+for|starts\s+with|plural|masculine|feminine|singular|regular|irregular|step\s+\d+|is\s+the|what\s+happened|what\s+changed|rising\s+intonation|continuous|habitual|state\s+\/|exception\s+marker|core\s+question|single\s+event|diagnostic|interruption|result|was\s+doing|did\s+\/)/i.test(spoken)) return '';
      if (/\b(vowel|consonant|ending|becomes|means|refers|replace|infinitive|dropped|change|meaning|usage|register|question|selection|setting|background|occurred|happened)\b/i.test(spoken)) return '';

      // English words density filter
      const words = spoken.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(w => w.length > 0);
      if (words.length === 0) return '';
      if (/^(what|how|why|when|where|which|who|is|are|was|were|did|do|does|it|this|that|these|those|step\s+\d+)\b/i.test(spoken)) return '';

      let engCount = 0;
      for (const w of words) {
        if (_COMMON_ENGLISH_WORDS.has(w)) engCount++;
      }
      if (words.length <= 2 && engCount === words.length) return '';
      if (engCount >= 2 && (engCount / words.length >= 0.25)) return '';

      // Escape for single-quoted onclick
      const escaped = spoken.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      return `<button class="${extraClass}" onclick="speakFrench('${escaped}', this); event.stopPropagation();" title="Listen in French" aria-label="Listen to French pronunciation"><span class="ms ms-sm">volume_up</span></button>`;
    }
    window.makeSpeakerHtml = makeSpeakerHtml;

    // ── Font size control ──────────────────────────────
    const FONT_SIZES = [12, 13, 14, 15, 16, 17, 18, 20, 22];
    const FONT_DEFAULT = 4; // index of 16px
    let _fontIdx = parseInt(localStorage.getItem('guideFont') || FONT_DEFAULT, 10);
    if (_fontIdx < 0 || _fontIdx >= FONT_SIZES.length) _fontIdx = FONT_DEFAULT;

    function applyFontSize() {
      document.documentElement.style.fontSize = FONT_SIZES[_fontIdx] + 'px';
      const label = document.getElementById('font-size-label');
      const btnDec = document.getElementById('font-btn-dec');
      const btnInc = document.getElementById('font-btn-inc');
      if (label) label.textContent = FONT_SIZES[_fontIdx] + 'px';
      if (btnDec) btnDec.disabled = _fontIdx <= 0;
      if (btnInc) btnInc.disabled = _fontIdx >= FONT_SIZES.length - 1;
      // Recalculate sticky header offset after font scale changes
      requestAnimationFrame(updateHeaderHeight);
    }

    function changeFontSize(dir) {
      const next = _fontIdx + dir;
      if (next < 0 || next >= FONT_SIZES.length) return;
      _fontIdx = next;
      try { localStorage.setItem('guideFont', _fontIdx); } catch (e) { }
      applyFontSize();
    }

    function buildFontControls() {
      const parent = document.querySelector('.header-controls') || document.querySelector('.header-content');
      if (!parent || document.getElementById('font-ctrl')) return;
      const ctrl = document.createElement('div');
      ctrl.className = 'font-ctrl';
      ctrl.id = 'font-ctrl';
      ctrl.innerHTML =
        '<button class="font-btn" id="font-btn-dec" onclick="changeFontSize(-1)" title="Decrease font size" aria-label="Decrease font size">A−</button>' +
        '<span class="font-size-label" id="font-size-label"></span>' +
        '<button class="font-btn" id="font-btn-inc" onclick="changeFontSize(1)" title="Increase font size" aria-label="Increase font size">A+</button>';
      // Insert as first control in .header-controls
      parent.insertBefore(ctrl, parent.firstChild);
      applyFontSize();
    }

    function buildLangSwitcher() {
      const parent = document.querySelector('.header-controls') || document.querySelector('.header-content');
      if (!parent || document.getElementById('lang-switcher')) return;
      const wrap = document.createElement('div');
      wrap.id = 'lang-switcher';
      wrap.className = 'lang-select-wrap';
      
      const select = document.createElement('select');
      select.className = 'lang-select';
      select.setAttribute('aria-label', 'Select Language');
      select.setAttribute('title', 'Change Guide Language');
      
      LANGS.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.code;
        opt.textContent = l.flag + ' ' + l.name;
        if (l.code === currentLang) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });
      
      select.addEventListener('change', (e) => {
        currentLang = e.target.value;
        window.currentLang = currentLang;
        document.documentElement.setAttribute('lang', currentLang);
        if (currentLang === 'fa') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.removeAttribute('dir');
        }
        updateAppSubtitle();
        render();
      });
      
      wrap.appendChild(select);
      parent.appendChild(wrap);
    }



    // ═══════════════════════════════════════════════════════════════
    // TABLE & EXAMPLE TRANSLATION MAP
    // Keys = English cell values from tables / example .english fields
    // Used to add a native-language column alongside the English column
    // ═══════════════════════════════════════════════════════════════
    const tableT = {

      "since / for": { "fa": "از / به مدت",  "gu": "ત્યારથી / માટે", "hi": "से / के लिए", "ta": "இருந்து / க்காக", "ko": "~부터 / ~동안", "zh": "自从 / 持续" },
      "ago": { "fa": "پیش / قبل",  "gu": "પહેલાં", "hi": "पहले", "ta": "முன்பு", "ko": "~전에", "zh": "以前" },
      "in (time from now)": { "fa": "در (زمان از حالا)",  "gu": "માં (હવે પછી)", "hi": "में (अब से)", "ta": "இல் (இனிமேல்)", "ko": "~후에", "zh": "在...之后" },
      "during / for": { "fa": "در طول / به مدت",  "gu": "દરમિયાન / માટે", "hi": "के दौरान / के लिए", "ta": "வின் போது / க்காக", "ko": "~동안", "zh": "在...期间 / 持续" },
      "Amélie is going to give birth in a month.": { "fa": "آملی قرار است یک ماه دیگر زایمان کند.",  "gu": "એમેલી એક મહિનામાં બાળકને જન્મ આપશે.", "hi": "एमेली एक महीने में बच्चे को जन्म देने वाली है।", "ta": "அமெலி ஒரு மாதத்தில் குழந்தை பெறப்போகிறாள்.", "ko": "아멜리는 한 달 뒤에 출산할 거예요.", "zh": "阿梅丽将在一个月后分娩。" },
      "She has been living in Quebec since January 6, 2004.": { "fa": "او از ۶ ژانویه ۲۰۰۴ در کبک زندگی می‌کند.",  "gu": "તે 6 જાન્યુઆરી 2004 થી ક્વિબેકમાં રહે છે.", "hi": "वह 6 जनवरी 2004 से क्यूबेक में रह रही है।", "ta": "அவள் ஜனவரி 6, 2004 முதல் கியூபெக்கில் வசித்து வருகிறாள்.", "ko": "그녀는 2004년 1월 6일부터 퀘벡에 살고 있습니다.", "zh": "她自2004年1月6日以来一直住在魁北克。" },
      "In Mexico, my wife worked as a secretary for two years.": { "fa": "در مکزیک، همسرم به مدت دو سال به عنوان منشی کار کرد.",  "gu": "મેક્સિકોમાં, મારી પત્નીએ બે વર્ષ સુધી સેક્રેટરી તરીકે કામ કર્યું.", "hi": "मेक्सिको में, मेरी पत्नी ने दो साल तक सचिव के रूप में काम किया।", "ta": "மெக்சிகோவில், என் மனைவி இரண்டு ஆண்டுகள் സെക്രട്ടரியாகப் பணிபுரிந்தார்.", "ko": "멕시코에서 제 아내는 2년 동안 비서로 일했습니다.", "zh": "在墨西哥，我的妻子做过两年的秘书。" },
      "They bought their car a few days ago.": { "fa": "آن‌ها ماشین خود را چند روز پیش خریدند.",  "gu": "તેઓએ થોડા દિવસ પહેલા તેમની કાર ખરીદી હતી.", "hi": "उन्होंने कुछ दिन पहले अपनी कार खरीदी थी।", "ta": "அவர்கள் சில நாட்களுக்கு முன்பு தங்கள் காரை வாங்கினார்கள்.", "ko": "그들은 며칠 전에 차를 샀습니다.", "zh": "他们几天前买了车。" },
      "Marie-Claude arrived five minutes ago.": { "fa": "ماری-کلود پنج دقیقه پیش رسید.",  "gu": "મેરી-ક્લાઉડ પાંચ મિનિટ પહેલાં આવી.", "hi": "मैरी-क्लाउड पांच मिनट पहले आई।", "ta": "மேரி-கிளாட் ஐந்து நிமிடங்களுக்கு முன்பு வந்தாள்.", "ko": "마리-클로드는 5분 전에 도착했어요.", "zh": "玛丽-克劳德五分钟前到了。" },

      "Did you understand? (Variation)": { "fa": "فهمیدی؟ (حالت غیررسمی)", "gu": "શું તમે સમજ્યા? (વિવિધતા)", "hi": "क्या आप समझे? (विविधता)", "ta": "உங்களுக்குப் புரிந்ததா? (மாறுபாடு)", "ko": "이해하셨나요? (변형)", "zh": "你明白了吗？(变体)"},
      "There is no problem. (Variation)": { "fa": "مشکلی نیست. (حالت غیررسمی)", "gu": "કોઈ વાંધો નથી. (વિવિધતા)", "hi": "कोई समस्या नहीं है। (विविधता)", "ta": "எந்த பிரச்சனையும் இல்லை. (மாறுபாடு)", "ko": "문제 없습니다. (변형)", "zh": "没问题。(变体)"},
      "You're going to work tomorrow.": { "fa": "تو فردا کار خواهی کرد (قرار است کار کنی).",  gu: "તું કાલે કામ કરવાનો છે.", hi: "तुम कल काम करने वाले हो।", ta: "நீ நாளை வேலை செய்யப் போகிறாய்.", ko: "너는 내일 일할 거예요.", zh: "你明天要工作。" },
      "It's going to snow tonight.": { "fa": "امشب برف خواهد بارید.",  gu: "આજ રાત્રે બરફ પડવાનો છે.", hi: "आज रात बर्फ़ गिरने वाली है।", ta: "இன்றிரவு பனி பெய்யப் போகிறது.", ko: "오늘 밤 눈이 올 거예요.", zh: "今晚要下雪了。" },
      "I'm going to leave": { "fa": "من دارم می‌روم / قصد دارم بروم",  gu: "હું જવાનો છું", hi: "मैं जाने वाला हूँ", ta: "நான் கிளம்பப் போகிறேன்", ko: "나는 떠날 거예요", zh: "我要离开" },
      "you're going to finish": { "fa": "تو تمام خواهی کرد",  gu: "તું પૂરું કરવાનો છે", hi: "तुम ख़त्म करने वाले हो", ta: "நீ முடிக்கப் போகிறாய்", ko: "너는 끝낼 거예요", zh: "你要完成" },
      "we're going to go out": { "fa": "ما بیرون خواهیم رفت",  gu: "અમે બહાર જવાના છીએ", hi: "हम बाहर जाने वाले हैं", ta: "நாங்கள் வெளியே போகப் போகிறோம்", ko: "우리는 나갈 거예요", zh: "我们要出去" },
      "we're going to eat": { "fa": "ما غذا خواهیم خورد",  gu: "અમે ખાવાના છીએ", hi: "हम खाने वाले हैं", ta: "நாங்கள் சாப்பிடப் போகிறோம்", ko: "우리는 먹을 거예요", zh: "我们要吃饭" },
      "you're going to see": { "fa": "شما خواهید دید",  gu: "તમે જોવાના છો", hi: "तुम देखने वाले हो", ta: "நீங்கள் பார்க்கப் போகிறீர்கள்", ko: "당신은 볼 거예요", zh: "你们要看" },
      "they're going to arrive": { "fa": "آن‌ها خواهند رسید",  gu: "તેઓ આવવાના છે", hi: "वे आने वाले हैं", ta: "அவர்கள் வரப் போகிறார்கள்", ko: "그들은 도착할 거예요", zh: "他们要到了" },
      "tonight": { "fa": "امشب",  gu: "આજ રાત્રે", hi: "आज रात", ta: "இன்றிரவு", ko: "오늘 밤", zh: "今晚" },
      "right away": { "fa": "فوراً / همین الان",  gu: "તરત જ", hi: "तुरंत", ta: "உடனே", ko: "당장", zh: "马上" },
      "next week": { "fa": "هفته آینده",  gu: "આવતા અઠવાડિયે", hi: "अगले हफ़्ते", ta: "அடுத்த வாரம்", ko: "다음 주", zh: "下周" },
      "in two days": { "fa": "دو روز دیگر",  gu: "બે દિવસમાં", hi: "दो दिन में", ta: "இரண்டு நாட்களில்", ko: "이틀 후에", zh: "两天后" },
      "I'm not going to go out.": { "fa": "من قصد ندارم بیرون بروم.",  gu: "હું બહાર જવાનો નથી.", hi: "मैं बाहर नहीं जाने वाला।", ta: "நான் வெளியே போகப் போவதில்லை.", ko: "나는 나가지 않을 거예요.", zh: "我不打算出去。" },
      "We're not going to eat.": { "fa": "ما غذا نخواهیم خورد.",  gu: "અમે ખાવાના નથી.", hi: "हम खाने वाले नहीं हैं।", ta: "நாங்கள் சாப்பிடப் போவதில்லை.", ko: "우리는 먹지 않을 거예요.", zh: "我们不打算吃。" },
      "You're not going to work.": { "fa": "شما کار نخواهید کرد.",  gu: "તું કામ કરવાનો નથી.", hi: "तुम काम नहीं करने वाले।", ta: "நீ வேலை செய்யப் போவதில்லை.", ko: "너는 일하지 않을 거예요.", zh: "你不打算工作。" },
      "He's not going to come.": { "fa": "او نخواهد آمد.",  gu: "એ આવવાનો નથી.", hi: "वो आने वाला नहीं।", ta: "அவர் வரப் போவதில்லை.", ko: "그는 오지 않을 거예요.", zh: "他不打算来。" },
      "I will wait": { "fa": "من صبر خواهم کرد",  gu: "હું રાહ જોઈશ", hi: "मैं इंतज़ार करूँगा", ta: "நான் காத்திருப்பேன்", ko: "나는 기다릴 것이다", zh: "我将等待" },
      "you will sell": { "fa": "تو خواهی فروخت",  gu: "તું વેચીશ", hi: "तुम बेचोगे", ta: "நீ விற்பாய்", ko: "너는 팔 것이다", zh: "你将卖" },
      "he will take": { "fa": "او خواهد گرفت",  gu: "એ લેશે", hi: "वो लेगा", ta: "அவர் எடுப்பார்", ko: "그는 가져갈 것이다", zh: "他将拿" },
      "we will write": { "fa": "ما خواهیم نوشت",  gu: "અમે લખીશું", hi: "हम लिखेंगे", ta: "நாங்கள் எழுதுவோம்", ko: "우리는 쓸 것이다", zh: "我们将写" },
      "I will be": { "fa": "من خواهم بود",  gu: "હું હોઈશ", hi: "मैं रहूँगा", ta: "நான் இருப்பேன்", ko: "나는 있을 것이다", zh: "我将是" },
      "I will have": { "fa": "من خواهم داشت",  gu: "મારી પાસે હશે", hi: "मेरे पास होगा", ta: "என்னிடம் இருக்கும்", ko: "나는 가질 것이다", zh: "我将有" },
      "I will go": { "fa": "من خواهم رفت",  gu: "હું જઈશ", hi: "मैं जाऊँगा", ta: "நான் போவேன்", ko: "나는 갈 것이다", zh: "我将去" },
      "I will do": { "fa": "من انجام خواهم داد",  gu: "હું કરીશ", hi: "मैं करूँगा", ta: "நான் செய்வேன்", ko: "나는 할 것이다", zh: "我将做" },
      "I will come": { "fa": "من خواهم آمد",  gu: "હું આવીશ", hi: "मैं आऊँगा", ta: "நான் வருவேன்", ko: "나는 올 것이다", zh: "我将来" },
      "I will see": { "fa": "من خواهم دید",  gu: "હું જોઈશ", hi: "मैं देखूँगा", ta: "நான் பார்ப்பேன்", ko: "나는 볼 것이다", zh: "我将看见" },
      "I will be able to": { "fa": "من قادر خواهم بود / می‌توانم",  gu: "હું કરી શકીશ", hi: "मैं कर सकूँगा", ta: "என்னால் முடியும்", ko: "나는 할 수 있을 것이다", zh: "我将能够" },
      "I will want": { "fa": "من خواهم خواست",  gu: "હું ઇચ્છીશ", hi: "मैं चाहूँगा", ta: "நான் விரும்புவேன்", ko: "나는 원할 것이다", zh: "我将想要" },
      "I will have to": { "fa": "من مجبور خواهم بود / باید",  gu: "મારે કરવું પડશે", hi: "मुझे करना पड़ेगा", ta: "நான் செய்ய வேண்டும்", ko: "나는 해야 할 것이다", zh: "我将不得不" },
      "I will know": { "fa": "من خواهم دانست",  gu: "હું જાણીશ", hi: "मैं जानूँगा", ta: "நான் அறிவேன்", ko: "나는 알게 될 것이다", zh: "我将知道" },
      "it will be necessary": { "fa": "لازم خواهد بود",  gu: "જરૂરી હશે", hi: "ज़रूरी होगा", ta: "அவசியமாகும்", ko: "필요할 것이다", zh: "将有必要" },
      "It will be nice tomorrow. (prediction)": { "fa": "فردا هوا خوب خواهد بود. (پیش‌بینی)",  gu: "કાલે હવામાન સારું હશે. (prediction)", hi: "कल मौसम अच्छा रहेगा। (prediction)", ta: "நாளை வானிலை நன்றாக இருக்கும். (prediction)", ko: "내일 날씨가 좋을 것이다. (예측)", zh: "明天天气会不错。（预测）" },
      "I'll help you, I promise. (promise)": { "fa": "کمکت خواهم کرد، قول می‌دهم. (قول)",  gu: "હું તને મદદ કરીશ, વચન. (promise)", hi: "मैं तुम्हारी मदद करूँगा, वादा। (promise)", ta: "நான் உனக்கு உதவுவேன், வாக்கு. (promise)", ko: "도와줄게, 약속해. (약속)", zh: "我会帮你，我保证。（承诺）" },
      "When I have time, I'll come. (quand + future!)": { "fa": "وقتی وقت داشته باشم، خواهم آمد. (quand + آینده!)",  gu: "જ્યારે સમય હશે, હું આવીશ. (quand + future!)", hi: "जब समय होगा, मैं आऊँगा। (quand + future!)", ta: "நேரம் இருக்கும்போது நான் வருவேன். (quand + future!)", ko: "시간이 있으면 갈게. (quand + future!)", zh: "等我有空就来。（quand + future!）" },
      "If you study, you'll succeed.": { "fa": "اگر درس بخوانی، موفق خواهی شد.",  gu: "જો તું ભણીશ, તો સફળ થઈશ.", hi: "अगर तुम पढ़ोगे, तो सफल होगे।", ta: "நீ படித்தால் வெற்றி பெறுவாய்.", ko: "공부하면 성공할 거예요.", zh: "你若学习就会成功。" },
      "I won't leave.": { "fa": "من نخواهم رفت / ترک نخواهم کرد.",  gu: "હું જવાનો નથી.", hi: "मैं नहीं जाऊँगा।", ta: "நான் கிளம்ப மாட்டேன்.", ko: "나는 떠나지 않을 거예요.", zh: "我不会离开。" },
      "You won't understand.": { "fa": "متوجه نخواهی شد.",  gu: "તું નહીં સમજે.", hi: "तुम नहीं समझोगे।", ta: "நீ புரிந்துகொள்ள மாட்டாய்.", ko: "너는 이해하지 못할 거예요.", zh: "你不会明白。" },
      "He won't come.": { "fa": "او نخواهد آمد.",  gu: "એ નહીં આવે.", hi: "वो नहीं आएगा।", ta: "அவர் வர மாட்டார்.", ko: "그는 오지 않을 거예요.", zh: "他不会来。" },
      "We won't be there.": { "fa": "ما آنجا نخواهیم بود.",  gu: "અમે ત્યાં નહીં હોઈએ.", hi: "हम वहाँ नहीं होंगे।", ta: "நாங்கள் அங்கே இருக்க மாட்டோம்.", ko: "우리는 거기 없을 거예요.", zh: "我们不会在那里。" },
      "It was cold and it was snowing.": { "fa": "هوا سرد بود و برف می‌بارید.",  gu: "ઠંડી હતી અને બરફ પડતો હતો.", hi: "ठंड थी और बर्फ़ गिर रही थी।", ta: "குளிராக இருந்தது, பனி பெய்துகொண்டிருந்தது.", ko: "추웠고 눈이 내리고 있었다.", zh: "天很冷，正在下雪。" },
      "I was ten years old.": { "fa": "من ده ساله بودم.",  gu: "હું દસ વર્ષનો હતો.", hi: "मैं दस साल का था।", ta: "எனக்கு பத்து வயது.", ko: "나는 열 살이었다.", zh: "我那时十岁。" },
      "She was tired.": { "fa": "او خسته بود.",  gu: "એ થાકેલી હતી.", hi: "वो थकी हुई थी।", ta: "அவள் சோர்வாக இருந்தாள்.", ko: "그녀는 피곤했다.", zh: "她那时很累。" },
      "It was a beautiful day.": { "fa": "روز زیبایی بود.",  gu: "એ સુંદર દિવસ હતો.", hi: "वो एक ख़ूबसूरत दिन था।", ta: "அது ஒரு அழகான நாள்.", ko: "아름다운 날이었다.", zh: "那是美好的一天。" },
      "Every morning, I used to take the metro.": { "fa": "هر روز صبح با مترو می‌رفتم.",  gu: "દરરોજ સવારે હું મેટ્રો લેતો.", hi: "हर सुबह मैं मेट्रो लेता था।", ta: "ஒவ்வொரு காலையும் நான் மெட்ரோ எடுப்பேன்.", ko: "매일 아침 나는 지하철을 타곤 했다.", zh: "每天早上我常坐地铁。" },
      "We often went / used to go to the park.": { "fa": "ما اغلب به پارک می‌رفتیم.",  gu: "અમે ઘણી વાર પાર્ક જતાં.", hi: "हम अक्सर पार्क जाते थे।", ta: "நாங்கள் அடிக்கடி பூங்காவுக்குச் செல்வோம்.", ko: "우리는 자주 공원에 가곤 했다.", zh: "我们常去公园。" },
      "On Sundays, she would visit her grandmother.": { "fa": "یکشنبه‌ها او به دیدن مادربزرگش می‌رفت.",  gu: "રવિવારે એ પોતાની દાદીને મળવા જતી.", hi: "रविवार को वो अपनी दादी से मिलने जाती थी।", ta: "ஞாயிற்றுக்கிழமைகளில் அவள் பாட்டியைப் பார்க்கச் செல்வாள்.", ko: "일요일마다 그녀는 할머니를 찾아가곤 했다.", zh: "每逢周日她会去看祖母。" },
      "I was sleeping when the phone rang.": { "fa": "خوابیده بودم که تلفن زنگ زد.",  gu: "ફોન વાગ્યો ત્યારે હું ઊંઘતો હતો.", hi: "जब फ़ोन बजा तब मैं सो रहा था।", ta: "போன் ஒலித்தபோது நான் தூங்கிக்கொண்டிருந்தேன்.", ko: "전화가 울렸을 때 나는 자고 있었다.", zh: "电话响时我正在睡觉。" },
      "It was nice out, so we went out.": { "fa": "هوا خوب بود، بنابراین بیرون رفتیم.",  gu: "બહાર હવામાન સારું હતું, એટલે અમે બહાર ગયા.", hi: "बाहर मौसम अच्छा था, तो हम बाहर गए।", ta: "வெளியே வானிலை நன்றாக இருந்தது, அதனால் நாங்கள் வெளியே சென்றோம்.", ko: "날씨가 좋아서 우리는 나갔다.", zh: "外面天气好，所以我们出去了。" },
      "She was reading when I arrived.": { "fa": "او داشت مطالعه می‌کرد وقتی من رسیدم.",  gu: "હું આવ્યો ત્યારે એ વાંચતી હતી.", hi: "जब मैं पहुँचा तब वो पढ़ रही थी।", ta: "நான் வந்தபோது அவள் படித்துக்கொண்டிருந்தாள்.", ko: "내가 도착했을 때 그녀는 읽고 있었다.", zh: "我到时她正在读书。" },
      "I wasn't speaking.": { "fa": "من صحبت نمی‌کردم.",  gu: "હું બોલતો નહોતો.", hi: "मैं नहीं बोल रहा था।", ta: "நான் பேசவில்லை.", ko: "나는 말하고 있지 않았다.", zh: "我那时没在说话。" },
      "It wasn't nice out.": { "fa": "هوا خوب نبود.",  gu: "બહાર હવામાન સારું નહોતું.", hi: "बाहर मौसम अच्छा नहीं था।", ta: "வெளியே வானிலை நன்றாக இல்லை.", ko: "밖은 날씨가 좋지 않았다.", zh: "外面天气不好。" },
      "We didn't have time.": { "fa": "ما وقت نداشتیم.",  gu: "અમારી પાસે સમય નહોતો.", hi: "हमारे पास समय नहीं था।", ta: "எங்களிடம் நேரம் இல்லை.", ko: "우리는 시간이 없었다.", zh: "我们那时没有时间。" },
      "I go to Montreal. → I go there.": { "fa": "من به مونترال می‌روم. → به آنجا می‌روم.",  gu: "હું મોન્ટ્રિયલ જાઉં છું. → હું ત્યાં જાઉં છું.", hi: "मैं मॉन्ट्रियल जाता हूँ। → मैं वहाँ जाता हूँ।", ta: "நான் மான்ட்ரியல் செல்கிறேன். → நான் அங்கே செல்கிறேன்.", ko: "나는 몬트리올에 간다. → 나는 거기 간다.", zh: "我去蒙特利尔。→ 我去那里。" },
      "She's in the kitchen. → She's there.": { "fa": "او در آشپزخانه است. → او آنجاست.",  gu: "એ રસોડામાં છે. → એ ત્યાં છે.", hi: "वो रसोई में है। → वो वहाँ है।", ta: "அவள் சமையலறையில் இருக்கிறாள். → அவள் அங்கே இருக்கிறாள்.", ko: "그녀는 부엌에 있다. → 그녀는 거기 있다.", zh: "她在厨房里。→ 她在那里。" },
      "We live in Quebec. → We live there.": { "fa": "ما در کبک زندگی می‌کنیم. → ما آنجا زندگی می‌کنیم.",  gu: "અમે ક્વિબેકમાં રહીએ છીએ. → અમે ત્યાં રહીએ છીએ.", hi: "हम क्यूबेक में रहते हैं। → हम वहाँ रहते हैं।", ta: "நாங்கள் கியூபெக்கில் வாழ்கிறோம். → நாங்கள் அங்கே வாழ்கிறோம்.", ko: "우리는 퀘벡에 산다. → 우리는 거기 산다.", zh: "我们住在魁北克。→ 我们住在那里。" },
      "Are you going to the doctor's? → Are you going there?": { "fa": "داری می‌روی پیش دکتر؟ → داری می‌روی آنجا؟",  gu: "તું ડૉક્ટર પાસે જાય છે? → તું ત્યાં જાય છે?", hi: "क्या तुम डॉक्टर के पास जा रहे हो? → क्या तुम वहाँ जा रहे हो?", ta: "நீ மருத்துவரிடம் செல்கிறாயா? → நீ அங்கே செல்கிறாயா?", ko: "의사에게 가나요? → 거기 가나요?", zh: "你要去看医生吗？→ 你要去那里吗？" },
      "I think about it.": { "fa": "به آن فکر می‌کنم.",  gu: "હું એના વિશે વિચારું છું.", hi: "मैं उसके बारे में सोचता हूँ।", ta: "நான் அதைப் பற்றி நினைக்கிறேன்.", ko: "나는 그것에 대해 생각한다.", zh: "我想着这件事。" },
      "They play it.": { "fa": "آن‌ها آن را بازی می‌کنند.",  gu: "તેઓ એ રમે છે.", hi: "वे उसे खेलते हैं।", ta: "அவர்கள் அதை விளையாடுகிறார்கள்.", ko: "그들은 그것을 한다.", zh: "他们玩它。" },
      "Do you answer it?": { "fa": "به آن پاسخ می‌دهی؟",  gu: "તું એનો જવાબ આપે છે?", hi: "क्या तुम उसका जवाब देते हो?", ta: "நீ அதற்குப் பதிலளிக்கிறாயா?", ko: "그것에 답하나요?", zh: "你回答它吗？" },
      "We're thinking about it.": { "fa": "ما داریم به آن فکر می‌کنیم.",  gu: "અમે એના વિશે વિચારીએ છીએ.", hi: "हम उसके बारे में सोच रहे हैं।", ta: "நாங்கள் அதைப் பற்றி யோசிக்கிறோம்.", ko: "우리는 그것에 대해 생각하고 있다.", zh: "我们在考虑它。" },
      "I'm going there.": { "fa": "من به آنجا می‌روم.",  gu: "હું ત્યાં જાઉં છું.", hi: "मैं वहाँ जा रहा हूँ।", ta: "நான் அங்கே செல்கிறேன்.", ko: "나는 거기 간다.", zh: "我去那里。" },
      "I'm going to go there.": { "fa": "من قرار است به آنجا بروم.",  gu: "હું ત્યાં જવાનો છું.", hi: "मैं वहाँ जाने वाला हूँ।", ta: "நான் அங்கே செல்லப் போகிறேன்.", ko: "나는 거기 갈 거예요.", zh: "我要去那里。" },
      "I went there.": { "fa": "من به آنجا رفتم.",  gu: "હું ત્યાં ગયો.", hi: "मैं वहाँ गया।", ta: "நான் அங்கே சென்றேன்.", ko: "나는 거기 갔다.", zh: "我去过那里。" },
      "I have to think about it.": { "fa": "باید درباره‌اش فکر کنم.",  gu: "મારે એના વિશે વિચારવું પડશે.", hi: "मुझे उसके बारे में सोचना है।", ta: "நான் அதைப் பற்றி யோசிக்க வேண்டும்.", ko: "나는 그것을 생각해야 한다.", zh: "我得考虑一下。" },
      "I'm not going there.": { "fa": "من به آنجا نمی‌روم.",  gu: "હું ત્યાં જવાનો નથી.", hi: "मैं वहाँ नहीं जा रहा।", ta: "நான் அங்கே செல்லவில்லை.", ko: "나는 거기 가지 않는다.", zh: "我不去那里。" },
      "He doesn't think about it.": { "fa": "او به آن فکر نمی‌کند.",  gu: "એ એના વિશે વિચારતો નથી.", hi: "वो उसके बारे में नहीं सोचता।", ta: "அவர் அதைப் பற்றி நினைப்பதில்லை.", ko: "그는 그것을 생각하지 않는다.", zh: "他不去想它。" },
      "We didn't go there.": { "fa": "ما به آنجا نرفتیم.",  gu: "અમે ત્યાં ગયા નહોતા.", hi: "हम वहाँ नहीं गए।", ta: "நாங்கள் அங்கே செல்லவில்லை.", ko: "우리는 거기 가지 않았다.", zh: "我们没去那里。" },
      "I go there / I think about it.": { "fa": "به آنجا می‌روم / به آن فکر می‌کنم.",  gu: "હું ત્યાં જાઉં / એના વિશે વિચારું.", hi: "मैं वहाँ जाता हूँ / उसके बारे में सोचता हूँ।", ta: "நான் அங்கே செல்கிறேன் / அதைப் பற்றி நினைக்கிறேன்.", ko: "나는 거기 간다 / 그것을 생각한다.", zh: "我去那里 / 我想着它。" },
      "I come from there / I talk about it.": { "fa": "از آنجا می‌آیم / درباره‌اش صحبت می‌کنم.",  gu: "હું ત્યાંથી આવું / એના વિશે વાત કરું.", hi: "मैं वहाँ से आता हूँ / उसके बारे में बात करता हूँ।", ta: "நான் அங்கிருந்து வருகிறேன் / அதைப் பற்றி பேசுகிறேன்.", ko: "나는 거기서 온다 / 그것에 대해 말한다.", zh: "我从那里来 / 我谈论它。" },
      "Do you want coffee? — I want some.": { "fa": "قهوه می‌خواهی؟ — بله، مقداری می‌خواهم.",  gu: "તારે કૉફી જોઈએ? — મારે થોડી જોઈએ.", hi: "क्या तुम्हें कॉफ़ी चाहिए? — मुझे थोड़ी चाहिए।", ta: "உனக்கு காபி வேண்டுமா? — எனக்கு கொஞ்சம் வேண்டும்.", ko: "커피 마실래요? — 좀 마실게요.", zh: "你要咖啡吗？——我要一些。" },
      "I would be": { "fa": "من می‌بودم / می‌شدم",  gu: "હું હોત", hi: "मैं होता", ta: "நான் இருப்பேன் (conditional)", ko: "나는 있을 텐데", zh: "我会是" },
      "I would have": { "fa": "من می‌داشتم",  gu: "મારી પાસે હોત", hi: "मेरे पास होता", ta: "என்னிடம் இருக்கும் (conditional)", ko: "나는 가질 텐데", zh: "我会有" },
      "I would go": { "fa": "من می‌رفتم",  gu: "હું જાત", hi: "मैं जाता", ta: "நான் போவேன் (conditional)", ko: "나는 갈 텐데", zh: "我会去" },
      "I would do": { "fa": "من انجام می‌دادم",  gu: "હું કરત", hi: "मैं करता", ta: "நான் செய்வேன் (conditional)", ko: "나는 할 텐데", zh: "我会做" },
      "I could / I would be able to": { "fa": "می‌توانستم / می‌توانم",  gu: "હું કરી શકત", hi: "मैं कर सकता", ta: "என்னால் முடியும் (conditional)", ko: "나는 할 수 있을 텐데", zh: "我能 / 我会能够" },
      "I would like": { "fa": "دوست دارم / می‌خواهم",  gu: "મને ગમે / જોઈએ", hi: "मैं चाहूँगा", ta: "நான் விரும்புவேன்", ko: "나는 ~하고 싶다", zh: "我想要" },
      "I should / I ought to": { "fa": "باید / بهتر است که",  gu: "મારે કરવું જોઈએ", hi: "मुझे करना चाहिए", ta: "நான் செய்ய வேண்டும்", ko: "나는 ~해야 한다", zh: "我应该" },
      "I would come": { "fa": "من می‌آمدم",  gu: "હું આવત", hi: "मैं आता", ta: "நான் வருவேன் (conditional)", ko: "나는 올 텐데", zh: "我会来" },
      "I would like a coffee.": { "fa": "یک قهوه می‌خواستم.",  gu: "મને એક કૉફી જોઈએ.", hi: "मुझे एक कॉफ़ी चाहिए।", ta: "எனக்கு ஒரு காபி வேண்டும்.", ko: "커피 한 잔 주세요.", zh: "我想要一杯咖啡。" },
      "Could you help me?": { "fa": "می‌توانید به من کمک کنید؟",  gu: "શું તમે મને મદદ કરી શકો?", hi: "क्या आप मेरी मदद कर सकते हैं?", ta: "நீங்கள் எனக்கு உதவ முடியுமா?", ko: "저를 도와주시겠어요?", zh: "您能帮我吗？" },
      "Would you have the time?": { "fa": "وقت دارید؟",  gu: "શું તમારી પાસે સમય હશે?", hi: "क्या आपके पास समय होगा?", ta: "உங்களிடம் நேரம் இருக்குமா?", ko: "시간 있으세요?", zh: "您有时间吗？" },
      "If I had money, I would travel.": { "fa": "اگر پول داشتم، سفر می‌کردم.",  gu: "જો મારી પાસે પૈસા હોત, તો હું ફરવા જાત.", hi: "अगर मेरे पास पैसे होते, तो मैं घूमने जाता।", ta: "என்னிடம் பணம் இருந்தால், நான் பயணம் செய்வேன்.", ko: "돈이 있다면 나는 여행할 텐데.", zh: "如果我有钱，我会去旅行。" },
      "If you studied, you would succeed.": { "fa": "اگر درس می‌خواندی، موفق می‌شدی.",  gu: "જો તું ભણત, તો સફળ થાત.", hi: "अगर तुम पढ़ते, तो सफल होते।", ta: "நீ படித்திருந்தால் வெற்றி பெறுவாய்.", ko: "공부한다면 성공할 텐데.", zh: "你若用功就会成功。" },
      "We would go to the beach if it were nice out.": { "fa": "اگر هوا خوب بود می‌رفتیم ساحل.",  gu: "જો હવામાન સારું હોત, તો અમે બીચ પર જાત.", hi: "अगर मौसम अच्छा होता, तो हम बीच जाते।", ta: "வானிலை நன்றாக இருந்தால் நாங்கள் கடற்கரைக்குச் செல்வோம்.", ko: "날씨가 좋다면 우리는 해변에 갈 텐데.", zh: "天气好的话我们会去海滩。" },
      "I would love to visit Paris. (wish)": { "fa": "خیلی دوست دارم پاریس را ببینم. (آرزو)",  gu: "મને પેરિસ ફરવા ખૂબ ગમે. (wish)", hi: "मुझे पेरिस घूमना बहुत पसंद होगा। (wish)", ta: "நான் பாரிஸ் பார்க்க மிகவும் விரும்புவேன். (wish)", ko: "파리를 방문하고 싶어요. (소망)", zh: "我很想去巴黎。（愿望）" },
      "You should rest. (advice)": { "fa": "باید استراحت کنید. (توصیه)",  gu: "તારે આરામ કરવો જોઈએ. (advice)", hi: "तुम्हें आराम करना चाहिए। (advice)", ta: "நீ ஓய்வெடுக்க வேண்டும். (advice)", ko: "쉬는 게 좋아요. (조언)", zh: "你应该休息。（建议）" },
      "We could go to the movies. (suggestion)": { "fa": "می‌توانیم برویم سینما. (پیشنهاد)",  gu: "અમે સિનેમા જઈ શકીએ. (suggestion)", hi: "हम फ़िल्म देखने जा सकते हैं। (suggestion)", ta: "நாங்கள் சினிமாவுக்குச் செல்லலாம். (suggestion)", ko: "영화 보러 갈 수도 있어요. (제안)", zh: "我们可以去看电影。（建议）" },
      "I wouldn't want to leave.": { "fa": "نمی‌خواهم بروم.",  gu: "મને જવું ન ગમે.", hi: "मैं जाना नहीं चाहूँगा।", ta: "நான் கிளம்ப விரும்ப மாட்டேன்.", ko: "나는 떠나고 싶지 않을 거예요.", zh: "我不想离开。" },
      "He wouldn't come.": { "fa": "او نمی‌آمد.",  gu: "એ ન આવત.", hi: "वो नहीं आता।", ta: "அவர் வர மாட்டார்.", ko: "그는 오지 않을 거예요.", zh: "他不会来。" },
      "You shouldn't stay.": { "fa": "نباید بمانی.",  gu: "તારે રહેવું ન જોઈએ.", hi: "तुम्हें नहीं रुकना चाहिए।", ta: "நீ தங்கக் கூடாது.", ko: "당신은 머물지 않는 게 좋아요.", zh: "你不该留下。" },
      "(while/by) being": { "fa": "(در حال/با) بودن",  gu: "હોવાથી / હોતાં", hi: "होते हुए / होकर", ta: "இருக்கும்போது / இருந்து", ko: "~이면서/~함으로써", zh: "（在/通过）是/存在时" },
      "(while/by) having": { "fa": "(در حال/با) داشتن",  gu: "પાસે હોવાથી / હોતાં", hi: "रखते हुए / होकर", ta: "வைத்திருக்கும்போது / மூலம்", ko: "~을 가지면서/가짐으로써", zh: "（在/通过）拥有时" },
      "(while/by) knowing": { "fa": "(در حال/با) دانستن",  gu: "જાણતાં / જાણીને", hi: "जानते हुए / जानकर", ta: "அறிந்திருக்கும்போது / அறிந்து", ko: "~을 알면서/앎으로써", zh: "（在/通过）知道时" },
      "I eat while watching TV.": { "fa": "من هنگام تماشای تلویزیون غذا می‌خورم.",  gu: "હું ટીવી જોતાં જોતાં ખાઉં છું.", hi: "मैं टीवी देखते हुए खाता हूँ।", ta: "நான் டிவி பார்த்தபடி சாப்பிடுகிறேன்.", ko: "나는 TV를 보면서 먹는다.", zh: "我边看电视边吃饭。" },
      "She sings while working.": { "fa": "او هنگام کار کردن آواز می‌خواند.",  gu: "એ કામ કરતાં કરતાં ગાય છે.", hi: "वो काम करते हुए गाती है।", ta: "அவள் வேலை செய்தபடி பாடுகிறாள்.", ko: "그녀는 일하면서 노래한다.", zh: "她边工作边唱歌。" },
      "He fell while running.": { "fa": "او هنگام دویدن افتاد.",  gu: "એ દોડતાં દોડતાં પડ્યો.", hi: "वो दौड़ते हुए गिर गया।", ta: "அவர் ஓடும்போது விழுந்தார்.", ko: "그는 달리다가 넘어졌다.", zh: "他跑步时摔倒了。" },
      "You learn by practicing.": { "fa": "شما با تمرین کردن یاد می‌گیرید.",  gu: "અભ્યાસ કરીને શીખાય છે.", hi: "अभ्यास करके सीखते हैं।", ta: "பயிற்சி செய்வதன் மூலம் கற்கிறாய்.", ko: "연습함으로써 배운다.", zh: "通过练习来学习。" },
      "He succeeded by working hard.": { "fa": "او با تلاش سخت موفق شد.",  gu: "એ મહેનત કરીને સફળ થયો.", hi: "उसने मेहनत करके सफलता पाई।", ta: "கடினமாக உழைத்ததன் மூலம் அவர் வெற்றி பெற்றார்.", ko: "그는 열심히 일해서 성공했다.", zh: "他通过努力工作而成功。" },
      "You improve by speaking every day.": { "fa": "با هر روز صحبت کردن پیشرفت می‌کنید.",  gu: "દરરોજ બોલીને તું સુધરે છે.", hi: "रोज़ बोलकर तुम बेहतर होते हो।", ta: "தினமும் பேசுவதன் மூலம் நீ முன்னேறுகிறாய்.", ko: "매일 말함으로써 향상된다.", zh: "每天说话让你进步。" },
      "On arriving, I saw Marie.": { "fa": "به محض رسیدن، ماری را دیدم.",  gu: "પહોંચતાં જ મેં મારીને જોઈ.", hi: "पहुँचते ही मैंने मारी को देखा।", ta: "வந்தவுடன் நான் மாரியைப் பார்த்தேன்.", ko: "도착하면서 나는 마리를 봤다.", zh: "一到达我就看见了玛丽。" },
      "He talks while eating.": { "fa": "او در حین غذا خوردن صحبت می‌کند.",  gu: "એ ખાતાં ખાતાં વાત કરે છે.", hi: "वो खाते हुए बात करता है।", ta: "அவர் சாப்பிட்டபடி பேசுகிறார்.", ko: "그는 먹으면서 이야기한다.", zh: "他边吃边说话。" },
      "He left without saying goodbye.": { "fa": "او بدون خداحافظی رفت.",  gu: "એ આવજો કહ્યા વગર જતો રહ્યો.", hi: "वो अलविदा कहे बिना चला गया।", ta: "அவர் விடைபெறாமல் சென்றுவிட்டார்.", ko: "그는 작별 인사 없이 떠났다.", zh: "他没说再见就走了。" },
      "Aren't you coming?": { "fa": "نمی‌آیی؟",  gu: "તું આવતો/આવતી નથી?", hi: "क्या तुम नहीं आ रहे?", ta: "நீ வரவில்லையா?", ko: "오지 않을 거예요?", zh: "你不来吗？" },
      "Can I help you?": { "fa": "می‌توانم کمکتان کنم؟",  gu: "હું તમારી મદદ કરી શકું?", hi: "क्या मैं आपकी मदद कर सकता/सकती हूँ?", ta: "நான் உங்களுக்கு உதவட்டுமா?", ko: "도와드릴까요?", zh: "我能帮您吗？" },
      "Can you repeat, please?": { "fa": "می‌توانید تکرار کنید، لطفاً؟",  gu: "કૃપા કરીને ફરી કહો?", hi: "कृपया दोबारा कहें?", ta: "தயவுசெய்து மீண்டும் சொல்லுங்கள்?", ko: "다시 말씀해 주시겠어요?", zh: "请您再说一遍好吗？" },
      "Did you work yesterday?": { "fa": "دیروز کار کردی؟",  gu: "શું તમે ગઈ કાલે કામ કર્યું?", hi: "क्या आपने कल काम किया?", ta: "நீங்கள் நேற்று வேலை செய்தீர்களா?", ko: "어제 일했어요?", zh: "你昨天工作了吗？" },
      "Do you want to come with us?": { "fa": "می‌خواهی با ما بیایی؟",  gu: "શું તમે અમારી સાથે આવવા માંગો?", hi: "क्या आप हमारे साथ आना चाहते हैं?", ta: "நீங்கள் எங்களுடன் வர விரும்புகிறீர்களா?", ko: "우리와 함께 오실래요?", zh: "你想和我们一起来吗？" },
      "Don't be afraid.": { "fa": "نترس.",  gu: "ડરશો નહીં.", hi: "डरो मत।", ta: "பயப்படாதீர்கள்.", ko: "두려워하지 마세요.", zh: "不要害怕。" },
      "Don't forget your keys.": { "fa": "کلیدهایت را فراموش نکن.",  gu: "ચાવી ભૂલશો નહીં.", hi: "अपनी चाबियाँ मत भूलो।", ta: "உங்கள் சாவிகளை மறக்காதீர்கள்.", ko: "열쇠 잊지 마세요.", zh: "别忘了你的钥匙。" },
      "Don't speak so fast!": { "fa": "این‌قدر سریع صحبت نکن!",  gu: "એટલા ઝડપથી ન બોલો!", hi: "इतनी तेज़ मत बोलो!", ta: "அவ்வளவு வேகமாக பேசாதீர்கள்!", ko: "너무 빨리 말하지 마세요!", zh: "不要说得那么快！" },
      "Don't touch!": { "fa": "دست نزن!",  gu: "સ્પર્શ ન કરો!", hi: "छुओ मत!", ta: "தொடாதீர்கள்!", ko: "만지지 마세요!", zh: "不要碰！" },
      "Don't you like that?": { "fa": "از آن خوشت نمی‌آید؟",  gu: "શું તમને એ ગમતું નથી?", hi: "क्या आपको वो पसंद नहीं?", ta: "உங்களுக்கு அது பிடிக்கவில்லையா?", ko: "그게 마음에 안 드세요?", zh: "你不喜欢那个吗？" },
      "He calls us.": { "fa": "او به ما زنگ می‌زند.",  gu: "એ અમને ફોન કરે છે.", hi: "वो हमें फ़ोन करता है।", ta: "அவர் எங்களை அழைக்கிறார்.", ko: "그는 우리에게 전화해요.", zh: "他给我们打电话。" },
      "He doesn't have his friends with him.": { "fa": "دوستانش همراهش نیستند.",  gu: "એની પાસે એના મિત્રો નથી.", hi: "उसके पास उसके दोस्त नहीं हैं।", ta: "அவரிடம் அவரது நண்பர்கள் இல்லை.", ko: "그에게 친구들이 없어요.", zh: "他朋友不在他身边。" },
      "He doesn't have to leave.": { "fa": "او مجبور نیست برود.",  gu: "એણે જવું જ જોઈએ એ ન.", hi: "उसे जाना ज़रूरी नहीं।", ta: "அவர் செல்ல வேண்டியதில்லை.", ko: "그는 떠날 필요 없어요.", zh: "他不必离开。" },
      "He doesn't like the cold.": { "fa": "او سرما را دوست ندارد.",  gu: "એને ઠંડી ગમતી નથી.", hi: "उसे ठंड पसंद नहीं।", ta: "அவருக்கு குளிர் பிடிக்காது.", ko: "그는 추위를 싫어해요.", zh: "他不喜欢寒冷。" },
      "He doesn't wait for the bus.": { "fa": "او منتظر اتوبوس نمی‌ماند.",  gu: "એ બસ માટે રાહ નથી જોતો.", hi: "वो बस का इंतज़ार नहीं करता।", ta: "அவர் பஸ்ஸுக்காக காத்திருப்பதில்லை.", ko: "그는 버스를 기다리지 않아요.", zh: "他不等公交车。" },
      "He finished the project.": { "fa": "او پروژه را تمام کرد.",  gu: "એણે પ્રોજેક્ટ પૂરો કર્યો.", hi: "उसने प्रोजेक्ट पूरा किया।", ta: "அவர் திட்டத்தை முடித்தார்.", ko: "그는 프로젝트를 완성했어요.", zh: "他完成了项目。" },
      "He has no friends.": { "fa": "او هیچ دوستی ندارد.",  gu: "એના કોઈ મિત્ર નથી.", hi: "उसका कोई दोस्त नहीं।", ta: "அவருக்கு நண்பர்கள் இல்லை.", ko: "그는 친구가 없어요.", zh: "他没有朋友。" },
      "He speaks to me.": { "fa": "او با من صحبت می‌کند.",  gu: "એ મારી સાથે વાત કરે છે.", hi: "वो मुझसे बात करता है।", ta: "அவர் என்னிடம் பேசுகிறார்.", ko: "그는 나에게 말해요.", zh: "他跟我说话。" },
      "Her boyfriend's name is Marc. (son = her/his)": { "fa": "نام دوست‌پسرش مارک است.",  gu: "એના બોયફ્રેન્ડનું નામ માર્ક છે. (son = તેના/તેની)", hi: "उसके boyfriend का नाम Marc है।", ta: "அவளுடைய boyfriend பெயர் Marc.", ko: "그녀의 남자친구 이름은 Marc예요.", zh: "她男朋友叫Marc。（son=他/她的）" },
      "His girlfriend's name is Sophie. (sa = his/her)": { "fa": "نام دوست‌دخترش سوفی است.",  gu: "એની ગર્લફ્રેન્ડનું નામ સોફી છે. (sa = તેના/તેની)", hi: "उसकी girlfriend का नाम Sophie है।", ta: "அவனுடைய girlfriend பெயர் Sophie.", ko: "그의 여자친구 이름은 Sophie예요.", zh: "他女朋友叫Sophie。（sa=他/她的）" },
      "How": { "fa": "چگونه / چطور",  gu: "કેવી રીતે", hi: "कैसे", ta: "எப்படி", ko: "어떻게", zh: "怎么" },
      "How do you say … in French?": { "fa": "در زبان فرانسوی چطور می‌گویید …؟",  gu: "ફ્રેન્ચમાં … કેમ કહે?", hi: "फ्रेंच में … कैसे कहते हैं?", ta: "பிரெஞ்சில் … எப்படி சொல்வார்கள்?", ko: "프랑스어로 …를 어떻게 해요?", zh: "……法语怎么说？" },
      "How many people are there?": { "fa": "چند نفر آنجا هستند؟",  gu: "ત્યાં કેટલા લોકો છે?", hi: "वहाँ कितने लोग हैं?", ta: "அங்கு எத்தனை பேர் இருக்கிறார்கள்?", ko: "거기 사람이 몇 명 있어요?", zh: "那里有多少人？" },
      "How much/many": { "fa": "چقدر / چندتا",  gu: "કેટલો/કેટલા", hi: "कितना/कितने", ta: "எவ்வளவு/எத்தனை", ko: "얼마나/몇", zh: "多少" },
      "I answer you.": { "fa": "من به تو پاسخ می‌دهم.",  gu: "હું તમને જવાબ આપું છું.", hi: "मैं आपको जवाब देता/देती हूँ।", ta: "நான் உங்களுக்கு பதில் சொல்கிறேன்.", ko: "저는 당신에게 대답해요.", zh: "我回答你。" },
      "I ate a poutine.": { "fa": "من یک پوتین خوردم.",  gu: "મેં પૌટીન ખાધો.", hi: "मैंने एक पौटीन खाया।", ta: "நான் ஒரு poutine சாப்பிட்டேன்.", ko: "저는 푸틴을 먹었어요.", zh: "我吃了一份肉汁薯条。" },
      "I can't come.": { "fa": "نمی‌توانم بیایم.",  gu: "હું આવી નથી શકતો/શકતી.", hi: "मैं नहीं आ सकता/सकती।", ta: "என்னால் வர முடியாது.", ko: "저는 올 수 없어요.", zh: "我不能来。" },
      "I can't speak right now.": { "fa": "الان نمی‌توانم صحبت کنم.",  gu: "હું અત્યારે વાત નથી કરી શકતો.", hi: "मैं अभी बात नहीं कर सकता।", ta: "என்னால் இப்போது பேச முடியாது.", ko: "저는 지금 말할 수 없어요.", zh: "我现在不能说话。" },
      "I come from the office.": { "fa": "من از اداره می‌آیم.",  gu: "હું ઓફિસ પરથી આવ્યો/આવી.", hi: "मैं ऑफिस से आया/आई हूँ।", ta: "நான் அலுவலகத்திலிருந்து வருகிறேன்.", ko: "저는 사무실에서 왔어요.", zh: "我从办公室来。" },
      "I didn't eat.": { "fa": "من غذا نخوردم.",  gu: "મેં ખાધું ન હતું.", hi: "मैंने नहीं खाया।", ta: "நான் சாப்பிடவில்லை.", ko: "저는 먹지 않았어요.", zh: "我没吃。" },
      "I don't have a car.": { "fa": "من ماشین ندارم.",  gu: "મારી પાસે ગાડી નથી.", hi: "मेरे पास कार नहीं है।", ta: "என்னிடம் கார் இல்லை.", ko: "저는 차가 없어요.", zh: "我没有车。" },
      "I don't have my car.": { "fa": "من ماشینم را ندارم.",  gu: "મારી ગાડી મારી પાસે નથી.", hi: "मेरी कार मेरे पास नहीं है।", ta: "என்னுடைய கார் என்னிடம் இல்லை.", ko: "제 차가 제게 없어요.", zh: "我的车不在我这里。" },
      "I don't speak English.": { "fa": "من انگلیسی صحبت نمی‌کنم.",  gu: "હું અંગ્રેજી નથી બોલતો/બોલતી.", hi: "मैं अंग्रेज़ी नहीं बोलता/बोलती।", ta: "நான் ஆங்கிலம் பேசுவதில்லை.", ko: "저는 영어를 못해요.", zh: "我不说英语。" },
      "I don't speak French.": { "fa": "من فرانسوی صحبت نمی‌کنم.",  gu: "હું ફ્રેન્ચ નથી બોલતો/બોલતી.", hi: "मैं फ्रेंच नहीं बोलता/बोलती।", ta: "நான் பிரெஞ்சு பேசுவதில்லை.", ko: "저는 프랑스어를 못해요.", zh: "我不说法语。" },
      "I don't understand.": { "fa": "متوجه نمی‌شوم / نمی‌فهمم.",  gu: "મને સમજ ન પડ્યું.", hi: "मुझे समझ नहीं आया।", ta: "எனக்கு புரியவில்லை.", ko: "저는 이해를 못했어요.", zh: "我不明白。" },
      "I eat an apple.": { "fa": "من یک سیب می‌خورم.",  gu: "હું સફરજન ખાઉં છું.", hi: "मैं एक सेब खाता/खाती हूँ।", ta: "நான் ஒரு ஆப்பிள் சாப்பிடுகிறேன்.", ko: "저는 사과를 먹어요.", zh: "我吃一个苹果。" },
      "I eat it.": { "fa": "من آن را می‌خورم.",  gu: "હું એ ખાઉં છું.", hi: "मैं इसे खाता/खाती हूँ।", ta: "நான் அதை சாப்பிடுகிறேன்.", ko: "저는 그것을 먹어요.", zh: "我吃它。" },
      "I explain to him/her.": { "fa": "من برای او توضیح می‌دهم.",  gu: "હું એને સમજાવું છું.", hi: "मैं उसे समझाता/समझाती हूँ।", ta: "நான் அவருக்கு விளக்குகிறேன்.", ko: "저는 그에게 설명해요.", zh: "我给他/她解释。" },
      "I finish": { "fa": "من تمام می‌کنم",  gu: "હું પૂરું કરું છું", hi: "मैं खत्म करता/करती हूँ", ta: "நான் முடிக்கிறேன்", ko: "저는 끝내요", zh: "我完成" },
      "I give you the book.": { "fa": "کتاب را به تو می‌دهم.",  gu: "હું તમને પુસ્તક આપું છું.", hi: "मैं आपको किताब देता/देती हूँ।", ta: "நான் உங்களுக்கு புத்தகம் தருகிறேன்.", ko: "저는 당신에게 책을 드려요.", zh: "我把书给你。" },
      "I hear you.": { "fa": "صدایت را می‌شنوم.",  gu: "મને તમારો અવાજ સંભળાય છે.", hi: "मैं आपको सुन रहा/रही हूँ।", ta: "நான் உங்களை கேட்கிறேன்.", ko: "저는 당신의 말이 들려요.", zh: "我听到你说的了。" },
      "I know her/it.": { "fa": "او را می‌شناسم / آن را بلدم.",  gu: "હું એને ઓળખું છું.", hi: "मैं उसे जानता/जानती हूँ।", ta: "நான் அவளை/அதை அறிவேன்.", ko: "저는 그녀/그것을 알아요.", zh: "我认识她/知道它。" },
      "I know how to speak a little French.": { "fa": "من بلدم کمی فرانسوی صحبت کنم.",  gu: "હું થોડું ફ્રેન્ચ બોલી શકું.", hi: "मैं थोड़ा फ्रेंच बोलना जानता/जानती हूँ।", ta: "எனக்கு கொஞ்சம் பிரெஞ்சு பேசத் தெரியும்.", ko: "저는 프랑스어를 조금 할 줄 알아요.", zh: "我会说一点法语。" },
      "I love them.": { "fa": "من دوستشان دارم.",  gu: "હું એમને પ્રેમ કરું છું.", hi: "मैं उनसे प्यार करता/करती हूँ।", ta: "நான் அவர்களை நேசிக்கிறேன்.", ko: "저는 그들을 사랑해요.", zh: "我爱他们。" },
      "I say hello to them.": { "fa": "من به آن‌ها سلام می‌کنم.",  gu: "હું એમને નમસ્તે કહું છું.", hi: "मैं उन्हें नमस्ते कहता/कहती हूँ।", ta: "நான் அவர்களுக்கு வணக்கம் சொல்கிறேன்.", ko: "저는 그들에게 인사해요.", zh: "我向他们打招呼。" },
      "I see you.": { "fa": "من شما را می‌بینم.",  gu: "હું તમને જોઉ છું.", hi: "मैं आपको देख रहा/रही हूँ।", ta: "நான் உங்களை பார்க்கிறேன்.", ko: "저는 당신이 보여요.", zh: "我看见你。" },
      "I speak": { "fa": "من صحبت می‌کنم",  gu: "હું બોલું છું", hi: "मैं बोलता/बोलती हूँ", ta: "நான் பேசுகிறேன்", ko: "저는 말해요", zh: "我说" },
      "I speak a little French.": { "fa": "من کمی فرانسوی صحبت می‌کنم.",  gu: "હું થોડું ફ્રેન્ચ બોલું છું.", hi: "मैं थोड़ा फ्रेंच बोलता/बोलती हूँ।", ta: "நான் கொஞ்சம் பிரெஞ்சு பேசுகிறேன்.", ko: "저는 프랑스어를 조금 해요.", zh: "我说一点法语。" },
      "I wait": { "fa": "من صبر می‌کنم / منتظر می‌مانم",  gu: "હું રાહ જોઉં છું", hi: "मैं इंतज़ार करता/करती हूँ", ta: "நான் காத்திருக்கிறேன்", ko: "저는 기다려요", zh: "我等待" },
      "I work with them.": { "fa": "من با آن‌ها کار می‌کنم.",  gu: "હું એમની સાથે કામ કરું છું.", hi: "मैं उनके साथ काम करता/करती हूँ।", ta: "நான் அவர்களுடன் வேலை செய்கிறேன்.", ko: "저는 그들과 함께 일해요.", zh: "我和他们一起工作。" },
      "I'm going to eat.": { "fa": "من دارم می‌روم غذا بخورم.",  gu: "હું ખાવા જઈ રહ્યો/રહી છું.", hi: "मैं खाने वाला/वाली हूँ।", ta: "நான் சாப்பிடப் போகிறேன்.", ko: "저는 먹으러 갈 거예요.", zh: "我要去吃饭。" },
      "I'm going to his place.": { "fa": "من دارم می‌روم خانه‌اش.",  gu: "હું એને ઘરે જઈ રહ્યો/રહી.", hi: "मैं उसके घर जा रहा/रही हूँ।", ta: "நான் அவரது இடத்திற்கு போகிறேன்.", ko: "저는 그의 집에 가요.", zh: "我去他那里。" },
      "I'm going to school.": { "fa": "من دارم می‌روم مدرسه.",  gu: "હું સ્કૂલ જઈ રહ્યો/રહી.", hi: "मैं स्कूल जा रहा/रही हूँ।", ta: "நான் பள்ளிக்கு போகிறேன்.", ko: "저는 학교에 가요.", zh: "我去学校。" },
      "I'm going to the bank.": { "fa": "من دارم می‌روم بانک.",  gu: "હું બેંક જઈ રહ્યો/રહી.", hi: "मैं बैंक जा रहा/रही हूँ।", ta: "நான் வங்கிக்கு போகிறேன்.", ko: "저는 은행에 가요.", zh: "我去银行。" },
      "I'm going to the market.": { "fa": "من دارم می‌روم بازار.",  gu: "હું બજારે જઈ રહ્યો/રહી.", hi: "मैं बाज़ार जा रहा/रही हूँ।", ta: "நான் சந்தைக்கு போகிறேன்.", ko: "저는 시장에 가요.", zh: "我去市场。" },
      "I'm not going to eat.": { "fa": "من غذا نخواهم خورد.",  gu: "હું ખાવાનો/ખાવાની નથી.", hi: "मैं नहीं खाऊंगा/खाऊंगी।", ta: "நான் சாப்பிடப் போவதில்லை.", ko: "저는 먹지 않을 거예요.", zh: "我不打算吃。" },
      "I'm talking about the problems.": { "fa": "من درباره مشکلات صحبت می‌کنم.",  gu: "હું સમસ્યાઓ વિશે વાત કરું.", hi: "मैं समस्याओं के बारे में बात कर रहा/रही हूँ।", ta: "நான் பிரச்சனைகளைப் பற்றி பேசுகிறேன்.", ko: "저는 문제들에 대해 이야기해요.", zh: "我在谈问题。" },
      "I'm talking to the students.": { "fa": "من با دانشجویان صحبت می‌کنم.",  gu: "હું વિદ્યાર્થીઓ સાથે વાત કરું.", hi: "मैं छात्रों से बात कर रहा/रही हूँ।", ta: "நான் மாணவர்களிடம் பேசுகிறேன்.", ko: "저는 학생들에게 이야기해요.", zh: "我在跟学生们说话。" },
      "I'm thinking of you.": { "fa": "به تو فکر می‌کنم.",  gu: "હું તમારા વિશે વિચારું છું.", hi: "मैं आपके बारे में सोच रहा/रही हूँ।", ta: "நான் உங்களை நினைக்கிறேன்.", ko: "저는 당신을 생각해요.", zh: "我在想你。" },
      "Is it far from here?": { "fa": "از اینجا دور است؟",  gu: "અહીંથી દૂર છે?", hi: "यहाँ से दूर है?", ta: "இங்கிருந்து தூரமா?", ko: "여기서 멀어요?", zh: "离这里远吗？" },
      "It is 2:30 PM.": { "fa": "ساعت دو و نیم بعد از ظهر است.",  gu: "બપોરે 2:30 છે.", hi: "दोपहर के 2:30 बजे हैं।", ta: "பிற்பகல் 2:30 ஆகிறது.", ko: "오후 2시 30분이에요.", zh: "下午2点30分。" },
      "It is half past three.": { "fa": "ساعت سه و نیم است.",  gu: "સાડા ત્રણ વાગ્યા છે.", hi: "साढ़े तीन बजे हैं।", ta: "மூன்றரை ஆகிறது.", ko: "3시 반이에요.", zh: "三点半。" },
      "It is midnight.": { "fa": "ساعت دوازده شب (نیمه‌شب) است.",  gu: "મધ્ય રાત્રિ છે.", hi: "आधी रात हो गई है।", ta: "நள்ளிரவு ஆகிறது.", ko: "자정이에요.", zh: "现在是午夜。" },
      "It is noon.": { "fa": "ساعت دوازده ظهر است.",  gu: "બપોર છે.", hi: "दोपहर हो गई है।", ta: "மதியம் ஆகிறது.", ko: "정오예요.", zh: "现在是正午。" },
      "It is one o'clock.": { "fa": "ساعت یک است.",  gu: "એક વાગ્યો છે.", hi: "एक बजा है।", ta: "ஒரு மணி ஆகிறது.", ko: "1시예요.", zh: "现在一点钟。" },
      "It is quarter past two.": { "fa": "ساعت دو و ربع است.",  gu: "સવા બે વાગ્યા છે.", hi: "पौने दो बजे हैं।", ta: "இரண்டரை கால் ஆகிறது.", ko: "2시 15분이에요.", zh: "两点十五分。" },
      "It is quarter to five.": { "fa": "ساعت یک ربع به پنج است.",  gu: "પોણા પાંચ વાગ્યા છે.", hi: "पाँच बजने में पंद्रह मिनट हैं।", ta: "ஐந்து மணிக்கு கால் குறைவு.", ko: "4시 45분이에요.", zh: "四点四十五分。" },
      "It's cold, isn't it?": { "fa": "هوا سرده، نه؟",  gu: "ઠંડી છે, ને?", hi: "ठंड है, है ना?", ta: "குளிராக இருக்கிறது, இல்லையா?", ko: "춥죠, 그렇죠?", zh: "很冷，不是吗？" },
      "It's for you.": { "fa": "برای شماست.",  gu: "એ તમારા માટે છે.", hi: "यह आपके लिए है।", ta: "இது உங்களுக்கானது.", ko: "이것은 당신을 위한 거예요.", zh: "这是给你的。" },
      "It's going to snow tomorrow.": { "fa": "فردا برف خواهد بارید.",  gu: "કાલે બરફ પડશે.", hi: "कल बर्फ पड़ेगी।", ta: "நாளை பனி பெய்யும்.", ko: "내일 눈이 올 거예요.", zh: "明天会下雪。" },
      "It's good! / That's great!": { "fa": "عالیه! / خیلی خوبه!",  gu: "સરસ! / ખૂબ સ!", hi: "बढ़िया! / बहुत अच्छा!", ta: "நன்றாக இருக்கிறது! / அருமை!", ko: "좋아요! / 훌륭해요!", zh: "很好！/ 太棒了！" },
      "It's me! / I (emphatic) love that.": { "fa": "منم! / من که عاشقشم.",  gu: "હું! / મને ખૂબ ગમે!", hi: "मैं! / मुझे बहुत पसंद है!", ta: "நான்! / எனக்கு மிகவும் பிடிக்கும்!", ko: "나예요! / 나는 정말 좋아해요!", zh: "是我！/ 我（强调）很喜欢那个。" },
      "It's my apartment. (m.)": { "fa": "آپارتمان من است.",  gu: "એ મારો ફ્લૅટ છે. (પુ.)", hi: "यह मेरा अपार्टमेंट है। (m.)", ta: "இது என் அபார்ட்மெண்ட். (m.)", ko: "이것은 제 아파트예요. (남성)", zh: "这是我的公寓。（阳性）" },
      "It's my car. (f.)": { "fa": "ماشین من است.",  gu: "એ મારી ગાડી છે. (સ્ત્રી.)", hi: "यह मेरी कार है। (f.)", ta: "இது என் கார். (f.)", ko: "이것은 제 차예요. (여성)", zh: "这是我的车。（阴性）" },
      "It's not a problem. (un stays after c'est)": { "fa": "مشکلی نیست.",  gu: "એ કોઈ સમસ્યા નથી. (c'est પછી un રહે છે)", hi: "यह कोई समस्या नहीं। (un रहता)", ta: "இது பிரச்சனை இல்லை. (un stays)", ko: "문제 없어요. (un 유지)", zh: "这不是问题。（c'est后un不变）" },
      "It's not far.": { "fa": "دور نیست.",  gu: "દૂર નથી.", hi: "ज़्यादा दूर नहीं है।", ta: "தூரமில்லை.", ko: "멀지 않아요.", zh: "不远。" },
      "It's not serious. / No worries.": { "fa": "مهم نیست. / نگران نباشید.",  gu: "ચિંતા ન કરો.", hi: "कोई बात नहीं।", ta: "பரவாயில்லை.", ko: "괜찮아요. / 걱정 마세요.", zh: "没关系。" },
      "It's us!": { "fa": "ماییم!",  gu: "અમે!", hi: "हम हैं!", ta: "நாங்கள்!", ko: "우리예요!", zh: "是我们！" },
      "She didn't come.": { "fa": "او نیامد.",  gu: "એ આવી ન હતી.", hi: "वो नहीं आई।", ta: "அவள் வரவில்லை.", ko: "그녀는 오지 않았어요.", zh: "她没来。" },
      "She loves Montreal.": { "fa": "او عاشق مونترال است.",  gu: "તે મોન્ટ્રિયલને ચાહે છે.", hi: "वो मॉन्ट्रियल से प्यार करती है।", ta: "அவள் Montreal-ஐ விரும்புகிறாள்.", ko: "그녀는 몬트리올을 좋아해요.", zh: "她热爱蒙特利尔。" },
      "She talks about herself.": { "fa": "او درباره خودش صحبت می‌کند.",  gu: "એ પોતાની વાત કરે છે.", hi: "वो अपने बारे में बात करती है।", ta: "அவள் தன்னைப் பற்றி பேசுகிறாள்.", ko: "그녀는 자신에 대해 이야기해요.", zh: "她谈论自己。" },
      "She writes to us.": { "fa": "او برای ما می‌نویسد.",  gu: "તે અમને પત્ર લખે છે.", hi: "वो हमें लिखती है।", ta: "அவள் எங்களுக்கு எழுதுகிறாள்.", ko: "그녀는 우리에게 편지를 써요.", zh: "她给我们写信。" },
      "There are people everywhere.": { "fa": "همه‌جا آدم هست.",  gu: "બધે જ લોકો છે.", hi: "हर जगह लोग हैं।", ta: "எல்லா இடத்திலும் மக்கள் இருக்கிறார்கள்.", ko: "어디에나 사람들이 있어요.", zh: "到处都是人。" },
      "There's a corner store on the corner.": { "fa": "سر گوشه یک سوپرمارکت محلی (دپانو) هست.",  gu: "ખૂણે એક દુકાન છે.", hi: "कोने पर एक दुकान है।", ta: "மூலையில் ஒரு கடை இருக்கிறது.", ko: "모퉁이에 편의점이 있어요.", zh: "拐角处有一家便利店。" },
      "There's no room / no space.": { "fa": "هیچ جایی نیست.",  gu: "જગ્યા નથી.", hi: "कोई जगह नहीं है।", ta: "இடம் இல்லை.", ko: "자리가 없어요.", zh: "没有空间/地方。" },
      "There's no room. (une → de)": { "fa": "هیچ اتاقی / جایی نیست.",  gu: "જગ્યા નથી. (une → de)", hi: "कोई जगह नहीं। (une → de)", ta: "இடமில்லை. (une → de)", ko: "자리 없어요. (une→de)", zh: "没地方。（une变de）" },
      "There's no time. (du → de)": { "fa": "وقتی نمانده است.",  gu: "સમય નથી. (du → de)", hi: "कोई समय नहीं। (du → de)", ta: "நேரமில்லை. (du → de)", ko: "시간 없어요. (du→de)", zh: "没时间。（du变de）" },
      "These are my keys. (pl.)": { "fa": "این‌ها کلیدهای من هستند.",  gu: "આ મારી ચાવીઓ છે. (બહુ.)", hi: "ये मेरी चाबियाँ हैं। (pl.)", ta: "இவை என் சாவிகள். (pl.)", ko: "이것은 내 열쇠들이에요. (복수)", zh: "这些是我的钥匙。（复数）" },
      "They don't go to the market.": { "fa": "آن‌ها به بازار نمی‌روند.",  gu: "એ બજારે નથી જતા.", hi: "वो बाज़ार नहीं जाते।", ta: "அவர்கள் சந்தைக்கு போவதில்லை.", ko: "그들은 시장에 가지 않아요.", zh: "他们不去市场。" },
      "We can't go in.": { "fa": "نمی‌توانیم وارد شویم.",  gu: "અમે અંદર ન જઈ શકીએ.", hi: "हम अंदर नहीं जा सकते।", ta: "எங்களால் உள்ளே செல்ல முடியாது.", ko: "우리는 들어갈 수 없어요.", zh: "我们不能进去。" },
      "We didn't finish.": { "fa": "ما تمام نکردیم.",  gu: "અમે પૂરું ન કર્યું.", hi: "हमने खत्म नहीं किया।", ta: "நாங்கள் முடிக்கவில்லை.", ko: "우리는 끝내지 않았어요.", zh: "我们没有完成。" },
      "We don't have a car.": { "fa": "ما ماشین نداریم.",  gu: "અમારી પાસે ગાડી નથી.", hi: "हमारे पास कार नहीं है।", ta: "எங்களிடம் கார் இல்லை.", ko: "우리는 차가 없어요.", zh: "我们没有车。" },
      "We don't have our plan ready.": { "fa": "برنامه‌مان آماده نیست.",  gu: "અમારી યોજના તૈયાર નથી.", hi: "हमारी योजना तैयार नहीं है।", ta: "எங்கள் திட்டம் தயாராக இல்லை.", ko: "우리 계획이 준비 안 됐어요.", zh: "我们的计划还没准备好。" },
      "We don't like the cold.": { "fa": "ما سرما را دوست نداریم.",  gu: "અમને ઠંડી ગમતી નથી.", hi: "हमें ठंड पसंद नहीं।", ta: "எங்களுக்கு குளிர் பிடிக்காது.", ko: "우리는 추위를 싫어해요.", zh: "我们不喜欢寒冷。" },
      "We have no plan at all.": { "fa": "ما اصلاً هیچ برنامه‌ای نداریم.",  gu: "અમારી પાસે કોઈ યોજના નથી.", hi: "हमारे पास बिल्कुल कोई योजना नहीं।", ta: "எங்களிடம் எந்த திட்டமும் இல்லை.", ko: "우리는 계획이 전혀 없어요.", zh: "我们完全没有计划。" },
      "We have to leave at 8 o'clock.": { "fa": "باید ساعت ۸ راه بیفتیم.",  gu: "અમારે 8 વાગ્યે નીકળવું.", hi: "हमें 8 बजे निकलना है।", ta: "எங்களுக்கு 8 மணிக்கு கிளம்ப வேண்டும்.", ko: "우리는 8시에 떠나야 해요.", zh: "我们必须8点出发。" },
      "We take the metro.": { "fa": "ما سوار مترو می‌شویم.",  gu: "અમે મેટ્રો લઈએ છીએ.", hi: "हम मेट्रो लेते हैं।", ta: "நாங்கள் மெட்ரோ பயணிக்கிறோம்.", ko: "우리는 지하철을 타요.", zh: "我们坐地铁。" },
      "We watched a movie.": { "fa": "ما فیلم تماشا کردیم.",  gu: "અમે ફ્લ્મ જોઈ.", hi: "हमने एक फ़िल्म देखी।", ta: "நாங்கள் ஒரு படம் பார்த்தோம்.", ko: "우리는 영화를 봤어요.", zh: "我们看了一部电影。" },
      "We're going to visit Quebec City.": { "fa": "ما قصد داریم از شهر کبک دیدن کنیم.",  gu: "અમે ક્વિબેક સિટી ફરવા જવાના છીએ.", hi: "हम क्यूबेक शहर जाएंगे।", ta: "நாங்கள் Quebec நகரத்திற்கு போகிறோம்.", ko: "우리는 퀘벡시를 방문할 거예요.", zh: "我们要去魁北克市参观。" },
      "We're not going to leave.": { "fa": "ما نخواهیم رفت.",  gu: "અમે નહીં જઈએ.", hi: "हम जाने वाले नहीं हैं।", ta: "நாங்கள் செல்லப் போவதில்லை.", ko: "우리는 떠나지 않을 거예요.", zh: "我们不打算离开。" },
      "What": { "fa": "چه / چه چیزی",  gu: "શું", hi: "क्या", ta: "என்ன", ko: "무엇", zh: "什么" },
      "When": { "fa": "کی / چه وقت",  gu: "ક્યારે", hi: "कब", ta: "எப்போது", ko: "언제", zh: "什么时候" },
      "Where": { "fa": "کجا",  gu: "ક્યાં", hi: "कहाँ", ta: "எங்கே", ko: "어디", zh: "哪里" },
      "Who": { "fa": "چه کسی / کی",  gu: "કોણ", hi: "कौन", ta: "யார்", ko: "누구", zh: "谁" },
      "Why": { "fa": "چرا",  gu: "કેમ", hi: "क्यों", ta: "ஏன்", ko: "왜", zh: "为什么" },
      "You don't finish the work.": { "fa": "تو کار را تمام نمی‌کنی.",  gu: "તું/તમે કામ નથી પૂરું કરતા.", hi: "तुम काम खत्म नहीं करते।", ta: "நீ வேலையை முடிப்பதில்லை.", ko: "당신은 일을 끝내지 않아요.", zh: "你不完成工作。" },
      "You don't like that?": { "fa": "از آن خوشت نمی‌آید؟",  gu: "શું તમને એ ગમ્યું નહી?", hi: "क्या आपको वो पसंद नहीं?", ta: "உங்களுக்கு அது பிடிக்கவில்லையா?", ko: "그게 마음에 안 들어요?", zh: "你不喜欢那个？" },
      "You don't speak English?": { "fa": "انگلیسی صحبت نمی‌کنی؟",  gu: "શું તમે અંગ્રેજી નથી બોલ?", hi: "क्या आप अंग्रेज़ी नहीं बोलते?", ta: "நீங்கள் ஆங்கிலம் பேசவில்லையா?", ko: "영어를 못 해요?", zh: "你不说英语？" },
      "You don't want to eat.": { "fa": "نمی‌خواهی غذا بخوری.",  gu: "તમે ખાવા નથી માંગતા.", hi: "आप खाना नहीं चाहते।", ta: "நீங்கள் சாப்பிட விரும்பவில்லை.", ko: "당신은 먹고 싶지 않아요.", zh: "你不想吃。" },
      "You don't want to stay.": { "fa": "نمی‌خواهی بمانی.",  gu: "તમે રોકાવા નથી માંગતા.", hi: "आप रुकना नहीं चाहते।", ta: "நீங்கள் தங்க விரும்பவில்லை.", ko: "당신은 머물고 싶지 않아요.", zh: "你不想留下。" },
      "You speak French.": { "fa": "شما فرانسوی صحبت می‌کنید.",  gu: "તમે ફ્રેન્ચ બોલો.", hi: "आप फ्रेंच बोलते हैं।", ta: "நீங்கள் பிரெஞ்சு பேசுகிறீர்கள்.", ko: "당신은 프랑스어를 해요.", zh: "你说法语。" },
      "You understand me.": { "fa": "تو مرا می‌فهمی.",  gu: "તમને મારી વાત સમ.", hi: "आप मुझे समझते हैं।", ta: "நீங்கள் என்னை புரிந்துகொள்கிறீர்கள்.", ko: "당신은 나를 이해해요.", zh: "你理解我。" },
      "You're going to love that!": { "fa": "عاشقش خواهید شد!",  gu: "તમને ખૂબ ગમશે!", hi: "आपको बहुत पसंद आएगा!", ta: "நீங்கள் அதை விரும்புவீர்கள்!", ko: "당신은 그것을 좋아할 거예요!", zh: "你会喜欢的！" },
      "You're welcome! (Quebec response to Merci)": { "fa": "خواهش می‌کنم! / قابلی نداره!",  gu: "ઠીક છે! (ક્વિબેકમાં Merci નો જવાબ)", hi: "कोई बात नहीं! (Quebec)", ta: "பரவாயில்லை! (Quebec)", ko: "천만에요! (퀘벡)", zh: "不客气！（魁北克对Merci的回答）" },
      "a book": { "fa": "یک کتاب",  gu: "એક પુસ્તક", hi: "एक किताब", ta: "ஒரு புத்தகம்", ko: "책 한 권", zh: "一本书" },
      "a car": { "fa": "یک ماشین",  gu: "એક ગાડી", hi: "एक कार", ta: "ஒரு கார்", ko: "자동차 한 대", zh: "一辆车" },
      "a good idea (Good/Bad)": { "fa": "یک ایده خوب",  gu: "એક સારો વિચાર (સારો/ખરાબ)", hi: "एक अच्छा विचार (Good/Bad)", ta: "ஒரு நல்ல யோசனை (Good/Bad)", ko: "좋은 생각 (Good/Bad)", zh: "一个好主意（好坏）" },
      "a handsome boy (Beauty)": { "fa": "یک پسر خوش‌تیپ",  gu: "એક સુંદર છોકરો (સૌંદર્ય)", hi: "एक सुंदर लड़का (Beauty)", ta: "ஒரு அழகான பையன் (Beauty)", ko: "잘생긴 소년 (Beauty)", zh: "一个帅男孩（美丑）" },
      "a house": { "fa": "یک خانه",  gu: "એક ઘર", hi: "एक घर", ta: "ஒரு வீடு", ko: "집 한 채", zh: "一栋房子" },
      "a man": { "fa": "یک مرد",  gu: "એક પુરૂષ", hi: "एक आदमी", ta: "ஒரு மனிதன்", ko: "남자 한 명", zh: "一个男人" },
      "a poutine": { "fa": "یک پوتین (غذای کبکی)",  gu: "એક પૂટિન (ક્વિબેક વાનગી)", hi: "एक पौटीन", ta: "ஒரு poutine", ko: "푸틴 하나", zh: "一份肉汁薯条" },
      "a small apartment (Size)": { "fa": "یک آپارتمان کوچک",  gu: "એક નાનો ફ્લૅટ (કદ)", hi: "एक छोटा अपार्टमेंट (Size)", ta: "ஒரு சிறிய அபார்ட்மெண்ட் (Size)", ko: "작은 아파트 (Size)", zh: "一间小公寓（大小）" },
      "a tourtière (meat pie)": { "fa": "یک پای گوشت (تورتی‌یر)",  gu: "એક ટૂર્તિયેર (માંસની પાઈ)", hi: "एक तुर्तीएर (मांस पाई)", ta: "ஒரு tourtière (இறைச்சி பை)", ko: "투르티에르 하나 (고기 파이)", zh: "一个肉馅饼" },
      "a woman": { "fa": "یک زن",  gu: "એક સ્ત્રી", hi: "एक औरत", ta: "ஒரு பெண்", ko: "여자 한 명", zh: "一个女人" },
      "across from / facing": { "fa": "روبروی",  gu: "સામે", hi: "सामने / आमने-सामने", ta: "எதிர்புறம் / எதிர்பார்த்து", ko: "맞은편 / 마주보고", zh: "对面" },
      "already": { "fa": "قبلاً / تا الان",  gu: "પહેલેથી જ", hi: "पहले से / पहले ही", ta: "ஏற்கனவே", ko: "이미", zh: "已经" },
      "always": { "fa": "همیشه",  gu: "હંમેશાં", hi: "हमेशा", ta: "எப்போதும்", ko: "항상", zh: "总是" },
      "an old house (Age)": { "fa": "یک خانه قدیمی",  gu: "એક જૂનું ઘર (ઉંમર)", hi: "एक पुराना घर (Age)", ta: "ஒரு பழைய வீடு (Age)", ko: "오래된 집 (Age)", zh: "一栋旧房子（年龄）" },
      "at / in / to": { "fa": "در / به",  gu: "પર / માં / ને", hi: "पर / में / को", ta: "இல் / க்கு / கிட்டே", ko: "에 / 에서 / 로", zh: "在/去/到" },
      "behind": { "fa": "پشت",  gu: "પાછળ", hi: "पीछे", ta: "பின்னால்", ko: "뒤에", zh: "在后面" },
      "between": { "fa": "بین",  gu: "વચ્ચે", hi: "बीच में", ta: "இடையில்", ko: "사이에", zh: "在之间" },
      "boyfriend": { "fa": "دوست‌پسر (chum)",  gu: "બોયફ્રેન્ડ", hi: "बॉयफ्रेंड", ta: "காதலன்", ko: "남자친구", zh: "男朋友" },
      "cell phone": { "fa": "گوشی همراه (cellulaire)",  gu: "મોબાઇલ ફોન", hi: "मोबाइल फ़ोन", ta: "செல்போன்", ko: "휴대폰", zh: "手机" },
      "corner store / convenience store": { "fa": "سوپرمارکت محلی (dépanneur)",  gu: "ખૂણાની દુકાન", hi: "पास की दुकान", ta: "கோடி கடை", ko: "편의점", zh: "便利店" },
      "currently / right now": { "fa": "در حال حاضر / هم‌اکنون",  gu: "હાલમાં", hi: "अभी / फ़िलहाल", ta: "இப்போது", ko: "현재 / 지금", zh: "目前/现在" },
      "email": { "fa": "ایمیل / رایانامه (courriel)",  gu: "ઇમેઇલ", hi: "ईमेल", ta: "மின்னஞ்சல்", ko: "이메일", zh: "电子邮件" },
      "far from": { "fa": "دور از",  gu: "દૂર", hi: "दूर", ta: "தூரத்தில்", ko: "~에서 멀리", zh: "离……远" },
      "from / of": { "fa": "از",  gu: "માંથી / નું", hi: "से / का", ta: "இலிருந்து / இன்", ko: "에서 / 의", zh: "从/的" },
      "girlfriend": { "fa": "دوست‌دختر (blonde)",  gu: "ગર્લફ્રેન્ડ", hi: "गर्लफ्रेंड", ta: "காதலி", ko: "여자친구", zh: "女朋友" },
      "he finishes": { "fa": "او تمام می‌کند",  gu: "તે પૂરું કરે છે", hi: "वो खत्म करता है", ta: "அவர் முடிக்கிறார்", ko: "그는 끝내요", zh: "他完成" },
      "he speaks": { "fa": "او صحبت می‌کند",  gu: "તે બોલે છે", hi: "वो बोलता है", ta: "அவர் பேசுகிறார்", ko: "그는 말해요", zh: "他说" },
      "he waits": { "fa": "او صبر می‌کند",  gu: "તે રાહ જુએ છે", hi: "वो इंतज़ार करता है", ta: "அவர் காத்திருக்கிறார்", ko: "그는 기다려요", zh: "他等待" },
      "his/her/its": { "fa": "مال او / مال آن",  gu: "એનું / એની", hi: "उसका/उसकी", ta: "அவனது/அவளது", ko: "그/그녀/그것의", zh: "他的/她的/它的" },
      "in front of": { "fa": "جلوی / در مقابل",  gu: "આગળ", hi: "सामने", ta: "முன்னால்", ko: "앞에", zh: "在前面" },
      "inside / in": { "fa": "داخل / درون",  gu: "અંદર / માં", hi: "अंदर / में", ta: "உள்ளே / இல்", ko: "안에 / 내부에", zh: "在里面/在内" },
      "my": { "fa": "مال من",  gu: "મારો / મારી", hi: "मेरा/मेरी", ta: "என்", ko: "나의", zh: "我的" },
      "near / close to": { "fa": "نزدیکِ",  gu: "નજીક", hi: "पास / क़रीब", ta: "அருகில்", ko: "가까이", zh: "在附近" },
      "next to / beside": { "fa": "کنارِ",  gu: "બાજુમાં", hi: "के बगल में", ta: "பக்கத்தில்", ko: "옆에", zh: "在旁边" },
      "now": { "fa": "اکنون / الان",  gu: "હાલ", hi: "अभी", ta: "இப்போது", ko: "지금", zh: "现在" },
      "often": { "fa": "اغلب / بارها",  gu: "વારંવાર", hi: "अक्सर", ta: "அடிக்கடி", ko: "자주", zh: "经常" },
      "on / on top of": { "fa": "روی / بر روی",  gu: "ઉપર", hi: "ऊपर / पर", ta: "மேலே", ko: "위에", zh: "在上面" },
      "our": { "fa": "مال ما",  gu: "અમારું", hi: "हमारा/हमारी", ta: "எங்கள்", ko: "우리의", zh: "我们的" },
      "parking lot": { "fa": "پارکینگ (stationnement)",  gu: "પાર્કિંગ", hi: "पार्किंग", ta: "வாகன நிறுத்தம்", ko: "주차장", zh: "停车场" },
      "some bagels": { "fa": "مقداری نان بیگل",  gu: "થોડા બેગલ્સ", hi: "कुछ बेगल", ta: "சில bagel", ko: "베이글 몇 개", zh: "一些百吉饼" },
      "some maple syrup": { "fa": "مقداری شیره افرا",  gu: "થોડું મેપલ સિરપ", hi: "थोड़ी मेपल सिरप", ta: "சில மேப்பிள் சிரப்", ko: "메이플 시럽 조금", zh: "一些枫糖浆" },
      "some money": { "fa": "مقداری پول",  gu: "થોડા પૈસા", hi: "कुछ पैसे", ta: "கொஞ்சம் பணம்", ko: "약간의 돈", zh: "一些钱" },
      "some snow": { "fa": "مقداری برف",  gu: "થોડી બરફ", hi: "थोड़ी बर्फ", ta: "சில பனி", ko: "약간의 눈", zh: "一些雪" },
      "soon": { "fa": "به‌زودی",  gu: "જલ્દી", hi: "जल्दी", ta: "விரைவில்", ko: "곧", zh: "很快" },
      "the beer": { "fa": "آبجو",  gu: "બિયર", hi: "बीयर", ta: "பீர்", ko: "맥주", zh: "啤酒" },
      "the coffee": { "fa": "قهوه",  gu: "કૉફી", hi: "कॉफ़ी", ta: "காஃபி", ko: "커피", zh: "咖啡" },
      "the restaurants": { "fa": "رستوران‌ها",  gu: "રેસ્ટોરન્ટ્સ", hi: "रेस्टोरेंट", ta: "உணவகங்கள்", ko: "레스토랑들", zh: "餐厅" },
      "the water": { "fa": "آب",  gu: "પાણી", hi: "पानी", ta: "தண்ணீர்", ko: "물", zh: "水" },
      "the weekend": { "fa": "آخر هفته",  gu: "સપ્તાહ-અંત", hi: "वीकेंड", ta: "வார இறுதி", ko: "주말", zh: "周末" },
      "their": { "fa": "مال آن‌ها",  gu: "એમનું / એમની", hi: "उनका/उनकी", ta: "அவர்களது", ko: "그들의", zh: "他们的" },
      "these/those children": { "fa": "این/آن بچه‌ها",  gu: "આ/તે બાળકો", hi: "ये/वो बच्चे", ta: "இந்த/அந்த குழந்தைகள்", ko: "이/저 아이들", zh: "这些/那些孩子" },
      "they finish": { "fa": "آن‌ها تمام می‌کنند",  gu: "તેઓ પૂરું કરે છે", hi: "वो खत्म करते हैं", ta: "அவர்கள் முடிக்கிறார்கள்", ko: "그들은 끝내요", zh: "他们完成" },
      "they speak": { "fa": "آن‌ها صحبت می‌کنند",  gu: "તેઓ બોલે છે", hi: "वो बोलते हैं", ta: "அவர்கள் பேசுகிறார்கள்", ko: "그들은 말해요", zh: "他们说" },
      "they wait": { "fa": "آن‌ها صبر می‌کنند",  gu: "તેઓ રાહ જુએ છે", hi: "वो इंतज़ार करते हैं", ta: "அவர்கள் காத்திருக்கிறார்கள்", ko: "그들은 기다려요", zh: "他们等待" },
      "this/that book": { "fa": "این/آن کتاب",  gu: "આ/તે પુસ્તક", hi: "यह/वो किताब", ta: "இந்த/அந்த புத்தகம்", ko: "이/저 책", zh: "这/那本书" },
      "this/that city": { "fa": "این/آن شهر",  gu: "આ/તે શહેર", hi: "यह/वो शहर", ta: "இந்த/அந்த நகரம்", ko: "이/저 도시", zh: "这/那座城市" },
      "this/that man": { "fa": "این/آن مرد",  gu: "આ/તે માણસ", hi: "यह/वो आदमी", ta: "இந்த/அந்த மனிதன்", ko: "이/저 남자", zh: "这/那个男人" },
      "to go shopping": { "fa": "خرید رفتن (magasiner)",  gu: "ખરીદી કરવા જવું", hi: "खरीदारी करना", ta: "கடையில் சுற்றுவது", ko: "쇼핑하러 가다", zh: "去购物" },
      "today": { "fa": "امروز",  gu: "આજે", hi: "आज", ta: "இன்று", ko: "오늘", zh: "今天" },
      "tomorrow": { "fa": "فردا",  gu: "કાલે", hi: "कल", ta: "நாளை", ko: "내일", zh: "明天" },
      "under": { "fa": "زیر",  gu: "નીચે", hi: "नीचे", ta: "கீழே", ko: "아래에", zh: "在下面" },
      "we finish": { "fa": "ما تمام می‌کنیم",  gu: "અમે પૂરું કરીએ છીએ", hi: "हम खत्म करते हैं", ta: "நாங்கள் முடிக்கிறோம்", ko: "우리는 끝내요", zh: "我们完成" },
      "we speak": { "fa": "ما صحبت می‌کنیم",  gu: "અમે બોલીએ છીએ", hi: "हम बोलते हैं", ta: "நாங்கள் பேசுகிறோம்", ko: "우리는 말해요", zh: "我们说" },
      "we wait": { "fa": "ما صبر می‌کنیم",  gu: "અમે રાહ જોઈએ છીએ", hi: "हम इंतज़ार करते हैं", ta: "நாங்கள் காத்திருக்கிறோம்", ko: "우리는 기다려요", zh: "我们等待" },
      "you finish": { "fa": "شما تمام می‌کنید",  gu: "તું પૂરું કરે છે", hi: "तुम खत्म करते हो", ta: "நீ முடிக்கிறாய்", ko: "당신은 끝내요", zh: "你完成" },
      "you speak": { "fa": "شما صحبت می‌کنید",  gu: "તું બોલે છે", hi: "तुम बोलते हो", ta: "நீ பேசுகிறாய்", ko: "당신은 말해요", zh: "你说" },
      "you wait": { "fa": "شما صبر می‌کنید",  gu: "તું રાહ જુએ છે", hi: "तुम इंतज़ार करते हो", ta: "நீ காத்திருக்கிறாய்", ko: "당신은 기다려요", zh: "你等待" },
      "your": { "fa": "مال شما / مال تو",  gu: "તારો / તારી", hi: "तुम्हारा/तुम्हारी", ta: "உன்னுடைய", ko: "당신의", zh: "你的" },
      "🍁 Is tax included? (Quebec question form)": { "fa": "🍁 آیا مالیات شامل شده؟ (ساختار پرسشی کبکی)",  gu: "🍁 ટેક્સ સામેલ છે? (ક્વિબેક બોલી)", hi: "🍁 टैक्स शामिल है? (QC)", ta: "🍁 வரி சேர்க்கப்பட்டதா? (QC)", ko: "🍁 세금 포함이에요? (퀘벡)", zh: "🍁 含税吗？（魁北克问法）" },
      "🍁 Is that okay? (Quebec spoken form)": { "fa": "🍁 روبه‌راهه؟ / حله؟ (گفتار کبکی)",  gu: "🍁 ચાલશે? (ક્વિબેક બોલી)", hi: "🍁 ठीक है? (QC)", ta: "🍁 சரியா? (QC)", ko: "🍁 괜찮아요? (퀘벡)", zh: "🍁 可以吗？（魁北克口语）" },
      "🍁 The Montreal bilingual greeting — reply 'Bonjour' for French, 'Hi' for English.": { "fa": "🍁 سلام دوزبانه مونترال — برای فرانسوی 'Bonjour' و برای انگلیسی 'Hi' بگویید.",  gu: "🍁 મોન્ટ્રિયલનું દ્વિભાષી અભિવાદન — ફ્રેન્ચ માટે 'Bonjour', અંગ્રેજી માટે 'Hi'.", hi: "🍁 मॉन्ट्रियल की द्विभाषी ग्रीटिंग — फ्रेंच: 'Bonjour', अंग्रेज़ी: 'Hi'।", ta: "🍁 Montreal இருமொழி வாழ்த்து — பிரெஞ்சுக்கு 'Bonjour', ஆங்கிலத்திற்கு 'Hi'.", ko: "🍁 몬트리올 이중 언어 인사 — 프랑스어: 'Bonjour', 영어: 'Hi'.", zh: "🍁 蒙特利尔双语问候——法语回'Bonjour'，英语回'Hi'。" },
      "🍁 You didn't understand? (Quebec spoken)": { "fa": "🍁 متوجه نشدی؟ (گفتار کبکی)",  gu: "🍁 સમજાયું નહીં? (ક્વિબેક બોલી)", hi: "🍁 समझ नहीं आया? (QC)", ta: "🍁 புரியலையா? (QC)", ko: "🍁 이해 못 했어요? (퀘벡)", zh: "🍁 你没听懂？（魁北克口语）" },
    };

    // Column header for the native language column
    const nativeLangName = { fa: 'فارسی', gu: 'ગુજરાતી', hi: 'हिन्दी', ta: 'தமிழ்', ko: '한국어', zh: '中文' };



    // ══════════════════════════════════════════════════════
    // TIP TRANSLATIONS
    // Key = first 60 chars of tip text (after stripping emoji)
    // ══════════════════════════════════════════════════════
    const tipT = {
      "fa": {
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 نکته کبک: در مونترال به جای فروشگاه کوچک محلی 'le dépanneur' و برای کلبه شکر 'la cabane à sucre' را خواهید شنید!",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 بعد از فعل منفی، 'un/une/des' به 'de' تبدیل می‌شود: Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 در کبک: 'Je veux de la poutine' — در مونترال حتماً این جمله را برای پوتین معروف خواهید گفت!",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 تفاوت: 'pas de voiture' (اصلاً ماشین ندارم) در برابر 'pas la voiture' (آن ماشین خاص مد نظر نیست).",
        "Common endings: -tion, -sion, -ée, -ure": "💡 پسوندهای معمول مؤنث: -tion, -sion, -ée, -ure. پسوندهای معمول مذکر: -eau, -isme, -ment.",
        "Learn gender with each word — always say": "💡 جنسیت را همگام با کلمه بیاموزید — همیشه بگویید 'un livre' (مذکر) یا 'une maison' (مؤنث).",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 کبک: 'On' در گفتگوی روزمره جایگزین 'nous' می‌شود: 'On va au cinéma' = 'Nous allons'.",
        "Quebec: 'Tu' is used even with strangers": "🍁 کبک: 'Tu' حتی با افراد غریبه هم بسیار رایج است! 'vous' فقط در محیط‌های رسمی اداری الزامی است.",
        "The '-ent' ending for ils/elles is always silent": "💡 پسوند '-ent' برای صیغه جمع ils/elles هرگز تلفظ نمی‌شود! صدایی دقیقاً شبیه 'il parle' دارد.",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 کبک: کلمه 'ne' در مکالمه حذف می‌شود: 'Je parle pas français' کاملاً طبیعی است!",
        "Always use 'Est-ce que' or rising intonation": "💡 در گفتگو: از لحن صعودی یا 'Est-ce que…' استفاده کنید. وارونه‌سازی فعل بسیار کتابی است.",
        "Quebec: Rising intonation is the most natural": "🍁 کبک: لحن صعودی طبیعی‌ترین روش پرسش است: 'T'as faim؟' کاملاً رساست!",
        "Adjective agreement never changes in negation": "💡 مطابقت صفت در جملات منفی هرگز عوض نمی‌شود — فقط حرف تعریف تغییر می‌کند (un/une → de).",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 صفت‌های متعلق به قاعده BAGS (زیبایی، سن، خوبی، اندازه) قبل از اسم می‌آیند.",
        "à la / à l' never contract": "💡 ترکیب‌های 'à la' و 'à l'' هرگز ادغام نمی‌شوند.",
        "Quebec: 'C'est proche du métro'": "🍁 کبک: عبارت 'C'est proche du métro؟' بسیار پرکاربرد است!",
        "Possessives agree with the NOUN, not the owner": "💡 صفت ملکی با خود اسم مطابقت می‌کند نه با صاحب آن! 'son char' = ماشین او (او می‌تواند زن یا مرد باشد).",
        "Days and months are NOT capitalized in French": "💡 در فرانسوی روزهای هفته و ماه‌ها با حروف کوچک نوشته می‌شوند: lundi, janvier.",
        "The STM uses 24-hour format": "🍁 کبک: مترو و اتوبوس‌های مونترال (STM) از قالب ۲۴ ساعته استفاده می‌کنند: '15h30'.",
        "All reflexive verbs use être in the passé composé": "💡 تمام افعال انعکاسی در گذشته مرکب از فعل کمکی être استفاده می‌کنند.",
        "Pronoun goes BEFORE the verb in French": "💡 ضمیر مفعولی در فرانسوی قبل از فعل قرار می‌گیرد — درون کادر ne…pas!",
        "Savoir vs pouvoir": "💡 'Savoir' برای مهارتی است که یاد گرفته‌اید؛ 'Pouvoir' برای توانایی بدنی یا داشتن اجازه در لحظه است.",
        "Quebec: 'Je peux pas venir.'": "🍁 کبک: 'Je peux pas venir.' — بدون ne، رایج‌ترین پاسخ برای عذرخواهی و رد دعوت!",
        "C'est beau! is a Quebec expression meaning": "🍁 کبک: '!C'est beau' اصطلاحی به معنای 'متوجه شدم!' یا 'خیلی خوب!' است.",
        "Il n'y a pas de métro après minuit": "🍁 کبک: 'Il n'y a pas de métro après minuit' — نیمه‌شب به بعد متروی مونترال تعطیل است!",
        "Bienvenue! means You're welcome in Quebec": "🍁 کبک: '!Bienvenue' یعنی 'خواهش می‌کنم!' (برخلاف فرانسه که به معنی خوش‌آمدید است).",
        "Quebec: 'Je le vois pas'": "🍁 کبک: 'Je le vois pas' — کلمه ne حذف می‌شود، اما جایگاه ضمیر مفعولی تغییر نمی‌کند!",
        "All pronominal verbs use être in the passé composé": "💡 تمام افعال دوطرفه و انعکاسی در گذشته مرکب با être صرف می‌شوند: 'je me suis levé'."
},
      "gu": {
        "histoire_montreal_subtitle": "પોઇન્ટ-એ-કેલિયર ટાઇમલાઇન",
        "histoire_montreal_0_english": "પોઇન્ટ-એ-કેલિયર ખાતે પુરાતત્વીય શોધો દ્વારા પ્રાગૈતિહાસિક કાળથી આધુનિક સમય સુધી મોન્ટ્રીયલના ઇતિહાસને શોધો.",
        
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 QC: 'le dépanneur' (corner store) અને 'la cabane à sucre' (sugar shack) — ખૂB QUébécois!",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 Negative verb પછી 'un/une/des' → 'de': Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 QC: 'Je veux du poutine' — Montreal માં ચોkkAS બOLSHO!",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 Contrast: 'Je n'ai pas de voiture' (car j Nathi) vs 'Je n'ai pas la voiture' (THE car NaTHI).",
        "Common endings: -tion, -sion, -ée, -ure": "💡 Common endings: -tion, -sion, -ée, -ure → usually STRI. -eau, -isme, -ment → usually PURUSH.",
        "Learn gender with each word — always say": "💡 Har shabD sathe gender YAD karo — 'un livre' (m.) / 'une maison' (f.).",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 QC: 'On' ROJ-BARO JiNDAGI MA 'nous' NI JaGYA LE Chhe. 'On va au cinéma' = 'Nous allons'.",
        "Quebec: 'Tu' is used even with strangers": "🍁 QC: Strangers saTHE PAn 'tu' vApRAy! Office mATE 'vous' use karo.",
        "The '-ent' ending for ils/elles is always silent": "💡 'ils parlent' MA '-ent' HAMESH silent! 'il parle' jEVU j sunAy.",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 QC: 'ne' HAMESH drop THAy: 'Je parle pas français.' — NATURAL LAGe Chhe!",
        "Always use 'Est-ce que' or rising intonation": "💡 CASUAL: Rising intonation / 'Est-ce que…'. FORMAL: inversion.",
        "Quebec: Rising intonation is the most natural": "🍁 QC: Rising intonation SABSE NATURAL Chhe. 'T'as faim?' completely OK!",
        "Adjective agreement never changes in negation": "💡 Negation mA adjective agreement naTHI badLATI — ফAkT article (un/une → de) baDLe.",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 BAGS = Beauty, Age, Goodness, Size — aa adjectives NOUN PAHELA aave.",
        "à la / à l' never contract": "💡 'à la' / 'à l'' KABHI contract naTHI THAtA.",
        "Quebec: 'C'est proche du métro'": "🍁 QC: 'C'est proche du métro?' — rojBARO VAJATO phrase!",
        "Possessives agree with the NOUN, not the owner": "💡 Possessive NOUN saTHE agree kare, owner saTHI nahi! 'son char' = HIS OR HER car.",
        "This is a subtle but important distinction": "💡 'Je n'ai pas de char' (no car at all) vs 'Je n'ai pas mon char' (MY car nahi).",
        "Days and months are NOT capitalized in French": "💡 French mA days ane months capitalize NaTHI THAtA: lundi, janvier.",
        "The STM uses 24-hour format": "🍁 QC: STM 24-hour format use kare: '15h30'. Bus/metro schedule mA deKHSHO.",
        "All reflexive verbs use être in the passé composé": "💡 Reflexive verbs PC mA hamesh ÊTRE use kare.",
        "The DR MRS VANDERTRAMP verbs use être": "💡 DR MRS VANDERTRAMP verbs = être: Devenir, Revenir, Monter…",
        "Negative passé composé: ne…pas wraps the auxiliary": "💡 Negative PC: ne + auxiliary + pas + past participle: 'Je n'ai pas mangé.'",
        "Pronoun goes BEFORE the verb in French": "💡 French mA pronoun VERB PAHELA aave — ne…pas NI VACCHE!",
        "Savoir vs pouvoir": "💡 'Savoir' = learned skill. 'Pouvoir' = ability/permission.",
        "Quebec: 'Je peux pas venir.'": "🍁 QC: 'Je peux pas venir.' — ne drop! SABSE COMMON refusal.",
        "C'est beau! is a Quebec expression meaning": "🍁 QC: 'C'est beau!' = 'Sounds good!' / 'Great!' — versatile expression!",
        "Il n'y a pas de métro après minuit": "🍁 QC: 'Il n'y a pas de métro après minuit.' — MONTREAL mA JaRuRI!",
        "Bienvenue! means You're welcome in Quebec": "🍁 QC: 'Bienvenue!' = 'You're welcome!' (France mA different meaning!)",
        "Quebec: 'Je le vois pas'": "🍁 QC: 'Je le vois pas' — ne drop, PRONOUN NaTHI baDLAtO!",
        "All pronominal verbs use être in the passé composé": "💡 TAMAM pronominal verbs PC mA ÊTRE use kare: 'je me suis levé'.",
      },
      "hi": {
        "histoire_montreal_subtitle": "प्वाइंट-ए-कैलियर टाइमलाइन",
        "histoire_montreal_0_english": "प्वाइंट-ए-कैलियर में पुरातात्विक खोजों के माध्यम से प्रागैतिहासिक काल से आधुनिक समय तक मॉन्ट्रियल के इतिहास का पता लगाएं।",
        
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 QC: 'le dépanneur' (कोने की दुकान) और 'la cabane à sucre' — बहुत québécois!",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 Negative verb के बाद 'un/une/des' → 'de': Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 QC: 'Je veux du poutine' — मॉन्ट्रियल में यह ज़रूर बोलेंगे!",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 अंतर: 'Je n'ai pas de voiture' (कार है ही नहीं) vs 'Je n'ai pas la voiture' (THE कार नहीं है)।",
        "Common endings: -tion, -sion, -ée, -ure": "💡 अंत: -tion, -sion, -ée, -ure → अक्सर स्त्रीलिंग। -eau, -isme, -ment → पुल्लिंग।",
        "Learn gender with each word — always say": "💡 हर शब्द के साथ gender याद करें — 'un livre' (m.) / 'une maison' (f.)।",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 QC: 'On' रोज़ की बातचीत में 'nous' की जगह लेता है। 'On va' = 'Nous allons'।",
        "Quebec: 'Tu' is used even with strangers": "🍁 QC: अजनबियों से भी 'tu' कहते हैं! सिर्फ दफ़्तर में 'vous' ज़रूरी।",
        "The '-ent' ending for ils/elles is always silent": "💡 'ils parlent' में '-ent' हमेशा silent! 'il parle' जैसा ही सुनाई देता है।",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 QC: बातचीत में 'ne' लगभग हमेशा हटा दिया जाता है: 'Je parle pas français.'",
        "Always use 'Est-ce que' or rising intonation": "💡 CASUAL: Rising intonation / 'Est-ce que…'. FORMAL: inversion।",
        "Quebec: Rising intonation is the most natural": "🍁 QC: Rising intonation सबसे natural है। 'T'as faim?' बिल्कुल ठीक!",
        "Adjective agreement never changes in negation": "💡 Negation में adjective agreement नहीं बदलती — सिर्फ article (un/une → de) बदलता है।",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 BAGS = Beauty, Age, Goodness, Size — ये adjectives NOUN से पहले आते हैं।",
        "à la / à l' never contract": "💡 'à la' / 'à l'' कभी contract नहीं होते।",
        "Quebec: 'C'est proche du métro'": "🍁 QC: 'C'est proche du métro?' — रोज़ाना का वाक्य!",
        "Possessives agree with the NOUN, not the owner": "💡 Possessive NOUN के साथ agree करता है, owner के साथ नहीं! 'son char' = उसका/उसकी car।",
        "This is a subtle but important distinction": "💡 'Je n'ai pas de char' (कार है ही नहीं) vs 'Je n'ai pas mon char' (मेरी कार नहीं है अभी)।",
        "Days and months are NOT capitalized in French": "💡 फ्रेंच में days और months capitalize नहीं होते: lundi, janvier।",
        "The STM uses 24-hour format": "🍁 QC: STM 24-hour format इस्तेमाल करती है: '15h30'. बस/मेट्रो schedule में देखेंगे।",
        "All reflexive verbs use être in the passé composé": "💡 Reflexive verbs PC में हमेशा ÊTRE use करते हैं।",
        "The DR MRS VANDERTRAMP verbs use être": "💡 DR MRS VANDERTRAMP verbs = être: Devenir, Revenir, Monter…",
        "Negative passé composé: ne…pas wraps the auxiliary": "💡 Negative PC: ne + auxiliary + pas + past participle: 'Je n'ai pas mangé.'",
        "Pronoun goes BEFORE the verb in French": "💡 फ्रेंच में pronoun VERB से पहले आता है — ne…pas के बीच में!",
        "Savoir vs pouvoir": "💡 'Savoir' = सीखी हुई skill. 'Pouvoir' = ability/permission.",
        "Quebec: 'Je peux pas venir.'": "🍁 QC: 'Je peux pas venir.' — ne हटाया, सबसे common मना करने का तरीका!",
        "C'est beau! is a Quebec expression meaning": "🍁 QC: 'C'est beau!' = 'ठीक है!' / 'बढ़िया!' — बहुत versatile!",
        "Il n'y a pas de métro après minuit": "🍁 QC: 'Il n'y a pas de métro après minuit.' — मॉन्ट्रियल में ज़रूरी!",
        "Bienvenue! means You're welcome in Quebec": "🍁 QC: 'Bienvenue!' = 'आपका स्वागत है!' / 'कोई बात नहीं!' (फ्रांस में अलग meaning!)",
        "Quebec: 'Je le vois pas'": "🍁 QC: 'Je le vois pas' — ne हटाया, PRONOUN नहीं बदला!",
        "All pronominal verbs use être in the passé composé": "💡 सभी pronominal verbs PC में ÊTRE use करते हैं: 'je me suis levé'।",
      },
      "ta": {
        "histoire_montreal_subtitle": "பாயிண்ட்-ஏ-காவ்யர் நேரவரிசை",
        "histoire_montreal_0_english": "பாயிண்ட்-ஏ-காவ்யரில் உள்ள தொல்பொருள் கண்டுபிடிப்புகள் மூலம் வரலாற்றுக்கு முந்தைய காலம் முதல் நவீன காலம் வரை மாண்ட்ரியலின் வரலாற்றைக் கண்டறியவும்.",
        
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 QC: 'le dépanneur' (கோடி கடை) மற்றும் 'la cabane à sucre' — மிகவும் québécois!",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 எதிர்மறை வினைக்கு பிறகு 'un/une/des' → 'de': Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 QC: 'Je veux du poutine' — Montreal-ல் இதை நிச்சயம் சொல்வீர்கள்!",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 வித்தியாசம்: 'pas de voiture' (கார் இல்லவே இல்லை) vs 'pas la voiture' (THE கார் இல்லை).",
        "Common endings: -tion, -sion, -ée, -ure": "💡 பெரும்பாலும் பெண்பாற்பெயர்: -tion, -sion, -ée, -ure. ஆண்பாற்பெயர்: -eau, -isme.",
        "Learn gender with each word — always say": "💡 ஒவ்வொரு சொல்லுடனும் gender கற்கவும் — 'un livre' (m.) / 'une maison' (f.).",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 QC: 'On' அன்றாட பேச்சில் 'nous'-ஐ மாற்றுகிறது. 'On va' = 'Nous allons'.",
        "Quebec: 'Tu' is used even with strangers": "🍁 QC: அறிமுகமில்லாதவர்களிடமும் 'tu' பயன்படுத்தலாம்! அலுவலகத்தில் மட்டும் 'vous'.",
        "The '-ent' ending for ils/elles is always silent": "💡 'ils parlent'-ல் '-ent' எப்போதும் silent! 'il parle' போலவே கேட்கும்.",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 QC: உரையாடலில் 'ne' கிட்டத்தட்ட எப்போதும் நீக்கப்படுகிறது: 'Je parle pas français.'",
        "Adjective agreement never changes in negation": "💡 எதிர்மறையிலும் adjective agreement மாறாது — article மட்டும் மாறும் (un/une → de).",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 BAGS = Beauty, Age, Goodness, Size — இந்த adjectives பெயர்ச்சொல்லுக்கு முன் வரும்.",
        "à la / à l' never contract": "💡 'à la' / 'à l'' ஒருபோதும் சுருங்காது.",
        "Quebec: 'C'est proche du métro'": "🍁 QC: 'C'est proche du métro?' — தினசரி வாக்கியம்!",
        "Possessives agree with the NOUN, not the owner": "💡 Possessive பெயர்ச்சொல்லுடன் பொருந்தும், owner-உடன் அல்ல! 'son char' = அவனது/அவளது car.",
        "Days and months are NOT capitalized in French": "💡 பிரெஞ்சில் நாட்கள் மற்றும் மாதங்கள் capitalize செய்வதில்லை: lundi, janvier.",
        "The STM uses 24-hour format": "🍁 QC: STM 24-மணி நேர வடிவம் பயன்படுத்துகிறது: '15h30'.",
        "All reflexive verbs use être in the passé composé": "💡 அனைத்து reflexive verbs-உம் PC-ல் être பயன்படுத்தும்.",
        "Pronoun goes BEFORE the verb in French": "💡 பிரெஞ்சில் pronoun வினைச்சொல்லுக்கு முன் வரும் — ne…pas-க்கு இடையில்!",
        "Savoir vs pouvoir": "💡 'Savoir' = கற்ற திறன். 'Pouvoir' = தற்போதைய திறன்/அனுமதி.",
        "Quebec: 'Je peux pas venir.'": "🍁 QC: 'Je peux pas venir.' — ne நீக்கப்பட்டது, மிகவும் பொதுவான மறுப்பு!",
        "C'est beau! is a Quebec expression meaning": "🍁 QC: 'C'est beau!' = 'சரி!' / 'அருமை!' — பல்துறை பயன்பாடு!",
        "Il n'y a pas de métro après minuit": "🍁 QC: 'Il n'y a pas de métro après minuit.' — Montreal-ல் அவசியம் தெரிய வேண்டியது!",
        "Bienvenue! means You're welcome in Quebec": "🍁 QC: 'Bienvenue!' = 'வரவேற்கிறோம்!' / 'பரவாயில்லை!' (பிரான்சில் வேறு அர்த்தம்!)",
        "Quebec: 'Je le vois pas'": "🍁 QC: 'Je le vois pas' — ne நீக்கப்பட்டது, pronoun நகரவில்லை!",
        "All pronominal verbs use être in the passé composé": "💡 அனைத்து pronominal verbs-உம் PC-ல் être: 'je me suis levé'.",
      },
      "ko": {
        "histoire_montreal_subtitle": "푸앵트아칼리에르 타임라인",
        "histoire_montreal_0_english": "푸앵트아칼리에르의 고고학적 발견을 통해 선사 시대부터 현대까지 몬트리올의 역사를 추적해 보세요.",
        
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 QC: 'le dépanneur' (편의점)와 'la cabane à sucre' (시럽 오두막) — 매우 québécois!",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 부정문 동사 후 'un/une/des' → 'de': Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 QC: 'Je veux du poutine' — 몬트리올에서 꼭 말하게 될 문장!",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 대조: 'pas de voiture' (차가 전혀 없음) vs 'pas la voiture' (그 특정 차가 없음).",
        "Common endings: -tion, -sion, -ée, -ure": "💡 여성명사 어미: -tion, -sion, -ée, -ure. 남성명사: -eau, -isme, -ment.",
        "Learn gender with each word — always say": "💡 단어마다 성별을 함께 외우세요 — 'un livre' (남) / 'une maison' (여).",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 QC: 일상 대화에서 'on'이 'nous'를 대신해요. 'On va' = 'Nous allons'.",
        "Quebec: 'Tu' is used even with strangers": "🍁 QC: 처음 보는 사람에게도 'tu'를 써요! 직장에서만 'vous' 필수.",
        "The '-ent' ending for ils/elles is always silent": "💡 'ils parlent'에서 '-ent'는 항상 묵음이에요! 'il parle'와 똑같이 발음돼요.",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 QC: 대화에서 'ne'는 거의 항상 생략돼요: 'Je parle pas français.'",
        "Adjective agreement never changes in negation": "💡 부정문에서도 형용사 일치는 변하지 않아요 — 관사만 변해요 (un/une → de).",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 BAGS = Beauty, Age, Goodness, Size — 이 형용사들은 명사 앞에 와요.",
        "à la / à l' never contract": "💡 'à la' / 'à l''는 절대 축약되지 않아요.",
        "Quebec: 'C'est proche du métro'": "🍁 QC: 'C'est proche du métro?' — 일상적인 표현!",
        "Possessives agree with the NOUN, not the owner": "💡 소유형용사는 소유자가 아닌 명사에 일치해요! 'son char' = 그의/그녀의 차.",
        "Days and months are NOT capitalized in French": "💡 프랑스어에서 요일과 월은 대문자로 쓰지 않아요: lundi, janvier.",
        "The STM uses 24-hour format": "🍁 QC: STM은 24시간제를 사용해요: '15h30'. 버스/지하철 시간표에서 볼 거예요.",
        "All reflexive verbs use être in the passé composé": "💡 모든 반사동사는 복합과거에서 être를 사용해요.",
        "Pronoun goes BEFORE the verb in French": "💡 프랑스어에서 대명사는 동사 앞에 와요 — ne…pas 사이에!",
        "Savoir vs pouvoir": "💡 'Savoir' = 배운 기술. 'Pouvoir' = 현재 능력/허가.",
        "Quebec: 'Je peux pas venir.'": "🍁 QC: 'Je peux pas venir.' — ne 생략, 가장 흔한 거절 표현!",
        "C'est beau! is a Quebec expression meaning": "🍁 QC: 'C'est beau!' = '알겠어요!' / '좋아요!' — 다목적 표현!",
        "Il n'y a pas de métro après minuit": "🍁 QC: 'Il n'y a pas de métro après minuit.' — 몬트리올에서 필수 지식!",
        "Bienvenue! means You're welcome in Quebec": "🍁 QC: 'Bienvenue!' = '천만에요!' (프랑스에서는 다른 의미!).",
        "Quebec: 'Je le vois pas'": "🍁 QC: 'Je le vois pas' — ne 생략, 대명사는 그대로!",
        "All pronominal verbs use être in the passé composé": "💡 모든 대명 동사는 복합과거에서 être 사용: 'je me suis levé'.",
      },
      "zh": {
        "histoire_montreal_subtitle": "布安特-阿-卡利埃时间轴",
        "histoire_montreal_0_english": "通过布安特-阿-卡利埃的考古发现，追溯蒙特利尔从史前时期到现代的历史。",
        
        "Quebec tip: You'll often hear 'le dépanneur'": "🍁 QC: 常听到'le dépanneur'（便利店）和'la cabane à sucre'（糖浆小屋）——很魁北克！",
        "After a negative verb, 'un/une/des' becomes 'de'": "💡 否定动词后'un/une/des'→'de': Je n'ai pas de voiture.",
        "Quebec context: 'Je veux du poutine'": "🍁 QC: 'Je veux du poutine'——在蒙特利尔你一定会说这句话！",
        "The key contrast: 'Je n'ai pas de voiture'": "💡 对比：'pas de voiture'（根本没车）vs 'pas la voiture'（没有那辆特定的车）。",
        "Common endings: -tion, -sion, -ée, -ure": "💡 阴性词尾: -tion, -sion, -ée, -ure。阳性词尾: -eau, -isme, -ment。",
        "Learn gender with each word — always say": "💡 每学一个词就记住它的性别——'un livre'（阳）/ 'une maison'（阴）。",
        "Quebec: 'On' replaces 'nous' in everyday speech": "🍁 QC: 日常对话中'on'代替'nous'。'On va' = 'Nous allons'。",
        "Quebec: 'Tu' is used even with strangers": "🍁 QC: 对陌生人也用'tu'！只有在办公室才必须用'vous'。",
        "The '-ent' ending for ils/elles is always silent": "💡 'ils parlent'中'-ent'永远不发音！听起来和'il parle'一样。",
        "Quebec: 'ne' is almost always dropped in conversation": "🍁 QC: 对话中'ne'几乎总是省略: 'Je parle pas français.'",
        "Adjective agreement never changes in negation": "💡 否定句中形容词配合不变——只有冠词变化（un/une → de）。",
        "BAGS stands for Beauty, Age, Goodness, Size": "💡 BAGS = Beauty, Age, Goodness, Size——这些形容词放在名词前面。",
        "à la / à l' never contract": "💡 'à la' / 'à l''从不缩合。",
        "Quebec: 'C'est proche du métro'": "🍁 QC: 'C'est proche du métro?'——日常口头语！",
        "Possessives agree with the NOUN, not the owner": "💡 物主形容词与名词一致，不与所有者一致！'son char' = 他的/她的车。",
        "Days and months are NOT capitalized in French": "💡 法语中星期和月份不大写: lundi, janvier。",
        "The STM uses 24-hour format": "🍁 QC: STM使用24小时制: '15h30'。在公交/地铁时刻表上会看到。",
        "All reflexive verbs use être in the passé composé": "💡 所有反身动词在复合过去时用être。",
        "Pronoun goes BEFORE the verb in French": "💡 法语中代词在动词前——夹在ne…pas之间！",
        "Savoir vs pouvoir": "💡 'Savoir' = 学会的技能。'Pouvoir' = 当前能力/许可。",
        "Quebec: 'Je peux pas venir.'": "🍁 QC: 'Je peux pas venir.'——ne省略，最常见的拒绝方式！",
        "C'est beau! is a Quebec expression meaning": "🍁 QC: 'C'est beau!'= '好的！'/'太棒了！'——万用表达！",
        "Il n'y a pas de métro après minuit": "🍁 QC: 'Il n'y a pas de métro après minuit.'——蒙特利尔必知！",
        "Bienvenue! means You're welcome in Quebec": "🍁 QC: 'Bienvenue!' = '不客气！'（在法国含义不同！）",
        "Quebec: 'Je le vois pas'": "🍁 QC: 'Je le vois pas'——ne省略，代词不动！",
        "All pronominal verbs use être in the passé composé": "💡 所有代词式动词复合过去时用être: 'je me suis levé'.",
      },
    };

    // Tip translation toggle state (per widget render)
    let _tipTranslateActive = false;

    let current = 0;
    function buildNav() {
      const nav = document.getElementById('nav-pills');
      if (!nav) return;
      nav.innerHTML = '';
      sections.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn' + (i === current ? ' active' : '');
        const secTitle = (typeof tSectionTitle === 'function' && tSectionTitle(s.id)) || s.title;
        if (s.icon) {
          btn.innerHTML = '<span class="ms ms-sm" style="margin-right:0.25rem;vertical-align:middle;opacity:0.7">' + s.icon + '</span>' + secTitle;
        } else {
          btn.textContent = secTitle;
        }
        btn.id = 'nav-btn-' + i;
        btn.onclick = () => go(i);
        if (i === current) {
          if (_currentStyle === 'default') {
            btn.style.background = s.color + '33'; // 20% opacity
            btn.style.borderColor = s.color;
            btn.style.color = s.color;
          } else {
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
          }
        }
        nav.appendChild(btn);
      });
    }

    function centerNavTab() {
      const navBar = document.getElementById('nav-bar');
      const activeBtn = document.getElementById('nav-btn-' + current);
      if (!activeBtn) return;

      const navRect = navBar.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();

      const scrollLeft = navBar.scrollLeft + (btnRect.left - navRect.left) - (navRect.width / 2) + (btnRect.width / 2);

      try {
        navBar.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      } catch (e) {
        navBar.scrollLeft = scrollLeft;
      }
    }

    function buildDots() {
      const dots = document.getElementById('progress-dots');
      if (!dots) return;
      dots.innerHTML = '';
      sections.forEach((s, i) => {
        const d = document.createElement('div');
        d.className = 'dot' + (i === current ? ' active' : '');
        if (i === current) d.style.background = s.color;
        dots.appendChild(d);
      });
    }

    function renderBlock(b, index) {
      const sid = sections[current].id;
      const engText = tSection(sid, index, 'english') || b.english;
      let html = `<div class="block animate-in" style="animation-delay: ${index * 0.1}s">
    <h4>${b.rule}</h4>
    <p class="eng-desc">${engText}</p>`;

      if (b.table) {
        // Find if there's an 'English' column — if so, add native lang column when not EN
        const engColIdx = b.table.headers.findIndex(h => /english/i.test(h));
        const addNative = currentLang !== 'en' && engColIdx >= 0;
        const langName = addNative ? (nativeLangName[currentLang] || currentLang.toUpperCase()) : '';

        // Determine which columns are NOT French (English, Native translation, Rule, Meaning, Gender/Number categories, etc.)
        const nonFrHeaderRegex = /^(gender[\s/]*number|english.*|rule.*|meaning.*|sound|pronunciation|usage.*|hint|notes?|règle|signification|number|nombre|chiffre|owner|method|register|feature|what\s+happened|what\s+changed|infinitive\s+ends.*|remove\s+to\s+get.*|nuance|time|step|formula|connector|exception\s+marker|diagnostic\s+question|tense\s+selection|tense\s+signaled|marker|literal|ending\s+sound|type|group|full\s+english\s+translation)$/i;

        let headers = [...b.table.headers];
        if (addNative) headers.splice(engColIdx + 1, 0, langName);

        const ths = headers.map(h => {
          const cleanH = h.toLowerCase().trim();
          const db = window.__FRENCH_VERBS_DB__;
          const isVerbInDb = db && (cleanH in db || ('se ' + cleanH) in db);
          if (isVerbInDb) {
            return `<th><span class="verb-lookup-trigger" onclick="openVerbModal('${cleanH}')" title="Click to see all conjugations for ${h}">${h} <span class="ms ms-sm" style="font-size:0.75rem;vertical-align:middle;">open_in_new</span></span></th>`;
          }
          return `<th>${h}</th>`;
        }).join('');
        const trs = b.table.rows.map(row => {
          let cells = [...row];
          if (addNative) {
            const engVal = row[engColIdx] || '';
            const native = (tableT[engVal] && tableT[engVal][currentLang]) || '';
            cells.splice(engColIdx + 1, 0, native
              ? `<span style="color:var(--text-secondary)">${native}</span>`
              : `<span style="color:var(--text-muted);font-style:italic">—</span>`);
          }
          return `<tr>${cells.map((c, colIdx) => {
            const headerName = headers[colIdx] || '';
            const isNonFrCol = nonFrHeaderRegex.test(headerName) || (addNative && colIdx === engColIdx + 1);
            if (!isNonFrCol) {
              const spk = makeSpeakerHtml(c, 'tbl-speak-btn');
              const displayVal = formatFrenchDisplay(c);
              if (spk) return `<td><div class="tbl-cell-inner">${spk}<span>${displayVal}</span></div></td>`;
              return `<td>${displayVal}</td>`;
            }
            return `<td>${c}</td>`;
          }).join('')}</tr>`;
        }).join('');
        html += `<div class="tbl-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
      }

      if (b.examples) {
        html += `<div class="examples">${b.examples.map(e => {
          const native = currentLang !== 'en' && e.english && tableT[e.english]
            ? tableT[e.english][currentLang] : '';
          const frEscaped = (e.french || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
          const frFormatted = formatFrenchDisplay(e.french || '');
          return `<div class="example-row">
        <button class="ex-speak-btn" onclick="speakFrench('${frEscaped}', this)" title="Listen in French" aria-label="Listen to French pronunciation"><span class="ms ms-sm">volume_up</span></button>
        <span class="ex-fr">${frFormatted}</span>
        <span class="ex-arrow">→</span>
        <span class="ex-en">${e.english}</span>${native
              ? `<span class="ex-arrow">·</span><span class="ex-native">${native}</span>`
              : ''}
      </div>`;
        }).join('')}</div>`;
      }

      if (b.double) {
        const half = (t) => {
          const rows = t.rows.map(r => {
            const spk = makeSpeakerHtml(r[0], 'tbl-speak-btn');
            const frFormatted = formatFrenchDisplay(r[0]);
            const frCell = spk ? `<div class="tbl-cell-inner">${spk}<span>${frFormatted}</span></div>` : frFormatted;
            return `<tr><td>${frCell}</td><td>${r[1]}</td></tr>`;
          }).join('');
          return `<div style="flex:1;min-width:0;width:100%"><h5 style="color:var(--text-secondary);margin-bottom:8px">${t.title}</h5><div class="tbl-wrap"><table><tbody>${rows}</tbody></table></div></div>`;
        };
        html += `<div style="display:flex;gap:16px;flex-wrap:wrap;width:100%">${half(b.left)}${half(b.right)}</div>`;
      }

      if (b.tip) {
        const isQuebec = b.tip.includes('🍁');
        const rawTip = tSection(sid, index, 'tip') || b.tip;
        const tipText = rawTip.replace(/^[🍁💡]\s*/, '').trim();
        html += '<div class="tip-box' + (isQuebec ? ' tip-quebec' : '') + '">' + tipText + '</div>';
      }

      const ihtml = interactiveHTML(sections[current].id, index);
      if (ihtml) html += ihtml;
      if (b.customHtml) html += b.customHtml;

      html += `</div>`;
      return html;
    }

    /* ============================================================
       INTERACTIVE WIDGETS  v2 — full rewrite
       • interactiveHTML(sid, bi) → HTML string injected into block
       • initWidgets(sid)         → wires all event handlers
       • Every widget has a Reset button
       • Quiz widgets cycle through all vocab before repeating
    ============================================================ */

    // ── Shared helpers ──────────────────────────────────────────

    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function makeQuiz(cfg) {
      // cfg: { pool, getId, getQuestion, getHint, getChoices, check, idPrefix, choiceKey }
      // Returns { show, check, reset } bound to DOM ids via idPrefix
      let deck = [], idx = 0, score = [0, 0];
      function refill() { deck = shuffle(cfg.pool); idx = 0; }
      refill();

      function show() {
        if (idx >= deck.length) refill();
        const item = deck[idx];
        const qEl = document.getElementById(cfg.idPrefix + '-q');
        const hEl = document.getElementById(cfg.idPrefix + '-hint');
        const rEl = document.getElementById(cfg.idPrefix + '-result');
        const scEl = document.getElementById(cfg.idPrefix + '-score');
        const cEl = document.getElementById(cfg.idPrefix + '-choices');
        if (!qEl || !cEl) return;
        const rawQ = cfg.getQuestion(item);
        // Add a speaker button if question contains French text (e.g. item.w, item.verb, or raw question)
        const frSpkWord = item.w || item.form || (item.verb ? (item.subj ? `${item.subj} ${item.verb}` : item.verb) : '');
        let qContent = rawQ;
        if (frSpkWord) {
          const spk = makeSpeakerHtml(frSpkWord, 'widget-speak-btn');
          if (spk) qContent = `<div class="quiz-q-inner">${spk}<span>${rawQ}</span></div>`;
        }
        qEl.innerHTML = qContent;
        if (hEl) hEl.textContent = cfg.getHint ? cfg.getHint(item) : '';
        if (rEl) rEl.textContent = '';
        const expEl2 = document.getElementById(cfg.idPrefix + '-explain');
        const nrEl2 = document.getElementById(cfg.idPrefix + '-next-row');
        if (expEl2) { expEl2.style.display = 'none'; expEl2.innerHTML = ''; }
        if (nrEl2) { nrEl2.style.display = 'none'; }
        const choices = cfg.getChoices(item);
        cEl.innerHTML = choices.map(c =>
          `<button class="w-pill" onclick="window['${cfg.idPrefix}_check']('${c.replace(/'/g, "\\'")}',this)">${c}</button>`
        ).join('');
        if (scEl) scEl.textContent = score[1] ? `${score[0]}/${score[1]} correct` : '';
      }

      let _pendingTimer = null;

      function advanceQuiz() {
        if (_pendingTimer) { clearTimeout(_pendingTimer); _pendingTimer = null; }
        const expEl = document.getElementById(cfg.idPrefix + '-explain');
        const nrEl = document.getElementById(cfg.idPrefix + '-next-row');
        if (expEl) { expEl.style.display = 'none'; expEl.innerHTML = ''; }
        if (nrEl) { nrEl.style.display = 'none'; }
        show();
      }

      window[cfg.idPrefix + '_next'] = advanceQuiz;

      window[cfg.idPrefix + '_check'] = function (choice, btn) {
        const item = deck[idx];
        const rEl = document.getElementById(cfg.idPrefix + '-result');
        const scEl = document.getElementById(cfg.idPrefix + '-score');
        const cEl = document.getElementById(cfg.idPrefix + '-choices');
        const expEl = document.getElementById(cfg.idPrefix + '-explain');
        const nrEl = document.getElementById(cfg.idPrefix + '-next-row');
        const nBtn = document.getElementById(cfg.idPrefix + '-next-btn');
        if (!cEl) return; // widget unmounted
        cEl.querySelectorAll('.w-pill').forEach(b => b.disabled = true);
        const correct = cfg.check(item, choice);
        btn.classList.add(correct ? 'correct' : 'wrong');

        if (!correct) {
          // Highlight correct answer
          cEl.querySelectorAll('.w-pill').forEach(b => {
            if (b.textContent === cfg.getCorrect(item)) b.classList.add('correct');
          });

          // Build detailed explanation panel
          if (expEl) {
            const explanation = cfg.getExplanation ? cfg.getExplanation(item, choice) : null;
            const failMsg = cfg.getFailure(item, choice);
            const whyLabel = t('whyWrong') || "Why it's wrong";
            let exhtml = `<div class="quiz-explain">
              <div class="quiz-explain-head">💡 ${whyLabel}</div>
              <div class="quiz-explain-body">`;

            if (explanation && explanation.why) {
              exhtml += `<span style="color:var(--red);font-family:'Azeret Mono',monospace;font-weight:700">${choice}</span> — ${explanation.why}`;
            } else {
              exhtml += `<span style="color:var(--red);font-family:'Azeret Mono',monospace;font-weight:700">${choice}</span> ${t('isIncorrect') || "is incorrect here"}.`;
            }

            const correctSpk = makeSpeakerHtml(cfg.getCorrect(item), 'widget-speak-btn');
            exhtml += `<div class="quiz-explain-rule">`;
            exhtml += `<span style="color:var(--green)">✓</span> ${correctSpk}<strong>${cfg.getCorrect(item)}</strong> — ${failMsg}`;
            if (explanation && explanation.rule) {
              exhtml += `<br><span style="color:var(--secondary)">📌</span> ${explanation.rule}`;
            }
            exhtml += `</div></div></div>`;

            expEl.style.display = 'block';
            expEl.innerHTML = exhtml;
          }
        } else {
          if (expEl) { expEl.style.display = 'none'; expEl.innerHTML = ''; }
        }

        if (rEl) {
          if (correct) {
            const successText = cfg.getSuccess(item, choice);
            // If item has a French phrase/word or successText has French
            const frText = item.w ? `${choice} ${item.w}` : (item.ans && item.subj ? `${item.subj} ${item.ans}` : (item.ans || choice));
            const spk = makeSpeakerHtml(frText, 'widget-speak-btn');
            rEl.innerHTML = `<span style="color:var(--green);display:inline-flex;align-items:center;gap:6px">✓ ${spk}<span>${successText}</span></span>`;
          } else {
            rEl.innerHTML = '';
          }
        }
        score[correct ? 0 : 1] += correct ? 1 : 0;
        score[1]++;
        if (scEl) scEl.textContent = `${score[0]}/${score[1]} correct`;
        idx++;

        // Show Next button — label changes based on correct/wrong
        if (nrEl && nBtn) {
          nBtn.textContent = correct
            ? (t('nextQuestion') || 'Next') + ' →'
            : (t('gotIt') || 'Got it') + ' →';
          nBtn.className = 'quiz-next-btn' + (correct ? ' quiz-next-correct' : ' quiz-next-wrong');
          nrEl.style.display = 'flex';
        }
      };

      window[cfg.idPrefix + '_reset'] = function () {
        if (_pendingTimer) { clearTimeout(_pendingTimer); _pendingTimer = null; }
        score = [0, 0]; refill();
        const scEl = document.getElementById(cfg.idPrefix + '-score');
        const expEl = document.getElementById(cfg.idPrefix + '-explain');
        const nrEl = document.getElementById(cfg.idPrefix + '-next-row');
        if (scEl) scEl.textContent = '';
        if (expEl) { expEl.style.display = 'none'; expEl.innerHTML = ''; }
        if (nrEl) { nrEl.style.display = 'none'; }
        show();
      };

      show(); // initial display
    }

    function widgetShell(id, label, inner) {
      return `<div class="widget" id="${id}">
        <div class="widget-label">${label}
          <button class="w-reset-btn" onclick="window['${id}_reset'] && window['${id}_reset']()" title="Reset">${t('reset')}</button>
        </div>${inner}</div>`;
    }

    function quizShell(pfx, label) {
      return widgetShell('w-' + pfx, label, `
        <div class="article-display">
          <div class="article-word" id="${pfx}-q"></div>
          <div class="article-hint" id="${pfx}-hint"></div>
          <div class="article-choices" id="${pfx}-choices"></div>
          <div class="article-result" id="${pfx}-result"></div>
          <div id="${pfx}-explain" style="display:none"></div>
          <div class="quiz-next-row" id="${pfx}-next-row" style="display:none">
            <button class="quiz-next-btn" id="${pfx}-next-btn"
              onclick="window['${pfx}_next'] && window['${pfx}_next']()">
              ${t('nextQuestion') || 'Next'} →
            </button>
          </div>
          <div class="article-score" id="${pfx}-score"></div>
        </div>`);
    }

    // ── HTML templates ──────────────────────────────────────────

    function interactiveHTML(sid, bi) {
      const key = sid + '_' + bi;
      const W = {

        // ── 1. ARTICLES — definite articles quiz
        'articles_0': () => quizShell('art', t('quizLabel_art')),

        // ── 2. ARTICLES — partitive / indefinite
        'articles_2': () => quizShell('part', t('quizLabel_part')),

        // ── 3. NOUNS — gender sorter & noun-ending predictor
        'nouns_0': () => widgetShell('w-noun', t('quizLabel_noun'), `
          <div class="gender-tool-tabs">
            <button class="g-tab-btn active" id="g-tab-quiz" onclick="switchNounTab('quiz')"><span class="ms ms-sm">quiz</span> Practice Quiz</button>
            <button class="g-tab-btn" id="g-tab-pred" onclick="switchNounTab('pred')"><span class="ms ms-sm">psychology</span> Noun-Ending Predictor</button>
          </div>

          <div id="noun-quiz-pane">
            <div class="article-display">
              <div class="article-word" id="noun-q" style="font-size:1.8rem"></div>
              <div class="article-hint" id="noun-hint"></div>
              <div class="article-choices">
                <button class="w-pill w-pill-m" id="noun-m" onclick="window['noun_check']('m',this)">${t('masculin')} (un / le)</button>
                <button class="w-pill w-pill-f" id="noun-f" onclick="window['noun_check']('f',this)">${t('feminin')} (une / la)</button>
              </div>
              <div class="article-result" id="noun-result"></div>
              <div class="article-score" id="noun-score"></div>
            </div>
          </div>

          <div id="noun-pred-pane" style="display:none">
            <div class="gp-container">
              <p class="gp-desc">Over 80% of French noun genders follow word ending rules. Type any noun to predict its gender and see the exact linguistic ending rule:</p>
              <div class="gp-input-row">
                <input class="gp-input" id="gp-input" type="text" placeholder="e.g. nation, voyage, bicyclette, moment…" oninput="window.runGenderPredictor()" autocomplete="off" spellcheck="false">
                <button class="gp-check-btn" onclick="window.runGenderPredictor()"><span class="ms ms-sm">search</span> Analyze</button>
              </div>
              <div class="gp-chips">
                <span class="gp-chip-label">Try:</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='situation';window.runGenderPredictor()">situation</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='gouvernement';window.runGenderPredictor()">gouvernement</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='bicyclette';window.runGenderPredictor()">bicyclette</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='miroir';window.runGenderPredictor()">miroir</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='voiture';window.runGenderPredictor()">voiture</span>
                <span class="gp-chip" onclick="document.getElementById('gp-input').value='tourisme';window.runGenderPredictor()">tourisme</span>
              </div>
              <div id="gp-result" class="gp-result-wrap">
                <span style="color:var(--text-muted)">Type a French noun above or click an example chip.</span>
              </div>
            </div>
          </div>`),

        // ── 4. PRONOUNS — tu vs vous chooser
        'pronouns_0': () => widgetShell('w-pron', t('quizLabel_pron'), `
          <div class="article-display">
            <div class="article-word" id="pron-q" style="font-size:1.1rem;line-height:1.6"></div>
            <div class="article-hint" id="pron-hint"></div>
            <div class="article-choices">
              <button class="w-pill" onclick="window['pron_check']('tu',this)">tu</button>
              <button class="w-pill" onclick="window['pron_check']('vous',this)">vous</button>
              <button class="w-pill" onclick="window['pron_check']('on',this)">on</button>
            </div>
            <div class="article-result" id="pron-result"></div>
            <div class="article-score" id="pron-score"></div>
          </div>`),

        // ── 5. VERBS — conjugation builder
        'verbs_0': () => widgetShell('w-conj', 'Build the conjugation', `
          <div class="conj-builder">
            <div class="conj-row">
              <label>${t('pronoun')}</label>
              ${['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'].map(p =>
          `<button class="w-pill" onclick="conjPick('pron','${p}',this)">${p}</button>`
        ).join('')}
            </div>
            <div class="conj-row">
              <label>${t('erVerb')}</label>
              ${['parler', 'manger', 'travailler', 'aimer', 'voyager', 'chanter'].map(v =>
          `<button class="w-pill" onclick="conjPick('verb','${v}',this)">${v}</button>`
        ).join('')}
            </div>
            <div class="conj-result-box" id="conj-result">← pick a pronoun and verb</div>
          </div>`),

        // ── 6. VERBS — être vs avoir fill-in
        'verbs_3': () => quizShell('etav', t('quizLabel_etav')),

        // ── 7. SENTENCE STRUCTURE — negation animator
        'sentences_1': () => widgetShell('w-neg', t('quizLabel_neg'), `
          <div class="conj-row" style="margin-bottom:12px" id="neg-pills">
            ${['parler', 'aimer', 'avoir', 'aller', 'manger', 'vouloir'].map(v =>
          `<button class="w-pill" onclick="negPick('${v}',this)">${v}</button>`
        ).join('')}
          </div>
          <div id="neg-display" class="neg-sentence"></div>
          <div id="neg-english" style="font-size:0.85rem;color:var(--text-secondary);margin-top:6px"></div>
          <label style="display:flex;align-items:center;gap:8px;margin-top:12px;font-size:0.8rem;color:var(--text-secondary);cursor:pointer">
            <input type="checkbox" id="neg-qc-toggle" style="accent-color:var(--secondary)">
            ${t('qcMode')}
          </label>`),

        // ── 8. ADJECTIVES — agreement transformer
        'adjectives_0': () => widgetShell('w-agree', t('quizLabel_agree'), `
          <div class="agree-grid">
            <div class="agree-card sel" data-ag="gender" data-val="m" onclick="agreePick('gender','m',this)">
              <div class="ag-label">Gender</div><div class="ag-val">Masculine</div>
            </div>
            <div class="agree-card" data-ag="gender" data-val="f" onclick="agreePick('gender','f',this)">
              <div class="ag-label">Gender</div><div class="ag-val">Feminine</div>
            </div>
            <div class="agree-card sel" data-ag="number" data-val="s" onclick="agreePick('number','s',this)">
              <div class="ag-label">Number</div><div class="ag-val">Singular</div>
            </div>
            <div class="agree-card" data-ag="number" data-val="p" onclick="agreePick('number','p',this)">
              <div class="ag-label">Number</div><div class="ag-val">Plural</div>
            </div>
          </div>
          <div class="conj-row" id="ag-adj-row" style="margin:10px 0 4px">
            <span style="font-size:0.8rem;color:var(--text-secondary);min-width:70px">Adjective</span>
            ${['grand', 'petit', 'beau', 'nouveau', 'bon'].map((a, i) =>
          `<button class="w-pill${i === 0 ? ' selected' : ''}" onclick="agAdj('${a}',this)">${a}</button>`
        ).join('')}
          </div>
          <div id="agree-row" class="agree-result-row"></div>`),

        // ── 9. PREPOSITIONS — contraction animator
        'prepositions_1': () => widgetShell('w-contract', t('quizLabel_contr'), `
          <div class="conj-row" id="contract-pills" style="margin-bottom:12px">
            ${[['à', 'le'], ['à', 'les'], ['de', 'le'], ['de', 'les'], ['à', 'la'], ["à", "l'"]].map((c, i) =>
          `<button class="w-pill" onclick="contractPick(${i},this)">${c[0]} + ${c[1]}</button>`
        ).join('')}
          </div>
          <div class="contract-demo" id="contract-display"></div>
          <div id="contract-example" style="text-align:center;font-size:0.9rem;color:var(--text-secondary);margin-top:8px"></div>`),

        // ── 10. POSSESSIVES — possessive quiz
        'possessives_0': () => quizShell('poss', t('quizLabel_poss')),

        'possessives_1': () => widgetShell('w-dem', t('quizLabel_dem') || 'Demonstratives: Distance', `
          <div style="text-align:center; padding: 20px; font-family: 'Azeret Mono', monospace; background: var(--surface-1); border-radius: var(--r-md);">
            <div style="margin-bottom: 20px; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; gap: 8px;" id="dem-sentence-wrap">
              <button class="widget-speak-btn" id="dem-speak-btn" onclick="window.speakFrench('Je prends ' + document.getElementById('dem-pronoun').textContent, this)" title="Listen in French" aria-label="Listen to French"><span class="ms ms-sm">volume_up</span></button>
              <div id="dem-sentence">Je prends <strong id="dem-pronoun" style="color:var(--blue); transition: color 0.3s;">celui-ci</strong>.</div>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 15px; font-size: 0.8rem; font-weight: bold; color: var(--text-secondary);">
              <span id="dem-lbl-close">Here (-ci)</span>
              <span id="dem-lbl-far">There (-là)</span>
            </div>
            <input type="range" min="0" max="100" value="0" id="dem-slider" oninput="window.demUpdate()" style="width:100%; accent-color: var(--blue); cursor: ew-resize;">
            
            <div style="margin-top:20px; display:flex; gap:10px; justify-content:center; flex-wrap: wrap;">
              <button class="w-pill selected" onclick="window.demSetType('ms', this)">Masc. Sg.</button>
              <button class="w-pill" onclick="window.demSetType('fs', this)">Fem. Sg.</button>
              <button class="w-pill" onclick="window.demSetType('mp', this)">Masc. Pl.</button>
              <button class="w-pill" onclick="window.demSetType('fp', this)">Fem. Pl.</button>
            </div>
            <div id="dem-translation" style="margin-top:15px; font-style:italic; color:var(--text-secondary); min-height: 2.5em;">
              I'm taking this one.
            </div>
          </div>`),

        // ── 11. NUMBERS — interactive clock
        'numbers_1': () => widgetShell('w-clock', t('quizLabel_clock'), `
          <div class="clock-wrap">
            <div class="clock-svg-wrap">
              <svg id="clock-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="74" fill="#1e1e1e" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
                ${[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => {
          const a = (i * 30 - 60) * Math.PI / 180;
          const x = 80 + 58 * Math.cos(a), y = 80 + 58 * Math.sin(a);
          return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.6)" font-size="10" font-family="Azeret Mono,monospace">${n}</text>`;
        }).join('')}
                <line id="cl-hour" x1="80" y1="80" x2="80" y2="46" stroke="#4285F4" stroke-width="5" stroke-linecap="round"/>
                <line id="cl-min"  x1="80" y1="80" x2="80" y2="32" stroke="#FBBC04" stroke-width="3" stroke-linecap="round"/>
                <circle cx="80" cy="80" r="4" fill="#e8eaed"/>
              </svg>
            </div>
            <div class="clock-controls">
              <label>Heure: <strong id="cl-h-val">3</strong></label>
              <input type="range" min="1" max="12" value="3" id="cl-hour-r" oninput="clockUpdate()">
              <label>Minutes: <strong id="cl-m-val">00</strong></label>
              <input type="range" min="0" max="59" value="0" id="cl-min-r" oninput="clockUpdate()">
              <div class="clock-french" id="cl-french"></div>
              <div class="clock-english" id="cl-english"></div>
            </div>
          </div>`),

        // ── 12. PASSÉ COMPOSÉ — être/avoir drag sorter
        'passe_compose_0': () => widgetShell('w-pc', t('quizLabel_pc') || 'Passé Composé — Build the Sentence', `
          <div class="ve-workshop" id="ve-pc-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-pc-input" type="text" placeholder="manger…" oninput="veUpdateTense('pc')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any French verb</span>
            </div>
            <div class="ve-split" id="ve-pc-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-pc-table" style="display:none">
              <table class="ve-tbl">
                <thead><tr><th style="width:25%">PRONOUN</th><th style="width:40%">FORM</th><th>ENGLISH</th></tr></thead>
                <tbody id="ve-pc-tbody"></tbody>
              </table>
            </div>
          </div>
        `),

        'passe_compose_2': () => quizShell('pc-switch', t('quizLabel_pc_switch') || 'Tricky Switch Verbs: Être or Avoir?'),

        'passe_compose_3': () => widgetShell('w-sorter', t('quizLabel_sorter'), `
          <div class="sorter-source" id="sorter-source"></div>
          <div class="sorter-wrap">
            <div class="sorter-bin avoir-bin" id="bin-avoir"
                 ondragover="event.preventDefault();this.classList.add('over')"
                 ondragleave="this.classList.remove('over')"
                 ondrop="sorterDrop(event,'avoir')">
              <h5>🔵 avoir</h5>
              <div class="sorter-cards" id="cards-avoir"></div>
            </div>
            <div class="sorter-bin etre-bin" id="bin-etre"
                 ondragover="event.preventDefault();this.classList.add('over')"
                 ondragleave="this.classList.remove('over')"
                 ondrop="sorterDrop(event,'être')">
              <h5>🟢 être</h5>
              <div class="sorter-cards" id="cards-etre"></div>
            </div>
          </div>
          <div id="sorter-feedback" style="font-size:0.85rem;margin-top:10px;min-height:1.4em"></div>`),

        // ── 13. OBJECT PRONOUNS — direct object pronoun quiz
        'object_pronouns_0': () => quizShell('cod', t('quizLabel_cod')),

        // ── 14. IMPERATIVES — command builder
        'imperatives_0': () => widgetShell('w-imp', t('quizLabel_imp'), `
          <div class="conj-builder">
            <div class="conj-row">
              <label>${t('person')}</label>
              ${['tu', 'nous', 'vous'].map(p =>
          `<button class="w-pill" onclick="impPick('person','${p}',this)">${p}</button>`
        ).join('')}
            </div>
            <div class="conj-row">
              <label>${t('verb')}</label>
              ${['parler', 'finir', 'manger', 'partir', 'prendre', 'être'].map(v =>
          `<button class="w-pill" onclick="impPick('verb','${v}',this)">${v}</button>`
        ).join('')}
            </div>
            <label style="display:flex;align-items:center;gap:8px;font-size:0.8rem;color:var(--text-secondary);cursor:pointer;margin-bottom:8px">
              <input type="checkbox" id="imp-neg-toggle" style="accent-color:#EA4335" onchange="window._impRefresh && window._impRefresh()">
              🚫 Negative command (ne…pas)
            </label>
            <div class="conj-result-box" id="imp-result">← choose a person and verb</div>
          </div>`),

        // ── 15. USEFUL STRUCTURES — near future builder
        'useful_structures_0': () => quizShell('fut', t('quizLabel_fut')),

        // ── 16. QUÉBEC VOCAB — translation quiz
        'quebec_vocab_0': () => quizShell('qvoc', t('quizLabel_qvoc')),

        // ── 17. COD & COI — pronoun placement quiz
        'cod_coi_0': () => quizShell('codcoi', t('quizLabel_codcoi')),

        // ── 18. PRONOMINAL VERBS — conjugation quiz
        'pronominal_0': () => quizShell('pron2', t('quizLabel_pron2')),

        // ── 19. VERB ENDINGS — conjugation workshop
        // ── 19. VERB ENDINGS — conjugation workshop
        'verb_endings_0': () => widgetShell('w-ve-groups', t('quizLabel_ve_compare') || 'All three groups side-by-side', `
          <div class="ve-compare" id="ve-compare-grid"></div>
          <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary); font-size: 1.1rem;">Other Tenses</h4>
          <style>@media (min-width: 768px) { #ve-tenses-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 0.5rem; } }</style>
          <div class="ve-compare" id="ve-tenses-grid"></div>`),

        'verb_endings_1': () => widgetShell('w-ve-er', t('quizLabel_ve_er') || 'Build any -ER conjugation live', `
          <div class="ve-workshop" id="ve-er-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-er-input" type="text" placeholder="parler…" oninput="veUpdate('er')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any -ER verb</span>
            </div>
            <div class="ve-split" id="ve-er-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-er-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>Sound</th><th>English</th></tr></thead>
              <tbody id="ve-er-tbody"></tbody></table>
            </div>
          </div>`),

        'verb_endings_2': () => widgetShell('w-ve-ir', t('quizLabel_ve_ir') || 'Build any -IR conjugation live', `
          <div class="ve-workshop" id="ve-ir-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-ir-input" type="text" placeholder="finir…" oninput="veUpdate('ir')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any -IR verb</span>
            </div>
            <div class="ve-split" id="ve-ir-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-ir-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>Sound</th><th>English (finir)</th></tr></thead>
              <tbody id="ve-ir-tbody"></tbody></table>
            </div>
          </div>`),

        'verb_endings_3': () => widgetShell('w-ve-re', t('quizLabel_ve_re') || 'Build any -RE conjugation live', `
          <div class="ve-workshop" id="ve-re-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-re-input" type="text" placeholder="attendre…" oninput="veUpdate('re')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any -RE verb</span>
            </div>
            <div class="ve-split" id="ve-re-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-re-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>Sound</th><th>English (attendre)</th></tr></thead>
              <tbody id="ve-re-tbody"></tbody></table>
            </div>
          </div>`),

        'verb_endings_4': () => widgetShell('w-ve-pron', t('quizLabel_ve_pron') || 'Pronunciation quiz — which ending is silent?', `
          <div class="article-display">
            <div class="article-word" id="vep-q" style="font-size:1.4rem"></div>
            <div class="article-hint" id="vep-hint"></div>
            <div class="article-choices" id="vep-choices"></div>
            <div class="article-result" id="vep-result"></div>
            <div class="quiz-next-row" id="vep-next-row" style="display:none">
              <button class="quiz-next-btn quiz-next-correct" id="vep-next-btn" onclick="window['vep_next'] && window['vep_next']()">Next →</button>
            </div>
            <div class="article-score" id="vep-score"></div>
          </div>`),

        'futur_proche_0': () => widgetShell('w-fp', t('quizLabel_fp') || 'Futur Proche Builder', `
          <div class="ve-workshop" id="ve-fp-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-fp-input" type="text" placeholder="parler…" oninput="veUpdateTense('fp')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any French verb</span>
            </div>
            <div class="ve-split" id="ve-fp-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-fp-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-fp-tbody"></tbody></table>
            </div>
          </div>`),

        'futur_simple_0': () => widgetShell('w-fs', t('quizLabel_fs') || 'Futur Simple Builder', `
          <div class="ve-workshop" id="ve-fs-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-fs-input" type="text" placeholder="parler…" oninput="veUpdateTense('fs')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any regular French verb</span>
            </div>
            <div class="ve-split" id="ve-fs-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-fs-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-fs-tbody"></tbody></table>
            </div>
          </div>`),

        'imparfait_0': () => widgetShell('w-impf', t('quizLabel_impf') || 'Imparfait Builder', `
          <div class="ve-workshop" id="ve-impf-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-impf-input" type="text" placeholder="parler…" oninput="veUpdateTense('impf')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any regular French verb</span>
            </div>
            <div class="ve-split" id="ve-impf-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-impf-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-impf-tbody"></tbody></table>
            </div>
          </div>`),

        'conditionnel_0': () => widgetShell('w-cond', t('quizLabel_cond') || 'Conditionnel Builder', `
          <div class="ve-workshop" id="ve-cond-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-cond-input" type="text" placeholder="parler…" oninput="veUpdateTense('cond')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any regular French verb</span>
            </div>
            <div class="ve-split" id="ve-cond-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-cond-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-cond-tbody"></tbody></table>
            </div>
          </div>`),

        'passe_recent_0': () => widgetShell('w-pr', t('quizLabel_pr') || 'Passé Récent Builder', `
          <div class="ve-workshop" id="ve-pr-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-pr-input" type="text" placeholder="parler…" oninput="veUpdateTense('pr')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any French verb</span>
            </div>
            <div class="ve-split" id="ve-pr-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-pr-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Pronoun</th><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-pr-tbody"></tbody></table>
            </div>
          </div>`),

        'gerondif_0': () => widgetShell('w-ger', t('quizLabel_ger') || 'Le Gérondif Builder', `
          <div class="ve-workshop" id="ve-ger-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-ger-input" type="text" placeholder="parler…" oninput="veUpdateTense('ger')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any regular French verb</span>
            </div>
            <div class="ve-split" id="ve-ger-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-ger-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Form</th><th>English</th></tr></thead>
              <tbody id="ve-ger-tbody"></tbody></table>
            </div>
          </div>`),

        'pronom_y_0': () => widgetShell('w-y', t('quizLabel_y') || 'Le Pronom Y', `
          <div class="ve-workshop" id="ve-y-workshop">
            <div class="ve-input-row">
              <input class="ve-input" id="ve-y-input" type="text" placeholder="à Montréal…" oninput="veUpdateTense('y')" autocomplete="off" autocorrect="off" spellcheck="false">
              <span style="font-size:0.8rem;color:var(--text-muted)">— any destination/location</span>
            </div>
            <div class="ve-split" id="ve-y-split" style="display:none"></div>
            <div class="tbl-wrap" id="ve-y-table" style="display:none">
              <table class="ve-table"><thead><tr><th>Original Sentence</th><th>With Pronom Y</th><th>English</th></tr></thead>
              <tbody id="ve-y-tbody"></tbody></table>
            </div>
          </div>`),
      };
      return W[key] ? W[key]() : null;
    }

    // ── Widget initialisation ───────────────────────────────────

    const engBaseDict = {
      // Irregulars / high-frequency
      "être": "be", "avoir": "have", "aller": "go", "faire": "do",
      "pouvoir": "can", "vouloir": "want", "devoir": "must",
      "savoir": "know", "valoir": "be worth", "pleuvoir": "rain",
      "falloir": "have to",
      // -er verbs: daily life & body
      "laver": "wash", "nettoyer": "clean", "ranger": "tidy up",
      "coucher": "put to bed", "réveiller": "wake up", "habiller": "dress",
      "peigner": "comb", "doucher": "shower", "baigner": "bathe",
      "manger": "eat", "boire": "drink", "cuisiner": "cook",
      "préparer": "prepare", "commander": "order", "goûter": "taste",
      "habiter": "live", "loger": "stay", "déménager": "move",
      "visiter": "visit", "rencontrer": "meet", "inviter": "invite",
      "parler": "speak", "chanter": "sing", "danser": "dance",
      "jouer": "play", "regarder": "watch", "écouter": "listen",
      "travailler": "work", "étudier": "study", "apprendre": "learn",
      "voyager": "travel", "marcher": "walk", "courir": "run",
      "nager": "swim", "conduire": "drive", "monter": "go up",
      "entrer": "enter", "sortir": "go out", "rentrer": "come back",
      "rester": "stay", "tomber": "fall", "arriver": "arrive",
      "partir": "leave", "revenir": "come back",
      "chercher": "look for", "trouver": "find", "perdre": "lose",
      "oublier": "forget", "apporter": "bring", "emporter": "take away",
      "donner": "give", "montrer": "show", "expliquer": "explain",
      "demander": "ask", "répondre": "answer", "dire": "say",
      "appeler": "call", "téléphoner": "call", "envoyer": "send",
      "recevoir": "receive", "lire": "read", "écrire": "write",
      "dessiner": "draw", "créer": "create", "peindre": "paint",
      "choisir": "choose", "décider": "decide", "refuser": "refuse",
      "accepter": "accept", "essayer": "try", "réussir": "succeed",
      "échouer": "fail", "gagner": "win", "perdre": "lose",
      "changer": "change", "améliorer": "improve", "réparer": "fix",
      "construire": "build", "détruire": "destroy",
      "penser": "think", "croire": "believe", "comprendre": "understand",
      "prendre": "take", "mettre": "put", "poser": "put down",
      "jeter": "throw", "ramasser": "pick up", "porter": "carry",
      "laisser": "leave", "passer": "pass", "traverser": "cross",
      "espérer": "hope", "préférer": "prefer", "regretter": "regret",
      "aimer": "love", "adorer": "adore", "détester": "hate",
      "vouloir": "want", "devoir": "must",
      "dormir": "sleep", "sentir": "feel", "souffrir": "suffer",
      "naître": "be born", "mourir": "die", "vivre": "live",
      "voir": "see", "entendre": "hear", "toucher": "touch",
      "décevoir": "disappoint", "impressionner": "impress",
      "sourire": "smile", "rire": "laugh", "pleurer": "cry",
      "crier": "shout", "chuchoter": "whisper",
      "promettre": "promise", "permettre": "allow",
      "connaître": "know", "paraître": "appear", "sembler": "seem",
      "devenir": "become", "tenir": "hold", "suivre": "follow",
      "rendre": "give back", "défendre": "defend", "attendre": "wait",
      "prêter": "lend", "emprunter": "borrow", "voler": "steal",
      "garder": "keep", "utiliser": "use",
      "agir": "act", "réfléchir": "reflect",
      "grandir": "grow", "remplir": "fill", "rappeler": "remind",
      "continuer": "continue", "arrêter": "stop", "finir": "finish",
      "commencer": "start", "terminer": "finish", "répéter": "repeat",
      "couvrir": "cover", "offrir": "offer", "ouvrir": "open",
      "servir": "serve", "courir": "run",
      "fondre": "melt", "mordre": "bite",
      "venir": "come", "descendre": "go down",
      "payer": "pay", "acheter": "buy", "vendre": "sell",
      "trouver": "find", "montrer": "show", "porter": "wear",
      "continuer": "continue", "oublier": "forget", "travailler": "work",
      "écouter": "listen", "rappeler": "remind",
      "changer": "change", "expliquer": "explain",
      "accepter": "accept", "réfléchir": "reflect", "agir": "act",
      "punir": "punish", "entendre": "hear",
      "prendre": "take", "mettre": "put",
      "lire": "read", "écrire": "write", "rire": "laugh",
      "boire": "drink",
      "savoir": "know", "valoir": "be worth",
      "couvrir": "cover", "offrir": "offer", "souffrir": "suffer",
      "venir": "come", "tenir": "hold", "devenir": "become",
      "revenir": "come back", "dormir": "sleep",
      "partir": "leave", "sentir": "feel", "servir": "serve",
      "vivre": "live", "suivre": "follow", "payer": "pay",
      "envoyer": "send", "nettoyer": "clean", "jeter": "throw",
      "espérer": "hope", "préférer": "prefer", "répéter": "repeat",
      "fermer": "close", "aider": "help", "jouer": "play",
      "passer": "pass", "laisser": "leave", "chercher": "look for",
      "commencer": "start", "essayer": "try", "appeler": "call",
      "gagner": "win", "changer": "change", "expliquer": "explain",
      "parler": "speak", "arriver": "arrive", "travailler": "work",
      "donner": "give", "demander": "ask"
    };

    function getEngVerbInfo(frenchVerb) {
      let fullEng = engBaseDict[frenchVerb];
      // Fallback: use the French infinitive itself — never produce a broken stem
      if (!fullEng) fullEng = frenchVerb;

      // Handle multi-word verbs like "wake up" or "put to bed"
      const parts = fullEng.split(' ');
      let eng = parts[0];
      const rest = parts.slice(1).length > 0 ? ' ' + parts.slice(1).join(' ') : '';

      let s = eng;
      if (!eng.endsWith('s') && !eng.endsWith('sh') && !eng.endsWith('ch') && !eng.endsWith('x') && !eng.endsWith('z') && !eng.endsWith('o')) {
          s = eng + "s";
      } else {
          s = eng + "es";
      }
      if (eng === 'have') s = 'has';
      if (eng === 'be') s = 'is';
      if (eng === 'do') s = 'does';
      if (eng === 'go') s = 'goes';
      if (eng.endsWith('y') && !/[aeiou]y$/.test(eng)) s = eng.slice(0, -1) + 'ies';
      
      let ed = eng + "ed";
      if (eng.endsWith('e')) ed = eng + "d";
      if (eng.endsWith('y') && !/[aeiou]y$/.test(eng)) ed = eng.slice(0, -1) + 'ied';
      const pasts = {'speak': 'spoke', 'eat': 'ate', 'go': 'went', 'see': 'saw', 'have': 'had', 'do': 'did', 'take': 'took', 'make': 'made', 'know': 'knew', 'think': 'thought', 'come': 'came', 'give': 'gave', 'find': 'found', 'tell': 'told', 'become': 'became', 'show': 'showed', 'leave': 'left', 'feel': 'felt', 'put': 'put', 'bring': 'brought', 'begin': 'began', 'keep': 'kept', 'hold': 'held', 'write': 'wrote', 'stand': 'stood', 'hear': 'heard', 'let': 'let', 'mean': 'meant', 'set': 'set', 'meet': 'met', 'run': 'ran', 'pay': 'paid', 'sit': 'sat', 'lie': 'lay', 'lead': 'led', 'read': 'read', 'grow': 'grew', 'lose': 'lost', 'fall': 'fell', 'send': 'sent', 'build': 'built', 'understand': 'understood', 'draw': 'drew', 'break': 'broke', 'spend': 'spent', 'cut': 'cut', 'rise': 'rose', 'drive': 'drove', 'buy': 'bought', 'wear': 'wore', 'choose': 'chose', 'wake': 'woke', 'sleep': 'slept', 'sweep': 'swept', 'catch': 'caught', 'teach': 'taught', 'win': 'won', 'sell': 'sold', 'tell': 'told', 'hide': 'hid', 'bite': 'bit', 'forget': 'forgot', 'fly': 'flew', 'throw': 'threw', 'blow': 'blew', 'draw': 'drew', 'drink': 'drank', 'sing': 'sang', 'swim': 'swam'};
      if (pasts[eng]) ed = pasts[eng];
      
      let ing = eng + "ing";
      if (eng.endsWith('e') && eng !== 'be' && eng !== 'see') ing = eng.slice(0, -1) + "ing";
      // Double consonant cases
      if (['run', 'sit', 'get', 'swim', 'put', 'let', 'set', 'cut', 'win', 'stop'].includes(eng)) ing = eng + eng.slice(-1) + 'ing';

      return { 
        base: fullEng, 
        s: s + rest, 
        ing: ing + rest, 
        ed: ed + rest 
      };
    }

    window.veUpdateTense = function (tense) {
      const inp = document.getElementById('ve-' + tense + '-input');
      const splitEl = document.getElementById('ve-' + tense + '-split');
      const tableEl = document.getElementById('ve-' + tense + '-table');
      const tbodyEl = document.getElementById('ve-' + tense + '-tbody');
      if (!inp || !splitEl) return;

      const raw = inp.value.trim().toLowerCase();
      if (!raw) {
        splitEl.style.display = 'none';
        if (tableEl) tableEl.style.display = 'none';
        return;
      }

      if (tense === 'y') {
        splitEl.style.display = 'flex';
        splitEl.innerHTML = '<span class="ve-split-label">Location</span><span class="ve-stem">' + raw + '</span><span class="ve-arrow">→</span><span class="ve-split-label" style="margin-left:0;color:var(--text-secondary)">replaced by "y"</span>';
        if (tableEl) tableEl.style.display = 'block';
        if (tbodyEl) {
          const examples = [
            { verb: 'aller', frOrig: 'Je vais ' + raw, frY: "J'y vais", en: "I'm going there" },
            { verb: 'habiter', frOrig: "J'habite " + raw, frY: "J'y habite", en: "I live there" },
            { verb: 'penser', frOrig: 'Je pense à ' + raw, frY: "J'y pense", en: "I think about it" },
            { verb: 'être', frOrig: 'Je suis à ' + raw, frY: "J'y suis", en: "I am there" }
          ];
          tbodyEl.innerHTML = examples.map(ex => {
            const spkOrig = makeSpeakerHtml(ex.frOrig, 'tbl-speak-btn');
            const spkY = makeSpeakerHtml(ex.frY, 'tbl-speak-btn');
            return '<tr>' +
              '<td style="color: var(--text-secondary); text-decoration: line-through;"><div class="tbl-cell-inner">' + spkOrig + '<span>' + ex.frOrig + '</span></div></td>' +
              '<td><div class="ve-form">' + spkY + '<span class="ve-form-stem">' + ex.frY.split('y')[0] + '</span><span class="ve-form-ending er" style="color:var(--blue)">y</span><span class="ve-form-stem">' + (ex.frY.split('y')[1] || '') + '</span></div></td>' +
              '<td class="td-en">' + ex.en + '</td>' +
              '</tr>';
          }).join('');
        }
        return;
      }

      const lookupVerb = raw.trim().toLowerCase();
      const conj = typeof FrenchConjugator !== 'undefined' ? FrenchConjugator.conjugate(lookupVerb) : null;
      const vInfo = typeof getEngVerbInfo === 'function' ? getEngVerbInfo(lookupVerb) : { base: lookupVerb, s: lookupVerb, ing: lookupVerb, ed: lookupVerb };

      splitEl.style.display = 'flex';
      splitEl.innerHTML =
        '<span class="ve-split-label">Verb</span>' +
        '<span class="ve-stem">' + lookupVerb + '</span>' +
        '<span class="ve-arrow">→</span><span class="ve-split-label" style="margin-left:0;color:var(--text-secondary)">' + (conj && conj.isReflexive ? 'reflexive verb' : 'infinitive') + '</span>' +
        `<button class="vmodal-chip" style="margin-left:auto;padding:2px 10px;font-size:0.75rem;background:var(--surface-3);" onclick="openVerbModal('${lookupVerb}')" title="See all tenses for ${lookupVerb}"><span class="ms ms-sm" style="color:var(--yellow);margin-right:4px;">auto_stories</span>All Tenses →</button>`;

      if (tableEl) tableEl.style.display = 'block';
      if (!tbodyEl || !conj) return;

      if (tense === 'ger') {
        const form = '<span class="ve-form-stem">' + conj.gerund + '</span>';
        const spk = makeSpeakerHtml(conj.gerund, 'tbl-speak-btn');
        const english = 'while/by ' + vInfo.ing;
        tbodyEl.innerHTML =
          '<tr>' +
          '<td><div class="ve-form">' + spk + form + '</div></td>' +
          '<td class="td-en">' + english + '</td>' +
          '</tr>';
        return;
      }

      const prons = [
        { pron: 'je', en: 'I' },
        { pron: 'tu', en: 'you' },
        { pron: 'il/elle/on', en: 'he/she' },
        { pron: 'nous', en: 'we' },
        { pron: 'vous', en: 'you (pl.)' },
        { pron: 'ils/elles', en: 'they' }
      ];

      tbodyEl.innerHTML = prons.map((p, i) => {
        let form = '';
        let english = '';
        let pronDisplay = p.pron;
        let spokenFr = '';

        if (tense === 'fp') {
          form = '<span class="ve-form-stem">' + conj.fp[i] + '</span>';
          const enBe = p.pron === 'je' ? 'am' : (p.pron === 'il/elle/on' ? 'is' : 'are');
          english = p.en + ' ' + enBe + ' going to ' + vInfo.base;
          pronDisplay = (p.pron === 'je' && !conj.isReflexive) ? 'je' : p.pron;
          spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + conj.fp[i];
        } else if (tense === 'fs') {
          form = '<span class="ve-form-stem">' + conj.fut[i] + '</span>';
          english = p.en + ' will ' + vInfo.base;
          pronDisplay = (p.pron === 'je' && !conj.isReflexive && FrenchConjugator.isVowel(conj.fut[i])) ? "j'" : p.pron;
          spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + conj.fut[i];
        } else if (tense === 'impf') {
          form = '<span class="ve-form-stem">' + conj.imp[i] + '</span>';
          const enWas = (p.pron === 'je' || p.pron === 'il/elle/on') ? 'was' : 'were';
          english = p.en + ' ' + enWas + ' ' + vInfo.ing + ' / used to ' + vInfo.base;
          pronDisplay = (p.pron === 'je' && !conj.isReflexive && FrenchConjugator.isVowel(conj.imp[i])) ? "j'" : p.pron;
          spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + conj.imp[i];
        } else if (tense === 'cond') {
          form = '<span class="ve-form-stem">' + conj.cond[i] + '</span>';
          english = p.en + ' would ' + vInfo.base;
          pronDisplay = (p.pron === 'je' && !conj.isReflexive && FrenchConjugator.isVowel(conj.cond[i])) ? "j'" : p.pron;
          spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + conj.cond[i];
        } else if (tense === 'pc') {
          form = '<span class="ve-form-stem">' + conj.pc[i] + '</span>';
          english = p.en + ' ' + vInfo.ed;
          pronDisplay = (p.pron === 'je' && !conj.isReflexive && conj.auxiliary === 'avoir') ? "j'" : p.pron;
          spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + conj.pc[i];
        } else if (tense === 'pr') {
          form = '<span class="ve-form-stem">' + conj.pr[i] + '</span>';
          english = p.en + ' just ' + vInfo.ed;
          pronDisplay = p.pron;
          spokenFr = pronDisplay + ' ' + conj.pr[i];
        }

        const spk = makeSpeakerHtml(spokenFr, 'tbl-speak-btn');
        return '<tr>' +
          '<td class="td-pron">' + pronDisplay + '</td>' +
          '<td><div class="ve-form">' + spk + form + '</div></td>' +
          '<td class="td-en">' + english + '</td>' +
          '</tr>';
      }).join('');
    };

    function initWidgets(sid) {

      // ── ARTICLES: definite ─────────────────────────────────
      if (sid === 'articles') {
        makeQuiz({
          idPrefix: 'art',
          pool: [
            { w: 'café', g: 'm', eng: 'coffee' },
            { w: 'bière', g: 'f', eng: 'beer' },
            { w: 'eau', g: 'f', eng: 'water', vowel: true },
            { w: 'restaurants', g: 'pl', eng: 'restaurants' },
            { w: 'université', g: 'f', eng: 'university', vowel: true },
            { w: 'livre', g: 'm', eng: 'book' },
            { w: 'amis', g: 'pl', eng: 'friends' },
            { w: 'hôtel', g: 'm', eng: 'hotel', vowel: true },
            { w: 'voiture', g: 'f', eng: 'car' },
            { w: 'dépanneur', g: 'm', eng: 'corner store' },
            { w: 'maison', g: 'f', eng: 'house' },
            { w: 'enfants', g: 'pl', eng: 'children' },
            // Negative: definite articles do NOT change after negation
            { w: 'café (Je n\'aime pas ___)', g: 'm', eng: 'I don\'t like coffee — definite stays le', neg: true },
            { w: 'voiture (Elle n\'a pas ___)', g: 'f', eng: 'She doesn\'t have the car — definite stays la', neg: true },
            { w: 'restaurants (Il n\'aime pas ___)', g: 'pl', eng: 'He doesn\'t like the restaurants — definite stays les', neg: true },
          ],
          getQuestion: d => d.neg
            ? `<span style="font-size:0.85rem;color:var(--text-secondary)">${d.eng.split(' — ')[0]}</span><br><span style="color:var(--text-secondary)">___</span> ${d.w.replace(/ \(.*\)/, '')}`
            : `<span style="color:var(--text-secondary)">___</span> ${d.w}`,
          getHint: d => d.eng + (d.g === 'pl' ? ' (plural)' : d.g === 'm' ? ' (masculine)' : ' (feminine)') + (d.vowel ? ', starts with vowel' : ''),
          getChoices: d => shuffle(["le", "la", "l'", "les"]),
          check: (d, c) => c === (d.g === 'pl' ? 'les' : d.vowel ? "l'" : d.g === 'm' ? 'le' : 'la'),
          getCorrect: d => d.g === 'pl' ? 'les' : d.vowel ? "l'" : d.g === 'm' ? 'le' : 'la',
          getSuccess: (d, c) => `${c} ${d.w} ✓`,
          getFailure: (d, c) => {
            const ans = d.g === 'pl' ? 'les' : d.vowel ? "l'" : d.g === 'm' ? 'le' : 'la';
            return `It's "${ans} ${d.w}"`;
          },
          getExplanation: (d, c) => {
            const ans = d.g === 'pl' ? 'les' : d.vowel ? "l'" : d.g === 'm' ? 'le' : 'la';
            const explains = {
              "le": t('exp_art_le') || "'le' is for masculine singular nouns not starting with a vowel.",
              "la": t('exp_art_la') || "'la' is for feminine singular nouns not starting with a vowel.",
              "l'": t('exp_art_elid') || "'l\'' is used before any noun (m. or f.) starting with a vowel or silent h.",
              "les": t('exp_art_les') || "'les' is only for plural nouns.",
            };
            const why = explains[c] ? explains[c] + ` ${t('exp_art_this') || 'This noun is'} ${d.g === 'pl' ? 'plural' : d.vowel ? 'starts with a vowel' : d.g === 'm' ? 'masculine singular' : 'feminine singular'}.` : null;
            return { why, rule: t('exp_art_rule') || "Rule: le (m.sg) · la (f.sg) · l\' (vowel/h) · les (pl.)" };
          },
        });

        // ── ARTICLES: partitive ─────────────────────────────
        makeQuiz({
          idPrefix: 'part',
          pool: [
            { w: "sirop d'érable", ans: 'du', hint: "maple syrup — masculine uncountable" },
            { w: 'neige', ans: 'de la', hint: "snow — feminine uncountable" },
            { w: 'poutine', ans: 'un', hint: "a poutine — countable, masculine" },
            { w: 'eau', ans: "de l'", hint: "water — feminine uncountable, vowel" },
            { w: 'tourtière', ans: 'une', hint: "a meat pie — countable, feminine" },
            { w: 'café', ans: 'du', hint: "some coffee — masculine uncountable" },
            { w: 'argent', ans: "de l'", hint: "some money — masculine, vowel" },
            { w: 'bagels', ans: 'des', hint: "some bagels — plural" },
            { w: 'fromage', ans: 'du', hint: "some cheese — masculine uncountable" },
            { w: 'beurre', ans: 'du', hint: "some butter — masculine uncountable" },
            // NEGATIVE: after negation everything becomes de/d'
            { q: "Je n'ai pas ___ voiture.", ans: "de", hint: "after negation: une/du/de la → de", neg: true },
            { q: "Il ne boit pas ___ café.", ans: "de", hint: "after negation: du → de", neg: true },
            { q: "On n'a pas ___ amis.", ans: "d'", hint: "after negation + vowel: des → d'", neg: true },
            { q: "Elle ne mange pas ___ viande.", ans: "de", hint: "after negation: de la → de", neg: true },
            { q: "Tu n'as pas ___ argent.", ans: "d'", hint: "after negation + vowel: de l' → d'", neg: true },
          ],
          getQuestion: d => d.neg ? d.q.replace('___', `<span style="color:var(--text-secondary)">___</span>`) : `Je veux <span style="color:var(--text-secondary)">___</span> ${d.w}.`,
          getHint: d => d.neg ? '⚠️ Negation rule: ' + d.hint : d.hint,
          getChoices: d => shuffle(["un", "une", "des", "du", "de la", "de l'"]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => d.neg ? `✓ ${d.ans} — ${d.hint}` : `Je veux ${d.ans} ${d.w}. ✓`,
          getFailure: d => d.neg ? `"${d.ans}" — ${d.hint}` : `Answer: "${d.ans} ${d.w}"`,
          getExplanation: (d, c) => {
            if (d.neg) {
              return { why: t('exp_part_neg') || "After a negative verb (ne…pas), ALL indefinite and partitive articles become de/d\'. Only definite articles (le/la/les) stay unchanged.", rule: t('exp_part_neg_rule') || "Rule: ne…pas + [noun] → de/d\' (not du/de la/des/un/une)" };
            }
            const map = {
              'du': t('exp_part_du') || "'du' (= de + le) is for masculine uncountable nouns: du café, du pain, du temps.",
              'de la': t('exp_part_dela') || "'de la' is for feminine uncountable nouns: de la neige, de la musique.",
              "de l'": t('exp_part_del') || "'de l\'' is used before any uncountable noun starting with a vowel or silent h.",
              'des': t('exp_part_des') || "'des' is for plural countable nouns meaning 'some': des amis, des bagels.",
              'un': t('exp_part_un') || "'un' is for singular countable masculine nouns — meaning exactly one.",
              'une': t('exp_part_une') || "'une' is for singular countable feminine nouns — meaning exactly one.",
            };
            return { why: map[c] || null, rule: t('exp_part_rule') || "Key: countable → un/une/des · uncountable → du/de la/de l'" };
          },
        });
        // bind reset for partitive to also reset art
        window['w-art_reset'] = () => window['art_reset']();
        window['w-part_reset'] = () => window['part_reset']();
      }

      // ── NOUNS: gender sorter quiz ──────────────────────────
      if (sid === 'nouns') {
        const pool = shuffle([
          { w: 'livre', g: 'm', eng: 'book' }, { w: 'maison', g: 'f', eng: 'house' },
          { w: 'chat', g: 'm', eng: 'cat' }, { w: 'voiture', g: 'f', eng: 'car' },
          { w: 'problème', g: 'm', eng: 'problem' }, { w: 'idée', g: 'f', eng: 'idea' },
          { w: 'travail', g: 'm', eng: 'work' }, { w: 'nuit', g: 'f', eng: 'night' },
          { w: 'soleil', g: 'm', eng: 'sun' }, { w: 'lune', g: 'f', eng: 'moon' },
          { w: 'arbre', g: 'm', eng: 'tree' }, { w: 'fleur', g: 'f', eng: 'flower' },
          { w: 'journal', g: 'm', eng: 'newspaper' }, { w: 'porte', g: 'f', eng: 'door' },
        ]);
        let ni = 0, ns = [0, 0];
        function nounShow() {
          if (ni >= pool.length) ni = 0;
          const el = document.getElementById('w-noun'); if (!el) return;
          const qEl = document.getElementById('noun-q');
          const hEl = document.getElementById('noun-hint');
          const rEl = document.getElementById('noun-result');
          if (!qEl) return;
          const spk = makeSpeakerHtml(pool[ni].w, 'widget-speak-btn');
          qEl.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px;justify-content:center">${spk}<span>${pool[ni].w}</span></span>`;
          if (hEl) hEl.textContent = '(' + pool[ni].eng + ')';
          if (rEl) rEl.textContent = '';
          ['noun-m', 'noun-f'].forEach(id => {
            const b = document.getElementById(id);
            if (b) { b.classList.remove('correct', 'wrong'); b.disabled = false; }
          });
        }
        let _nounTimer = null;
        window['noun_check'] = function (choice, btn) {
          const el = document.getElementById('w-noun'); if (!el) return;
          const item = pool[ni];
          ['noun-m', 'noun-f'].forEach(id => { const b = document.getElementById(id); if (b) b.disabled = true; });
          const correct = choice === item.g;
          btn.classList.add(correct ? 'correct' : 'wrong');
          if (!correct) {
            const other = document.getElementById(item.g === 'm' ? 'noun-m' : 'noun-f');
            if (other) other.classList.add('correct');
          }
          ns[correct ? 0 : 1] += correct ? 1 : 0; ns[1]++;
          const art = item.g === 'm' ? 'un' : 'une';
          const rEl = document.getElementById('noun-result');
          const sEl = document.getElementById('noun-score');
          const resultSpk = makeSpeakerHtml(`${art} ${item.w}`, 'widget-speak-btn');
          if (rEl) rEl.innerHTML = `<span style="color:${correct ? '#34A853' : '#EA4335'};display:inline-flex;align-items:center;gap:6px;justify-content:center">${correct ? '✓' : '✗'} ${resultSpk}<span>${art} ${item.w}</span></span>`;
          if (sEl) sEl.textContent = `${ns[0]}/${ns[1]} correct`;
          ni++;
          if (_nounTimer) clearTimeout(_nounTimer);
          _nounTimer = setTimeout(() => { _nounTimer = null; nounShow(); }, 1500);
        };
        window.switchNounTab = function(tab) {
          const qPane = document.getElementById('noun-quiz-pane');
          const pPane = document.getElementById('noun-pred-pane');
          const qTab = document.getElementById('g-tab-quiz');
          const pTab = document.getElementById('g-tab-pred');
          if (!qPane || !pPane) return;
          if (tab === 'quiz') {
            qPane.style.display = 'block';
            pPane.style.display = 'none';
            if (qTab) qTab.classList.add('active');
            if (pTab) pTab.classList.remove('active');
          } else {
            qPane.style.display = 'none';
            pPane.style.display = 'block';
            if (qTab) qTab.classList.remove('active');
            if (pTab) pTab.classList.add('active');
            const inp = document.getElementById('gp-input');
            if (inp) setTimeout(() => inp.focus(), 50);
          }
        };

        window['w-noun_reset'] = function () {
          ni = 0; ns = [0, 0];
          pool.sort(() => Math.random() - 0.5);
          nounShow();
          const sc = document.getElementById('noun-score'); if (sc) sc.textContent = '';
          const inp = document.getElementById('gp-input'); if (inp) inp.value = '';
          const res = document.getElementById('gp-result');
          if (res) res.innerHTML = '<span style="color:var(--text-muted)">Type a French noun above or click an example chip.</span>';
        };
        nounShow();
      }

      // ── PRONOUNS: tu / vous / on chooser ──────────────────
      if (sid === 'pronouns') {
        makeQuiz({
          idPrefix: 'pron',
          pool: [
            { q: "You're texting a friend in Montreal:", ctx: 'friend texting', ans: 'tu', eng: '"Tu fais quoi ce soir?" is natural here' },
            { q: "Addressing your boss at a job interview:", ctx: 'formal interview', ans: 'vous', eng: '"Merci, vous êtes très aimable." shows respect' },
            { q: "Talking about what your group is doing tonight:", ctx: 'we/group', ans: 'on', eng: '"On va au cinéma ce soir." — on = nous in Quebec' },
            { q: "Meeting your girlfriend's parents for the first time:", ctx: 'formal intro', ans: 'vous', eng: 'Use vous until they invite tu — it\'s polite' },
            { q: "Asking a classmate about the homework:", ctx: 'classmate', ans: 'tu', eng: '"T\'as fini les devoirs?" is totally normal' },
            { q: "Saying \'we\'re going\' in casual Quebec speech:", ctx: 'casual we', ans: 'on', eng: '"On s\'en va!" — Québécois always use on for nous' },
            { q: "Writing a formal email to a government office:", ctx: 'gov email', ans: 'vous', eng: '"Je vous contacte au sujet de…" is required' },
            { q: "Talking to a child on the street:", ctx: 'speaking to child', ans: 'tu', eng: '"Tu t\'appelles comment?" is warm and natural' },
          ],
          getQuestion: d => `<em style="font-size:0.85rem;color:var(--text-secondary)">${d.ctx}</em><br>${d.q}`,
          getHint: () => '',
          getChoices: () => ['tu', 'vous', 'on'],
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => d.eng,
          getFailure: d => `Use "${d.ans}" here. ${d.eng}`,
          getExplanation: (d, c) => {
            const map = {
              tu: t('exp_pron_tu') || "'tu' is the informal singular — for friends, family, children, peers. Using 'vous' here would sound overly formal and distant.",
              vous: t('exp_pron_vous') || "'vous' is for formal situations, strangers, superiors, or plural groups. In Quebec, 'vous' for one person is rare outside formal contexts.",
              on: t('exp_pron_on') || "'on' replaces 'nous' in ALL everyday Quebec speech. 'Nous' for 'we' sounds very formal or bookish in conversation.",
            };
            return { why: map[c], rule: t('exp_pron_rule') || "Quebec rule: tu (informal 1-on-1) · vous (formal/plural) · on = nous (casual we)" };
          },
        });
        window['w-pron_reset'] = () => window['pron_reset']();
      }

      // ── VERBS: conjugation builder ─────────────────────────
      if (sid === 'verbs') {
        const erEnds = { 'je': 'e', 'tu': 'es', 'il/elle': 'e', 'nous': 'ons', 'vous': 'ez', 'ils/elles': 'ent' };
        const stems = { parler: 'parl', manger: 'mang', travailler: 'travaill', aimer: 'aim', voyager: 'voyag', chanter: 'chant' };
        window._conjState = { pron: null, verb: null };
        window.conjPick = function (type, val, btn) {
          const row = btn.closest('.conj-row');
          row.querySelectorAll('.w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          window._conjState[type] = val;
          const { pron, verb } = window._conjState;
          const res = document.getElementById('conj-result');
          if (!res) return;
          if (pron && verb) {
            const stem = stems[verb] || verb.replace(/er$/, '');
            const end = erEnds[pron];
            const needElision = pron === 'je' && /^[aeiouéèêë]/i.test(stem);
            const pronDisplay = needElision ? "j'" : pron + ' ';
            const fullSpoken = `${pronDisplay}${stem}${end}`;
            const spk = makeSpeakerHtml(fullSpoken, 'widget-speak-btn');
            res.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px">${spk}<span class="conj-stem">${pronDisplay}${stem}</span><span class="conj-ending">${end}</span></span>`;
          } else {
            res.textContent = '← pick both a pronoun and a verb';
          }
        };
        window['w-conj_reset'] = function () {
          window._conjState = { pron: null, verb: null };
          document.querySelectorAll('#w-conj .w-pill').forEach(b => b.classList.remove('selected'));
          const res = document.getElementById('conj-result');
          if (res) res.textContent = '← pick a pronoun and verb';
        };

        // être/avoir quiz
        makeQuiz({
          idPrefix: 'etav',
          pool: [
            { q: "Je ___ à Montréal.", ans: 'être', correct: 'suis', eng: "I am in Montreal." },
            { q: "J'___ faim.", ans: 'avoir', correct: 'ai', eng: "I am hungry." },
            { q: "Tu ___ content(e)?", ans: 'être', correct: 'es', eng: "Are you happy?" },
            { q: "Il ___ un char.", ans: 'avoir', correct: 'a', eng: "He has a car." },
            { q: "On ___ fatigués.", ans: 'être', correct: 'est', eng: "We are tired." },
            { q: "Vous ___ des devoirs.", ans: 'avoir', correct: 'avez', eng: "You have homework." },
            { q: "Elles ___ prêtes.", ans: 'être', correct: 'sont', eng: "They are ready." },
            { q: "Ils ___ peur.", ans: 'avoir', correct: 'ont', eng: "They are afraid." },
            { q: "Nous ___ chaud.", ans: 'avoir', correct: 'avons', eng: "We are hot." },
            { q: "C'___ correct!", ans: 'être', correct: 'est', eng: "That's right! (Quebec expression)" },
            // NEGATIVE sentences
            { q: "Je ne ___ pas là.", ans: 'être', correct: 'suis', eng: "I'm not here." },
            { q: "Il n'___ pas faim.", ans: 'avoir', correct: 'a', eng: "He's not hungry." },
            { q: "On n'___ pas le temps.", ans: 'avoir', correct: 'a', eng: "We don't have time." },
            { q: "Tu n'___ pas prêt(e)?", ans: 'être', correct: 'es', eng: "You're not ready?" },
            { q: "Elles n'___ pas de voiture.", ans: 'avoir', correct: 'ont', eng: "They don't have a car." },
          ],
          getQuestion: d => `<span style="font-size:1.2rem;font-family:'Azeret Mono',monospace">${d.q}</span>`,
          getHint: d => `(conjugated form: ${d.correct})`,
          getChoices: () => ['avoir', 'être'],
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `${d.correct} — ${d.eng}`,
          getFailure: d => `Use "${d.ans}" → ${d.eng}`,
          getExplanation: (d, c) => {
            const isEtre = c === 'être';
            const isAvoir = c === 'avoir';
            const etreWhy = t('exp_etav_etre') || "'être' is used for: states of being (je suis content), locations (je suis à Montréal), and all reflexive verbs. NOT for hunger, age, or possession.";
            const avoirWhy = t('exp_etav_avoir') || "'avoir' is used for: possession (j'ai un char), physical states (j'ai faim/froid/peur), and age (j'ai 25 ans). NOT for states of being.";
            return {
              why: isEtre ? etreWhy : isAvoir ? avoirWhy : null,
              rule: t('exp_etav_rule') || '"avoir: possession, hunger, fear, age · être: states of being, locations, identities'
            };
          },
        });
        window['w-etav_reset'] = () => window['etav_reset']();
      }

      // ── SENTENCE STRUCTURE: negation animator ─────────────
      if (sid === 'sentences') {
        const negMap = {
          parler: { stem: 'parl', end: 'e', sfx: '', eng: "I don't speak French.", obj: ' français' },
          aimer: { stem: 'aim', end: 'e', sfx: '', eng: "I don't love that.", obj: ' ça' },
          avoir: { stem: "n'ai", end: '', sfx: ' de voiture.', eng: "I don't have a car.", elide: true },
          aller: { stem: 'vais', end: '', sfx: '', eng: "I'm not going.", elide: false, noStem: true },
          manger: { stem: 'mang', end: 'e', sfx: ' de viande.', eng: "I don't eat meat." },
          vouloir: { stem: 'veux', end: '', sfx: ' sortir.', eng: "I don't want to go out.", noStem: true },
        };
        // Quebec mode toggle: show with or without 'ne'
        let negQuebecMode = false;
        const negToggle = document.getElementById('neg-qc-toggle');
        if (negToggle) {
          negToggle.addEventListener('change', function () {
            negQuebecMode = this.checked;
            const active = document.querySelector('#neg-pills .w-pill.selected');
            if (active) active.click();
          });
        }
        window.negPick = function (verb, btn) {
          document.querySelectorAll('#neg-pills .w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          const d = negMap[verb];
          const disp = document.getElementById('neg-display');
          const engd = document.getElementById('neg-english');
          if (!disp) return;
          let parts = '';
          let spokenSentence = '';
          if (negQuebecMode) {
            // Quebec style: drop 'ne', keep 'pas'
            if (d.elide) {
              parts = `<span class="pron-word">Je</span><span class="neg-verb">${d.stem}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ${d.stem} pas`;
            } else if (d.noStem) {
              parts = `<span class="pron-word">Je</span><span class="neg-verb">${d.stem}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ${d.stem} pas`;
            } else {
              parts = `<span class="pron-word">Je</span><span class="neg-verb">${d.stem}${d.end}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ${d.stem}${d.end} pas`;
            }
            if (d.sfx) { parts += `<span class="pron-word">${d.sfx}</span>`; spokenSentence += d.sfx; }
            if (d.obj && !d.sfx) { parts += `<span class="pron-word">${d.obj}.</span>`; spokenSentence += d.obj; }
            if (engd) engd.textContent = '🍁 Quebec spoken: ' + d.eng;
          } else {
            if (d.elide) {
              parts = `<span class="pron-word">Je</span><span class="neg-ne">ne</span><span class="neg-verb">${d.stem}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ne ${d.stem} pas`;
            } else if (d.noStem) {
              parts = `<span class="pron-word">Je</span><span class="neg-ne">ne</span><span class="neg-verb">${d.stem}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ne ${d.stem} pas`;
            } else {
              parts = `<span class="pron-word">Je</span><span class="neg-ne">ne</span><span class="neg-verb">${d.stem}${d.end}</span><span class="neg-pas">pas</span>`;
              spokenSentence = `Je ne ${d.stem}${d.end} pas`;
            }
            if (d.sfx) { parts += `<span class="pron-word">${d.sfx}</span>`; spokenSentence += d.sfx; }
            if (d.obj && !d.sfx) { parts += `<span class="pron-word">${d.obj}.</span>`; spokenSentence += d.obj; }
            if (engd) engd.textContent = d.eng;
          }
          const spk = makeSpeakerHtml(spokenSentence, 'widget-speak-btn');
          disp.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px">${spk}<span>${parts}</span></span>`;
        };
        window['w-neg_reset'] = function () {
          negQuebecMode = false;
          const toggle = document.getElementById('neg-qc-toggle');
          if (toggle) toggle.checked = false;
          const firstBtn = document.querySelector('#neg-pills .w-pill');
          if (firstBtn) negPick('parler', firstBtn);
        };
        const firstBtn = document.querySelector('#neg-pills .w-pill');
        if (firstBtn) negPick('parler', firstBtn);
      }

      // ── ADJECTIVES: agreement transformer ─────────────────
      if (sid === 'adjectives') {
        const adjForms = {
          grand: { ms: 'grand', fs: 'grande', mp: 'grands', fp: 'grandes' },
          petit: { ms: 'petit', fs: 'petite', mp: 'petits', fp: 'petites' },
          beau: { ms: 'beau', fs: 'belle', mp: 'beaux', fp: 'belles' },
          nouveau: { ms: 'nouveau', fs: 'nouvelle', mp: 'nouveaux', fp: 'nouvelles' },
          bon: { ms: 'bon', fs: 'bonne', mp: 'bons', fp: 'bonnes' },
        };
        window._agState = { gender: 'm', number: 's', adj: 'grand' };
        function agRender() {
          const f = adjForms[_agState.adj];
          if (!f) return;
          const key = _agState.gender + _agState.number;
          const full = f[key], base = f.ms;
          const suffix = full.length > base.length ? full.slice(base.length) : (full !== base ? ` → ${full}` : '');
          const row = document.getElementById('agree-row'); if (!row) return;
          const spk = makeSpeakerHtml(full, 'widget-speak-btn');
          row.innerHTML = `
            <span style="font-size:0.8rem;color:var(--text-secondary)">base:</span>
            <span class="ag-base">${base}</span>
            <span style="color:var(--text-secondary)">→</span>
            ${spk}<span class="ag-full">${full}</span>
            ${suffix ? `<span style="font-size:0.8rem;color:var(--secondary)">+${suffix || '∅'}</span>` : '<span style="font-size:0.8rem;color:var(--text-secondary)">(no change)</span>'}
            <span style="font-size:0.75rem;color:var(--text-secondary)">(${_agState.gender === 'm' ? 'masc' : 'fem'}, ${_agState.number === 's' ? 'sg' : 'pl'})</span>`;
        }
        window.agreePick = function (type, val, btn) {
          document.querySelectorAll(`#w-agree [data-ag="${type}"]`).forEach(c => c.classList.remove('sel'));
          btn.classList.add('sel');
          _agState[type] = val; agRender();
        };
        window.agAdj = function (a, btn) {
          document.querySelectorAll('#ag-adj-row .w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          _agState.adj = a; agRender();
        };
        window['w-agree_reset'] = function () {
          _agState = { gender: 'm', number: 's', adj: 'grand' };
          document.querySelectorAll('#w-agree [data-ag]').forEach(c => {
            c.classList.toggle('sel', c.dataset.val === _agState[c.dataset.ag]);
          });
          document.querySelectorAll('#ag-adj-row .w-pill').forEach((b, i) => b.classList.toggle('selected', i === 0));
          agRender();
        };
        agRender();
      }

      // ── PREPOSITIONS: contraction animator ─────────────────
      if (sid === 'prepositions') {
        const contracts = [
          { a: 'à', b: 'le', r: 'au', ex: "Je vais au marché.", en: "I'm going to the market.", contract: true },
          { a: 'à', b: 'les', r: 'aux', ex: "Je parle aux étudiants.", en: "I talk to the students.", contract: true },
          { a: 'de', b: 'le', r: 'du', ex: "Je viens du bureau.", en: "I come from the office.", contract: true },
          { a: 'de', b: 'les', r: 'des', ex: "Je parle des problèmes.", en: "I talk about the problems.", contract: true },
          { a: 'à', b: 'la', r: 'à la', ex: "Je vais à la banque.", en: "I'm going to the bank.", contract: false },
          { a: 'à', b: "l'", r: "à l'", ex: "Je vais à l'école.", en: "I'm going to school.", contract: false },
        ];
        window.contractPick = function (i, btn) {
          document.querySelectorAll('#contract-pills .w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          const c = contracts[i];
          const disp = document.getElementById('contract-display');
          const ex = document.getElementById('contract-example');
          if (!disp) return;
          if (c.contract) {
            disp.innerHTML = `<span class="c-part a-part">${c.a}</span><span class="c-arrow">+</span><span class="c-part le-part">${c.b}</span><span class="c-arrow">→</span><span class="c-part merged">${c.r}</span>`;
          } else {
            disp.innerHTML = `<span class="c-part a-part">${c.a}</span><span class="c-arrow">+</span><span class="c-part le-part">${c.b}</span><span class="c-arrow">→</span><span class="c-part" style="border-color:rgba(255,255,255,0.2);color:var(--text-secondary)">${c.r} <small>(no contraction)</small></span>`;
          }
          if (ex) {
            const spk = makeSpeakerHtml(c.ex, 'widget-speak-btn');
            ex.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;justify-content:center">${spk}<span>${c.ex}</span> <span style="color:var(--text-secondary)">— ${c.en}</span></span>`;
          }
        };
        window['w-contract_reset'] = function () {
          contractPick(0, document.querySelector('#contract-pills .w-pill'));
        };
        const firstBtn = document.querySelector('#contract-pills .w-pill');
        if (firstBtn) contractPick(0, firstBtn);
      }

      // ── POSSESSIVES: possessive quiz ───────────────────────
      if (sid === 'possessives') {
        makeQuiz({
          idPrefix: 'poss',
          pool: [
            { q: "___ appartement (my, masc.)", ans: 'mon', wrong: ['ma', 'mes', 'son'], eng: "masculine noun → mon" },
            { q: "___ voiture (my, fem.)", ans: 'ma', wrong: ['mon', 'mes', 'sa'], eng: "feminine noun → ma" },
            { q: "___ clés (my, plural)", ans: 'mes', wrong: ['mon', 'ma', 'ses'], eng: "plural noun → mes" },
            { q: "___ amie (my, fem. + vowel)", ans: 'mon', wrong: ['ma', 'mes', 'ton'], eng: "vowel sound → mon (even for fem.)" },
            { q: "___ char (his/her, masc.)", ans: 'son', wrong: ['sa', 'ses', 'leur'], eng: "masculine → son (regardless of owner's gender)" },
            { q: "___ maison (your informal, fem.)", ans: 'ta', wrong: ['ton', 'tes', 'sa'], eng: "feminine → ta" },
            { q: "___ enfants (our, plural)", ans: 'nos', wrong: ['notre', 'vos', 'leurs'], eng: "plural → nos" },
            { q: "___ adresse (your inf., fem. + vowel)", ans: 'ton', wrong: ['ta', 'tes', 'son'], eng: "vowel sound → ton (even for fem.)" },
            { q: "___ parents (their, plural)", ans: 'leurs', wrong: ['leur', 'ses', 'vos'], eng: "plural → leurs" },
            { q: "___ ami (his/her, masc. + vowel)", ans: 'son', wrong: ['sa', 'ses', 'ton'], eng: "vowel → son" },
            // NEGATIVE: possessives don't change, but contrast with de
            { q: "Je n'ai pas ___ voiture. (my car — I know it exists)", ans: 'ma', wrong: ['de', 'mon', 'sa'], eng: "possessives stay after negation — 'ma' means MY specific car" },
            { q: "Je n'ai pas ___ voiture. (any car — I have none)", ans: 'de', wrong: ['ma', 'une', 'la'], eng: "no article → 'de' after negation" },
            { q: "Il ne trouve pas ___ clés. (his keys — he lost them)", ans: 'ses', wrong: ['de', 'les', 'mes'], eng: "possessive stays: ses clés = HIS keys" },
            { q: "On n'a pas ___ plan. (no plan at all)", ans: 'de', wrong: ['notre', 'un', 'son'], eng: "indefinite → de after negation" },
          ],
          getQuestion: d => d.q,
          getHint: () => '',
          getChoices: d => shuffle([d.ans, ...d.wrong]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ ${d.ans} — ${d.eng}`,
          getFailure: d => `"${d.ans}" is correct. ${d.eng}`,
          getExplanation: (d, c) => {
            const map = {
              mon: t('exp_poss_mon') || "'mon' is for masculine nouns OR any noun starting with a vowel/h (even feminine): mon ami, mon adresse.",
              ma: t('exp_poss_ma') || "'ma' is for feminine nouns that don't start with a vowel. Before a vowel, 'ma' becomes 'mon': mon amie (not ma amie).",
              mes: t('exp_poss_mes') || "'mes' is always used for plural nouns regardless of gender: mes amis, mes clés.",
              ton: t('exp_poss_ton') || "'ton' is for masculine nouns OR any noun starting with a vowel/h when the owner is 'tu': ton appartement, ton adresse.",
              ta: t('exp_poss_ta') || "'ta' is for feminine nouns (tu ownership). Before a vowel/h use 'ton': ton histoire (not ta histoire).",
              son: t('exp_poss_son') || "'son/sa' agrees with the NOUN, not the owner. 'son char' = his OR her car (char is masculine). The owner's gender is irrelevant.",
              sa: t('exp_poss_sa') || "'sa' is for feminine nouns. Remember: 'son/sa' is determined by the noun gender, not whether the owner is male or female.",
              ses: t('exp_poss_ses') || "'ses' is for plural nouns (3rd person singular owner). Use for his/her/its + plural: ses enfants, ses clés.",
              notre: t('exp_poss_notre') || "'notre' is singular (our + sg noun). For plural nouns use 'nos': notre plan but nos plans.",
              nos: t('exp_poss_nos') || "'nos' is for plural nouns with a 'nous' owner: nos amis, nos clés.",
              leur: t('exp_poss_leur') || "'leur' (their, sg noun) vs 'leurs' (their, pl noun). 'leur ami' = their friend, 'leurs amis' = their friends.",
              leurs: t('exp_poss_leurs') || "'leurs' is for plural nouns with a 'ils/elles' owner: leurs enfants, leurs affaires.",
              de: t('exp_poss_de') || "'de' replaces un/une/des/du/de la after negation — but possessives (mon/ma/ses…) NEVER change to 'de'. 'Je n'ai pas ma voiture' keeps 'ma'.",
            };
            return { why: map[c], rule: t('exp_poss_rule') || 'Key: possessives agree with the NOUN (not the owner) · Before vowel/h: mon/ton/son even for feminine nouns' };
          },
        });
        window['w-poss_reset'] = () => window['poss_reset']();
        
        // Demonstrative Pronouns Logic
        window._demState = { type: 'ms', distance: 0 };
        window.demSetType = function(t, btn) {
          const container = btn.parentElement;
          container.querySelectorAll('.w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          window._demState.type = t;
          window.demUpdate();
        };
        window.demUpdate = function() {
          const slider = document.getElementById('dem-slider');
          if (!slider) return;
          window._demState.distance = parseInt(slider.value);
          
          const isClose = window._demState.distance < 50;
          
          const forms = {
            'ms': { close: 'celui-ci', far: 'celui-là', enClose: 'this one', enFar: 'that one' },
            'fs': { close: 'celle-ci', far: 'celle-là', enClose: 'this one', enFar: 'that one' },
            'mp': { close: 'ceux-ci', far: 'ceux-là', enClose: 'these ones', enFar: 'those ones' },
            'fp': { close: 'celles-ci', far: 'celles-là', enClose: 'these ones', enFar: 'those ones' }
          };
          
          const data = forms[window._demState.type];
          const pron = isClose ? data.close : data.far;
          
          const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
          const translations = window.demTranslations && window.demTranslations[lang] ? window.demTranslations[lang] : window.demTranslations.en;
          
          const pronEl = document.getElementById('dem-pronoun');
          const transEl = document.getElementById('dem-translation');
          const lblClose = document.getElementById('dem-lbl-close');
          const lblFar = document.getElementById('dem-lbl-far');
          
          if(pronEl) {
            pronEl.textContent = pron;
            pronEl.style.color = isClose ? 'var(--blue)' : 'var(--red)';
            slider.style.accentColor = isClose ? 'var(--blue)' : 'var(--red)';
          }
          
          if(lblClose) lblClose.textContent = translations.here;
          if(lblFar) lblFar.textContent = translations.there;
          
          if(transEl) {
            let tr = translations.sentence.replace('{pronoun}', isClose ? translations.close[window._demState.type] : translations.far[window._demState.type]);
            transEl.innerHTML = tr + (isClose ? '' : '<br><span style="font-size:0.8rem;color:#EA4335">🍁 Quebec spoken: often just <b>' + data.far + '</b> for everything!</span>');
          }
        };
        window['w-dem_reset'] = function() {
          const slider = document.getElementById('dem-slider');
          if(slider) { slider.value = 0; window.demUpdate(); }
          const btns = document.querySelectorAll('#w-dem .w-pill');
          if(btns.length) window.demSetType('ms', btns[0]);
        };
        if(document.getElementById('dem-slider')) window.demUpdate();
      }

      // ── NUMBERS: interactive clock ─────────────────────────
      if (sid === 'numbers') {
        const mWords = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
          'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit',
          'dix-neuf', 'vingt', 'vingt et un', 'vingt-deux', 'vingt-trois', 'vingt-quatre',
          'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf'];
        const hWords = ['minuit', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'midi'];
        window.clockUpdate = function () {
          const hEl = document.getElementById('cl-hour-r');
          const mEl = document.getElementById('cl-min-r');
          if (!hEl) return;
          const h = parseInt(hEl.value), m = parseInt(mEl.value);
          const hvEl = document.getElementById('cl-h-val');
          const mvEl = document.getElementById('cl-m-val');
          if (hvEl) hvEl.textContent = h;
          if (mvEl) mvEl.textContent = String(m).padStart(2, '0');
          const hDeg = (h % 12) * 30 + m * 0.5 - 90;
          const mDeg = m * 6 - 90;
          const toXY = (deg, r) => [80 + r * Math.cos(deg * Math.PI / 180), 80 + r * Math.sin(deg * Math.PI / 180)];
          const [hx, hy] = toXY(hDeg, 34), [mx, my] = toXY(mDeg, 48);
          const hl = document.getElementById('cl-hour'), ml = document.getElementById('cl-min');
          if (hl) { hl.setAttribute('x2', hx.toFixed(1)); hl.setAttribute('y2', hy.toFixed(1)); }
          if (ml) { ml.setAttribute('x2', mx.toFixed(1)); ml.setAttribute('y2', my.toFixed(1)); }
          let fr = '', en = '';
          if (h === 12 && m === 0) { fr = 'Il est midi.'; en = 'It is noon.'; }
          else if (h === 0 || (h === 12 && m !== 0)) {
            const nh = h === 12 ? 12 : 0;
            fr = 'Il est minuit.'; en = 'It is midnight.';
          } else {
            const hw = hWords[h], hp = h > 1 ? 's' : '';
            if (m === 0) { fr = `Il est ${hw} heure${hp}.`; en = `It is ${h}:00.`; }
            else if (m === 15) { fr = `Il est ${hw} heure${hp} et quart.`; en = `Quarter past ${h}.`; }
            else if (m === 30) { fr = `Il est ${hw} heure${hp} et demie.`; en = `Half past ${h}.`; }
            else if (m === 45) { const nh = h === 12 ? 1 : h + 1, nhw = hWords[nh], nhp = nh > 1 ? 's' : ''; fr = `Il est ${nhw} heure${nhp} moins le quart.`; en = `Quarter to ${nh}.`; }
            else if (m < 30) { fr = `Il est ${hw} heure${hp} ${mWords[m]}.`; en = `${h}:${String(m).padStart(2, '0')}.`; }
            else { const r = 60 - m, rw = mWords[r], nh = h === 12 ? 1 : h + 1, nhw = hWords[nh], nhp = nh > 1 ? 's' : ''; fr = `Il est ${nhw} heure${nhp} moins ${rw}.`; en = `${nh}:${String(m).padStart(2, '0')} (${r} to ${nh}).`; }
          }
          const fe = document.getElementById('cl-french'), ee = document.getElementById('cl-english');
          if (fe) {
            const spk = makeSpeakerHtml(fr, 'widget-speak-btn');
            fe.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;justify-content:center">${spk}<span>${fr}</span></span>`;
          }
          if (ee) ee.textContent = en;
        };
        window['w-clock_reset'] = function () {
          const h = document.getElementById('cl-hour-r'), m = document.getElementById('cl-min-r');
          if (h) h.value = 3; if (m) m.value = 0; clockUpdate();
        };
        clockUpdate();
      }

      // ── PASSÉ COMPOSÉ: être/avoir drag sorter ──────────────
      if (sid === 'passe_compose') {
        const allVerbs = [
          { v: 'manger', aux: 'avoir' }, { v: 'aller', aux: 'être' },
          { v: 'finir', aux: 'avoir' }, { v: 'venir', aux: 'être' },
          { v: 'partir', aux: 'être' }, { v: 'voir', aux: 'avoir' },
          { v: 'arriver', aux: 'être' }, { v: 'faire', aux: 'avoir' },
          { v: 'tomber', aux: 'être' }, { v: 'boire', aux: 'avoir' },
          { v: 'naître', aux: 'être' }, { v: 'prendre', aux: 'avoir' },
          { v: 'rester', aux: 'être' }, { v: 'lire', aux: 'avoir' },
        ];
        function sorterInit() {
          const src = document.getElementById('sorter-source'); if (!src) return;
          const cards_a = document.getElementById('cards-avoir');
          const cards_e = document.getElementById('cards-etre');
          if (cards_a) cards_a.innerHTML = '';
          if (cards_e) cards_e.innerHTML = '';
          const cards = shuffle(allVerbs).slice(0, 10);
          src.innerHTML = cards.map(v =>
            `<div class="sorter-card" draggable="true" data-verb="${v.v}" data-aux="${v.aux}"
                 ondragstart="window._sorterStart(event)" id="sc-${v.v}">${v.v}</div>`
          ).join('');
          // Attach touch events for Safari mobile
          src.querySelectorAll('.sorter-card').forEach(card => {
            card.addEventListener('touchstart', sorterTouchStart, { passive: false });
            card.addEventListener('touchend', sorterTouchEnd, { passive: false });
          });
        }
        window._sorterStart = function (e) {
          e.target.classList.add('dragging');
          if (e.dataTransfer) e.dataTransfer.setData('text', e.target.dataset.verb);
        };

        // Touch drag fallback for Safari mobile
        let _touchDragEl = null;
        function sorterTouchStart(e) {
          _touchDragEl = e.currentTarget;
          _touchDragEl.classList.add('dragging');
          e.preventDefault();
        }
        function sorterTouchEnd(e) {
          if (!_touchDragEl) return;
          const touch = e.changedTouches[0];
          const el = document.elementFromPoint(touch.clientX, touch.clientY);
          const bin = el && el.closest('.sorter-bin');
          if (bin) {
            const binType = bin.id === 'bin-avoir' ? 'avoir' : 'être';
            const verb = _touchDragEl.dataset.verb;
            const card = document.getElementById('sc-' + verb);
            if (card) {
              card.classList.remove('dragging');
              const correct = card.dataset.aux === binType;
              card.classList.add(correct ? 'correct-place' : 'wrong-place');
              const dest = document.getElementById(correct ? 'cards-avoir' : 'cards-etre');
              if (dest) dest.appendChild(card);
              const fb = document.getElementById('sorter-feedback');
              if (fb) {
                const spk = makeSpeakerHtml(verb, 'widget-speak-btn');
                fb.innerHTML = correct
                  ? `<span style="color:#34A853;display:inline-flex;align-items:center;gap:6px">✓ ${spk} "${verb}" uses "${binType}"</span>`
                  : `<span style="color:#EA4335;display:inline-flex;align-items:center;gap:6px">✗ ${spk} "${verb}" uses "${card.dataset.aux}"</span>`;
                setTimeout(() => { if (fb) fb.textContent = ''; }, 2600);
              }
            }
          }
          _touchDragEl.classList.remove('dragging');
          _touchDragEl = null;
        }
        window.sorterDrop = function (e, bin) {
          e.preventDefault();
          document.querySelectorAll('.sorter-bin').forEach(b => b.classList.remove('over'));
          const verb = e.dataTransfer.getData('text');
          const card = document.getElementById('sc-' + verb); if (!card) return;
          card.classList.remove('dragging');
          const correct = card.dataset.aux === bin;
          card.classList.add(correct ? 'correct-place' : 'wrong-place');
          const dest = document.getElementById(correct ? 'cards-' + (bin === 'avoir' ? 'avoir' : 'etre') : 'cards-' + (card.dataset.aux === 'avoir' ? 'avoir' : 'etre'));
          if (dest) dest.appendChild(card);
          const fb = document.getElementById('sorter-feedback'); if (!fb) return;
          const spk = makeSpeakerHtml(verb, 'widget-speak-btn');
          fb.innerHTML = correct
            ? `<span style="color:#34A853;display:inline-flex;align-items:center;gap:6px">✓ ${spk} "${verb}" uses "${bin}"</span>`
            : `<span style="color:#EA4335;display:inline-flex;align-items:center;gap:6px">✗ ${spk} "${verb}" uses "${card.dataset.aux}", not "${bin}"</span>`;
          setTimeout(() => { if (fb) fb.textContent = ''; }, 2600);
        };
        window['w-sorter_reset'] = sorterInit;
        sorterInit();

        // Tricky Switch Verbs Quiz (Être vs Avoir)
        makeQuiz({
          idPrefix: 'pc-switch',
          pool: [
            {
              q: "Elle ___ les valises en haut.",
              ans: "a monté",
              wrong: ["est montée"],
              hint: "les valises = direct object (COD)",
              verb: "a monté les valises",
              why: "'les valises' is a direct object (COD). When moving something else, use AVOIR!",
              rule: "Use AVOIR when the verb has a direct object (moving something else)."
            },
            {
              q: "Elle ___ dans la voiture.",
              ans: "est montée",
              wrong: ["a monté"],
              hint: "subject moves herself (no direct object)",
              verb: "est montée",
              why: "The subject herself moved (got in / went up). When the subject moves, use ÊTRE with agreement!",
              rule: "Use ÊTRE when the subject is the one moving (intransitive)."
            },
            {
              q: "Ils ___ le chien ce matin.",
              ans: "ont sorti",
              wrong: ["sont sortis"],
              hint: "le chien = direct object (COD)",
              verb: "ont sorti le chien",
              why: "'le chien' is a direct object. They took the dog out (moved something else), so use AVOIR!",
              rule: "Use AVOIR when moving an object/person (transitive)."
            },
            {
              q: "Ils ___ avec des amis hier soir.",
              ans: "sont sortis",
              wrong: ["ont sorti"],
              hint: "subject moved / went out",
              verb: "sont sortis",
              why: "They went out themselves. The subject is moving, so use ÊTRE!",
              rule: "Use ÊTRE when the subject is moving."
            },
            {
              q: "J'___ un examen de français.",
              ans: "ai passé",
              wrong: ["suis passé"],
              hint: "un examen = direct object (took an exam)",
              verb: "ai passé un examen",
              why: "'un examen' is a direct object (to take an exam / spend time). Use AVOIR!",
              rule: "Passer + direct object (exam, time, days) uses AVOIR."
            },
            {
              q: "Je ___ chez toi vers 18h.",
              ans: "suis passé",
              wrong: ["ai passé"],
              hint: "I stopped by (subject moves)",
              verb: "suis passé",
              why: "I stopped by / came by. The subject is moving physically, so use ÊTRE!",
              rule: "Passer (to stop by / pass by physically) uses ÊTRE."
            },
            {
              q: "Nous ___ les escaliers à pied.",
              ans: "avons descendu",
              wrong: ["sommes descendus"],
              hint: "les escaliers = direct object (COD)",
              verb: "avons descendu les escaliers",
              why: "'les escaliers' is a direct object. Descendre + COD uses AVOIR without subject agreement!",
              rule: "Descendre + direct object takes AVOIR."
            },
            {
              q: "Nous ___ au rez-de-chaussée.",
              ans: "sommes descendus",
              wrong: ["avons descendu"],
              hint: "we went down (subject moves)",
              verb: "sommes descendus",
              why: "We went down ourselves. The subject moves, so use ÊTRE with plural agreement (-s)!",
              rule: "Descendre (intransitive) uses ÊTRE."
            },
            {
              q: "Tu ___ les chaises dans le salon.",
              ans: "as rentré",
              wrong: ["es rentré"],
              hint: "les chaises = direct object (COD)",
              verb: "as rentré les chaises",
              why: "You brought the chairs inside (moving something else = COD). Use AVOIR!",
              rule: "Rentrer + direct object takes AVOIR."
            },
            {
              q: "Tu ___ tard hier soir.",
              ans: "es rentré",
              wrong: ["as rentré"],
              hint: "you came home (subject moves)",
              verb: "es rentré",
              why: "You came home yourself. The subject is moving, so use ÊTRE!",
              rule: "Rentrer (to return / come home) uses ÊTRE."
            },
            {
              q: "Il ___ la crêpe dans la poêle.",
              ans: "a retourné",
              wrong: ["est retourné"],
              hint: "la crêpe = direct object (flipped it)",
              verb: "a retourné la crêpe",
              why: "He flipped the crepe (direct object). Moving / flipping something else takes AVOIR!",
              rule: "Retourner + direct object takes AVOIR."
            },
            {
              q: "Il ___ en France l'été dernier.",
              ans: "est retourné",
              wrong: ["a retourné"],
              hint: "he went back (subject moves)",
              verb: "est retourné",
              why: "He went back to France himself. The subject is moving, so use ÊTRE!",
              rule: "Retourner (to return / go back somewhere) uses ÊTRE."
            }
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace">${d.q}</span>`,
          getHint: d => d.hint,
          getChoices: d => shuffle([d.ans, ...d.wrong]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ "${d.ans}" — ${d.hint}`,
          getFailure: d => `Use "${d.ans}". ${d.hint}`,
          getExplanation: (d, c) => ({
            why: d.why,
            rule: d.rule
          })
        });
      }

      // ── OBJECT PRONOUNS: COD replacement quiz ─────────────
      if (sid === 'object_pronouns') {
        makeQuiz({
          idPrefix: 'cod',
          pool: [
            { q: "Tu vois <u>le chat</u>.", ans: 'le', wrong: ['la', 'lui', 'les'], hint: 'masculine singular → le' },
            { q: "Elle connaît <u>Marie</u>.", ans: 'la', wrong: ['le', 'lui', 'les'], hint: 'feminine singular → la' },
            { q: "Nous aimons <u>les bagels</u>.", ans: 'les', wrong: ['le', 'la', 'lui'], hint: 'plural → les' },
            { q: "Il regarde <u>le film</u>.", ans: 'le', wrong: ['la', 'les', 'lui'], hint: 'masculine singular → le' },
            { q: "Vous voyez <u>les étoiles</u>.", ans: 'les', wrong: ['le', 'la', 'leur'], hint: 'plural feminine → les' },
            { q: "On appelle <u>Sophie</u>.", ans: 'la', wrong: ['le', 'les', 'lui'], hint: 'feminine singular → la' },
            { q: "J\'entends <u>mes amis</u>.", ans: 'les', wrong: ['le', 'la', 'leur'], hint: 'plural → les' },
            { q: "Tu prends <u>le bus</u>.", ans: 'le', wrong: ['la', 'les', 'lui'], hint: 'masculine singular → le' },
            { q: "Il écoute <u>la radio</u>.", ans: 'la', wrong: ['le', 'les', 'lui'], hint: 'feminine singular → la' },
            // NEGATIVE: pronoun stays between ne and verb
            { q: "Je ne ___ vois pas. (le chat)", ans: 'le', wrong: ['la', 'les', 'lui'], hint: 'negative: ne + le + vois + pas' },
            { q: "Elle ne ___ connaît pas. (Marie)", ans: 'la', wrong: ['le', 'les', 'lui'], hint: 'negative: ne + la + connaît + pas' },
            { q: "On ne ___ aime pas. (les films)", ans: 'les', wrong: ['le', 'la', 'lui'], hint: 'negative: ne + les + aime + pas' },
            { q: "Il ne ___ a pas vu. (le film — passé composé)", ans: 'le', wrong: ['la', 'les', 'lui'], hint: 'passé composé: ne + le + a + pas + vu' },
            { q: "Je ne ___ parle pas. (à Marie — COI)", ans: 'lui', wrong: ['la', 'le', 'leur'], hint: 'COI negative: ne + lui + parle + pas' },
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace">${d.q}</span>`,
          getHint: d => 'Replace underlined noun: ' + d.hint,
          getChoices: d => shuffle([d.ans, ...d.wrong]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ "${d.ans}" — ${d.hint}`,
          getFailure: d => `Use "${d.ans}". ${d.hint}`,
          getExplanation: (d, c) => {
            const map = {
              le: t('exp_cod_le') || "'le' replaces a masculine singular direct object (COD): le chat → le. No preposition between verb and noun = COD.",
              la: t('exp_cod_la') || "'la' replaces a feminine singular direct object. Check: does the verb act ON the noun directly, with no 'à'?",
              les: t('exp_cod_les') || "'les' replaces any plural direct object. If the noun is plural and directly after the verb — always 'les'.",
              lui: t('exp_cod_lui') || "'lui' is a COI pronoun (indirect object, replaces à + person). It's NOT a COD. Check if the verb uses 'à': parler à, téléphoner à → COI → lui.",
              leur: t('exp_cod_leur') || "'leur' is a COI pronoun for 3rd person plural (indirect: à + them). It's NOT a direct object pronoun. Direct plural = les.",
            };
            const isNeg = d.q && (d.q.includes('ne _') || d.q.includes('pas'));
            const neg_note = isNeg ? ' ' + (t('exp_cod_neg') || 'In negative sentences: ne + [pronoun] + verb + pas. The pronoun never moves outside ne...pas.') : '';
            return { why: (map[c] || '') + neg_note, rule: t('exp_cod_rule') || 'COD (direct, no preposition): le/la/les · COI (indirect, à + person): lui/leur' };
          },
        });
        window['w-cod_reset'] = () => window['cod_reset']();
      }

      // ── IMPERATIVES: command builder ───────────────────────
      if (sid === 'imperatives') {
        const impForms = {
          parler: { tu: 'Parle!', nous: 'Parlons!', vous: 'Parlez!', note: '(no -s on tu for -ER verbs)', neg_tu: "Ne parle pas!", neg_nous: "Ne parlons pas!", neg_vous: "Ne parlez pas!" },
          finir: { tu: 'Finis!', nous: 'Finissons!', vous: 'Finissez!', note: '', neg_tu: "Ne finis pas!", neg_nous: "Ne finissons pas!", neg_vous: "Ne finissez pas!" },
          manger: { tu: 'Mange!', nous: 'Mangeons!', vous: 'Mangez!', note: '(no -s on tu)', neg_tu: "Ne mange pas!", neg_nous: "Ne mangeons pas!", neg_vous: "Ne mangez pas!" },
          partir: { tu: 'Pars!', nous: 'Partons!', vous: 'Partez!', note: '', neg_tu: "Ne pars pas!", neg_nous: "Ne partons pas!", neg_vous: "Ne partez pas!" },
          prendre: { tu: 'Prends!', nous: 'Prenons!', vous: 'Prenez!', note: '', neg_tu: "Ne prends pas!", neg_nous: "Ne prenons pas!", neg_vous: "Ne prenez pas!" },
          être: { tu: 'Sois!', nous: 'Soyons!', vous: 'Soyez!', note: '(irregular)', neg_tu: "Ne sois pas!", neg_nous: "Ne soyons pas!", neg_vous: "Ne soyez pas!" },
        };
        window._impState = { person: null, verb: null };
        window.impPick = function (type, val, btn) {
          const row = btn.closest('.conj-row');
          row.querySelectorAll('.w-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          window._impState[type] = val;
          const { person, verb } = window._impState;
          const res = document.getElementById('imp-result'); if (!res) return;
          if (person && verb) {
            const f = impForms[verb];
            const negMode = document.getElementById('imp-neg-toggle') && document.getElementById('imp-neg-toggle').checked;
            const form = negMode ? f['neg_' + person] : f[person];
            const noteText = negMode ? 'ne + verb + pas' : f.note;
            const spk = makeSpeakerHtml(form, 'widget-speak-btn');
            res.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px">${spk}<span class="conj-stem" style="font-size:1.4rem;color:${negMode ? '#EA4335' : 'var(--text-primary)'}">${form}</span>${noteText ? `<span style="font-size:0.8rem;color:var(--text-secondary);margin-left:8px">${noteText}</span>` : ''}</span>`;
          } else {
            res.textContent = '← choose a person and verb';
          }
        };
        window._impRefresh = function () {
          const { person, verb } = window._impState;
          if (person && verb) {
            const f = impForms[verb];
            const negMode = document.getElementById('imp-neg-toggle') && document.getElementById('imp-neg-toggle').checked;
            const form = negMode ? f['neg_' + person] : f[person];
            const noteText = negMode ? 'ne + verb + pas' : f.note;
            const res = document.getElementById('imp-result');
            const spk = makeSpeakerHtml(form, 'widget-speak-btn');
            if (res) res.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px">${spk}<span class="conj-stem" style="font-size:1.4rem;color:${negMode ? '#EA4335' : 'var(--text-primary)'}">${form}</span>${noteText ? `<span style="font-size:0.8rem;color:var(--text-secondary);margin-left:8px">${noteText}</span>` : ''}</span>`;
          }
        };
        window['w-imp_reset'] = function () {
          window._impState = { person: null, verb: null };
          document.querySelectorAll('#w-imp .w-pill').forEach(b => b.classList.remove('selected'));
          const toggle = document.getElementById('imp-neg-toggle');
          if (toggle) toggle.checked = false;
          const res = document.getElementById('imp-result');
          if (res) res.textContent = '← choose a person and verb';
        };
      }

      // ── USEFUL STRUCTURES: near future quiz ────────────────
      if (sid === 'useful_structures') {
        makeQuiz({
          idPrefix: 'fut',
          pool: [
            { q: "Je ___ manger une poutine.", subj: 'je', ans: 'vais', eng: "I'm going to eat a poutine." },
            { q: "On ___ visiter Québec.", subj: 'on', ans: 'va', eng: "We're going to visit Quebec City." },
            { q: "Il ___ neiger demain.", subj: 'il', ans: 'va', eng: "It's going to snow tomorrow." },
            { q: "Tu ___ aimer ça!", subj: 'tu', ans: 'vas', eng: "You're going to love that!" },
            { q: "Nous ___ partir à huit heures.", subj: 'nous', ans: 'allons', eng: "We're going to leave at 8." },
            { q: "Vous ___ avoir froid!", subj: 'vous', ans: 'allez', eng: "You're going to be cold!" },
            { q: "Elles ___ arriver en retard.", subj: 'elles', ans: 'vont', eng: "They're going to arrive late." },
            { q: "T'___ voir le médecin?", subj: 'tu (Quebec)', ans: 'vas', eng: "Are you going to see the doctor?" },
            // NEGATIVE near future
            { q: "Je ne ___ pas manger ça.", subj: 'je (neg)', ans: 'vais', eng: "I'm not going to eat that." },
            { q: "On ne ___ pas partir tôt.", subj: 'on (neg)', ans: 'va', eng: "We're not going to leave early." },
            { q: "Tu ne ___ pas aimer ça!", subj: 'tu (neg)', ans: 'vas', eng: "You're not going to like that!" },
            { q: "Elles ne ___ pas venir.", subj: 'elles (neg)', ans: 'vont', eng: "They're not going to come." },
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace;font-size:1.1rem">${d.q}</span>`,
          getHint: d => `Subject: ${d.subj}`,
          getChoices: () => shuffle(['vais', 'vas', 'va', 'allons', 'allez', 'vont']),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ "${d.ans}" — ${d.eng}`,
          getFailure: d => `Use "${d.ans}" for ${d.subj}. ${d.eng}`,
          getExplanation: (d, c) => {
            const allerConj = { vais: 'je', vas: 'tu', va: 'il/elle/on', allons: 'nous', allez: 'vous', vont: 'ils/elles' };
            const correct = allerConj[d.ans] || d.subj;
            const wrong = allerConj[c] || '?';
            return {
              why: `${t('exp_fut_subj') || 'The subject is'} <strong>${d.subj}</strong>. <strong>${c}</strong> ${t('exp_fut_belongs') || 'belongs to'} <strong>${wrong}</strong>, ${t('exp_fut_not') || 'not to'} <strong>${correct}</strong>.`,
              rule: t('exp_fut_rule') || 'Near future: je vais · tu vas · il/elle/on va · nous allons · vous allez · ils/elles vont + infinitive'
            };
          },
        });
        window['w-fut_reset'] = () => window['fut_reset']();
      }

      // ── QUÉBEC VOCAB: translation quiz ─────────────────────
      if (sid === 'quebec_vocab') {
        makeQuiz({
          idPrefix: 'qvoc',
          pool: [
            { q: 'un char', ans: 'a car', wrong: ['a bus', 'a truck', 'a chair'] },
            { q: 'le dépanneur', ans: 'corner store', wrong: ['the pharmacy', 'the bakery', 'the bank'] },
            { q: 'une blonde', ans: 'a girlfriend', wrong: ['a blonde hair', 'a stranger', 'a sister'] },
            { q: 'un chum', ans: 'a boyfriend', wrong: ['a buddy', 'a cousin', 'a neighbour'] },
            { q: 'la fin de semaine', ans: 'the weekend', wrong: ['the end of the week', 'a holiday', 'the week'] },
            { q: 'magasiner', ans: 'to go shopping', wrong: ['to save money', 'to cook', 'to travel'] },
            { q: 'présentement', ans: 'right now', wrong: ['previously', 'later', 'sometimes'] },
            { q: 'le courriel', ans: 'email', wrong: ['a letter', 'a phone call', 'a fax'] },
            { q: 'Bienvenue! (after Merci)', ans: "You're welcome!", wrong: ['Come in!', 'Welcome here!', 'Good luck!'] },
            { q: 'C\'est le boutte!', ans: "It's awesome!", wrong: ["It's over!", "It's the boot!", "That's wrong!"] },
            { q: 'Être tanné(e)', ans: 'to be fed up', wrong: ['to be tanned', 'to be tired', 'to be bored'] },
            { q: 'Pantoute', ans: 'not at all', wrong: ['everywhere', 'a little', 'sometimes'] },
            { q: 'C\'est de valeur.', ans: "What a shame.", wrong: ["It's valuable.", "That's correct.", "It's expensive."] },
            { q: 'T\'sais?', ans: 'You know? (filler)', wrong: ['Do you know?', 'What do you know?', 'I know.'] },
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace;color:var(--secondary)">${d.q}</span>`,
          getHint: () => 'Quebec French expression',
          getChoices: d => shuffle([d.ans, ...d.wrong]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ "${d.ans}"`,
          getFailure: d => `"${d.ans}" is the Quebec meaning`,
          getExplanation: (d, c) => ({
            why: `<strong>${c}</strong> ${t('exp_qvoc_not') || 'is not what this Quebec word means'}. ${t('exp_qvoc_trap') || 'Quebec French often uses words that look like standard French but mean something completely different — these are called faux amis (false friends).'}`,
            rule: `${t('exp_qvoc_correct') || 'The correct Quebec meaning of'} <strong>${d.q}</strong> ${t('exp_qvoc_is') || 'is'}: <strong>${d.ans}</strong>`
          }),
        });
        window['w-qvoc_reset'] = () => window['qvoc_reset']();
      }

      // ── COD & COI: pronoun quiz ────────────────────────────
      if (sid === 'cod_coi') {
        makeQuiz({
          idPrefix: 'codcoi',
          pool: [
            { q: "Je vois <u>le chat</u>.", ans: 'le', wrong: ['la', 'lui', 'les'], hint: 'COD, masc. sg. → le' },
            { q: "Je parle <u>à Marie</u>.", ans: 'lui', wrong: ['la', 'le', 'leur'], hint: 'COI, 3rd sg. → lui' },
            { q: "On aime <u>les films</u>.", ans: 'les', wrong: ['le', 'la', 'leur'], hint: 'COD, plural → les' },
            { q: "Elle écrit <u>à ses parents</u>.", ans: 'leur', wrong: ['les', 'lui', 'leur'].filter(x => x !== 'leur'), hint: 'COI, 3rd pl. → leur' },
            { q: "Tu comprends <u>la question</u>?", ans: 'la', wrong: ['le', 'lui', 'les'], hint: 'COD, fem. sg. → la' },
            { q: "Il téléphone <u>à son ami</u>.", ans: 'lui', wrong: ['le', 'la', 'les'], hint: 'COI, 3rd sg. → lui' },
            { q: "Je prends <u>les billets</u>.", ans: 'les', wrong: ['le', 'la', 'lui'], hint: 'COD, plural → les' },
            { q: "Tu dis la vérité <u>à tes amis</u>.", ans: 'leur', wrong: ['les', 'lui', 'la'], hint: 'COI, 3rd pl. → leur' },
            // NEGATIVE: pronoun slots between ne and verb
            { q: "Je ne ___ vois pas. <small style='color:var(--text-secondary)'>(le chat)</small>", ans: 'le', wrong: ['la', 'lui', 'les'], hint: 'negative COD: ne + le + verb + pas' },
            { q: "Elle ne ___ parle pas. <small style='color:var(--text-secondary)'>(à Marc)</small>", ans: 'lui', wrong: ['le', 'la', 'les'], hint: 'negative COI: ne + lui + verb + pas' },
            { q: "On ne ___ aime pas. <small style='color:var(--text-secondary)'>(les examens)</small>", ans: 'les', wrong: ['le', 'la', 'leur'], hint: 'negative COD plural: ne + les + verb + pas' },
            { q: "Tu ne ___ as pas dit. <small style='color:var(--text-secondary)'>(à tes amis, passé)</small>", ans: 'leur', wrong: ['les', 'lui', 'la'], hint: 'negative COI passé composé: ne + leur + as + pas + dit' },
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace">${d.q}</span>`,
          getHint: d => 'Replace underlined: ' + d.hint,
          getChoices: d => shuffle([d.ans, ...d.wrong.slice(0, 3)]),
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ "${d.ans}" — ${d.hint}`,
          getFailure: d => `Use "${d.ans}". ${d.hint}`,
          getExplanation: (d, c) => {
            const isCOD = d.hint.includes('COD');
            const isCOI = d.hint.includes('COI');
            const isNeg = d.q && (d.q.includes('ne _') || d.q.includes('pas'));
            const map = {
              le: t('exp_codcoi_le') || "'le' is a COD (direct object) for masculine singular nouns. The verb acts directly on the noun with no preposition.",
              la: t('exp_codcoi_la') || "'la' is a COD for feminine singular nouns. Direct object = no 'à' between verb and noun.",
              les: t('exp_codcoi_les') || "'les' is a COD for plural nouns. Always 'les' for plural direct objects, regardless of gender.",
              lui: t('exp_codcoi_lui') || "'lui' is a COI (indirect object) for 3rd person singular. The verb uses 'à': parler à → lui. It replaces à + person (singular).",
              leur: t('exp_codcoi_leur') || "'leur' is a COI for 3rd person plural (à + them). Don't confuse with 'les' (COD plural) — 'leur' is only for indirect objects.",
            };
            let why = map[c] || '';
            if (isNeg) why += ` ${t('exp_codcoi_neg') || 'In a negative sentence: Subject + ne + [pronoun] + verb + pas. The pronoun position never changes in negation.'}`;
            return { why, rule: t('exp_codcoi_rule') || 'Direct (COD, no à): le/la/les · Indirect (COI, à + person): lui (sg) / leur (pl)' };
          },
        });
        window['w-codcoi_reset'] = () => window['codcoi_reset']();
      }

      // ── VERB ENDINGS: interactive conjugation workshop ──────
      if (sid === 'verb_endings') {

        // ── Data ──
        const veGroups = {
          er: {
            label: '-ER', color: 'var(--blue)', cls: 'er',
            endings: [
              { pron: 'je / j\'', end: '-e', silent: true, sound: '[stem]', en: 'I …' },
              { pron: 'tu', end: '-es', silent: true, sound: '[stem]', en: 'you …' },
              { pron: 'il/elle/on', end: '-e', silent: true, sound: '[stem]', en: 'he/she …' },
              { pron: 'nous', end: '-ons', silent: false, sound: '[stem]-õ', en: 'we …' },
              { pron: 'vous', end: '-ez', silent: false, sound: '[stem]-é', en: 'you …' },
              { pron: 'ils/elles', end: '-ent', silent: true, sound: '[stem]', en: 'they …' },
            ]
          },
          ir: {
            label: '-IR', color: '#a78bfa', cls: 'ir',
            endings: [
              { pron: 'je', end: '-is', silent: false, sound: '[stem]-i', en: 'I …' },
              { pron: 'tu', end: '-is', silent: false, sound: '[stem]-i', en: 'you …' },
              { pron: 'il/elle/on', end: '-it', silent: true, sound: '[stem]-i', en: 'he/she …' },
              { pron: 'nous', end: '-issons', silent: false, sound: '[stem]-issõ', en: 'we …' },
              { pron: 'vous', end: '-issez', silent: false, sound: '[stem]-issé', en: 'you …' },
              { pron: 'ils/elles', end: '-issent', silent: true, sound: '[stem]-iss', en: 'they …' },
            ]
          },
          re: {
            label: '-RE', color: 'var(--green)', cls: 're',
            endings: [
              { pron: 'je', end: '-s', silent: true, sound: '[stem]', en: 'I …' },
              { pron: 'tu', end: '-s', silent: true, sound: '[stem]', en: 'you …' },
              { pron: 'il/elle/on', end: '∅', silent: true, sound: '[stem]', en: 'he/she …' },
              { pron: 'nous', end: '-ons', silent: false, sound: '[stem]-õ', en: 'we …' },
              { pron: 'vous', end: '-ez', silent: false, sound: '[stem]-é', en: 'you …' },
              { pron: 'ils/elles', end: '-ent', silent: true, sound: '[stem]', en: 'they …' },
            ]
          }
        };

        const veExamples = {
          er: { verb: 'parler', stem: 'parl', meanings: ['je parle', 'tu parles', 'il parle', 'nous parlons', 'vous parlez', 'ils parlent'] },
          ir: { verb: 'finir', stem: 'fin', meanings: ['I finish', 'you finish', 'he finishes', 'we finish', 'you finish', 'they finish'] },
          re: { verb: 'attendre', stem: 'attend', meanings: ['I wait', 'you wait', 'he waits', 'we wait', 'you wait', 'they wait'] }
        };

        // ── Widget 0: comparison grid ──
        const compareGrid = document.getElementById('ve-compare-grid');
        if (compareGrid) {
          compareGrid.innerHTML = ['er', 'ir', 're'].map(g => {
            const grp = veGroups[g];
            const rows = grp.endings.map(e =>
              '<div class="ve-compare-row">' +
              '<span class="ve-compare-pron">' + e.pron + '</span>' +
              '<span class="ve-compare-end">' + e.end + (e.silent ? '<span style="font-size:0.55rem;opacity:0.5;margin-left:2px">🤫</span>' : '') + '</span>' +
              '</div>'
            ).join('');
            return '<div class="ve-compare-col ' + g + '">' +
              '<div class="ve-compare-title">' + grp.label + ' verbs</div>' +
              rows +
              '</div>';
          }).join('');
        }
        
        const tensesGrid = document.getElementById('ve-tenses-grid');
        if (tensesGrid) {
            const imparfait = [
              { pron: 'je', end: '-ais' }, { pron: 'tu', end: '-ais' }, { pron: 'il/elle', end: '-ait' },
              { pron: 'nous', end: '-ions' }, { pron: 'vous', end: '-iez' }, { pron: 'ils', end: '-aient' }
            ];
            const futurSimple = [
              { pron: 'je', end: '-ai' }, { pron: 'tu', end: '-as' }, { pron: 'il/elle', end: '-a' },
              { pron: 'nous', end: '-ons' }, { pron: 'vous', end: '-ez' }, { pron: 'ils', end: '-ont' }
            ];
            const cond = [
              { pron: 'je', end: '-ais' }, { pron: 'tu', end: '-ais' }, { pron: 'il/elle', end: '-ait' },
              { pron: 'nous', end: '-ions' }, { pron: 'vous', end: '-iez' }, { pron: 'ils', end: '-aient' }
            ];
            const pc = [
              { pron: '-ER verb', end: '-é' }, { pron: '-IR verb', end: '-i' }, { pron: '-RE verb', end: '-u' }
            ];

            const renderCol = (title, data, color, rgbaStr) => {
              return '<div class="ve-compare-col" style="border-color: ' + rgbaStr + ';">' +
                '<div class="ve-compare-title" style="color: ' + color + ';">' + title + '</div>' +
                data.map(e => '<div class="ve-compare-row"><span class="ve-compare-pron">' + e.pron + '</span><span class="ve-compare-end" style="color: ' + color + '; font-weight: 500;">' + e.end + '</span></div>').join('') +
                '</div>';
            };

            tensesGrid.innerHTML = 
              renderCol('Imparfait', imparfait, '#f59e0b', 'rgba(245, 158, 11, 0.3)') +
              renderCol('Futur Simple', futurSimple, '#3b82f6', 'rgba(59, 130, 246, 0.3)') +
              renderCol('Conditionnel', cond, '#8b5cf6', 'rgba(139, 92, 246, 0.3)') +
              renderCol('P. Composé (PP)', pc, '#10b981', 'rgba(16, 185, 129, 0.3)');
        }

        // ── Widgets 1–3: live conjugation builders ──
        window.veUpdate = function (group) {
          const g = veGroups[group];
          const ex = veExamples[group];
          const inp = document.getElementById('ve-' + group + '-input');
          const splitEl = document.getElementById('ve-' + group + '-split');
          const tableEl = document.getElementById('ve-' + group + '-table');
          const tbodyEl = document.getElementById('ve-' + group + '-tbody');
          if (!inp || !splitEl) return;

          const raw = inp.value.trim().toLowerCase();
          if (!raw) { splitEl.style.display = 'none'; if (tableEl) tableEl.style.display = 'none'; return; }

          const suffix = group === 'er' ? 'er' : group === 'ir' ? 'ir' : 're';
          const hasSuffix = raw.endsWith(suffix);
          const stem = hasSuffix ? raw.slice(0, -suffix.length) : raw;

          splitEl.style.display = 'flex';
          splitEl.innerHTML =
            '<span class="ve-split-label">Stem</span>' +
            '<span class="ve-stem">' + (stem || '…') + '</span>' +
            (hasSuffix ? '<span class="ve-arrow">+</span><span class="ve-removed ' + group + '">' + suffix + '</span><span class="ve-arrow">→</span><span class="ve-split-label" style="margin-left:0;color:var(--text-secondary)">removed</span>' + `<button class="vmodal-chip" style="margin-left:auto;padding:2px 10px;font-size:0.75rem;background:var(--surface-3);" onclick="openVerbModal('${raw}')" title="See all tenses for ${raw}"><span class="ms ms-sm" style="color:var(--yellow);margin-right:4px;">auto_stories</span>All Tenses →</button>` : '<span class="ve-arrow" style="color:var(--red)">⚠ type the full infinitive ending in -' + suffix + '</span>');

          if (!hasSuffix || !stem) { if (tableEl) tableEl.style.display = 'none'; return; }

          const conj = typeof FrenchConjugator !== 'undefined' ? FrenchConjugator.conjugate(raw) : null;
          const vInfo = typeof getEngVerbInfo === 'function' ? getEngVerbInfo(raw) : { base: raw, s: raw, ing: raw, ed: raw };

          if (tableEl) tableEl.style.display = 'block';
          if (tbodyEl) {
            tbodyEl.innerHTML = g.endings.map((e, i) => {
              let pron = e.pron;
              let formDisplay = '';
              let pronDisplay = pron === "je / j'" ? ((conj && FrenchConjugator.isVowel(conj.pres[i])) ? "j'" : "je") : pron;

              if (conj && conj.pres && conj.pres[i]) {
                formDisplay = conj.pres[i];
              } else {
                formDisplay = stem + e.end.replace('-', '');
              }

              let enWord = '';
              if (i === 0) enWord = 'I ' + vInfo.base;
              else if (i === 1) enWord = 'you ' + vInfo.base;
              else if (i === 2) enWord = 'he / she ' + vInfo.s;
              else if (i === 3) enWord = 'we ' + vInfo.base;
              else if (i === 4) enWord = 'you ' + vInfo.base;
              else if (i === 5) enWord = 'they ' + vInfo.base;

              let sound = e.sound.replace('[stem]', stem);
              if (group === 'ir') {
                if (pron === 'nous') sound = stem + 'issõ';
                else if (pron === 'vous') sound = stem + 'issé';
                else if (pron === 'ils/elles') sound = stem + 'iss';
                else sound = stem + 'i';
              }

              let spokenFr = (pronDisplay === "j'" ? "j'" : pronDisplay + ' ') + formDisplay;
              let spk = makeSpeakerHtml(spokenFr, 'tbl-speak-btn');
              return '<tr>' +
                '<td class="td-pron">' + pronDisplay + '</td>' +
                '<td><div class="ve-form">' + spk + '<span class="ve-form-stem">' + formDisplay + '</span></div></td>' +
                '<td class="td-sound">' + sound + '</td>' +
                '<td class="td-en">' + enWord + '</td>' +
                '</tr>';
            }).join('');
          }
        };
        window['w-ve-er_reset'] = () => { const i = document.getElementById('ve-er-input'); if (i) { i.value = 'parler'; veUpdate('er'); } };
        window['w-ve-ir_reset'] = () => { const i = document.getElementById('ve-ir-input'); if (i) { i.value = 'finir'; veUpdate('ir'); } };
        window['w-ve-re_reset'] = () => { const i = document.getElementById('ve-re-input'); if (i) { i.value = 'attendre'; veUpdate('re'); } };
        window['w-ve-groups_reset'] = () => { };

        // ── Widget 4: pronunciation quiz ──
        const vepPool = shuffle([
          { form: 'ils parlent', answer: 'silent', why: "The -ent ending of -ER verbs is ALWAYS silent. 'ils parlent' sounds exactly like 'il parle'." },
          { form: 'nous parlons', answer: 'sounds', why: "The -ons ending is NOT silent — it sounds like 'õ' (nasal). 'nous parlons' = parl-ÕN." },
          { form: 'vous parlez', answer: 'sounds', why: "The -ez ending sounds like 'é'. 'vous parlez' = parl-É. Same as the infinitive vowel sound." },
          { form: 'il parle', answer: 'silent', why: "The -e ending is silent. The verb sounds exactly like the bare stem: 'parl'." },
          { form: 'je parle', answer: 'silent', why: "The -e ending is silent. 'je parle' sounds like 'je parl'." },
          { form: 'tu parles', answer: 'silent', why: "The -es ending is silent. 'tu parles' sounds like 'tu parl' — identical to je/il." },
          { form: 'ils finissent', answer: 'silent', why: "The -ent of -IR verbs is silent too. But the -iss- IS heard: 'fin-ISS' (then silent -ent)." },
          { form: 'vous finissez', answer: 'sounds', why: "The -issez ending IS pronounced: 'fin-ISS-É'. The -ez sounds like 'é'." },
          { form: 'il finit', answer: 'silent', why: "The final -t is silent. 'il finit' sounds like 'fini' — only the -t is written, not spoken." },
          { form: 'il attend', answer: 'silent', why: "No ending is added (∅ rule for -RE verbs). The -d is silent. 'il attend' = 'atã'." },
          { form: 'nous attendons', answer: 'sounds', why: "The -ons ending sounds like 'õ'. 'nous attendons' = atãd-ÕN." },
          { form: 'ils attendent', answer: 'silent', why: "The -ent is silent, same rule as -ER verbs. 'ils attendent' = 'il attend' in sound." },
          { form: 'je finis', answer: 'sounds', why: "The -is ending IS pronounced: 'fini'. Unlike -ER verbs, the singular ending of -IR verbs IS heard." },
          { form: 'tu finis', answer: 'sounds', why: "Same as je: the -is IS pronounced as 'i'. Both je and tu finis = 'fini'." },
        ]);
        let vepIdx = 0, vepScore = [0, 0];
        function vepShow() {
          if (vepIdx >= vepPool.length) { vepIdx = 0; }
          const item = vepPool[vepIdx];
          const qEl = document.getElementById('vep-q');
          const hEl = document.getElementById('vep-hint');
          const cEl = document.getElementById('vep-choices');
          const rEl = document.getElementById('vep-result');
          const nrEl = document.getElementById('vep-next-row');
          const scEl = document.getElementById('vep-score');
          if (!qEl || !cEl) return;
          const spk = makeSpeakerHtml(item.form, 'widget-speak-btn');
          qEl.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px;justify-content:center">${spk}<span>${item.form}</span></span>`;
          if (hEl) hEl.textContent = 'Is the conjugation ending silent or does it produce a sound?';
          if (rEl) rEl.textContent = '';
          if (nrEl) nrEl.style.display = 'none';
          const expEl = document.getElementById('vep-explain');
          if (expEl) { expEl.style.display = 'none'; expEl.innerHTML = ''; }
          cEl.innerHTML =
            '<button class="w-pill" onclick="vepCheck(\'silent\',this)">🤫 Silent</button>' +
            '<button class="w-pill" onclick="vepCheck(\'sounds\',this)">🔊 Sounds</button>';
          if (scEl) scEl.textContent = vepScore[1] ? vepScore[0] + '/' + vepScore[1] + ' correct' : '';
        }
        window.vepCheck = function (choice, btn) {
          const item = vepPool[vepIdx];
          const cEl = document.getElementById('vep-choices');
          const rEl = document.getElementById('vep-result');
          const nrEl = document.getElementById('vep-next-row');
          const nBtn = document.getElementById('vep-next-btn');
          const scEl = document.getElementById('vep-score');
          if (!cEl) return;
          cEl.querySelectorAll('.w-pill').forEach(b => b.disabled = true);
          const correct = choice === item.answer;
          btn.classList.add(correct ? 'correct' : 'wrong');
          if (!correct) {
            cEl.querySelectorAll('.w-pill').forEach(b => {
              if ((b.textContent.includes('Silent') && item.answer === 'silent') ||
                (b.textContent.includes('Sounds') && item.answer === 'sounds')) b.classList.add('correct');
            });
          }
          // Show explanation inline
          let expEl = document.getElementById('vep-explain');
          if (!expEl) {
            expEl = document.createElement('div');
            expEl.id = 'vep-explain';
            const nrParent = nrEl ? nrEl.parentNode : cEl.parentNode;
            if (nrEl) nrParent.insertBefore(expEl, nrEl);
          }
          expEl.style.display = 'block';
          const expSpk = makeSpeakerHtml(item.form, 'widget-speak-btn');
          expEl.innerHTML = '<div class="quiz-explain">' +
            '<div class="quiz-explain-head">💡 ' + (correct ? 'Correct!' : "Why it's wrong") + '</div>' +
            '<div class="quiz-explain-body" style="display:flex;align-items:flex-start;gap:8px">' + expSpk + '<div>' + item.why + '</div></div>' +
            '</div>';

          if (rEl) rEl.innerHTML = correct ? '<span style="color:var(--green)">✓ ' + (item.answer === 'silent' ? 'Silent' : 'Sounds') + '</span>' : '';
          vepScore[correct ? 0 : 1] += correct ? 1 : 0; vepScore[1]++;
          if (scEl) scEl.textContent = vepScore[0] + '/' + vepScore[1] + ' correct';
          vepIdx++;
          if (nrEl && nBtn) {
            nBtn.textContent = (correct ? 'Next' : 'Got it') + ' \u2192';
            nBtn.className = 'quiz-next-btn ' + (correct ? 'quiz-next-correct' : 'quiz-next-wrong');
            nrEl.style.display = 'flex';
          }
        };
        window['vep_next'] = function () {
          const expEl = document.getElementById('vep-explain');
          if (expEl) { expEl.style.display = 'none'; expEl.innerHTML = ''; }
          vepShow();
        };
        window['w-ve-pron_reset'] = function () {
          vepScore = [0, 0]; vepIdx = 0; vepPool.sort(() => Math.random() - 0.5); vepShow();
          const sc = document.getElementById('vep-score'); if (sc) sc.textContent = '';
        };
        if (document.getElementById('vep-q')) vepShow();
      }

      // ── PRONOMINAL VERBS: conjugation quiz ─────────────────
      if (sid === 'pronominal') {
        makeQuiz({
          idPrefix: 'pron2',
          pool: [
            { verb: "se lever", subj: "je", ans: "me lève", tense: "présent" },
            { verb: "se coucher", subj: "tu", ans: "te couches", tense: "présent" },
            { verb: "s'habiller", subj: "il", ans: "s'habille", tense: "présent" },
            { verb: "se réveiller", subj: "nous", ans: "nous réveillons", tense: "présent" },
            { verb: "se dépêcher", subj: "vous", ans: "vous dépêchez", tense: "présent" },
            { verb: "s'appeler", subj: "elles", ans: "s'appellent", tense: "présent" },
            { verb: "se lever", subj: "je", ans: "me suis levé", tense: "passé composé" },
            { verb: "se coucher", subj: "elle", ans: "s'est couchée", tense: "passé composé" },
            { verb: "s'endormir", subj: "ils", ans: "se sont endormis", tense: "passé composé" },
            { verb: "se promener", subj: "tu", ans: "te es promené", tense: "passé composé" },
            // NEGATIVE pronominal
            { verb: "se lever", subj: "je", ans: "ne me lève pas", tense: "négatif présent" },
            { verb: "se coucher", subj: "tu", ans: "ne te couches pas", tense: "négatif présent" },
            { verb: "s'habiller", subj: "il", ans: "ne s'habille pas", tense: "négatif présent" },
            { verb: "se lever", subj: "je", ans: "ne me suis pas levé", tense: "négatif passé composé" },
            { verb: "se coucher", subj: "elle", ans: "ne s'est pas couchée", tense: "négatif passé composé" },
          ],
          getQuestion: d => `<span style="font-family:'Azeret Mono',monospace">${d.subj} (${d.verb}) — ${d.tense}</span>`,
          getHint: d => `Conjugate ${d.verb} for "${d.subj}" in ${d.tense}`,
          getChoices: d => {
            const fakes = {
              "me lève": ["me lèves", "lève", "me lève"], "te couches": ["se couches", "te couche", "te couchez"],
              "s'habille": ["se habille", "s'habilles", "il habille"], "nous réveillons": ["nous réveillons", "nous réveillent", "nous réveillez"],
              "vous dépêchez": ["vous dépêche", "vous dépêcherez", "vous dépêchez"], "s'appellent": ["s'appelle", "se appelle", "ils appellent"],
              "me suis levé": ["m'ai levé", "me suis levé", "j'ai levé"], "s'est couchée": ["s'a couchée", "s'est couché", "elle est couchée"],
              "se sont endormis": ["s'ont endormis", "se sont endormi", "ils se sont endormis"],
              "te es promené": ["tu es promené", "t'es promené", "te as promené"],
              // negative forms
              "ne me lève pas": ["me ne lève pas", "ne lève pas me", "ne me lève pas"],
              "ne te couches pas": ["te ne couches pas", "ne couches pas te", "ne te couches pas"],
              "ne s'habille pas": ["s'ne habille pas", "ne habille pas s'", "ne s'habille pas"],
              "ne me suis pas levé": ["me ne suis pas levé", "ne me suis levé pas", "ne me suis pas levé"],
              "ne s'est pas couchée": ["s'est ne pas couchée", "ne s'est couchée pas", "ne s'est pas couchée"],
            };
            const opts = fakes[d.ans] || [d.ans, d.ans + 's', d.ans.replace('me', 'te')];
            const uniqueOpts = [...new Set(opts)];
            return shuffle(uniqueOpts.includes(d.ans) ? uniqueOpts : [d.ans, ...uniqueOpts.slice(0, 2)]);
          },
          check: (d, c) => c === d.ans,
          getCorrect: d => d.ans,
          getSuccess: d => `✓ ${d.subj} ${d.ans}`,
          getFailure: d => `"${d.subj} ${d.ans}" is correct`,
          getExplanation: (d, c) => {
            const isNeg = d.tense.includes('négatif');
            const isPC = d.tense.includes('passé');
            let why = '';
            if (isNeg && c.includes('me ne') || c.includes('te ne') || c.includes('se ne')) {
              why = t('exp_pron2_order') || 'Wrong order: the reflexive pronoun (me/te/se) comes BEFORE the verb. Negation goes around the whole [pronoun + verb] unit: ne + [me/te/se] + verb + pas.';
            } else if (isNeg && !c.startsWith('ne')) {
              why = t('exp_pron2_ne') || "In the negative, 'ne' must come first: ne + [reflexive pronoun] + verb + pas. The reflexive pronoun can never leave the verb cluster.";
            } else if (isPC && c.includes("m'ai") || c.includes("t'ai")) {
              why = t('exp_pron2_etre') || "All pronominal/reflexive verbs use être (not avoir) in the passé composé: je me suis levé (NOT j'me suis levé).";
            } else {
              why = `<strong>${c}</strong> ${t('exp_pron2_wrong') || 'is the wrong conjugation for'} <strong>${d.subj}</strong> ${t('exp_pron2_in') || 'in'} ${d.tense}.`;
            }
            return { why, rule: t('exp_pron2_rule') || "Pattern: [subject] + [ne] + [me/te/se/nous/vous] + [verb] + [pas] · All reflexive verbs use être in passé composé" };
          },
        });
        window['w-pron2_reset'] = () => window['pron2_reset']();
      }

      // ── NEW TENSE BUILDERS ─────────────────────────
      if (sid === 'futur_proche') {
        window['w-fp_reset'] = () => { const i = document.getElementById('ve-fp-input'); if (i) { i.value = 'parler'; veUpdateTense('fp'); } };
        const inp = document.getElementById('ve-fp-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('fp'); }
      }
      if (sid === 'futur_simple') {
        window['w-fs_reset'] = () => { const i = document.getElementById('ve-fs-input'); if (i) { i.value = 'parler'; veUpdateTense('fs'); } };
        const inp = document.getElementById('ve-fs-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('fs'); }
      }
      if (sid === 'imparfait') {
        window['w-impf_reset'] = () => { const i = document.getElementById('ve-impf-input'); if (i) { i.value = 'parler'; veUpdateTense('impf'); } };
        const inp = document.getElementById('ve-impf-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('impf'); }
      }
      if (sid === 'conditionnel') {
        window['w-cond_reset'] = () => { const i = document.getElementById('ve-cond-input'); if (i) { i.value = 'parler'; veUpdateTense('cond'); } };
        const inp = document.getElementById('ve-cond-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('cond'); }
      }
      if (sid === 'passe_recent') {
        window['w-pr_reset'] = () => { const i = document.getElementById('ve-pr-input'); if (i) { i.value = 'parler'; veUpdateTense('pr'); } };
        const inp = document.getElementById('ve-pr-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('pr'); }
      }
      if (sid === 'gerondif') {
        window['w-ger_reset'] = () => { const i = document.getElementById('ve-ger-input'); if (i) { i.value = 'parler'; veUpdateTense('ger'); } };
        const inp = document.getElementById('ve-ger-input');
        if (inp) { inp.value = 'parler'; veUpdateTense('ger'); }
      }
      if (sid === 'pronom_y') {
        window['w-y_reset'] = () => { const i = document.getElementById('ve-y-input'); if (i) { i.value = 'à Paris'; veUpdateTense('y'); } };
        const inp = document.getElementById('ve-y-input');
        if (inp) { inp.value = 'à Paris'; veUpdateTense('y'); }
      }

    }

    /* ============================================================
       SIDEBAR DATA & RENDERING
    ============================================================ */

    const sidebarData = {
      articles: {
        left: {
          title: "📌 Article Cheat Sheet",
          cards: [
            { heading: "Definite — THE", items: [["le", "masc. sg."], ["la", "fem. sg."], ["l'", "before vowel/h"], ["les", "plural"]] },
            { heading: "Indefinite — A / SOME", items: [["un", "masc. sg."], ["une", "fem. sg."], ["des", "plural"]] },
            { heading: "Partitive — SOME (uncountable)", items: [["du", "masc."], ["de la", "fem."], ["de l'", "before vowel"], ["des", "plural"]] },
            { heading: "❌ After negation → de", pills: ["ne…pas de", "ne…pas d'"], note: "(except after être + definite)" },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'le dépanneur' = corner store" },
            { label: "🍁 QC", text: "'Je veux du poutine' — partitive" },
            { label: "💡", text: "Neg: 'Je n'ai pas de voiture'" },
            { label: "💡", text: "Definite article stays after aimer: 'Je n'aime pas le café'" },
          ]
        }
      },
      nouns: {
        left: {
          title: "🔤 Gender Tips",
          cards: [
            { heading: "Usually Masculine", pills: ["-eau", "-isme", "-ment", "-age", "-eur"] },
            { heading: "Usually Feminine", pills: ["-tion", "-sion", "-ée", "-ure", "-ance", "-ence"] },
            { heading: "Plural Rules", items: [["+ s", "most nouns"], ["x → x", "already ends in x"], ["al → aux", "journal → journaux"], ["ail → aux", "travail → travaux"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'les enfants' — big in Quebec culture" },
            { label: "💡", text: "Learn gender with each word: 'un livre'" },
            { label: "💡", text: "Most -e endings are feminine" },
          ]
        }
      },
      pronouns: {
        left: {
          title: "👤 Subject Pronouns",
          cards: [
            { heading: "Full Set", items: [["je / j'", "I"], ["tu", "you (informal)"], ["il / elle", "he / she"], ["on", "we (QC spoken)"], ["nous", "we (formal)"], ["vous", "you (pl./formal)"], ["ils / elles", "they"]] },
            { heading: "🍁 Quebec Rule", pills: ["on = nous"], note: "'On va au cinéma' not 'Nous allons'" },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "Always 'tu' with friends — 'vous' is very formal for one person" },
            { label: "🍁 QC", text: "'T'es où?' = 'tu es' contracted" },
            { label: "💡", text: "Mixed group → always 'ils'" },
          ]
        }
      },
      verbs: {
        left: {
          title: "⚡ Verb Endings",
          cards: [
            { heading: "-ER (parler)", items: [["je -e", "je parle"], ["tu -es", "tu parles"], ["il -e", "il parle"], ["nous -ons", "nous parlons"], ["vous -ez", "vous parlez"], ["ils -ent", "ils parlent"]] },
            { heading: "-IR (finir)", items: [["je -is", "je finis"], ["il -it", "il finit"], ["nous -issons", "nous finissons"]] },
            { heading: "-RE (attendre)", items: [["je -s", "j'attends"], ["il —", "il attend"], ["nous -ons", "nous attendons"]] },
            { heading: "❌ Negative", pills: ["ne + verb + pas"], note: "QC spoken: drop 'ne'" },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'-ent' is always silent: 'ils parlent' = 'il parle' sound" },
            { label: "🍁 QC", text: "'T'es où?' — 'tu es' becomes 't'es'" },
            { label: "💡", text: "Elision: je → j' before vowel" },
          ]
        }
      },
      sentences: {
        left: {
          title: "🏗️ Sentence Patterns",
          cards: [
            { heading: "Affirmative", pills: ["Subject", "+ Verb", "+ Object"] },
            { heading: "Negative", pills: ["ne", "+ Verb", "+ pas"] },
            { heading: "Question Methods", items: [["↑ intonation", "casual (QC)"], ["Est-ce que…", "neutral"], ["Inversion", "formal"]] },
            { heading: "❌ Negative Q", items: [["T'aimes pas ça?", "QC casual"], ["N'est-ce pas?", "tag question"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'ne' almost always dropped: 'Je parle pas'" },
            { label: "🍁 QC", text: "Rising intonation = most natural question" },
            { label: "💡", text: "BAGS adjectives go BEFORE the noun" },
          ]
        }
      },
      adjectives: {
        left: {
          title: "🎨 Agreement Table",
          cards: [
            { heading: "Endings", items: [["masc. sg.", "base form"], ["fem. sg.", "+e (usually)"], ["masc. pl.", "+s"], ["fem. pl.", "+es"]] },
            { heading: "Irregular", items: [["beau → belle", "f. sg."], ["nouveau → nouvelle", "f. sg."], ["bon → bonne", "f. sg."], ["vieux → vieille", "f. sg."]] },
            { heading: "BAGS — go BEFORE", pills: ["Beauty", "Age", "Good/Bad", "Size"] },
            { heading: "❌ Neg: de + adj + noun", pills: ["de belle voiture", "d'autre chose"] },
          ]
        },
        right: {
          tips: [
            { label: "💡", text: "Extra letters are usually silent" },
            { label: "💡", text: "Predicate adj (after être) agrees too" },
            { label: "🍁 QC", text: "'un bel appartement au Plateau'" },
          ]
        }
      },
      prepositions: {
        left: {
          title: "📍 Key Contractions",
          cards: [
            { heading: "MUST contract", items: [["à + le → au", "au marché"], ["à + les → aux", "aux amis"], ["de + le → du", "du bureau"], ["de + les → des", "des élèves"]] },
            { heading: "No change", items: [["à + la → à la", "à la banque"], ["à + l' → à l'", "à l'école"], ["de + la → de la", "de la ville"], ["de + l' → de l'", "de l'eau"]] },
            { heading: "Cities & Countries", items: [["à", "city"], ["en", "fem. country"], ["au", "masc. country"], ["aux", "plural country"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'C'est proche du métro?' — daily phrase" },
            { label: "🍁 QC", text: "'Je vis au Canada, en province de Québec, à Montréal'" },
            { label: "💡", text: "à la / à l' never contract" },
          ]
        }
      },
      possessives: {
        left: {
          title: "🏷️ Possessive Table",
          cards: [
            { heading: "Agrees with NOUN not owner", items: [["mon/ma/mes", "my"], ["ton/ta/tes", "your (inf.)"], ["son/sa/ses", "his/her/its"], ["notre/nos", "our"], ["votre/vos", "your"], ["leur/leurs", "their"]] },
            { heading: "Before vowel/h", pills: ["mon amie", "ton adresse", "son histoire"] },
            { heading: "❌ Neg: possessive stays", items: [["pas ma voiture", "(my car, elsewhere)"], ["pas de voiture", "(no car at all)"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'mon char' = my car (Quebec word)" },
            { label: "💡", text: "son/sa = his OR her — determined by noun gender, not owner" },
            { label: "💡", text: "'mon amie' (f.) — vowel forces mon" },
          ]
        }
      },
      numbers: {
        left: {
          title: "🔢 Key Numbers",
          cards: [
            { heading: "Tricky ones", items: [["70", "soixante-dix"], ["71", "soixante et onze"], ["80", "quatre-vingts"], ["81", "quatre-vingt-un"], ["90", "quatre-vingt-dix"], ["91", "quatre-vingt-onze"], ["100", "cent"], ["1000", "mille"]] },
            { heading: "Time formulas", items: [["h:00", "Il est X heure(s)."], ["h:15", "et quart"], ["h:30", "et demie"], ["h:45", "X+1h moins le quart"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "STM uses 24h: '15h30' on schedule" },
            { label: "🍁 QC", text: "Date: 'le 24 juin' — fête nationale" },
            { label: "💡", text: "Days & months NOT capitalised in French" },
          ]
        }
      },
      passe_compose: {
        left: {
          title: "⏮️ Passé Composé",
          cards: [
            { heading: "Formula", pills: ["avoir/être", "+ participe passé"] },
            { heading: "PP formation", items: [["-ER → -é", "parlé"], ["-IR → -i", "fini"], ["-RE → -u", "attendu"]] },
            { heading: "être verbs (DR MRS VANDERTRAMP)", pills: ["aller", "venir", "partir", "arriver", "naître", "mourir", "rester", "tomber", "entrer", "sortir"] },
            { heading: "❌ Negative", pills: ["ne + aux + pas + pp"], note: "'Je n'ai pas mangé'" },
          ]
        },
        right: {
          tips: [
            { label: "💡", text: "être verbs: pp agrees with subject gender/number" },
            { label: "🍁 QC", text: "'T'as-tu mangé?' — QC question form" },
            { label: "🍁 QC", text: "'J'ai pas vu ça.' — ne dropped" },
          ]
        }
      },
      object_pronouns: {
        left: {
          title: "🎯 Pronoun Order",
          cards: [
            { heading: "COD (direct)", items: [["me/m'", "me"], ["te/t'", "you"], ["le/la/l'", "him/her/it"], ["nous", "us"], ["vous", "you"], ["les", "them"]] },
            { heading: "COI (indirect)", items: [["me/m'", "to me"], ["te/t'", "to you"], ["lui", "to him/her"], ["nous", "to us"], ["vous", "to you"], ["leur", "to them"]] },
            { heading: "Position", pills: ["ne", "+ pron", "+ verb", "+ pas"] },
            { heading: "Stress (after prep)", items: [["moi", "me"], ["toi", "you"], ["lui/elle", "him/her"], ["eux/elles", "them"]] },
          ]
        },
        right: {
          tips: [
            { label: "💡", text: "Pronoun goes BEFORE the verb, always" },
            { label: "🍁 QC", text: "'Je le vois pas' — ne drops, pronoun stays" },
            { label: "💡", text: "Passé composé: before auxiliary" },
          ]
        }
      },
      imperatives: {
        left: {
          title: "📢 Command Forms",
          cards: [
            { heading: "-ER (parler)", items: [["tu", "Parle! (no -s)"], ["nous", "Parlons!"], ["vous", "Parlez!"]] },
            { heading: "-IR (finir)", items: [["tu", "Finis!"], ["nous", "Finissons!"], ["vous", "Finissez!"]] },
            { heading: "Irregular", items: [["être", "Sois / Soyons / Soyez"], ["avoir", "Aie / Ayons / Ayez"], ["savoir", "Sache / Sachons / Sachez"]] },
            { heading: "Modals", items: [["pouvoir", "peux/peut/pouvons"], ["vouloir", "veux/veut/voulons"], ["devoir", "dois/doit/devons"]] },
            { heading: "❌ Neg command", pills: ["ne", "+ verb", "+ pas"] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'Je peux pas venir' — most common refusal" },
            { label: "💡", text: "'Savoir' = learned skill vs 'pouvoir' = ability" },
            { label: "🍁 QC", text: "'Je pourrais avoir…?' — polite conditional" },
          ]
        }
      },
      useful_structures: {
        left: {
          title: "🚀 Key Structures",
          cards: [
            { heading: "Near Future", items: [["je vais", "+ inf."], ["tu vas", "+ inf."], ["il va", "+ inf."], ["nous allons", "+ inf."], ["vous allez", "+ inf."], ["ils vont", "+ inf."]] },
            { heading: "C'est / Il y a", items: [["C'est + adj", "Ce n'est pas…"], ["Il y a + n.", "Il n'y a pas de…"], ["Il y a + time", "= ago"]] },
            { heading: "Avoir expressions", items: [["avoir faim", "hungry"], ["avoir soif", "thirsty"], ["avoir froid", "cold"], ["avoir chaud", "hot"], ["avoir peur", "afraid"], ["avoir X ans", "X years old"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'C'est beau!' = Sounds good! / Great!" },
            { label: "🍁 QC", text: "'J'ai frette!' — very cold (Quebec: frette)" },
            { label: "💡", text: "'Il y a deux ans' = two years ago" },
          ]
        }
      },
      quebec_vocab: {
        left: {
          title: "🍁 Quebec vs France",
          cards: [
            { heading: "Words", items: [["char", "voiture (car)"], ["dépanneur", "épicerie (store)"], ["cell", "portable (phone)"], ["courriel", "email"], ["magasiner", "faire du shopping"], ["blonde", "petite amie"], ["chum", "petit ami"], ["fin de semaine", "week-end"]] },
            { heading: "⚠️ Meals REVERSED!", items: [["déjeuner", "breakfast (QC)"], ["dîner", "lunch (QC)"], ["souper", "dinner (QC)"]] },
          ]
        },
        right: {
          tips: [
            { label: "🍁", text: "'Bienvenue!' = You're welcome (NOT in France)" },
            { label: "🍁", text: "'Bonjour-Hi' — the Montreal bilingual greeting" },
            { label: "🍁", text: "'Ch'sais pas' = Je ne sais pas" },
            { label: "🍁", text: "'C'est le boutte!' = That's awesome!" },
          ]
        }
      },
      cod_coi: {
        left: {
          title: "🔗 COD vs COI",
          cards: [
            { heading: "COD — answers 'What/Who?'", items: [["le", "masc. sg."], ["la", "fem. sg."], ["les", "plural"], ["me/te/nous/vous", "all persons"]] },
            { heading: "COI — answers 'To whom?'", items: [["lui", "3rd sg."], ["leur", "3rd pl."], ["me/te/nous/vous", "same as COD"]] },
            { heading: "Double order", pills: ["me/te/nous/vous", "→ le/la/les", "→ lui/leur", "→ y", "→ en"] },
            { heading: "❌ Negative", pills: ["ne", "+ pron", "+ verb", "+ pas"] },
          ]
        },
        right: {
          tips: [
            { label: "💡", text: "COD: no preposition after verb" },
            { label: "💡", text: "COI: verb takes 'à' (parler à, téléphoner à)" },
            { label: "🍁 QC", text: "'Je le vois pas' — pronoun never moves" },
          ]
        }
      },
      verb_endings: {
        left: {
          title: "🔡 Ending Summary",
          cards: [
            { heading: "-ER endings", items: [["je / j'", "-e (silent)"], ["tu", "-es (silent)"], ["il/elle", "-e (silent)"], ["nous", "-ons"], ["vous", "-ez"], ["ils/elles", "-ent (SILENT)"]] },
            { heading: "-IR endings", items: [["je", "-is"], ["tu", "-is"], ["il/elle", "-it (t silent)"], ["nous", "-issons"], ["vous", "-issez"], ["ils/elles", "-issent (ent silent)"]] },
            { heading: "-RE endings", items: [["je", "-s (silent)"], ["tu", "-s (silent)"], ["il/elle", "∅ NOTHING"], ["nous", "-ons"], ["vous", "-ez"], ["ils/elles", "-ent (SILENT)"]] },
          ]
        },
        right: {
          tips: [
            { label: "💡", text: "-ER: je/tu/il/ils all sound the SAME" },
            { label: "💡", text: "-IR: -iss- infix in nous/vous/ils" },
            { label: "💡", text: "-RE: il gets NO ending at all" },
            { label: "🍁 QC", text: "'ils parlent' = 'il parle' in sound" },
          ]
        }
      },
      pronominal: {
        left: {
          title: "🪞 Pronominal Pattern",
          cards: [
            { heading: "Present", items: [["je me", "nous nous"], ["tu te", "vous vous"], ["il se", "ils se"]] },
            { heading: "Passé Composé (être)", items: [["je me suis", "+ pp"], ["tu t'es", "+ pp"], ["il s'est", "+ pp"], ["nous nous sommes", "+ pp"]] },
            { heading: "❌ Negative", pills: ["ne", "+ refl.", "+ verb", "+ pas"], note: "je ne me lève pas" },
            { heading: "PP agreement with subject", pills: ["elle s'est levée", "ils se sont levés"] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'Je me lève pas à 6h' — ne dropped" },
            { label: "💡", text: "Reflexive pronoun NEVER separates from verb" },
            { label: "💡", text: "All reflexive verbs use être in PC" },
          ]
        }
      },
      passe_recent: {
        left: {
          title: "⏱️ Passé Récent",
          cards: [
            { heading: "venir + de + infinitif", items: [["je viens", "+ de + inf."], ["tu viens", "+ de + inf."], ["il/elle vient", "+ d' + inf."], ["nous venons", "+ de + inf."], ["vous venez", "+ de + inf."], ["ils/elles viennent", "+ de + inf."]] },
            { heading: "Time Markers", pills: ["à l'instant", "tout juste", "il y a", "en ce moment", "bientôt"] },
            { heading: "❌ Negative", pills: ["ne + venir + pas + de + inf."] },
          ]
        },
        right: {
          tips: [
            { label: "🍁 QC", text: "'Je viens de finir' — used constantly in daily talk" },
            { label: "💡", text: "Means 'just happened' — seconds/minutes ago, not distant past" },
            { label: "🍁 QC", text: "'Je viens pas de manger' — ne dropped, venir still wrapped" },
          ]
        }
      },
    };

    function buildSidebars(sid, color) {
      const data = sidebarData[sid];
      const leftEl = document.getElementById('sidebar-left');
      const rightEl = document.getElementById('sidebar-right');
      if (!leftEl || !rightEl) return;

      // ── LEFT: cheat sheet ──
      if (data && data.left) {
        const d = data.left;
        let html = `<div class="sidebar-card" style="border-color:${color}30">
          <div class="sidebar-card-title" style="color:${color}">◈ ${d.title}</div>`;
        d.cards.forEach(card => {
          html += `<div style="margin-bottom:10px">
            <div style="font-size:0.65rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">${card.heading}</div>`;
          if (card.items) {
            card.items.forEach(([fr, en]) => {
              html += `<div class="sidebar-rule"><span class="sidebar-fr">${fr}</span><span class="sidebar-en">${en}</span></div>`;
            });
          }
          if (card.pills) {
            card.pills.forEach(p => { html += `<span class="sidebar-pill">${p}</span>`; });
          }
          if (card.note) {
            html += `<div style="font-size:0.68rem;color:var(--text-secondary);margin-top:4px;font-style:italic">${card.note}</div>`;
          }
          html += `</div>`;
        });
        html += `</div>`;
        leftEl.innerHTML = html;
      } else {
        leftEl.innerHTML = '';
      }

      // ── RIGHT: section list + tips ──
      let rhtml = '';

      // Progress card
      const total = sections.length;
      const pct = Math.round((current + 1) / total * 100);
      rhtml += `<div class="sidebar-card">
        <div class="sidebar-card-title">◈ ${t('progress')}</div>
        <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px">${current + 1} ${t('of')} ${total} ${t('sections')}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${color}"></div></div>
      </div>`;

      // Section navigator
      rhtml += `<div class="sidebar-card">
        <div class="sidebar-card-title">◈ ${t('allSections')}</div>
        <ul class="section-list">`;
      sections.forEach((s, i) => {
        rhtml += `<li class="${i === current ? 'active' : ''}" onclick="go(${i})" style="${i === current ? `color:${color};background:${color}18` : ''}">
          ${s.icon ? '<span class="ms ms-sm s-emoji" style="color:' + (i === current ? color : '') + '">' + s.icon + '</span>' : '<span class="s-emoji">' + s.emoji + '</span>'}${s.title}
        </li>`;
      });
      rhtml += `</ul></div>`;

      // Tips card
      if (data && data.right && data.right.tips.length) {
        rhtml += `<div class="sidebar-card" style="border-color:${color}30">
          <div class="sidebar-card-title" style="color:${color}">◈ ${t('quickTips')}</div>`;
        data.right.tips.forEach(t => {
          const cls = t.label.includes('🍁') ? 'qc' : t.label.includes('❌') ? 'neg' : 'green';
          rhtml += `<div style="margin-bottom:8px;font-size:0.75rem;line-height:1.4;display:flex;gap:6px;align-items:flex-start">
            <span class="sidebar-pill ${cls}" style="flex-shrink:0;margin-top:1px">${t.label}</span>
            <span style="color:var(--text-secondary)">${t.text}</span>
          </div>`;
        });
        rhtml += `</div>`;
      }

      rightEl.innerHTML = rhtml;
    }

    // Safari rAF polyfill (belt-and-suspenders)
    window.requestAnimationFrame = window.requestAnimationFrame
      || window.webkitRequestAnimationFrame
      || function (cb) { return setTimeout(cb, 16); };

    let _rendering = false;

    function render() {
      if (_rendering) return;
      try {
        if (!sections || !sections.length) return;
        const s = sections[current];
        document.documentElement.style.setProperty('--section-color', s.color);

        // Update nav, dots, sidebars immediately — they don't cause layout jank
        buildNav();
        buildDots();
        buildSidebars(s.id, s.color);
        setTimeout(centerNavTab, 50);

        // Update prev/next buttons
        const prev = document.getElementById('btn-prev');
        const next = document.getElementById('btn-next');
        if (prev) { prev.disabled = current === 0; prev.textContent = t('prev'); }
        if (next) {
          next.disabled = current === sections.length - 1;
          next.textContent = t('next');
          if (!next.disabled) {
            if (_currentStyle === 'default') {
              next.style.background = s.color;
              next.style.color = '#121212';
              next.style.boxShadow = `0 4px 12px ${s.color}40`;
            } else {
              next.style.background = '';
              next.style.color = '';
              next.style.boxShadow = '';
            }
          } else {
            next.style.background = '';
            next.style.color = '';
            next.style.boxShadow = 'none';
          }
        }

        const area = document.getElementById('content-area');
        const header = document.getElementById('section-header');
        if (!area) return;

        _rendering = true;

        // ── Phase 1: fade out current content (22ms) ──
        area.classList.add('is-leaving');
        if (header) header.classList.add('is-leaving');

        setTimeout(() => {
          // ── Phase 2: swap content while invisible ──
          area.innerHTML = s.content.map((b, i) => renderBlock(b, i)).join('');
          initWidgets(s.id);

          // Update header text & styles
          const emojiEl = document.getElementById('sec-emoji');
          const titleEl = document.getElementById('sec-title');
          const subtitleEl = document.getElementById('sec-subtitle');
          if (emojiEl) {
            if (s.icon) {
              emojiEl.innerHTML = '<span class="ms" style="color:' + s.color + '">' + s.icon + '</span>';
            } else {
              emojiEl.textContent = s.emoji;
            }
          }
          if (titleEl) {
            titleEl.textContent = (typeof tSectionTitle === 'function' && tSectionTitle(s.id)) || s.title;
            titleEl.style.color = s.color;
          }
          if (subtitleEl) subtitleEl.textContent = tSectionSubtitle(s.id) || s.subtitle;
          if (header) {
            header.style.borderColor = '';
            header.style.boxShadow = '';
          }

          // Scroll instantly (no smooth — content just swapped, smooth would be jarring)
          window.scrollTo(0, 0);  // instant — Safari compatible

          // ── Phase 3: prepare entering state, then fade in ──
          area.classList.remove('is-leaving');
          area.classList.add('is-entering');
          if (header) header.classList.remove('is-leaving');

          // Force reflow so the browser registers the entering class before removing it
          area.offsetHeight; // eslint-disable-line no-unused-expressions

          requestAnimationFrame(() => {
            area.classList.remove('is-entering');
            _rendering = false;
          });
        }, 220); // matches CSS transition duration
      } catch (err) {
        console.error('render error:', err);
        // Fallback: show raw content without animation
        const s2 = sections[current];
        const area = document.getElementById('content-area');
        if (area && s2) {
          area.style.opacity = '1';
          area.style.transform = 'none';
          area.innerHTML = s2.content.map((b, i) => renderBlock(b, i)).join('');
          initWidgets(s2.id);
        }
      }
    }

    function toggleTip(tipId, btn) {
      const trEl = document.getElementById(tipId + '-tr');
      if (!trEl) return;
      const shown = trEl.style.display !== 'none';
      trEl.style.display = shown ? 'none' : 'block';
      btn.classList.toggle('active', !shown);
    }

    function go(idx) {
      if (window._nounTimer) { clearTimeout(window._nounTimer); window._nounTimer = null; }
      current = idx; render();
    }
    function navigate(dir) {
      const n = current + dir;
      if (n >= 0 && n < sections.length) go(n);
    }

    function updateScrollProgress() {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      document.documentElement.style.setProperty('--scroll-progress', pct.toFixed(2) + '%');
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    function updateHeaderHeight() {
      const header = document.querySelector('header');
      if (!header) return;
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-h', h + 'px');
    }
    function init() {
      applyFontSize();
      applyThemeIcon();
      applyStyleThemeUI();
      updatePhoneticToggleUI();
      updateHeaderHeight();
      window.addEventListener('resize', updateHeaderHeight);
      buildFontControls();
      buildLangSwitcher();
      updateAppSubtitle();
      render();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init(); // Already ready (script runs after body in most cases)
    }

    window.runVerbBuilder = function() {
    const rawVerb = (document.getElementById('vb-input').value || '').toLowerCase().trim();
    const out = document.getElementById('vb-output');
    if (!rawVerb) { if (out) out.innerHTML = ''; return; }

    let engInput = document.getElementById('vb-eng-input');
    let eng = '';
    if (engInput && engInput.value.trim()) {
        eng = engInput.value.toLowerCase().trim();
    } else {
        eng = (typeof engBaseDict !== 'undefined' && engBaseDict[rawVerb]) || '[verb]';
    }

    if (engInput && !engInput.value.trim() && typeof engBaseDict !== 'undefined' && engBaseDict[rawVerb]) {
        engInput.value = eng;
    }

    const conj = typeof FrenchConjugator !== 'undefined' ? FrenchConjugator.conjugate(rawVerb) : null;
    if (!conj) {
        if (out) out.innerHTML = "<p style='color:var(--tertiary); font-weight: bold;'>Sorry, conjugation could not be generated for this input.</p>";
        return;
    }

    const pronouns = ["je", "tu", "il / elle", "nous", "vous", "ils / elles"];
    const engPronouns = ["I", "you", "he / she", "we", "you", "they"];

    const isVowel = (s) => /^[aeiouhàéèêîôûëïü]/i.test(s);
    const elideJe = (v) => isVowel(v) ? "j'" + v : "je " + v;

    let engS = eng;
    if (!eng.endsWith('s') && !eng.endsWith('sh') && !eng.endsWith('ch') && !eng.endsWith('x') && !eng.endsWith('z') && !eng.endsWith('o')) {
        engS = eng + "s";
    } else {
        engS = eng + "es";
    }
    if (eng === 'have') engS = 'has';
    if (eng === 'be') engS = 'is';
    if (eng === 'do') engS = 'does';
    if (eng === 'go') engS = 'goes';
    if (eng.endsWith('y') && !/[aeiou]y$/.test(eng)) engS = eng.slice(0, -1) + 'ies';

    let engPast = eng + "ed";
    if (eng.endsWith('e')) engPast = eng + "d";
    if (eng.endsWith('y') && !/[aeiou]y$/.test(eng)) engPast = eng.slice(0, -1) + 'ied';
    const pasts = { speak: 'spoke', eat: 'ate', go: 'went', see: 'saw', have: 'had', do: 'did', take: 'took', make: 'made', know: 'knew', think: 'thought', come: 'came', give: 'gave', find: 'found', tell: 'told', become: 'became', show: 'showed', leave: 'left', feel: 'felt', put: 'put', bring: 'brought', begin: 'began', keep: 'kept', hold: 'held', write: 'wrote', stand: 'stood', hear: 'heard', let: 'let', mean: 'meant', set: 'set', meet: 'met', run: 'ran', pay: 'paid', sit: 'sat', lie: 'lay', lead: 'led', read: 'read', grow: 'grew', lose: 'lost', fall: 'fell', send: 'sent', build: 'built', understand: 'understood', draw: 'drew', break: 'broke', spend: 'spent', cut: 'cut', rise: 'rose', drive: 'drove', buy: 'bought', wear: 'wore', choose: 'chose', wake: 'woke', sleep: 'slept', drink: 'drank', sing: 'sang', swim: 'swam' };
    if (pasts[eng]) engPast = pasts[eng];

    let engPresPart = eng + "ing";
    if (eng.endsWith('e') && eng !== 'be' && eng !== 'see') engPresPart = eng.slice(0, -1) + "ing";
    if (['run', 'sit', 'get', 'swim', 'put', 'let', 'set', 'cut', 'win', 'stop'].includes(eng)) engPresPart = eng + eng.slice(-1) + "ing";

    let html = '<div class="tbl-wrap" style="overflow-x: auto;"><table style="width:100%; border-collapse: collapse; font-size: 0.85rem;"><thead><tr>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Pronoun</th>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Présent<br><span style="font-size:0.7rem; color:var(--text-secondary); text-transform:none; font-weight:normal;">(I ' + eng + ')</span></th>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Passé Composé<br><span style="font-size:0.7rem; color:var(--text-secondary); text-transform:none; font-weight:normal;">(I ' + engPast + ')</span></th>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Imparfait<br><span style="font-size:0.7rem; color:var(--text-secondary); text-transform:none; font-weight:normal;">(I was ' + engPresPart + ')</span></th>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Futur Simple<br><span style="font-size:0.7rem; color:var(--text-secondary); text-transform:none; font-weight:normal;">(I will ' + eng + ')</span></th>' +
        '<th style="background:var(--surface-2); padding:8px; border-bottom:1px solid var(--border-subtle); text-align: left;">Futur Proche<br><span style="font-size:0.7rem; color:var(--text-secondary); text-transform:none; font-weight:normal;">(I am going to ' + eng + ')</span></th>' +
        '</tr></thead><tbody>';

    const engBe = ["am", "are", "is", "are", "are", "are"];

    for (let i = 0; i < 6; i++) {
        let pron = pronouns[i];
        let fr_pres = conj.pres[i];
        let fr_pc = conj.pc[i];
        let fr_imp = conj.imp[i];
        let fr_fut = conj.fut[i];
        let fr_fp = conj.fp[i];

        let pres_display = (i === 0 && !conj.isReflexive) ? elideJe(fr_pres) : pron + " " + fr_pres;
        let pc_display = (i === 0 && !conj.isReflexive && !fr_pc.startsWith('m') && !fr_pc.startsWith('s')) ? elideJe(fr_pc) : pron + " " + fr_pc;
        let imp_display = (i === 0 && !conj.isReflexive) ? elideJe(fr_imp) : pron + " " + fr_imp;
        let fut_display = (i === 0 && !conj.isReflexive) ? elideJe(fr_fut) : pron + " " + fr_fut;
        let fp_display = (i === 0 && !conj.isReflexive) ? elideJe(fr_fp) : pron + " " + fr_fp;

        let e_pres = engPronouns[i] + " " + (i === 2 ? engS : eng);
        let e_pc = engPronouns[i] + " " + engPast;
        let e_imp = engPronouns[i] + " " + (i === 0 || i === 2 ? "was" : "were") + " " + engPresPart;
        let e_fut = engPronouns[i] + " will " + eng;
        let e_fp = engPronouns[i] + " " + engBe[i] + " going to " + eng;

        if (eng === 'be') {
            e_pres = engPronouns[i] + " " + engBe[i];
            e_pc = engPronouns[i] + " " + (i === 0 || i === 2 ? "was" : "were");
            e_imp = engPronouns[i] + " used to be";
        }

        let spk_pres = makeSpeakerHtml(pres_display, 'tbl-speak-btn');
        let spk_pc = makeSpeakerHtml(pc_display, 'tbl-speak-btn');
        let spk_imp = makeSpeakerHtml(imp_display, 'tbl-speak-btn');
        let spk_fut = makeSpeakerHtml(fut_display, 'tbl-speak-btn');
        let spk_fp = makeSpeakerHtml(fp_display, 'tbl-speak-btn');

        html += '<tr style="border-bottom:1px solid var(--border-subtle);">' +
            '<td style="padding:8px; font-weight: bold; color: var(--text-secondary);">' + pron + '</td>' +
            '<td style="padding:8px;"><div class="tbl-cell-inner">' + spk_pres + '<span>' + pres_display + '</span></div><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">' + e_pres + '</span></td>' +
            '<td style="padding:8px;"><div class="tbl-cell-inner">' + spk_pc + '<span>' + pc_display + '</span></div><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">' + e_pc + '</span></td>' +
            '<td style="padding:8px;"><div class="tbl-cell-inner">' + spk_imp + '<span>' + imp_display + '</span></div><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">' + e_imp + '</span></td>' +
            '<td style="padding:8px;"><div class="tbl-cell-inner">' + spk_fut + '<span>' + fut_display + '</span></div><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">' + e_fut + '</span></td>' +
            '<td style="padding:8px;"><div class="tbl-cell-inner">' + spk_fp + '<span>' + fp_display + '</span></div><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">' + e_fp + '</span></td>' +
            '</tr>';
    }

    html += '</tbody></table></div>';
    html += '<div style="margin-top:10px; display:flex; justify-content:flex-end;">' +
      `<button class="vmodal-chip" style="background:var(--surface-3); font-size:0.8rem; padding:4px 12px;" onclick="openVerbModal('${rawVerb}')" title="Explore Subjunctive, Imperative, Conditionnel, Passé Récent & Passé Simple for ${rawVerb}"><span class="ms ms-sm" style="color:var(--yellow);margin-right:4px;">auto_stories</span>Open in Master Conjugator (All Moods & Tenses) →</button>` +
      '</div>';
    if (out) out.innerHTML = html;
};

// ═════════════════════════════════════════════════════════════════════
// UNIVERSAL VERB CONJUGATOR MODAL & INTER-PAGE INTEGRATION
// Connects to window.__FRENCH_VERBS_DB__ (7,800+ verbs) via FrenchConjugator
// ═════════════════════════════════════════════════════════════════════

let _vmodalCurrentVerb = '';

function openVerbModal(defaultVerb = '') {
  const backdrop = document.getElementById('vmodal-backdrop');
  const input = document.getElementById('vmodal-input');
  if (!backdrop) return;
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (defaultVerb) {
    if (input) input.value = defaultVerb;
    doModalConjugate(defaultVerb);
  } else if (input) {
    input.focus();
  }
}
window.openVerbModal = openVerbModal;

function closeVerbModal(e) {
  if (e && e.target && e.target.id !== 'vmodal-backdrop' && !e.target.closest('.vmodal-close-btn')) {
    return;
  }
  const backdrop = document.getElementById('vmodal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeVerbModal = closeVerbModal;

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const backdrop = document.getElementById('vmodal-backdrop');
    if (backdrop && backdrop.classList.contains('open')) {
      closeVerbModal();
    }
  }
});

function clearModalInput() {
  const input = document.getElementById('vmodal-input');
  const clearBtn = document.getElementById('vmodal-clear-btn');
  const sugBox = document.getElementById('vmodal-suggestions');
  if (input) { input.value = ''; input.focus(); }
  if (clearBtn) clearBtn.style.display = 'none';
  if (sugBox) sugBox.style.display = 'none';
}
window.clearModalInput = clearModalInput;

function handleModalSearchInput(val) {
  const clearBtn = document.getElementById('vmodal-clear-btn');
  const sugBox = document.getElementById('vmodal-suggestions');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  if (!val || val.length < 2) {
    if (sugBox) sugBox.style.display = 'none';
    return;
  }

  const query = val.toLowerCase().trim().replace(/^(se |s')/, '');
  const db = window.__FRENCH_VERBS_DB__;
  if (!db || !sugBox) return;

  const matches = [];
  for (const v in db) {
    if (v.startsWith(query)) {
      matches.push(v);
      if (matches.length >= 12) break;
    }
  }

  if (matches.length > 0) {
    sugBox.style.display = 'flex';
    sugBox.innerHTML = matches.map(m => `<span class="vmodal-sug-item" onclick="quickConjugate('${m}')">${m}</span>`).join('');
  } else {
    sugBox.style.display = 'none';
  }
}
window.handleModalSearchInput = handleModalSearchInput;

function quickConjugate(verb) {
  const input = document.getElementById('vmodal-input');
  const sugBox = document.getElementById('vmodal-suggestions');
  if (input) input.value = verb;
  if (sugBox) sugBox.style.display = 'none';
  doModalConjugate(verb);
}
window.quickConjugate = quickConjugate;

function doModalConjugate(optVerb) {
  const input = document.getElementById('vmodal-input');
  const content = document.getElementById('vmodal-content');
  const sugBox = document.getElementById('vmodal-suggestions');
  if (sugBox) sugBox.style.display = 'none';

  const raw = (optVerb || (input ? input.value : '')).trim().toLowerCase();
  if (!raw || !content) return;

  _vmodalCurrentVerb = raw;
  const conj = typeof FrenchConjugator !== 'undefined' ? FrenchConjugator.conjugate(raw) : null;
  if (!conj) {
    content.innerHTML = `<div class="vmodal-empty-state"><p style="color:var(--tertiary);font-weight:600;">Could not conjugate '${raw}'. Please check spelling (e.g. 'manger', 'prendre', 'partir').</p></div>`;
    return;
  }

  const pronouns = ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'];
  const subjPronouns = ["que je", "que tu", "qu'il / elle", "que nous", "que vous", "qu'ils / elles"];
  const isVowel = typeof FrenchConjugator.isVowel === 'function' ? FrenchConjugator.isVowel : (s) => /^[aeiouhàéèêîôûëïü]/i.test(s);
  const elideJe = (v) => isVowel(v) ? "j'" + v : "je " + v;

  // Build overview info
  const groupLabel = conj.baseVerb.endsWith('er') ? '1st Group (-er)' : (conj.baseVerb.endsWith('ir') ? '2nd Group (-ir)' : '3rd Group (-re / irregular)');
  const spkInfinitive = makeSpeakerHtml(conj.infinitive, 'tbl-speak-btn');
  const spkPP = conj.pastParticiple ? makeSpeakerHtml(conj.pastParticiple, 'tbl-speak-btn') : '';
  const spkGer = conj.gerund ? makeSpeakerHtml(conj.gerund, 'tbl-speak-btn') : '';

  let html = `
    <div class="vmodal-overview">
      <div>
        <div class="vmodal-verb-hero">
          <span class="vmodal-verb-name">${conj.infinitive}</span>
          ${spkInfinitive}
        </div>
        <div class="vmodal-verb-meta" style="margin-top:6px">
          <span class="vmodal-badge group">${groupLabel}</span>
          <span class="vmodal-badge aux">Auxiliary: ${conj.auxiliary}</span>
          ${conj.isReflexive ? '<span class="vmodal-badge reflex">Reflexive (pronominal)</span>' : ''}
        </div>
      </div>
      <div style="display:flex;gap:1.5rem;font-size:0.82rem;">
        <div>
          <div style="color:var(--text-muted);font-size:0.72rem;text-transform:uppercase;font-weight:600;">Participe Passé</div>
          <div style="display:flex;align-items:center;gap:4px;font-weight:600;color:var(--text-primary);margin-top:2px;">
            ${spkPP}<span>${conj.pastParticiple || '—'}</span>
          </div>
        </div>
        <div>
          <div style="color:var(--text-muted);font-size:0.72rem;text-transform:uppercase;font-weight:600;">Gérondif</div>
          <div style="display:flex;align-items:center;gap:4px;font-weight:600;color:var(--text-primary);margin-top:2px;">
            ${spkGer}<span>${conj.gerund || '—'}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Grid of cards
  html += `<div class="vmodal-tenses-grid">`;

  function buildTenseCard(title, mood, forms, customProns) {
    if (!forms || !forms.length) return '';
    let rowsHtml = '';
    for (let i = 0; i < 6; i++) {
      const p = customProns ? customProns[i] : pronouns[i];
      const f = forms[i] || '';
      if (!f) continue;
      let display = f;
      if (!customProns) {
        display = (i === 0 && !conj.isReflexive && !f.startsWith("m'") && !f.startsWith("me ")) ? elideJe(f) : `${p} ${f}`;
      } else {
        display = `${p} ${f}`;
      }
      const spk = makeSpeakerHtml(display, 'tbl-speak-btn');
      rowsHtml += `
        <div class="vmodal-row">
          <span class="vmodal-row-pron">${p}</span>
          <span class="vmodal-row-verb">${formatFrenchDisplay(f)} ${spk}</span>
        </div>
      `;
    }
    return `
      <div class="vmodal-card">
        <div class="vmodal-card-header">
          <span class="vmodal-tense-title"><span class="ms ms-sm" style="color:var(--blue)">schedule</span>${title}</span>
          <span class="vmodal-tense-mood">${mood}</span>
        </div>
        <div class="vmodal-card-body">${rowsHtml}</div>
      </div>
    `;
  }

  // 1. Présent
  html += buildTenseCard('Présent', 'Indicatif', conj.pres);

  // 2. Passé Composé
  html += buildTenseCard('Passé Composé', 'Indicatif', conj.pc);

  // 3. Imparfait
  html += buildTenseCard('Imparfait', 'Indicatif', conj.imp);

  // 4. Futur Simple
  html += buildTenseCard('Futur Simple', 'Indicatif', conj.fut);

  // 5. Futur Proche
  html += buildTenseCard('Futur Proche', 'Indicatif', conj.fp);

  // 6. Passé Récent
  html += buildTenseCard('Passé Récent', 'Indicatif', conj.pr);

  // 7. Conditionnel Présent
  html += buildTenseCard('Conditionnel', 'Présent', conj.cond);

  // 8. Subjonctif Présent
  if (conj.subj && conj.subj.length === 6) {
    html += buildTenseCard('Subjonctif', 'Présent', conj.subj, subjPronouns);
  }

  // 9. Impératif Présent (tu, nous, vous)
  if (conj.impv && conj.impv.length === 3) {
    const impvProns = ['(tu)', '(nous)', '(vous)'];
    let impvRows = '';
    for (let j = 0; j < 3; j++) {
      const vf = conj.impv[j];
      const spk = makeSpeakerHtml(vf, 'tbl-speak-btn');
      impvRows += `
        <div class="vmodal-row">
          <span class="vmodal-row-pron">${impvProns[j]}</span>
          <span class="vmodal-row-verb">${formatFrenchDisplay(vf)} ${spk}</span>
        </div>
      `;
    }
    html += `
      <div class="vmodal-card">
        <div class="vmodal-card-header">
          <span class="vmodal-tense-title"><span class="ms ms-sm" style="color:var(--yellow)">campaign</span>Impératif</span>
          <span class="vmodal-tense-mood">Présent</span>
        </div>
        <div class="vmodal-card-body">${impvRows}</div>
      </div>
    `;
  }

  // 10. Passé Simple (if in db)
  if (conj.ps && conj.ps.length === 6) {
    html += buildTenseCard('Passé Simple', 'Littéraire', conj.ps);
  }

  html += `</div>`; // end grid
  content.innerHTML = html;
}
window.doModalConjugate = doModalConjugate;

// ═══════════════════════════════════════════════════════════════
//  🚀 NEXT-LEVEL ANIMATION SYSTEM — Premium Upgrade
//  Scroll-reveal blocks, confetti, ripple clicks, animated scores,
//  streak tracker, sound-wave TTS, directional page transitions,
//  and enhanced quiz feedback.
// ═══════════════════════════════════════════════════════════════

// ── 1. Block Scroll-Reveal (IntersectionObserver) ────────────────
(function initBlockReveal() {
  if (typeof IntersectionObserver === 'undefined') {
    // Fallback: make all blocks visible immediately
    document.querySelectorAll('.block').forEach(b => b.classList.add('block-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--block-delay', delay + 'ms');
        entry.target.classList.add('block-visible');
        io.unobserve(entry.target);
        delay += 55; // Stagger cascade
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  function observeBlocks() {
    document.querySelectorAll('.block:not(.block-visible)').forEach(b => io.observe(b));
  }

  // Observe after each render (content-area mutation)
  const renderObs = new MutationObserver(() => {
    setTimeout(observeBlocks, 40);
  });
  const ca = document.getElementById('content-area');
  if (ca) renderObs.observe(ca, { childList: true });

  // Also on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeBlocks);
  } else {
    setTimeout(observeBlocks, 80);
  }
})();

// ── 2. Ripple Effect on Quiz Pill Buttons ────────────────────────
document.addEventListener('click', function(e) {
  const pill = e.target.closest('.w-pill');
  if (!pill) return;

  // Inject ripple element
  const rect = pill.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: ${Math.max(rect.width, rect.height) * 2}px;
    height: ${Math.max(rect.width, rect.height) * 2}px;
    margin-left: -${Math.max(rect.width, rect.height)}px;
    margin-top: -${Math.max(rect.width, rect.height)}px;
  `;
  pill.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}, { passive: true });

// ── 3. Confetti Burst on Correct Answer ──────────────────────────
const CONFETTI_COLORS = [
  '#4F7EF8', '#3ECF8E', '#F5A623', '#E05252',
  '#a78bfa', '#38BDF8', '#FF6584', '#FFE600'
];

function burstConfetti(x, y) {
  const container = document.createElement('div');
  container.className = 'confetti-burst';
  document.body.appendChild(container);

  const count = 10;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    const angle = (i / count) * 360;
    const dist = 50 + Math.random() * 60;
    const tx = Math.cos(angle * Math.PI / 180) * dist;
    const ty = Math.sin(angle * Math.PI / 180) * dist - 30;
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    p.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      background: ${color};
      --tx: ${tx}px;
      --ty: ${ty}px;
      animation-delay: ${Math.random() * 0.08}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(p);
  }

  setTimeout(() => container.remove(), 900);
}
window.burstConfetti = burstConfetti;

// ── 4. Sound Wave Rings on TTS Speaking ──────────────────────────
function addSoundWaves(btn) {
  // Remove existing
  btn.querySelectorAll('.sound-wave-ring').forEach(r => r.remove());
  // Add 3 rings
  for (let i = 0; i < 3; i++) {
    const ring = document.createElement('div');
    ring.className = 'sound-wave-ring';
    btn.appendChild(ring);
  }
}
function removeSoundWaves(btn) {
  btn.querySelectorAll('.sound-wave-ring').forEach(r => r.remove());
}

// Patch speakFrench to add/remove sound waves
const _origSpeakFrench = window.speakFrench;
window.speakFrench = function(text, btnElement) {
  if (btnElement) addSoundWaves(btnElement);
  _origSpeakFrench(text, btnElement);
  // Also remove waves when done (onend is set inside speakFrench so we hook into class removal)
  if (btnElement) {
    const observer = new MutationObserver((muts) => {
      muts.forEach(m => {
        if (!btnElement.classList.contains('is-speaking')) {
          removeSoundWaves(btnElement);
          observer.disconnect();
        }
      });
    });
    observer.observe(btnElement, { attributes: true, attributeFilter: ['class'] });
    // Safety cleanup after 15s
    setTimeout(() => { removeSoundWaves(btnElement); observer.disconnect(); }, 15000);
  }
};

// ── 5. Animated Number Counter ───────────────────────────────────
function animateNumber(el, fromVal, toVal, duration) {
  if (!el) return;
  duration = duration || 400;
  const start = performance.now();
  function step(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const current = Math.round(fromVal + (toVal - fromVal) * eased);
    el.textContent = current;
    el.classList.add('quiz-score-animated');
    el.addEventListener('animationend', () => el.classList.remove('quiz-score-animated'), { once: true });
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
window.animateNumber = animateNumber;

// ── 6. Quiz Streak Tracker ───────────────────────────────────────
const _quizStreaks = {};

function updateStreak(quizId, isCorrect) {
  if (!_quizStreaks[quizId]) _quizStreaks[quizId] = 0;
  if (isCorrect) {
    _quizStreaks[quizId]++;
  } else {
    _quizStreaks[quizId] = 0;
  }
  return _quizStreaks[quizId];
}

function renderStreakBadge(container, streak) {
  let badge = container.querySelector('.streak-indicator');
  if (streak < 2) {
    if (badge) badge.remove();
    return;
  }
  if (!badge) {
    badge = document.createElement('span');
    badge.className = 'streak-indicator';
    container.appendChild(badge);
  }
  badge.classList.remove('streak-burst');
  void badge.offsetWidth; // Reflow to restart animation
  badge.classList.add('streak-burst');
  badge.innerHTML = `<span class="streak-flame">🔥</span>${streak} streak`;
}
window.updateStreak = updateStreak;
window.renderStreakBadge = renderStreakBadge;

// ── 7. Directional Page Transitions ──────────────────────────────
let _lastSection = 0;
const _origNavigate = window.navigate || function() {};

// Hook into navigation to determine direction
function hookDirectionalTransition() {
  const area = document.getElementById('content-area');
  if (!area) return;

  // Watch for section changes via current variable (set in go())
  const origGo = window.go;
  window.go = function(idx) {
    const dir = idx > _lastSection ? 'right' : 'left';
    _lastSection = idx;

    // Apply directional class after content swaps
    const obs = new MutationObserver(() => {
      obs.disconnect();
      area.classList.remove('page-enter-right', 'page-enter-left');
      void area.offsetWidth;
      area.classList.add(dir === 'right' ? 'page-enter-right' : 'page-enter-left');
      area.addEventListener('animationend', () => {
        area.classList.remove('page-enter-right', 'page-enter-left');
      }, { once: true });
    });
    obs.observe(area, { childList: true });

    if (origGo) origGo(idx);
  };
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hookDirectionalTransition);
} else {
  setTimeout(hookDirectionalTransition, 200);
}

// ── 8. Confetti Hook for Correct Quiz Answers ────────────────────
// Listen for when a .w-pill gets the 'correct' class added and burst confetti
document.addEventListener('click', function(e) {
  // We hook after the fact using a brief delay (let quiz logic run first)
  const pill = e.target.closest('.w-pill');
  if (!pill) return;

  setTimeout(() => {
    if (pill.classList.contains('correct')) {
      const rect = pill.getBoundingClientRect();
      burstConfetti(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );
    }
  }, 80);
}, { passive: true });

// ── 9. Keyboard Navigation (Arrow keys) ──────────────────────────
document.addEventListener('keydown', function(e) {
  // Ignore if typing in an input/textarea
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
  if (e.key === 'ArrowRight' && !e.altKey && !e.ctrlKey && !e.metaKey) {
    const btn = document.getElementById('btn-next');
    if (btn && !btn.disabled) btn.click();
  } else if (e.key === 'ArrowLeft' && !e.altKey && !e.ctrlKey && !e.metaKey) {
    const btn = document.getElementById('btn-prev');
    if (btn && !btn.disabled) btn.click();
  }
});

// ── 10. Hover Glow on Section Header (section color reactive) ────
function applyHeaderGlow() {
  const header = document.getElementById('section-header');
  if (!header) return;
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--section-color').trim() || '#4F7EF8';
  header.style.boxShadow = `0 0 32px 0 ${color}22, 0 2px 1rem rgba(0,0,0,0.12)`;
  header.style.borderColor = `${color}45`;
}

// Re-apply after each render by watching body class changes via MutationObserver on content-area
(function() {
  const ca = document.getElementById('content-area');
  if (!ca) { setTimeout(applyHeaderGlow, 500); return; }
  const obs = new MutationObserver(() => setTimeout(applyHeaderGlow, 60));
  obs.observe(ca, { childList: true });
  setTimeout(applyHeaderGlow, 200);
})();

