// Section 33: Habitation et Logement au Québec (habitation_quebec)
window.sectionsData = window.sectionsData || [];
window.sectionsData.push({
  "id": "habitation_quebec",
  "icon": "home_work",
  "title": "Habitation et Logement",
  "subtitle": "Apartment Hunting, Housing Types, Leases & Quebec Living Realities",
  "color": "#D97706",
  "content": [
    {
      "rule": "1. Guide Visuel Interactif : Les Types de Logements au Québec et dans le Monde",
      "english": "Interactive illustrated visual guide to traditional Quebec dwellings, modern housing types, atypical alternative homes, and historic unique living spaces.",
      "rawHtml": `
<style>
.habitation-visual-card {
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
  overflow: hidden;
}

.habitation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.75rem;
}

.habitation-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-primary);
}

.habitation-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.hab-tab-btn {
  background: var(--surface-1);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.45rem 0.85rem;
  border-radius: var(--r-xs);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.15s ease;
}

.hab-tab-btn:hover {
  border-color: #D97706;
  color: var(--text-primary);
  background: color-mix(in srgb, #D97706 10%, var(--surface-1));
}

.hab-tab-btn.active {
  background: #D97706;
  color: #fff;
  border-color: #D97706;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.25);
}

.hab-main-display {
  display: grid;
  grid-template-columns: minmax(320px, 1.4fr) minmax(280px, 1fr);
  gap: 1.25rem;
  align-items: start;
}

@media (max-width: 900px) {
  .hab-main-display {
    grid-template-columns: 1fr;
  }
}

.hab-img-container {
  background: var(--surface-1);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.hab-interactive-image {
  width: 100%;
  height: auto;
  border-radius: var(--r-xs);
  display: block;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.hab-img-caption {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.4rem;
}

.hab-details-panel {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.hab-info-box {
  background: var(--surface-1);
  border: 1.5px solid #D97706;
  border-radius: var(--r-sm);
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  box-shadow: 0 4px 16px rgba(217, 119, 6, 0.08);
}

.hab-badge-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.hab-category-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.55rem;
  border-radius: var(--r-xs);
  background: color-mix(in srgb, #D97706 15%, var(--surface-1));
  color: #D97706;
  border: 1px solid #D97706;
}

.hab-item-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.hab-item-en {
  font-size: 0.92rem;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
}

.hab-item-desc {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-primary);
  margin: 0.25rem 0 0 0;
}

.hab-item-feature {
  background: var(--surface-2);
  border-left: 3px solid #D97706;
  padding: 0.6rem 0.85rem;
  border-radius: 0 var(--r-xs) var(--r-xs) 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--text-primary);
}

.hab-selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 0.45rem;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 0.35rem;
}

.hab-chip-btn {
  background: var(--surface-1);
  border: 1px solid var(--border);
  padding: 0.45rem 0.65rem;
  border-radius: var(--r-xs);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.hab-chip-btn:hover {
  border-color: #D97706;
  background: color-mix(in srgb, #D97706 10%, var(--surface-1));
  transform: translateY(-1px);
}

.hab-chip-btn.active {
  background: #D97706;
  color: #fff;
  border-color: #D97706;
}

[data-style="neo-brutalist"] .habitation-visual-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .hab-img-container {
  border: 2px solid var(--neo-border);
}
[data-style="neo-brutalist"] .hab-tab-btn {
  border: 1.5px solid var(--neo-border);
  box-shadow: 1.5px 1.5px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .hab-info-box {
  border: 2px solid var(--neo-border);
  box-shadow: 3px 3px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .hab-chip-btn {
  border: 1.5px solid var(--neo-border);
}
[data-style="neo-brutalist"] .hab-chip-btn.active {
  box-shadow: 2px 2px 0px var(--neo-border);
}
</style>

<div class="habitation-visual-card animate-in">
  <div class="habitation-header">
    <div>
      <h4 class="habitation-title">
        <span class="ms ms-sm" style="color:#D97706">apartment</span>
        <span>Guide Visuel des Logements : Québec & International</span>
      </h4>
      <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.2rem 0 0 0;">
        Explorez 4 catégories illustrées de logements avec vocabulaire bilingue et spécificités québécoises
      </p>
    </div>
    <div class="habitation-tabs">
      <button class="hab-tab-btn active" onclick="window.switchHabCategory('qc')" id="tab-btn-qc">
        <span class="ms ms-sm">map</span> Logements au Québec
      </button>
      <button class="hab-tab-btn" onclick="window.switchHabCategory('classique')" id="tab-btn-classique">
        <span class="ms ms-sm">home</span> Types Courants
      </button>
      <button class="hab-tab-btn" onclick="window.switchHabCategory('atypique')" id="tab-btn-atypique">
        <span class="ms ms-sm">nature_people</span> Atypiques & Alternatifs
      </button>
      <button class="hab-tab-btn" onclick="window.switchHabCategory('unique')" id="tab-btn-unique">
        <span class="ms ms-sm">castle</span> Uniques & Historiques
      </button>
    </div>
  </div>

  <div class="hab-main-display">
    <!-- Image Display -->
    <div class="hab-img-container">
      <img id="hab-active-image" src="assets/images/logements_quebec.jpg" alt="Types de logements au Québec" class="hab-interactive-image" />
      <div class="hab-img-caption">
        <span id="hab-img-title">Planche illustrée : Logements au Québec</span>
        <span style="font-size:0.75rem;opacity:0.8;">Cliquez sur un logement ci-dessous</span>
      </div>
    </div>

    <!-- Active Details Panel -->
    <div class="hab-details-panel">
      <div class="hab-info-box" id="hab-detail-card">
        <div class="hab-badge-group">
          <span class="hab-category-tag" id="hab-active-category">Spécificité Québécoise</span>
          <span style="font-size:0.75rem;font-weight:700;color:var(--text-secondary);" id="hab-active-gender">Nom masculin · Le plex</span>
        </div>
        <h5 class="hab-item-title" id="hab-active-title">
          <span class="ms ms-sm" style="color:#D97706">domain</span>
          <span>Le Plex / Multiplex</span>
        </h5>
        <p class="hab-item-en" id="hab-active-en">Duplex, Triplex or Quadruplex (Classic Montreal facade)</p>
        <p class="hab-item-desc" id="hab-active-desc">
          Immeuble à appartements typique de Montréal avec des <strong>escaliers extérieurs en colimaçon</strong> en fer forgé. Le propriétaire habite souvent au rez-de-chaussée et loue les étages supérieurs.
        </p>
        <div class="hab-item-feature" id="hab-active-feature">
          <strong>🍁 Particularité montréalaise :</strong> Les escaliers en spirale ont été conçus au XIXe siècle pour économiser l'espace intérieur et réduire les taxes foncières basées sur la profondeur des bâtisses.
        </div>
      </div>

      <!-- Quick Selector Chips for the current category -->
      <div>
        <span style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);display:block;margin-bottom:0.4rem;">
          Logements de cette planche :
        </span>
        <div class="hab-selector-grid" id="hab-chips-container"></div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      "rule": "2. Le système québécois des pièces d'un logement (1 ½, 2 ½, 3 ½, 4 ½, etc.)",
      "english": "Understanding the unique Quebec notation for counting apartment rooms and bathroom fractions.",
      "table": {
        "headers": [
          "Format québécois",
          "Signification exacte",
          "Équivalent standard / English"
        ],
        "rows": [
          ["1 ½ (un et demi)", "Une grande pièce unique (studio) + une salle de bain", "Bachelor apartment / Studio with bathroom"],
          ["2 ½ (deux et demi)", "Une chambre fermée + salon-cuisine + salle de bain", "Small 1-bedroom apartment"],
          ["3 ½ (trois et demi)", "Chambre fermée + salon + cuisine séparée + salle de bain", "Standard 1-bedroom apartment with living room"],
          ["4 ½ (quatre et demi)", "Deux chambres fermées + salon + cuisine + salle de bain", "2-bedroom apartment with separate living room"],
          ["5 ½ (cinq et demi)", "Trois chambres fermées + salon + cuisine + salle de bain", "3-bedroom apartment"],
          ["le « demi » (½)", "Désigne toujours la salle de bain complète (avec bain/douche)", "Always stands for the full bathroom (with tub/shower)"]
        ]
      },
      "tip": "🍁 Contrairement à la France (T1, T2, T3) ou aux États-Unis (1-bedroom), le Québec compte chaque pièce fermée comme un entier (1, 2, 3...) et la salle de bain comme une demie (½). Un 3 ½ est donc un appartement d'une chambre fermée avec salon et cuisine."
    },
    {
      "rule": "3. Vocabulaire du bail et de la location au Québec",
      "english": "Key legal, financial, and practical terms for signing leases and renting homes in Quebec.",
      "table": {
        "headers": [
          "Terme locatif",
          "Définition juridique / québécoise",
          "English"
        ],
        "rows": [
          ["le bail (pluriel : les baux)", "Contrat officiel de location obligatoire du TAL", "rental lease agreement"],
          ["le TAL", "Tribunal administratif du logement (anciennement Régie du logement)", "Housing Administrative Tribunal of Quebec"],
          ["le locataire / le locateur", "La personne qui loue / le propriétaire du logement", "tenant / landlord"],
          ["le loyer", "Montant mensuel payé pour habiter le logement", "monthly rent payment"],
          ["chauffé / éclairé", "Le chauffage et l'électricité sont inclus dans le loyer", "heating and electricity included in rent"],
          ["semi-meublé", "Comprend généralement les électroménagers (poêle et frigo)", "semi-furnished (major appliances included)"],
          ["la cession de bail", "Transfert de son bail à un nouveau locataire", "lease transfer / lease assignment"],
          ["la sous-location", "Location temporaire autorisée par le locataire principal", "subletting"]
        ]
      },
      "tip": "💡 Règle d'or légale au Québec : Un propriétaire n'a PAS le droit d'exiger un dépôt de garantie (caution ou mois d'avance), sauf le paiement du tout premier mois de loyer le jour de la signature du bail !"
    },
    {
      "rule": "4. La tradition unique du « 1er juillet » (Le jour du déménagement)",
      "english": "Learn about Moving Day in Quebec, related expressions, and municipal civic rules.",
      "table": {
        "headers": [
          "Concept culturel",
          "Description culturelle québécoise",
          "English"
        ],
        "rows": [
          ["Le 1er juillet", "Jour officiel où la majorité des baux québécois commencent et se terminent", "Moving Day in Quebec (July 1st)"],
          ["le camion de déménagement", "Véhicule utilitaire loué pour transporter les meubles", "moving truck / van"],
          ["les boîtes de carton / les cartons", "Contenants pour emballer les effets personnels", "cardboard moving boxes"],
          ["peinturer le logement", "Rafraîchir les murs en peinture (terme québécois pour peindre)", "to paint the apartment / walls"],
          ["l'état des lieux", "Constat écrit de l'état de l'appartement à l'arrivée et au départ", "move-in / move-out inspection walk-through"],
          ["un électroménager / les électros", "Le poêle (la cuisinière), le réfrigérateur, la laveuse et la sécheuse", "major home appliances (stove, fridge, washer, dryer)"]
        ]
      },
      "tip": "🍁 En québécois, on utilise les termes « la laveuse » (machine à laver), « la sécheuse » (sèche-linge) et « le poêle » (la cuisinière électrique/gaz)."
    },
    {
      "rule": "5. Dialogue pratique : Visiter et louer un appartement à Montréal",
      "english": "A complete realistic dialogue between a prospective tenant and a landlord in Montreal.",
      "examples": [
        {
          "french": "Locataire : « Bonjour, j'appelle au sujet de votre 3 ½ à louer sur le Plateau-Mont-Royal. Est-il encore disponible ? »",
          "english": "Tenant: 'Hello, I am calling about your 3 ½ for rent on the Plateau-Mont-Royal. Is it still available?'"
        },
        {
          "french": "Propriétaire : « Oui, absolument. Le loyer est de 1 250 $ par mois, non chauffé et non éclairé, mais les électroménagers sont inclus. »",
          "english": "Landlord: 'Yes, absolutely. The rent is $1,250 per month, heating and electricity not included, but appliances are included.'"
        },
        {
          "french": "Locataire : « Y a-t-il une entrée pour laveuse et sécheuse dans le logement ? Les animaux sont-ils permis ? »",
          "english": "Tenant: 'Are there washer and dryer hookups in the apartment? Are pets allowed?'"
        },
        {
          "french": "Propriétaire : « Oui pour les branchements. Les chats sont acceptés, mais pas les gros chiens. Quand souhaitez-vous le visiter ? »",
          "english": "Landlord: 'Yes for the hookups. Cats are accepted, but not large dogs. When would you like to visit it?'"
        },
        {
          "french": "Locataire : « Serait-il possible de passer demain soir vers dix-huit heures ? Il faut que je vérifie l'insonorisation et la luminosité. »",
          "english": "Tenant: 'Would it be possible to come by tomorrow evening around 6:00 PM? I need to check the soundproofing and natural light.'"
        }
      ],
      "tip": "💡 Observez l'emploi du conditionnel de politesse (« Serait-il possible... », « J'aimerais savoir si... ») combiné à l'obligation (« Il faut que je vérifie... »)."
    }
  ]
});

// Interactive Habitation Housing Viewer Logic
(function() {
  const HABITATION_DATA = {
    qc: {
      categoryName: "Spécificités Québécoises",
      image: "assets/images/logements_quebec.jpg",
      caption: "Planche illustrée : Types de logements au Québec",
      items: {
        plex: {
          name: "Le Plex / Multiplex (Duplex, Triplex)",
          en: "Duplex / Triplex with winding exterior staircases",
          gender: "Nom masculin · un plex",
          desc: "Bâtiment résidentiel emblématique de Montréal avec 2 ou 3 étages et des escaliers extérieurs en fer forgé. Très populaire pour la vie de quartier.",
          feature: "🍁 Les escaliers extérieurs en colimaçon permettent aux résidents de chaque étage d'avoir leur propre entrée privée directement depuis la rue."
        },
        traditionnelle: {
          name: "La Maison Traditionnelle Québécoise",
          en: "Traditional stone Quebec heritage home",
          gender: "Nom féminin · une maison",
          desc: "Maison ancestrale construite en pierre des champs avec un toit à deux versants cambrés conçu pour évacuer les lourdes charges de neige en hiver.",
          feature: "🍁 Toit à larmier retroussé pour éloigner la neige fondante des fondations et fenêtres à battants doubles contre les froids polaires."
        },
        chalet: {
          name: "Le Chalet en Bois Rond",
          en: "Lakeside / Forest log cabin retreat",
          gender: "Nom masculin · un chalet",
          desc: "Habitation rustique secondaire située en forêt ou au bord d'un lac (Laurentides, Cantons-de-l'Est). Véritable institution de détente pour les vacances.",
          feature: "🍁 L'expression « monter au chalet » signifie quitter la ville pour aller se reposer dans la nature la fin de semaine."
        },
        colonisation: {
          name: "La Maison de Colonisation (Pièce-sur-pièce)",
          en: "Pioneer log homestead",
          gender: "Nom féminin · une maison pionnière",
          desc: "Maison historique en bois équarri assemblé en queue d'aronde (pièce-sur-pièce), construite par les premiers colons pour défricher les terres québécoises.",
          feature: "🍁 Témoignage du patrimoine rural québécois du XVIIIe et XIXe siècle, ultra-résistant et isolé à la mousse naturelle."
        },
        bachelor: {
          name: "Le Bachelor (Demi-sous-sol)",
          en: "Basement / Garden-level bachelor apartment",
          gender: "Nom masculin · un bachelor",
          desc: "Logement indépendant aménagé au sous-sol d'un bungalow ou d'une maison unifamiliale, avec fenêtres au niveau du sol (demi-sous-sol).",
          feature: "🍁 Option très courante et économique pour les étudiants ou nouveaux arrivants à la recherche d'un loyer abordable."
        },
        coop: {
          name: "La Coopérative d'Habitation (COOP)",
          en: "Housing cooperative / Community social living",
          gender: "Nom féminin · une coop",
          desc: "Immeuble géré démocratiquement par ses résidents-membres, offrant des loyers modérés hors du marché spéculatif avec jardins communautaires sur le toit.",
          feature: "🍁 Les membres participent activement à l'entretien et aux décisions collectives lors des assemblées générales."
        }
      }
    },
    classique: {
      categoryName: "Types de Logements Courants",
      image: "assets/images/types_de_logements.jpg",
      caption: "Planche illustrée : Types de logements résidentiels",
      items: {
        individuelle: {
          name: "La Maison Individuelle / Unifamiliale",
          en: "Single-family detached home",
          gender: "Nom féminin · une maison individuelle",
          desc: "Maison isolée sur son propre terrain avec cour arrière, garage et allée de stationnement privée. Très répandue dans les banlieues.",
          feature: "Offre un maximum d'intimité et d'espace familial sans voisins mitoyens."
        },
        jumelee: {
          name: "La Maison Jumelée (Semi-détachée)",
          en: "Semi-detached home",
          gender: "Nom féminin · une maison jumelée",
          desc: "Deux maisons mitoyennes partageant un mur central commun, chacune disposant de son entrée et de son propre jardin.",
          feature: "Très bon équilibre entre surface habitable et coût de construction réduit par rapport à l'individuelle."
        },
        rangee: {
          name: "La Maison en Rangée (Maison de ville)",
          en: "Townhouse / Row house",
          gender: "Nom féminin · une maison de ville",
          desc: "Rangée de plusieurs maisons contiguës construites sur un même alignement le long de la rue, fréquentes en zone urbaine.",
          feature: "Permet une densité urbaine conviviale avec petite cour privative ou terrasse arrière."
        },
        appartement: {
          name: "L'Appartement / Immeuble collectif",
          en: "Apartment in multi-family residential building",
          gender: "Nom masculin · un appartement",
          desc: "Unité privative dans un immeuble à logements locatifs géré par un propriétaire ou une société de gestion.",
          feature: "Forme d'habitation urbaine la plus répandue pour les locataires à Montréal et dans les grandes métropoles."
        },
        condominium: {
          name: "Le Condominium (Condo)",
          en: "Condominium (Individually owned unit)",
          gender: "Nom masculin · un condo",
          desc: "Appartement dont on est propriétaire privatif avec copropriété des parties communes (gymnase, piscine, hall d'entrée).",
          feature: "Au Québec, le terme « condo » est presque universellement utilisé au lieu de « copropriété divise »."
        },
        studio: {
          name: "Le Studio (1 ½ québécois)",
          en: "Studio / Efficiency apartment",
          gender: "Nom masculin · un studio",
          desc: "Logement compact constitué d'une seule pièce principale servant à la fois de chambre, salon et cuisinette, plus une salle de bain séparée.",
          feature: "Idéal pour une personne seule, optimisé pour réduire au maximum les charges locatives et les coûts d'énergie."
        },
        etudiant: {
          name: "Le Logement Étudiant / Résidence",
          en: "Student housing / University dormitory",
          gender: "Nom masculin · un logement étudiant",
          desc: "Chambre meublée ou petit studio en résidence universitaire avec espaces partagés (cuisine collective, salles d'étude, buanderie).",
          feature: "Situé à proximité immédiate des campus universitaires pour faciliter la vie académique."
        }
      }
    },
    atypique: {
      categoryName: "Logements Atypiques & Alternatifs",
      image: "assets/images/logements_atypiques.jpg",
      caption: "Planche illustrée : Habitats atypiques et écologiques",
      items: {
        tinyhouse: {
          name: "La Tiny House (Micro-maison)",
          en: "Tiny house on wheels / Micro-home",
          gender: "Nom féminin · une micromaison",
          desc: "Habitation minimaliste mobile sur roues conçue pour réduire l'empreinte écologique et maximiser l'autonomie financière.",
          feature: "Agencement ingénieux d'environ 15 à 25 m² avec mezzanine pour dormir et panneaux solaires."
        },
        peniche: {
          name: "La Péniche / Habitat Flottant",
          en: "Houseboat / Floating home",
          gender: "Nom féminin · une péniche habitable",
          desc: "Bateau aménagé amarré au bord d'un fleuve, d'un canal ou d'une marina, offrant une vie sur l'eau.",
          feature: "Permet de vivre au fil de l'eau avec vue panoramique et terrasse sur le pont supérieur."
        },
        yourte: {
          name: "La Yourte",
          en: "Yurt (Circular nomadic tent)",
          gender: "Nom féminin · une yourte",
          desc: "Tente circulaire traditionnelle mongole isolée en feutre de laine avec charpente en bois, très populaire en écotourisme.",
          feature: "Habitation démontable avec puits de lumière central (le toono) pour admirer les étoiles la nuit."
        },
        cabane: {
          name: "La Cabane dans les Arbres",
          en: "Treehouse dwelling",
          gender: "Nom féminin · une cabane perchée",
          desc: "Structure en bois construite dans les branches d'arbres vivants avec escalier en colimaçon ou passerelle suspendue.",
          feature: "Immergée dans la canopée forestière, elle offre une expérience de déconnexion totale en pleine nature."
        },
        roulotte: {
          name: "La Maison Mobile / Roulotte",
          en: "Mobile home / Travel trailer",
          gender: "Nom féminin · une maison mobile / roulotte",
          desc: "Habitation préfabriquée installée dans un parc de maisons mobiles ou remorque aménagée pour le voyage et le camping.",
          feature: "Au Québec, le mot « roulotte » est couramment employé pour désigner une caravane de voyage."
        },
        partage: {
          name: "L'Habitat Partagé / Écolieu de Cohabitation",
          en: "Cohousing community / Eco-village",
          gender: "Nom masculin · un habitat partagé",
          desc: "Communauté de maisons écologiques privées regroupées autour de jardins partagés, potagers et espaces communs.",
          feature: "Prône la solidarité, l'agriculture biologique de proximité et l'entraide intergénérationnelle."
        }
      }
    },
    unique: {
      categoryName: "Logements Uniques & Historiques",
      image: "assets/images/logements_uniques.jpg",
      caption: "Planche illustrée : Architectures uniques et insolites",
      items: {
        loft: {
          name: "Le Loft / Atelier d'Artiste",
          en: "Industrial conversion loft",
          gender: "Nom masculin · un loft",
          desc: "Ancien espace industriel ou manufacture réaménagé en habitation avec hauts plafonds, briques apparentes et poutres métalliques.",
          feature: "Très prisé dans les quartiers historiques et industriels de Montréal (Griffintown, Saint-Henri)."
        },
        dome: {
          name: "Le Dôme Géodésique / Bulle",
          en: "Geodesic dome / Glamping sphere",
          gender: "Nom masculin · un dôme géodésique",
          desc: "Structure sphérique polyédrique transparente offrant une vue panoramique à 360 degrés sur la forêt et le ciel étoilé.",
          feature: "Architecture popularisée par Buckminster Fuller (créateur de la Biosphère de l'Expo 67 à Montréal)."
        },
        hobbit: {
          name: "La Maison de Hobbit (Habitat semi-enterré)",
          en: "Earth-sheltered Hobbit house",
          gender: "Nom féminin · une maison sous terre",
          desc: "Logement semi-enterré couvert de terre végétale et de gazon avec porte ronde en bois, remarquablement isolé thermiquement.",
          feature: "La masse thermique de la terre permet de maintenir une température intérieure tempérée été comme hiver."
        },
        phare: {
          name: "Le Phare Maritime",
          en: "Historic lighthouse keeper's cottage",
          gender: "Nom masculin · un phare",
          desc: "Tour côtière patrimoniale jadis réservée aux gardiens de phare le long du fleuve Saint-Laurent et de la Gaspésie.",
          feature: "Construit sur des falaises rocheuses battues par les vagues, avec vue imprenable sur l'estuaire maritime."
        },
        tipi: {
          name: "Le Tipi Traditionnel Autochtone",
          en: "First Nations traditional conical tipi",
          gender: "Nom masculin · un tipi",
          desc: "Tente conique traditionnelle des Premières Nations nomades, construite avec de longues perches de bois recouvertes de peaux ou toiles.",
          feature: "Équipé d'une ouverture supérieure ajustable pour évacuer la fumée du feu de camp central."
        },
        conteneur: {
          name: "La Maison Conteneur (Cargo House)",
          en: "Upcycled shipping container home",
          gender: "Nom féminin · une maison conteneur",
          desc: "Maison contemporaine modulaire fabriquée à partir de conteneurs maritimes en acier recyclés et superposés.",
          feature: "Construction rapide, structure antisismique et design moderne minimaliste avec grandes baies vitrées."
        },
        troglodyte: {
          name: "La Maison Troglodyte",
          en: "Cave / Cliff rock-cut dwelling",
          gender: "Nom féminin · une maison troglodytique",
          desc: "Habitation millénaire creusée directement dans la roche d'une falaise calcaire, naturellement tempérée toute l'année.",
          feature: "Patrimoine architectural exceptionnel que l'on retrouve notamment dans la vallée de la Loire en France."
        }
      }
    }
  };

  let currentCategory = 'qc';
  let currentItemKey = 'plex';

  function renderCategoryChips(catKey) {
    const container = document.getElementById('hab-chips-container');
    if (!container) return;

    const catData = HABITATION_DATA[catKey];
    if (!catData) return;

    container.innerHTML = Object.entries(catData.items).map(([key, item]) => {
      const isActive = key === currentItemKey;
      return `
        <button class="hab-chip-btn ${isActive ? 'active' : ''}" onclick="window.selectHabItem('${key}')" id="hab-chip-${key}">
          <span class="ms ms-sm" style="font-size:0.9rem">home</span>
          <span>${item.name.split('(')[0].trim()}</span>
        </button>
      `;
    }).join('');
  }

  window.switchHabCategory = function(catKey) {
    const catData = HABITATION_DATA[catKey];
    if (!catData) return;
    currentCategory = catKey;

    // Set first item in category as active
    const firstKey = Object.keys(catData.items)[0];
    currentItemKey = firstKey;

    // Update image
    const imgEl = document.getElementById('hab-active-image');
    const capEl = document.getElementById('hab-img-title');
    if (imgEl) {
      imgEl.src = getHabImageSrc(catKey);
      imgEl.onerror = function() {
        if (window.HABITATION_IMAGES && window.HABITATION_IMAGES[catKey]) {
          this.src = window.HABITATION_IMAGES[catKey];
        }
      };
    }
    if (capEl) capEl.textContent = catData.caption;

    // Update tab active button
    document.querySelectorAll('.hab-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `tab-btn-${catKey}`);
    });

    renderCategoryChips(catKey);
    window.selectHabItem(currentItemKey);
  };

  window.selectHabItem = function(itemKey) {
    const catData = HABITATION_DATA[currentCategory];
    if (!catData) return;
    const item = catData.items[itemKey];
    if (!item) return;

    currentItemKey = itemKey;

    // Update details panel
    const catTag = document.getElementById('hab-active-category');
    const genderTag = document.getElementById('hab-active-gender');
    const titleEl = document.getElementById('hab-active-title');
    const enEl = document.getElementById('hab-active-en');
    const descEl = document.getElementById('hab-active-desc');
    const featureEl = document.getElementById('hab-active-feature');

    if (catTag) catTag.textContent = catData.categoryName;
    if (genderTag) genderTag.textContent = item.gender;
    if (titleEl) titleEl.innerHTML = `<span class="ms ms-sm" style="color:#D97706">domain</span> <span>${item.name}</span>`;
    if (enEl) enEl.textContent = item.en;
    if (descEl) descEl.innerHTML = item.desc;
    if (featureEl) featureEl.innerHTML = item.feature;

    // Update chips active state
    document.querySelectorAll('.hab-chip-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `hab-chip-${itemKey}`);
    });
  };

  
  function getHabImageSrc(catKey) {
    if (window.HABITATION_IMAGES && window.HABITATION_IMAGES[catKey]) {
      return window.HABITATION_IMAGES[catKey];
    }
    const fallbacks = {
      qc: "assets/images/logements_quebec.jpg",
      classique: "assets/images/types_de_logements.jpg",
      atypique: "assets/images/logements_atypiques.jpg",
      unique: "assets/images/logements_uniques.jpg"
    };
    return fallbacks[catKey] || "";
  }

  window.initHabitationViewer = function() {
    const imgEl = document.getElementById("hab-active-image");
    if (imgEl) {
      imgEl.src = getHabImageSrc(currentCategory);
    }
    renderCategoryChips(currentCategory);
    window.selectHabItem(currentItemKey);
  };

  // Auto-init if DOM ready
  if (document.getElementById('hab-chips-container')) {
    window.initHabitationViewer();
  }
})();
