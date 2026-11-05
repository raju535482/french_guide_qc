// Section 34: Les Pronoms Relatifs (pronoms_relatifs)
window.sectionsData = window.sectionsData || [];
window.sectionsData.push({
  "id": "pronoms_relatifs",
  "icon": "join_inner",
  "title": "Pronoms Relatifs Simples",
  "subtitle": "Qui, Que, Où, Dont : Maîtrisez la liaison des propositions",
  "color": "#6366F1",
  "content": [
    {
      "rule": "1. Tableau de référence rapide & Règles d'or (Qui, Que, Où, Dont)",
      "english": "Essential reference table and core syntactic rules for French relative pronouns.",
      "table": {
        "headers": [
          "Pronom",
          "Fonction remplacée",
          "Règle d'or syntaxique",
          "English Equivalent",
          "Exemple concret"
        ],
        "rows": [
          [
            "qui",
            "Sujet (Personne ou Chose)",
            "Toujours suivi d'un VERBE (ou pronom objet + verbe)",
            "who / which / that",
            "L'homme qui promène son chien."
          ],
          [
            "que / qu'",
            "Complément d'Objet Direct (COD)",
            "Toujours suivi d'un SUJET + VERBE",
            "whom / which / that",
            "Le livre que tu lis."
          ],
          [
            "où",
            "Complément de Lieu ou de Temps",
            "Toujours suivi d'un SUJET + VERBE (accent grave)",
            "where / when",
            "La ville où je vis. / Le jour où..."
          ],
          [
            "dont",
            "Complément avec la préposition « DE »",
            "Toujours suivi d'un SUJET + VERBE (verbe en « de » ou possession)",
            "whose / of which / about which",
            "C'est le film dont tout le monde parle."
          ]
        ]
      },
      "tip": "💡 Astuce visuelle : Regardez IMMÉDIATEMENT ce qui suit le pronom. Si c'est un verbe conjugué (ex: « ... fonctionne ») ➔ QUI. Si c'est un pronom sujet ou un nom (ex: « ... tu as fait ») ➔ QUE, OÙ ou DONT !"
    },
    {
      "rule": "2. Exemples progressifs et Cas Pièges essentiels (Élision, Prépositions, Dont vs Possession)",
      "english": "Progressive examples and tricky edge cases: elision, spatial prepositions, and possession.",
      "table": {
        "headers": [
          "Cas piège",
          "Règle & Explication",
          "Exemple correct",
          "Piège à éviter"
        ],
        "rows": [
          [
            "Cas 1 : Élision « Qu' » vs « Qui » devant voyelle",
            "« Que » s'élide obligatoirement en « qu' » devant voyelle. « Qui » ne s'élide JAMAIS.",
            "L'ami qu'il attend est en retard.",
            "Ne confondez pas « qu'il » avec « qui ». « Il » est le sujet de attendre !"
          ],
          [
            "Cas 2 : Lieu avec préposition physique (« Où » vs « Lequel »)",
            "« Où » remplace à/dans. Avec une préposition physique précise (sur, sous, avec), employez « lequel / laquelle ».",
            "La chaise sur laquelle je m'assois.",
            "Évitez *la chaise où je m'assois* lorsque le contact physique précis (sur) est requis."
          ],
          [
            "Cas 3 : « Dont » : Possession pure vs Verbe avec « DE »",
            "« Dont » s'utilise pour la possession (« dont la porte ») et avec les verbes/adjectifs en « de » (parler de, être fier de, avoir besoin de).",
            "La voiture dont la porte est ouverte. / L'artiste dont je suis fier.",
            "Ne dites jamais *dont sa porte* ! Utilisez toujours l'article défini : « dont la porte »."
          ],
          [
            "Cas 4 : Expressions temporelles (« Où » = « When »)",
            "En français, « quand » n'est JAMAIS un pronom relatif. Utilisez toujours « où » pour le temps.",
            "L'année où nous sommes arrivés au Québec.",
            "Ne dites jamais *l'année quand nous sommes arrivés* !"
          ]
        ]
      },
      "tip": "🍁 Au Québec comme en France, les verbes « avoir besoin de », « avoir peur de » et « être fier de » reviennent constamment à l'oral avec « dont » : « C'est le projet dont j'ai besoin »."
    },
    {
      "rule": "3. Module Interactif & Quiz de Maîtrise des Pronoms Relatifs",
      "english": "Interactive high-contrast learning widget: color-coded flashcards, tricky cases, and stateful 5-question quiz with instant feedback.",
      "customHtml": `
<style>
/* Modern Neo-Brutalist High-Contrast Styling */
.rp-module-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.25rem 0;
  max-width: 100%;
}

.rp-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}

.rp-card-box {
  background: var(--surface-2);
  border: 2px solid var(--border);
  border-radius: var(--r-md, 10px);
  padding: 1.15rem;
  box-shadow: 3px 3px 0 var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: transform 0.15s ease;
}

.rp-card-box:hover {
  transform: translateY(-2px);
}

.rp-pron-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-weight: 800;
  font-size: 1.15rem;
  border: 1.5px solid var(--border);
  width: fit-content;
}

.rp-golden-tag {
  font-size: 0.88rem;
  line-height: 1.45;
  background: color-mix(in srgb, var(--primary) 8%, transparent);
  padding: 0.5rem 0.75rem;
  border-left: 3px solid var(--primary);
  border-radius: 4px;
}

/* Quiz Container */
.rp-quiz-panel {
  background: var(--surface-2);
  border: 2.5px solid var(--border);
  border-radius: var(--r-md, 10px);
  padding: 1.35rem;
  box-shadow: 5px 5px 0 var(--border);
}

.rp-quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.15rem;
  border-bottom: 1.5px solid var(--border);
  padding-bottom: 0.75rem;
}

.rp-quiz-counter-badge {
  font-size: 0.82rem;
  font-weight: 800;
  background: var(--surface-1);
  border: 1.5px solid var(--border);
  border-radius: 20px;
  padding: 0.2rem 0.65rem;
}

.rp-quiz-question-txt {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.45;
}

.rp-quiz-btns-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.rp-option-btn {
  background: var(--surface-1);
  color: var(--text-primary);
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 0.65rem 1.35rem;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  box-shadow: 2px 2px 0 var(--border);
  transition: all 0.12s ease;
}

.rp-option-btn:hover:not(:disabled) {
  background: var(--primary);
  color: #fff;
  transform: translateY(-1px);
}

.rp-option-btn.correct {
  background: #10B981 !important;
  color: #fff !important;
  border-color: #065F46 !important;
}

.rp-option-btn.wrong {
  background: #EF4444 !important;
  color: #fff !important;
  border-color: #991B1B !important;
}

.rp-quiz-feedback-box {
  margin-top: 1rem;
  padding: 0.85rem 1.15rem;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.5;
  display: none;
}

.rp-next-q-btn {
  display: none;
  margin-top: 1.15rem;
  background: var(--primary);
  color: #fff;
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 0.65rem 1.35rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 2px 2px 0 var(--border);
  align-items: center;
  gap: 0.4rem;
}
</style>

<div class="rp-module-wrap">
  <!-- Pronoun Summary Cards -->
  <div class="rp-cards-grid">
    <div class="rp-card-box" style="border-top: 6px solid #3B82F6;">
      <div class="rp-pron-pill" style="background: color-mix(in srgb, #3B82F6 15%, transparent); color: #3B82F6;">
        <span class="ms ms-sm">person</span> QUI
      </div>
      <div style="font-weight:700;font-size:0.92rem;">Remplace le SUJET (Personne / Chose)</div>
      <div class="rp-golden-tag"><strong>Règle d'or :</strong> Suivi immédiatement d'un <strong>VERBE</strong>.</div>
      <div style="font-size:0.85rem;color:var(--text-secondary);"><em>« L'homme qui promène son chien. »</em></div>
    </div>

    <div class="rp-card-box" style="border-top: 6px solid #10B981;">
      <div class="rp-pron-pill" style="background: color-mix(in srgb, #10B981 15%, transparent); color: #10B981;">
        <span class="ms ms-sm">category</span> QUE / QU'
      </div>
      <div style="font-weight:700;font-size:0.92rem;">Remplace le COD (Direct Object)</div>
      <div class="rp-golden-tag"><strong>Règle d'or :</strong> Suivi immédiatement d'un <strong>SUJET + VERBE</strong>.</div>
      <div style="font-size:0.85rem;color:var(--text-secondary);"><em>« Le livre que tu lis. »</em></div>
    </div>

    <div class="rp-card-box" style="border-top: 6px solid #F59E0B;">
      <div class="rp-pron-pill" style="background: color-mix(in srgb, #F59E0B 15%, transparent); color: #F59E0B;">
        <span class="ms ms-sm">place</span> OÙ
      </div>
      <div style="font-weight:700;font-size:0.92rem;">Remplace le LIEU ou le TEMPS</div>
      <div class="rp-golden-tag"><strong>Règle d'or :</strong> Suivi d'un <strong>SUJET + VERBE</strong> (accent grave obligatoire).</div>
      <div style="font-size:0.85rem;color:var(--text-secondary);"><em>« La ville où je vis. / Le jour où... »</em></div>
    </div>

    <div class="rp-card-box" style="border-top: 6px solid #8B5CF6;">
      <div class="rp-pron-pill" style="background: color-mix(in srgb, #8B5CF6 15%, transparent); color: #8B5CF6;">
        <span class="ms ms-sm">link</span> DONT
      </div>
      <div style="font-weight:700;font-size:0.92rem;">Remplace « DE + Chose / Personne »</div>
      <div class="rp-golden-tag"><strong>Règle d'or :</strong> Verbe/adjectif en « de » ou possession pure.</div>
      <div style="font-size:0.85rem;color:var(--text-secondary);"><em>« Le film dont tout le monde parle. »</em></div>
    </div>
  </div>

  <!-- Stateful Interactive Quiz -->
  <div class="rp-quiz-panel" id="rp-quiz-panel">
    <div class="rp-quiz-header">
      <div style="display:flex;align-items:center;gap:0.4rem;font-weight:800;font-size:1.05rem;">
        <span class="ms" style="color:var(--primary);">quiz</span>
        <span>Quiz Interactif d'Entraînement</span>
      </div>
      <span class="rp-quiz-counter-badge" id="rp-counter-text">Question 1 / 5</span>
    </div>

    <div class="rp-quiz-question-txt" id="rp-question-text">
      1. C'est un logiciel ________ fonctionne très bien.
    </div>

    <div class="rp-quiz-btns-row" id="rp-options-container"></div>
    <div class="rp-quiz-feedback-box" id="rp-feedback-panel"></div>

    <button class="rp-next-q-btn" id="rp-next-button" onclick="window.nextRelativePronounQuiz()">
      <span>Question Suivante</span>
      <span class="ms ms-sm">arrow_forward</span>
    </button>
  </div>
</div>
`
    }
  ]
});

(function() {
  const quizItems = [
    {
      prompt: "1. C'est un logiciel ________ fonctionne très bien.",
      options: ["qui", "que", "où", "dont"],
      answer: "qui",
      explanation: "« fonctionne » est le verbe conjugué. Le pronom relatif remplit la fonction de SUJET du verbe, donc « qui » s'impose."
    },
    {
      prompt: "2. Le code ________ tu as écrit est propre.",
      options: ["qui", "que", "où", "dont"],
      answer: "que",
      explanation: "« tu » est le sujet et « as écrit » est le verbe. Le pronom remplace le COD (tu as écrit quoi ? -> le code), donc on utilise « que »."
    },
    {
      prompt: "3. Le projet ________ je suis responsable est complexe.",
      options: ["qui", "que", "où", "dont"],
      answer: "dont",
      explanation: "L'adjectif « responsable » se construit obligatoirement avec « de » (être responsable DE quelque chose). On emploie donc « dont »."
    },
    {
      prompt: "4. Le bureau ________ je travaille est lumineux.",
      options: ["qui", "que", "où", "dont"],
      answer: "où",
      explanation: "Il s'agit d'un complément de lieu physique (travailler dans ce bureau), on utilise donc le pronom « où »."
    },
    {
      prompt: "5. La fonction ________ j'ai optimisée plante.",
      options: ["qui", "qu'", "où", "dont"],
      answer: "qu'",
      explanation: "« j' » (je) est le sujet du verbe composé « ai optimisée ». « Que » s'élide en « qu' » devant le pronom voyelle."
    }
  ];

  let activeIndex = 0;

  window.renderRelativePronounsWidget = function() {
    const qEl = document.getElementById("rp-question-text");
    const countEl = document.getElementById("rp-counter-text");
    const optEl = document.getElementById("rp-options-container");
    const fbEl = document.getElementById("rp-feedback-panel");
    const nextBtn = document.getElementById("rp-next-button");

    if (!qEl || !optEl) return;

    const item = quizItems[activeIndex];
    if (countEl) countEl.textContent = `Question ${activeIndex + 1} / ${quizItems.length}`;
    if (qEl) qEl.textContent = item.prompt;
    if (fbEl) fbEl.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";

    optEl.innerHTML = item.options.map(opt => `
      <button class="rp-option-btn" onclick="window.selectRelativePronounAnswer('${opt}', this)">
        ${opt}
      </button>
    `).join("");
  };

  window.selectRelativePronounAnswer = function(selected, btn) {
    const item = quizItems[activeIndex];
    const allBtns = document.querySelectorAll(".rp-option-btn");
    const fbEl = document.getElementById("rp-feedback-panel");
    const nextBtn = document.getElementById("rp-next-button");

    allBtns.forEach(b => b.disabled = true);

    if (selected === item.answer) {
      btn.classList.add("correct");
      if (fbEl) {
        fbEl.style.display = "block";
        fbEl.style.background = "rgba(16, 185, 129, 0.15)";
        fbEl.style.border = "1.5px solid #10B981";
        fbEl.innerHTML = `<strong>✓ Bravo !</strong> ${item.explanation}`;
      }
    } else {
      btn.classList.add("wrong");
      allBtns.forEach(b => {
        if (b.textContent.trim() === item.answer) b.classList.add("correct");
      });
      if (fbEl) {
        fbEl.style.display = "block";
        fbEl.style.background = "rgba(239, 68, 68, 0.15)";
        fbEl.style.border = "1.5px solid #EF4444";
        fbEl.innerHTML = `<strong>✗ Attention :</strong> La bonne réponse est « <strong>${item.answer}</strong> ». ${item.explanation}`;
      }
    }

    if (activeIndex < quizItems.length - 1 && nextBtn) {
      nextBtn.style.display = "inline-flex";
    }
  };

  window.nextRelativePronounQuiz = function() {
    activeIndex++;
    window.renderRelativePronounsWidget();
  };

  // Auto-init if DOM ready
  if (document.getElementById("rp-question-text")) {
    window.renderRelativePronounsWidget();
  }
})();

