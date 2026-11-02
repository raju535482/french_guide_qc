/**
 * French Past Tense Interactive Story Trainer ("Passé Composé vs. Imparfait vs. Plus-que-parfait")
 * Provides authentic story conversion practice, popover verb conjugation, pedagogical explanations,
 * gamified accuracy scores, study/test modes, and teacher custom exercise builder.
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.PastTenseTrainer = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {

  // Default Story Library
  const DEFAULT_STORIES = [
    {
      id: "weekend_tranquille",
      title: "Un week-end tranquille (L'affaire de la voiture disparue)",
      subtitle: "M. et Mme Blanchard's weekend mystery — 24 target verbs",
      difficulty: "Intermédiaire (A2–B1)",
      text: `### Samedi 16 septembre

10 h du matin : Il {{fait|imparfait|faisait|Description de la météo et de l'ambiance d'arrière-plan (caméra vidéo).}} un soleil radieux sur la ville. M. Blanchard {{charge|imparfait|chargeait|Action continue d'arrière-plan en cours de déroulement quand la journée commence.}} la voiture pendant que sa femme {{prépare|imparfait|préparait|Action simultanée en cours (pendant que) : deux actions continues en arrière-plan.}} les valises dans la maison. Ils {{décident|passe_compose|ont décidé|Action ponctuelle et précise marquant le début de l'aventure : décision arrêtée.}} de partir à la campagne pour passer deux jours au calme.

11 h 30 : Les valises {{sont|imparfait|étaient|Description de l'état des valises à ce moment précis.}} enfin prêtes. Mme Blanchard {{ferme|passe_compose|a fermé|Action ponctuelle, successive et complètement achevée.}} la porte à clé et ils {{montent|passe_compose|sont montés|Verbe de déplacement de la liste DR & MRS VANDERTRAMP avec l'auxiliaire être : accord avec le sujet 'ils' (+s).}} dans la voiture. Mais le moteur ne {{veut|imparfait|voulait|État d'incapacité / refus continu de la machine au moment où ils essaient.}} pas démarrer. M. Blanchard {{essaie|passe_compose|a essayé|Action ponctuelle d'une tentative précise.}} trois fois, sans succès.

12 h 15 : Heureusement, un voisin serviable qui {{passe|imparfait|passait|Action en cours de déroulement dans la rue (il était en train de passer).}} par là leur {{propose|passe_compose|a proposé|Événement soudain qui fait progresser l'histoire (Passé Composé).}} son aide. En dix minutes, le problème {{est|passe_compose|a été|Fait ponctuel et résolu marquant un changement de situation.}} réglé et ils {{prennent|passe_compose|ont pris|Action ponctuelle successive (prendre la route).}} la route vers leur chalet.

16 h 00 : Ils {{arrivent|passe_compose|sont arrivés|Verbe de mouvement avec auxiliaire être (DR & MRS VANDERTRAMP) : accord avec le sujet (+s).}} à destination. L'endroit {{est|imparfait|était|Description du décor, du paysage et du calme ambiant.}} magnifique : les oiseaux {{chantent|imparfait|chantaient|Bruit de fond / ambiance sonore continue (caméra vidéo).}} et un ruisseau {{coule|imparfait|coulait|Description continue du décor naturel.}} près de la terrasse. Ils {{déposent|passe_compose|ont déposé|Action accomplie, ponctuelle et successive.}} leurs bagages dans l'entrée.

### Dimanche 17 septembre : Le mystère

8 h 30 : Le lendemain matin, M. Blanchard {{se réveille|passe_compose|s'est réveillé|Action ponctuelle réflexive avec auxiliaire être au passé composé.}} de bonne heure. Il {{ouvre|passe_compose|a ouvert|Action ponctuelle successive achevée.}} les volets pour admirer le lac. Mais soudain, il {{remarque|passe_compose|a remarqué|Action soudaine de perception (BAM ! coup de projecteur snapshot).}} que l'allée {{est|imparfait|était|État d'arrière-plan constaté lors de la découverte.}} vide : la voiture {{disparaît|plus_que_parfait|avait disparu|Action antérieure au réveil : la voiture s'était volatilisée avant qu'il ne s'en aperçoive (Plus-que-parfait).}} !

Paniqué, il {{appelle|passe_compose|a appelé|Action ponctuelle consécutive à la surprise.}} immédiatement la police. Quand les agents {{arrivent|passe_compose|sont arrivés|Arrivée ponctuelle des policiers (auxiliaire être avec accord +s).}} sur les lieux, ils {{trouvent|passe_compose|ont trouvé|Découverte finale et conclusion de l'enquête : action ponctuelle achevée.}} rapidement la clé de l'énigme : M. Blanchard {{oublie|plus_que_parfait|avait oublié|Action antérieure aux faits : il avait oublié de serrer le frein à main la veille au soir (Plus-que-parfait).}} de serrer le frein à main et la voiture avait simplement roulé doucement dans le ruisseau !`
    },
    {
      id: "panne_autoroute",
      title: "Une mésaventure sur l'autoroute 20",
      subtitle: "A snowy drive between Québec and Montréal — 12 target verbs",
      difficulty: "Débutant-Intermédiaire (A2)",
      text: `Vendredi soir, il {{neige|imparfait|neigeait|Météo d'arrière-plan et conditions continues (caméra vidéo).}} abondamment sur la route. Sophie {{conduit|imparfait|conduisait|Action continue en cours de déroulement.}} prudemment vers Montréal. 

Tout à coup, un pneu {{éclate|passe_compose|a éclaté|Événement soudain et violent qui interrompt l'action continue (Passé Composé).}} avec un grand bruit. Sophie {{garde|passe_compose|a gardé|Action réflexe immédiate et ponctuelle.}} son sang-froid et elle {{arrête|passe_compose|a arrêté|Action successive complétée.}} le véhicule sur l'accotement.

Pendant qu'elle {{cherche|imparfait|cherchait|Action continue d'arrière-plan introduite par 'pendant que'.}} sa lampe de poche dans le coffre à gants, une dépanneuse {{arrive|passe_compose|est arrivée|Interruption ponctuelle avec auxiliaire être (accord féminin singulier : est arrivée).}} derrière elle. Le chauffeur {{est|imparfait|était|Description de la personne (il était sympathique).}} très gentil. En vingt minutes, il {{change|passe_compose|a changé|Action ponctuelle et accomplie dans une durée close.}} la roue et Sophie {{repart|passe_compose|est repartie|Départ ponctuel avec auxiliaire être (accord avec Sophie : repartie).}} soulagée.`
    },
    {
      id: "cafe_rencontre",
      title: "Un café sur la rue Saint-Denis",
      subtitle: "A serendipitous reunion in the Plateau — 10 target verbs",
      difficulty: "Intermédiaire (B1)",
      text: `Hier après-midi, je {{lis|imparfait|lisais|Action d'arrière-plan en cours quand l'événement survient.}} tranquillement un roman à la terrasse d'un café. Le soleil {{brille|imparfait|brillait|Description de l'atmosphère et de la météo.}} et les passants {{marchent|imparfait|marchaient|Scène animée continue dans la rue.}} paisiblement.

Soudain, quelqu'un {{prononce|passe_compose|a prononcé|Événement soudain et sonore qui capte l'attention.}} mon nom. Je {{lève|passe_compose|ai levé|Action ponctuelle et volontaire consécutive au choc.}} les yeux et j'{{aperçois|passe_compose|ai aperçu|Perception ponctuelle immédiate (Passé Composé).}} mon ami d'enfance Lucas. Nous ne nous {{voyons|plus_que_parfait|étions pas vus|Action antérieure négative : nous ne nous étions pas vus depuis 5 ans (Plus-que-parfait réflexive avec être).}} depuis cinq ans ! Nous {{passons|passe_compose|avons passé|Action achevée occupant un bloc de temps délimité (pendant 2 heures).}} deux heures à discuter de nos souvenirs.`
    }
  ];

  // State Management
  let state = {
    stories: [...DEFAULT_STORIES],
    currentStoryId: "weekend_tranquille",
    mode: "study", // "study" | "test"
    answers: {},   // { [tokenKey]: { tense, input, isCorrect, firstTry, attempts, explanation, expectedTense, expectedAnswer } }
    activeToken: null,
    editorOpen: false
  };

  // Helper: Get active story object
  function getActiveStory() {
    return state.stories.find(s => s.id === state.currentStoryId) || state.stories[0];
  }

  // Parse story text tokens: format {{present_verb|expected_tense|expected_answer|explanation}}
  function parseStoryTokens(rawText) {
    const regex = /\{\{([^|]+)\|([^|]+)\|([^|]+)\|([^}]+)\}\}/g;
    const tokens = [];
    let match;
    let idx = 0;
    while ((match = regex.exec(rawText)) !== null) {
      tokens.push({
        id: 'tok_' + idx++,
        present: match[1].trim(),
        tense: match[2].trim().toLowerCase(), // "passe_compose" | "imparfait" | "plus_que_parfait"
        answer: match[3].trim(),
        explanation: match[4].trim(),
        rawMatch: match[0]
      });
    }
    return tokens;
  }

  // Normalize string for clean comparison (ignore accents or subtle casing if needed, but we check accents strictly by default)
  function cleanStr(s) {
    return (s || '').trim().replace(/\s+/g, ' ').toLowerCase();
  }

  // Format tense human label
  function getTenseLabel(tCode) {
    switch (tCode) {
      case 'passe_compose': return 'Passé Composé';
      case 'imparfait': return 'Imparfait';
      case 'plus_que_parfait': return 'Plus-que-parfait';
      default: return tCode;
    }
  }

  // Main UI Renderer
  function renderAppContainer() {
    const story = getActiveStory();
    const tokens = parseStoryTokens(story.text);

    // Calculate progress & accuracy stats
    const totalCount = tokens.length;
    let completedCount = 0;
    let firstTryCorrect = 0;

    tokens.forEach(tok => {
      const ans = state.answers[tok.id];
      if (ans && ans.isCorrect) {
        completedCount++;
        if (ans.firstTry) firstTryCorrect++;
      }
    });

    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const accuracy = completedCount > 0 ? Math.round((firstTryCorrect / completedCount) * 100) : 100;

    // Build rendered text with tokens replaced by interactive spans
    let textHtml = story.text;
    tokens.forEach(tok => {
      const ans = state.answers[tok.id];
      let tokenClass = 'ptt-verb-token';
      let displayText = tok.present;
      let badgeInfo = '';

      if (ans && ans.isCorrect) {
        tokenClass += ' ptt-token-correct';
        displayText = ans.input || tok.answer;
        badgeInfo = `<span class="ptt-token-badge ptt-badge-ok">${getTenseLabel(tok.tense)}</span>`;
      } else if (ans && !ans.isCorrect) {
        tokenClass += ' ptt-token-wrong';
        badgeInfo = `<span class="ptt-token-badge ptt-badge-err">Essayer</span>`;
      } else {
        badgeInfo = `<span class="ptt-token-badge ptt-badge-pending">?</span>`;
      }

      if (state.activeToken === tok.id) {
        tokenClass += ' ptt-token-active';
      }

      const repl = `<button class="${tokenClass}" id="${tok.id}" onclick="PastTenseTrainer.openPopover('${tok.id}', this)" title="Cliquer pour conjuguer : ${tok.present}">
        <span class="ptt-token-text">${displayText}</span>
        ${badgeInfo}
      </button>`;

      textHtml = textHtml.replace(tok.rawMatch, repl);
    });

    // Convert markdown headers and paragraphs
    textHtml = textHtml
      .replace(/^### (.*$)/gim, '<h4 class="ptt-story-h3">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 class="ptt-story-h2">$1</h3>')
      .replace(/\n\n/g, '</p><p class="ptt-story-p">')
      .replace(/\n/g, '<br>');

    textHtml = `<p class="ptt-story-p">${textHtml}</p>`;

    // Helper to get translated UI string
    const tr = (k, def) => (typeof window.t === 'function' ? window.t(k) : def);

    return `
    <div class="ptt-card" id="ptt-main-app">
      <!-- Top Gamification & Controls Header -->
      <div class="ptt-header">
        <div class="ptt-header-left">
          <div class="ptt-title-group">
            <span class="ms ms-fill ptt-app-icon">movie_filter</span>
            <div>
              <h3 class="ptt-title">${tr('ptt_main_title', 'Passé Composé vs. Imparfait • Story Trainer')}</h3>
              <p class="ptt-subtitle">${tr('ptt_main_subtitle', 'Transform present-tense stories into authentic French past narration with pedagogical reasoning')}</p>
            </div>
          </div>
        </div>

        <div class="ptt-header-actions">
          <!-- Story Selector -->
          <div class="ptt-select-wrap">
            <label for="ptt-story-select" class="sr-only">Choose Story</label>
            <span class="ms ms-sm ptt-select-icon">auto_stories</span>
            <select id="ptt-story-select" class="ptt-select" onchange="PastTenseTrainer.switchStory(this.value)">
              ${state.stories.map(s => `<option value="${s.id}" ${s.id === state.currentStoryId ? 'selected' : ''}>${s.title}</option>`).join('')}
            </select>
          </div>

          <!-- Mode Toggle: Study vs Test -->
          <div class="ptt-mode-toggle" title="Mode Étude vs Mode Test">
            <button class="ptt-mode-btn ${state.mode === 'study' ? 'active' : ''}" onclick="PastTenseTrainer.setMode('study')">
              <span class="ms ms-sm">school</span> ${tr('ptt_mode_study', 'Étude')}
            </button>
            <button class="ptt-mode-btn ${state.mode === 'test' ? 'active' : ''}" onclick="PastTenseTrainer.setMode('test')">
              <span class="ms ms-sm">assignment_turned_in</span> ${tr('ptt_mode_test', 'Test')}
            </button>
          </div>

          <!-- Teacher / Custom Editor Button -->
          <button class="ptt-btn-secondary" onclick="PastTenseTrainer.toggleEditor()" title="Create custom story exercise with markup">
            <span class="ms ms-sm">edit_note</span> ${tr('ptt_btn_create', 'Créer')}
          </button>

          <!-- Reset Button -->
          <button class="ptt-btn-secondary" onclick="PastTenseTrainer.resetCurrentStory()" title="Restart this story">
            <span class="ms ms-sm">replay</span>
          </button>
        </div>
      </div>

      <!-- Progress & Accuracy Bar -->
      <div class="ptt-stats-bar">
        <div class="ptt-progress-track">
          <div class="ptt-progress-fill" style="width: ${percent}%"></div>
        </div>
        <div class="ptt-stats-row">
          <span class="ptt-stat-pill">
            <span class="ms ms-sm" style="color:var(--primary)">done_all</span>
            <strong>${completedCount} / ${totalCount}</strong> ${tr('ptt_stat_completed', 'verbes complétés')} (${percent}%)
          </span>
          <span class="ptt-stat-pill">
            <span class="ms ms-sm" style="color:#10b981">verified</span>
            ${tr('ptt_stat_accuracy', 'Précision du 1er essai :')} <strong>${accuracy}%</strong>
          </span>
          <span class="ptt-stat-hint">
            <span class="ms ms-sm">touch_app</span> ${tr('ptt_stat_hint', 'Cliquez sur les verbes surlignés pour choisir le temps et conjuguer')}
          </span>
        </div>
      </div>

      <!-- Story Reader Canvas -->
      <div class="ptt-reader-canvas">
        <div class="ptt-story-meta">
          <span class="ptt-diff-badge">${story.difficulty}</span>
          <h2 class="ptt-story-title">${story.title}</h2>
          <p class="ptt-story-sub">${story.subtitle}</p>
        </div>

        <div class="ptt-story-body" id="ptt-story-body">
          ${textHtml}
        </div>
      </div>

      <!-- Custom Story Editor Drawer (Collapsible) -->
      ${renderEditorMarkup()}

      <!-- Popover Conjugation Modal Interface -->
      <div class="ptt-popover-backdrop" id="ptt-popover-backdrop" onclick="PastTenseTrainer.closePopover(event)">
        <div class="ptt-popover-card" id="ptt-popover-card" onclick="event.stopPropagation()">
          <div id="ptt-popover-inner"></div>
        </div>
      </div>
    </div>`;
  }

  // Render Editor Section
  function renderEditorMarkup() {
    if (!state.editorOpen) return '';
    return `
    <div class="ptt-editor-pane">
      <div class="ptt-editor-head">
        <div class="ptt-editor-title">
          <span class="ms ms-sm" style="color:var(--primary)">code</span>
          <strong>Mode Enseignant / Créateur d'exercice personnalisé</strong>
        </div>
        <button class="ptt-btn-close" onclick="PastTenseTrainer.toggleEditor()"><span class="ms">close</span></button>
      </div>
      <p class="ptt-editor-desc">
        Rédigez ou collez votre propre texte avec la syntaxe de balisage : 
        <code>{{verbe_présent|temps|forme_attendue|règle_pédagogique}}</code><br>
        <em>Temps acceptés : <code>passe_compose</code>, <code>imparfait</code>, <code>plus_que_parfait</code></em>
      </p>
      <div class="ptt-editor-form">
        <input type="text" id="ptt-custom-title" class="ptt-input-title" placeholder="Titre de l'histoire (ex: Mon voyage à Charlevoix)">
        <textarea id="ptt-custom-text" class="ptt-textarea" rows="6" placeholder="Il {{fait|imparfait|faisait|Météo d'arrière-plan}} beau quand je {{part|passe_compose|suis parti|Action ponctuelle}}..."></textarea>
        <div class="ptt-editor-btns">
          <button class="ptt-btn-primary" onclick="PastTenseTrainer.saveCustomStory()">
            <span class="ms ms-sm">check</span> Charger et s'exercer
          </button>
          <button class="ptt-btn-secondary" onclick="PastTenseTrainer.toggleEditor()">Annuler</button>
        </div>
      </div>
    </div>`;
  }

  // Open the inline popover card for a specific token
  function openPopover(tokId, targetEl) {
    state.activeToken = tokId;
    const story = getActiveStory();
    const tokens = parseStoryTokens(story.text);
    const tok = tokens.find(t => t.id === tokId);
    if (!tok) return;

    const currentAns = state.answers[tokId] || {
      tense: 'passe_compose',
      input: '',
      isCorrect: null,
      attempts: 0
    };

    const popoverBackdrop = document.getElementById('ptt-popover-backdrop');
    const popoverCard = document.getElementById('ptt-popover-card');
    const popoverInner = document.getElementById('ptt-popover-inner');
    if (!popoverBackdrop || !popoverInner) return;

    popoverInner.innerHTML = `
      <div class="ptt-pop-header">
        <div class="ptt-pop-title-wrap">
          <span class="ms ms-sm ptt-pop-icon">mode_edit</span>
          <div>
            <h4 class="ptt-pop-title">${tr('ptt_pop_title', 'Conjuguer :')} <strong>${tok.present}</strong></h4>
            <p class="ptt-pop-sub">${tr('ptt_pop_sub', 'Identifiez le temps du récit et accordez le participe')}</p>
          </div>
        </div>
        <button class="ptt-pop-close" onclick="PastTenseTrainer.closePopover()" aria-label="Fermer"><span class="ms">close</span></button>
      </div>

      <!-- Tense Choice Segmented Radio -->
      <div class="ptt-pop-section">
        <span class="ptt-pop-label">${tr('ptt_pop_q1', '1. Quel temps passé utiliser ?')}</span>
        <div class="ptt-tense-segmented">
          <label class="ptt-tense-opt ${currentAns.tense === 'passe_compose' ? 'active' : ''}">
            <input type="radio" name="ptt_tense" value="passe_compose" ${currentAns.tense === 'passe_compose' ? 'checked' : ''} onchange="PastTenseTrainer.onTenseChange(this.value)">
            <span class="ptt-tense-text">Passé Composé</span>
            <span class="ptt-tense-desc">${tr('ptt_pop_pc_desc', 'Action ponctuelle / événement')}</span>
          </label>
          <label class="ptt-tense-opt ${currentAns.tense === 'imparfait' ? 'active' : ''}">
            <input type="radio" name="ptt_tense" value="imparfait" ${currentAns.tense === 'imparfait' ? 'checked' : ''} onchange="PastTenseTrainer.onTenseChange(this.value)">
            <span class="ptt-tense-text">Imparfait</span>
            <span class="ptt-tense-desc">${tr('ptt_pop_imp_desc', 'Décor / habitude / état')}</span>
          </label>
          <label class="ptt-tense-opt ${currentAns.tense === 'plus_que_parfait' ? 'active' : ''}">
            <input type="radio" name="ptt_tense" value="plus_que_parfait" ${currentAns.tense === 'plus_que_parfait' ? 'checked' : ''} onchange="PastTenseTrainer.onTenseChange(this.value)">
            <span class="ptt-tense-text">Plus-que-parfait</span>
            <span class="ptt-tense-desc">${tr('ptt_pop_pqp_desc', 'Action antérieure dans le passé')}</span>
          </label>
        </div>
      </div>

      <!-- Conjugation Input -->
      <div class="ptt-pop-section">
        <span class="ptt-pop-label">${tr('ptt_pop_q2', '2. Écrivez la forme conjuguée exacte :')}</span>
        <div class="ptt-input-wrap">
          <input type="text" id="ptt-verb-input" class="ptt-input" placeholder="ex: a mangé, mangeait..." value="${currentAns.input || ''}" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')PastTenseTrainer.submitAnswer('${tokId}')">
          <button class="ptt-btn-validate" onclick="PastTenseTrainer.submitAnswer('${tokId}')">
            <span class="ms ms-sm">send</span> ${tr('ptt_pop_btn_validate', 'Valider')}
          </button>
        </div>

        <!-- French Accents Quick Palette -->
        <div class="ptt-accent-chips">
          <span class="ptt-accent-lbl">${tr('ptt_pop_accents', 'Accents :')}</span>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('é')">é</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('è')">è</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ê')">ê</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('à')">à</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ç')">ç</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ô')">ô</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('î')">î</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ù')">ù</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('û')">û</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ë')">ë</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent('ï')">ï</button>
          <button class="ptt-achip" onclick="PastTenseTrainer.insertAccent(\"'\")">'</button>
        </div>
      </div>

      <!-- Feedback Area -->
      <div id="ptt-feedback-box">
        ${renderFeedbackHtml(currentAns, tok)}
      </div>
    `;

    popoverBackdrop.classList.add('open');
    document.body.classList.add('modal-open');

    // Focus input field smoothly
    setTimeout(() => {
      const inp = document.getElementById('ptt-verb-input');
      if (inp) {
        inp.focus();
        inp.select();
      }
    }, 100);
  }

  // Render Feedback Box HTML
  function renderFeedbackHtml(ans, tok) {
    if (ans.isCorrect === true) {
      return `
        <div class="ptt-feedback ptt-fb-success animate-in">
          <div class="ptt-fb-head">
            <span class="ms ms-sm" style="color:#10b981">check_circle</span>
            <strong>Excellent ! Bonne réponse</strong>
          </div>
          <div class="ptt-fb-answer">Forme attendue : <strong>${tok.answer}</strong> (${getTenseLabel(tok.tense)})</div>
          <div class="ptt-fb-rule">
            <span class="ms ms-sm" style="color:var(--primary)">lightbulb</span>
            <span>${tok.explanation}</span>
          </div>
        </div>`;
    } else if (ans.isCorrect === false) {
      const tenseMismatch = ans.tense !== tok.tense;
      let tenseMsg = '';
      if (tenseMismatch) {
        tenseMsg = `<div class="ptt-fb-warning"><span class="ms ms-sm">error_outline</span> Le temps choisi (${getTenseLabel(ans.tense)}) n'est pas le bon. On attend le <strong>${getTenseLabel(tok.tense)}</strong>.</div>`;
      }

      return `
        <div class="ptt-feedback ptt-fb-error animate-in">
          <div class="ptt-fb-head">
            <span class="ms ms-sm" style="color:#ef4444">cancel</span>
            <strong>Pas tout à fait</strong>
          </div>
          ${tenseMsg}
          <div class="ptt-fb-rule">
            <span class="ms ms-sm" style="color:#f59e0b">school</span>
            <span>${tok.explanation}</span>
          </div>
          <div class="ptt-fb-actions">
            <button class="ptt-btn-sm" onclick="PastTenseTrainer.focusInput()">Réessayer</button>
            <button class="ptt-btn-sm ptt-btn-hint" onclick="PastTenseTrainer.showAnswer('${tok.id}')">Afficher la réponse</button>
          </div>
        </div>`;
    }
    return '';
  }

  // Insert accent character into input field at cursor position
  function insertAccent(char) {
    const inp = document.getElementById('ptt-verb-input');
    if (!inp) return;
    const start = inp.selectionStart || 0;
    const end = inp.selectionEnd || 0;
    const val = inp.value;
    inp.value = val.substring(0, start) + char + val.substring(end);
    inp.selectionStart = inp.selectionEnd = start + char.length;
    inp.focus();
  }

  // Submit Answer & Evaluate
  function submitAnswer(tokId) {
    const story = getActiveStory();
    const tokens = parseStoryTokens(story.text);
    const tok = tokens.find(t => t.id === tokId);
    if (!tok) return;

    const inputEl = document.getElementById('ptt-verb-input');
    const typedVal = (inputEl ? inputEl.value : '').trim();
    const checkedRadio = document.querySelector('input[name="ptt_tense"]:checked');
    const chosenTense = checkedRadio ? checkedRadio.value : 'passe_compose';

    // Verification Logic:
    // 1. Tense match
    const tenseMatches = chosenTense === tok.tense;
    // 2. Spelling & agreement match (clean strings)
    const spellingMatches = cleanStr(typedVal) === cleanStr(tok.answer);

    const isCorrect = tenseMatches && spellingMatches;

    const prev = state.answers[tokId] || { attempts: 0 };
    const attempts = (prev.attempts || 0) + 1;
    const firstTry = attempts === 1 && isCorrect;

    state.answers[tokId] = {
      tense: chosenTense,
      input: typedVal,
      isCorrect,
      attempts,
      firstTry,
      expectedTense: tok.tense,
      expectedAnswer: tok.answer,
      explanation: tok.explanation
    };

    // Update feedback box inside popover
    const fbBox = document.getElementById('ptt-feedback-box');
    if (fbBox) {
      fbBox.innerHTML = renderFeedbackHtml(state.answers[tokId], tok);
    }

    // Update main text token appearance in background
    refreshMainView();

    // If correct in study mode, provide pleasant audio cue & auto-advance after brief delay if desired
    if (isCorrect) {
      if (typeof window.speakFrench === 'function') {
        // Read out the correct French past sentence segment
        // window.speakFrench(tok.answer);
      }
    }
  }

  // Show expected answer on demand
  function showAnswer(tokId) {
    const story = getActiveStory();
    const tokens = parseStoryTokens(story.text);
    const tok = tokens.find(t => t.id === tokId);
    if (!tok) return;

    const inp = document.getElementById('ptt-verb-input');
    if (inp) inp.value = tok.answer;

    // Set correct radio
    const radio = document.querySelector(`input[name="ptt_tense"][value="${tok.tense}"]`);
    if (radio) {
      radio.checked = true;
      document.querySelectorAll('.ptt-tense-opt').forEach(el => el.classList.remove('active'));
      if (radio.parentElement) radio.parentElement.classList.add('active');
    }

    state.answers[tokId] = {
      tense: tok.tense,
      input: tok.answer,
      isCorrect: true,
      attempts: (state.answers[tokId] ? state.answers[tokId].attempts : 0) + 1,
      firstTry: false,
      expectedTense: tok.tense,
      expectedAnswer: tok.answer,
      explanation: tok.explanation
    };

    const fbBox = document.getElementById('ptt-feedback-box');
    if (fbBox) {
      fbBox.innerHTML = renderFeedbackHtml(state.answers[tokId], tok);
    }
    refreshMainView();
  }

  // Refresh main story DOM without tearing down popover
  function refreshMainView() {
    const container = document.getElementById('ptt-main-app');
    if (!container) return;

    // Keep popover element, refresh container content
    const story = getActiveStory();
    const tokens = parseStoryTokens(story.text);
    let totalCount = tokens.length;
    let completedCount = 0;
    let firstTryCorrect = 0;

    tokens.forEach(tok => {
      const ans = state.answers[tok.id];
      const tokEl = document.getElementById(tok.id);
      if (tokEl) {
        tokEl.className = 'ptt-verb-token';
        if (ans && ans.isCorrect) {
          tokEl.classList.add('ptt-token-correct');
          tokEl.innerHTML = `<span class="ptt-token-text">${ans.input || tok.answer}</span><span class="ptt-token-badge ptt-badge-ok">${getTenseLabel(tok.tense)}</span>`;
        } else if (ans && !ans.isCorrect) {
          tokEl.classList.add('ptt-token-wrong');
          tokEl.innerHTML = `<span class="ptt-token-text">${tok.present}</span><span class="ptt-token-badge ptt-badge-err">Essayer</span>`;
        }
      }
      if (ans && ans.isCorrect) {
        completedCount++;
        if (ans.firstTry) firstTryCorrect++;
      }
    });

    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const accuracy = completedCount > 0 ? Math.round((firstTryCorrect / completedCount) * 100) : 100;

    const progFill = document.querySelector('.ptt-progress-fill');
    if (progFill) progFill.style.width = percent + '%';

    const statPill1 = document.querySelector('.ptt-stat-pill strong');
    if (statPill1) statPill1.textContent = `${completedCount} / ${totalCount}`;
  }

  // Close Popover
  function closePopover(event) {
    const popoverBackdrop = document.getElementById('ptt-popover-backdrop');
    if (popoverBackdrop) {
      popoverBackdrop.classList.remove('open');
    }
    document.body.classList.remove('modal-open');
    state.activeToken = null;
    document.querySelectorAll('.ptt-verb-token').forEach(t => t.classList.remove('ptt-token-active'));
  }

  // Tense Radio Switch Helper
  function onTenseChange(val) {
    document.querySelectorAll('.ptt-tense-opt').forEach(el => el.classList.remove('active'));
    const checked = document.querySelector(`input[name="ptt_tense"][value="${val}"]`);
    if (checked && checked.parentElement) checked.parentElement.classList.add('active');
  }

  // Switch Story
  function switchStory(storyId) {
    state.currentStoryId = storyId;
    state.answers = {};
    state.activeToken = null;
    renderFullApp();
  }

  // Reset Story
  function resetCurrentStory() {
    if (confirm("Recommencer cet exercice depuis le début ?")) {
      state.answers = {};
      state.activeToken = null;
      renderFullApp();
    }
  }

  // Set Mode
  function setMode(mode) {
    state.mode = mode;
    renderFullApp();
  }

  // Toggle Custom Story Editor
  function toggleEditor() {
    state.editorOpen = !state.editorOpen;
    renderFullApp();
  }

  // Save Custom Story from Editor
  function saveCustomStory() {
    const titleInput = document.getElementById('ptt-custom-title');
    const textInput = document.getElementById('ptt-custom-text');
    const title = (titleInput ? titleInput.value : '').trim() || 'Exercice personnalisé';
    const text = (textInput ? textInput.value : '').trim();

    if (!text || !text.includes('{{')) {
      alert("Veuillez inclure au moins un verbe balisé avec la syntaxe {{verbe|temps|réponse|explication}}.");
      return;
    }

    const newId = 'custom_' + Date.now();
    const newStory = {
      id: newId,
      title,
      subtitle: "Exercice personnalisé créé par l'enseignant",
      difficulty: "Personnalisé",
      text
    };

    state.stories.unshift(newStory);
    state.currentStoryId = newId;
    state.editorOpen = false;
    state.answers = {};
    renderFullApp();
  }

  // Render Full Application in placeholder or modal
  function renderFullApp() {
    const target = document.getElementById('past-tense-trainer-mount');
    if (target) {
      target.innerHTML = renderAppContainer();
    }
  }

  // Open Fullscreen Modal Launcher
  function openTrainerModal() {
    const backdrop = document.getElementById('ptt-modal-backdrop');
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.classList.add('modal-open');
    renderFullApp();
  }

  function closeTrainerModal() {
    const backdrop = document.getElementById('ptt-modal-backdrop');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  // Public API
  return {
    init: renderFullApp,
    renderAppContainer,
    openPopover,
    closePopover,
    onTenseChange,
    insertAccent,
    submitAnswer,
    showAnswer,
    switchStory,
    resetCurrentStory,
    setMode,
    toggleEditor,
    saveCustomStory,
    openTrainerModal,
    closeTrainerModal,
    focusInput: () => {
      const inp = document.getElementById('ptt-verb-input');
      if (inp) { inp.focus(); inp.select(); }
    }
  };

}));
