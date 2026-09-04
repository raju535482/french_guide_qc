window.demTranslations = {
  en: {
    here: "Here (-ci)",
    there: "There (-là)",
    sentence: "I'm taking {pronoun}.",
    close: { ms: "this one (m)", fs: "this one (f)", mp: "these ones (m)", fp: "these ones (f)" },
    far: { ms: "that one (m)", fs: "that one (f)", mp: "those ones (m)", fp: "those ones (f)" }
  },
  gu: {
    here: "અહીં (-ci)",
    there: "ત્યાં (-là)",
    sentence: "હું {pronoun} લઈ રહ્યો છું.",
    close: { ms: "આ (પુ)", fs: "આ (સ્ત્રી)", mp: "આ બધા (પુ)", fp: "આ બધા (સ્ત્રી)" },
    far: { ms: "તે (પુ)", fs: "તે (સ્ત્રી)", mp: "તે બધા (પુ)", fp: "તે બધા (સ્ત્રી)" }
  },
  hi: {
    here: "यहाँ (-ci)",
    there: "वहाँ (-là)",
    sentence: "मैं {pronoun} ले रहा हूँ।",
    close: { ms: "यह वाला (पु)", fs: "यह वाली (स्त्री)", mp: "ये वाले (पु)", fp: "ये वाली (स्त्री)" },
    far: { ms: "वह वाला (पु)", fs: "वह वाली (स्त्री)", mp: "वे वाले (पु)", fp: "वे वाली (स्त्री)" }
  },
  ta: {
    here: "இங்கே (-ci)",
    there: "அங்கே (-là)",
    sentence: "நான் {pronoun} எடுக்கிறேன்.",
    close: { ms: "இதை (ஆண்)", fs: "இதை (பெண்)", mp: "இவற்றை (ஆண்)", fp: "இவற்றை (பெண்)" },
    far: { ms: "அதை (ஆண்)", fs: "அதை (பெண்)", mp: "அவற்றை (ஆண்)", fp: "அவற்றை (பெண்)" }
  },
  ko: {
    here: "여기 (-ci)",
    there: "저기 (-là)",
    sentence: "나는 {pronoun} 가져갈게.",
    close: { ms: "이것 (남)", fs: "이것 (여)", mp: "이것들 (남)", fp: "이것들 (여)" },
    far: { ms: "저것 (남)", fs: "저것 (여)", mp: "저것들 (남)", fp: "저것들 (여)" }
  },
  zh: {
    here: "这里 (-ci)",
    there: "那里 (-là)",
    sentence: "我要拿{pronoun}。",
    close: { ms: "这个 (阳)", fs: "这个 (阴)", mp: "这些 (阳)", fp: "这些 (阴)" },
    far: { ms: "那个 (阳)", fs: "那个 (阴)", mp: "那些 (阳)", fp: "那些 (阴)" }
  }
};

// --- Interactive Timeline Logic ---
window.tlTranslations = {
  en: {
    past: "Past", present: "Present", future: "Future",
    trickyLabel: "Tricky Rule",
    depuisLbl: "Action continues to present",
    depuisDesc: "<b>depuis</b> (since/for) describes an action that started in the past and is STILL continuing in the present.",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(I have been working here since 2020.)</i>",
    depuisTricky: "Do not use past tense! In French, if it is still happening, use the <b>present tense</b>. <br>❌ <i>J\'ai travaillé ici depuis un an.</i><br>✅ <i>Je travaille ici depuis un an.</i>",
    ilyaLbl: "Point in time past",
    ilyaDesc: "<b>il y a</b> (ago) points to a specific completed moment in the past.",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(The train left 10 minutes ago.)</i>",
    ilyaTricky: "Always use it with a past tense (like Passé Composé). It translates literally to 'there is', but means 'ago'.",
    dansLbl: "Countdown to future",
    dansDesc: "<b>dans</b> (in) gives a countdown to when a future action will happen.",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(The class starts in 5 minutes.)</i>",
    dansTricky: "Use <b>dans</b> for 'in [time from now]' (countdown). Use <b>en</b> for 'takes [time duration] to complete'.<br>✅ <i>Il part dans 1h (countdown).</i><br>✅ <i>Il a fait ses devoirs en 1h (duration).</i>",
    pendantLbl: "Closed block of time",
    pendantDesc: "<b>pendant</b> (for/during) describes a completed or defined duration with a clear start and end.",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(I slept for 9 hours.)</i>",
    pendantTricky: "If the action is over, use <b>pendant</b>. If it is still happening, use <b>depuis</b>."
  },
  gu: {
    past: "ભૂતકાળ", present: "વર્તમાન", future: "ભવિષ્ય", trickyLabel: "મુશ્કેલ નિયમ",
    depuisLbl: "ક્રિયા વર્તમાન સુધી ચાલુ રહે છે",
    depuisDesc: "<b>depuis</b> (ત્યારથી/માટે) ભૂતકાળમાં શરૂ થયેલી અને વર્તમાનમાં હજી ચાલુ ક્રિયાનું વર્ણન કરે છે.",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(હું 2020 થી અહીં કામ કરું છું.)</i>",
    depuisTricky: "ભૂતકાળનો ઉપયોગ કરશો નહીં! જો તે હજી ચાલુ હોય, તો <b>વર્તમાન કાળ</b> નો ઉપયોગ કરો.",
    ilyaLbl: "ભૂતકાળનો ચોક્કસ સમય",
    ilyaDesc: "<b>il y a</b> (પહેલાં) ભૂતકાળની પૂર્ણ થયેલી ચોક્કસ ક્ષણ દર્શાવે છે.",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(ટ્રેન 10 મિનિટ પહેલાં નીકળી હતી.)</i>",
    ilyaTricky: "હંમેશા તેનો ઉપયોગ ભૂતકાળ સાથે કરો.",
    dansLbl: "ભવિષ્ય માટે કાઉન્ટડાઉન",
    dansDesc: "<b>dans</b> (માં) ભવિષ્યની ક્રિયા ક્યારે થશે તેનું કાઉન્ટડાઉન આપે છે.",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(વર્ગ 5 મિનિટમાં શરૂ થશે.)</i>",
    dansTricky: "<b>dans</b> નો ઉપયોગ 'હવે પછીના સમયમાં' માટે કરો. <b>en</b> નો ઉપયોગ 'પૂર્ણ થવામાં લાગતો સમય' માટે કરો.",
    pendantLbl: "નિશ્ચિત સમયગાળો",
    pendantDesc: "<b>pendant</b> (દરમિયાન/માટે) સ્પષ્ટ શરૂઆત અને અંત સાથે પૂર્ણ થયેલ અથવા વ્યાખ્યાયિત સમયગાળાનું વર્ણન કરે છે.",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(હું 9 કલાક ઊંઘ્યો.)</i>",
    pendantTricky: "જો ક્રિયા પૂર્ણ થઈ ગઈ હોય, તો <b>pendant</b> વાપરો. જો હજી ચાલુ હોય, તો <b>depuis</b> વાપરો."
  },
  hi: {
    past: "अतीत", present: "वर्तमान", future: "भविष्य", trickyLabel: "कठिन नियम",
    depuisLbl: "कार्रवाई वर्तमान में जारी है",
    depuisDesc: "<b>depuis</b> (से/के लिए) उस कार्रवाई का वर्णन करता है जो अतीत में शुरू हुई थी और वर्तमान में अभी भी जारी है।",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(मैं 2020 से यहां काम कर रहा हूं।)</i>",
    depuisTricky: "भूतकाल का प्रयोग न करें! यदि यह अभी भी हो रहा है, तो <b>वर्तमान काल</b> का प्रयोग करें।",
    ilyaLbl: "अतीत का एक बिंदु",
    ilyaDesc: "<b>il y a</b> (पहले) अतीत में एक विशिष्ट पूर्ण क्षण को इंगित करता है।",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(ट्रेन 10 मिनट पहले निकल गई।)</i>",
    ilyaTricky: "इसे हमेशा भूतकाल के साथ प्रयोग करें।",
    dansLbl: "भविष्य के लिए उलटी गिनती",
    dansDesc: "<b>dans</b> (में) एक उलटी गिनती देता है कि भविष्य की कार्रवाई कब होगी।",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(कक्षा 5 मिनट में शुरू होती है।)</i>",
    dansTricky: "<b>dans</b> का प्रयोग 'अब से [समय] में' के लिए करें।",
    pendantLbl: "समय का एक निश्चित खंड",
    pendantDesc: "<b>pendant</b> (के दौरान/के लिए) स्पष्ट शुरुआत और अंत के साथ एक पूर्ण या परिभाषित अवधि का वर्णन करता है।",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(मैं 9 घंटे सोया।)</i>",
    pendantTricky: "यदि कार्रवाई समाप्त हो गई है, तो <b>pendant</b> का उपयोग करें।"
  },
  ta: {
    past: "கடந்தகாலம்", present: "நிகழ்காலம்", future: "எதிர்காலம்", trickyLabel: "கடினமான விதி",
    depuisLbl: "செயல் நிகழ்காலத்தில் தொடர்கிறது",
    depuisDesc: "<b>depuis</b> (இருந்து/க்காக) கடந்த காலத்தில் தொடங்கி தற்போது வரை தொடரும் ஒரு செயலை விவரிக்கிறது.",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(நான் 2020 முதல் இங்கு வேலை செய்கிறேன்.)</i>",
    depuisTricky: "கடந்த காலத்தை பயன்படுத்த வேண்டாம்! <b>நிகழ்காலத்தை</b> பயன்படுத்தவும்.",
    ilyaLbl: "கடந்தகாலத்தில் ஒரு புள்ளி",
    ilyaDesc: "<b>il y a</b> (முன்பு) கடந்தகாலத்தில் முடிந்த ஒரு குறிப்பிட்ட நேரத்தை குறிக்கிறது.",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(ரயில் 10 நிமிடங்களுக்கு முன்பு சென்றது.)</i>",
    ilyaTricky: "எப்போதும் அதை இறந்த காலத்துடன் பயன்படுத்தவும்.",
    dansLbl: "எதிர்காலத்திற்கான கவுண்டவுன்",
    dansDesc: "<b>dans</b> (இல்) எதிர்கால செயல் எப்போது நடக்கும் என்பதற்கான கவுண்டவுனை வழங்குகிறது.",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(வகுப்பு 5 நிமிடங்களில் தொடங்குகிறது.)</i>",
    dansTricky: "<b>dans</b> ஐ 'இனிமேல்' என்பதற்கும் பயன்படுத்தவும்.",
    pendantLbl: "நேரத்தின் வரையறுக்கப்பட்ட தொகுதி",
    pendantDesc: "<b>pendant</b> (வின் போது/க்காக) தெளிவான தொடக்கம் மற்றும் முடிவுடன் முடிந்த ஒரு காலத்தை விவரிக்கிறது.",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(நான் 9 மணி நேரம் தூங்கினேன்.)</i>",
    pendantTricky: "செயல் முடிந்துவிட்டால், <b>pendant</b> ஐப் பயன்படுத்தவும்."
  },
  ko: {
    past: "과거", present: "현재", future: "미래", trickyLabel: "까다로운 규칙",
    depuisLbl: "현재까지 계속되는 동작",
    depuisDesc: "<b>depuis</b> (~부터/~동안)는 과거에 시작되어 현재에도 계속 진행 중인 동작을 설명합니다.",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(저는 2020년부터 여기서 일하고 있습니다.)</i>",
    depuisTricky: "과거 시제를 사용하지 마세요! <b>현재 시제</b>를 사용해야 합니다.",
    ilyaLbl: "과거의 시점",
    ilyaDesc: "<b>il y a</b> (~전에)는 과거의 완료된 특정 순간을 가리킵니다.",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(기차는 10분 전에 떠났습니다.)</i>",
    ilyaTricky: "항상 과거 시제와 함께 사용하세요.",
    dansLbl: "미래를 향한 카운트다운",
    dansDesc: "<b>dans</b> (~후에)는 미래 동작이 언제 발생할지에 대한 카운트다운을 제공합니다.",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(수업은 5분 후에 시작됩니다.)</i>",
    dansTricky: "<b>dans</b>는 '지금부터 ~후에'에 사용합니다.",
    pendantLbl: "한정된 시간 단위",
    pendantDesc: "<b>pendant</b> (~동안)는 시작과 끝이 명확히 완료되거나 정의된 지속 기간을 설명합니다.",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(저는 9시간 동안 잤습니다.)</i>",
    pendantTricky: "동작이 끝났다면 <b>pendant</b>을 사용하세요."
  },
  zh: {
    past: "过去", present: "现在", future: "将来", trickyLabel: "棘手规则",
    depuisLbl: "动作持续到现在",
    depuisDesc: "<b>depuis</b> (自从/持续) 描述一个过去开始且现在仍在继续的动作。",
    depuisEx: "Je travaille ici <b>depuis</b> 2020. <br><i>(我从2020年开始在这里工作。)</i>",
    depuisTricky: "不要使用过去时！如果它仍在发生，请使用<b>现在时</b>。",
    ilyaLbl: "过去的时间点",
    ilyaDesc: "<b>il y a</b> (以前) 指向过去一个特定已完成的时刻。",
    ilyaEx: "Le train est parti <b>il y a</b> dix minutes. <br><i>(火车10分钟前离开了。)</i>",
    ilyaTricky: "总是和过去时一起使用。",
    dansLbl: "倒计时到将来",
    dansDesc: "<b>dans</b> (在...之后) 给出将来动作发生时间的倒计时。",
    dansEx: "Le cours commence <b>dans</b> cinq minutes. <br><i>(课程在5分钟后开始。)</i>",
    dansTricky: "用<b>dans</b>表示'从现在起(倒计时)'。",
    pendantLbl: "封闭的时间段",
    pendantDesc: "<b>pendant</b> (在...期间/持续) 描述一个已完成或有明确起止的持续时间。",
    pendantEx: "J\'ai dormi <b>pendant</b> neuf heures. <br><i>(我睡了9个小时。)</i>",
    pendantTricky: "如果动作结束了，用<b>pendant</b>。"
  }
};

window.tlDataConfig = {
  depuis: { left: '15%', width: '35%', color: '#3b82f6' },
  ilya:   { left: '25%', width: '12px', color: '#ef4444' },
  dans:   { left: '55%', width: '25%', color: '#10b981' },
  pendant:{ left: '15%', width: '20%', color: '#8b5cf6' }
};

window.currentTlPrep = 'depuis';

function updateTlLang() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const t = window.tlTranslations[lang] || window.tlTranslations.en;
  
  const pEl = document.querySelector('[data-i18n-tl="past"]');
  const prEl = document.querySelector('[data-i18n-tl="present"]');
  const fEl = document.querySelector('[data-i18n-tl="future"]');
  
  if (pEl) pEl.textContent = t.past;
  if (prEl) prEl.textContent = t.present;
  if (fEl) fEl.textContent = t.future;
  
  showTimeline(window.currentTlPrep); // refresh text
}

function showTimeline(prep) {
  window.currentTlPrep = prep;
  document.querySelectorAll('.tl-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + prep);
  if(btn) btn.classList.add('active');
  
  const dCfg = window.tlDataConfig[prep];
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const t = window.tlTranslations[lang] || window.tlTranslations.en;
  
  const ov = document.getElementById('tl-overlay');
  if(!ov) return;
  ov.style.left = dCfg.left;
  ov.style.width = dCfg.width;
  ov.style.backgroundColor = dCfg.color;
  ov.style.opacity = '0.7';
  
  if (prep === 'ilya' || prep === 'dans') {
    ov.style.borderRadius = '6px';
  } else {
    ov.style.borderRadius = '4px';
  }

  const lbl = document.getElementById('tl-label');
  lbl.textContent = t[prep + 'Lbl'];
  lbl.style.color = dCfg.color;
  lbl.style.opacity = '1';
  
  if (prep === 'depuis') lbl.style.left = '30%';
  if (prep === 'ilya') lbl.style.left = '25%';
  if (prep === 'dans') lbl.style.left = '68%';
  if (prep === 'pendant') lbl.style.left = '22%';
  
  const info = document.getElementById('tl-info');
  info.style.borderLeftColor = dCfg.color;
  info.innerHTML = `
    <div class="tl-desc">${t[prep + 'Desc']}</div>
    <div class="tl-ex" style="background: color-mix(in srgb, ${dCfg.color} 12%, transparent); border: 1px solid color-mix(in srgb, ${dCfg.color} 22%, transparent);">${t[prep + 'Ex']}</div>
    <div class="tl-tricky">
      <div class="tl-tricky-title"><span class="ms ms-sm">warning</span> ${t.trickyLabel}</div>
      ${t[prep + 'Tricky']}
    </div>
  `;
}

// Since render() is called to switch tabs, we can override or just observe.
document.addEventListener('click', (e) => {
  // If user clicks a tab button or lang switcher, we wait a tick and init the timeline if it's there
  if (e.target.closest('.nav-btn') || e.target.closest('.lang-select') || e.target.closest('.lang-btn')) {
     setTimeout(() => {
        if(document.getElementById('timeline-visual')) {
            updateTlLang();
            if(!document.querySelector('.tl-btn.active')) {
                showTimeline('depuis');
            }
        }
     }, 100);
  }
});

// Also check periodically just in case (cheap operation)


window.checkQuiz = function(btn, isCorrect) {
  const opts = btn.parentElement.querySelectorAll('.ht-quiz-opt');
  opts.forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
  });
  const feedback = btn.parentElement.nextElementSibling;
  feedback.style.display = 'block';
  if (isCorrect) {
    btn.classList.add('correct');
    feedback.textContent = '✅ Correct!';
    feedback.style.color = '#10b981';
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '❌ Incorrect.';
    feedback.style.color = '#ef4444';
    // highlight correct one
    opts.forEach(b => {
      if(b.getAttribute('onclick').includes('true')) {
        b.style.border = '2px solid #10b981';
      }
    });
  }
}

function updateHistoryTimeline() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const tItems = document.querySelectorAll('.ht-text-trans, .ht-quiz-q-trans');
  tItems.forEach(el => {
    if (lang === 'fr') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
      const text = el.getAttribute('data-' + lang);
      if (text) {
        el.innerHTML = text;
      } else {
        el.innerHTML = el.getAttribute('data-en') || ''; // fallback
      }
    }
  });
}

// Since render() is called to switch tabs, we can override or just observe.
document.addEventListener('click', (e) => {
  // If user clicks a tab button or lang switcher, we wait a tick and init the timeline if it's there
  if (e.target.closest('.nav-btn') || e.target.closest('.lang-select') || e.target.closest('.lang-btn')) {
     setTimeout(() => {
        if(document.getElementById('timeline-visual')) {
            updateTlLang();
            if(!document.querySelector('.tl-btn.active')) {
                showTimeline('depuis');
            }
        }
     }, 100);
  }
});

// Also check periodically just in case (cheap operation)
setInterval(() => {
    const el = document.getElementById('timeline-visual');
    if(el) {
        // init if not initialized
        if(el.dataset.init !== '1') {
            el.dataset.init = '1';
            updateTlLang();
        updateHistoryTimeline();
            showTimeline('depuis');
        }
        
        // Check if lang changed
        const currentL = (typeof currentLang !== 'undefined') ? currentLang : 'en';
        if(el.dataset.lang !== currentL) {
            el.dataset.lang = currentL;
            updateTlLang();
        }
    }
}, 500);