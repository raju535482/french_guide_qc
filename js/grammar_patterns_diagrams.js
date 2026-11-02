/**
 * French Grammar Guide — Formulas, Word Recognition & Visual Reasoning Engine
 * Covers all 30 curriculum topics with:
 * - Mathematical grammar formulas
 * - Word & pattern recognition triggers
 * - Step-by-step diagnostic decision trees ("how conclusion is reached")
 * - Interactive visual SVG flow diagrams & illustrations
 */

window.GRAMMAR_PATTERNS_DIAGRAMS = {
  "articles": {
    "id": "articles",
    "title": "Articles: Definite, Indefinite & Partitive",
    "formulas": [
      {
        "name": "Definite Article Formula",
        "math": "le (M.sg) | la (F.sg) | l’ (+vowel/h) | les (Plural)",
        "meaning": "Specific known entity or universal concept (English: THE)",
        "example": "J’aime le café (concept) · Regarde le train (specific)"
      },
      {
        "name": "Indefinite Article Formula",
        "math": "un (M.sg) | une (F.sg) | des (Plural)",
        "meaning": "Countable, non-specific individual unit (English: A / AN / SOME)",
        "example": "J’achète un roman · Elle mange une pomme"
      },
      {
        "name": "Partitive Article Formula",
        "math": "du (M.sg) | de la (F.sg) | de l’ (+vowel) | des (Plural)",
        "meaning": "Uncountable mass, portion of a substance (English: SOME / ANY)",
        "example": "Je bois du café · Nous voulons de la moutarde"
      },
      {
        "name": "Universal Negation Law",
        "math": "un / une / des / du / de la / de l’ + [Ne ... Pas] ➜ DE / D’",
        "meaning": "Negation collapses all quantity articles to DE / D’ (except with être)",
        "example": "J’ai un chien ➔ Je n’ai PAS DE chien (never pas un chien)"
      }
    ],
    "triggers": [
      {
        "word": "Aimer / Préférer / Adorer / Détester",
        "rule": "Always triggers DEFINITE articles (le, la, les) — expresses overall likes/dislikes"
      },
      {
        "word": "Manger / Boire / Acheter / Vouloir",
        "rule": "Triggers PARTITIVE articles (du, de la, des) when taking an uncounted quantity"
      },
      {
        "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
        "rule": "Zero quantity trigger: transforms articles into DE / D’"
      },
      {
        "word": "Beaucoup / Trop / Un peu / Assez",
        "rule": "Adverbs of quantity ALWAYS take DE / D’ without an article (beaucoup de café)"
      }
    ],
    "patterns": [
      {
        "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
        "note": "90%+ Masculine ➜ use le / un / du"
      },
      {
        "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
        "note": "90%+ Feminine ➜ use la / une / de la"
      },
      {
        "pattern": "Vowel clash: Noun starts with vowel or silent h-",
        "note": "Contract: le/la ➔ l’ · du/de la ➔ de l’"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Context",
        "question": "Is this a general preference or a specific known object?",
        "action": "If YES ➔ Definite (le / la / l’ / les)"
      },
      {
        "step": "Step 2: Check Countability",
        "question": "Can you count individual whole units (1, 2, 3 items)?",
        "action": "If YES ➔ Indefinite (un / une / des)"
      },
      {
        "step": "Step 3: Check Mass Substance",
        "question": "Is it an uncounted liquid, mass, or food item?",
        "action": "If YES ➔ Partitive (du / de la / de l’)"
      },
      {
        "step": "Step 4: Negation Filter",
        "question": "Is the main verb negated (ne... pas) and NOT the verb être?",
        "action": "If YES ➔ Reduce article immediately to DE / D’"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"290\" y=\"10\" width=\"180\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Article Selection</text>\n  <path d=\"M 320 46 L 120 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 46 L 380 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 440 46 L 640 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"30\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"120\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Specific / Concept</text>\n  <text x=\"120\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Likes: aimer, adorer</text>\n  <rect x=\"290\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"380\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Countable Unit</text>\n  <text x=\"380\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">1 apple, 2 tickets</text>\n  <rect x=\"550\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"640\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Mass / Substance</text>\n  <text x=\"640\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Portion: café, eau, vin</text>\n  <path d=\"M 120 130 L 120 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 130 L 380 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 640 130 L 640 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"25\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"120\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">DÉFINI</text>\n  <text x=\"120\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">le · la · l’ · les</text>\n  <rect x=\"285\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"380\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">INDÉFINI</text>\n  <text x=\"380\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">un · une · des</text>\n  <rect x=\"545\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"640\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">PARTITIF</text>\n  <text x=\"640\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">du · de la · de l’</text>\n</svg>"
  },
  "nouns": {
    "id": "nouns",
    "title": "Nouns & Gender Recognition Rules",
    "formulas": [
      {
        "name": "Noun Pluralization Formula",
        "math": "Singular Noun + -s = Plural Noun",
        "meaning": "Standard plural rule (ending -s is silent in French)",
        "example": "le livre ➔ les livres · la table ➔ les tables"
      },
      {
        "name": "Irregular Plural -al Formula",
        "math": "Noun ending in -al ➜ -aux",
        "meaning": "Drop -al and attach -aux (pronounced /o/)",
        "example": "un journal ➔ des journaux · un animal ➔ des animaux"
      },
      {
        "name": "Invariant Plural Formula",
        "math": "Noun ending in -s, -x, -z + Plural ➜ No spelling change",
        "meaning": "Nouns already ending in sibilants do not change in plural",
        "example": "un pays ➔ des pays · une voix ➔ des voix · un nez ➔ des nez"
      }
    ],
    "triggers": [
      {
        "word": "Suffix -eau / -al",
        "rule": "Pluralizes with -x instead of -s (des gâteaux, des cadeaux, des journaux)"
      },
      {
        "word": "Days, months, languages, seasons",
        "rule": "Always MASCULINE (le lundi, le français, l’été, le printemps)"
      },
      {
        "word": "Academic subjects, sciences (-ie, -ique)",
        "rule": "Always FEMININE (la chimie, la physique, la politique)"
      },
      {
        "word": "Metric units, compass directions",
        "rule": "Always MASCULINE (le kilomètre, le nord, l’ouest)"
      }
    ],
    "patterns": [
      {
        "pattern": "Predictable Masculine Suffixes",
        "note": "-ment (le gouvernement), -isme (le capitalisme), -age (le voyage), -oir (le miroir), -teur (le directeur)"
      },
      {
        "pattern": "Predictable Feminine Suffixes",
        "note": "-tion / -sion (la nation), -té (la liberté), -ure (la voiture), -ence / -ance (la science), -ette (la bicyclette)"
      },
      {
        "pattern": "Key Exceptions to Memorize",
        "note": "la plage, la cage, la page (-age but feminine!) · le silence, le squelette (-ce/-te but masculine!)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Word Ending",
        "question": "Does the word end in -ment, -age, -isme, or -oir?",
        "action": "If YES ➔ Assign Masculine (90%+ probability)"
      },
      {
        "step": "Step 2: Check Abstract/State Suffix",
        "question": "Does the word end in -tion, -sion, -té, -ence, or -ure?",
        "action": "If YES ➔ Assign Feminine (95%+ probability)"
      },
      {
        "step": "Step 3: Check Plural Marker",
        "question": "Does the singular end in -al, -eau, or -eu?",
        "action": "If YES ➔ Form plural with -aux or -x"
      },
      {
        "step": "Step 4: Check Sibilant Ending",
        "question": "Does it end in -s, -x, or -z?",
        "action": "If YES ➔ Retain identical spelling, change article to les/des"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"290\" y=\"10\" width=\"180\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Identify Noun Gender</text>\n  <path d=\"M 330 46 L 190 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 570 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"190\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Masculine Suffixes</text>\n  <text x=\"190\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">-ment · -age · -isme · -eau</text>\n  <rect x=\"470\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"570\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Feminine Suffixes</text>\n  <text x=\"570\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">-tion · -té · -ure · -ence</text>\n  <path d=\"M 190 134 L 190 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 570 134 L 570 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"190\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">MASCULIN (LE / UN)</text>\n  <rect x=\"465\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"570\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">FÉMININ (LA / UNE)</text>\n</svg>"
  },
  "pronouns": {
    "id": "pronouns",
    "title": "Subject Pronouns & Quebec 'On' Rule",
    "formulas": [
      {
        "name": "Spoken Quebec Plural Pronoun Rule",
        "math": "nous (written) ➜ ON + 3rd person singular verb",
        "meaning": "In natural Quebec French, 'on' completely replaces 'nous' in speech",
        "example": "Nous mangeons ➔ On mange (much easier conjugation!)"
      },
      {
        "name": "Tu Elision in Spoken Quebec",
        "math": "tu + vowel verb ➜ t’",
        "meaning": "Conversational contraction in Quebec spoken registers",
        "example": "Tu es prêt ? ➔ T’es prêt ? · Tu as faim ? ➔ T’as faim ?"
      },
      {
        "name": "Third Person Plural Gender Rule",
        "math": "1 Masculine + 100 Feminine = ILS (M.Pl)",
        "meaning": "Any group containing at least one male defaults grammatically to ils",
        "example": "Marc et Sophie ➔ ils · Sophie, Marie et Claire ➔ elles"
      }
    ],
    "triggers": [
      {
        "word": "On",
        "rule": "Grammatically singular (takes il/elle verb form) but refers to 'we' / 'everyone'"
      },
      {
        "word": "Vous",
        "rule": "Dual function: Plural 'you all' OR Singular formal/polite 'You'"
      },
      {
        "word": "Il vs Ce",
        "rule": "Use 'il' with bare adjectives (Il est tard); use 'c’est' with modified nouns (C’est un ami)"
      },
      {
        "word": "Je ➜ J’",
        "rule": "Always drops 'e' before vowels/silent h (J’habite, J’aime, J’écoute)"
      }
    ],
    "patterns": [
      {
        "pattern": "Pronoun before vowel (je, tu in speech)",
        "note": "j’ai, j’arrive, t’as, t’es (mandatory elision for je, spoken for tu)"
      },
      {
        "pattern": "Impersonal subjects (météo, time)",
        "note": "Always uses 'il' as dummy subject: Il pleut, Il neige, Il est 3h"
      },
      {
        "pattern": "Indefinite 'someone / people in general'",
        "note": "Use 'on': En hiver, on porte un manteau"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify Audience",
        "question": "Are you speaking to one person formally or a group?",
        "action": "Use VOUS (formal or plural)"
      },
      {
        "step": "Step 2: Are you talking about 'We'?",
        "question": "Is this spoken or informal French?",
        "action": "Use ON (+ 3rd person singular verb)"
      },
      {
        "step": "Step 3: Analyze Mixed Groups",
        "question": "Does the group contain at least 1 masculine entity?",
        "action": "Use ILS (only 100% all-female groups take ELLES)"
      },
      {
        "step": "Step 4: Check Vowel Boundary",
        "question": "Does the next verb begin with a vowel?",
        "action": "Contract Je ➔ J’"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Choosing 'We' & 'You'</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"100\" y=\"88\" width=\"200\" height=\"44\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Talking about \"We\"</text>\n  <text x=\"200\" y=\"123\" text-anchor=\"middle\" class=\"flow-text-sub\">Spoken vs Formal</text>\n  <rect x=\"460\" y=\"88\" width=\"200\" height=\"44\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Talking to \"You\"</text>\n  <text x=\"560\" y=\"123\" text-anchor=\"middle\" class=\"flow-text-sub\">Casual vs Formal/Group</text>\n  <path d=\"M 150 132 L 100 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 250 132 L 300 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 510 132 L 460 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 610 132 L 660 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"20\" y=\"158\" width=\"160\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"100\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">ON (Spoken / QC)</text>\n  <rect x=\"220\" y=\"158\" width=\"160\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"300\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">NOUS (Formal)</text>\n  <rect x=\"380\" y=\"158\" width=\"160\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"460\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">TU (1 Friend)</text>\n  <rect x=\"580\" y=\"158\" width=\"160\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"660\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">VOUS (Group/Formal)</text>\n</svg>"
  },
  "verbs": {
    "id": "verbs",
    "title": "Present Tense Conjugation & Stem Formulas",
    "formulas": [
      {
        "name": "-ER Verbs Regular Formula",
        "math": "Stem (Infinitive - er) + [ -e, -es, -e, -ons, -ez, -ent ]",
        "meaning": "90% of all French verbs follow this exact termination sequence",
        "example": "parler ➔ je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent"
      },
      {
        "name": "-IR Verbs Regular (Finir) Formula",
        "math": "Stem (Infinitive - ir) + [ -is, -is, -it, -issons, -issez, -issent ]",
        "meaning": "Group 2 regular verbs insert the -iss- infix in plural persons",
        "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
      },
      {
        "name": "The Silent 'Boot' Endings Rule",
        "math": "je, tu, il, ils endings = 100% SILENT",
        "meaning": "Only nous (-ons) and vous (-ez) add a voiced syllable to the stem!",
        "example": "parle, parles, parlent are all pronounced IDENTICALLY: /paʁl/"
      }
    ],
    "triggers": [
      {
        "word": "Maintenant / En ce moment",
        "rule": "Present tense marker (action currently happening)"
      },
      {
        "word": "Tous les jours / Chaque semaine",
        "rule": "Present tense habitual marker (regular routine)"
      },
      {
        "word": "-ons ending",
        "rule": "Voiced /ɔ̃/ nasal sound — universal 1st person plural marker"
      },
      {
        "word": "-ez ending",
        "rule": "Voiced /e/ vowel sound — universal 2nd person plural marker"
      }
    ],
    "patterns": [
      {
        "pattern": "-ent on verbs is 100% SILENT",
        "note": "NEVER pronounce -ent as a nasal! Ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
      },
      {
        "pattern": "Boot Verb Vowel Alternation",
        "note": "Stem changes in je/tu/il/ils (inside boot), returns to normal in nous/vous: acheter ➔ j'achète, nous achetons"
      },
      {
        "pattern": "G-softening in Nous: -geons",
        "note": "Manger ➔ nous mangeons (keep 'e' to preserve soft 'j' sound)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify Verb Group",
        "question": "Does infinitive end in -er, -ir, or -re?",
        "action": "Strip ending to extract the base stem"
      },
      {
        "step": "Step 2: Match the Subject",
        "question": "Who is doing the action (je, tu, il, nous, vous, ils)?",
        "action": "Select the corresponding ending suffix"
      },
      {
        "step": "Step 3: Pronunciation Filter",
        "question": "Is the subject inside the 'boot' (je/tu/il/ils)?",
        "action": "Keep ending completely silent! Only stem is heard"
      },
      {
        "step": "Step 4: Plural Check",
        "question": "Is it nous or vous?",
        "action": "Pronounce ending audibly: -ons (/ɔ̃/) or -ez (/e/)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Present Verb Conjugation</text>\n  <path d=\"M 330 46 L 180 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 580 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"80\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"180\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Inside the \"Boot\"</text>\n  <text x=\"180\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">je · tu · il / elle · ils / elles</text>\n  <rect x=\"480\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"580\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Outside the Boot</text>\n  <text x=\"580\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">nous · vous</text>\n  <path d=\"M 180 134 L 180 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 580 134 L 580 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"75\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"180\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">SILENT ENDINGS (-e,-es,-ent)</text>\n  <rect x=\"475\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"580\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">VOICED (-ons /ɔ̃/, -ez /e/)</text>\n</svg>"
  },
  "sentences": {
    "id": "sentences",
    "title": "Sentence Structure, Negation Sandwich & Questions",
    "formulas": [
      {
        "name": "Standard Sentence Order Formula",
        "math": "Subject + Verb + Object (S - V - O)",
        "meaning": "Declarative French follows English order for basic affirmative sentences",
        "example": "Alex (S) mange (V) une pomme (O)"
      },
      {
        "name": "The Negation Sandwich Formula",
        "math": "Subject + [ ne / n’ ] + Verb + [ pas / jamais / plus ]",
        "meaning": "Negation wraps around the conjugated verb like two slices of bread",
        "example": "Je NE parle PAS · Elle N’aime PAS le bruit"
      },
      {
        "name": "Question Formation 3-Tiers",
        "math": "Intonation (casual) | Est-ce que + SVO (standard) | V-S Inversion (formal)",
        "meaning": "Three ways to ask any yes/no question depending on register",
        "example": "Tu viens ? (casual) · Est-ce que tu viens ? (standard) · Viens-tu ? (formal)"
      }
    ],
    "triggers": [
      {
        "word": "Ne ... pas",
        "rule": "Standard negation (not)"
      },
      {
        "word": "Ne ... jamais",
        "rule": "Negative habit (never) — replaces 'pas'"
      },
      {
        "word": "Ne ... plus",
        "rule": "Negative continuation (no longer / not anymore) — replaces 'pas'"
      },
      {
        "word": "Est-ce que",
        "rule": "Universal question opener: preserves standard SVO word order"
      }
    ],
    "patterns": [
      {
        "pattern": "Never say 'ne pas' together around conjugated verbs",
        "note": "❌ Je ne pas sais ➔ ✓ Je ne sais pas (sandwich the verb)"
      },
      {
        "pattern": "Spoken Quebec / Casual French drops 'ne'",
        "note": "J'sais pas · Y vient pas (extremely common in oral French)"
      },
      {
        "pattern": "Vowel clash with ne: n’",
        "note": "n'ai, n'aime, n'écoute, n'habite"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify Conjugated Verb",
        "question": "What is the primary conjugated verb?",
        "action": "Place Subject directly before it"
      },
      {
        "step": "Step 2: Are you negating?",
        "question": "Do you want to say not / never / no longer?",
        "action": "Sandwich the verb: NE + Verb + PAS / JAMAIS / PLUS"
      },
      {
        "step": "Step 3: Are you asking a question?",
        "question": "What register are you using?",
        "action": "Informal: Intonation (?) · Standard: Est-ce que... · Formal: Invert Verb-Subject"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Negation Sandwich</text>\n  <rect x=\"80\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"160\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">BREAD 1</text>\n  <text x=\"160\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">ne / n’</text>\n  <rect x=\"290\" y=\"74\" width=\"180\" height=\"64\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-bold\">THE MEAT</text>\n  <text x=\"380\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Conjugated Verb</text>\n  <rect x=\"520\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"600\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">BREAD 2</text>\n  <text x=\"600\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">pas / jamais / plus</text>\n  <path d=\"M 240 106 L 290 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 470 106 L 520 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Example: Je [ne] regarde [pas] la télévision.</text>\n</svg>"
  },
  "adjectives": {
    "id": "adjectives",
    "title": "Adjective Agreement Matrix & BAGS Placement",
    "formulas": [
      {
        "name": "Adjective Agreement Matrix Formula",
        "math": "M: base | F: +e | M.Pl: +s | F.Pl: +es",
        "meaning": "Adjectives must match their noun in both Gender and Number",
        "example": "grand (M) · grande (F) · grands (M.Pl) · grandes (F.Pl)"
      },
      {
        "name": "The BAGS Placement Law",
        "math": "Beauty, Age, Goodness, Size ➜ BEFORE the Noun",
        "meaning": "Most adjectives go AFTER the noun, except BAGS which go in front",
        "example": "un GRAND livre (Bags: Size) vs un livre ROUGE (Color: after noun)"
      },
      {
        "name": "Vowel Switch for Beau, Nouveau, Vieux",
        "math": "un bel homme | un nouvel hôtel | un vieil ami",
        "meaning": "Special masculine forms before masculine nouns starting with vowel/h",
        "example": "beau ➔ bel · nouveau ➔ nouvel · vieux ➔ vieil"
      }
    ],
    "triggers": [
      {
        "word": "B.A.G.S. adjectives",
        "rule": "beau, joli, jeune, vieux, bon, mauvais, grand, petit ➔ placed BEFORE noun"
      },
      {
        "word": "Colors & Shapes",
        "rule": "bleu, rouge, rond, carré ➔ placed AFTER noun (une voiture rouge)"
      },
      {
        "word": "Nationalities",
        "rule": "canadien, français, américain ➔ placed AFTER noun (un café québécois)"
      },
      {
        "word": "Invariable colors (marron, orange)",
        "rule": "Never add -s or -e! (des chaussures marron)"
      }
    ],
    "patterns": [
      {
        "pattern": "-eux ➜ -euse",
        "note": "heureux ➔ heureuse, curieux ➔ curieuse"
      },
      {
        "pattern": "-if ➜ -ive",
        "note": "actif ➔ active, créatif ➔ créative, sportif ➔ sportive"
      },
      {
        "pattern": "-el / -en ➜ -elle / -enne",
        "note": "naturel ➔ naturelle, canadien ➔ canadienne"
      },
      {
        "pattern": "-er ➜ -ère",
        "note": "premier ➔ première, cher ➔ chère"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Position (BAGS)",
        "question": "Is it Beauty, Age, Goodness, or Size?",
        "action": "If YES ➔ Place BEFORE noun. Otherwise ➔ Place AFTER noun"
      },
      {
        "step": "Step 2: Check Gender of Noun",
        "question": "Is the noun feminine?",
        "action": "Add -e (or transform suffix: -eux ➔ -euse, -if ➔ -ive)"
      },
      {
        "step": "Step 3: Check Number of Noun",
        "question": "Is the noun plural?",
        "action": "Add -s (or -es if feminine plural)"
      },
      {
        "step": "Step 4: Check Vowel Clash",
        "question": "Is it beau/nouveau/vieux before a masculine vowel noun?",
        "action": "Use bel, nouvel, vieil"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Adjective Position</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">B.A.G.S. Adjectives</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Beauty · Age · Goodness · Size</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">All Other Adjectives</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Colors · Nationalities · Shapes</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">BEFORE NOUN (un beau parc)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">AFTER NOUN (un vélo rouge)</text>\n</svg>"
  },
  "prepositions": {
    "id": "prepositions",
    "title": "Preposition Contractions & Geographic Rules",
    "formulas": [
      {
        "name": "Mandatory 'à' Contraction Formula",
        "math": "à + le ➜ AU | à + les ➜ AUX | à + la ➜ à la | à + l’ ➜ à l’",
        "meaning": "Preposition 'à' fuses with masculine and plural definite articles",
        "example": "Je vais au gym (à+le) · Je parle aux étudiants (à+les)"
      },
      {
        "name": "Mandatory 'de' Contraction Formula",
        "math": "de + le ➜ DU | de + les ➜ DES | de + la ➜ de la | de + l’ ➜ de l’",
        "meaning": "Preposition 'de' fuses with masculine and plural definite articles",
        "example": "Le retour du roi (de+le) · La liste des invités (de+les)"
      },
      {
        "name": "Geographic Prepositions Formula",
        "math": "Cities ➜ À | Fem Countries ➜ EN | Masc Countries ➜ AU | Plural Countries ➜ AUX",
        "meaning": "Location prepositions depend strictly on the grammatical gender of the destination",
        "example": "À Montréal, EN France, AU Canada, AUX États-Unis"
      }
    ],
    "triggers": [
      {
        "word": "À + city",
        "rule": "Always à: à Montréal, à Québec, à Paris, à Toronto (no article!)"
      },
      {
        "word": "EN + feminine country/province",
        "rule": "Ends in -e ➜ Feminine: en France, en Colombie, en Ontario (starts with vowel)"
      },
      {
        "word": "AU + masculine country",
        "rule": "Doesn't end in -e: au Canada, au Mexique, au Japon"
      },
      {
        "word": "Chez + person / professional",
        "rule": "Means 'at the house/office of': chez moi, chez le médecin, chez Jean"
      }
    ],
    "patterns": [
      {
        "pattern": "Never say 'à le' or 'de le'",
        "note": "❌ à le restaurant ➔ ✓ au restaurant · ❌ de le parc ➔ ✓ du parc"
      },
      {
        "pattern": "Countries ending in -e are feminine",
        "note": "La France ➔ en France, la Suisse ➔ en Suisse (Exception: le Mexique ➔ au Mexique)"
      },
      {
        "pattern": "Islands often take 'à'",
        "note": "À Cuba, à Madagascar, à Haïti"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Destination Type",
        "question": "Is it a city, a country, or a person?",
        "action": "City ➔ À · Person ➔ Chez · Country ➔ see Step 2"
      },
      {
        "step": "Step 2: Check Country Gender",
        "question": "Does the country end in -e or start with a vowel?",
        "action": "If YES ➔ EN (en Italie, en France) · If NO ➔ AU (au Canada)"
      },
      {
        "step": "Step 3: Check Plural Countries",
        "question": "Is the country plural (États-Unis, Pays-Bas)?",
        "action": "Use AUX (aux États-Unis)"
      },
      {
        "step": "Step 4: Check Definite Article Fusion",
        "question": "Are you combining à/de with le or les?",
        "action": "Contract: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Geographic Prepositions</text>\n  <path d=\"M 310 46 L 120 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 360 46 L 300 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 400 46 L 470 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 450 46 L 640 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"35\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"120\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Cities</text>\n  <text x=\"120\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Montréal, Paris</text>\n  <rect x=\"215\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"300\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Fem Country</text>\n  <text x=\"300\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Ends in -e / vowel</text>\n  <rect x=\"395\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"480\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Masc Country</text>\n  <text x=\"480\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Canada, Japon</text>\n  <rect x=\"575\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"660\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Plural Country</text>\n  <text x=\"660\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">USA, Pays-Bas</text>\n  <path d=\"M 120 130 L 120 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 300 130 L 300 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 480 130 L 480 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 660 130 L 660 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"30\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"120\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">À (à Québec)</text>\n  <rect x=\"210\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"300\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">EN (en France)</text>\n  <rect x=\"390\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"480\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">AU (au Canada)</text>\n  <rect x=\"570\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"660\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">AUX (aux USA)</text>\n</svg>"
  },
  "possessives": {
    "id": "possessives",
    "title": "Possessives & Demonstratives System",
    "formulas": [
      {
        "name": "Possessive Agreement Formula",
        "math": "Owner + Possessed Noun (Gender/Number) ➜ Possessive",
        "meaning": "Possessive adjectives agree with the POSSESSED OBJECT, never the owner!",
        "example": "His car = sa voiture (voiture is fem) · Her book = son livre (livre is masc)"
      },
      {
        "name": "Vowel Clash Lifesaver Rule",
        "math": "ma / ta / sa + [vowel / silent h] ➜ MON / TON / SON",
        "meaning": "Feminine nouns starting with a vowel switch to masculine forms for phonetic flow",
        "example": "❌ ma amie ➔ ✓ mon amie · ❌ sa école ➔ ✓ son école"
      },
      {
        "name": "Demonstrative Adjectives Formula",
        "math": "ce (M) | cet (M+vowel) | cette (F) | ces (Plural)",
        "meaning": "Means THIS or THAT; cet avoids awkward vowel stops",
        "example": "ce livre · cet hôtel · cette table · ces clés"
      }
    ],
    "triggers": [
      {
        "word": "Mon / Ton / Son",
        "rule": "Used for masculine nouns OR feminine nouns starting with a vowel"
      },
      {
        "word": "Ma / Ta / Sa",
        "rule": "Used strictly for feminine nouns starting with a consonant"
      },
      {
        "word": "Mes / Tes / Ses",
        "rule": "Universal plural possessives for 1 owner (regardless of gender)"
      },
      {
        "word": "Notre / Votre / Leur",
        "rule": "Singular possession for multiple owners (our/your/their)"
      }
    ],
    "patterns": [
      {
        "pattern": "Feminine vowel clash",
        "note": "Mon amie, son idée, ton histoire (sound smooth, avoid /a-a/ clash)"
      },
      {
        "pattern": "Demonstrative before vowel: cet",
        "note": "Cet homme, cet appartement, cet été"
      },
      {
        "pattern": "Distinction: son vs leur",
        "note": "son livre = his/her book (1 owner); leur livre = their book (multi owners)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify the Possessed Item",
        "question": "What is its gender and number?",
        "action": "Plural ➔ mes/tes/ses/nos/vos/leurs. Singular ➔ see Step 2"
      },
      {
        "step": "Step 2: Check for Vowel Start",
        "question": "Does the singular noun begin with a vowel or silent h?",
        "action": "If YES ➔ MUST use mon / ton / son / cet (even if feminine!)"
      },
      {
        "step": "Step 3: Match Owner",
        "question": "Who owns it (je, tu, il/elle, nous, vous, ils)?",
        "action": "Pick the correct person's possessive row"
      },
      {
        "step": "Step 4: Demonstrative Filter",
        "question": "Are you pointing to 'this/that'?",
        "action": "ce (M) / cet (M+vowel) / cette (F) / ces (Plural)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Possessive Rule Check</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Consonant Start</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Feminine: table, maison</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Vowel / Silent H</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">amie, école, histoire</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">MA / TA / SA (ma table)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">MON / TON / SON (mon amie!)</text>\n</svg>"
  },
  "numbers": {
    "id": "numbers",
    "title": "Number Arithmetic (70–99) & Time Formulas",
    "formulas": [
      {
        "name": "French 70s Base-60 Math Formula",
        "math": "70 = soixante-dix (60+10) | 75 = soixante-quinze (60+15)",
        "meaning": "French numbers 70-79 count 10 through 19 on top of 60",
        "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
      },
      {
        "name": "French 80s Base-20 Math Formula",
        "math": "80 = quatre-vingts (4 × 20) | 85 = quatre-vingt-cinq (4 × 20 + 5)",
        "meaning": "Vigesimal base-20 calculation inherited from Celtic French",
        "example": "80 has an -s (quatre-vingts), drops -s when followed by a number (quatre-vingt-un)"
      },
      {
        "name": "French 90s Math Formula",
        "math": "90 = quatre-vingt-dix (4 × 20 + 10) | 99 = quatre-vingt-dix-neuf",
        "meaning": "4 times 20 plus the teens (10 to 19)",
        "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
      },
      {
        "name": "Clock Time Telling Formula",
        "math": "Il est + [hour] + heures + [et quart (15) / et demie (30) / moins le quart (45)]",
        "meaning": "Standard French clock formula uses 'heures' explicitly",
        "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
      }
    ],
    "triggers": [
      {
        "word": "Soixante-dix",
        "rule": "70 in France and Quebec (60 + 10)"
      },
      {
        "word": "Quatre-vingts",
        "rule": "80 in France and Quebec (4 x 20)"
      },
      {
        "word": "Quatre-vingt-dix",
        "rule": "90 in France and Quebec (4 x 20 + 10)"
      },
      {
        "word": "Et un / et demie",
        "rule": "Connectors for 21, 31, 41, 51, 61, 71 (et-un) and half past (et demie)"
      }
    ],
    "patterns": [
      {
        "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
        "note": "81 = quatre-vingt-un (NO 'et'!), 91 = quatre-vingt-onze (NO 'et'!)"
      },
      {
        "pattern": "Hyphen rule (1990 spelling reform)",
        "note": "All compound number parts can now be hyphenated: deux-cent-cinquante"
      },
      {
        "pattern": "Half past agreement",
        "note": "une heure et demie (fem agreement with heure) vs midi et demi (masc)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Decile (70s, 80s, 90s)",
        "question": "Is the number in the 70s, 80s, or 90s?",
        "action": "70s ➔ 60 + teen · 80s ➔ 4x20 + digit · 90s ➔ 4x20 + teen"
      },
      {
        "step": "Step 2: Check for 1s connector",
        "question": "Is it 21, 31, 41, 51, 61, 71?",
        "action": "Add 'et': soixante-et-un. (81 and 91 do NOT take 'et')"
      },
      {
        "step": "Step 3: Telling Time",
        "question": "Is it past the half hour?",
        "action": "Use 'moins': 4:50 = 5h moins dix"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Arithmetic of 70, 80, 90</text>\n  <path d=\"M 320 46 L 150 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 46 L 380 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 440 46 L 610 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"50\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"150\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">70 = 60 + 10</text>\n  <text x=\"150\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">soixante-dix (+11, +12...)</text>\n  <rect x=\"280\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"380\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">80 = 4 × 20</text>\n  <text x=\"380\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">quatre-vingts (+1, +2...)</text>\n  <rect x=\"510\" y=\"88\" width=\"200\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"610\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">90 = (4 × 20) + 10</text>\n  <text x=\"610\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">quatre-vingt-dix (+11...)</text>\n  <path d=\"M 150 134 L 150 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 134 L 380 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 610 134 L 610 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"45\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"150\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">75 = soixante-quinze</text>\n  <rect x=\"275\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"380\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">84 = quatre-vingt-quatre</text>\n  <rect x=\"505\" y=\"160\" width=\"210\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"610\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">95 = quatre-vingt-quinze</text>\n</svg>"
  },
  "passe_compose": {
    "id": "passe_compose",
    "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
    "formulas": [
      {
        "name": "Passé Composé Master Formula",
        "math": "Subject + [ Auxiliary (avoir / être) ] + Past Participle",
        "meaning": "Compound past for completed, one-off events",
        "example": "J’ai mangé (avoir) · Je suis parti (être)"
      },
      {
        "name": "The ÊTRE Auxiliary Selection Formula",
        "math": "17 Movement Verbs (DR & MRS VANDERTRAMP) + ALL Reflexive Verbs ➜ ÊTRE",
        "meaning": "Only specific verbs of motion/state-change and reflexives use être",
        "example": "Elle est allée · Ils se sont levés"
      },
      {
        "name": "Participle Formation Formula",
        "math": "-ER ➜ -é | -IR ➜ -i | -RE ➜ -u",
        "meaning": "Standard regular participle endings",
        "example": "parler ➜ parlé · finir ➜ fini · attendre ➜ attendu"
      },
      {
        "name": "Être Agreement Law",
        "math": "Être auxiliary ➜ Participle MUST agree with Subject (Gender + Number)",
        "meaning": "Add -e for feminine, -s for plural with être",
        "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
      }
    ],
    "triggers": [
      {
        "word": "Hier / Hier soir",
        "rule": "Past time trigger: yesterday / last night"
      },
      {
        "word": "Soudain / Tout à coup",
        "rule": "Sudden interruption trigger: always Passé Composé"
      },
      {
        "word": "Une fois / Lundi dernier",
        "rule": "Specific isolated event trigger"
      },
      {
        "word": "DR MRS VANDERTRAMP",
        "rule": "Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir, Passer"
      }
    ],
    "patterns": [
      {
        "pattern": "Avoir has NO agreement with Subject",
        "note": "Elle a mangé (NO -e!), Elles ont regardé (NO -es!)"
      },
      {
        "pattern": "Irregular participles to memorize",
        "note": "fait (faire), pris (prendre), vu (voir), eu (avoir), été (être), mis (mettre)"
      },
      {
        "pattern": "Reflexive agreement exception",
        "note": "Elle s'est lavé les mains (no agreement because COD 'les mains' is AFTER verb)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Is the verb reflexive (se...)?",
        "question": "Does the verb have se / s’?",
        "action": "If YES ➔ Aux is ÊTRE (and participle agrees with subject unless direct object follows)"
      },
      {
        "step": "Step 2: Is it in DR MRS VANDERTRAMP?",
        "question": "Is it one of the 17 movement/change-of-state verbs?",
        "action": "If YES ➔ Aux is ÊTRE (participle agrees with subject)"
      },
      {
        "step": "Step 3: Default Auxiliary",
        "question": "All other verbs",
        "action": "Use AVOIR (no subject agreement)"
      },
      {
        "step": "Step 4: Form the Participle",
        "question": "Apply regular stem or irregular form",
        "action": "-er ➔ -é, -ir ➔ -i, -re ➔ -u"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Auxiliary Selection</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Vandertramp or Reflexive?</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">17 motion verbs or se laver</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">All Other Verbs</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">95%+ of all French verbs</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"75\" y=\"160\" width=\"250\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">ÊTRE + AGREEMENT (allée, partis)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">AVOIR (NO subj agreement)</text>\n</svg>"
  },
  "object_pronouns": {
    "id": "object_pronouns",
    "title": "Object Pronouns & Placement Formulas",
    "formulas": [
      {
        "name": "Direct Object Pronoun (COD) Formula",
        "math": "Verb + [WHO? / WHAT?] ➜ me, te, le / la / l’, nous, vous, les",
        "meaning": "Replaces direct objects without any preposition",
        "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
      },
      {
        "name": "Indirect Object Pronoun (COI) Formula",
        "math": "Verb + à + [PERSON] ➜ me, te, lui (M/F), nous, vous, leur (M/F Pl)",
        "meaning": "Replaces 'à + person' (to him / to her / to them)",
        "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes parents ➔ Je LEUR téléphone"
      },
      {
        "name": "Object Pronoun Placement Formula",
        "math": "Subject + [ PRONOUN ] + Conjugated Verb",
        "meaning": "French places object pronouns BEFORE the verb (opposite of English)",
        "example": "I love you ➔ Je T'aime (not Je aime toi)"
      },
      {
        "name": "Near Future Pronoun Placement",
        "math": "Subject + Aller + [ PRONOUN ] + Infinitive",
        "meaning": "Pronoun hugs the infinitive verb it logically belongs to",
        "example": "Je vais le voir (NOT Je le vais voir)"
      }
    ],
    "triggers": [
      {
        "word": "Lui",
        "rule": "Indirect pronoun meaning 'to him' OR 'to her' (gender-neutral!)"
      },
      {
        "word": "Leur",
        "rule": "Indirect pronoun meaning 'to them' (never takes an -s as pronoun!)"
      },
      {
        "word": "Parler à, téléphoner à, donner à",
        "rule": "Classic COI trigger verbs requiring lui/leur"
      },
      {
        "word": "Moi / Toi",
        "rule": "Stress pronouns used after prepositions or in positive imperative (Regarde-moi !)"
      }
    ],
    "patterns": [
      {
        "pattern": "COD vs COI diagnostic test",
        "note": "Ask: Is there a preposition 'à'? If yes ➔ COI (lui/leur); if no ➔ COD (le/la/les)"
      },
      {
        "pattern": "Negative sentence pronoun placement",
        "note": "Je ne le vois pas (pronoun stays inside the negation sandwich!)"
      },
      {
        "pattern": "Elision with vowels",
        "note": "Je l'adore, il m'attend, on t'écoute"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify the Verb's Object",
        "question": "What or who is receiving the action?",
        "action": "Highlight the object phrase"
      },
      {
        "step": "Step 2: Is there a preposition 'à' before a person?",
        "question": "Does the verb take 'à quelqu'un'?",
        "action": "If YES ➔ COI: LUI (singular) / LEUR (plural)"
      },
      {
        "step": "Step 3: Direct Object (No preposition)?",
        "question": "Does it answer directly 'what' or 'who'?",
        "action": "If YES ➔ COD: LE / LA / L' / LES"
      },
      {
        "step": "Step 4: Position Before Verb",
        "question": "Where does it go?",
        "action": "Right before the conjugated verb (or before infinitive if present)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">COD vs COI Decision</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Direct: Verb + Object</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">No preposition (voir qqn, manger qch)</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Indirect: Verb + À + Person</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Preposition à (parler à, écrire à)</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">COD: LE / LA / LES (Je la vois)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">COI: LUI / LEUR (Je lui parle)</text>\n</svg>"
  },
  "imperatives": {
    "id": "imperatives",
    "title": "Imperative Commands & Modal Verbs",
    "formulas": [
      {
        "name": "Imperative Formation Formula",
        "math": "Present tense (tu / nous / vous) - Subject Pronoun = Command",
        "meaning": "Drop the subject pronoun; only 3 verb persons exist for commands",
        "example": "Tu viens ➔ Viens ! · Nous allons ➔ Allons ! · Vous mangez ➔ Mangez !"
      },
      {
        "name": "The -ER Verb 'Tu' -S Drop Law",
        "math": "-ER verbs (and aller) in 'tu' imperative ➜ DROP THE FINAL -S",
        "meaning": "Tu regardes ➔ Regarde ! · Tu vas ➔ Va !",
        "example": "Parle ! (NOT Parles !) · Écoute ! (NOT Écoutes !)"
      },
      {
        "name": "Modal Verbs Formula",
        "math": "Pouvoir / Devoir / Vouloir + INFINITIVE",
        "meaning": "Modals are conjugated, secondary action stays in the infinitive",
        "example": "Je peux venir · Il doit partir · Nous voulons manger"
      }
    ],
    "triggers": [
      {
        "word": "Pouvoir (peux, peut, pouvons...)",
        "rule": "Expresses ability or polite permission ('can / may')"
      },
      {
        "word": "Devoir (dois, doit, devons...)",
        "rule": "Expresses duty, obligation, or probability ('must / have to')"
      },
      {
        "word": "Vouloir (veux, veut, voulons...)",
        "rule": "Expresses desire/will ('want to') ➔ use 'voudrais' for politeness"
      },
      {
        "word": "Falloir (Il faut...)",
        "rule": "Impersonal obligation ('one must / it is necessary to')"
      }
    ],
    "patterns": [
      {
        "pattern": "Pronoun placement in affirmative commands",
        "note": "Hyphenate after the verb: Mange-le ! Donnez-moi !"
      },
      {
        "pattern": "Negative imperative pronoun placement",
        "note": "Precedes verb normally: Ne le mange pas ! Ne me donne pas !"
      },
      {
        "pattern": "Exception: restoration of -s before y/en",
        "note": "Vas-y ! Manges-en ! (restores -s solely to prevent vowel clashing)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Choose Addressee",
        "question": "Are you commanding a friend (tu), a group/polite (vous), or including yourself (nous)?",
        "action": "Pick tu, nous, or vous"
      },
      {
        "step": "Step 2: Drop Subject Pronoun",
        "question": "Remove tu / nous / vous",
        "action": "Keep only the verb stem"
      },
      {
        "step": "Step 3: Check -ER 'tu' form",
        "question": "Is it an -ER verb in the 'tu' form?",
        "action": "Drop the final letter 's' (Parle ! Regarde !)"
      },
      {
        "step": "Step 4: Check Affirmative vs Negative",
        "question": "Is it a 'do it' or 'don't do it' command?",
        "action": "Affirmative: Verb-Pronoun (Aide-moi !) · Negative: Ne pronoun verb pas (Ne m'aide pas !)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Command Formation</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">-ER Verbs in 'Tu'</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">parler, regarder, aller</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">All Other Verbs / Vous</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">finir, attendre, vous-forms</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">DROP THE 'S' (Parle ! Va !)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">KEEP REGULAR (Finis ! Parlez !)</text>\n</svg>"
  },
  "useful_structures": {
    "id": "useful_structures",
    "title": "High-Frequency French Structures",
    "formulas": [
      {
        "name": "C'est vs Il est Decision Formula",
        "math": "C'EST + [Determiner + Noun] | IL EST + [Bare Adjective]",
        "meaning": "Use c'est with modified nouns; use il est directly with bare adjectives",
        "example": "C'est un bon médecin (modified noun) vs Il est intelligent (bare adjective)"
      },
      {
        "name": "Il y a Existence & Past Formula",
        "math": "Il y a + [Noun] (There is/are) | Passé Composé + Il y a + [Time] (Ago)",
        "meaning": "Dual meaning: state of presence OR elapsed time ago",
        "example": "Il y a deux stylos sur la table · Je suis arrivé il y a dix minutes"
      },
      {
        "name": "Avoir Besion / Envie Formulas",
        "math": "Avoir besoin de + [Inf/Noun] | Avoir envie de + [Inf/Noun]",
        "meaning": "Need / Want in French express physical possession of a need/desire",
        "example": "J'ai besoin d'eau · J'ai envie de voyager"
      }
    ],
    "triggers": [
      {
        "word": "C'est",
        "rule": "Followed by article + noun, names, or whole statements (C'est génial)"
      },
      {
        "word": "Il est / Elle est",
        "rule": "Followed by professions without article or bare adjectives (Il est avocat, Elle est gentille)"
      },
      {
        "word": "Il y a",
        "rule": "Invariable: stays 'il y a' whether followed by singular or plural noun"
      },
      {
        "word": "Avoir l'air",
        "rule": "Means 'to look / seem' followed by adjective: Tu as l'air fatigué"
      }
    ],
    "patterns": [
      {
        "pattern": "Never say 'Il est un médecin'",
        "note": "❌ Il est un médecin ➔ ✓ C'est un médecin OR Il est médecin (bare profession)"
      },
      {
        "pattern": "Negation of il y a",
        "note": "Il n'y a pas DE + noun (partitive drops to de: Il n'y a pas de problème)"
      },
      {
        "pattern": "De elision with avoir besoin/envie",
        "note": "J'ai besoin d'argent, j'ai envie d'apprendre"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check what follows the verb",
        "question": "Is there a determiner/article (un, une, le, mon)?",
        "action": "If YES ➔ Use C'EST (C'est un prof)"
      },
      {
        "step": "Step 2: Is it a bare adjective or bare profession?",
        "question": "No article before the word?",
        "action": "If YES ➔ Use IL EST / ELLE EST (Il est prof, Elle est calme)"
      },
      {
        "step": "Step 3: Indicating existence?",
        "question": "Do you want to say 'There is / There are'?",
        "action": "Use IL Y A (never changes for plural)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">C'est vs Il est</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Determiner + Noun</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">un ami, mon père, une idée</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Bare Adjective / Profession</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">gentil, en retard, ingénieur</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">C'EST (C'est mon ami)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">IL EST (Il est gentil)</text>\n</svg>"
  },
  "quebec_vocab": {
    "id": "quebec_vocab",
    "title": "Quebec French Lexical Shifts & Affrication",
    "formulas": [
      {
        "name": "Quebec High-Frequency Lexical Formula",
        "math": "France Term ➜ Quebec Equivalent",
        "meaning": "Standard Quebec terms heard across Montreal & QC daily life",
        "example": "petit déjeuner ➜ déjeuner · déjeuner ➜ dîner · dîner ➜ souper"
      },
      {
        "name": "The Quebec Affrication Law",
        "math": "T + [i / u] ➜ [ts] | D + [i / u] ➜ [dz]",
        "meaning": "Before high front vowels, /t/ and /d/ naturally produce a subtle affricate hiss",
        "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
      },
      {
        "name": "The Quebec Interrogative -tu Particle",
        "math": "Statement + -tu = Yes/No Question",
        "meaning": "Conversational question marker in spoken Quebec French",
        "example": "Tu viens-tu ? (Are you coming?) · C'est-tu bon ? (Is it good?)"
      }
    ],
    "triggers": [
      {
        "word": "Magasiner",
        "rule": "Quebec for 'faire du shopping' (to go shopping)"
      },
      {
        "word": "Fin de semaine",
        "rule": "Quebec for 'le week-end'"
      },
      {
        "word": "Char",
        "rule": "Quebec informal for 'voiture' (car)"
      },
      {
        "word": "Chum / Blonde",
        "rule": "Quebec for boyfriend / girlfriend"
      },
      {
        "word": "C'est tiguidou !",
        "rule": "Quebec idiom meaning 'It's all good / perfect!'"
      }
    ],
    "patterns": [
      {
        "pattern": "Meals 1 step shift",
        "note": "Morning: déjeuner, Noon: dîner, Evening: souper"
      },
      {
        "pattern": "Short vowels open up in closed syllables",
        "note": "fête sounds closer to /faɛ̯t/, père to /paɛ̯ʁ/"
      },
      {
        "pattern": "Anglicisms adapted into French verbs",
        "note": "canceller (annuler), checker (vérifier), parker (garer)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Identify Quebec Conversational Setting",
        "question": "Are you chatting with a local in Montreal/Quebec?",
        "action": "Use local terms: fin de semaine, char, magasiner, souper"
      },
      {
        "step": "Step 2: Listen for Affrication",
        "question": "Does the word have ti, tu, di, du?",
        "action": "Hear the native 'ts' and 'dz' sound: /tsy/ for 'tu'"
      },
      {
        "step": "Step 3: Question particle '-tu'",
        "question": "Did the speaker add '-tu' after the verb?",
        "action": "Recognize it as an informal question marker: On y va-tu ?"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Quebec Meal Shifts</text>\n  <rect x=\"50\" y=\"80\" width=\"200\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"150\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">Morning (Breakfast)</text>\n  <text x=\"150\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">QC: Déjeuner (FR: Petit-déj)</text>\n  <rect x=\"280\" y=\"80\" width=\"200\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"380\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">Noon (Lunch)</text>\n  <text x=\"380\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">QC: Dîner (FR: Déjeuner)</text>\n  <rect x=\"510\" y=\"80\" width=\"200\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"610\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">Evening (Dinner)</text>\n  <text x=\"610\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">QC: Souper (FR: Dîner)</text>\n  <path d=\"M 250 106 L 280 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 480 106 L 510 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Logical 3-tier shift: Déjeuner ➔ Dîner ➔ Souper</text>\n</svg>"
  },
  "verb_endings": {
    "id": "verb_endings",
    "title": "Verb Endings: Phonetics vs Spelling Deduction",
    "formulas": [
      {
        "name": "Auditory Similarity Rule",
        "math": "-er (Inf) = -é (Participle) = -ez (Vous) ➜ /e/",
        "meaning": "All three endings sound 100% IDENTICAL to the ear (/e/)",
        "example": "parler, parlé, parlez all sound the exact same: /paʁle/"
      },
      {
        "name": "The 'Vendre' Deduction Test",
        "math": "Replace suspicious verb with 'VENDRE' (or faire)",
        "meaning": "Determine whether to write -er (infinitive) or -é (past participle)",
        "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
      },
      {
        "name": "Participle Deduction Test",
        "math": "Replace suspicious verb with 'VENDU' (or fait)",
        "meaning": "If 'vendu' makes sense, write -é",
        "example": "J'ai mang... ➔ J'ai VENDU ➔ J'ai MANGÉ"
      }
    ],
    "triggers": [
      {
        "word": "Vendre / Faire",
        "rule": "Infinitive replacement test word (hear the distinct /ʁ/ sound)"
      },
      {
        "word": "Vendu / Fait",
        "rule": "Past participle replacement test word (hear the distinct /y/ or /t/ sound)"
      },
      {
        "word": "-ons",
        "rule": "Unambiguous written and spoken /ɔ̃/ ending for nous"
      },
      {
        "word": "-ent",
        "rule": "Unambiguous silent written marker for 3rd person plural ils/elles"
      }
    ],
    "patterns": [
      {
        "pattern": "Two verbs in a row ➜ Second is Infinitive",
        "note": "Je veux partir · Il aime voyager · On doit réviser"
      },
      {
        "pattern": "After preposition ➜ Always Infinitive",
        "note": "pour manger, sans parler, avant de partir, au lieu de dormir"
      },
      {
        "pattern": "After avoir / être ➜ Past Participle",
        "note": "J'ai regardé, elle est partie"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Hear the /e/ Sound",
        "question": "Does the word sound like /e/ at the end?",
        "action": "Options: -er (Inf), -é (Participle), or -ez (vous)"
      },
      {
        "step": "Step 2: Apply the 'Vendre' Test",
        "question": "Can you substitute the word 'VENDRE' into the sentence?",
        "action": "If YES ➔ Write -ER (infinitive: Je dois parler)"
      },
      {
        "step": "Step 3: Can you substitute 'VENDU'?",
        "question": "Does 'VENDU' fit naturally after avoir/être?",
        "action": "If YES ➔ Write -É (participle: J'ai parlé)"
      },
      {
        "step": "Step 4: Is the subject 'Vous'?",
        "question": "Is the immediate subject vous?",
        "action": "If YES ➔ Write -EZ (vous parlez)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Hearing /e/ : -er or -é ?</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Test with \"VENDRE\"</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Can you say: Je veux vendre ?</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Test with \"VENDU\"</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Can you say: J'ai vendu ?</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">WRITE -ER (Infinitive: parler)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">WRITE -É (Participle: parlé)</text>\n</svg>"
  },
  "pronominal": {
    "id": "pronominal",
    "title": "Pronominal & Reflexive Verbs Master Rules",
    "formulas": [
      {
        "name": "Reflexive Present Conjugation Formula",
        "math": "Subject + [ me / te / se / nous / vous / se ] + Verb",
        "meaning": "Reflexive pronoun matches the subject doing the action to themselves",
        "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
      },
      {
        "name": "Pronominal Passé Composé Formula",
        "math": "Subject + Reflexive Pronoun + ÊTRE + Past Participle",
        "meaning": "100% of pronominal verbs require ÊTRE in the passé composé",
        "example": "Elle s'est réveillée · Nous nous sommes couchés"
      },
      {
        "name": "Reflexive Agreement Law",
        "math": "Participle agrees with Reflexive Pronoun IF it is a DIRECT object (COD)",
        "meaning": "Agrees when action hits self directly; no agreement if body part follows",
        "example": "Elle s'est lavée (agrees) vs Elle s'est lavé les mains (no agreement: 'les mains' is direct object!)"
      }
    ],
    "triggers": [
      {
        "word": "Se lever, se coucher, s'habiller",
        "rule": "Daily routine pronominal verbs"
      },
      {
        "word": "Se souvenir de / Se rappeler",
        "rule": "Memory verbs requiring reflexive structures"
      },
      {
        "word": "S'entendre bien avec",
        "rule": "Reciprocal verb meaning 'to get along well with'"
      },
      {
        "word": "S'en aller",
        "rule": "Idiomatic pronominal verb meaning 'to leave / head out'"
      }
    ],
    "patterns": [
      {
        "pattern": "Negative reflexive sandwich",
        "note": "Je NE me réveille PAS (pronoun hugs verb inside ne... pas)"
      },
      {
        "pattern": "Near future reflexive placement",
        "note": "Je vais ME lever (reflexive pronoun changes for subject but sits before infinitive)"
      },
      {
        "pattern": "Imperative reflexive command",
        "note": "Lève-toi ! Réveillez-vous ! (uses -toi in affirmative commands)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Is the action done to oneself or reciprocal?",
        "question": "Is someone doing something to themselves (brushing hair, waking up)?",
        "action": "Use pronominal form: SE + verb"
      },
      {
        "step": "Step 2: Match the Reflexive Pronoun",
        "question": "Who is the subject?",
        "action": "je ➔ me, tu ➔ te, il ➔ se, nous ➔ nous, vous ➔ vous, ils ➔ se"
      },
      {
        "step": "Step 3: Past Tense Check",
        "question": "Is it Passé Composé?",
        "action": "Always use ÊTRE as auxiliary"
      },
      {
        "step": "Step 4: Agreement Filter",
        "question": "Is a direct object specified immediately after the verb?",
        "action": "If YES (les mains, les dents) ➔ NO agreement! If NO ➔ Agree with subject"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Pronominal Passé Composé</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">No Direct Object Follows</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Elle s'est lavée...</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Direct Object Follows</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Elle s'est lavé [les mains]</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">AGREES: +E (Elle s'est lavée)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">NO AGREEMENT (lavé les mains)</text>\n</svg>"
  },
  "cod_coi": {
    "id": "cod_coi",
    "title": "COD vs COI Distinction & Dual Pronoun Ordering",
    "formulas": [
      {
        "name": "Direct Object (COD) Identification Formula",
        "math": "Subject + Verb + [QUI ? / QUOI ?] ➜ COD",
        "meaning": "No preposition separates the verb from the direct noun",
        "example": "J'invite mes amis ➔ Je LES invite"
      },
      {
        "name": "Indirect Object (COI) Identification Formula",
        "math": "Subject + Verb + [À QUI ?] ➜ COI (lui / leur)",
        "meaning": "Separated by preposition 'à' pointing to a person",
        "example": "Je parle à mon patron ➔ Je LUI parle"
      },
      {
        "name": "Dual Pronoun Order Hierarchy Formula",
        "math": "[me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ [y] ➔ [en] ➔ VERB",
        "meaning": "Strict left-to-right order before the verb when using two pronouns",
        "example": "Il me le donne · Je le lui envoie"
      }
    ],
    "triggers": [
      {
        "word": "Lui",
        "rule": "COI singular (to him / to her) — gender blind"
      },
      {
        "word": "Leur",
        "rule": "COI plural (to them) — gender blind, never takes -s"
      },
      {
        "word": "Téléphoner à, sourire à, répondre à",
        "rule": "Verbs that MUST take COI because of fixed preposition 'à'"
      },
      {
        "word": "Regarder, écouter, attendre, chercher",
        "rule": "Direct verbs in French (take COD, no preposition unlike English!)"
      }
    ],
    "patterns": [
      {
        "pattern": "English false friend prepositions",
        "note": "Attendre qqn (to wait for someone), chercher qch (to look for something) take COD in French!"
      },
      {
        "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
        "note": "Il ME LE prête (1st/2nd person precedes 3rd direct)"
      },
      {
        "pattern": "Dual pronoun: le/la/les precedes lui/leur",
        "note": "Je LE LUI dis (3rd direct precedes 3rd indirect)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Verb Transitivity",
        "question": "Does the French verb take 'à' with a person?",
        "action": "If YES ➔ COI (lui / leur). If NO ➔ COD (le / la / les)"
      },
      {
        "step": "Step 2: Replace the First Object",
        "question": "What pronoun represents it?",
        "action": "Tag as COD or COI"
      },
      {
        "step": "Step 3: Arrange Dual Pronouns",
        "question": "Are there two pronouns?",
        "action": "Follow the hierarchy: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ Verb"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Dual Pronoun Highway</text>\n  <rect x=\"20\" y=\"80\" width=\"130\" height=\"50\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"85\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">1. Me / Te</text>\n  <text x=\"85\" y=\"120\" text-anchor=\"middle\" class=\"flow-text-sub\">Nous / Vous</text>\n  <rect x=\"170\" y=\"80\" width=\"130\" height=\"50\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"235\" y=\"102\" text-anchor=\"middle\" class=\"flow-res-title\">2. Le / La</text>\n  <text x=\"235\" y=\"120\" text-anchor=\"middle\" class=\"flow-res-val\">Les (COD)</text>\n  <rect x=\"320\" y=\"80\" width=\"130\" height=\"50\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"385\" y=\"102\" text-anchor=\"middle\" class=\"flow-res-title\">3. Lui</text>\n  <text x=\"385\" y=\"120\" text-anchor=\"middle\" class=\"flow-res-val\">Leur (COI)</text>\n  <rect x=\"470\" y=\"80\" width=\"120\" height=\"50\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"530\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">4. Y</text>\n  <text x=\"530\" y=\"120\" text-anchor=\"middle\" class=\"flow-text-sub\">(Places)</text>\n  <rect x=\"610\" y=\"80\" width=\"120\" height=\"50\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"670\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-title\">5. En</text>\n  <text x=\"670\" y=\"120\" text-anchor=\"middle\" class=\"flow-text-sub\">(Quantities)</text>\n  <path d=\"M 150 105 L 170 105\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 300 105 L 320 105\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 450 105 L 470 105\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 590 105 L 610 105\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Example: Je [le] [lui] donne · Il [me] [les] envoie</text>\n</svg>"
  },
  "futur_proche": {
    "id": "futur_proche",
    "title": "Futur Proche: The 'Aller + Infinitif' Formula",
    "formulas": [
      {
        "name": "Futur Proche Affirmative Formula",
        "math": "Subject + ALLER (present) + INFINITIVE",
        "meaning": "Used for immediate plans, intentions, and definite upcoming events (Going to...)",
        "example": "Je vais manger · Nous allons voyager · Ils vont partir"
      },
      {
        "name": "Futur Proche Negative Formula",
        "math": "Subject + [ ne + ALLER + pas ] + INFINITIVE",
        "meaning": "Negation wraps around the conjugated verb 'aller', leaving the infinitive outside",
        "example": "Je ne vais pas travailler demain (NOT Je ne travailler pas)"
      },
      {
        "name": "Pronominal Futur Proche Formula",
        "math": "Subject + ALLER + [ Reflexive Pronoun ] + INFINITIVE",
        "meaning": "The reflexive pronoun must agree with the subject and sit right in front of the infinitive",
        "example": "Je vais ME coucher · Vous allez VOUS amuser"
      }
    ],
    "triggers": [
      {
        "word": "Bientôt / Ce soir / Demain",
        "rule": "Near future time triggers"
      },
      {
        "word": "Dans cinq minutes / Tout de suite",
        "rule": "Imminent future triggers"
      },
      {
        "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
        "rule": "Conjugation of auxiliary aller in present tense"
      }
    ],
    "patterns": [
      {
        "pattern": "Negation wraps around aller only",
        "note": "Je ne vais pas dormir · Elle ne va pas venir"
      },
      {
        "pattern": "Pronoun placement before infinitive",
        "note": "Je vais LE voir · Il va ME téléphoner (pronoun belongs to infinitive action)"
      },
      {
        "pattern": "Spoken Quebec contraction",
        "note": "M'as manger (spoken informal for Je vais manger)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Intent or Near Future",
        "question": "Is this an intended plan or event happening soon?",
        "action": "Use Futur Proche (Aller + Inf)"
      },
      {
        "step": "Step 2: Conjugate ALLER",
        "question": "Who is the subject?",
        "action": "je vais, tu vas, il va, nous allons, vous allez, ils vont"
      },
      {
        "step": "Step 3: Attach the Main Action",
        "question": "What is the action verb?",
        "action": "Keep in the INFINITIVE (-er, -ir, -re)"
      },
      {
        "step": "Step 4: Check Pronouns or Negation",
        "question": "Is it negative or does it have an object pronoun?",
        "action": "Ne + Aller + Pas + [Pronoun] + Infinitive"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Futur Proche Structure</text>\n  <rect x=\"60\" y=\"80\" width=\"180\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"150\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">1. SUBJECT</text>\n  <text x=\"150\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">Je / Tu / Nous...</text>\n  <rect x=\"280\" y=\"74\" width=\"200\" height=\"64\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"102\" text-anchor=\"middle\" class=\"flow-text-bold\">2. ALLER (présent)</text>\n  <text x=\"380\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">vais, vas, va, allons...</text>\n  <rect x=\"520\" y=\"80\" width=\"180\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"610\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">3. INFINITIF</text>\n  <text x=\"610\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">manger, partir...</text>\n  <path d=\"M 240 106 L 280 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 480 106 L 520 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Negation wraps Aller: Je [ne] vais [pas] partir</text>\n</svg>"
  },
  "futur_simple": {
    "id": "futur_simple",
    "title": "Futur Simple: Future Stem + Avoir Endings Formula",
    "formulas": [
      {
        "name": "Futur Simple Master Formula",
        "math": "Future Stem (Infinitive) + [ -ai, -as, -a, -ons, -ez, -ont ]",
        "meaning": "Notice the endings are literally the present tense of AVOIR (ai, as, a, ons, ez, ont)!",
        "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
      },
      {
        "name": "-RE Verbs Future Stem Rule",
        "math": "Infinitive ending in -re ➜ DROP THE 'E' + Endings",
        "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
        "example": "prendre ➔ je prendrai · attendre ➔ j'attendrai"
      },
      {
        "name": "Core Irregular Future Stems",
        "math": "être: ser- | avoir: aur- | aller: ir- | faire: fer- | pouvoir: pourr- | vouloir: voudr-",
        "meaning": "Stems always end in 'r', then take standard endings",
        "example": "je serai, j'aurai, j'irai, je ferai, je pourrai, je voudrai"
      }
    ],
    "triggers": [
      {
        "word": "L'année prochaine / Dans dix ans",
        "rule": "Distant future time markers"
      },
      {
        "word": "Quand / Dès que + Future",
        "rule": "Conjunctions of time triggering future simple in French"
      },
      {
        "word": "Si + Présent ➔ Futur Simple",
        "rule": "First conditional rule (Si j'ai le temps, je viendrai)"
      }
    ],
    "patterns": [
      {
        "pattern": "Future stems ALWAYS end in 'R'",
        "note": "parler-, finir-, vendr-, ser-, aur-, ir-, fer-"
      },
      {
        "pattern": "Do not confuse -ons with nous imparfait",
        "note": "nous parlerons (Futur /ɔ̃/) vs nous parlions (Imparfait /jɔ̃/)"
      },
      {
        "pattern": "3rd person plural is -ont (not -ent!)",
        "note": "ils parleront (sounds like /ɔ̃/, rhymes with ons!)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Determine the Future Stem",
        "question": "Is the verb regular (-er, -ir, -re)?",
        "action": "Keep infinitive (drop 'e' from -re). If irregular, use 'R' root (ser-, aur-, ir-, fer-)"
      },
      {
        "step": "Step 2: Attach AVOIR Endings",
        "question": "What is the subject?",
        "action": "je ➔ -ai, tu ➔ -as, il ➔ -a, nous ➔ -ons, vous ➔ -ez, ils ➔ -ont"
      },
      {
        "step": "Step 3: Pronounce Final Suffix",
        "question": "Note the vowels",
        "action": "je parlerai (/e/), tu parleras (/a/), ils parleront (/ɔ̃/)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Futur Simple Assembly</text>\n  <rect x=\"90\" y=\"80\" width=\"220\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"200\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">FUTURE STEM (infinitive / -R)</text>\n  <text x=\"200\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">parler- · finir- · ser- · aur-</text>\n  <text x=\"350\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"410\" y=\"80\" width=\"260\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"540\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">AVOIR ENDINGS</text>\n  <text x=\"540\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">-ai, -as, -a, -ons, -ez, -ont</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">parler + ai ➔ je parlerai · ser + ons ➔ nous serons</text>\n</svg>"
  },
  "imparfait": {
    "id": "imparfait",
    "title": "Imparfait: Stem Extraction & Past Setting Rules",
    "formulas": [
      {
        "name": "Imparfait Stem Extraction Formula",
        "math": "Nous (Présent) - ONS = Imparfait Universal Stem",
        "meaning": "Works for 99.9% of all verbs in the French language!",
        "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
      },
      {
        "name": "Imparfait Universal Endings Formula",
        "math": "Stem + [ -ais, -ais, -ait, -ions, -iez, -aient ]",
        "meaning": "Notice -ais, -ais, -ait, -aient are all pronounced identically: /ɛ/",
        "example": "je parlais, tu parlais, il parlait, ils parlaient all sound /paʁlɛ/"
      },
      {
        "name": "The Only Irregular Stem in French",
        "math": "ÊTRE ➜ Stem is ÉT- (j'étais, tu étais, il était...)",
        "meaning": "Every single other verb extracts its stem from nous in the present!",
        "example": "j'étais, nous étions, vous étiez"
      }
    ],
    "triggers": [
      {
        "word": "Tous les jours / Chaque été",
        "rule": "Repeated habit trigger ➔ always Imparfait"
      },
      {
        "word": "Pendant que... (While...)",
        "rule": "Continuous background action trigger ➔ Imparfait"
      },
      {
        "word": "Quand j'étais jeune / petit",
        "rule": "Past ongoing era / state of life"
      },
      {
        "word": "Il faisait beau / Il était 14h",
        "rule": "Past scenery, weather, time, emotional state"
      }
    ],
    "patterns": [
      {
        "pattern": "-ais, -ait, -aient sound IDENTICAL",
        "note": "All pronounced /ɛ/ (open e). The subject pronoun tells you who did it!"
      },
      {
        "pattern": "Nous and Vous have an audible 'i'",
        "note": "nous parlions (/paʁljɔ̃/), vous parliez (/paʁlje/)"
      },
      {
        "pattern": "Verbs in -ger and -cer",
        "note": "je mangeais (keep 'e'), je commençais (add cedilla 'ç')"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Take Nous in Present Tense",
        "question": "What is the present tense for 'nous'?",
        "action": "Nous parlons, nous faisons, nous buvons"
      },
      {
        "step": "Step 2: Lop off -ONS",
        "question": "Remove the 3 letters -ons",
        "action": "parl-, fais-, buv- (this is your stem)"
      },
      {
        "step": "Step 3: Is the verb ÊTRE?",
        "question": "Is it the single exception être?",
        "action": "Use the stem ét-"
      },
      {
        "step": "Step 4: Attach Imparfait Endings",
        "question": "Match the subject",
        "action": "-ais, -ais, -ait, -ions, -iez, -aient"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Imparfait Stem Extraction</text>\n  <rect x=\"60\" y=\"80\" width=\"180\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"150\" y=\"104\" text-anchor=\"middle\" class=\"flow-text-title\">1. Nous (présent)</text>\n  <text x=\"150\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">nous finissons</text>\n  <text x=\"260\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"24\">−</text>\n  <rect x=\"280\" y=\"80\" width=\"100\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"330\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">2. DROP</text>\n  <text x=\"330\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">-ONS</text>\n  <text x=\"400\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"24\">=</text>\n  <rect x=\"420\" y=\"80\" width=\"120\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"480\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">3. STEM</text>\n  <text x=\"480\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">finiss-</text>\n  <text x=\"560\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"24\">+</text>\n  <rect x=\"580\" y=\"80\" width=\"130\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"645\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">4. ENDING</text>\n  <text x=\"645\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">-ais, -ait...</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Result: je finissais · nous finissions · ils finissaient</text>\n</svg>"
  },
  "pronom_y": {
    "id": "pronom_y",
    "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
    "formulas": [
      {
        "name": "Pronoun Y Location Replacement Formula",
        "math": "[ à / dans / sur / en / chez + PLACE ] ➜ Y",
        "meaning": "Replaces any geographic place or location (English: THERE)",
        "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
      },
      {
        "name": "Pronoun Y Inanimate Object Formula",
        "math": "Verb + à + [NON-PERSON / THING] ➜ Y",
        "meaning": "Replaces 'à + thing/concept' (thinking about, participating in)",
        "example": "Je pense à mon avenir ➔ J'Y pense (NOT Je pense à lui: people take stress pronouns!)"
      },
      {
        "name": "Pronoun Y Placement Formula",
        "math": "Subject + [ Y ] + Conjugated Verb",
        "meaning": "Sits immediately before the verb",
        "example": "Tu y vas · On n'y va pas · Vas-y ! (Imperative)"
      }
    ],
    "triggers": [
      {
        "word": "Penser à (une chose)",
        "rule": "Penser à un examen ➔ y penser"
      },
      {
        "word": "Participer à, réfléchir à, s'intéresser à",
        "rule": "Verbs taking 'à' + inanimate ideas ➔ replaced by Y"
      },
      {
        "word": "Aller à, habiter à, vivre en, être chez",
        "rule": "Location triggers ➔ replaced by Y"
      },
      {
        "word": "Il y a",
        "rule": "Contains pronoun Y: literally 'it there has'"
      }
    ],
    "patterns": [
      {
        "pattern": "Y NEVER replaces a person!",
        "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle (use stress pronoun for people!)"
      },
      {
        "pattern": "Vas-y imperative restoration of -s",
        "note": "Va + y ➔ Vas-y ! (adds 's' to avoid ugly /a-i/ vowel collision)"
      },
      {
        "pattern": "Near future placement",
        "note": "Je vais Y aller (sits right in front of the infinitive)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Preposition",
        "question": "Is the phrase introduced by à, en, dans, sur, sous, or chez?",
        "action": "If YES ➔ Candidate for Y"
      },
      {
        "step": "Step 2: Is it a Person?",
        "question": "Does the phrase refer to a human being?",
        "action": "If YES ➔ DO NOT USE Y! Use à lui / à elle. If NO ➔ Proceed to Step 3"
      },
      {
        "step": "Step 3: Is it a Place or a Thing?",
        "question": "Is it a location or an abstract concept (à mon travail, à mon avenir)?",
        "action": "Replace entire phrase with Y"
      },
      {
        "step": "Step 4: Place Before Verb",
        "question": "Where does it sit?",
        "action": "Right before the conjugated verb (or before infinitive)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">When to use \"Y\"</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Location / Place</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">à Paris, chez moi, en classe</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">à + Person (Human)</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">à Pierre, à mes amis</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">REPLACE WITH Y (J'y vais)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">NO Y! (Je pense à lui / à eux)</text>\n</svg>"
  },
  "conditionnel": {
    "id": "conditionnel",
    "title": "Conditionnel Présent: Politeness & Hypotheticals",
    "formulas": [
      {
        "name": "Conditionnel Assembly Formula",
        "math": "Future Stem (Infinitive / -R) + Imparfait Endings (-ais, -ait...)",
        "meaning": "Hybrid tense: uses the Future body with the Imparfait voice!",
        "example": "aimer ➔ stem aimer- + -ais ➔ J'aimerais · être ➔ stem ser- + -ait ➔ Il serait"
      },
      {
        "name": "Universal Politeness Formula",
        "math": "Je voudrais / J'aimerais / Pourriez-vous + [Infinitive / Noun]",
        "meaning": "Softens demands in shops, restaurants, and professional settings",
        "example": "Je veux un café (rude) ➔ Je VOUDRAIS un café (polite)"
      },
      {
        "name": "Second Conditional 'Si' Formula",
        "math": "SI + Imparfait ➔ Conditionnel Présent",
        "meaning": "Hypothetical unreal condition ('If I had... I would...')",
        "example": "Si j'avais de l'argent, j'achèterais une maison"
      }
    ],
    "triggers": [
      {
        "word": "Je voudrais / J'aimerais",
        "rule": "Essential politeness formula in cafés, bakeries, customer service"
      },
      {
        "word": "Pourriez-vous / Auriez-vous",
        "rule": "Polite requests: Could you / Would you have?"
      },
      {
        "word": "Si j'étais vous...",
        "rule": "Giving advice: If I were you, I would..."
      },
      {
        "word": "À votre place, je ferais...",
        "rule": "In your shoes, I would do..."
      }
    ],
    "patterns": [
      {
        "pattern": "Never put conditionnel directly after 'SI'",
        "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su (Les 'si' n'aiment pas les 'rais'!)"
      },
      {
        "pattern": "Pronunciation difference: -ai vs -ais",
        "note": "Futur: je parlerai (/e/ closed) vs Conditionnel: je parlerais (/ɛ/ open)"
      },
      {
        "pattern": "Irregular stems match the future",
        "note": "aur- (avoir), ser- (être), ir- (aller), fer- (faire), pourr- (pouvoir), devr- (devoir)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Intent (Polite or Hypothetical)",
        "question": "Are you ordering food, making a request, or imagining 'what if'?",
        "action": "Use Conditionnel Présent"
      },
      {
        "step": "Step 2: Get the Future Stem",
        "question": "Take the infinitive (or irregular -R stem)",
        "action": "voudr-, aimer-, pourr-, ser-"
      },
      {
        "step": "Step 3: Attach Imparfait Endings",
        "question": "Match the subject",
        "action": "-ais, -ais, -ait, -ions, -iez, -aient"
      },
      {
        "step": "Step 4: Check 'Si' Clause",
        "question": "Does the sentence start with 'Si'?",
        "action": "Ensure the verb right after 'si' is in the IMPARFAIT!"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Conditionnel Hybrid</text>\n  <rect x=\"90\" y=\"80\" width=\"220\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"200\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">FUTURE STEM (Body)</text>\n  <text x=\"200\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">aimer- · voudr- · pourr- · ser-</text>\n  <text x=\"350\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"410\" y=\"80\" width=\"260\" height=\"52\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"540\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">IMPARFAIT ENDINGS (Voice)</text>\n  <text x=\"540\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">-ais, -ais, -ait, -ions, -iez, -aient</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">aimer + ais ➔ J'aimerais · voudr + ais ➔ Je voudrais</text>\n</svg>"
  },
  "gerondif": {
    "id": "gerondif",
    "title": "Le Gérondif: Simultaneous Actions & Manner",
    "formulas": [
      {
        "name": "Gérondif Formation Formula",
        "math": "EN + [ Nous Stem - ONS ] + -ANT",
        "meaning": "Extract the present 'nous' stem, add preposition 'en' and suffix '-ant'",
        "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
      },
      {
        "name": "Simultaneous Actions Formula",
        "math": "Main Action + EN + Participle (While doing X, Y happened)",
        "meaning": "Both actions must be performed by the exact same subject at the same time",
        "example": "Il écoute de la musique en étudiant (He listens to music while studying)"
      },
      {
        "name": "Manner & Means Formula",
        "math": "EN + Participle = 'By doing' / 'Through'",
        "meaning": "Explains how a result was achieved",
        "example": "C'est en forgeant qu'on devient forgeron · On apprend en faisant des erreurs"
      }
    ],
    "triggers": [
      {
        "word": "En + -ant",
        "rule": "Signature marker of the French gérondif"
      },
      {
        "word": "Tout en + -ant",
        "rule": "Emphasizes contrast or strict simultaneity (He smiled while crying)"
      },
      {
        "word": "En faisant, en lisant, en buvant",
        "rule": "Common gérondif expressions in daily life"
      }
    ],
    "patterns": [
      {
        "pattern": "Same Subject Requirement",
        "note": "The person doing the main verb MUST be the one doing the gérondif action!"
      },
      {
        "pattern": "3 Irregular Gérondifs",
        "note": "être ➔ en étant | avoir ➔ en ayant | savoir ➔ en sachant"
      },
      {
        "pattern": "Invariable",
        "note": "The gérondif never takes -e or -s (always ends in -ant)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Simultaneity or Manner",
        "question": "Are two actions happening at once, or are you answering 'how'?",
        "action": "Use Le Gérondif"
      },
      {
        "step": "Step 2: Conjugate Nous in Present",
        "question": "What is the present 'nous' form of the verb?",
        "action": "nous prenons, nous marchons, nous finissons"
      },
      {
        "step": "Step 3: Strip -ONS and Add -ANT",
        "question": "Replace -ons with -ant",
        "action": "prenant, marchant, finissant"
      },
      {
        "step": "Step 4: Prepend 'EN'",
        "question": "Add the preposition 'en'",
        "action": "en prenant, en marchant, en finissant"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Gérondif Formula</text>\n  <rect x=\"50\" y=\"80\" width=\"130\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"115\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">1. PREP</text>\n  <text x=\"115\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">EN</text>\n  <text x=\"210\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"240\" y=\"80\" width=\"220\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"350\" y=\"104\" text-anchor=\"middle\" class=\"flow-text-title\">2. NOUS STEM</text>\n  <text x=\"350\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">nous mangeons ➔ mange-</text>\n  <text x=\"490\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"520\" y=\"80\" width=\"180\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"610\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">3. SUFFIX</text>\n  <text x=\"610\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">-ANT</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">EN + mange + ant ➔ En mangeant (While eating)</text>\n</svg>"
  },
  "passe_recent": {
    "id": "passe_recent",
    "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
    "formulas": [
      {
        "name": "Passé Récent Affirmative Formula",
        "math": "Subject + VENIR (présent) + DE / D’ + INFINITIVE",
        "meaning": "Used for actions completed just moments ago (English: Just did something)",
        "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
      },
      {
        "name": "De Elision Law",
        "math": "de + vowel / silent h ➜ D’",
        "meaning": "Mandatory contraction before vowel-starting verbs",
        "example": "Il vient D’arriver · Elle vient D’entendre"
      },
      {
        "name": "Pronominal Passé Récent Formula",
        "math": "Subject + VENIR + de + [Reflexive Pronoun] + INFINITIVE",
        "meaning": "The pronoun matches subject but hugs the infinitive",
        "example": "Je viens de ME réveiller · Ils viennent de SE marier"
      }
    ],
    "triggers": [
      {
        "word": "À l'instant",
        "rule": "Trigger: Just this very second"
      },
      {
        "word": "Tout juste",
        "rule": "Trigger: Just barely / freshly completed"
      },
      {
        "word": "Il y a une minute",
        "rule": "Trigger: A minute ago"
      },
      {
        "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
        "rule": "Present conjugation of venir"
      }
    ],
    "patterns": [
      {
        "pattern": "Never forget the preposition 'DE'",
        "note": "❌ Je viens manger (means I come to eat) ➔ ✓ Je viens DE manger (I just ate)"
      },
      {
        "pattern": "Pronoun placement before infinitive",
        "note": "Je viens de LE voir (pronoun sits right before the infinitive verb)"
      },
      {
        "pattern": "Past in the past (Venir in Imparfait)",
        "note": "Je venais de partir quand il a sonné (I had just left when he rang)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Timing",
        "question": "Did the action occur seconds or minutes ago ('just did')?",
        "action": "Use Passé Récent"
      },
      {
        "step": "Step 2: Conjugate VENIR",
        "question": "Who is the subject?",
        "action": "viens, viens, vient, venons, venez, viennent"
      },
      {
        "step": "Step 3: Add DE or D’",
        "question": "Does the next verb begin with a vowel?",
        "action": "Use D’ before vowels/h; DE before consonants"
      },
      {
        "step": "Step 4: Attach Action Infinitive",
        "question": "Keep main verb in infinitive",
        "action": "Je viens de finir mon café"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Passé Récent Architecture</text>\n  <rect x=\"40\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"120\" y=\"104\" text-anchor=\"middle\" class=\"flow-text-title\">1. VENIR (présent)</text>\n  <text x=\"120\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">viens, vient, venons...</text>\n  <text x=\"220\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"250\" y=\"80\" width=\"120\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"310\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">2. PREP</text>\n  <text x=\"310\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">DE / D'</text>\n  <text x=\"400\" y=\"112\" text-anchor=\"middle\" class=\"flow-text-bold\" font-size=\"28\">+</text>\n  <rect x=\"430\" y=\"80\" width=\"180\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"520\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">3. INFINITIF</text>\n  <text x=\"520\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">manger, partir...</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Je viens [de] recevoir le courriel (I just received the email)</text>\n</svg>"
  },
  "conjugation_master": {
    "id": "conjugation_master",
    "title": "Master Conjugation Timeline: Past, Present & Future",
    "formulas": [
      {
        "name": "Full Chronological Timeline Formula",
        "math": "Passé Récent ➔ Passé Composé / Imparfait ➔ Présent ➔ Futur Proche ➔ Futur Simple",
        "meaning": "The 5 primary operational tenses plotted along the chronological timeline of reality",
        "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
      },
      {
        "name": "Spoken French Conjugation Triumvirate",
        "math": "Passé Composé (Past) + Présent (Now) + Futur Proche (Future)",
        "meaning": "Master these three tenses first to speak 95% of everyday conversational French",
        "example": "J'ai parlé ➔ Je parle ➔ Je vais parler"
      }
    ],
    "triggers": [
      {
        "word": "Hier (Yesterday)",
        "rule": "Passé Composé (point-in-time) or Imparfait (ongoing background)"
      },
      {
        "word": "Aujourd'hui / En ce moment",
        "rule": "Présent de l'indicatif"
      },
      {
        "word": "Demain / Ce soir",
        "rule": "Futur Proche (conversation) or Futur Simple (formal/written)"
      }
    ],
    "patterns": [
      {
        "pattern": "Auxiliary tenses rely on Infinitives",
        "note": "Passé Récent = venir + de + INF · Futur Proche = aller + INF"
      },
      {
        "pattern": "Compound tenses rely on Participles",
        "note": "Passé Composé = avoir/être + PARTICIPLE"
      },
      {
        "pattern": "Stem tenses rely on Endings",
        "note": "Présent = stem+endings · Imparfait = nous-stem+endings · Futur Simple = inf+endings"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Locate the Time Anchor",
        "question": "Is the action past, present, or future?",
        "action": "Pinpoint on the chronological axis"
      },
      {
        "step": "Step 2: Choose Register (Spoken vs Formal)",
        "question": "Is it casual conversation or formal writing?",
        "action": "Spoken ➔ Futur Proche (vais faire) · Formal ➔ Futur Simple (ferai)"
      },
      {
        "step": "Step 3: Past Action Filter",
        "question": "Is it a sudden event or a scene/habit?",
        "action": "Event ➔ Passé Composé · Habit/Setting ➔ Imparfait"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 50 110 L 710 110\" stroke=\"var(--border)\" stroke-width=\"4\"/>\n  <circle cx=\"380\" cy=\"110\" r=\"12\" fill=\"var(--primary)\"/>\n  <text x=\"380\" y=\"80\" text-anchor=\"middle\" class=\"flow-text-bold\">PRÉSENT (Je mange)</text>\n  <circle cx=\"120\" cy=\"110\" r=\"8\" fill=\"#EC4899\"/>\n  <text x=\"120\" y=\"80\" text-anchor=\"middle\" class=\"flow-text-sub\">IMPARFAIT</text>\n  <text x=\"120\" y=\"145\" text-anchor=\"middle\" class=\"flow-text-title\">Je mangeais</text>\n  <circle cx=\"230\" cy=\"110\" r=\"8\" fill=\"#8B5CF6\"/>\n  <text x=\"230\" y=\"80\" text-anchor=\"middle\" class=\"flow-text-sub\">PASSÉ COMPOSÉ</text>\n  <text x=\"230\" y=\"145\" text-anchor=\"middle\" class=\"flow-text-title\">J'ai mangé</text>\n  <circle cx=\"530\" cy=\"110\" r=\"8\" fill=\"#10B981\"/>\n  <text x=\"530\" y=\"80\" text-anchor=\"middle\" class=\"flow-text-sub\">FUTUR PROCHE</text>\n  <text x=\"530\" y=\"145\" text-anchor=\"middle\" class=\"flow-text-title\">Je vais manger</text>\n  <circle cx=\"650\" cy=\"110\" r=\"8\" fill=\"#3B82F6\"/>\n  <text x=\"650\" y=\"80\" text-anchor=\"middle\" class=\"flow-text-sub\">FUTUR SIMPLE</text>\n  <text x=\"650\" y=\"145\" text-anchor=\"middle\" class=\"flow-text-title\">Je mangerai</text>\n</svg>"
  },
  "prepositions_temps": {
    "id": "prepositions_temps",
    "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
    "formulas": [
      {
        "name": "DEPUIS Formula (Ongoing Past to Present)",
        "math": "Action (PRÉSENT) + DEPUIS + [Time / Duration]",
        "meaning": "Started in the past and is STILL CONTINUING right now (French uses Present tense!)",
        "example": "J'habite à Montréal DEPUIS deux ans (I have lived here for 2 years and still do!)"
      },
      {
        "name": "IL Y A Formula (Completed Point in Past)",
        "math": "Action (PASSÉ COMPOSÉ) + IL Y A + [Time elapsed]",
        "meaning": "Points to a single completed moment in the past (English: AGO)",
        "example": "Le train est parti IL Y A dix minutes (The train left 10 minutes ago)"
      },
      {
        "name": "DANS Formula (Countdown to Future)",
        "math": "Action (FUTUR) + DANS + [Time from now]",
        "meaning": "Counts down to when a future action will begin (English: IN)",
        "example": "Le cours commence DANS cinq minutes (Class starts in 5 minutes)"
      },
      {
        "name": "PENDANT Formula (Closed Completed Duration)",
        "math": "Action + PENDANT + [Defined Duration]",
        "meaning": "Has a clear start and finish; the action is completely over (English: FOR / DURING)",
        "example": "J'ai dormi PENDANT huit heures (I slept for 8 hours — now awake)"
      }
    ],
    "triggers": [
      {
        "word": "Depuis",
        "rule": "Still happening now ➔ MUST take Present tense"
      },
      {
        "word": "Il y a",
        "rule": "Time ago ➔ MUST take Past tense"
      },
      {
        "word": "Dans",
        "rule": "Future countdown ➔ MUST take Future tense"
      },
      {
        "word": "Pendant",
        "rule": "Closed block of completed time ➔ usually Passé Composé"
      }
    ],
    "patterns": [
      {
        "pattern": "Never use Passé Composé with Depuis",
        "note": "❌ J'ai habité ici depuis 1 an ➔ ✓ J'habite ici depuis 1 an"
      },
      {
        "pattern": "Dans vs En",
        "note": "Dans 1h = starts 1 hour from now (countdown) · En 1h = takes 1 hour to complete (speed)"
      },
      {
        "pattern": "Pour with time",
        "note": "Strictly for intended future planned durations: Je pars pour deux semaines"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Is the action still happening right now?",
        "question": "Did it start in the past and continue into the present?",
        "action": "If YES ➔ DEPUIS (+ Present Tense)"
      },
      {
        "step": "Step 2: Is it an action in the future?",
        "question": "Are you counting down to when it begins?",
        "action": "If YES ➔ DANS (+ Future Tense)"
      },
      {
        "step": "Step 3: Is it an action completely over in the past?",
        "question": "Did it happen 'X time ago'?",
        "action": "If YES ➔ IL Y A (+ Passé Composé)"
      },
      {
        "step": "Step 4: Is it a closed, measured duration?",
        "question": "Does it describe a completed block of time with start and finish?",
        "action": "If YES ➔ PENDANT"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Time Preposition Decision</text>\n  <path d=\"M 310 46 L 120 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 360 46 L 300 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 400 46 L 470 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 450 46 L 640 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"35\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"120\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Still happening?</text>\n  <text x=\"120\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Past to Present</text>\n  <rect x=\"215\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"300\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Completed moment?</text>\n  <text x=\"300\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Point in past (ago)</text>\n  <rect x=\"395\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"480\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Future countdown?</text>\n  <text x=\"480\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Starts in X minutes</text>\n  <rect x=\"575\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"660\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Closed duration?</text>\n  <text x=\"660\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Start and end finished</text>\n  <path d=\"M 120 130 L 120 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 300 130 L 300 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 480 130 L 480 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 660 130 L 660 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"30\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"120\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">DEPUIS (depuis 2 ans)</text>\n  <rect x=\"210\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"300\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">IL Y A (il y a 10 min)</text>\n  <rect x=\"390\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"480\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">DANS (dans 1 heure)</text>\n  <rect x=\"570\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"660\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">PENDANT (pendant 3 jours)</text>\n</svg>"
  },
  "histoire_montreal": {
    "id": "histoire_montreal",
    "title": "Historical Narrative: Past Tense Sequence Analysis",
    "formulas": [
      {
        "name": "Historical Setting vs Action Formula",
        "math": "Imparfait (Era / Context) ➔ Passé Composé (Events / Milestones)",
        "meaning": "History narratives set the stage with Imparfait, then advance chronology with Passé Composé",
        "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey a fondé Ville-Marie en 1642 (Passé Composé)"
      },
      {
        "name": "Historical Date Preposition Formula",
        "math": "EN + [Year] | AU + [Century] | LE + [Full Date]",
        "meaning": "Prepositions for historical timekeeping",
        "example": "En 1642 · Au XVIIe siècle · Le 17 mai 1642"
      }
    ],
    "triggers": [
      {
        "word": "En 1642 / En 1701",
        "rule": "Specific calendar year trigger ➔ Passé Composé for foundation events"
      },
      {
        "word": "À cette époque / Au début",
        "rule": "Historical background trigger ➔ Imparfait"
      },
      {
        "word": "La Grande Paix de Montréal",
        "rule": "Major peace treaty of 1701 signed by Callière"
      }
    ],
    "patterns": [
      {
        "pattern": "Centuries in French",
        "note": "Use Roman numerals with 'siècle': au XXIe siècle (21st century)"
      },
      {
        "pattern": "Historical Present",
        "note": "History often uses present tense for vivid storytelling (En 1642, il fonde...)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Is it describing life conditions in that era?",
        "question": "Living conditions, scenery, traditions?",
        "action": "Use IMPARFAIT (Ils chassaient, vivaient)"
      },
      {
        "step": "Step 2: Is it a specific turning point, battle, or treaty?",
        "question": "Did it happen on a definite date with a start and finish?",
        "action": "Use PASSÉ COMPOSÉ (Il a fondé, ils ont signé)"
      },
      {
        "step": "Step 3: Check Date Format",
        "question": "Is it just a year, century, or day?",
        "action": "En [year], au [century], le [day month year]"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Narrative Chronology</text>\n  <rect x=\"80\" y=\"80\" width=\"260\" height=\"52\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"210\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">BACKGROUND / ERA (Imparfait)</text>\n  <text x=\"210\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">Les Iroquoiens habitaient l'île...</text>\n  <path d=\"M 340 106 L 400 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <rect x=\"400\" y=\"80\" width=\"280\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"540\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">SUDDEN MILESTONE (Passé Composé)</text>\n  <text x=\"540\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">...quand Maisonneuve a fondé Ville-Marie</text>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">History Flow: Rolling scenery (Imparfait) ➔ Event marker (Passé Composé)</text>\n</svg>"
  },
  "pc_vs_imparfait": {
    "id": "pc_vs_imparfait",
    "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
    "formulas": [
      {
        "name": "The Movie Camera vs Flash Snapshot Formula",
        "math": "Imparfait = Video Camera (Scene / Rolling) | Passé Composé = Photo Snapshot (BAM! Event)",
        "meaning": "Imparfait sets the stage (weather, emotions, 'was doing'); Passé Composé triggers the interruption or milestone",
        "example": "Il pleuvait (Imparfait: scene) quand soudain la foudre a frappé (Passé Composé: snapshot)"
      },
      {
        "name": "Interrupted Action Formula",
        "math": "Imparfait (Underway action) + QUAND + Passé Composé (Interruption)",
        "meaning": "The continuous action that was in progress is interrupted by a punctual event",
        "example": "Je dormais (was sleeping) quand le réveil A SONNÉ (rang)"
      },
      {
        "name": "The Chameleon Verbs Formula",
        "math": "savoir: savais (knew) vs ai su (found out) | connaître: connaissais (was acquainted) vs ai connu (met 1st time)",
        "meaning": "Certain verbs alter meaning between a state of mind and a sudden realization",
        "example": "Je savais nager (ability) vs J'ai su la nouvelle (event)"
      }
    ],
    "triggers": [
      {
        "word": "Pendant que... / Alors que...",
        "rule": "Always Imparfait: while something was underway"
      },
      {
        "word": "Soudain / Tout à coup",
        "rule": "Always Passé Composé: suddenly an event struck"
      },
      {
        "word": "Chaque matin / D'habitude",
        "rule": "Always Imparfait: repeated habitual routines"
      },
      {
        "word": "Hier à 15h / Un jour",
        "rule": "Passé Composé: isolated completed occasion"
      }
    ],
    "patterns": [
      {
        "pattern": "Ongoing state vs point in time",
        "note": "Was doing = Imparfait · Did = Passé Composé"
      },
      {
        "pattern": "Physical description & feelings",
        "note": "J'avais peur, il faisait froid, elle était triste ➔ always Imparfait"
      },
      {
        "pattern": "Sequence of consecutive actions",
        "note": "Je me suis levé, j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Ask 'What was the scene?'",
        "question": "Does it describe background weather, atmosphere, feelings, or ongoing habits?",
        "action": "If YES ➔ IMPARFAIT (Video Camera rolling)"
      },
      {
        "step": "Step 2: Ask 'What happened next?'",
        "question": "Is it a specific, completed action that moves the story forward?",
        "action": "If YES ➔ PASSÉ COMPOSÉ (Photo Snapshot BAM!)"
      },
      {
        "step": "Step 3: Check for Interruption",
        "question": "Did one action interrupt another underway?",
        "action": "Background = Imparfait · Interruption = Passé Composé"
      },
      {
        "step": "Step 4: Check Trigger Words",
        "question": "Look for 'pendant que' (Imparfait) or 'soudain' (Passé Composé)",
        "action": "Lock in your tense selection"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Movie Director Test</text>\n  <path d=\"M 330 46 L 200 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 430 46 L 560 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"200\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">VIDEO CAMERA (Rolling)</text>\n  <text x=\"200\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Weather · Habit · Ongoing Scene</text>\n  <rect x=\"450\" y=\"88\" width=\"220\" height=\"46\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"560\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">PHOTO SNAPSHOT (Flash)</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" class=\"flow-text-sub\">Single completed event · BAM!</text>\n  <path d=\"M 200 134 L 200 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 560 134 L 560 158\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"85\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"200\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">IMPARFAIT (Je marchais...)</text>\n  <rect x=\"445\" y=\"160\" width=\"230\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"560\" y=\"185\" text-anchor=\"middle\" class=\"flow-res-title\">PASSÉ COMPOSÉ (...j'ai glissé!)</text>\n</svg>"
  },
  "personality_adjectives": {
    "id": "personality_adjectives",
    "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
    "formulas": [
      {
        "name": "-EUX ➔ -EUSE Feminine Suffix Formula",
        "math": "Masc [-eux] ➜ Fem [-euse]",
        "meaning": "Nearly all character adjectives ending in -eux shift to -euse in the feminine",
        "example": "généreux ➔ généreuse · courageux ➔ courageuse · paresseux ➔ paresseuse"
      },
      {
        "name": "-IF ➔ -IVE Feminine Suffix Formula",
        "math": "Masc [-if] ➜ Fem [-ive]",
        "meaning": "Voicing shift from voiceless /f/ to voiced /v/",
        "example": "créatif ➔ créative · actif ➔ active · attentif ➔ attentive"
      },
      {
        "name": "-EL / -ON Double Consonant Formula",
        "math": "Masc [-el / -on] ➜ Fem [-elle / -onne]",
        "meaning": "Doubles the final consonant before adding -e",
        "example": "naturel ➔ naturelle · bon ➔ bonne · mimi ➔ mignonne"
      },
      {
        "name": "Invariable Adjective Suffix -E",
        "math": "Masc ending in -e ➜ Feminine stays identical",
        "meaning": "No change required if the masculine already ends in unaccented -e",
        "example": "calme (M) ➔ calme (F) · timide (M) ➔ timide (F) · sociable (M) ➔ sociable (F)"
      }
    ],
    "triggers": [
      {
        "word": "Chaleureux / Chaleureuse",
        "rule": "Warm / welcoming personality (very common in Quebec)"
      },
      {
        "word": "Généreux / Généreuse",
        "rule": "Generous trait"
      },
      {
        "word": "Franc / Franche",
        "rule": "Direct, straightforward (irregular feminine -che)"
      },
      {
        "word": "Doux / Douce",
        "rule": "Gentle, sweet (irregular feminine -ce)"
      }
    ],
    "patterns": [
      {
        "pattern": "Silent consonants awaken in feminine",
        "note": "bavard (/bavaʁ/) ➔ bavarde (/bavaʁd/): the 'd' becomes audible!"
      },
      {
        "pattern": "-teur ➔ -trice",
        "note": "séducteur ➔ séductrice, créateur ➔ créatrice"
      },
      {
        "pattern": "-al ➔ -ale, -aux",
        "note": "loyal ➔ loyale (fem), loyaux (masc plural)"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Masculine Ending",
        "question": "Does the base adjective end in -e?",
        "action": "If YES ➔ Invariable (calme, timide, sympathique)"
      },
      {
        "step": "Step 2: Does it end in -eux?",
        "question": "Is the masculine suffix -eux?",
        "action": "Transform to -euse (généreuse, sérieuse)"
      },
      {
        "step": "Step 3: Does it end in -if?",
        "question": "Is the masculine suffix -if?",
        "action": "Transform to -ive (créative, attentive)"
      },
      {
        "step": "Step 4: Regular Consonant Ending",
        "question": "Does it end in -t, -d, or -s?",
        "action": "Add -e and awaken the final consonant (gentil ➔ gentille, intelligent ➔ intelligente)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Feminine Adjective Shift</text>\n  <path d=\"M 310 46 L 120 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 360 46 L 300 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 400 46 L 470 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 450 46 L 640 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"35\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"120\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Ends in -e</text>\n  <text x=\"120\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">calme, timide</text>\n  <rect x=\"215\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"300\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Ends in -eux</text>\n  <text x=\"300\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">généreux, sérieux</text>\n  <rect x=\"395\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"480\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Ends in -if</text>\n  <text x=\"480\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">créatif, actif</text>\n  <rect x=\"575\" y=\"88\" width=\"170\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"660\" y=\"108\" text-anchor=\"middle\" class=\"flow-text-title\">Ends in -el / -on</text>\n  <text x=\"660\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">naturel, bon</text>\n  <path d=\"M 120 130 L 120 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 300 130 L 300 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 480 130 L 480 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 660 130 L 660 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"30\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"120\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">NO CHANGE (calme)</text>\n  <rect x=\"210\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"300\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">-EUSE (généreuse)</text>\n  <rect x=\"390\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-pink\"/>\n  <text x=\"480\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">-IVE (créative)</text>\n  <rect x=\"570\" y=\"158\" width=\"180\" height=\"40\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"660\" y=\"183\" text-anchor=\"middle\" class=\"flow-res-title\">DOUBLE: -ELLE / -ONNE</text>\n</svg>"
  },
  "whats_new": {
    "id": "whats_new",
    "title": "Platform Architecture & Learning System Roadmap",
    "formulas": [
      {
        "name": "Grammar Retention Equation",
        "math": "Rule Comprehension + Visual Formulas + SRS Repetition = Native Fluency",
        "meaning": "The pedagogical pillars underpinning the French Grammar Guide design",
        "example": "Formulas (Logical clarity) + Recognition badges (Pattern recognition) + SVG Diagrams (Mental models)"
      },
      {
        "name": "Continuous Learning Cycle",
        "math": "Study Guide ➔ Practice Interactive Exercises ➔ Flashcard SRS Queue ➔ Mastery",
        "meaning": "Autonomous progression pipeline from beginner A1 to intermediate B1 Quebec fluency",
        "example": "Spaced repetition intervals schedule due items at 1, 3, and 7 days"
      }
    ],
    "triggers": [
      {
        "word": "Visual Formulas",
        "rule": "Mathematical-style grammar formulas for every single topic"
      },
      {
        "word": "Pattern Recognition",
        "rule": "Word triggers and ending patterns to immediately detect rules"
      },
      {
        "word": "Diagnostic Decision Trees",
        "rule": "Step-by-step logic paths explaining how to reach the grammar conclusion"
      },
      {
        "word": "SVG Interactive Diagrams",
        "rule": "Visual illustrations embedded in every topic card"
      }
    ],
    "patterns": [
      {
        "pattern": "Neo-Brutalism & Modern themes",
        "note": "Adaptive tactile visual designs tailored for deep focus"
      },
      {
        "pattern": "Offline Transit Practice",
        "note": "PWA Service Worker caches all 30 modules for subway study"
      },
      {
        "pattern": "Multi-language translations",
        "note": "Comprehensive support across 7 native languages"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Choose a Grammar Topic",
        "question": "Select any of the 30 sections in the curriculum",
        "action": "Review core formulas and recognition triggers"
      },
      {
        "step": "Step 2: Inspect the Visual Diagram",
        "question": "Trace how decisions fork from context to grammar conclusion",
        "action": "Follow the SVG flow nodes"
      },
      {
        "step": "Step 3: Practice Interactive Blocks",
        "question": "Test knowledge with widgets and conjugation tables",
        "action": "Immediate auditory and visual feedback"
      },
      {
        "step": "Step 4: Retain with SRS",
        "question": "Review items in the Spaced Repetition Queue",
        "action": "Cement memory into long-term recall"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"280\" y=\"10\" width=\"200\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Learning Mastery Engine</text>\n  <rect x=\"30\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"110\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">1. FORMULAS</text>\n  <text x=\"110\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">Logical syntax math</text>\n  <rect x=\"210\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"290\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">2. TRIGGERS</text>\n  <text x=\"290\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">Word & pattern badges</text>\n  <rect x=\"390\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-purple\"/>\n  <text x=\"470\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">3. DIAGRAMS</text>\n  <text x=\"470\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">Decision tree visuals</text>\n  <rect x=\"570\" y=\"80\" width=\"160\" height=\"52\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"650\" y=\"104\" text-anchor=\"middle\" class=\"flow-res-title\">4. RETENTION</text>\n  <text x=\"650\" y=\"122\" text-anchor=\"middle\" class=\"flow-res-val\">SRS review queue</text>\n  <path d=\"M 190 106 L 210 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 370 106 L 390 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <path d=\"M 550 106 L 570 106\" stroke=\"var(--primary)\" stroke-width=\"2\"/>\n  <text x=\"380\" y=\"180\" text-anchor=\"middle\" class=\"flow-text-bold\" fill=\"var(--primary)\">Complete 360° visual grammar mastery across all 30 topics</text>\n</svg>"
  },
  "il_faut_que": {
    "id": "il_faut_que",
    "title": "Obligation & Necessity (Il faut que + Subjonctif)",
    "formulas": [
      {
        "name": "Subjunctive Obligation Formula",
        "math": "Il faut que + [Sujet] + [Subjonctif Présent] + [Complément]",
        "meaning": "Expresses requirement, personal duty, or indispensable obligation",
        "example": "Il faut que je parte à l’heure · Il faut que tu prennes l’autobus"
      },
      {
        "name": "The Golden Stem Law",
        "math": "Stem = [ils / elles (Présent Indicatif)] – « -ent »",
        "meaning": "Universal base stem for regular and most stem-changing verbs",
        "example": "ils regardent ➜ regard- · ils finissent ➜ finiss- · ils partent ➜ part-"
      },
      {
        "name": "Subjunctive Endings Rule",
        "math": "Base Stem + [-e, -es, -e, -ions, -iez, -ent]",
        "meaning": "Singular/ils take present-like endings; nous/vous take imparfait endings",
        "example": "que je finisse, tu finisses, il finisse, nous finissions, vous finissiez, ils finissent"
      },
      {
        "name": "Euphonic L’ Rule",
        "math": "que + on ➜ que l’on + [Subjonctif]",
        "meaning": "Prevents harsh hiatus vowel clash in polished French",
        "example": "Il faut que l’on conduise prudemment (instead of qu’on)"
      }
    ],
    "triggers": [
      {
        "word": "Il faut que / Faut-il que",
        "rule": "Mandatory trigger for the subjunctive present when followed by a specific subject"
      },
      {
        "word": "Il est nécessaire que / indispensable que",
        "rule": "Impersonal necessity triggers: always require subjunctive mood"
      },
      {
        "word": "Il est important que / primordial que",
        "rule": "Impersonal value & urgency triggers: trigger subjunctive clauses"
      },
      {
        "word": "Devoir (Je dois, Tu dois...)",
        "rule": "Direct modal equivalent: transforms into « Il faut que + subjonctif »"
      }
    ],
    "patterns": [
      {
        "pattern": "Regular -ER Verbs",
        "note": "Stem from ils (regard-), adds -e, -es, -e, -ions, -iez, -ent"
      },
      {
        "pattern": "Regular -IR (-iss-) Verbs",
        "note": "Stem from ils (finiss-), keeps -iss- throughout all 6 persons"
      },
      {
        "pattern": "Two-Stem Verbs (Prendre, Boire, Venir)",
        "note": "ils stem for je/tu/il/ils (prenn-, boiv-) · nous stem for nous/vous (pren-, buv-)"
      },
      {
        "pattern": "Totally Irregular (Être, Avoir, Faire, Pouvoir, Savoir)",
        "note": "sois, aie, fasse, puisse, sache — memorize their distinctive roots"
      }
    ],
    "decisionSteps": [
      {
        "step": "Step 1: Check Construction Type",
        "question": "Is it general (Il faut + infinitive) or directed to a person (Il faut que + subject)?",
        "action": "If specific subject follows ➔ Subjunctive is mandatory"
      },
      {
        "step": "Step 2: Check for Irregular Exception",
        "question": "Is the verb one of the big 7 exceptions (être, avoir, faire, pouvoir, savoir, aller, vouloir)?",
        "action": "If YES ➔ Apply unique irregular root (e.g., fasse, puisse)"
      },
      {
        "step": "Step 3: Extract the ils-Stem",
        "question": "Take the 3rd person plural present indicative (ils regardent, ils finissent, ils partent)",
        "action": "Drop the « -ent » ending to uncover the base stem"
      },
      {
        "step": "Step 4: Attach Person Ending",
        "question": "Which subject pronoun is being addressed?",
        "action": "Add: je(-e), tu(-es), il/elle(-e), nous(-ions), vous(-iez), ils/elles(-ent)"
      }
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" class=\"flow-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"260\" y=\"10\" width=\"240\" height=\"36\" rx=\"8\" class=\"flow-box-root\"/>\n  <text x=\"380\" y=\"33\" text-anchor=\"middle\" class=\"flow-text-bold\">Subjonctif Présent Derivation</text>\n  <path d=\"M 320 46 L 130 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 46 L 380 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 440 46 L 630 86\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"40\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"130\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Step 1 · Find Source</text>\n  <text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">ils / elles (Présent)</text>\n  <rect x=\"290\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"380\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Step 2 · Extract Stem</text>\n  <text x=\"380\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">Drop « -ent » ending</text>\n  <rect x=\"540\" y=\"88\" width=\"180\" height=\"42\" rx=\"8\" class=\"flow-box\"/>\n  <text x=\"630\" y=\"107\" text-anchor=\"middle\" class=\"flow-text-title\">Step 3 · Add Endings</text>\n  <text x=\"630\" y=\"122\" text-anchor=\"middle\" class=\"flow-text-sub\">-e, -es, -e, -ions, -iez, -ent</text>\n  <path d=\"M 130 130 L 130 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 380 130 L 380 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <path d=\"M 630 130 L 630 156\" stroke=\"var(--border)\" stroke-width=\"2\"/>\n  <rect x=\"35\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-blue\"/>\n  <text x=\"130\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">ILS REGARDENT</text>\n  <text x=\"130\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">ils finissent · partent</text>\n  <rect x=\"285\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-amber\"/>\n  <text x=\"380\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">REGARD- · FINISS-</text>\n  <text x=\"380\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">part- · attend- · lis-</text>\n  <rect x=\"535\" y=\"158\" width=\"190\" height=\"42\" rx=\"8\" class=\"flow-box-result result-green\"/>\n  <text x=\"630\" y=\"177\" text-anchor=\"middle\" class=\"flow-res-title\">QUE JE REGARDE</text>\n  <text x=\"630\" y=\"193\" text-anchor=\"middle\" class=\"flow-res-val\">que nous regardions</text>\n</svg>"
  }
};

/**
 * Renders the Visual Pattern & Formula block for a specific section
 */
window.renderGrammarPatternsHub = function(sectionId) {
  const data = window.GRAMMAR_PATTERNS_DIAGRAMS && window.GRAMMAR_PATTERNS_DIAGRAMS[sectionId];
  if (!data) return '';

  const tUi = (key, fallback) => (typeof window.tGrammarUi === 'function' && window.tGrammarUi(key)) || fallback;
  const tData = (typeof window.tGrammarData === 'function') ? window.tGrammarData(sectionId) : null;

  const hubTitle = tUi('hub_title', 'Formulas, Word Triggers & Visual Logic');
  const hubSubtitle = tUi('hub_subtitle', 'Recognize patterns at a glance • trace how grammatical conclusions are reached');
  const secFormulas = tUi('hub_sec_formulas', 'Grammatical Formulas');
  const secTriggers = tUi('hub_sec_triggers', 'How to Recognize by Words & Patterns');
  const secSignals = tUi('hub_sec_signals', 'Signal & Trigger Words');
  const secPatterns = tUi('hub_sec_patterns', 'Word Endings & Shape Rules');
  const secPath = tUi('hub_sec_path', 'Diagnostic Decision Path — How to Reach the Conclusion');
  const secDiagram = tUi('hub_sec_diagram', 'Visual Logic Diagram');

  let html = `<section class="grammar-hub-card animate-in" id="grammar-hub-${sectionId}">
    <div class="hub-header">
      <div class="hub-header-title-wrap">
        <span class="ms ms-fill hub-header-icon">schema</span>
        <div>
          <h3 class="hub-title">${hubTitle}</h3>
          <p class="hub-subtitle">${hubSubtitle}</p>
        </div>
      </div>
      <button class="hub-collapse-btn" onclick="toggleHubCard('${sectionId}')" id="hub-toggle-${sectionId}" aria-label="Toggle formulas and logic hub" title="Toggle section">
        <span class="ms" id="hub-chevron-${sectionId}">expand_less</span>
      </button>
    </div>

    <div class="hub-body" id="hub-body-${sectionId}">
      <!-- 1. Grammatical Formulas -->
      <div class="hub-subcard">
        <div class="hub-subcard-title">
          <span class="ms ms-sm" style="color:var(--primary)">functions</span>
          <h4>${secFormulas}</h4>
        </div>
        <div class="formulas-list">`;

  data.formulas.forEach((f, idx) => {
    const fTrans = (tData && tData.formulas && tData.formulas[idx]) || {};
    const name = fTrans.name || f.name;
    const meaning = fTrans.meaning || f.meaning;
    const example = fTrans.example || f.example;

    html += `
          <div class="formula-item">
            <div class="formula-name">${name}</div>
            <div class="formula-math-wrap">
              <code class="formula-code">${f.math}</code>
            </div>
            <div class="formula-meaning">${meaning}</div>
            <div class="formula-example"><span class="formula-ex-label">Ex:</span> ${example}</div>
          </div>`;
  });

  html += `
        </div>
      </div>

      <!-- 2. Recognition Triggers & Word Patterns -->
      <div class="hub-subcard">
        <div class="hub-subcard-title">
          <span class="ms ms-sm" style="color:#EC4899">troubleshoot</span>
          <h4>${secTriggers}</h4>
        </div>
        <div class="triggers-grid">
          <div class="trigger-col">
            <h5 class="trigger-col-head"><span class="ms ms-sm">bolt</span> ${secSignals}</h5>
            <div class="trigger-list">`;

  data.triggers.forEach((t, idx) => {
    const tTrans = (tData && tData.triggers && tData.triggers[idx]) || {};
    const rule = tTrans.rule || t.rule;

    html += `
              <div class="trigger-row">
                <span class="trigger-chip">${t.word}</span>
                <span class="trigger-rule">${rule}</span>
              </div>`;
  });

  html += `
            </div>
          </div>

          <div class="trigger-col">
            <h5 class="trigger-col-head"><span class="ms ms-sm">pattern</span> ${secPatterns}</h5>
            <div class="pattern-list">`;

  data.patterns.forEach((p, idx) => {
    const pTrans = (tData && tData.patterns && tData.patterns[idx]) || {};
    const note = pTrans.note || p.note;

    html += `
              <div class="pattern-row">
                <span class="pattern-badge">${p.pattern}</span>
                <span class="pattern-note">${note}</span>
              </div>`;
  });

  html += `
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Diagnostic Decision Tree: How the Conclusion is Reached -->
      <div class="hub-subcard">
        <div class="hub-subcard-title">
          <span class="ms ms-sm" style="color:#10B981">alt_route</span>
          <h4>${secPath}</h4>
        </div>
        <div class="decision-steps-wrap">`;

  data.decisionSteps.forEach((s, idx) => {
    const sTrans = (tData && tData.decisionSteps && tData.decisionSteps[idx]) || {};
    const step = sTrans.step || s.step;
    const question = sTrans.question || s.question;
    const action = sTrans.action || s.action;

    html += `
          <div class="decision-step-item">
            <div class="step-num">${idx + 1}</div>
            <div class="step-content">
              <div class="step-head">${step}</div>
              <div class="step-q">${question}</div>
              <div class="step-action"><span class="ms ms-sm">check_circle</span> ${action}</div>
            </div>
          </div>`;
  });

  html += `
        </div>
      </div>

      <!-- 4. Visual Diagram & Illustration -->
      <div class="hub-subcard">
        <div class="hub-subcard-title" style="flex-wrap:wrap;gap:0.5rem;align-items:center;">
          <div style="display:flex;align-items:center;gap:0.4rem;">
            <span class="ms ms-sm" style="color:#3B82F6">account_tree</span>
            <h4>${secDiagram}</h4>
          </div>
          <!-- Global Diagram Size & Text Scale Controller -->
          <div class="diagram-controls-bar">
            <button class="diagram-ctrl-btn" onclick="window.changeDiagramSize('${sectionId}', 'compact')" id="diag-btn-compact-${sectionId}" title="Compact diagram canvas">
              <span class="ms ms-sm" style="font-size:0.85rem">compress</span> Compact
            </button>
            <button class="diagram-ctrl-btn active" onclick="window.changeDiagramSize('${sectionId}', 'standard')" id="diag-btn-standard-${sectionId}" title="Standard diagram width">
              <span class="ms ms-sm" style="font-size:0.85rem">width_normal</span> Standard
            </button>
            <button class="diagram-ctrl-btn" onclick="window.changeDiagramSize('${sectionId}', 'wide')" id="diag-btn-wide-${sectionId}" title="Expanded full width">
              <span class="ms ms-sm" style="font-size:0.85rem">expand</span> Wide
            </button>
            <div style="width:1px;height:18px;background:var(--border);margin:0 0.15rem;"></div>
            <button class="diagram-ctrl-btn" onclick="window.adjustDiagramTextScale(-0.1)" title="Decrease text size in diagrams" aria-label="Decrease text size">
              <span class="ms ms-sm" style="font-size:0.85rem">text_decrease</span>
            </button>
            <span class="diagram-font-pill" id="diagram-font-pill">100%</span>
            <button class="diagram-ctrl-btn" onclick="window.adjustDiagramTextScale(0.1)" title="Increase text size in diagrams" aria-label="Increase text size">
              <span class="ms ms-sm" style="font-size:0.85rem">text_increase</span>
            </button>
            <button class="diagram-ctrl-btn" onclick="window.resetDiagramSettings('${sectionId}')" title="Reset diagram size and text scale" aria-label="Reset scale">
              <span class="ms ms-sm" style="font-size:0.85rem">restart_alt</span>
            </button>
          </div>
        </div>
        <div class="diagram-canvas-wrap" id="diagram-canvas-${sectionId}" data-diagram-size="standard">
          ${data.svg}
        </div>
      </div>
    </div>
  </section>`;

  return html;
};

/**
 * Toggle collapse state of hub card
 */
window.toggleHubCard = function(sectionId) {
  const body = document.getElementById('hub-body-' + sectionId);
  const chev = document.getElementById('hub-chevron-' + sectionId);
  if (!body) return;
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  if (chev) {
    chev.textContent = isHidden ? 'expand_less' : 'expand_more';
  }
};

/**
 * Visual Rules & Formulas Central Modal Launcher
 */
window.openFormulasModal = function(targetSectionId) {
  const backdrop = document.getElementById('formulas-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('open');
  document.body.classList.add('modal-open');
  
  const sid = targetSectionId || (window.sections && window.sections[window.current] && window.sections[window.current].id) || 'articles';
  window.currentFormulasSid = sid;
  renderFormulasModalNav(sid);
  renderFormulasModalContent(sid);
};

window.closeFormulasModal = function() {
  const backdrop = document.getElementById('formulas-modal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.classList.remove('modal-open');
};

window.currentFormulasLevel = 'all';

window.setFormulasModalLevel = function(level) {
  window.currentFormulasLevel = level || 'all';
  document.querySelectorAll('.fmodal-ltab').forEach(btn => {
    const id = btn.id.replace('fmodal-ltab-', '');
    btn.classList.toggle('active', id === window.currentFormulasLevel);
  });
  const sid = window.currentFormulasSid || 'articles';
  renderFormulasModalNav(sid);
};

function renderFormulasModalNav(activeSid) {
  const navWrap = document.getElementById('formulas-modal-pills');
  if (!navWrap || !window.sections) return;

  const currentLevel = window.currentFormulasLevel || 'all';
  const getLvl = (idx) => idx <= 8 ? 'A1' : idx <= 18 ? 'A2' : 'B1';

  const visibleSections = window.sections.map((s, idx) => ({ s, idx })).filter(({ s, idx }) => {
    if (currentLevel === 'all') return true;
    return getLvl(idx).toLowerCase() === currentLevel;
  });

  navWrap.innerHTML = visibleSections.map(({ s, idx }) => {
    const isActive = s.id === activeSid;
    const title = (typeof window.tSectionTitle === 'function' && window.tSectionTitle(s.id)) || s.title;
    const lvl = getLvl(idx);
    const chipCls = lvl === 'A1' ? 'chip-a1' : lvl === 'A2' ? 'chip-a2' : 'chip-b1';

    return `<button class="fmodal-pill ${isActive ? 'active' : ''}" onclick="selectFormulasModalSection('${s.id}')">
      <span class="ms ms-sm">${s.icon || 'bookmark'}</span>
      <span>${title}</span>
      <span class="level-badge-chip ${chipCls}" style="font-size:0.58rem;padding:0.05rem 0.28rem;margin-left:0.25rem;">${lvl}</span>
    </button>`;
  }).join('');
}

window.selectFormulasModalSection = function(sid) {
  window.currentFormulasSid = sid;
  renderFormulasModalNav(sid);
  renderFormulasModalContent(sid);
};

function renderFormulasModalContent(sid) {
  const cont = document.getElementById('formulas-modal-body-content');
  if (!cont) return;
  cont.innerHTML = window.renderGrammarPatternsHub(sid);
}

// Global hotkey support: Esc to close modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const backdrop = document.getElementById('formulas-modal-backdrop');
    if (backdrop && backdrop.classList.contains('open')) {
      window.closeFormulasModal();
    }
  }
});

/**
 * ══════════════════════════════════════════════════════════════════
 * GLOBAL DIAGRAM SIZE & TEXT SCALING ENGINE
 * Works across all 30 visual logic diagrams and modals
 * ══════════════════════════════════════════════════════════════════
 */
(function() {
  let _currentFontScale = 1.0;
  let _currentCanvasSize = 'standard';

  try {
    const savedScale = localStorage.getItem('diagramFontScale');
    if (savedScale) _currentFontScale = Math.min(Math.max(parseFloat(savedScale) || 1.0, 0.6), 2.0);
    const savedSize = localStorage.getItem('diagramCanvasSize');
    if (['compact', 'standard', 'wide'].includes(savedSize)) _currentCanvasSize = savedSize;
  } catch(e) {}

  function applyGlobalDiagramSettings() {
    // 1. Set root font and box scale variables in CSS
    // Box scales proportionally with font scale so boxes expand to fit larger text
    const boxScale = 1.0 + (_currentFontScale - 1.0) * 0.75;
    document.documentElement.style.setProperty('--diagram-font-scale', _currentFontScale.toString());
    document.documentElement.style.setProperty('--diagram-box-scale', boxScale.toFixed(3));

    // 2. Dynamically adjust SVG elements (rectangles, viewBox dimensions & text padding) when text scales
    // Ensure all SVGs automatically adapt box sizes and viewBox bounds so text never overflows
    document.querySelectorAll('.flow-svg').forEach(svg => {
      if (!svg.dataset.origViewBox) {
        svg.dataset.origViewBox = svg.getAttribute('viewBox') || '0 0 760 210';
      }
      const parts = svg.dataset.origViewBox.split(' ').map(Number);
      if (parts.length === 4) {
        const origMinX = parts[0];
        const origMinY = parts[1];
        const origW = parts[2];
        const origH = parts[3];

        // Scale bounds proportionally so large text stays safely within the diagram borders
        const hFactor = _currentFontScale > 1.0 ? 1.0 + (_currentFontScale - 1.0) * 0.45 : 1.0;
        const wFactor = _currentFontScale > 1.2 ? 1.0 + (_currentFontScale - 1.2) * 0.15 : 1.0;
        const newW = Math.round(origW * wFactor);
        const newH = Math.round(origH * hFactor);
        const extraX = Math.round((newW - origW) / 2);

        svg.setAttribute('viewBox', `${origMinX - extraX} ${origMinY} ${newW} ${newH}`);
      }

      // Dynamically expand SVG rect box widths and heights to fit scaled text
      svg.querySelectorAll('rect.flow-box, rect.flow-box-root, rect.flow-box-result').forEach(rect => {
        if (!rect.dataset.origWidth) {
          rect.dataset.origWidth = rect.getAttribute('width') || '180';
          rect.dataset.origHeight = rect.getAttribute('height') || '42';
          rect.dataset.origX = rect.getAttribute('x') || '0';
        }
        const oW = parseFloat(rect.dataset.origWidth);
        const oH = parseFloat(rect.dataset.origHeight);
        const oX = parseFloat(rect.dataset.origX);

        if (_currentFontScale > 1.0) {
          const expansionRatio = 1.0 + (_currentFontScale - 1.0) * 0.38;
          const newBoxW = Math.round(oW * expansionRatio);
          const newBoxH = Math.round(oH * expansionRatio);
          const deltaX = (newBoxW - oW) / 2;

          rect.setAttribute('width', newBoxW.toString());
          rect.setAttribute('height', newBoxH.toString());
          rect.setAttribute('x', (oX - deltaX).toString());
        } else {
          rect.setAttribute('width', rect.dataset.origWidth);
          rect.setAttribute('height', rect.dataset.origHeight);
          rect.setAttribute('x', rect.dataset.origX);
        }
      });
    });

    // 3. Update all diagram font pills in DOM
    const pct = Math.round(_currentFontScale * 100) + '%';
    document.querySelectorAll('.diagram-font-pill').forEach(el => {
      el.textContent = pct;
    });

    // 4. Update all diagram canvas elements
    document.querySelectorAll('.diagram-canvas-wrap').forEach(wrap => {
      wrap.setAttribute('data-diagram-size', _currentCanvasSize);
    });

    // 5. Update button active states across all diagrams
    document.querySelectorAll('.diagram-ctrl-btn').forEach(btn => {
      const id = btn.id || '';
      if (id.includes('-compact-')) {
        btn.classList.toggle('active', _currentCanvasSize === 'compact');
      } else if (id.includes('-standard-')) {
        btn.classList.toggle('active', _currentCanvasSize === 'standard');
      } else if (id.includes('-wide-')) {
        btn.classList.toggle('active', _currentCanvasSize === 'wide');
      }
    });
  }

  window.changeDiagramSize = function(sectionId, size) {
    if (!['compact', 'standard', 'wide'].includes(size)) return;
    _currentCanvasSize = size;
    try { localStorage.setItem('diagramCanvasSize', _currentCanvasSize); } catch(e) {}

    // When size is changed, apply to all diagram canvas containers
    applyGlobalDiagramSettings();
  };

  window.adjustDiagramTextScale = function(delta) {
    _currentFontScale = Math.min(Math.max(Math.round((_currentFontScale + delta) * 10) / 10, 0.6), 1.8);
    try { localStorage.setItem('diagramFontScale', _currentFontScale.toString()); } catch(e) {}
    applyGlobalDiagramSettings();
  };

  window.resetDiagramSettings = function(sectionId) {
    _currentFontScale = 1.0;
    _currentCanvasSize = 'standard';
    try {
      localStorage.removeItem('diagramFontScale');
      localStorage.removeItem('diagramCanvasSize');
    } catch(e) {}
    applyGlobalDiagramSettings();
  };

  window.applyGlobalDiagramSettings = applyGlobalDiagramSettings;

  // Initial apply
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyGlobalDiagramSettings);
    } else {
      applyGlobalDiagramSettings();
    }
  }
})();

