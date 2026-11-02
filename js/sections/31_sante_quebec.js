// Section 31: Santé et Bien-être au Québec (sante_quebec)
window.sectionsData = window.sectionsData || [];
window.sectionsData.push({
  "id": "sante_quebec",
  "icon": "medical_services",
  "title": "Santé et Système Médical",
  "subtitle": "Navigating Healthcare, Symptoms & Medical Consultations in Quebec",
  "color": "#059669",
  "content": [
    {
      "rule": "1. Le système de santé québécois (Vocabulaire institutionnel)",
      "english": "Essential institutions, cards, and terms for accessing health services across Montreal and Quebec.",
      "table": {
        "headers": [
          "Terme québécois",
          "Explication / Équivalent",
          "English"
        ],
        "rows": [
          ["la carte RAMQ / carte soleil", "Carte d'assurance maladie du Québec", "Quebec health insurance card"],
          ["le CLSC", "Centre local de services communautaires", "Local community health center"],
          ["le GMF", "Groupe de médecine de famille (clinique réseau)", "Family medicine clinic / group"],
          ["Info-Santé 811", "Ligne téléphonique d'assistance infirmière 24/7", "811 Health nurse advice hotline"],
          ["le sans rendez-vous", "Clinique d'urgence mineure sans rendez-vous préalable", "Walk-in clinic"],
          ["l'urgence (f.)", "Département d'urgence à l'hôpital", "Hospital emergency room (ER)"],
          ["une ordonnance / une prescription", "Document du médecin pour obtenir des médicaments", "Medical prescription"],
          ["le pharmacien / la pharmacienne", "Professionnel qui prépare et délivre les remèdes", "Pharmacist"]
        ]
      },
      "tip": "🍁 Au Québec, la carte d'assurance maladie est familièrement appelée la « carte soleil » en raison du dessin de soleil levant qui y figurait historiquement. Le 811 est gratuit et accessible 24 heures sur 24."
    },
    {
      "rule": "2. Exprimer la douleur et les symptômes physiques",
      "english": "Master idiomatic structures to state what hurts, where it hurts, and describe bodily sensations.",
      "customHtml": `
<style>
.body-diagram-card {
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.25rem;
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;
}
.body-diagram-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.75rem;
}
.body-diagram-title {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-primary);
  flex-wrap: wrap;
}
.body-diagram-sub {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0.25rem 0 0 0;
  line-height: 1.4;
}
.body-layout-wrap {
  display: grid;
  grid-template-columns: minmax(320px, 460px) 1fr;
  gap: 1.35rem;
  align-items: start;
  max-width: 100%;
}
@media (max-width: 890px) {
  .body-layout-wrap {
    grid-template-columns: 1fr;
  }
}
.body-svg-container {
  background: radial-gradient(circle at 50% 35%, color-mix(in srgb, var(--primary) 7%, var(--surface-1)), var(--surface-1));
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 0.75rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);
}
.body-svg {
  width: 100%;
  max-width: 520px;
  height: auto;
  display: block;
  user-select: none;
}
.body-target-point {
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.body-target-point text {
  font-family: "DM Sans", -apple-system, sans-serif;
  letter-spacing: 0.01em;
  transition: fill 0.15s ease, font-weight 0.15s ease;
}
.body-target-point:hover text {
  fill: #059669;
  font-weight: 800;
}
.body-target-point:hover circle.point-glow {
  fill: #059669;
  opacity: 0.6;
  r: 13;
}
.body-target-point:hover circle.point-core {
  fill: #10B981;
  r: 5.5;
}
.body-target-point.active text {
  fill: #6366F1;
  font-weight: 800;
}
.body-target-point.active circle.point-glow {
  fill: #6366F1;
  opacity: 0.75;
  r: 15;
}
.body-target-point.active circle.point-core {
  fill: #8B5CF6;
  r: 6.5;
}

.body-info-panel {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  min-width: 0;
  max-width: 100%;
}
.body-detail-box {
  background: var(--surface-1);
  border: 1.5px solid #059669;
  border-radius: var(--r-sm);
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.09);
  overflow-wrap: anywhere;
  word-break: break-word;
}
.detail-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 800;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  width: fit-content;
}
.detail-fr {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.detail-en {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
.detail-phrase {
  background: var(--surface-2);
  border-left: 3.5px solid #059669;
  padding: 0.7rem 0.9rem;
  border-radius: 0 var(--r-xs) var(--r-xs) 0;
  font-size: 0.94rem;
  color: var(--text-primary);
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.body-parts-quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 0.45rem;
  max-height: 330px;
  overflow-y: auto;
  padding-right: 0.35rem;
}
.body-part-chip {
  background: var(--surface-1);
  border: 1px solid var(--border);
  padding: 0.45rem 0.65rem;
  border-radius: var(--r-xs);
  font-size: 0.81rem;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.body-part-chip:hover {
  border-color: #059669;
  background: color-mix(in srgb, #059669 10%, var(--surface-1));
  transform: translateY(-1px);
}
.body-part-chip.active {
  background: #059669;
  color: #fff;
  border-color: #059669;
}
.chip-gender {
  font-size: 0.66rem;
  font-weight: 800;
  opacity: 0.8;
  text-transform: uppercase;
  flex-shrink: 0;
  padding: 0.05rem 0.25rem;
  background: color-mix(in srgb, var(--text-secondary) 15%, transparent);
  border-radius: 3px;
}
.body-part-chip.active .chip-gender {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

[data-style="neo-brutalist"] .body-diagram-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .body-svg-container {
  border: 2px solid var(--neo-border);
}
[data-style="neo-brutalist"] .body-detail-box {
  border: 2px solid var(--neo-border);
  box-shadow: 3px 3px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .body-part-chip {
  border: 1.5px solid var(--neo-border);
}
[data-style="neo-brutalist"] .body-part-chip.active {
  box-shadow: 2px 2px 0px var(--neo-border);
}
</style>

<div class="body-diagram-card">
  <div class="body-diagram-header">
    <div>
      <h5 class="body-diagram-title">
        <span class="ms ms-sm" style="color:#059669">accessibility_new</span>
        <span>Schéma Anatomique Interactif : Les Parties du Corps Humain</span>
      </h5>
      <p class="body-diagram-sub">Cliquez sur un point du corps ou sur un bouton pour voir la formule médicale « Avoir mal à... »</p>
    </div>
    <span class="detail-tag" style="background:color-mix(in srgb, #059669 15%, var(--surface-1));padding:0.25rem 0.6rem;border-radius:var(--r-xs);border:1px solid #059669;">
      24 parties anatomiques avec illustration médicale
    </span>
  </div>

  <div class="body-layout-wrap">
    <!-- SVG Interactive Human Body Diagram -->
    <div class="body-svg-container">
      <svg viewBox="0 0 640 1020" class="body-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="body-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.2)"/>
          </filter>
        </defs>

        <!-- High-Resolution Anatomical Medical Illustration of Human Body (Exact 400x1000 bounds) -->
        <g filter="url(#body-shadow)">
          <image id="sante-body-img" href="assets/images/human_body_anatomy.png" x="120" y="10" width="400" height="1000" preserveAspectRatio="none" />
        </g>

        <!-- Anatomic Indicator Guidelines & Connectors -->
        <g stroke="color-mix(in srgb, var(--text-secondary) 45%, transparent)" stroke-width="1.2" stroke-dasharray="3,3">
          <!-- Left side connectors (line from cx,cy to x=115) -->
          <line x1="320" y1="52" x2="115" y2="52"/>
          <line x1="320" y1="78" x2="115" y2="78"/>
          <line x1="309" y1="97" x2="115" y2="97"/>
          <line x1="320" y1="160" x2="115" y2="160"/>
          <line x1="230" y1="218" x2="115" y2="218"/>
          <line x1="212" y1="275" x2="115" y2="275"/>
          <line x1="320" y1="375" x2="115" y2="375"/>
          <line x1="198" y1="420" x2="115" y2="420"/>
          <line x1="280" y1="510" x2="115" y2="510"/>
          <line x1="290" y1="625" x2="115" y2="625"/>
          <line x1="290" y1="715" x2="115" y2="715"/>
          <line x1="285" y1="875" x2="115" y2="875"/>

          <!-- Right side connectors (line from cx,cy to x=525) -->
          <line x1="335" y1="58" x2="525" y2="58"/>
          <line x1="356" y1="104" x2="525" y2="104"/>
          <line x1="320" y1="107" x2="525" y2="107"/>
          <line x1="320" y1="128" x2="525" y2="128"/>
          <line x1="328" y1="175" x2="525" y2="175"/>
          <line x1="345" y1="255" x2="525" y2="255"/>
          <line x1="330" y1="305" x2="525" y2="305"/>
          <line x1="428" y1="320" x2="525" y2="320"/>
          <line x1="440" y1="480" x2="525" y2="480"/>
          <line x1="375" y1="435" x2="525" y2="435"/>
          <line x1="335" y1="385" x2="525" y2="385"/>
          <line x1="355" y1="825" x2="525" y2="825"/>
        </g>

        <!-- Interactive Anatomical Target Points (24 Locations accurately aligned) -->
        <!-- Left Column Group -->
        <g class="body-target-point active" id="pt-tete" onclick="window.selectBodyPart('tete')">
          <circle cx="320" cy="52" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="320" cy="52" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="56" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">la tête</text>
        </g>

        <g class="body-target-point" id="pt-front" onclick="window.selectBodyPart('front')">
          <circle cx="320" cy="78" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="320" cy="78" r="4.5" class="point-core" fill="#059669"/>
          <text x="110" y="82" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le front</text>
        </g>

        <g class="body-target-point" id="pt-yeux" onclick="window.selectBodyPart('yeux')">
          <circle cx="309" cy="97" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="309" cy="97" r="4.5" class="point-core" fill="#059669"/>
          <text x="110" y="101" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">les yeux</text>
        </g>

        <g class="body-target-point" id="pt-gorge" onclick="window.selectBodyPart('gorge')">
          <circle cx="320" cy="160" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="320" cy="160" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="164" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">la gorge</text>
        </g>

        <g class="body-target-point" id="pt-epaule" onclick="window.selectBodyPart('epaule')">
          <circle cx="230" cy="218" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="230" cy="218" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="222" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">l'épaule</text>
        </g>

        <g class="body-target-point" id="pt-bras" onclick="window.selectBodyPart('bras')">
          <circle cx="212" cy="275" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="212" cy="275" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="279" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le bras</text>
        </g>

        <g class="body-target-point" id="pt-ventre" onclick="window.selectBodyPart('ventre')">
          <circle cx="320" cy="375" r="11" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="320" cy="375" r="5.5" class="point-core" fill="#059669"/>
          <text x="110" y="379" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le ventre</text>
        </g>

        <g class="body-target-point" id="pt-poignet" onclick="window.selectBodyPart('poignet')">
          <circle cx="198" cy="420" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="198" cy="420" r="4.5" class="point-core" fill="#059669"/>
          <text x="110" y="424" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le poignet</text>
        </g>

        <g class="body-target-point" id="pt-cuisse" onclick="window.selectBodyPart('cuisse')">
          <circle cx="280" cy="510" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="280" cy="510" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="514" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">la cuisse</text>
        </g>

        <g class="body-target-point" id="pt-genou" onclick="window.selectBodyPart('genou')">
          <circle cx="290" cy="625" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="290" cy="625" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="629" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le genou</text>
        </g>

        <g class="body-target-point" id="pt-mollet" onclick="window.selectBodyPart('mollet')">
          <circle cx="290" cy="715" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="290" cy="715" r="4.8" class="point-core" fill="#059669"/>
          <text x="110" y="719" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le mollet</text>
        </g>

        <g class="body-target-point" id="pt-pied" onclick="window.selectBodyPart('pied')">
          <circle cx="285" cy="875" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="285" cy="875" r="5" class="point-core" fill="#059669"/>
          <text x="110" y="879" text-anchor="end" font-size="12" font-weight="700" fill="var(--text-primary)">le pied</text>
        </g>

        <!-- Right Column Group -->
        <g class="body-target-point" id="pt-cheveux" onclick="window.selectBodyPart('cheveux')">
          <circle cx="335" cy="58" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="335" cy="58" r="4.5" class="point-core" fill="#059669"/>
          <text x="530" y="62" font-size="12" font-weight="700" fill="var(--text-primary)">les cheveux</text>
        </g>

        <g class="body-target-point" id="pt-oreilles" onclick="window.selectBodyPart('oreilles')">
          <circle cx="356" cy="104" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="356" cy="104" r="4.5" class="point-core" fill="#059669"/>
          <text x="530" y="108" font-size="12" font-weight="700" fill="var(--text-primary)">les oreilles</text>
        </g>

        <g class="body-target-point" id="pt-nez" onclick="window.selectBodyPart('nez')">
          <circle cx="320" cy="107" r="8.5" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="320" cy="107" r="4.2" class="point-core" fill="#059669"/>
          <text x="530" y="111" font-size="12" font-weight="700" fill="var(--text-primary)">le nez</text>
        </g>

        <g class="body-target-point" id="pt-bouche" onclick="window.selectBodyPart('bouche')">
          <circle cx="320" cy="128" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="320" cy="128" r="4.5" class="point-core" fill="#059669"/>
          <text x="530" y="132" font-size="12" font-weight="700" fill="var(--text-primary)">la bouche / dents</text>
        </g>

        <g class="body-target-point" id="pt-cou" onclick="window.selectBodyPart('cou')">
          <circle cx="328" cy="175" r="9" class="point-glow" fill="#059669" opacity="0.35"/>
          <circle cx="328" cy="175" r="4.5" class="point-core" fill="#059669"/>
          <text x="530" y="179" font-size="12" font-weight="700" fill="var(--text-primary)">le cou / la nuque</text>
        </g>

        <g class="body-target-point" id="pt-poitrine" onclick="window.selectBodyPart('poitrine')">
          <circle cx="345" cy="255" r="10" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="345" cy="255" r="5" class="point-core" fill="#059669"/>
          <text x="530" y="259" font-size="12" font-weight="700" fill="var(--text-primary)">la poitrine / cœur</text>
        </g>

        <g class="body-target-point" id="pt-poumons" onclick="window.selectBodyPart('poumons')">
          <circle cx="330" cy="305" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="330" cy="305" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="309" font-size="12" font-weight="700" fill="var(--text-primary)">les poumons</text>
        </g>

        <g class="body-target-point" id="pt-coude" onclick="window.selectBodyPart('coude')">
          <circle cx="428" cy="320" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="428" cy="320" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="324" font-size="12" font-weight="700" fill="var(--text-primary)">le coude</text>
        </g>

        <g class="body-target-point" id="pt-main" onclick="window.selectBodyPart('main')">
          <circle cx="440" cy="480" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="440" cy="480" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="484" font-size="12" font-weight="700" fill="var(--text-primary)">la main / doigts</text>
        </g>

        <g class="body-target-point" id="pt-hanche" onclick="window.selectBodyPart('hanche')">
          <circle cx="375" cy="435" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="375" cy="435" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="439" font-size="12" font-weight="700" fill="var(--text-primary)">la hanche</text>
        </g>

        <g class="body-target-point" id="pt-dos" onclick="window.selectBodyPart('dos')">
          <circle cx="335" cy="385" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="335" cy="385" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="389" font-size="12" font-weight="700" fill="var(--text-primary)">le dos</text>
        </g>

        <g class="body-target-point" id="pt-cheville" onclick="window.selectBodyPart('cheville')">
          <circle cx="355" cy="825" r="9.5" class="point-glow" fill="#059669" opacity="0.4"/>
          <circle cx="355" cy="825" r="4.8" class="point-core" fill="#059669"/>
          <text x="530" y="829" font-size="12" font-weight="700" fill="var(--text-primary)">la cheville</text>
        </g>
      </svg>
    </div>

    <!-- Active Details Panel -->
    <div class="body-info-panel">
      <div class="body-detail-box" id="body-active-detail">
        <span class="detail-tag" id="body-active-gender">Féminin · à la</span>
        <div class="detail-fr" id="body-active-fr">
          <span class="ms ms-sm" style="color:#059669">healing</span>
          <span id="body-active-name">La tête</span>
        </div>
        <div class="detail-en" id="body-active-en">The head (Headache)</div>
        <div class="detail-phrase" id="body-active-phrase">
          <strong>Formule médicale :</strong> « J'ai mal <strong>à la tête</strong> depuis ce matin. »
        </div>
      </div>

      <!-- Quick Selector Chips -->
      <div>
        <span style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);display:block;margin-bottom:0.4rem;">
          Toutes les parties du corps (cliquez pour sélectionner) :
        </span>
        <div class="body-parts-quick-grid" id="body-chips-grid"></div>
      </div>
    </div>
  </div>
</div>
`,
      "table": {
        "headers": [
          "Structure française",
          "Exemple médical",
          "English"
        ],
        "rows": [
          ["Avoir mal à + article défini", "J'ai mal à la tête et à la gorge depuis hier.", "I have a headache and a sore throat since yesterday."],
          ["Avoir mal au + nom masculin", "J'ai mal au ventre et au dos.", "I have a stomach ache and back pain."],
          ["Avoir mal aux + pluriel", "J'ai mal aux oreilles et aux yeux.", "My ears and eyes hurt."],
          ["Avoir de la fièvre / de la toux", "Il fait 38,5°C de fièvre et il a une toux sèche.", "He has a fever of 38.5°C and a dry cough."],
          ["Avoir des nausées / des vertiges", "J'ai des étourdissements quand je me lève.", "I have nausea / dizziness when I stand up."],
          ["Être courbaturé / fatigué", "Je me sens très faible et j'ai des frissons.", "I feel very weak and I have chills."],
          ["Avoir une réaction allergique", "Elle a des rougeurs et des démangeaisons.", "She has a rash and itching (allergic reaction)."],
          ["S'être blessé / foulé", "Je me suis foulé la cheville en glissant sur la glace.", "I sprained my ankle slipping on the ice."]
        ]
      },
      "tip": "💡 Règle de contraction obligatoire : avoir mal + à la (féminin), au (à + le = masculin), à l' (devant voyelle), aux (à + les = pluriel)."
    },
    {
      "rule": "3. Dialogue modèle chez le médecin ou à la clinique",
      "english": "A typical, natural medical consultation dialogue between a doctor and a patient in Montreal.",
      "examples": [
        {
          "french": "Médecin : « Bonjour, qu'est-ce qui vous amène aujourd'hui ? Qu'est-ce qui ne va pas ? »",
          "english": "Doctor: 'Hello, what brings you in today? What seems to be the problem?'"
        },
        {
          "french": "Patient : « Bonjour docteur. Depuis trois jours, j'ai mal à la gorge et je fais de la fièvre. »",
          "english": "Patient: 'Hello doctor. For the past three days, I have a sore throat and a fever.'"
        },
        {
          "french": "Médecin : « Avez-vous de la difficulté à avaler ou à respirer ? Avez-vous des allergies aux médicaments ? »",
          "english": "Doctor: 'Do you have difficulty swallowing or breathing? Do you have any medication allergies?'"
        },
        {
          "french": "Patient : « Non, je n'ai aucune allergie connue, mais je tousse beaucoup la nuit. »",
          "english": "Patient: 'No, I have no known allergies, but I cough a lot at night.'"
        },
        {
          "french": "Médecin : « Il faut que vous preniez ce sirop deux fois par jour et il faut vous reposer pendant quarante-huit heures. »",
          "english": "Doctor: 'You must take this syrup twice a day and you need to rest for 48 hours.'"
        }
      ],
      "tip": "🍁 Expressions québécoises courantes : « pogner la grippe » (attraper la grippe), « être magané » (se sentir courbaturé / épuisé / mal en point)."
    },
    {
      "rule": "4. L'obligation et la prévention en santé (Subjonctif & Impératif)",
      "english": "Professional health advice and medical recommendations using subjunctive necessity and imperative hygiene rules.",
      "table": {
        "headers": [
          "Recommandation médicale",
          "Structure grammaticale",
          "English"
        ],
        "rows": [
          ["Il faut que vous buviez beaucoup d'eau.", "Il faut que + subjonctif (boire)", "You must drink plenty of water."],
          ["Il est important que vous restiez au lit.", "Il est important que + subjonctif (rester)", "It is important that you stay in bed."],
          ["Il faut qu'elle fasse une prise de sang.", "Il faut que + subjonctif (faire)", "She needs to get a blood test done."],
          ["Prenez un comprimé toutes les huit heures.", "Impératif de politesse (prendre)", "Take one tablet every eight hours."],
          ["Appliquez de la glace sur l'enflure.", "Impératif (appliquer)", "Apply ice to the swelling."],
          ["Consultez un médecin si la douleur persiste.", "Conditionnelle (si + présent, impératif)", "See a doctor if the pain persists."]
        ]
      },
      "tip": "💡 En santé, le subjonctif est omniprésent après les verbes de recommandation : « Le médecin exige que je fasse... », « Il est essentiel que tu prennes... »."
    },
    {
      "rule": "5. Le rhume et la grippe : Sachez la différence (Guide comparatif)",
      "english": "Cold vs. Flu: Know the difference according to public health guidelines (gradual onset vs. sudden high fever and severe fatigue).",
      "customHtml": `
<style>
.cold-flu-wrapper {
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.25rem;
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  box-sizing: border-box;
  max-width: 100%;
}

.cold-flu-header {
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cold-flu-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
  flex-wrap: wrap;
}

.cold-flu-subtext {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* Side-by-Side Dual Header Banners */
.cf-dual-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 680px) {
  .cf-dual-banner {
    grid-template-columns: 1fr;
  }
}

.cf-banner-card {
  padding: 1rem;
  border-radius: var(--r-sm);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
  border: 1.5px solid transparent;
}

.cf-banner-cold {
  background: color-mix(in srgb, #0EA5E9 12%, var(--surface-1));
  border-color: #0EA5E9;
}

.cf-banner-flu {
  background: color-mix(in srgb, #EF4444 12%, var(--surface-1));
  border-color: #EF4444;
}

.cf-banner-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.cf-banner-name {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cf-banner-cold .cf-banner-name { color: #0284C7; }
.cf-banner-flu .cf-banner-name { color: #DC2626; }

.cf-badge {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: var(--r-xs);
  letter-spacing: 0.04em;
}

.cf-badge-cold { background: #0EA5E9; color: #fff; }
.cf-badge-flu { background: #EF4444; color: #fff; }

.cf-banner-onset {
  font-size: 0.88rem;
  line-height: 1.45;
  color: var(--text-primary);
}

/* Comparison Matrix Table */
.cf-matrix-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  background: var(--surface-1);
}

.cf-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  text-align: left;
}

.cf-table th {
  background: var(--surface-3);
  padding: 0.8rem 1rem;
  font-weight: 800;
  color: var(--text-primary);
  border-bottom: 1.5px solid var(--border);
}

.cf-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
  line-height: 1.5;
}

.cf-table tr:last-child td {
  border-bottom: none;
}

.cf-table tr:hover {
  background: color-mix(in srgb, var(--primary) 5%, transparent);
}

.cf-symptom-name {
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.cf-symptom-fr {
  font-size: 0.92rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.cf-symptom-en {
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.cf-cell-cold {
  color: var(--text-primary);
}

.cf-cell-flu {
  color: var(--text-primary);
}

.cf-tag-mild {
  display: inline-block;
  background: color-mix(in srgb, #10B981 18%, var(--surface-1));
  color: #10B981;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: var(--r-xs);
  margin-right: 0.35rem;
}

.cf-tag-rare {
  display: inline-block;
  background: color-mix(in srgb, #6B7280 18%, var(--surface-1));
  color: #6B7280;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: var(--r-xs);
  margin-right: 0.35rem;
}

.cf-tag-severe {
  display: inline-block;
  background: color-mix(in srgb, #EF4444 18%, var(--surface-1));
  color: #EF4444;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: var(--r-xs);
  margin-right: 0.35rem;
}

.cf-tag-common {
  display: inline-block;
  background: color-mix(in srgb, #3B82F6 18%, var(--surface-1));
  color: #3B82F6;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: var(--r-xs);
  margin-right: 0.35rem;
}

/* Complications Section Grid */
.cf-complications-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 680px) {
  .cf-complications-grid {
    grid-template-columns: 1fr;
  }
}

.cf-comp-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.cf-comp-head {
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cf-comp-card ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--text-primary);
}

.cf-comp-card li {
  margin-bottom: 0.25rem;
}

/* Prevention & Action Callout */
.cf-advice-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.95rem 1.15rem;
  background: color-mix(in srgb, #059669 12%, var(--surface-1));
  border: 1.5px solid #059669;
  border-radius: var(--r-sm);
  flex-wrap: wrap;
}

.cf-vaccine-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #059669;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 800;
  padding: 0.45rem 0.95rem;
  border-radius: var(--r-xs);
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25);
  flex-shrink: 0;
}

.cf-disclaimer {
  font-size: 0.85rem;
  color: var(--text-primary);
  line-height: 1.45;
  flex: 1 1 280px;
}

[data-style="neo-brutalist"] .cold-flu-wrapper {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .cf-banner-card {
  border: 2px solid var(--neo-border);
  box-shadow: 2.5px 2.5px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .cf-matrix-wrap {
  border: 2px solid var(--neo-border);
}
[data-style="neo-brutalist"] .cf-table th {
  border-bottom: 2px solid var(--neo-border);
}
[data-style="neo-brutalist"] .cf-comp-card {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .cf-advice-bar {
  border: 2px solid var(--neo-border);
  box-shadow: 3px 3px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .cf-vaccine-badge {
  border: 1.5px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
</style>

<div class="cold-flu-wrapper animate-in">
  <div class="cold-flu-header">
    <h4 class="cold-flu-title">
      <span class="ms ms-sm" style="color:#0EA5E9">medical_information</span>
      <span>Le rhume et la grippe : Sachez la différence</span>
    </h4>
    <p class="cold-flu-subtext">
      <strong>Cold vs. Flu: Know the Difference.</strong> Les symptômes du rhume apparaissent <strong>progressivement</strong>, tandis que ceux de la grippe frappent <strong>soudainement</strong> avec une intensité élevée.
    </p>
  </div>

  <!-- Dual Onset Speed Cards -->
  <div class="cf-dual-banner">
    <div class="cf-banner-card cf-banner-cold">
      <div class="cf-banner-head">
        <h5 class="cf-banner-name">
          <span class="ms ms-sm">ac_unit</span>
          <span>Le rhume (Common Cold)</span>
        </h5>
        <span class="cf-badge cf-badge-cold">Apparition graduelle</span>
      </div>
      <p class="cf-banner-onset">
        S'installe lentement sur 2 à 3 jours. Affecte principalement les voies respiratoires supérieures (nez, gorge). La personne reste généralement capable de fonctionner.
      </p>
    </div>

    <div class="cf-banner-card cf-banner-flu">
      <div class="cf-banner-head">
        <h5 class="cf-banner-name">
          <span class="ms ms-sm">local_fire_department</span>
          <span>La grippe / Influenza (Flu)</span>
        </h5>
        <span class="cf-badge cf-badge-flu">Début brutal & soudain</span>
      </div>
      <p class="cf-banner-onset">
        Survient brusquement en quelques heures avec forte fièvre et sensation d'écrasement. Atteinte généralisée de tout l'organisme imposant l'alitement.
      </p>
    </div>
  </div>

  <!-- Symptom Matrix Table -->
  <div class="cf-matrix-wrap">
    <table class="cf-table">
      <thead>
        <tr>
          <th style="width:28%;">Symptôme / Symptom</th>
          <th style="width:36%;color:#0284C7;"><span class="ms ms-sm">check_box_outline_blank</span> Le Rhume</th>
          <th style="width:36%;color:#DC2626;"><span class="ms ms-sm">warning</span> La Grippe (Influenza)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#F59E0B">thermostat</span> Fièvre & Frissons</span>
              <span class="cf-symptom-en">Fever / Chills</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-rare">Rare</span> Fièvre légère ou absente (moins de 38°C). Frissons occasionnels.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-severe">Fréquent & Brutal</span> Forte fièvre soudaine (38,5°C à 40°C) durant 3 à 4 jours, frissons intenses.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#6366F1">bed</span> Fatigue & Alitement</span>
              <span class="cf-symptom-en">Fatigue / Bed rest</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-mild">Légère</span> Sensation de lassitude passagère ; les activités quotidiennes se poursuivent.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-severe">Sévère & Épuisante</span> Fatigue extrême imposant l'alitement complet ; peut persister 2 à 3 semaines.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#EC4899">fitness_center</span> Courbatures & Douleurs</span>
              <span class="cf-symptom-en">Aches / Muscle soreness</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-mild">Minimes</span> Légères tensions musculaires ponctuelles.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-severe">Généralisées & Vives</span> Douleurs musculaires diffuses et intenses dans le dos, les jambes et les bras.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#8B5CF6">psychology</span> Maux de tête</span>
              <span class="cf-symptom-en">Headaches</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-rare">Rares</span> Céphalées légères causées par la congestion nasale.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-severe">Fréquents & Intenses</span> Violents maux de tête souvent situés derrière les yeux et sur le front.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#059669">air</span> Toux & Douleur thoracique</span>
              <span class="cf-symptom-en">Cough / Chest soreness</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-mild">Modérée</span> Toux grasse ou productive avec léger raclement de gorge.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-severe">Sévère & Sèche</span> Toux sèche, quinteuse et persistante avec forte douleur thoracique à la respiration.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#06B6D4">masks</span> Congestion & Éternuements</span>
              <span class="cf-symptom-en">Nasal congestion / Sneezing</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-common">Très Fréquent</span> Nez qui coule (rhinorrhée claire puis épaisse), éternuements constants.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-rare">Parfois</span> Congestion nasale possible mais au second plan par rapport à l'atteinte générale.
          </td>
        </tr>
        <tr>
          <td>
            <div class="cf-symptom-name">
              <span class="cf-symptom-fr"><span class="ms ms-sm" style="color:#F97316">healing</span> Mal de gorge</span>
              <span class="cf-symptom-en">Sore throat</span>
            </div>
          </td>
          <td class="cf-cell-cold">
            <span class="cf-tag-common">Très Fréquent</span> Picotements et irritation dès le 1er jour.
          </td>
          <td class="cf-cell-flu">
            <span class="cf-tag-common">Courant</span> Douleur vive à la déglutition présente chez de nombreux patients.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Complications List -->
  <div class="cf-complications-grid">
    <div class="cf-comp-card">
      <h6 class="cf-comp-head" style="color:#0284C7;">
        <span class="ms ms-sm">info</span>
        <span>Complications possibles du Rhume</span>
      </h6>
      <ul>
        <li>Infections de l'oreille moyenne (<strong>otites</strong> aiguës, particulièrement chez l'enfant).</li>
        <li>Infections des sinus paranasaux (<strong>sinusites</strong> bactériennes secondaires).</li>
        <li>Pharyngite et toux persistante post-infectieuse.</li>
      </ul>
    </div>

    <div class="cf-comp-card">
      <h6 class="cf-comp-head" style="color:#DC2626;">
        <span class="ms ms-sm">warning_amber</span>
        <span>Complications sévères de la Grippe</span>
      </h6>
      <ul>
        <li><strong>Pneumonie</strong> bactérienne ou virale grave avec détresse respiratoire.</li>
        <li>Aggravation sévère des maladies chroniques sous-jacentes (<strong>asthme</strong>, insuffisance cardiaque).</li>
        <li>Hospitalisation d'urgence et risques vitaux pour les personnes âgées et vulnérables.</li>
      </ul>
    </div>
  </div>

  <!-- Prevention & Health Guidance CTA -->
  <div class="cf-advice-bar">
    <div class="cf-vaccine-badge">
      <span class="ms ms-sm">vaccines</span>
      <span>Faites-vous vacciner chaque automne !</span>
    </div>
    <div class="cf-disclaimer">
      <strong>Avis médical :</strong> Le vaccin contre la grippe saisonnière demeure la meilleure protection. Si vos symptômes s'aggravent (difficulté à respirer, confusion, fièvre supérieure à 40°C), consultez rapidement un professionnel de la santé ou contactez le service <strong>Info-Santé 811</strong>.
    </div>
  </div>
</div>
`
    }
  ]
});

// Interactive Anatomical Diagram Logic
(function() {
  const bodyPartsData = {
    tete: {
      name: "La tête",
      en: "The head (Headache)",
      gender: "Féminin · à la",
      phrase: "« J'ai mal <strong>à la tête</strong> depuis ce matin. »",
      ptId: "pt-tete"
    },
    cheveux: {
      name: "Les cheveux / Le cuir chevelu",
      en: "The hair / scalp (Itchy scalp)",
      gender: "Pluriel · aux cheveux / au cuir chevelu",
      phrase: "« J'ai de fortes démangeaisons <strong>au cuir chevelu</strong>. »",
      ptId: "pt-cheveux"
    },
    front: {
      name: "Le front",
      en: "The forehead (Contusion / Bump)",
      gender: "Masculin · au (à + le)",
      phrase: "« Il a une bosse et une rougeur <strong>au front</strong> après s'être cogné. »",
      ptId: "pt-front"
    },
    yeux: {
      name: "Les yeux",
      en: "The eyes (Eye strain / pain)",
      gender: "Pluriel · aux (à + les)",
      phrase: "« J'ai mal <strong>aux yeux</strong> à cause du travail prolongé sur écran. »",
      ptId: "pt-yeux"
    },
    nez: {
      name: "Le nez",
      en: "The nose (Congestion / Sinus pain)",
      gender: "Masculin · au (à + le)",
      phrase: "« J'ai le nez bouché et mal <strong>au nez</strong> à cause du rhume. »",
      ptId: "pt-nez"
    },
    oreilles: {
      name: "Les oreilles",
      en: "The ears (Earache / Otitis)",
      gender: "Pluriel · aux (à + les)",
      phrase: "« L'enfant a mal <strong>aux oreilles</strong>, surtout la nuit (otite). »",
      ptId: "pt-oreilles"
    },
    bouche: {
      name: "La bouche / Les dents",
      en: "The mouth / teeth (Toothache)",
      gender: "Féminin · à la bouche / aux dents",
      phrase: "« J'ai une rage de dents et très mal <strong>aux dents</strong>. »",
      ptId: "pt-bouche"
    },
    gorge: {
      name: "La gorge",
      en: "The throat (Sore throat)",
      gender: "Féminin · à la",
      phrase: "« J'ai mal <strong>à la gorge</strong> et de la difficulté à avaler. »",
      ptId: "pt-gorge"
    },
    cou: {
      name: "Le cou / La nuque",
      en: "The neck / nape (Stiff neck / Torticolis)",
      gender: "Masculin · au cou / à la nuque",
      phrase: "« Je me suis réveillé avec un torticolis et une douleur <strong>au cou</strong>. »",
      ptId: "pt-cou"
    },
    epaule: {
      name: "L'épaule",
      en: "The shoulder (Shoulder pain)",
      gender: "Féminin voyelle · à l'",
      phrase: "« Elle a mal <strong>à l'épaule</strong> droite en levant le bras. »",
      ptId: "pt-epaule"
    },
    poitrine: {
      name: "La poitrine / Le cœur",
      en: "The chest / heart (Chest pain)",
      gender: "Féminin · à la poitrine / au cœur",
      phrase: "« Une douleur aiguë <strong>à la poitrine</strong> requiert un avis médical d'urgence. »",
      ptId: "pt-poitrine"
    },
    poumons: {
      name: "Les poumons / Cage thoracique",
      en: "The lungs / ribcage (Shortness of breath)",
      gender: "Pluriel · aux (à + les)",
      phrase: "« J'ai une sensation d'oppression et mal <strong>aux poumons</strong> en respirant. »",
      ptId: "pt-poumons"
    },
    dos: {
      name: "Le dos",
      en: "The back (Lumbar pain / Backache)",
      gender: "Masculin · au (à + le)",
      phrase: "« Beaucoup de personnes souffrent de douleurs chroniques <strong>au dos</strong>. »",
      ptId: "pt-dos"
    },
    bras: {
      name: "Le bras",
      en: "The arm (Muscle strain)",
      gender: "Masculin · au (à + le)",
      phrase: "« J'ai une douleur musculaire <strong>au bras</strong> après avoir porté une charge. »",
      ptId: "pt-bras"
    },
    coude: {
      name: "Le coude",
      en: "The elbow (Tennis elbow)",
      gender: "Masculin · au (à + le)",
      phrase: "« Il a une tendinite et très mal <strong>au coude</strong>. »",
      ptId: "pt-coude"
    },
    poignet: {
      name: "Le poignet",
      en: "The wrist (Carpal tunnel / Sprain)",
      gender: "Masculin · au (à + le)",
      phrase: "« J'ai des picotements et mal <strong>au poignet</strong> en tapant au clavier. »",
      ptId: "pt-poignet"
    },
    main: {
      name: "La main / Les doigts",
      en: "The hand / fingers",
      gender: "Féminin · à la main / aux doigts",
      phrase: "« Elle a de l'arthrite et mal <strong>aux doigts</strong> de la main droite. »",
      ptId: "pt-main"
    },
    ventre: {
      name: "Le ventre / L'estomac",
      en: "The stomach / belly (Cramps)",
      gender: "Masculin · au (à + le)",
      phrase: "« L'enfant a des crampes et mal <strong>au ventre</strong> après le repas. »",
      ptId: "pt-ventre"
    },
    hanche: {
      name: "La hanche",
      en: "The hip (Hip joint)",
      gender: "Féminin · à la",
      phrase: "« Elle ressent une raideur persistante <strong>à la hanche</strong> en marchant. »",
      ptId: "pt-hanche"
    },
    cuisse: {
      name: "La cuisse",
      en: "The thigh (Thigh muscle strain)",
      gender: "Féminin · à la",
      phrase: "« Le coureur a ressenti un claquage douloureux <strong>à la cuisse</strong>. »",
      ptId: "pt-cuisse"
    },
    genou: {
      name: "Le genou",
      en: "The knee (Meniscus / Ligament)",
      gender: "Masculin · au (à + le)",
      phrase: "« Il s'est blessé au soccer et a très mal <strong>au genou</strong>. »",
      ptId: "pt-genou"
    },
    mollet: {
      name: "Le mollet",
      en: "The calf (Calf cramps / Spasm)",
      gender: "Masculin · au (à + le)",
      phrase: "« J'ai eu une violente crampe nocturne <strong>au mollet</strong>. »",
      ptId: "pt-mollet"
    },
    cheville: {
      name: "La cheville",
      en: "The ankle (Sprained ankle)",
      gender: "Féminin · à la",
      phrase: "« Je me suis foulé <strong>la cheville</strong> sur un trottoir verglacé. »",
      ptId: "pt-cheville"
    },
    pied: {
      name: "Le pied / Les orteils",
      en: "The foot / toes (Plural: aux pieds)",
      gender: "Masculin · au (à + le) / aux pieds",
      phrase: "« Après avoir patiné toute la journée, j'avais mal <strong>aux pieds</strong>. »",
      ptId: "pt-pied"
    }
  };

  let activePart = 'tete';

  function renderBodyChips() {
    const grid = document.getElementById('body-chips-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(bodyPartsData).map(([key, item]) => {
      const isActive = key === activePart;
      const gBadge = item.gender.includes('Féminin') ? 'F' : item.gender.includes('Masculin') ? 'M' : 'PL';
      return `
        <button class="body-part-chip ${isActive ? 'active' : ''}" onclick="window.selectBodyPart('${key}')" id="chip-${key}">
          <span>${item.name}</span>
          <span class="chip-gender">${gBadge}</span>
        </button>
      `;
    }).join('');
  }

  window.selectBodyPart = function(partKey) {
    const data = bodyPartsData[partKey];
    if (!data) return;
    activePart = partKey;

    // Update details box
    const gEl = document.getElementById('body-active-gender');
    const nEl = document.getElementById('body-active-name');
    const enEl = document.getElementById('body-active-en');
    const phEl = document.getElementById('body-active-phrase');

    if (gEl) gEl.textContent = data.gender;
    if (nEl) nEl.textContent = data.name;
    if (enEl) enEl.textContent = data.en;
    if (phEl) phEl.innerHTML = `<strong>Formule médicale :</strong> ${data.phrase}`;

    // Update SVG targets active state
    document.querySelectorAll('.body-target-point').forEach(el => el.classList.remove('active'));
    const targetPt = document.getElementById(data.ptId);
    if (targetPt) targetPt.classList.add('active');

    // Update chips
    document.querySelectorAll('.body-part-chip').forEach(btn => {
      btn.classList.toggle('active', btn.id === `chip-${partKey}`);
    });
  };

  function updateSanteBodyImage() {
    const imgEl = document.getElementById('sante-body-img');
    if (!imgEl) return;
    const dataUri = window.HABITATION_IMAGES && window.HABITATION_IMAGES.body;
    if (dataUri) {
      imgEl.setAttribute('href', dataUri);
      imgEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', dataUri);
    } else {
      imgEl.setAttribute('href', 'assets/images/human_body_anatomy.png');
    }
  }

  window.initSanteBodyDiagram = function() {
    updateSanteBodyImage();
    renderBodyChips();
    window.selectBodyPart(activePart);
  };

  // Immediate init if DOM ready
  if (document.getElementById('body-chips-grid')) {
    window.initSanteBodyDiagram();
  }
})();

