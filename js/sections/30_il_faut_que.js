// Section 30: Expressing Obligation and Necessity (Le Subjonctif après "Il faut que")
window.sectionsData = window.sectionsData || [];
window.sectionsData.push({
  "id": "il_faut_que",
  "icon": "rule",
  "title": "Expressing Obligation & Necessity",
  "subtitle": "Le Subjonctif Présent après « Il faut que »",
  "color": "#6366F1",
  "content": [
    {
      "rule": "1. Core Rule & Concept",
      "english": "To express obligation, necessity, or duty in French, the impersonal construction \"Il faut que\" (It is necessary that / It is required that) is followed by the Subjunctive Mood (le subjonctif présent). Formula: Subject / Context ➔ Il faut que + [Pronoun / Noun] + [Verb in Subjunctive Present] + [Complement].",
      "examples": [
        {
          "french": "Il faut que je regarde les prix avant d'acheter.",
          "english": "I have to check the prices before buying."
        },
        {
          "french": "Il faut que tu prennes l'ascenseur.",
          "english": "You need to take the elevator."
        },
        {
          "french": "Il faut qu'il parte à huit heures.",
          "english": "He has to leave at eight o'clock."
        },
        {
          "french": "Il faut que Sophie finisse son travail.",
          "english": "Sophie must finish her work."
        }
      ],
      "tip": "💡 Distinction: « Il faut » + infinitive gives a general obligation (e.g. « Il faut étudier » = One must study). « Il faut que » + specific subject requires the Subjunctive (e.g. « Il faut que j'étudie » = I must study)."
    },
    {
      "rule": "2. Conjugation Rules: How to Form the Present Subjunctive",
      "english": "Step 1: Take the 3rd person plural (ils/elles) form of the present indicative, drop the -ent ending to get the stem. Step 2: Add standard subjunctive endings: -e, -es, -e, -ions, -iez, -ent.",
      "customHtml": `
<style>
.subj-graphical-container {
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 100%;
  box-sizing: border-box;
}
.subj-workflow-card {
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.subj-workflow-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
}
.subj-flow-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.85rem;
  position: relative;
}
.subj-flow-step {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  transition: transform 0.15s, border-color 0.15s;
}
.subj-flow-step:hover {
  transform: translateY(-2px);
  border-color: #6366F1;
}
.subj-step-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.2rem 0.55rem;
  border-radius: var(--r-xs);
  width: fit-content;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.step-b1 { background: color-mix(in srgb, #3B82F6 18%, var(--surface-1)); color: #3B82F6; border: 1px solid #3B82F6; }
.step-b2 { background: color-mix(in srgb, #EF4444 18%, var(--surface-1)); color: #EF4444; border: 1px solid #EF4444; }
.step-b3 { background: color-mix(in srgb, #10B981 18%, var(--surface-1)); color: #10B981; border: 1px solid #10B981; }

.subj-step-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.subj-step-formula {
  font-family: 'Azeret Mono', monospace;
  font-size: 0.95rem;
  background: var(--surface-2);
  padding: 0.45rem 0.65rem;
  border-radius: var(--r-xs);
  color: #6366F1;
  border: 1px dashed var(--border);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
.subj-step-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.4;
  margin: 0;
}

.subj-interactive-builder {
  background: var(--surface-1);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.builder-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.builder-tab-btn {
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.4rem 0.85rem;
  border-radius: var(--r-xs);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.builder-tab-btn:hover {
  border-color: #6366F1;
  color: var(--text-primary);
}
.builder-tab-btn.active {
  background: #6366F1;
  color: #fff;
  border-color: #6366F1;
}

.builder-stages {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
  padding: 0.75rem;
  background: var(--surface-2);
  border-radius: var(--r-xs);
  border: 1px solid var(--border);
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
}
.b-stage-chip {
  padding: 0.4rem 0.75rem;
  border-radius: var(--r-xs);
  font-family: 'Azeret Mono', monospace;
  font-size: 0.95rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.stage-ils { background: color-mix(in srgb, #3B82F6 18%, var(--surface-1)); color: #3B82F6; border: 1px solid #3B82F6; }
.stage-drop { background: color-mix(in srgb, #EF4444 18%, var(--surface-1)); color: #EF4444; border: 1px solid #EF4444; text-decoration: line-through; }
.stage-stem { background: color-mix(in srgb, #F59E0B 18%, var(--surface-1)); color: #F59E0B; border: 1px solid #F59E0B; }
.stage-plus { font-size: 1.1rem; color: var(--text-secondary); font-weight: 800; }
.stage-ending { background: color-mix(in srgb, #10B981 18%, var(--surface-1)); color: #10B981; border: 1px solid #10B981; }
.stage-result { background: color-mix(in srgb, #6366F1 22%, var(--surface-1)); color: #6366F1; border: 1.5px solid #6366F1; font-weight: 800; }

.builder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.65rem;
  margin-top: 0.35rem;
}
.b-grid-item {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-xs);
  padding: 0.65rem 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
}
.b-grid-item .b-pron { color: var(--text-secondary); font-weight: 600; }
.b-grid-item .b-stem { color: #F59E0B; font-weight: 700; font-family: 'Azeret Mono', monospace; }
.b-grid-item .b-end { color: #10B981; font-weight: 800; font-family: 'Azeret Mono', monospace; }
.b-grid-item .b-final { color: var(--text-primary); font-weight: 700; }

[data-style="neo-brutalist"] .subj-workflow-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .subj-flow-step {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .subj-step-badge {
  border: 1.5px solid var(--neo-border);
}
[data-style="neo-brutalist"] .subj-interactive-builder {
  border: 2px solid var(--neo-border);
  box-shadow: 3px 3px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .builder-tab-btn {
  border: 2px solid var(--neo-border);
  font-weight: 800;
}
[data-style="neo-brutalist"] .builder-tab-btn.active {
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .b-stage-chip {
  border: 1.5px solid var(--neo-border);
}
[data-style="neo-brutalist"] .b-grid-item {
  border: 1.5px solid var(--neo-border);
}
</style>

<div class="subj-graphical-container">
  <!-- Interactive Visual Workflow Card -->
  <div class="subj-workflow-card">
    <div class="subj-workflow-title">
      <span class="ms ms-sm" style="color:#6366F1">schema</span>
      <span>Graphical Breakdown: The 3-Step Subjunctive Derivation</span>
    </div>

    <!-- 3 Visual Workflow Step Columns -->
    <div class="subj-flow-steps">
      <div class="subj-flow-step">
        <span class="subj-step-badge step-b1">Step 1 · Source</span>
        <h5 class="subj-step-label">Get 3rd Person Plural</h5>
        <div class="subj-step-formula">ils / elles (Présent)</div>
        <p class="subj-step-desc">Start with the <em>ils/elles</em> indicative present tense form of the verb.</p>
      </div>

      <div class="subj-flow-step">
        <span class="subj-step-badge step-b2">Step 2 · Extraction</span>
        <h5 class="subj-step-label">Drop the « -ent »</h5>
        <div class="subj-step-formula">[ils...] <span style="text-decoration:line-through;color:#EF4444">-ent</span> ➔ stem</div>
        <p class="subj-step-desc">Cut off the final <strong>-ent</strong> ending. What remains is your invariant base stem.</p>
      </div>

      <div class="subj-flow-step">
        <span class="subj-step-badge step-b3">Step 3 · Assembly</span>
        <h5 class="subj-step-label">Add Subjunctive Endings</h5>
        <div class="subj-step-formula">stem + -e, -es, -e, -ions, -iez, -ent</div>
        <p class="subj-step-desc">Attach the standard subjunctive ending for the matching subject pronoun.</p>
      </div>
    </div>

    <!-- Interactive Step-by-Step Live Conjugator -->
    <div class="subj-interactive-builder">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
        <span style="font-size:0.85rem;font-weight:700;color:var(--text-secondary);display:flex;align-items:center;gap:0.35rem;">
          <span class="ms ms-sm" style="color:#6366F1">touch_app</span> Choose a verb to see live visual derivation:
        </span>
        <div class="builder-tabs" id="subj-builder-tabs">
          <button class="builder-tab-btn active" onclick="window.selectSubjModelVerb('regarder')">Regarder (-ER)</button>
          <button class="builder-tab-btn" onclick="window.selectSubjModelVerb('finir')">Finir (-IR / -iss)</button>
          <button class="builder-tab-btn" onclick="window.selectSubjModelVerb('partir')">Partir (-IR)</button>
          <button class="builder-tab-btn" onclick="window.selectSubjModelVerb('attendre')">Attendre (-RE)</button>
          <button class="builder-tab-btn" onclick="window.selectSubjModelVerb('lire')">Lire (Irreg)</button>
        </div>
      </div>

      <!-- Live Stage Visualizer -->
      <div class="builder-stages" id="subj-builder-stages">
        <span class="b-stage-chip stage-ils" id="stage-ils-text">ils regardent</span>
        <span class="stage-plus">➔</span>
        <span class="b-stage-chip stage-drop" id="stage-drop-text">-ent</span>
        <span class="stage-plus">➔</span>
        <span class="b-stage-chip stage-stem" id="stage-stem-text">Base Stem: regard-</span>
        <span class="stage-plus">+</span>
        <span class="b-stage-chip stage-ending">Endings</span>
        <span class="stage-plus">=</span>
        <span class="b-stage-chip stage-result" id="stage-result-text">Subjonctif Présent</span>
      </div>

      <!-- 6-Person Visual Conjugation Grid -->
      <div class="builder-grid" id="subj-builder-grid"></div>
    </div>
  </div>
</div>
`,
      "table": {
        "headers": [
          "Subject Pronoun",
          "Subjunctive Ending",
          "Regarder (stem: regard-)",
          "Finir (stem: finiss-)",
          "Partir (stem: part-)"
        ],
        "rows": [
          ["que je", "-e", "que je regarde", "que je finisse", "que je parte"],
          ["que tu", "-es", "que tu regardes", "que tu finisses", "que tu partes"],
          ["qu'il / elle / on", "-e", "qu'il regarde", "qu'elle finisse", "qu'il parte"],
          ["que nous", "-ions", "que nous regardions", "que nous finissions", "que nous partions"],
          ["que vous", "-iez", "que vous regardiez", "que vous finissiez", "que vous partiez"],
          ["qu'ils / elles", "-ent", "qu'ils regardent", "qu'elles finissent", "qu'ils partent"]
        ]
      },
      "tip": "💡 Notice that nous and vous endings (-ions, -iez) match the Imparfait! The singular persons and ils/elles use endings identical to regular -er present indicative (-e, -es, -e, -ent)."
    },
    {
      "rule": "3. Stem-Changing Verbs (Two-Stem Verbs)",
      "english": "Verbs like prendre and boire change stems: they use the ils-stem for je/tu/il/ils, but revert to the nous/vous stem for nous and vous.",
      "table": {
        "headers": [
          "Verb",
          "ils stem (je/tu/il/ils)",
          "nous/vous stem",
          "Example (je / tu / il)",
          "Example (nous / vous)"
        ],
        "rows": [
          ["Prendre", "prenn-", "pren-", "que je prenne, tu prennes, il prenne", "que nous prenions, vous preniez"],
          ["Boire", "boiv-", "buv-", "que je boive, tu boives, il boive", "que nous buvions, vous buviez"],
          ["Venir", "vienn-", "ven-", "que je vienne, tu viennes, il vienne", "que nous venions, vous veniez"],
          ["Lire", "lis-", "lis-", "que je lise, tu lises, il lise", "que nous lisions, vous lisiez"],
          ["Dire", "dis-", "dis-", "que je dise, tu dises, il dise", "que nous disions, vous disiez"],
          ["Entendre", "entend-", "entend-", "que j'entende, tu entendes, il entende", "que nous entendions, vous entendiez"]
        ]
      },
      "tip": "💡 Memory trick: The boot pattern! Je, tu, il, and ils stay inside the boot with the ils-derived stem; nous and vous stay outside the boot."
    },
    {
      "rule": "4. Essential Irregular Verbs (Exceptions)",
      "english": "These high-frequency verbs have unique subjunctive stems and do not follow the ils stem rule. Memorize them carefully.",
      "table": {
        "headers": [
          "Verb",
          "que je / j'",
          "que tu",
          "qu'il / elle",
          "que nous",
          "que vous",
          "qu'ils / elles"
        ],
        "rows": [
          ["Être", "sois", "sois", "soit", "soyons", "soyez", "soient"],
          ["Avoir", "aie", "aies", "ait", "ayons", "ayez", "aient"],
          ["Faire", "fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"],
          ["Pouvoir", "puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"],
          ["Savoir", "sache", "saches", "sache", "sachions", "sachiez", "sachent"],
          ["Aller", "aille", "ailles", "aille", "allions", "alliez", "aillent"],
          ["Vouloir", "veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"]
        ]
      },
      "tip": "🍁 Quebec spoken note: You will hear « Il faut qu'on fasse attention » or « Il faut que tu sois à l'heure » daily in Quebec workplaces, metro announcements, and conversations!"
    },
    {
      "rule": "5. Structural Breakdown & Variations",
      "english": "Transforming modal obligation (devoir), adding euphonic \"l'\" with \"on\", and asking questions with inversion (Faut-il que...?).",
      "table": {
        "headers": [
          "Variation Pattern",
          "Base / Informal Structure",
          "Refined Subjunctive Structure",
          "English Meaning"
        ],
        "rows": [
          [
            "Modal Replacement (Devoir ➔ Il faut que)",
            "Je dois regarder les prix avant d'acheter.",
            "Il faut que je regarde les prix avant d'acheter.",
            "I must check the prices before buying."
          ],
          [
            "Euphonic « L' » with « On »",
            "Il faut qu'on conduise prudemment.",
            "Il faut que l'on conduise prudemment.",
            "We must drive carefully / One must drive safely."
          ],
          [
            "Formal Inversion Question",
            "Est-ce que je dois remettre ma feuille?",
            "Faut-il que je remette ma feuille au responsable ?",
            "Must I hand in my sheet to the supervisor?"
          ],
          [
            "Negative Obligation (Prohibition)",
            "Tu ne dois pas oublier tes clés.",
            "Il ne faut pas que tu oublies tes clés.",
            "You must not forget your keys."
          ]
        ]
      },
      "tip": "💡 The euphonic 'l\'' (« que l'on ») avoids the harsh hiatus sound of « qu'on » in polite spoken and written French."
    },
    {
      "rule": "6. Synonymous Impersonal Expressions (Advanced B1 Level)",
      "english": "You can replace « Il faut que » with other impersonal expressions of necessity, all taking the Subjunctive.",
      "table": {
        "headers": [
          "Expression",
          "English Meaning",
          "French Example",
          "Full English Translation"
        ],
        "rows": [
          [
            "Il est nécessaire que",
            "It is necessary that",
            "Il est nécessaire que tu prennes l'ascenseur.",
            "It is necessary that you take the elevator."
          ],
          [
            "Il est indispensable que",
            "It is essential that",
            "Il est indispensable qu'il parte à huit heures.",
            "It is essential that he leaves at eight o'clock."
          ],
          [
            "Il est important que",
            "It is important that",
            "Il est important que Sophie finisse son travail.",
            "It is important that Sophie finishes her work."
          ],
          [
            "Il est primordial que",
            "It is vital / paramount that",
            "Il est primordial que nous soyons prêts.",
            "It is vital that we be ready."
          ],
          [
            "Il est urgent que",
            "It is urgent that",
            "Il est urgent que vous appeliez le médecin.",
            "It is urgent that you call the doctor."
          ]
        ]
      },
      "tip": "💡 All impersonal expressions expressing necessity, importance, judgment, or urgency trigger the subjunctive mood."
    },
    {
      "rule": "7. Comprehensive Reference Dataset: Devoir ➔ Il faut que",
      "english": "Master how everyday sentences with devoir convert to il faut que + subjunctive, including regular verbs, stem-changers, proper nouns, and reflexives.",
      "table": {
        "headers": [
          "Original (Devoir)",
          "Transformed (Il faut que + Subjunctive)",
          "Key Subjunctive Verb Form",
          "Full English Translation"
        ],
        "rows": [
          ["Je dois regarder les prix avant d'acheter.", "Il faut que je regarde les prix avant d'acheter.", "regarde (Regular -er)", "I have to check the prices before buying."],
          ["Tu dois prendre l'ascenseur.", "Il faut que tu prennes l'ascenseur.", "prennes (Irregular stem prend- ➔ prenn-)", "You need to take the elevator."],
          ["Il doit partir à huit heures.", "Il faut qu'il parte à huit heures.", "parte (Irregular from partir)", "He has to leave at eight o'clock."],
          ["On doit conduire prudemment.", "Il faut qu'on conduise prudemment.", "conduise (Irregular from conduire)", "We must drive carefully."],
          ["Vous devez vous rendre au bureau.", "Il faut que vous vous rendiez au bureau.", "rendiez (Irregular from se rendre)", "You must go to the office."],
          ["Il doit boire de l'eau.", "Il faut qu'il boive de l'eau.", "boive (Stem change from boire)", "He has to drink water."],
          ["Luc doit partir immédiatement.", "Il faut que Luc parte immédiatement.", "parte (Proper noun subject)", "Luc has to leave immediately."],
          ["Sophie doit finir son travail.", "Il faut que Sophie finisse son travail.", "finisse (Regular -ir / -iss-)", "Sophie must finish her work."],
          ["Tu dois lire ce document.", "Il faut que tu lises ce document.", "lises (From lire)", "You must read this document."],
          ["Vous devez appeler le service client.", "Il faut que vous appeliez le service client.", "appeliez (Double 'l' pattern)", "You must call customer service."],
          ["Elle doit dire la vérité.", "Il faut qu'elle dise la vérité.", "dise (From dire)", "She must tell the truth."],
          ["Vous devez entendre les consignes.", "Il faut que vous entendiez les consignes.", "entendiez (From entendre)", "You must hear the instructions."]
        ]
      },
      "tip": "💡 Reflexive verbs keep their reflexive pronoun right before the subjunctive verb: « Il faut que vous VOUS rendiez »."
    },
    {
      "rule": "8. Interactive Practice: Devoir ➔ Il faut que Transformer",
      "english": "Test your mastery: transform each sentence using « Il faut que » and the correct subjunctive verb form.",
      "customHtml": `
<style>
.ifq-interactive-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.25rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.ifq-prompt-box {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ifq-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6366F1;
  letter-spacing: 0.05em;
}
.ifq-sentence-orig {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}
.ifq-sentence-en {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.ifq-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.75rem;
}
.ifq-opt-btn {
  background: var(--surface-1);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.ifq-opt-btn:hover:not(:disabled) {
  border-color: #6366F1;
  background: color-mix(in srgb, #6366F1 8%, var(--surface-1));
  transform: translateY(-1px);
}
.ifq-opt-btn.correct {
  border-color: #10B981 !important;
  background: color-mix(in srgb, #10B981 15%, var(--surface-1)) !important;
  color: #10B981 !important;
  font-weight: 700;
}
.ifq-opt-btn.wrong {
  border-color: #EF4444 !important;
  background: color-mix(in srgb, #EF4444 15%, var(--surface-1)) !important;
  color: #EF4444 !important;
  text-decoration: line-through;
}
.ifq-feedback-box {
  padding: 0.85rem 1rem;
  border-radius: var(--r-sm);
  font-size: 0.92rem;
  line-height: 1.45;
  display: none;
}
.ifq-feedback-box.show {
  display: block;
}
.ifq-feedback-box.correct {
  background: color-mix(in srgb, #10B981 12%, var(--surface-1));
  border: 1px solid #10B981;
  color: var(--text-primary);
}
.ifq-feedback-box.wrong {
  background: color-mix(in srgb, #EF4444 12%, var(--surface-1));
  border: 1px solid #EF4444;
  color: var(--text-primary);
}
.ifq-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}
.ifq-score {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.ifq-next-btn {
  background: #6366F1;
  color: #fff;
  border: none;
  padding: 0.55rem 1.2rem;
  border-radius: var(--r-xs);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: opacity 0.15s;
}
.ifq-next-btn:hover {
  opacity: 0.9;
}

[data-style="neo-brutalist"] .ifq-interactive-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .ifq-prompt-box {
  border: 2px solid var(--neo-border);
}
[data-style="neo-brutalist"] .ifq-opt-btn {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .ifq-opt-btn:hover:not(:disabled) {
  box-shadow: 3px 3px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .ifq-next-btn {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
</style>

<div class="ifq-interactive-card" id="ifq-widget">
  <div class="ifq-prompt-box">
    <span class="ifq-badge" id="ifq-badge">Question 1 of 8 · Transform Devoir ➔ Il faut que</span>
    <div class="ifq-sentence-orig" id="ifq-orig">Je dois regarder les prix avant d'acheter.</div>
    <div class="ifq-sentence-en" id="ifq-en">I have to check the prices before buying.</div>
  </div>
  <div class="ifq-options-grid" id="ifq-options"></div>
  <div class="ifq-feedback-box" id="ifq-feedback"></div>
  <div class="ifq-controls">
    <div class="ifq-score" id="ifq-score">Score: 0 / 0</div>
    <button class="ifq-next-btn" id="ifq-next-btn" onclick="window.nextIfqQuestion()" style="display:none;">Next Question <span class="ms ms-sm">arrow_forward</span></button>
  </div>
</div>
`
    },
    {
      "rule": "9. Text B1 : Ma vie personnelle, professionnelle et l'obligation",
      "english": "A complete B1 French text combining personal life, mobile software engineering journey, and professional duties with 'il faut que + subjonctif' and 'avoir besoin de'.",
      "customHtml": `
<style>
.b1-text-showcase {
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.4rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.b1-sec-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.b1-sec-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.65rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.b1-sec-title {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
}
.b1-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.2rem 0.55rem;
  border-radius: var(--r-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.b1-badge-tenses {
  background: color-mix(in srgb, #6366F1 18%, var(--surface-1));
  color: #6366F1;
  border: 1px solid #6366F1;
}
.b1-text-body {
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-primary);
  overflow-wrap: anywhere;
  word-break: break-word;
}
.b1-v-pres { color: #3B82F6; font-weight: 800; text-decoration: underline dotted #3B82F6; }
.b1-v-pc { color: #EC4899; font-weight: 800; text-decoration: underline dotted #EC4899; }
.b1-v-imp { color: #F59E0B; font-weight: 800; text-decoration: underline dotted #F59E0B; }
.b1-v-fp { color: #10B981; font-weight: 800; text-decoration: underline dotted #10B981; }
.b1-v-fs { color: #06B6D4; font-weight: 800; text-decoration: underline dotted #06B6D4; }
.b1-v-subj { color: #8B5CF6; font-weight: 800; text-decoration: underline dotted #8B5CF6; }

.b1-legend-bar {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  padding: 0.65rem 0.85rem;
  background: var(--surface-2);
  border-radius: var(--r-xs);
  border: 1px solid var(--border);
  font-size: 0.8rem;
  align-items: center;
}
.b1-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
}
.b1-legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.b1-duty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.85rem;
  margin-top: 0.5rem;
}
.b1-duty-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-xs);
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.92rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;
  min-width: 0;
}
.b1-duty-card h6 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

[data-style="neo-brutalist"] .b1-text-showcase {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .b1-sec-card {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .b1-badge {
  border: 1.5px solid var(--neo-border);
}
[data-style="neo-brutalist"] .b1-duty-card {
  border: 1.5px solid var(--neo-border);
}
</style>

<div class="b1-text-showcase">
  <!-- Legend Bar -->
  <div class="b1-legend-bar">
    <span style="font-weight:800;color:var(--text-secondary);"><span class="ms ms-sm" style="font-size:0.9rem">palette</span> Légende des temps :</span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#3B82F6"></span> <span class="b1-v-pres">Présent</span></span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#EC4899"></span> <span class="b1-v-pc">Passé Composé</span></span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#F59E0B"></span> <span class="b1-v-imp">Imparfait</span></span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#10B981"></span> <span class="b1-v-fp">Futur Proche</span></span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#06B6D4"></span> <span class="b1-v-fs">Futur Simple</span></span>
    <span class="b1-legend-item"><span class="b1-legend-dot" style="background:#8B5CF6"></span> <span class="b1-v-subj">Subjonctif</span></span>
  </div>

  <!-- SECTION 1 - TENSE DRILLS & VARIATIONS -->
  <div style="display:flex;flex-direction:column;gap:1rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;margin-top:0.25rem;">
      <span class="ms ms-sm" style="color:#6366F1">person</span>
      <h5 style="margin:0;font-size:1.15rem;font-weight:800;color:var(--text-primary);">Section 1 : Ma vie personnelle — Variations par temps verbal</h5>
    </div>

    <!-- 1. PRÉSENT ONLY -->
    <div class="b1-sec-card">
      <div class="b1-sec-header">
        <h6 class="b1-sec-title">
          <span class="ms ms-sm" style="color:#3B82F6">today</span>
          <span>1. Présent de l'indicatif (Habitudes & quotidien actuels)</span>
        </h6>
        <span class="b1-badge" style="background:color-mix(in srgb, #3B82F6 18%, var(--surface-1));color:#3B82F6;border:1px solid #3B82F6;">100 % Présent</span>
      </div>
      <div class="b1-text-body">
        Actuellement, <span class="b1-v-pres">j’habite</span> à Montréal et <span class="b1-v-pres">j’apprécie</span> énormément la vie quotidienne dans cette métropole animée. 
        Chaque matin, <span class="b1-v-pres">je prépare</span> un bon café chaud, <span class="b1-v-pres">je lis</span> quelques articles en français et <span class="b1-v-pres">j’étudie</span> les caractères et la grammaire du coréen. 
        Pendant mon temps libre, <span class="b1-v-pres">je programme</span> des projets mobiles personnels sur mon ordinateur portable. 
        Le soir et la fin de semaine, <span class="b1-v-pres">je regarde</span> des films au cinéma, <span class="b1-v-pres">je sors</span> avec des amis dans les parcs et <span class="b1-v-pres">je découvre</span> de nouveaux cafés de quartier.
      </div>
    </div>

    <!-- 2. IMPARFAIT ONLY -->
    <div class="b1-sec-card">
      <div class="b1-sec-header">
        <h6 class="b1-sec-title">
          <span class="ms ms-sm" style="color:#F59E0B">history</span>
          <span>2. Imparfait (Habitudes du passé & souvenirs d'enfance)</span>
        </h6>
        <span class="b1-badge" style="background:color-mix(in srgb, #F59E0B 18%, var(--surface-1));color:#F59E0B;border:1px solid #F59E0B;">100 % Imparfait</span>
      </div>
      <div class="b1-text-body">
        Quand <span class="b1-v-imp">j’étais</span> plus jeune, <span class="b1-v-imp">je vivais</span> dans une ville beaucoup plus tranquille où le rythme quotidien <span class="b1-v-imp">semblait</span> toujours paisible. 
        Chaque après-midi après l'école, <span class="b1-v-imp">je passais</span> des heures entières devant le vieux poste informatique familial : <span class="b1-v-imp">j’écrivais</span> mes tout premiers scripts et <span class="b1-v-imp">je démontais</span> de petits appareils électroniques. 
        Le week-end, <span class="b1-v-imp">je regardais</span> des séries étrangères avec ma famille, <span class="b1-v-imp">je lisais</span> des livres d'aventures et <span class="b1-v-imp">je rêvais</span> déjà de voyager un jour dans de grandes capitales lointaines.
      </div>
    </div>

    <!-- 3. PASSÉ COMPOSÉ ONLY -->
    <div class="b1-sec-card">
      <div class="b1-sec-header">
        <h6 class="b1-sec-title">
          <span class="ms ms-sm" style="color:#EC4899">event_available</span>
          <span>3. Passé Composé (Événements récents & actions ponctuelles)</span>
        </h6>
        <span class="b1-badge" style="background:color-mix(in srgb, #EC4899 18%, var(--surface-1));color:#EC4899;border:1px solid #EC4899;">100 % Passé Composé</span>
      </div>
      <div class="b1-text-body">
        Ces dernières semaines, <span class="b1-v-pc">j’ai emménagé</span> dans mon nouvel appartement à Montréal et <span class="b1-v-pc">j’ai installé</span> mon espace de travail. 
        Samedi dernier, <span class="b1-v-pc">j’ai visité</span> le musée Pointe-à-Callière au Vieux-Port, puis <span class="b1-v-pc">j’ai retrouvé</span> des collègues dans un restaurant du centre-ville. 
        Le lendemain, <span class="b1-v-pc">j’ai terminé</span> un module complet de vocabulaire coréen et <span class="b1-v-pc">j’ai regardé</span> un long-métrage primé dans un cinéma local. 
        En fin de journée, <span class="b1-v-pc">j’ai rédigé</span> le code d'une nouvelle mini-application mobile et <span class="b1-v-pc">j’ai envoyé</span> mes modifications sur GitHub.
      </div>
    </div>

    <!-- 4. FUTUR PROCHE & FUTUR SIMPLE -->
    <div class="b1-sec-card">
      <div class="b1-sec-header">
        <h6 class="b1-sec-title">
          <span class="ms ms-sm" style="color:#10B981">update</span>
          <span>4. Futurs séparés : Futur Proche (court terme) & Futur Simple (projets d'avenir)</span>
        </h6>
        <span class="b1-badge" style="background:color-mix(in srgb, #10B981 18%, var(--surface-1));color:#10B981;border:1px solid #10B981;">Futur Proche & Futur Simple</span>
      </div>
      <div class="b1-text-body">
        <strong>Futur Proche (actions imminentes et projets immédiats) :</strong><br>
        Ce samedi matin, <span class="b1-v-fp">je vais participer</span> à une rencontre d’échange linguistique dans un café de Montréal pour pratiquer mon français avec des locuteurs natifs. 
        L'après-midi, <span class="b1-v-fp">je vais programmer</span> une nouvelle interface utilisateur et <span class="b1-v-fp">je vais regarder</span> un documentaire en coréen sous-titré.<br><br>
        <strong>Futur Simple (projets à plus long terme et certitudes d'avenir) :</strong><br>
        L'année prochaine, lorsque mon niveau de langue sera excellent, <span class="b1-v-fs">je voyagerai</span> en Corée du Sud. 
        <span class="b1-v-fs">J’habiterai</span> quelques mois à Séoul, <span class="b1-v-fs">je visiterai</span> les palais historiques et <span class="b1-v-fs">je communiquerai</span> avec aisance dans la vie quotidienne.
      </div>
    </div>

    <!-- 5. MIXED TENSES PARAGRAPH -->
    <div class="b1-sec-card" style="border: 2px solid #6366F1;">
      <div class="b1-sec-header">
        <h6 class="b1-sec-title">
          <span class="ms ms-sm" style="color:#6366F1">auto_awesome</span>
          <span>5. Synthèse finale : Récit naturel complet (Mélange harmonieux de tous les temps B1)</span>
        </h6>
        <span class="b1-badge b1-badge-tenses">Mélange B1 Intégral</span>
      </div>
      <div class="b1-text-body">
        Aujourd’hui, <span class="b1-v-pres">j’habite</span> à Montréal, une ville cosmopolite où <span class="b1-v-pres">je partage</span> mon temps entre le perfectionnement du français et l’étude du coréen. 
        Quand <span class="b1-v-imp">j’étais</span> adolescent, <span class="b1-v-imp">je vivais</span> dans un quartier très calme et <span class="b1-v-imp">je passais</span> mes journées à explorer l’informatique sur un vieil ordinateur.<br><br>
        La fin de semaine dernière, <span class="b1-v-pc">j’ai visité</span> une belle galerie au Vieux-Port et <span class="b1-v-pc">j’ai regardé</span> un film classique au cinéma avec des amis. 
        Très bientôt, <span class="b1-v-fp">je vais assister</span> à un atelier d'échange linguistique local, et plus tard, quand mon apprentissage sera consolidé, <span class="b1-v-fs">je partirai</span> en voyage en Corée du Sud où <span class="b1-v-fs">je pratiquerai</span> la langue directement sur place.
      </div>
    </div>
  </div>

  <!-- SECTION 2 -->
  <div class="b1-sec-card">
    <div class="b1-sec-header">
      <h5 class="b1-sec-title">
        <span class="ms ms-sm" style="color:#EC4899">badge</span>
        <span>Section 2 : « Parlez-moi de vous » — Présentations professionnelles (Passé Composé & Imparfait)</span>
      </h5>
      <span class="b1-badge b1-badge-tenses" style="background:color-mix(in srgb, #EC4899 18%, var(--surface-1));color:#EC4899;border-color:#EC4899;">Passé Composé & Imparfait Uniquement</span>
    </div>
    <div class="b1-text-body">
      Voici comment répondre de façon naturelle et structurée à la question classique <em>« Parlez-moi de vous / Présentez-vous »</em> lors d'un entretien d'embauche ou d'une rencontre professionnelle, pour votre profil ainsi que pour les autres métiers étudiés :

      <div class="b1-duty-grid" style="margin-top:0.75rem;">
        <!-- 1. Développeur de logiciels / Ingénieur mobile -->
        <div class="b1-duty-card" style="border-left:3.5px solid #6366F1;">
          <h6><span class="ms ms-sm" style="color:#6366F1">laptop_mac</span> 1. Développeur de logiciels / Ingénieur mobile (Mon profil)</h6>
          <p>
            « Avant de m’installer au Québec, <span class="b1-v-imp">je vivais</span> dans mon pays d'origine où <span class="b1-v-imp">je travaillais</span> comme ingénieur mobile pour une entreprise technologique innovante. 
            À cette époque, notre équipe <span class="b1-v-imp">développait</span> des applications utilisées par des milliers de personnes, et nous <span class="b1-v-imp">collaborions</span> au quotidien selon les méthodes agiles.<br><br>
            Pendant ce parcours, <span class="b1-v-pc">j’ai obtenu</span> mon diplôme en génie informatique, <span class="b1-v-pc">j’ai conçu</span> des architectures complètes pour Android et iOS, et <span class="b1-v-pc">j’ai optimisé</span> les performances d'un produit phare, ce qui <span class="b1-v-pc">a réduit</span> le temps de chargement de 50 %. 
            Récemment, <span class="b1-v-pc">j’ai pris</span> la décision de venir à Montréal : <span class="b1-v-pc">j’ai appris</span> le français avec assiduité et <span class="b1-v-pc">j’ai franchi</span> une nouvelle étape passionnante dans ma carrière. »
          </p>
        </div>

        <!-- 2. Enseignant -->
        <div class="b1-duty-card" style="border-left:3.5px solid #3B82F6;">
          <h6><span class="ms ms-sm" style="color:#3B82F6">school</span> 2. L'enseignant / Le professeur</h6>
          <p>
            « Dans mon pays d'origine, <span class="b1-v-imp">j’enseignais</span> dans une école secondaire réputée où <span class="b1-v-imp">j’accompagnais</span> des classes nombreuses aux profils variés. 
            Chaque semaine, <span class="b1-v-imp">je préparais</span> des leçons interactives, <span class="b1-v-imp">j’encadrais</span> des ateliers d'écriture et <span class="b1-v-imp">j’évaluais</span> les progrès individuels de mes élèves avec patience et bienveillance.<br><br>
            Durant cette expérience, <span class="b1-v-pc">j’ai obtenu</span> mon brevet d'enseignement, <span class="b1-v-pc">j’ai mis</span> en place un programme d'aide aux devoirs qui <span class="b1-v-pc">a fait</span> baisser le taux d'échec de 30 %, et <span class="b1-v-pc">j’ai organisé</span> un grand concours interscolaire récompensé par la direction. 
            Puis, <span class="b1-v-pc">j’ai choisi</span> de m'établir au Québec pour apporter mon expertise pédagogique dans un nouveau milieu éducatif. »
          </p>
        </div>

        <!-- 3. Médecin -->
        <div class="b1-duty-card" style="border-left:3.5px solid #10B981;">
          <h6><span class="ms ms-sm" style="color:#10B981">medical_services</span> 3. Le médecin</h6>
          <p>
            « Avant mon arrivée ici, <span class="b1-v-imp">j’exerçais</span> la médecine générale dans un centre hospitalier urbain à forte fréquentation. 
            Le rythme <span class="b1-v-imp">était</span> particulièrement exigeant : chaque jour, <span class="b1-v-imp">je recevais</span> des dizaines de patients, <span class="b1-v-imp">je posais</span> des diagnostics complexes et <span class="b1-v-imp">je collaborais</span> étroitement avec le personnel soignant lors des urgences.<br><br>
            Au fil de mes années de pratique, <span class="b1-v-pc">j’ai soigné</span> des centaines de personnes, <span class="b1-v-pc">j’ai géré</span> avec succès des cas critiques aux soins intensifs et <span class="b1-v-pc">j’ai complété</span> une formation spécialisée en santé publique. 
            Enfin, <span class="b1-v-pc">j’ai réussi</span> les étapes de reconnaissance d'équivalence professionnelle pour pouvoir continuer d'exercer ma vocation médicale au Québec. »
          </p>
        </div>

        <!-- 4. Chef cuisinier -->
        <div class="b1-duty-card" style="border-left:3.5px solid #F59E0B;">
          <h6><span class="ms ms-sm" style="color:#F59E0B">restaurant</span> 4. Le chef cuisinier</h6>
          <p>
            « Pendant près de huit ans, <span class="b1-v-imp">je dirigeais</span> les cuisines d’un restaurant traditionnel très fréquenté. 
            Mon quotidien <span class="b1-v-imp">tournait</span> autour des saveurs et de la rigueur : chaque matin, <span class="b1-v-imp">je sélectionnais</span> les meilleurs produits locaux au marché, <span class="b1-v-imp">je formais</span> les commis et nous <span class="b1-v-imp">assurions</span> le service avec passion.<br><br>
            Au cours de cette belle carrière, <span class="b1-v-pc">j’ai créé</span> une carte gastronomique originale qui <span class="b1-v-pc">a attiré</span> une clientèle fidèle, <span class="b1-v-pc">j’ai remporté</span> un prix culinaire régional et <span class="b1-v-pc">j’ai modernisé</span> les protocoles d'hygiène de l'établissement. 
            Attiré par la richesse de la gastronomie québécoise et montréalaise, <span class="b1-v-pc">j’ai décidé</span> de relever de nouveaux défis culinaires ici. »
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 3 -->
  <div class="b1-sec-card">
    <div class="b1-sec-header">
      <h5 class="b1-sec-title">
        <span class="ms ms-sm" style="color:#8B5CF6">rule</span>
        <span>Section 3 : Mes tâches professionnelles et l'expression de l'obligation</span>
      </h5>
      <span class="b1-badge b1-badge-tenses" style="background:color-mix(in srgb, #8B5CF6 18%, var(--surface-1));color:#8B5CF6;border-color:#8B5CF6;">Il faut que + Subjonctif · Il faut + Infinitif · Avoir besoin de</span>
    </div>
    <div class="b1-text-body">
      Dans mon métier de développeur mobile, la rigueur technique et la communication sont indispensables au quotidien. Voici 3 tâches clés de mon domaine ainsi que les exigences de quelques autres professions :

      <div class="b1-duty-grid">
        <div class="b1-duty-card">
          <h6><span class="ms ms-sm" style="color:#6366F1">code</span> 1. Développement et écriture du code</h6>
          <p>Pour concevoir une fonctionnalité fiable, <strong>il faut que je <span class="b1-v-subj">comprenne</span></strong> parfaitement les spécifications techniques et <strong>il faut <span class="b1-v-pres">respecter</span></strong> les normes de propreté du code. Pour cette mission, le développeur <strong>a besoin d’</strong>un ordinateur puissant, d’environnements de développement adaptés (IDE) et d’une solide maîtrise des algorithmes.</p>
        </div>

        <div class="b1-duty-card">
          <h6><span class="ms ms-sm" style="color:#10B981">bug_report</span> 2. Débogage et résolution d'anomalies</h6>
          <p>Lorsqu'une erreur survient en production, <strong>il faut qu'on <span class="b1-v-subj">intervienne</span></strong> rapidement pour isoler le bogue, et <strong>il faut <span class="b1-v-pres">tester</span></strong> minutieusement chaque correctif avant le déploiement. L’ingénieur <strong>a besoin d’</strong>outils de traçage et de diagnostic en temps réel, de patience et d'un bon esprit d'analyse.</p>
        </div>

        <div class="b1-duty-card">
          <h6><span class="ms ms-sm" style="color:#F59E0B">forum</span> 3. Revue de code et collaboration d’équipe</h6>
          <p>Avant d’intégrer un changement dans le projet, <strong>il faut que les collègues <span class="b1-v-subj">fassent</span></strong> une revue de code rigoureuse et <strong>il faut <span class="b1-v-pres">échanger</span></strong> avec bienveillance. Pour réussir, l'équipe <strong>a besoin de</strong> plateformes de gestion de versions (Git) et de fortes compétences en communication.</p>
        </div>
      </div>

      <div style="margin-top:1rem;border-top:1px solid var(--border);padding-top:0.85rem;">
        <h6 style="margin:0 0 0.5rem 0;font-size:0.95rem;font-weight:800;color:var(--text-primary);display:flex;align-items:center;gap:0.35rem;">
          <span class="ms ms-sm" style="color:#EC4899">diversity_3</span> Exemples comparatifs dans d'autres métiers :
        </h6>
        <div class="b1-duty-grid">
          <div class="b1-duty-card">
            <h6><span class="ms ms-sm" style="color:#3B82F6">school</span> L'enseignant</h6>
            <p>Pour transmettre les connaissances, <strong>il faut que le professeur <span class="b1-v-subj">soit</span></strong> patient et à l’écoute de ses élèves, et <strong>il faut <span class="b1-v-pres">préparer</span></strong> ses leçons à l'avance. Il <strong>a besoin de</strong> manuels pédagogiques, d’un tableau et d’une grande aisance relationnelle.</p>
          </div>
          <div class="b1-duty-card">
            <h6><span class="ms ms-sm" style="color:#10B981">medical_services</span> Le médecin</h6>
            <p>Pour soigner les patients, <strong>il faut que le médecin <span class="b1-v-subj">prenne</span></strong> le temps de poser un diagnostic précis et <strong>il faut <span class="b1-v-pres">agir</span></strong> rapidement en cas d’urgence. Il <strong>a besoin d’</strong>un stéthoscope, de matériel médical stérilisé et de solides compétences cliniques.</p>
          </div>
          <div class="b1-duty-card">
            <h6><span class="ms ms-sm" style="color:#F59E0B">restaurant</span> Le cuisinier</h6>
            <p>Pour régaler les clients, <strong>il faut que le chef <span class="b1-v-subj">choisisse</span></strong> des ingrédients frais chaque matin et <strong>il faut <span class="b1-v-pres">respecter</span></strong> les règles d'hygiène. Il <strong>a besoin de</strong> couteaux de qualité, d'ingrédients de saison et d’une grande créativité culinaire.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }
  ]
});

// Interactive Widget Logic for Section 30
(function() {
  const dataset = [
    {
      orig: "Je dois regarder les prix avant d'acheter.",
      en: "I have to check the prices before buying.",
      correct: "Il faut que je regarde les prix avant d'acheter.",
      options: [
        "Il faut que je regarde les prix avant d'acheter.",
        "Il faut que je regardes les prix avant d'acheter.",
        "Il faut que je regarder les prix avant d'acheter.",
        "Il faut que je regarderais les prix avant d'acheter."
      ],
      explain: "With 'je', regular -er verbs take ending -e in the subjunctive: 'que je regarde'."
    },
    {
      orig: "Tu dois prendre l'ascenseur.",
      en: "You need to take the elevator.",
      correct: "Il faut que tu prennes l'ascenseur.",
      options: [
        "Il faut que tu prennes l'ascenseur.",
        "Il faut que tu prends l'ascenseur.",
        "Il faut que tu prendrais l'ascenseur.",
        "Il faut que tu prenes l'ascenseur."
      ],
      explain: "Prendre derives its subjunctive singular stem from 'ils prennent': 'prenn-' + '-es' ➔ 'tu prennes'."
    },
    {
      orig: "Il doit partir à huit heures.",
      en: "He has to leave at eight o'clock.",
      correct: "Il faut qu'il parte à huit heures.",
      options: [
        "Il faut qu'il parte à huit heures.",
        "Il faut qu'il part à huit heures.",
        "Il faut qu'il partir à huit heures.",
        "Il faut qu'il partira à huit heures."
      ],
      explain: "Partir takes stem 'part-' (from ils partent) + '-e' ➔ 'qu'il parte'."
    },
    {
      orig: "On doit conduire prudemment.",
      en: "We must drive carefully.",
      correct: "Il faut qu'on conduise prudemment.",
      options: [
        "Il faut qu'on conduise prudemment.",
        "Il faut qu'on conduit prudemment.",
        "Il faut qu'on conduira prudemment.",
        "Il faut qu'on conduisait prudemment."
      ],
      explain: "Conduire forms its subjunctive from 'ils conduisent': stem 'conduis-' + '-e' ➔ 'qu'on conduise'."
    },
    {
      orig: "Vous devez vous rendre au bureau.",
      en: "You must go to the office.",
      correct: "Il faut que vous vous rendiez au bureau.",
      options: [
        "Il faut que vous vous rendiez au bureau.",
        "Il faut que vous vous rendez au bureau.",
        "Il faut que vous vous rendrez au bureau.",
        "Il faut que vous rendiez au bureau."
      ],
      explain: "Reflexive pronoun 'vous' is placed right before the subjunctive verb 'rendiez' (-iez ending for vous)."
    },
    {
      orig: "Il doit boire de l'eau.",
      en: "He has to drink water.",
      correct: "Il faut qu'il boive de l'eau.",
      options: [
        "Il faut qu'il boive de l'eau.",
        "Il faut qu'il boit de l'eau.",
        "Il faut qu'il buve de l'eau.",
        "Il faut qu'il boive de l'eau."
      ],
      explain: "Boire uses the ils stem 'boiv-' for singular forms: 'qu'il boive'."
    },
    {
      orig: "Sophie doit finir son travail.",
      en: "Sophie must finish her work.",
      correct: "Il faut que Sophie finisse son travail.",
      options: [
        "Il faut que Sophie finisse son travail.",
        "Il faut que Sophie finit son travail.",
        "Il faut que Sophie finira son travail.",
        "Il faut que Sophie finir son travail."
      ],
      explain: "Finir uses the regular -iss- stem from 'ils finissent': 'finiss-' + '-e' ➔ 'finisse'."
    },
    {
      orig: "Vous devez appeler le service client.",
      en: "You must call customer service.",
      correct: "Il faut que vous appeliez le service client.",
      options: [
        "Il faut que vous appeliez le service client.",
        "Il faut que vous appellez le service client.",
        "Il faut que vous appeleriez le service client.",
        "Il faut que vous appelleriez le service client."
      ],
      explain: "For 'nous' and 'vous', appeler keeps a single 'l': 'que nous appelions, que vous appeliez'."
    }
  ];

  let currentIndex = 0;
  let score = 0;
  let answered = false;

  function renderIfqQuestion() {
    const origEl = document.getElementById('ifq-orig');
    const enEl = document.getElementById('ifq-en');
    const badgeEl = document.getElementById('ifq-badge');
    const optsEl = document.getElementById('ifq-options');
    const fbEl = document.getElementById('ifq-feedback');
    const nextBtn = document.getElementById('ifq-next-btn');
    const scoreEl = document.getElementById('ifq-score');

    if (!origEl || !optsEl) return;

    answered = false;
    if (fbEl) {
      fbEl.className = 'ifq-feedback-box';
      fbEl.innerHTML = '';
    }
    if (nextBtn) nextBtn.style.display = 'none';

    const item = dataset[currentIndex % dataset.length];
    origEl.textContent = item.orig;
    enEl.textContent = item.en;
    if (badgeEl) {
      badgeEl.textContent = `Question ${(currentIndex % dataset.length) + 1} of ${dataset.length} · Transform Devoir ➔ Il faut que`;
    }
    if (scoreEl) {
      scoreEl.textContent = `Score: ${score} / ${currentIndex}`;
    }

    // Shuffle options
    const shuffled = [...new Set(item.options)].sort(() => Math.random() - 0.5);
    optsEl.innerHTML = shuffled.map((opt, i) => `
      <button class="ifq-opt-btn" onclick="window.checkIfqAnswer(this, '${opt.replace(/'/g, "\\'")}')">
        <span class="ms ms-sm" style="font-size:1rem;color:var(--text-muted)">radio_button_unchecked</span>
        <span>${opt}</span>
      </button>
    `).join('');
  }

  window.checkIfqAnswer = function(btnEl, selectedText) {
    if (answered) return;
    answered = true;

    const item = dataset[currentIndex % dataset.length];
    const isCorrect = selectedText === item.correct;
    const fbEl = document.getElementById('ifq-feedback');
    const nextBtn = document.getElementById('ifq-next-btn');
    const scoreEl = document.getElementById('ifq-score');

    if (isCorrect) {
      score++;
      btnEl.classList.add('correct');
      const icon = btnEl.querySelector('.ms');
      if (icon) icon.textContent = 'check_circle';
      if (fbEl) {
        fbEl.className = 'ifq-feedback-box correct show';
        fbEl.innerHTML = `<strong>✓ Excellent !</strong> ${item.explain}`;
      }
    } else {
      btnEl.classList.add('wrong');
      const icon = btnEl.querySelector('.ms');
      if (icon) icon.textContent = 'cancel';
      // Highlight the correct one
      const allBtns = document.querySelectorAll('.ifq-opt-btn');
      allBtns.forEach(b => {
        if (b.textContent.trim().includes(item.correct)) {
          b.classList.add('correct');
          const ci = b.querySelector('.ms');
          if (ci) ci.textContent = 'check_circle';
        }
      });
      if (fbEl) {
        fbEl.className = 'ifq-feedback-box wrong show';
        fbEl.innerHTML = `<strong>✗ Pas tout à fait.</strong> ${item.explain}`;
      }
    }

    currentIndex++;
    if (scoreEl) {
      scoreEl.textContent = `Score: ${score} / ${currentIndex}`;
    }
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
    }
  };

  window.nextIfqQuestion = function() {
    renderIfqQuestion();
  };

  // Model verbs data for the graphical step-by-step builder
  const subjModels = {
    regarder: {
      infinitive: "regarder",
      group: "-ER verb",
      ilsForm: "ils regardent",
      stem: "regard-",
      vowel: false,
      forms: [
        { pron: "que je", stem: "regard", end: "-e", final: "que je regarde" },
        { pron: "que tu", stem: "regard", end: "-es", final: "que tu regardes" },
        { pron: "qu'il / elle", stem: "regard", end: "-e", final: "qu'il regarde" },
        { pron: "que nous", stem: "regard", end: "-ions", final: "que nous regardions" },
        { pron: "que vous", stem: "regard", end: "-iez", final: "que vous regardiez" },
        { pron: "qu'ils / elles", stem: "regard", end: "-ent", final: "qu'ils regardent" }
      ]
    },
    finir: {
      infinitive: "finir",
      group: "-IR verb (2nd group)",
      ilsForm: "ils finissent",
      stem: "finiss-",
      vowel: false,
      forms: [
        { pron: "que je", stem: "finiss", end: "-e", final: "que je finisse" },
        { pron: "que tu", stem: "finiss", end: "-es", final: "que tu finisses" },
        { pron: "qu'il / elle", stem: "finiss", end: "-e", final: "qu'elle finisse" },
        { pron: "que nous", stem: "finiss", end: "-ions", final: "que nous finissions" },
        { pron: "que vous", stem: "finiss", end: "-iez", final: "que vous finissiez" },
        { pron: "qu'ils / elles", stem: "finiss", end: "-ent", final: "qu'elles finissent" }
      ]
    },
    partir: {
      infinitive: "partir",
      group: "-IR verb (3rd group)",
      ilsForm: "ils partent",
      stem: "part-",
      vowel: false,
      forms: [
        { pron: "que je", stem: "part", end: "-e", final: "que je parte" },
        { pron: "que tu", stem: "part", end: "-es", final: "que tu partes" },
        { pron: "qu'il / elle", stem: "part", end: "-e", final: "qu'il parte" },
        { pron: "que nous", stem: "part", end: "-ions", final: "que nous partions" },
        { pron: "que vous", stem: "part", end: "-iez", final: "que vous partiez" },
        { pron: "qu'ils / elles", stem: "part", end: "-ent", final: "qu'ils partent" }
      ]
    },
    attendre: {
      infinitive: "attendre",
      group: "-RE verb",
      ilsForm: "ils attendent",
      stem: "attend-",
      vowel: true,
      forms: [
        { pron: "que j'", stem: "attend", end: "-e", final: "que j'attende" },
        { pron: "que tu", stem: "attend", end: "-es", final: "que tu attendes" },
        { pron: "qu'il / elle", stem: "attend", end: "-e", final: "qu'il attende" },
        { pron: "que nous", stem: "attend", end: "-ions", final: "que nous attendions" },
        { pron: "que vous", stem: "attend", end: "-iez", final: "que vous attendiez" },
        { pron: "qu'ils / elles", stem: "attend", end: "-ent", final: "qu'ils attendent" }
      ]
    },
    lire: {
      infinitive: "lire",
      group: "Irregular verb",
      ilsForm: "ils lisent",
      stem: "lis-",
      vowel: false,
      forms: [
        { pron: "que je", stem: "lis", end: "-e", final: "que je lise" },
        { pron: "que tu", stem: "lis", end: "-es", final: "que tu lises" },
        { pron: "qu'il / elle", stem: "lis", end: "-e", final: "qu'il lise" },
        { pron: "que nous", stem: "lis", end: "-ions", final: "que nous lisions" },
        { pron: "que vous", stem: "lis", end: "-iez", final: "que vous lisiez" },
        { pron: "qu'ils / elles", stem: "lis", end: "-ent", final: "qu'ils lisent" }
      ]
    }
  };

  let activeSubjModelKey = 'regarder';

  function renderSubjModelVisualizer() {
    const model = subjModels[activeSubjModelKey];
    if (!model) return;

    const ilsEl = document.getElementById('stage-ils-text');
    const stemEl = document.getElementById('stage-stem-text');
    const resultEl = document.getElementById('stage-result-text');
    const gridEl = document.getElementById('subj-builder-grid');

    if (ilsEl) ilsEl.textContent = model.ilsForm;
    if (stemEl) stemEl.textContent = `Stem: ${model.stem}`;
    if (resultEl) resultEl.textContent = `${model.infinitive} (Subjonctif)`;

    if (gridEl) {
      gridEl.innerHTML = model.forms.map(f => `
        <div class="b-grid-item">
          <span class="b-pron">${f.pron}</span>
          <span>
            <span class="b-stem">${f.stem}</span><span class="b-end">${f.end}</span>
          </span>
          <span class="b-final">${f.final}</span>
        </div>
      `).join('');
    }

    // Update active tab buttons
    const btns = document.querySelectorAll('.builder-tab-btn');
    btns.forEach(b => {
      const isMatch = b.getAttribute('onclick') && b.getAttribute('onclick').includes(activeSubjModelKey);
      b.classList.toggle('active', !!isMatch);
    });
  }

  window.selectSubjModelVerb = function(verbKey) {
    if (subjModels[verbKey]) {
      activeSubjModelKey = verbKey;
      renderSubjModelVisualizer();
    }
  };

  window.initSubjModelVisualizer = function() {
    renderSubjModelVisualizer();
  };

  window.initIfqWidget = function() {
    renderIfqQuestion();
    renderSubjModelVisualizer();
  };

  // Immediate initialize if DOM is ready
  if (document.getElementById('ifq-widget')) {
    renderIfqQuestion();
  }
  if (document.getElementById('subj-builder-grid')) {
    renderSubjModelVisualizer();
  }
})();

