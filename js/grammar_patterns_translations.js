/**
 * Grammar Patterns, Formulas & Visual Path Multilingual Translations
 * Covers all 30 curriculum sections in 7 languages (EN, FA, GU, HI, TA, KO, ZH)
 */

window.GRAMMAR_PATTERNS_TRANSLATIONS = {
  "en": {
    "ui": {
      "hub_title": "Formulas, Word Triggers & Visual Logic",
      "hub_subtitle": "Recognize patterns at a glance • trace how grammatical conclusions are reached",
      "hub_sec_formulas": "Grammatical Formulas",
      "hub_sec_triggers": "How to Recognize by Words & Patterns",
      "hub_sec_signals": "Signal & Trigger Words",
      "hub_sec_patterns": "Word Endings & Shape Rules",
      "hub_sec_path": "Diagnostic Decision Path — How to Reach the Conclusion",
      "hub_sec_diagram": "Visual Logic Diagram"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "Definite Article Formula",
            "meaning": "Specific known entity or universal concept (English: THE)",
            "example": "J’aime le café (concept) · Regarde le train (specific)"
          },
          {
            "name": "Indefinite Article Formula",
            "meaning": "Countable, non-specific individual unit (English: A / AN / SOME)",
            "example": "J’achète un roman · Elle mange une pomme"
          },
          {
            "name": "Partitive Article Formula",
            "meaning": "Uncountable mass, portion of a substance (English: SOME / ANY)",
            "example": "Je bois du café · Nous voulons de la moutarde"
          },
          {
            "name": "Universal Negation Law",
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
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "Noun Pluralization Formula",
            "meaning": "Standard plural rule (ending -s is silent in French)",
            "example": "le livre ➔ les livres · la table ➔ les tables"
          },
          {
            "name": "Irregular Plural -al Formula",
            "meaning": "Drop -al and attach -aux (pronounced /o/)",
            "example": "un journal ➔ des journaux · un animal ➔ des animaux"
          },
          {
            "name": "Invariant Plural Formula",
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
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "Spoken Quebec Plural Pronoun Rule",
            "meaning": "In natural Quebec French, 'on' completely replaces 'nous' in speech",
            "example": "Nous mangeons ➔ On mange (much easier conjugation!)"
          },
          {
            "name": "Tu Elision in Spoken Quebec",
            "meaning": "Conversational contraction in Quebec spoken registers",
            "example": "Tu es prêt ? ➔ T’es prêt ? · Tu as faim ? ➔ T’as faim ?"
          },
          {
            "name": "Third Person Plural Gender Rule",
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
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ER Verbs Regular Formula",
            "meaning": "90% of all French verbs follow this exact termination sequence",
            "example": "parler ➔ je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent"
          },
          {
            "name": "-IR Verbs Regular (Finir) Formula",
            "meaning": "Group 2 regular verbs insert the -iss- infix in plural persons",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "The Silent 'Boot' Endings Rule",
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
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "Standard Sentence Order Formula",
            "meaning": "Declarative French follows English order for basic affirmative sentences",
            "example": "Alex (S) mange (V) une pomme (O)"
          },
          {
            "name": "The Negation Sandwich Formula",
            "meaning": "Negation wraps around the conjugated verb like two slices of bread",
            "example": "Je NE parle PAS · Elle N’aime PAS le bruit"
          },
          {
            "name": "Question Formation 3-Tiers",
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
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "Adjective Agreement Matrix Formula",
            "meaning": "Adjectives must match their noun in both Gender and Number",
            "example": "grand (M) · grande (F) · grands (M.Pl) · grandes (F.Pl)"
          },
          {
            "name": "The BAGS Placement Law",
            "meaning": "Most adjectives go AFTER the noun, except BAGS which go in front",
            "example": "un GRAND livre (Bags: Size) vs un livre ROUGE (Color: after noun)"
          },
          {
            "name": "Vowel Switch for Beau, Nouveau, Vieux",
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
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "Mandatory 'à' Contraction Formula",
            "meaning": "Preposition 'à' fuses with masculine and plural definite articles",
            "example": "Je vais au gym (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "Mandatory 'de' Contraction Formula",
            "meaning": "Preposition 'de' fuses with masculine and plural definite articles",
            "example": "Le retour du roi (de+le) · La liste des invités (de+les)"
          },
          {
            "name": "Geographic Prepositions Formula",
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
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "Possessive Agreement Formula",
            "meaning": "Possessive adjectives agree with the POSSESSED OBJECT, never the owner!",
            "example": "His car = sa voiture (voiture is fem) · Her book = son livre (livre is masc)"
          },
          {
            "name": "Vowel Clash Lifesaver Rule",
            "meaning": "Feminine nouns starting with a vowel switch to masculine forms for phonetic flow",
            "example": "❌ ma amie ➔ ✓ mon amie · ❌ sa école ➔ ✓ son école"
          },
          {
            "name": "Demonstrative Adjectives Formula",
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
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "French 70s Base-60 Math Formula",
            "meaning": "French numbers 70-79 count 10 through 19 on top of 60",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "French 80s Base-20 Math Formula",
            "meaning": "Vigesimal base-20 calculation inherited from Celtic French",
            "example": "80 has an -s (quatre-vingts), drops -s when followed by a number (quatre-vingt-un)"
          },
          {
            "name": "French 90s Math Formula",
            "meaning": "4 times 20 plus the teens (10 to 19)",
            "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
          },
          {
            "name": "Clock Time Telling Formula",
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
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "Passé Composé Master Formula",
            "meaning": "Compound past for completed, one-off events",
            "example": "J’ai mangé (avoir) · Je suis parti (être)"
          },
          {
            "name": "The ÊTRE Auxiliary Selection Formula",
            "meaning": "Only specific verbs of motion/state-change and reflexives use être",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "Participle Formation Formula",
            "meaning": "Standard regular participle endings",
            "example": "parler ➜ parlé · finir ➜ fini · attendre ➜ attendu"
          },
          {
            "name": "Être Agreement Law",
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
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "Direct Object Pronoun (COD) Formula",
            "meaning": "Replaces direct objects without any preposition",
            "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
          },
          {
            "name": "Indirect Object Pronoun (COI) Formula",
            "meaning": "Replaces 'à + person' (to him / to her / to them)",
            "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes parents ➔ Je LEUR téléphone"
          },
          {
            "name": "Object Pronoun Placement Formula",
            "meaning": "French places object pronouns BEFORE the verb (opposite of English)",
            "example": "I love you ➔ Je T'aime (not Je aime toi)"
          },
          {
            "name": "Near Future Pronoun Placement",
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
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "Imperative Formation Formula",
            "meaning": "Drop the subject pronoun; only 3 verb persons exist for commands",
            "example": "Tu viens ➔ Viens ! · Nous allons ➔ Allons ! · Vous mangez ➔ Mangez !"
          },
          {
            "name": "The -ER Verb 'Tu' -S Drop Law",
            "meaning": "Tu regardes ➔ Regarde ! · Tu vas ➔ Va !",
            "example": "Parle ! (NOT Parles !) · Écoute ! (NOT Écoutes !)"
          },
          {
            "name": "Modal Verbs Formula",
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
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est vs Il est Decision Formula",
            "meaning": "Use c'est with modified nouns; use il est directly with bare adjectives",
            "example": "C'est un bon médecin (modified noun) vs Il est intelligent (bare adjective)"
          },
          {
            "name": "Il y a Existence & Past Formula",
            "meaning": "Dual meaning: state of presence OR elapsed time ago",
            "example": "Il y a deux stylos sur la table · Je suis arrivé il y a dix minutes"
          },
          {
            "name": "Avoir Besion / Envie Formulas",
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
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "Quebec High-Frequency Lexical Formula",
            "meaning": "Standard Quebec terms heard across Montreal & QC daily life",
            "example": "petit déjeuner ➜ déjeuner · déjeuner ➜ dîner · dîner ➜ souper"
          },
          {
            "name": "The Quebec Affrication Law",
            "meaning": "Before high front vowels, /t/ and /d/ naturally produce a subtle affricate hiss",
            "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "The Quebec Interrogative -tu Particle",
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
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "Auditory Similarity Rule",
            "meaning": "All three endings sound 100% IDENTICAL to the ear (/e/)",
            "example": "parler, parlé, parlez all sound the exact same: /paʁle/"
          },
          {
            "name": "The 'Vendre' Deduction Test",
            "meaning": "Determine whether to write -er (infinitive) or -é (past participle)",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
          },
          {
            "name": "Participle Deduction Test",
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
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "Reflexive Present Conjugation Formula",
            "meaning": "Reflexive pronoun matches the subject doing the action to themselves",
            "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
          },
          {
            "name": "Pronominal Passé Composé Formula",
            "meaning": "100% of pronominal verbs require ÊTRE in the passé composé",
            "example": "Elle s'est réveillée · Nous nous sommes couchés"
          },
          {
            "name": "Reflexive Agreement Law",
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
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "Direct Object (COD) Identification Formula",
            "meaning": "No preposition separates the verb from the direct noun",
            "example": "J'invite mes amis ➔ Je LES invite"
          },
          {
            "name": "Indirect Object (COI) Identification Formula",
            "meaning": "Separated by preposition 'à' pointing to a person",
            "example": "Je parle à mon patron ➔ Je LUI parle"
          },
          {
            "name": "Dual Pronoun Order Hierarchy Formula",
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
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "Futur Proche Affirmative Formula",
            "meaning": "Used for immediate plans, intentions, and definite upcoming events (Going to...)",
            "example": "Je vais manger · Nous allons voyager · Ils vont partir"
          },
          {
            "name": "Futur Proche Negative Formula",
            "meaning": "Negation wraps around the conjugated verb 'aller', leaving the infinitive outside",
            "example": "Je ne vais pas travailler demain (NOT Je ne travailler pas)"
          },
          {
            "name": "Pronominal Futur Proche Formula",
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
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "Futur Simple Master Formula",
            "meaning": "Notice the endings are literally the present tense of AVOIR (ai, as, a, ons, ez, ont)!",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "-RE Verbs Future Stem Rule",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "prendre ➔ je prendrai · attendre ➔ j'attendrai"
          },
          {
            "name": "Core Irregular Future Stems",
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
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "Imparfait Stem Extraction Formula",
            "meaning": "Works for 99.9% of all verbs in the French language!",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "Imparfait Universal Endings Formula",
            "meaning": "Notice -ais, -ais, -ait, -aient are all pronounced identically: /ɛ/",
            "example": "je parlais, tu parlais, il parlait, ils parlaient all sound /paʁlɛ/"
          },
          {
            "name": "The Only Irregular Stem in French",
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
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "Pronoun Y Location Replacement Formula",
            "meaning": "Replaces any geographic place or location (English: THERE)",
            "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "Pronoun Y Inanimate Object Formula",
            "meaning": "Replaces 'à + thing/concept' (thinking about, participating in)",
            "example": "Je pense à mon avenir ➔ J'Y pense (NOT Je pense à lui: people take stress pronouns!)"
          },
          {
            "name": "Pronoun Y Placement Formula",
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
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "Conditionnel Assembly Formula",
            "meaning": "Hybrid tense: uses the Future body with the Imparfait voice!",
            "example": "aimer ➔ stem aimer- + -ais ➔ J'aimerais · être ➔ stem ser- + -ait ➔ Il serait"
          },
          {
            "name": "Universal Politeness Formula",
            "meaning": "Softens demands in shops, restaurants, and professional settings",
            "example": "Je veux un café (rude) ➔ Je VOUDRAIS un café (polite)"
          },
          {
            "name": "Second Conditional 'Si' Formula",
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
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "Gérondif Formation Formula",
            "meaning": "Extract the present 'nous' stem, add preposition 'en' and suffix '-ant'",
            "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
          },
          {
            "name": "Simultaneous Actions Formula",
            "meaning": "Both actions must be performed by the exact same subject at the same time",
            "example": "Il écoute de la musique en étudiant (He listens to music while studying)"
          },
          {
            "name": "Manner & Means Formula",
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
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "Passé Récent Affirmative Formula",
            "meaning": "Used for actions completed just moments ago (English: Just did something)",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "De Elision Law",
            "meaning": "Mandatory contraction before vowel-starting verbs",
            "example": "Il vient D’arriver · Elle vient D’entendre"
          },
          {
            "name": "Pronominal Passé Récent Formula",
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
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "Full Chronological Timeline Formula",
            "meaning": "The 5 primary operational tenses plotted along the chronological timeline of reality",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "Spoken French Conjugation Triumvirate",
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
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS Formula (Ongoing Past to Present)",
            "meaning": "Started in the past and is STILL CONTINUING right now (French uses Present tense!)",
            "example": "J'habite à Montréal DEPUIS deux ans (I have lived here for 2 years and still do!)"
          },
          {
            "name": "IL Y A Formula (Completed Point in Past)",
            "meaning": "Points to a single completed moment in the past (English: AGO)",
            "example": "Le train est parti IL Y A dix minutes (The train left 10 minutes ago)"
          },
          {
            "name": "DANS Formula (Countdown to Future)",
            "meaning": "Counts down to when a future action will begin (English: IN)",
            "example": "Le cours commence DANS cinq minutes (Class starts in 5 minutes)"
          },
          {
            "name": "PENDANT Formula (Closed Completed Duration)",
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
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "Historical Setting vs Action Formula",
            "meaning": "History narratives set the stage with Imparfait, then advance chronology with Passé Composé",
            "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey a fondé Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "Historical Date Preposition Formula",
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
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "The Movie Camera vs Flash Snapshot Formula",
            "meaning": "Imparfait sets the stage (weather, emotions, 'was doing'); Passé Composé triggers the interruption or milestone",
            "example": "Il pleuvait (Imparfait: scene) quand soudain la foudre a frappé (Passé Composé: snapshot)"
          },
          {
            "name": "Interrupted Action Formula",
            "meaning": "The continuous action that was in progress is interrupted by a punctual event",
            "example": "Je dormais (was sleeping) quand le réveil A SONNÉ (rang)"
          },
          {
            "name": "The Chameleon Verbs Formula",
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
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE Feminine Suffix Formula",
            "meaning": "Nearly all character adjectives ending in -eux shift to -euse in the feminine",
            "example": "généreux ➔ généreuse · courageux ➔ courageuse · paresseux ➔ paresseuse"
          },
          {
            "name": "-IF ➔ -IVE Feminine Suffix Formula",
            "meaning": "Voicing shift from voiceless /f/ to voiced /v/",
            "example": "créatif ➔ créative · actif ➔ active · attentif ➔ attentive"
          },
          {
            "name": "-EL / -ON Double Consonant Formula",
            "meaning": "Doubles the final consonant before adding -e",
            "example": "naturel ➔ naturelle · bon ➔ bonne · mimi ➔ mignonne"
          },
          {
            "name": "Invariable Adjective Suffix -E",
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
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "Grammar Retention Equation",
            "meaning": "The pedagogical pillars underpinning the French Grammar Guide design",
            "example": "Formulas (Logical clarity) + Recognition badges (Pattern recognition) + SVG Diagrams (Mental models)"
          },
          {
            "name": "Continuous Learning Cycle",
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
        ]
      }
    }
  },
  "fa": {
    "ui": {
      "hub_title": "فرمول‌ها، محرک‌های واژگانی و منطق تصویری",
      "hub_subtitle": "الگوها را در یک نگاه تشخیص دهید • مسیر رسیدن به نتیجه گرامری را ردیابی کنید",
      "hub_sec_formulas": "فرمول‌های گرامری",
      "hub_sec_triggers": "نحوه تشخیص با کلمات و الگوها",
      "hub_sec_signals": "کلمات نشانه و محرک",
      "hub_sec_patterns": "پسوندها و قواعد ساختاری کلمات",
      "hub_sec_path": "مسیر تصمیم‌گیری تشخیصی — نحوه رسیدن به نتیجه",
      "hub_sec_diagram": "نمودار منطق تصویری"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "فرمول مقاله قطعی",
            "meaning": "نهاد شناخته شده خاص یا مفهوم جهانی (به انگلیسی: THE)",
            "example": "J’aime le café (مفهوم) · Regarde le train (مشخص)"
          },
          {
            "name": "فرمول مقاله نامشخص",
            "meaning": "واحد فردی غیر اختصاصی و قابل شمارش (به انگلیسی: A / AN / SOME)",
            "example": "J’achète un roman · Elle mange une pomme"
          },
          {
            "name": "فرمول مقاله جزئی",
            "meaning": "جرم غیرقابل شمارش، بخشی از یک ماده (به انگلیسی: SOME / ANY)",
            "example": "Je bois du café · Nous voulons de la moutarde"
          },
          {
            "name": "Universal Negation Law",
            "meaning": "نفی تمام مقالات کمیت را به DE / D' جمع می کند (به جز با être)",
            "example": "J’ai un chien ➔ Je n’ai PAS DE chien (هرگز پس از آن چین)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "همیشه مقالات معین را فعال می کند (le، la، les) - نشان دهنده علاقه/نپسندیدن کلی"
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "هنگام گرفتن مقدار شمارش نشده، مقالات PARTITIVE (du، de la، des) را فعال می کند."
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "محرک مقدار صفر: مقالات را به DE / D' تبدیل می کند"
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "قیدهای کمیت همیشه بدون مقاله DE / D’ می گیرند (beaucoup de café)"
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90% + مردانه ➜ از le / un / du استفاده کنید"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90% + زنانه ➜ از la / une / de la استفاده کنید"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "قرارداد: le/la ➔ l’ · du/de la ➔ de l’"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: Context را بررسی کنید",
            "question": "آیا این یک ترجیح عمومی است یا یک شی شناخته شده خاص؟",
            "action": "اگر بله ➔ قطعی (le / la / l' / les)"
          },
          {
            "step": "مرحله 2: شمارش پذیری را بررسی کنید",
            "question": "آیا می توانید واحدهای کامل (1، 2، 3 مورد) را بشمارید؟",
            "action": "اگر بله ➔ نامحدود (un / une / des)"
          },
          {
            "step": "مرحله 3: Mass Substance را بررسی کنید",
            "question": "آیا این یک ماده مایع، جرم یا غذای شمارش نشده است؟",
            "action": "اگر بله ➔ جزئی (du / de la / de l')"
          },
          {
            "step": "مرحله 4: فیلتر نفی",
            "question": "آیا فعل اصلی نفی می شود (ne... pas) و نه فعل être؟",
            "action": "اگر بله ➔ بلافاصله مقاله را به DE / D' کاهش دهید"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "فرمول جمع اسم",
            "meaning": "قاعده جمع استاندارد (پایان -s در فرانسوی ساکت است)",
            "example": "le livre ➔ les livres · la table ➔ les tables"
          },
          {
            "name": "فرمول نامنظم جمع -al",
            "meaning": "-al را رها کنید و -aux را وصل کنید (تلفظ /o/)",
            "example": "un journal ➔ des journaux · un animal ➔ des animaux"
          },
          {
            "name": "فرمول جمع ثابت",
            "meaning": "اسم هایی که قبلاً به sibilants ختم می شوند به صورت جمع تغییر نمی کنند",
            "example": "un pays ➔ des pays · une voix ➔ des voix · un nez ➔ des nez"
          }
        ],
        "triggers": [
          {
            "word": "Suffix -eau / -al",
            "rule": "به جای -s با -x جمع می‌شود (des gâteaux، des cadeaux، des journaux)"
          },
          {
            "word": "Days, months, languages, seasons",
            "rule": "همیشه مذکر (le lundi، le français، l'été، le printemps)"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "همیشه زنانه (la chimie، la physique، la politique)"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "همیشه مذکر (le kilomètre, le nord, l'ouest)"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-ment (le gouvernement)، -isme (le capitalisme)، -age (le voyage)، -oir (le miroir)، -teur (le directeur)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-tion / -sion (la nation)، -té (la liberté)، -ure (la voiture)، -ence / -ance (la Science)، -ette (la bicyclette)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "la plage, la cage, la page (-سن اما زنانه!) · le silence, le squelette (-ce/-te اما مردانه!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: پایان کلمه را بررسی کنید",
            "question": "آیا این کلمه به -ment، -age، -isme یا -oir ختم می شود؟",
            "action": "اگر بله ➔ اختصاص مردانه (90% + احتمال)"
          },
          {
            "step": "مرحله 2: پسوند Abstract/State را بررسی کنید",
            "question": "آیا این کلمه به -tion، -sion، -té، -ence یا -ure ختم می شود؟",
            "action": "اگر بله ➔ تخصیص مونث (95% + احتمال)"
          },
          {
            "step": "مرحله 3: Plural Marker را بررسی کنید",
            "question": "آیا مفرد به -al، -eau یا -eu ختم می شود؟",
            "action": "اگر بله ➔ با -aux یا -x جمع را تشکیل دهید"
          },
          {
            "step": "مرحله 4: پایان Sibilant را بررسی کنید",
            "question": "آیا به -s، -x، یا -z ختم می شود؟",
            "action": "اگر بله ➔ املای یکسان حفظ شود، مقاله را به les/des تغییر دهید"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "قاعده ضمیر جمع کبک گفتاری",
            "meaning": "In natural Quebec French, 'on' completely replaces 'nous' in speech",
            "example": "Nous mangeons ➔ On mange (much easier conjugation!)"
          },
          {
            "name": "Tu Elision در کبک گفتاری",
            "meaning": "انقباض مکالمه در رجیسترهای گفتاری کبک",
            "example": "Tu es Pret ? ➔ T’es prêt ? · تو به عنوان فام ? ➔ T’as faim ?"
          },
          {
            "name": "قاعده جنسیت سوم شخص جمع",
            "meaning": "هر گروهی که شامل حداقل یک مرد باشد از نظر دستوری به ils پیش‌فرض می‌شود",
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
            "rule": "تابع دوگانه: جمع «شما همه» یا مفرد رسمی/مودب «شما»"
          },
          {
            "word": "Il vs Ce",
            "rule": "از «il» با صفت های خالی استفاده کنید (Il est tard). use 'c’est' with modified nouns (C’est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "همیشه «e» را قبل از حروف صدادار/h خاموش می‌اندازد (J’habite، J’aime، J’écoute)"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "j’ai، j’arrive، t’as، t’es (حذف اجباری برای je، صحبت شده برای tu)"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "همیشه از «il» به عنوان موضوع ساختگی استفاده می‌کند: Il pleut، Il neige، Il est 3h"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "از «روشن» استفاده کنید: En hiver، on porte un manteau"
          }
        ],
        "decisionSteps": [
          {
            "step": "Step 1: Identify Audience",
            "question": "آیا به طور رسمی با یک نفر صحبت می کنید یا گروهی؟",
            "action": "استفاده از VOUS (صوری یا جمع)"
          },
          {
            "step": "Step 2: Are you talking about 'We'?",
            "question": "Is this spoken or informal French?",
            "action": "Use ON (+ 3rd person singular verb)"
          },
          {
            "step": "مرحله 3: تجزیه و تحلیل گروه های مختلط",
            "question": "آیا گروه شامل حداقل 1 موجودیت مذکر است؟",
            "action": "از ILS استفاده کنید (فقط 100٪ گروه های زنانه ELLES مصرف می کنند)"
          },
          {
            "step": "مرحله 4: مرز صدادار را بررسی کنید",
            "question": "آیا فعل بعدی با مصوت شروع می شود؟",
            "action": "قرارداد Je ➔ J'"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "فرمول منظم افعال -ER",
            "meaning": "90٪ از تمام افعال فرانسوی دقیقاً از این ترتیب پایانی پیروی می کنند",
            "example": "parler ➔ je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent"
          },
          {
            "name": "فرمول -IR افعال با قاعده (Finir).",
            "meaning": "افعال منظم گروه 2 پسوند -iss- را به صورت جمع اضافه می کنند",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "The Silent 'Boot' Endings Rule",
            "meaning": "فقط nous (-ons) و vous (-ez) یک هجای صدادار به ساقه اضافه می کنند!",
            "example": "parle، parles، parlent همه به طور یکسان تلفظ می شوند: /paʁl/"
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
            "rule": "صدای بینی /ɔ̃/ - نشانگر جمع اول شخص جهانی"
          },
          {
            "word": "-ez ending",
            "rule": "صدای مصوت /e/ - نشانگر جمع جهانی دوم شخص"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "NEVER pronounce -ent as a nasal! Ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "تغییرات ساقه در je/tu/il/ils (داخل بوت)، در nous/vous به حالت عادی باز می گردد: acheter ➔ j'achète، nous achetons"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "Manger ➔ nous mangeons (برای حفظ صدای نرم «j» «e» را نگه دارید)"
          }
        ],
        "decisionSteps": [
          {
            "step": "Step 1: Identify Verb Group",
            "question": "آیا مصدر به -er، -ir یا -re ختم می شود؟",
            "action": "Strip ending to extract the base stem"
          },
          {
            "step": "مرحله 2: موضوع را مطابقت دهید",
            "question": "چه کسی عمل (je, tu, il, nous, vous, ils) را انجام می دهد؟",
            "action": "پسوند پایانی مربوطه را انتخاب کنید"
          },
          {
            "step": "مرحله 3: فیلتر تلفظ",
            "question": "Is the subject inside the 'boot' (je/tu/il/ils)?",
            "action": "Keep ending completely silent! فقط ساقه شنیده می شود"
          },
          {
            "step": "مرحله 4: بررسی جمع",
            "question": "نووس است یا ووز؟",
            "action": "پایان شنیدنی را تلفظ کنید: -ons (/ɔ̃/) یا -ez (/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "فرمول ترتیب جملات استاندارد",
            "meaning": "فرانسه اعلانی از ترتیب انگلیسی برای جملات مثبت اصلی پیروی می کند",
            "example": "Alex (S) Mange (V) une pomme (O)"
          },
          {
            "name": "The Negation Sandwich Formula",
            "meaning": "نفی مانند دو تکه نان دور فعل مزدوج می پیچد",
            "example": "Je NE parle PAS · Elle N’aime PAS le bruit"
          },
          {
            "name": "تشکیل سوال 3-طبقه",
            "meaning": "سه راه برای پرسیدن هر سوال بله یا خیر بسته به ثبت نام",
            "example": "تو وین ? (گاه به گاه) · Est-ce que tu viens ? (استاندارد) · Viens-tu ? (رسمی)"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "نفی استاندارد (نه)"
          },
          {
            "word": "Ne ... jamais",
            "rule": "عادت منفی (هرگز) - جایگزین \"pas\" می شود"
          },
          {
            "word": "Ne ... plus",
            "rule": "ادامه منفی (دیگر / نه دیگر) - جایگزین \"pas\" می شود"
          },
          {
            "word": "Est-ce que",
            "rule": "بازکننده سؤال جهانی: ترتیب کلمات استاندارد SVO را حفظ می کند"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ Je ne pas Sais ➔ ✓ Je ne Sais Pas (فعل ساندویچ)"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "J'sais pas · Y vient pas (بسیار رایج در زبان فرانسه شفاهی)"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai، n'aime، n'écoute، n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: فعل مزدوج را شناسایی کنید",
            "question": "فعل مزدوج اولیه چیست؟",
            "action": "موضوع را مستقیماً قبل از آن قرار دهید"
          },
          {
            "step": "مرحله 2: آیا شما نفی می کنید؟",
            "question": "آیا می خواهید بگویید نه / هرگز / دیگر؟",
            "action": "فعل را ساندویچ کنید: NE + فعل + PAS / JAMAIS / PLUS"
          },
          {
            "step": "مرحله 3: آیا سوالی می‌پرسید؟",
            "question": "از چه ثبتی استفاده می کنید؟",
            "action": "غیررسمی: Intonation (؟) · استاندارد: Est-ce que... · رسمی: Invert Verb-Subject"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "فرمول ماتریس توافق صفت",
            "meaning": "صفت ها باید هم در جنسیت و هم از نظر تعداد با اسم خود مطابقت داشته باشند",
            "example": "grand (M) · grande (F) · grands (M.Pl) · grandes (F.Pl)"
          },
          {
            "name": "The BAGS Placement Law",
            "meaning": "اکثر صفت ها بعد از اسم قرار می گیرند، به جز BAGS که جلوتر می روند",
            "example": "un GRAND livre (کیف: اندازه) در مقابل un livre ROUGE (رنگ: بعد از اسم)"
          },
          {
            "name": "سوئیچ واکه برای Beau، Nouveau، Vieux",
            "meaning": "اشکال مذکر خاص قبل از اسم مذکر که با واکه/h شروع می شوند",
            "example": "beau ➔ bel · nouveau ➔ nouvel · vieux ➔ vieil"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "beau, joli, jeune, vieux, bon, mauvais, grand, petit ➔ قبل از اسم قرار داده شده"
          },
          {
            "word": "Colors & Shapes",
            "rule": "bleu، rouge، rond، carré ➔ قرار داده شده پس از اسم (une voiture rouge)"
          },
          {
            "word": "Nationalities",
            "rule": "canadien, français, américain ➔ قرار داده شده پس از اسم (un café québécois)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "هرگز -s یا -e را اضافه نکنید! (des chaussures maron)"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "heureux ➔ heureuse، curieux ➔ curieuse"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "اکتیف ➔ فعال، خلاقانه ➔ خلاقانه، ورزشی ➔ ورزشی"
          },
          {
            "pattern": "-el / -en ➜ -elle / -enne",
            "note": "طبیعت ➔ naturelle، canadien ➔ canadienne"
          },
          {
            "pattern": "-er ➜ -ère",
            "note": "premier ➔ première, cher ➔ chère"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: بررسی موقعیت (BAGS)",
            "question": "آیا زیبایی، سن، خوبی یا اندازه است؟",
            "action": "اگر بله ➔ جای قبل از اسم. در غیر این صورت ➔ جای بعد از اسم"
          },
          {
            "step": "مرحله 2: جنسیت اسم را بررسی کنید",
            "question": "آیا اسم مؤنث است؟",
            "action": "اضافه کردن -e (یا تبدیل پسوند: -eux ➔ -euse، -if ➔ -ive)"
          },
          {
            "step": "مرحله 3: شماره اسم را بررسی کنید",
            "question": "آیا اسم جمع است؟",
            "action": "اضافه کردن -s (یا -es در صورت جمع مونث)"
          },
          {
            "step": "مرحله 4: برخورد صدادار را بررسی کنید",
            "question": "آیا قبل از اسم مصوت مذکر beau/nouveau/vieux است؟",
            "action": "از bel، nouvel، vieil استفاده کنید"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "فرمول انقباض اجباری 'à'",
            "meaning": "حرف اضافه «à» با حروف معین مذکر و جمع ترکیب می شود",
            "example": "Je vais au Gym (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "فرمول انقباض اجباری 'de'",
            "meaning": "حرف اضافه 'de' با حروف معین مذکر و جمع ترکیب می شود",
            "example": "Le retour du roi (de+le) · La list des invités (de+les)"
          },
          {
            "name": "فرمول حروف اضافه جغرافیایی",
            "meaning": "حروف اضافه مکان به شدت به جنسیت دستوری مقصد بستگی دارد",
            "example": "مونترال، EN فرانسه، AU کانادا، AUX États-Unis"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "همیشه à: در مونترال، کبک، پاریس، تورنتو (بدون مقاله!)"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "به -e ختم می شود ➜ مونث: en France، en Colombie، en Ontario (با مصوت شروع می شود)"
          },
          {
            "word": "AU + masculine country",
            "rule": "به -e ختم نمی شود: au Canada، au Mexique، au Japon"
          },
          {
            "word": "Chez + person / professional",
            "rule": "به معنای \"در خانه / دفتر کار\": chez moi، chez le medecin، chez jean"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ à le restaurant ➔ ✓ au restaurant · ❌ de le parc ➔ ✓ du parc"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "La France ➔ en France, la Suisse ➔ en Suisse (استثنا: le Mexique ➔ au Mexique)"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "کوبا، ماداگاسکار، هائیتی"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: نوع مقصد را بررسی کنید",
            "question": "آیا این یک شهر، یک کشور یا یک شخص است؟",
            "action": "شهر ➔ À · شخص ➔ چز · کشور ➔ مرحله 2 را ببینید"
          },
          {
            "step": "مرحله 2: جنسیت کشور را بررسی کنید",
            "question": "آیا کشور به -e ختم می شود یا با مصوت شروع می شود؟",
            "action": "اگر بله ➔ EN (به ایتالیایی، در فرانسه) · اگر خیر ➔ AU (در کانادا)"
          },
          {
            "step": "مرحله 3: کشورهای جمع را بررسی کنید",
            "question": "آیا کشور جمع (États-Unis، Pays-Bas) است؟",
            "action": "استفاده از AUX (aux États-Unis)"
          },
          {
            "step": "مرحله 4: ترکیب قطعی مقاله را بررسی کنید",
            "question": "آیا شما à/de را با le یا les ترکیب می کنید؟",
            "action": "قرارداد: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "فرمول توافق مالکیت",
            "meaning": "صفت های ملکی با شیء متصرف موافقند، هرگز مالک!",
            "example": "ماشین او = sa voiture (voiture fem است) · کتاب او = son livre (livre masc است)"
          },
          {
            "name": "قانون نجات صدادار Clash",
            "meaning": "اسم‌های مؤنث که با یک مصوت شروع می‌شوند به صورت‌های مذکر برای جریان آوایی تغییر می‌کنند",
            "example": "❌ ma amie ➔ ✓ mon amie · ❌ sa école ➔ ✓ son école"
          },
          {
            "name": "فرمول صفت های نمایشی",
            "meaning": "به معنای این یا آن؛ cet از توقف ناجور واکه ها اجتناب می کند",
            "example": "ce livre · cet hôtel · میز cette · ces clés"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "برای اسم های مذکر یا اسم های مؤنث که با مصوت شروع می شوند استفاده می شود"
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "به شدت برای اسامی مونث که با حرف صامت شروع می شوند استفاده می شود"
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "مالکیت جمع جهانی برای 1 مالک (بدون توجه به جنسیت)"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "دارایی منحصر به فرد برای چندین مالک (ما/شما/آنها)"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "Mon amie, son idée, ton histoire (صدا صاف، اجتناب از برخورد /a-a/)"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "Cet homme، cet appartement، cet été"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "son livre = کتاب او (1 صاحب); leur livre = کتاب آنها (چند مالک)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: کالای تحت مالکیت را شناسایی کنید",
            "question": "جنسیت و شماره آن چیست؟",
            "action": "جمع ➔ mes/tes/ses/nos/vos/leurs. مفرد ➔ مرحله 2 را ببینید"
          },
          {
            "step": "مرحله 2: شروع صدادار را بررسی کنید",
            "question": "آیا اسم مفرد با واکه شروع می شود یا h ساکت؟",
            "action": "اگر بله ➔ باید از mon / ton / son / cet استفاده کنید (حتی اگر زنانه باشد!)"
          },
          {
            "step": "مرحله 3: مطابقت با مالک",
            "question": "مالک آن کیست (je, tu, il/elle, nous, vous, ils)؟",
            "action": "ردیف مالکیت فرد صحیح را انتخاب کنید"
          },
          {
            "step": "مرحله 4: فیلتر نمایشی",
            "question": "آیا به \"این/آن\" اشاره می کنید؟",
            "action": "ce (M) / cet (M + مصوت) / cette (F) / ces (جمع)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "فرمول ریاضی پایه 60 دهه 70 فرانسه",
            "meaning": "اعداد فرانسوی 70-79 از 10 تا 19 بالای 60 می شمارند",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "فرمول ریاضی پایه 20 دهه 80 فرانسه",
            "meaning": "محاسبه پایه 20 Vigesimal که از سلتیک فرانسوی به ارث رسیده است",
            "example": "عدد 80 دارای یک -s (quatre-vingts) است، زمانی که یک عدد به دنبال آن باشد، افت می کند (quatre-vingt-un)"
          },
          {
            "name": "فرمول ریاضی دهه 90 فرانسه",
            "meaning": "4 برابر 20 به علاوه نوجوانان (10 تا 19)",
            "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
          },
          {
            "name": "فرمول زمان بیان ساعت",
            "meaning": "فرمول استاندارد ساعت فرانسوی به صراحت از 'heures' استفاده می کند",
            "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "70 در فرانسه و کبک (60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "80 در فرانسه و کبک (4×20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "90 در فرانسه و کبک (4 × 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "اتصالات برای 21، 31، 41، 51، 61، 71 (et-un) و نیم گذشته (et demie)"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = quatre-vingt-un (NO 'et'!)، 91 = quatre-vingt-onze (NO 'et'!)"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "اکنون می توان تمام قسمت های اعداد مرکب را خط خطی کرد: deux-cent-cinquante"
          },
          {
            "pattern": "Half past agreement",
            "note": "une heure et demie (توافق زن با heure) در مقابل midi et demi (مثلا)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: بررسی دهک (70s، 80s، 90s)",
            "question": "آیا این عدد در دهه 70، 80 یا 90 است؟",
            "action": "دهه 70 ➔ 60 + نوجوانان · دهه 80 ➔ 4x20 + رقمی · دهه 90 ➔ 4x20 + نوجوانان"
          },
          {
            "step": "مرحله 2: اتصال 1s را بررسی کنید",
            "question": "آیا 21، 31، 41، 51، 61، 71 است؟",
            "action": "«et» را اضافه کنید: soixante-et-un. (81 و 91 'et' را نمی گیرند)"
          },
          {
            "step": "مرحله 3: گفتن زمان",
            "question": "از نیم ساعت گذشته؟",
            "action": "از 'moins' استفاده کنید: 4:50 = 5h moins dix"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "Passé Composé Master Formula",
            "meaning": "گذشته مرکب برای رویدادهای کامل و یکباره",
            "example": "J’ai mangé (avoir) · Je suis parti (être)"
          },
          {
            "name": "فرمول انتخاب کمکی ÊTRE",
            "meaning": "فقط افعال خاص حرکت/تغییر حالت و انعکاسی از être استفاده می کنند",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "فرمول تشکیل بخش",
            "meaning": "پایان‌های جزء معمولی استاندارد",
            "example": "parler ➜ parlé · finir ➜ fini · حضوری ➜ حضوری"
          },
          {
            "name": "قانون قرارداد Être",
            "meaning": "-e را برای مونث، -s را برای جمع با être اضافه کنید",
            "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "محرک زمان گذشته: دیروز / دیشب"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "ماشه وقفه ناگهانی: همیشه Passé Composé"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "محرک رویداد جدا شده خاص"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Enterer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir, Passer"
          }
        ],
        "patterns": [
          {
            "pattern": "Avoir has NO agreement with Subject",
            "note": "Elle a mangé (NO -e!)، Elles ont regardé (NO -es!)"
          },
          {
            "pattern": "Irregular participles to memorize",
            "note": "fait (faire)، pris (prendre)، vu (voir)، eu (avoir)، été (être)، mis (mettre)"
          },
          {
            "pattern": "Reflexive agreement exception",
            "note": "Elle s'est lavé les mains (بدون توافق زیرا COD 'les mains' فعل AFTER است)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: آیا فعل بازتابی (se...) است؟",
            "question": "آیا فعل se/s’ دارد؟",
            "action": "اگر بله ➔ Aux ÊTRE است (و مفعول با موضوع موافق است مگر اینکه مفعول مستقیم دنبال شود)"
          },
          {
            "step": "مرحله 2: آیا در DR MRS VANDERTRAMP وجود دارد؟",
            "question": "آیا این یکی از 17 فعل حرکت/تغییر حالت است؟",
            "action": "اگر بله ➔ Aux ÊTRE است (شرکت با موضوع موافق است)"
          },
          {
            "step": "مرحله 3: پیش فرض کمکی",
            "question": "همه افعال دیگر",
            "action": "استفاده از AVOIR (بدون توافق موضوعی)"
          },
          {
            "step": "مرحله 4: Participle را تشکیل دهید",
            "question": "ساقه منظم یا فرم نامنظم را اعمال کنید",
            "action": "-er ➔ -é، -ir ➔ -i، -re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "فرمول ضمیر عینی مستقیم (COD).",
            "meaning": "بدون هیچ حرف اضافه ای جایگزین اشیاء مستقیم می شود",
            "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
          },
          {
            "name": "فرمول ضمیر مفعول غیرمستقیم (COI).",
            "meaning": "جایگزین «à + شخص» (به او / او / به آنها)",
            "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes پدر و مادر ➔ Je LEUR Téléléphone"
          },
          {
            "name": "فرمول قرار دادن ضمیر مفعول",
            "meaning": "فرانسوی ضمایر مفعولی را قبل از فعل قرار می دهد (برعکس انگلیسی)",
            "example": "دوستت دارم ➔ Je T'aime (نه Je aime toi)"
          },
          {
            "name": "قرار دادن ضمیر آینده نزدیک",
            "meaning": "ضمیر فعل مصدری که منطقاً به آن تعلق دارد را در آغوش می گیرد",
            "example": "Je vais le voir (نه Je le vais voir)"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "ضمیر غیر مستقیم به معنای \"به او\" یا \"به او\" (بدون جنسیت!)"
          },
          {
            "word": "Leur",
            "rule": "ضمیر غیر مستقیم به معنای \"به آنها\" (هرگز ضمیر -s را نمی گیرد!)"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "افعال فعال COI کلاسیک که به lui/leur نیاز دارند"
          },
          {
            "word": "Moi / Toi",
            "rule": "ضمایر تاکیدی که بعد از حروف اضافه یا در امر مثبت استفاده می شود (Regarde-moi!)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "بپرسید: آیا حرف اضافه «à» وجود دارد؟ اگر بله ➔ COI (lui/leur)؛ اگر نه ➔ COD (le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "Je ne le vois pas (ضمیر داخل ساندویچ نفی می ماند!)"
          },
          {
            "pattern": "Elision with vowels",
            "note": "دوست دارم، حاضر می شوم، در t'écoute"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: مفعول فعل را شناسایی کنید",
            "question": "چه چیزی یا چه کسی اقدام را دریافت می کند؟",
            "action": "عبارت شی را برجسته کنید"
          },
          {
            "step": "مرحله 2: آیا حرف اضافه \"à\" قبل از شخص وجود دارد؟",
            "question": "آیا فعل \"à quelqu'un\" را می گیرد؟",
            "action": "اگر بله ➔ COI: LUI (مفرد) / LEUR (جمع)"
          },
          {
            "step": "مرحله 3: مفعول مستقیم (بدون حرف اضافه)؟",
            "question": "آیا مستقیماً به \"چی\" یا \"چه کسی\" پاسخ می دهد؟",
            "action": "اگر بله ➔ COD: LE / LA / L' / LES"
          },
          {
            "step": "مرحله 4: موقعیت قبل از فعل",
            "question": "کجا می رود؟",
            "action": "درست قبل از فعل مزدوج (یا قبل از مصدر در صورت وجود)"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "فرمول تشکیل امری",
            "meaning": "ضمیر فاعل را رها کنید. فقط 3 شخص فعل برای دستورات وجود دارد",
            "example": "Tu viens ➔ Viens ! · ناوس آلون ➔ آلون ! · Vous mangez ➔ Mangez !"
          },
          {
            "name": "قانون سقوط -ER فعل 'Tu' -S",
            "meaning": "با احترام ➔ با احترام! · Tu vas ➔ Va!",
            "example": "پارل! (نه Parles!) · Écoute! (نه Écoutes!)"
          },
          {
            "name": "فرمول افعال معین",
            "meaning": "مدال ها مزدوج می شوند، عمل ثانویه در مصدر می ماند",
            "example": "Je peux venir · Il doit partir · Nous voulons manger"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "توانایی یا اجازه مودبانه را بیان می کند ('can/ may')"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "بیانگر وظیفه، تعهد یا احتمال (\"باید / باید\")"
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "ابراز تمایل/اراده (\"می خواهم\") ➔ از \"voudrais\" برای ادب استفاده کنید"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "تعهد غیر شخصی (\"باید / لازم است\")"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "بعد از فعل خط فاصله بگذارید: Mange-le ! دونز-موی!"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "به طور معمول قبل از فعل: Ne le mange pas ! نه من دونه پس !"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "Vas-y! Manges-en ! (-ها را فقط برای جلوگیری از برخورد مصوت ها بازیابی می کند)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: آدرس گیرنده را انتخاب کنید",
            "question": "آیا به یک دوست (tu)، یک گروه/مودب (vous)، یا شامل خود (nous) فرمان می دهید؟",
            "action": "tu، nous یا vous را انتخاب کنید"
          },
          {
            "step": "مرحله 2: ضمیر موضوع را رها کنید",
            "question": "حذف tu / nous / vous",
            "action": "فقط ریشه فعل را حفظ کنید"
          },
          {
            "step": "مرحله 3: فرم \"tu\" -ER را بررسی کنید",
            "question": "آیا این یک فعل -ER به شکل 'tu' است؟",
            "action": "حرف آخر را رها کنید (Parle! Regarde!)"
          },
          {
            "step": "مرحله 4: مثبت در مقابل منفی را بررسی کنید",
            "question": "آیا این دستور «آن را انجام بده» یا «آن را انجام نده» است؟",
            "action": "تأییدی: فعل-ضمیر (Aide-moi !) · نفی: نه ضمیر فعل پس (Ne m'aide pas !)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est vs Il est Decision Formula",
            "meaning": "استفاده از c'est با اسامی تغییر یافته. از il est مستقیماً با صفت های خالی استفاده کنید",
            "example": "C'est un bon médecin (اسم اصلاح شده) در مقابل Il est intelligent (صفت خالی)"
          },
          {
            "name": "فرمول وجود و گذشته",
            "meaning": "معنای دوگانه: حالت حضور یا سپری شدن زمان قبل",
            "example": "Il y a deux stylos sur la table · Je suis arrivé il y a dix minutes"
          },
          {
            "name": "فرمول های Avoir Besion / Envie",
            "meaning": "نیاز/خواستن در زبان فرانسوی بیانگر داشتن فیزیکی نیاز/میل است",
            "example": "J'ai besoin d'eau · J'ai envie de voyager"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "به دنبال آن مقاله + اسم، نام، یا کل عبارات (C'est génial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "به دنبال حرفه های بدون مقاله یا صفت خالی (Il est avocat, Elle est gentille)"
          },
          {
            "word": "Il y a",
            "rule": "تغییر ناپذیر: il y a می ماند، چه اسم مفرد یا جمع به دنبال آن باشد"
          },
          {
            "word": "Avoir l'air",
            "rule": "به معنای \"نگاه کردن / به نظر رسیدن\" به دنبال صفت: Tu as l'air fatigué"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ Il est un médecin ➔ ✓ C'est un medecin یا Il est Médecin (حرفه برهنه)"
          },
          {
            "pattern": "Negation of il y a",
            "note": "Il n'y a pas DE + اسم (جزئی به de: Il n'y a pas de problème)"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "J'ai besoin d'argent, j'ai envie d'apprendre"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: بررسی کنید که چه چیزی پس از فعل است",
            "question": "آیا تعیین کننده/مقاله (un، une، le، mon) وجود دارد؟",
            "action": "اگر بله ➔ از C'EST (C'est un prof) استفاده کنید"
          },
          {
            "step": "مرحله 2: آیا این یک صفت لخت است یا یک حرفه عریان؟",
            "question": "مقاله قبل از کلمه وجود ندارد؟",
            "action": "اگر بله ➔ از IL EST / ELLE EST (Il est prof, Elle est calme) استفاده کنید"
          },
          {
            "step": "مرحله 3: نشان دادن وجود؟",
            "question": "آیا می خواهید بگویید \"وجود دارد / وجود دارد\"؟",
            "action": "از IL Y A استفاده کنید (هرگز برای جمع تغییر نمی کند)"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "فرمول واژگانی فرکانس بالا کبک",
            "meaning": "اصطلاحات استاندارد کبک در زندگی روزمره مونترال و QC شنیده می شود",
            "example": "پتی دژونر ➜ دژونر · دژونر ➜ دینر · دینر ➜ سوپ"
          },
          {
            "name": "قانون آفریکاسیون کبک",
            "meaning": "قبل از حروف صدادار جلوی بالا، /t/ و /d/ به طور طبیعی صدای خش خش مخفی ایجاد می کنند",
            "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "ذره پرسشی کبک -tu",
            "meaning": "نشانگر پرسش مکالمه به زبان فرانسوی گفتاری کبک",
            "example": "Tu viens-tu ? (آیا می آیی؟) · C'est-tu bon ? (خوبه؟)"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "کبک برای 'faire du shopping' (برای خرید)"
          },
          {
            "word": "Fin de semaine",
            "rule": "کبک برای «آخر هفته»"
          },
          {
            "word": "Char",
            "rule": "غیررسمی کبک برای \"voiture\" (ماشین)"
          },
          {
            "word": "Chum / Blonde",
            "rule": "کبک برای دوست پسر / دوست دختر"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "اصطلاح کبک به معنای \"همه چیز خوب / عالی است!\""
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "صبح: déjeuner، ظهر: diner، عصر: سوپ"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "fête نزدیکتر به /faɛ̯t/، père به /paɛ̯ʁ/ به نظر می رسد."
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "لغو کننده (حذف کننده)، چک کننده (تأیید کننده)، پارکر (گارر)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: تنظیمات مکالمه کبک را شناسایی کنید",
            "question": "آیا با یک محلی در مونترال/کبک چت می کنید؟",
            "action": "از اصطلاحات محلی استفاده کنید: fin de semaine، char، magasiner، souper"
          },
          {
            "step": "مرحله 2: به Affrication گوش دهید",
            "question": "آیا کلمه تی، تو، دی، دو دارد؟",
            "action": "صدای بومی 'ts' و 'dz' را بشنوید: /tsy/ برای 'tu'"
          },
          {
            "step": "مرحله 3: ذره سوال '-tu'",
            "question": "آیا گوینده \"-tu\" را بعد از فعل اضافه کرده است؟",
            "action": "آن را به عنوان یک نشانگر سوال غیررسمی تشخیص دهید: On y va-tu ?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "قانون تشابه شنیداری",
            "meaning": "هر سه انتهای 100٪ با گوش یکسان صدا می کنند (/e/)",
            "example": "parler، parlé، parlez همگی دقیقاً یکسان هستند: /paʁle/"
          },
          {
            "name": "آزمون کسر «Vendre».",
            "meaning": "تعیین کنید که -er (مصدر) یا -é (مصرف ماضی) بنویسید.",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
          },
          {
            "name": "آزمون کسر مشارکت",
            "meaning": "اگر «vendu» منطقی است، بنویسید -é",
            "example": "J'ai mang... ➔ J'ai VENDU ➔ J'ai MANGÉ"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "کلمه تست جایگزین مصدر (صدای متمایز /ʁ/ را بشنوید)"
          },
          {
            "word": "Vendu / Fait",
            "rule": "کلمه تست جایگزینی فعل ماضی (شنیدن صدای متمایز /y/ یا /t/)"
          },
          {
            "word": "-ons",
            "rule": "بدون ابهام نوشتاری و گفتاری /ɔ̃/ پایانی برای nous"
          },
          {
            "word": "-ent",
            "rule": "نشانگر بدون ابهام نوشتاری بی‌صدا برای ils/elles جمع 3 شخص"
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
            "note": "J'ai regardé، elle est party"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: صدای /e/ را بشنوید",
            "question": "آیا کلمه در پایان مانند /e/ به نظر می رسد؟",
            "action": "گزینه‌ها: -er (Inf)، -é (Particle)، یا -ez (vous)"
          },
          {
            "step": "مرحله 2: آزمون \"Vendre\" را اعمال کنید",
            "question": "آیا می توانید کلمه \"VENDRE\" را جایگزین جمله کنید؟",
            "action": "اگر بله ➔ بنویسید -ER (مصدر: Je dois parler)"
          },
          {
            "step": "مرحله 3: آیا می توانید \"VENDU\" را جایگزین کنید؟",
            "question": "آیا «VENDU» به طور طبیعی بعد از avoir/être می‌آید؟",
            "action": "اگر بله ➔ بنویسید -É (عضو: J'ai parlé)"
          },
          {
            "step": "مرحله 4: آیا موضوع \"Vous\" است؟",
            "question": "آیا موضوع فوری واس است؟",
            "action": "اگر بله ➔ بنویسید -EZ (vous parlez)"
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "فرمول صرف حال انعکاسی",
            "meaning": "ضمیر بازتابی با موضوعی که عمل را با خود انجام می دهد مطابقت دارد",
            "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
          },
          {
            "name": "فرمول ضمیمه Passé Composé",
            "meaning": "100% افعال ضمیری به ÊTRE در ترکیب پاسه نیاز دارند",
            "example": "Elle s'est réveillée · Nous nous sommes couchés"
          },
          {
            "name": "قانون توافق بازتابی",
            "meaning": "وقتی عمل مستقیماً به خود ضربه می زند موافقت می کند. اگر قسمتی از بدن دنبال شود توافقی وجود ندارد",
            "example": "Elle s'est lavée (موافق) در مقابل Elle s'est lavé les mains (بدون توافق: 'les mains' شی مستقیم است!)"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "افعال ضمیری روزمره"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "افعال حافظه ای که به ساختارهای بازتابی نیاز دارند"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "فعل متقابل به معنی \"خوب بودن با\""
          },
          {
            "word": "S'en aller",
            "rule": "فعل ضمیر اصطلاحی به معنای \"ترک کردن / بیرون رفتن\""
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "Je NE me réveille PAS (ضمیر hugs فعل داخل ne... pas)"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "Je vais ME lever (ضمیر بازتابی برای موضوع تغییر می کند اما قبل از مصدر می نشیند)"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "Lève-toi! Réveillez-vous! (از -toi در دستورات مثبت استفاده می کند)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: آیا عمل برای خود انجام می شود یا متقابل؟",
            "question": "آیا کسی با خودش کاری انجام می دهد (برس زدن موها، بیدار شدن از خواب)؟",
            "action": "از شکل ضمیر استفاده کنید: SE + فعل"
          },
          {
            "step": "مرحله 2: ضمیر بازتابی را مطابقت دهید",
            "question": "سوژه کیست؟",
            "action": "je ➔ me, tu ➔ te, il ➔ se, nous ➔ nous, vous ➔ vous, ils ➔ se"
          },
          {
            "step": "مرحله 3: بررسی زمان گذشته",
            "question": "آیا این Passé Composé است؟",
            "action": "همیشه از ÊTRE به عنوان کمکی استفاده کنید"
          },
          {
            "step": "مرحله 4: فیلتر توافقنامه",
            "question": "آیا یک مفعول مستقیم بلافاصله بعد از فعل مشخص می شود؟",
            "action": "اگر بله (les mains, les dents) ➔ NO توافق! اگر خیر ➔ موافق موضوع"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "فرمول شناسایی مستقیم شیء (COD).",
            "meaning": "هیچ حرف اضافه ای فعل را از اسم مستقیم جدا نمی کند",
            "example": "J'invite mes amis ➔ Je LES دعوت"
          },
          {
            "name": "فرمول شناسایی شی غیر مستقیم (COI).",
            "meaning": "با حرف اضافه «à» که به یک شخص اشاره می کند جدا می شود",
            "example": "Je parle à mon patron ➔ Je LUI parle"
          },
          {
            "name": "فرمول سلسله مراتبی ترتیب ضمیر دوگانه",
            "meaning": "هنگام استفاده از دو ضمیر، قبل از فعل، ترتیب دقیق چپ به راست را انجام دهید",
            "example": "Il me le donne · Je le lui envoie"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "COI مفرد (به او / برای او) - جنسیت کور"
          },
          {
            "word": "Leur",
            "rule": "COI جمع (به آنها) - جنسیت کور، هرگز -s را نمی گیرد"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "افعالی که باید COI را به دلیل حرف اضافه ثابت «à» بگیرند"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "افعال مستقیم در فرانسوی (COD را بگیرید، برخلاف انگلیسی هیچ حرف اضافه ای ندارید!)"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "Attendre qqn (منتظر کسی بودن)، chercher qch (به دنبال چیزی گشتن) COD را به زبان فرانسوی بگیرید!"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "Il ME LE prête (نفر 1/2 قبل از مستقیم سوم)"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "Je LE LUI dis (سومین مستقیم قبل از سوم غیر مستقیم)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: انتقال فعل را بررسی کنید",
            "question": "آیا فعل فرانسوی \"à\" را با شخص می گیرد؟",
            "action": "اگر بله ➔ COI (lui / leur). اگر NO ➔ COD (le / la / les)"
          },
          {
            "step": "مرحله 2: اولین شی را جایگزین کنید",
            "question": "چه ضمیری آن را نشان می دهد؟",
            "action": "به عنوان COD یا COI برچسب بزنید"
          },
          {
            "step": "مرحله 3: ضمایر دوگانه را مرتب کنید",
            "question": "آیا دو ضمیر وجود دارد؟",
            "action": "سلسله مراتب را دنبال کنید: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ فعل"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "فرمول مثبت Futur Proche",
            "meaning": "مورد استفاده برای برنامه های فوری، مقاصد و رویدادهای آینده قطعی (رفتن به...)",
            "example": "Je vais manger · Nous allons voyager · Ils vont partir"
          },
          {
            "name": "فرمول منفی Futur Proche",
            "meaning": "نفی دور فعل مزدوج «aller» می پیچد و مصدر را بیرون می گذارد",
            "example": "Je ne vais pas travailler demin (نه Je ne travailler pas)"
          },
          {
            "name": "فرمول ضمیری Futur Proche",
            "meaning": "ضمیر بازتابی باید با فاعل موافق باشد و درست در مقابل مصدر بنشیند",
            "example": "Je vais ME coucher · Vous allez VOUS amuser"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "محرک های زمان آینده نزدیک"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "محرک های آینده قریب الوقوع"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "صرف آلر کمکی در زمان حال"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "Je ne vais pas dormir · Elle ne va pas venir"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je vais LE voir · Il va ME téléphoner (ضمیر متعلق به فعل مصدر است)"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "M'as manger (غیر رسمی برای Je vais manger صحبت می شود)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: Intent یا Near Future را بررسی کنید",
            "question": "آیا این یک برنامه یا رویداد مورد نظر است که به زودی اتفاق می افتد؟",
            "action": "استفاده از Futur Proche (Aller + Inf)"
          },
          {
            "step": "مرحله 2: ALLER را مزدوج کنید",
            "question": "سوژه کیست؟",
            "action": "je vais, tu vas, il va, nous allons, vous allez, ils vont"
          },
          {
            "step": "مرحله 3: اکشن اصلی را ضمیمه کنید",
            "question": "فعل عمل چیست؟",
            "action": "نگه داشتن در INFINITIVE (-er، -ir، -re)"
          },
          {
            "step": "مرحله 4: ضمایر یا نفی را بررسی کنید",
            "question": "آیا منفی است یا ضمیر مفعولی دارد؟",
            "action": "Ne + Aller + Pas + [ضمیر] + مصدر"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "فرمول استاد ساده آینده",
            "meaning": "توجه کنید که پایان ها به معنای واقعی کلمه زمان حال AVOIR هستند (ai, as, a, ons, ez, ont)!",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "قاعده بنیاد آینده افعال RE",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "prendre ➔ je prendrai · presentre ➔ j'attendrai"
          },
          {
            "name": "ساقه های آینده نامنظم هسته",
            "meaning": "ساقه ها همیشه به \"r\" ختم می شوند، سپس انتهای استاندارد می گیرند",
            "example": "je serai، j'aurai، j'irai، je ferai، je pourrai، je voudrai"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "نشانگرهای زمان آینده دور"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "حروف ربط زمانی که آینده را ساده می کند در فرانسوی"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "اولین قانون شرطی (Si j'ai le temps، je viendrai)"
          }
        ],
        "patterns": [
          {
            "pattern": "Future stems ALWAYS end in 'R'",
            "note": "parler-، finir-، vendr-، ser-، aur-، ir-، fer-"
          },
          {
            "pattern": "Do not confuse -ons with nous imparfait",
            "note": "nous parlerons (Futur /ɔ̃/) در مقابل nous parlions (Imparfait /jɔ̃/)"
          },
          {
            "pattern": "3rd person plural is -ont (not -ent!)",
            "note": "ils parleront (به نظر می رسد /ɔ̃/، قافیه با ons!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: ساقه آینده را تعیین کنید",
            "question": "آیا فعل منظم (-er, -ir, -re) است؟",
            "action": "مصدر را نگه دارید (\"e\" را از -re رها کنید). اگر نامنظم است، از ریشه «R» استفاده کنید (ser-، aur-، ir-، fer-)"
          },
          {
            "step": "مرحله 2: پایان های AVOIR را ضمیمه کنید",
            "question": "موضوع چیست؟",
            "action": "je ➔ -ai, tu ➔ -as, il ➔ -a, nous ➔ -ons, vous ➔ -ez, ils ➔ -ont"
          },
          {
            "step": "مرحله 3: پسوند نهایی را تلفظ کنید",
            "question": "به حروف صدادار توجه کنید",
            "action": "je parlerai (/e/)، tu parleras (/a/)، ils parleront (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "فرمول استخراج ساقه Imparfait",
            "meaning": "برای 99.9٪ از تمام افعال در زبان فرانسه کار می کند!",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "فرمول پایان بندی جهانی Imparfait",
            "meaning": "توجه کنید -ais، -ais، -ait، -aient همه یکسان تلفظ می شوند: /ɛ/",
            "example": "je parlais، tu parlais، il parlait، ils parlaient همه صدا /paʁlɛ/"
          },
          {
            "name": "تنها ساقه نامنظم در فرانسه",
            "meaning": "هر فعل دیگر ریشه خود را از nous در حال استخراج می کند!",
            "example": "j'étais، nous étions، vous étiez"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "محرک عادت مکرر ➔ همیشه Imparfait"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "ماشه کنش پس زمینه پیوسته ➔ Imparfait"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "دوران جاری / وضعیت زندگی گذشته"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "مناظر گذشته، آب و هوا، زمان، وضعیت عاطفی"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "همه تلفظ می شوند /ɛ/ (باز کردن e). ضمیر فاعل به شما می گوید که چه کسی این کار را انجام داده است!"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "nous parlions (/paʁljɔ̃/)، vous parliez (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "je mangeais (حفظ 'e')، je commençais (افزودن cedilla 'ç')"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: Nous را در زمان حال بگیرید",
            "question": "زمان حال برای \"nous\" چیست؟",
            "action": "Nous parlons، nous faisons، nous buvon"
          },
          {
            "step": "مرحله 2: حذف -ONS",
            "question": "3 حرف -ons را حذف کنید",
            "action": "parl-, fais-, buv- (این ساقه شماست)"
          },
          {
            "step": "مرحله 3: آیا فعل ÊTRE است؟",
            "question": "آیا این استثنای واحد است؟",
            "action": "از ساقه et- استفاده کنید"
          },
          {
            "step": "مرحله 4: انتهای Imparfait را وصل کنید",
            "question": "موضوع را مطابقت دهید",
            "action": "-ais، -ais، -ait، -ions، -iez، -aient"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "فرمول جایگزینی مکان ضمیر Y",
            "meaning": "جایگزین هر مکان یا مکان جغرافیایی (به انگلیسی: THERE)",
            "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "ضمیر Y فرمول شی بی جان",
            "meaning": "جایگزین «à + چیز/مفهوم» (فکر کردن، مشارکت در)",
            "example": "Je pense à mon avenir ➔ J'Y pense (نه Je pense à lui: مردم ضمایر استرس می گیرند!)"
          },
          {
            "name": "فرمول قرار دادن ضمیر Y",
            "meaning": "بلافاصله قبل از فعل می نشیند",
            "example": "تو ی واس · روی نی و پس · واس ی ! (الزامی)"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "Penser à un examen ➔ y penser"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "افعالی که \"à\" + ایده های بی جان را می گیرند ➔ با Y جایگزین می شوند"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "محرک های مکان ➔ با Y جایگزین شده است"
          },
          {
            "word": "Il y a",
            "rule": "حاوی ضمیر Y است: به معنای واقعی کلمه \"آن وجود دارد\""
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle (از ضمیر استرس برای افراد استفاده کنید!)"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "Va + y ➔ Vas-y ! (برای جلوگیری از برخورد حروف صدادار زشت /a-i/ 's' را اضافه می کند)"
          },
          {
            "pattern": "Near future placement",
            "note": "Je vais Y aller (درست مقابل مصدر می نشیند)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: حرف اضافه را بررسی کنید",
            "question": "آیا این عبارت توسط à، en، dans، sur، sous یا chez معرفی شده است؟",
            "action": "اگر بله ➔ کاندیدای Y"
          },
          {
            "step": "مرحله 2: آیا این یک شخص است؟",
            "question": "آیا این عبارت به انسان اشاره دارد؟",
            "action": "اگر بله ➔ از Y استفاده نکنید! از à lui / à elle استفاده کنید. اگر خیر ➔ به مرحله 3 بروید"
          },
          {
            "step": "مرحله 3: آیا این یک مکان است یا یک چیز؟",
            "question": "آیا این یک مکان است یا یک مفهوم انتزاعی (à mon travail، à mon avenir)؟",
            "action": "کل عبارت را با Y جایگزین کنید"
          },
          {
            "step": "مرحله 4: قبل از فعل قرار دهید",
            "question": "کجا می نشیند؟",
            "action": "درست قبل از فعل مزدوج (یا قبل از مصدر)"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "فرمول مونتاژ شرطی",
            "meaning": "زمان ترکیبی: از بدن آینده با صدای Imparfait استفاده می کند!",
            "example": "aimer ➔ ساقه aimer- + -ais ➔ J'aimerais · être ➔ stem ser- + -ait ➔ Il serait"
          },
          {
            "name": "فرمول ادب جهانی",
            "meaning": "تقاضاها را در مغازه ها، رستوران ها و محیط های حرفه ای کاهش می دهد",
            "example": "Je veux un café (بی ادب) ➔ Je VOUDRAIS un café (مودب)"
          },
          {
            "name": "فرمول شرطی دوم \"Si\".",
            "meaning": "شرایط غیر واقعی فرضی (\"اگر داشتم... می کردم...\")",
            "example": "Si j'avais de l'argent، j'achèterais une Maison"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "فرمول ضروری ادب در کافه ها، نانوایی ها، خدمات مشتری"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "درخواست های مودبانه: آیا می توانید / آیا می خواهید؟"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "نصیحت کردن: اگر من جای شما بودم..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "به جای تو، من انجام می دهم ..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su (Les 'si' n'aiment pas les 'rais'!)"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "Futur: je parlerai (/e/ بسته) در مقابل Conditionnel: je parlerais (/ɛ/ باز)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "aur- (avoir)، ser- (être)، ir- (aller)، fer- (faire)، pourr- (pouvoir)، devr- (devoir)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: بررسی قصد (مودبانه یا فرضی)",
            "question": "آیا شما سفارش غذا می دهید، درخواستی می کنید، یا تصور می کنید \"چه می شود اگر\"؟",
            "action": "از Conditionnel Présent استفاده کنید"
          },
          {
            "step": "مرحله 2: ساقه آینده را دریافت کنید",
            "question": "مصدر (یا ساقه -R نامنظم) را بگیرید",
            "action": "voudr-, aimer-, pourr-, ser-"
          },
          {
            "step": "مرحله 3: انتهای Imparfait را وصل کنید",
            "question": "موضوع را مطابقت دهید",
            "action": "-ais، -ais، -ait، -ions، -iez، -aient"
          },
          {
            "step": "مرحله 4: بند \"Si\" را بررسی کنید",
            "question": "آیا جمله با \"سی\" شروع می شود؟",
            "action": "مطمئن شوید که فعل درست بعد از \"si\" در IMPARFAIT باشد!"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "فرمول تشکیل ژروندیف",
            "meaning": "ساقه فعلی \"nous\" را استخراج کنید، حرف اضافه \"en\" و پسوند \"-ant\" را اضافه کنید",
            "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
          },
          {
            "name": "فرمول اقدامات همزمان",
            "meaning": "هر دو عمل باید دقیقاً توسط یک موضوع به طور همزمان انجام شوند",
            "example": "Il écoute de la musique en étudiant (او در حین مطالعه به موسیقی گوش می دهد)"
          },
          {
            "name": "فرمول روش و ابزار",
            "meaning": "توضیح می دهد که چگونه یک نتیجه به دست آمد",
            "example": "C'est en forgeant qu'on deient forgeron · On apprend en faisant des erreurs"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "نشانگر امضای ژروندیف فرانسوی"
          },
          {
            "word": "Tout en + -ant",
            "rule": "بر کنتراست یا همزمانی شدید تأکید می کند (در حالی که گریه می کرد لبخند می زد)"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "عبارات متداول gérondif در زندگی روزمره"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "شخصی که فعل اصلی را انجام می دهد باید همان کاری باشد که عمل gérondif را انجام می دهد!"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en ayant | savoir ➔ en sachant"
          },
          {
            "pattern": "Invariable",
            "note": "gérondif هرگز -e یا -s را نمی گیرد (همیشه به -ant ختم می شود)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: Simultaneity یا Manner را بررسی کنید",
            "question": "آیا دو عمل در یک زمان اتفاق می‌افتند یا شما به «چگونه» پاسخ می‌دهید؟",
            "action": "از Le Gérondif استفاده کنید"
          },
          {
            "step": "مرحله 2: Conjugate Nous در حال",
            "question": "شکل فعلی \"nous\" فعل چیست؟",
            "action": "nous prenons، nous marchons، nous finissons"
          },
          {
            "step": "مرحله 3: -ONS را بردارید و -ANT را اضافه کنید",
            "question": "-ons را با -ant جایگزین کنید",
            "action": "پرنانت، راهپیمایی، فاینسانت"
          },
          {
            "step": "مرحله 4: پیش‌فرض «EN»",
            "question": "اضافه کردن حرف اضافه \"en\"",
            "action": "en prenant، en marchant، en finissant"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "فرمول تاییدی اخیر پاس",
            "meaning": "برای اقدامات انجام شده چند لحظه پیش استفاده می شود (انگلیسی: فقط چیزی انجام داد)",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "قانون De Elision",
            "meaning": "انقباض اجباری قبل از افعال شروع کننده مصوت",
            "example": "Il vient D’arriver · Elle vient D’entendre"
          },
          {
            "name": "فرمول ضمیمه پاس اخیر",
            "meaning": "ضمیر با موضوع مطابقت دارد اما مصدر را در آغوش می گیرد",
            "example": "Je viens de ME réveiller · Ils viennent de SE marier"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "ماشه: فقط همین ثانیه"
          },
          {
            "word": "Tout juste",
            "rule": "ماشه: به سختی / به تازگی تکمیل شده است"
          },
          {
            "word": "Il y a une minute",
            "rule": "ماشه: یک دقیقه پیش"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "صرف فعلی ونیر"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ Je viens manger (یعنی برای خوردن آمده ام) ➔ ✓ Je viens DE manger (من تازه خوردم)"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je viens de LE voir (ضمیر درست قبل از فعل مصدر قرار می گیرد)"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "Je venais de partir quand il a sonné (تازه رفته بودم که زنگ زد)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: زمان بندی را بررسی کنید",
            "question": "آیا این اقدام چند ثانیه یا چند دقیقه پیش (\"فقط انجام داد\") رخ داده است؟",
            "action": "از Passé Recent استفاده کنید"
          },
          {
            "step": "مرحله 2: ونیر مزدوج",
            "question": "سوژه کیست؟",
            "action": "viens, viens, vient, venons, venez, viennent"
          },
          {
            "step": "مرحله 3: اضافه کردن DE یا D'",
            "question": "آیا فعل بعدی با مصوت شروع می شود؟",
            "action": "از D’ قبل از حروف صدادار/h استفاده کنید. DE قبل از صامت ها"
          },
          {
            "step": "مرحله 4: Action Infinitive را پیوست کنید",
            "question": "فعل اصلی را در مصدر نگه دارید",
            "action": "کافه Je viens de finir mon"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "فرمول جدول زمانی کامل",
            "meaning": "5 زمان عملیاتی اولیه در امتداد جدول زمانی زمانی واقعیت ترسیم شدند",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "صرف گفتاری فرانسوی Triumvirate",
            "meaning": "ابتدا به این سه زمان مسلط شوید تا 95 درصد از مکالمه روزمره فرانسوی را صحبت کنید",
            "example": "J'ai parlé ➔ Je parle ➔ Je vais parler"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "Passé Composé (نقطه در زمان) یا Imparfait (پس زمینه در حال انجام)"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "نشان دهنده"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "Futur Proche (مکالمه) یا Futur Simple (رسمی / نوشتاری)"
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
            "note": "Présent = پایه + پایان · Imparfait = Nous-stem + پایان · Futur Simple = inf + پایان"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: مکان لنگر زمان را پیدا کنید",
            "question": "آیا عمل گذشته، حال یا آینده است؟",
            "action": "بر روی محور زمانی مشخص کنید"
          },
          {
            "step": "مرحله 2: ثبت نام را انتخاب کنید (گفتاری در مقابل رسمی)",
            "question": "مکالمه معمولی است یا نوشتن رسمی؟",
            "action": "گفتاری ➔ Futur Proche (vais faire) · رسمی ➔ Futur Simple (ferai)"
          },
          {
            "step": "مرحله 3: فیلتر اقدام گذشته",
            "question": "آیا این یک اتفاق ناگهانی است یا یک صحنه/عادت؟",
            "action": "رویداد ➔ Passé Composé · Habit/Setting ➔ Imparfait"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "فرمول DEPUIS (از گذشته تا حال جاری)",
            "meaning": "در گذشته شروع شده و در حال حاضر همچنان ادامه دارد (فرانسوی از زمان حال استفاده می کند!)",
            "example": "J'habite à Montréal DEPUIS deux ans (من 2 سال است که اینجا زندگی می کنم و هنوز هم زندگی می کنم!)"
          },
          {
            "name": "فرمول IL Y A (نقطه تکمیل شده در گذشته)",
            "meaning": "به یک لحظه تکمیل شده در گذشته اشاره می کند (انگلیسی: AGO)",
            "example": "Le train est parti IL Y A dix minutes (قطار 10 دقیقه پیش حرکت کرد)"
          },
          {
            "name": "فرمول DANS (شمارش معکوس برای آینده)",
            "meaning": "شمارش معکوس برای شروع یک اقدام آینده (به انگلیسی: IN)",
            "example": "شروع دوره های آموزشی DANS cinq دقیقه (کلاس 5 دقیقه دیگر شروع می شود)"
          },
          {
            "name": "فرمول آویز (مدت زمان کامل بسته)",
            "meaning": "شروع و پایان واضحی دارد. عمل کاملاً تمام شده است (انگلیسی: FOR / DURING)",
            "example": "J'ai dormi PENDANT huit heures (8 ساعت خوابیدم - الان بیدارم)"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "هنوز در حال وقوع است ➔ MUST زمان حال باشد"
          },
          {
            "word": "Il y a",
            "rule": "زمان پیش ➔ باید زمان گذشته را بگیرد"
          },
          {
            "word": "Dans",
            "rule": "شمارش معکوس آینده ➔ باید زمان آینده داشته باشد"
          },
          {
            "word": "Pendant",
            "rule": "بلوک بسته از زمان تکمیل شده ➔ معمولا Passé Composé"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ J'ai habité ici depuis 1 an ➔ ✓ J'habite ici depuis 1 an"
          },
          {
            "pattern": "Dans vs En",
            "note": "Dans 1h = 1 ساعت از هم اکنون شروع می شود (شمارش معکوس) · En 1h = 1 ساعت طول می کشد تا کامل شود (سرعت)"
          },
          {
            "pattern": "Pour with time",
            "note": "دقیقاً برای مدت زمان برنامه ریزی شده آینده: Je pars pour deux semaines"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: آیا این عمل هنوز در حال انجام است؟",
            "question": "آیا از گذشته شروع شده و تا کنون ادامه دارد؟",
            "action": "اگر بله ➔ DEPUIS (+ زمان حال)"
          },
          {
            "step": "مرحله 2: آیا این یک اقدام در آینده است؟",
            "question": "آیا برای شروع آن شمارش معکوس می کنید؟",
            "action": "اگر بله ➔ DANS (+ زمان آینده)"
          },
          {
            "step": "مرحله 3: آیا این یک عمل کاملاً در گذشته تمام شده است؟",
            "question": "آیا \"X بار پیش\" اتفاق افتاده است؟",
            "action": "اگر بله ➔ IL Y A (+ Passé Composé)"
          },
          {
            "step": "مرحله 4: آیا مدت زمان بسته و اندازه گیری شده است؟",
            "question": "آیا یک بلوک زمانی کامل را با شروع و پایان توصیف می کند؟",
            "action": "اگر بله ➔ آویز"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "تنظیمات تاریخی در مقابل فرمول عمل",
            "meaning": "روایت‌های تاریخی با Imparfait صحنه را تنظیم می‌کنند، سپس با Passé Composé زمان‌بندی را پیش می‌برند.",
            "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey a fondé Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "فرمول حرف اضافه تاریخ تاریخی",
            "meaning": "حروف اضافه برای زمان سنجی تاریخی",
            "example": "En 1642 · Au XVIIe siècle · Le 17 Mai 1642"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "ماشه سال تقویمی خاص ➔ Passé Composé برای رویدادهای بنیاد"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "ماشه پیشینه تاریخی ➔ Imparfait"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "معاهده صلح اصلی در سال 1701 توسط کالییر امضا شد"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "از اعداد رومی با \"siècle\" استفاده کنید: au XXIe siècle (قرن 21)"
          },
          {
            "pattern": "Historical Present",
            "note": "تاریخ اغلب از زمان حال برای داستان سرایی زنده استفاده می کند (En 1642, il fonde...)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: آیا شرایط زندگی در آن دوران را توصیف می کند؟",
            "question": "شرایط زندگی، مناظر، سنت ها؟",
            "action": "از IMPARFAIT (Ils chassaient، vivaient) استفاده کنید"
          },
          {
            "step": "مرحله 2: آیا این یک نقطه عطف، نبرد یا معاهده خاصی است؟",
            "question": "آیا در تاریخ مشخصی با شروع و پایان اتفاق افتاده است؟",
            "action": "از PASSÉ COMPOSÉ (Il a fondé، ils ont signé) استفاده کنید"
          },
          {
            "step": "مرحله 3: فرمت تاریخ را بررسی کنید",
            "question": "آیا فقط یک سال، قرن یا یک روز است؟",
            "action": "En [سال]، او [قرن]، ل [روز ماه سال]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "فرمول دوربین فیلم در مقابل فلش اسنپ شات",
            "meaning": "Imparfait صحنه را تنظیم می کند (آب و هوا، احساسات، «در حال انجام»). Passé Composé باعث ایجاد وقفه یا نقطه عطف می شود",
            "example": "Il pleuvait (Imparfait: صحنه) quand soudain la foudre a frappé (Passé Composé: عکس فوری)"
          },
          {
            "name": "فرمول اقدام قطع شده",
            "meaning": "اقدام مستمری که در حال انجام بود با یک رویداد وقت شناسی قطع می شود",
            "example": "Je dormais (خوابیده بود) quand le réveil A SONNÉ (زنگ)"
          },
          {
            "name": "فرمول افعال آفتاب پرست",
            "meaning": "برخی از افعال معنا را بین حالت ذهنی و درک ناگهانی تغییر می دهند",
            "example": "Je savais nager (توانایی) vs J'ai su la nouvelle (رویداد)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "Always Imparfait: زمانی که چیزی در جریان بود"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "Always Passé Composé: ناگهان یک رویداد رخ داد"
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "Always Imparfait: روال های معمولی مکرر"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "Passé Composé: مناسبت کامل جدا شده"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "انجام می داد = Imparfait · Did = Passé Composé"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "J'avais peur، il faisait froid، elle était triste ➔ همیشه ایمپارفیت"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "Je me suis levé، j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: بپرسید \"صحنه چه بود؟\"",
            "question": "آیا آب و هوا، جو، احساسات یا عادات مداوم را توصیف می کند؟",
            "action": "اگر بله ➔ IMPARFAIT (در حال چرخش دوربین فیلم)"
          },
          {
            "step": "مرحله 2: بپرسید \"بعد چه شد؟\"",
            "question": "آیا این یک اقدام خاص و کامل شده است که داستان را به جلو می برد؟",
            "action": "اگر بله ➔ PASSÉ COMPOSÉ (عکس فوری BAM!)"
          },
          {
            "step": "مرحله 3: وقفه را بررسی کنید",
            "question": "آیا یک اقدام دیگر در حال انجام را قطع کرد؟",
            "action": "پس زمینه = Imparfait · وقفه = Passé Composé"
          },
          {
            "step": "مرحله 4: کلمات Trigger را بررسی کنید",
            "question": "به دنبال «آویز que» (Imparfait) یا «soudain» (Passé Composé) باشید.",
            "action": "انتخاب تنش خود را قفل کنید"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE فرمول پسوند زنانه",
            "meaning": "تقریباً تمام صفت‌های کاراکتری که به -eux ختم می‌شوند در مونث به -euse تغییر می‌کنند",
            "example": "ژانرو ➔ ژنرئوس · شجاع ➔ شجاعت"
          },
          {
            "name": "-IF ➔ -IVE فرمول پسوند زنانه",
            "meaning": "تغییر صدا از /f/ بی صدا به /v/ صدادار",
            "example": "خلاق ➔ خلاق · فعال ➔ فعال · توجه ➔ توجه"
          },
          {
            "name": "-EL / -ON فرمول دو همخوان",
            "meaning": "صامت آخر را قبل از افزودن -e دو برابر می کند",
            "example": "طبیعت ➔ طبیعت · بون ➔ بون · میمی ➔ مینیون"
          },
          {
            "name": "پسوند صفت تغییر ناپذیر -E",
            "meaning": "اگر مذکر قبلاً به -e بدون لهجه ختم شود نیازی به تغییر نیست",
            "example": "آرام (M) ➔ آرام (F) · ترسو (M) ➔ ترسو (F) · اجتماعی (M) ➔ اجتماعی (F)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "شخصیت گرم / خوش برخورد (در کبک بسیار رایج است)"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "خصلت سخاوتمندانه"
          },
          {
            "word": "Franc / Franche",
            "rule": "مستقیم، سرراست (زنانه نامنظم -che)"
          },
          {
            "word": "Doux / Douce",
            "rule": "ملایم، شیرین (زنانه نامنظم -ce)"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "bavard (/bavaʁ/) ➔ bavarde (/bavaʁd/): «د» شنیدنی می شود!"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "فریبنده ➔ فریبنده، آفریننده"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "وفادار ➔ loyale (fem)، loyaux (مثلا جمع)"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: پایان مردانه را بررسی کنید",
            "question": "آیا صفت پایه به -e ختم می شود؟",
            "action": "اگر بله ➔ غیر قابل تغییر (آرام، ترسو، همدردی)"
          },
          {
            "step": "مرحله 2: آیا به -eux ختم می شود؟",
            "question": "آیا پسوند مذکر -eux است؟",
            "action": "تبدیل به -euse (généreuse, sérieuse)"
          },
          {
            "step": "مرحله 3: آیا به -if ختم می شود؟",
            "question": "آیا پسوند مذکر -if است؟",
            "action": "تبدیل به -ive (خلاق، توجه)"
          },
          {
            "step": "مرحله 4: پایان همخوان منتظم",
            "question": "آیا به -t، -d یا -s ختم می شود؟",
            "action": "-e را اضافه کنید و صامت نهایی را بیدار کنید (جنتیل ➔ جنتی، هوشمند ➔ هوشمند)"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "معادله حفظ گرامر",
            "meaning": "ستون های آموزشی زیربنای طراحی راهنمای گرامر فرانسوی",
            "example": "فرمول ها (شفافیت منطقی) + نشان های تشخیص (تشخیص الگو) + نمودارهای SVG (مدل های ذهنی)"
          },
          {
            "name": "چرخه یادگیری مستمر",
            "meaning": "خط لوله پیشرفت مستقل از تسلط A1 مبتدی تا سطح متوسط B1 کبک",
            "example": "فواصل تکرار با فاصله، موارد مقرر را در 1، 3 و 7 روز برنامه ریزی می کند"
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "فرمول های گرامر به سبک ریاضی برای هر موضوع"
          },
          {
            "word": "Pattern Recognition",
            "rule": "کلمات محرک و الگوهای پایانی برای تشخیص فوری قوانین"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "مسیرهای منطقی گام به گام که نحوه رسیدن به نتیجه گرامر را توضیح می دهد"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "تصاویر بصری در هر کارت موضوعی تعبیه شده است"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "طرح‌های بصری لمسی تطبیقی برای فوکوس عمیق"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "PWA Service Worker تمام 30 ماژول را برای مطالعه مترو ذخیره می کند"
          },
          {
            "pattern": "Multi-language translations",
            "note": "پشتیبانی جامع از 7 زبان مادری"
          }
        ],
        "decisionSteps": [
          {
            "step": "مرحله 1: یک موضوع گرامر را انتخاب کنید",
            "question": "هر یک از 30 بخش برنامه درسی را انتخاب کنید",
            "action": "فرمول های اصلی و محرک های تشخیص را مرور کنید"
          },
          {
            "step": "مرحله 2: نمودار بصری را بررسی کنید",
            "question": "ردیابی کنید که چگونه تصمیمات از زمینه به نتیجه گیری دستور زبان منشعب می شوند",
            "action": "گره های جریان SVG را دنبال کنید"
          },
          {
            "step": "مرحله 3: بلوک های تعاملی را تمرین کنید",
            "question": "تست دانش با ویجت ها و جداول صرف",
            "action": "بازخورد شنیداری و دیداری فوری"
          },
          {
            "step": "مرحله 4: با SRS نگه دارید",
            "question": "موارد موجود در صف تکرار فاصله را مرور کنید",
            "action": "حافظه را برای یادآوری طولانی مدت تقویت کنید"
          }
        ]
      }
    }
  },
  "gu": {
    "ui": {
      "hub_title": "સૂત્રો, શબ્દ ટ્રિગર્સ અને વિઝ્યુઅલ તર્ક",
      "hub_subtitle": "એક નજરમાં પેટર્ન ઓળખો • વ્યાકરણના તારણો કેવી રીતે પહોંચે છે તે શોધો",
      "hub_sec_formulas": "વ્યાકરણના સૂત્રો",
      "hub_sec_triggers": "શબ્દો અને પેટર્ન દ્વારા કેવી રીતે ઓળખવું",
      "hub_sec_signals": "સંકેત અને ટ્રિગર શબ્દો",
      "hub_sec_patterns": "શબ્દના અંત અને આકારના નિયમો",
      "hub_sec_path": "નિદાન નિર્ણય માર્ગ — નિષ્કર્ષ સુધી કેવી રીતે પહોંચવું",
      "hub_sec_diagram": "વિઝ્યુઅલ તર્ક ડાયાગ્રામ"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "ચોક્કસ લેખ ફોર્મ્યુલા",
            "meaning": "Specific known entity or universal concept (English: THE)",
            "example": "J’aime le café (concept) · Regarde le train (specific)"
          },
          {
            "name": "Indefinite Article Formula",
            "meaning": "ગણતરીપાત્ર, બિન-વિશિષ્ટ વ્યક્તિગત એકમ (અંગ્રેજી: A/AN/SOME)",
            "example": "J’achète un roman · Elle mange une pomme"
          },
          {
            "name": "આંશિક લેખ ફોર્મ્યુલા",
            "meaning": "Uncountable mass, portion of a substance (English: SOME / ANY)",
            "example": "Je bois du café · Nous voulons de la moutarde"
          },
          {
            "name": "સાર્વત્રિક નકારાત્મક કાયદો",
            "meaning": "નકારાત્મકતા તમામ જથ્થાના લેખોને DE/Dમાં સંકુચિત કરે છે (être સિવાય)",
            "example": "J’ai un chien ➔ Je n’ai PAS DE chien (never pas un chien)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "હંમેશા ચોક્કસ લેખોને ટ્રિગર કરે છે (લે, લા, લેસ) — એકંદર પસંદ/નાપસંદ વ્યક્ત કરે છે"
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "અગણિત જથ્થો લેતી વખતે પાર્ટીટીવ લેખો (ડુ, ડે લા, ડેસ) ટ્રિગર કરે છે"
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "શૂન્ય જથ્થાનું ટ્રિગર: લેખોને DE/D'માં પરિવર્તિત કરે છે"
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "જથ્થાના ક્રિયાવિશેષણો હંમેશા લેખ વિના DE/D લે છે (beaucoup de café)"
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90%+ પુરૂષવાચી ➜ le/un/du નો ઉપયોગ કરો"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90%+ સ્ત્રીની ➜ la/une/de la નો ઉપયોગ કરો"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "કરાર: le/la ➔ l’ · du/de la ➔ de l’"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: સંદર્ભ તપાસો",
            "question": "શું આ સામાન્ય પસંદગી છે કે ચોક્કસ જાણીતી વસ્તુ?",
            "action": "જો હા ➔ નિશ્ચિત (le/la/l’/les)"
          },
          {
            "step": "પગલું 2: ગણતરીક્ષમતા તપાસો",
            "question": "શું તમે વ્યક્તિગત સંપૂર્ણ એકમો (1, 2, 3 વસ્તુઓ) ગણી શકો છો?",
            "action": "If YES ➔ Indefinite (un / une / des)"
          },
          {
            "step": "પગલું 3: સામૂહિક પદાર્થ તપાસો",
            "question": "શું તે અગણિત પ્રવાહી, સમૂહ અથવા ખાદ્ય પદાર્થ છે?",
            "action": "જો હા ➔ ભાગાત્મક (du/de la/de l’)"
          },
          {
            "step": "પગલું 4: નકારાત્મક ફિલ્ટર",
            "question": "Is the main verb negated (ne... pas) and NOT the verb être?",
            "action": "જો હા ➔ લેખને તરત જ ઘટાડીને DE/D' કરો"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "સંજ્ઞા બહુવચન સૂત્ર",
            "meaning": "માનક બહુવચન નિયમ (ફ્રેન્ચમાં અંત -s સાયલન્ટ છે)",
            "example": "le livre ➔ les livres · la ટેબલ ➔ લેસ કોષ્ટકો"
          },
          {
            "name": "અનિયમિત બહુવચન -અલ ફોર્મ્યુલા",
            "meaning": "ડ્રોપ -અલ અને એટેચ -ઓક્સ (ઉચ્ચાર /o/)",
            "example": "un journal ➔ des journaux · un animal ➔ des animaux"
          },
          {
            "name": "અનિવાર્ય બહુવચન ફોર્મ્યુલા",
            "meaning": "પહેલાથી જ સિબિલન્ટમાં સમાપ્ત થતી સંજ્ઞાઓ બહુવચનમાં બદલાતી નથી",
            "example": "un pays ➔ des pays · une voix ➔ des voix · un nez ➔ des nez"
          }
        ],
        "triggers": [
          {
            "word": "Suffix -eau / -al",
            "rule": "-s ને બદલે -x સાથે બહુવચન કરે છે (des gâteaux, des cadeaux, des journaux)"
          },
          {
            "word": "Days, months, languages, seasons",
            "rule": "હંમેશા પુરૂષવાચી (le lundi, le français, l'été, le printemps)"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "હંમેશા ફેમિનાઈન (લા ચિમી, લા ફિઝિક, લા પોલિટિક)"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "હંમેશા પુરૂષવાચી (le kmètre, le nord, l'ouest)"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-મેન્ટ (લે ગવર્નમેન્ટ), -ઇસ્મે (લે કેપિટલિઝમ), -એજ (લે સફર), -ઓઇર (લે મિરોઇર), -ટેઉર (લે ડાયરેક્ટર)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-tion / -sion (la રાષ્ટ્ર), -té (la liberté), -ure (la voiture), -ence / -ance (la Science), -ette (la bicyclette)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "લા પ્લેજ, લા કેજ, લા પેજ (-વય પરંતુ સ્ત્રીની!) · લે મૌન, લે સ્ક્વેલેટ (-સી/-તે પરંતુ પુરૂષવાચી!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: વર્ડ એન્ડિંગ તપાસો",
            "question": "શું શબ્દનો અંત -ment, -age, -isme અથવા -oir માં થાય છે?",
            "action": "જો હા ➔ પુરૂષવાચી સોંપો (90%+ સંભાવના)"
          },
          {
            "step": "પગલું 2: એબ્સ્ટ્રેક્ટ/સ્ટેટ પ્રત્યય તપાસો",
            "question": "શું શબ્દનો અંત -tion, -sion, -té, -ence, અથવા -ure માં થાય છે?",
            "action": "જો હા ➔ સ્ત્રીને સોંપો (95%+ સંભાવના)"
          },
          {
            "step": "પગલું 3: બહુવચન માર્કર તપાસો",
            "question": "શું એકવચનનો અંત -al, -eau, અથવા -eu માં થાય છે?",
            "action": "જો હા ➔ -aux અથવા -x સાથે બહુવચન બનાવો"
          },
          {
            "step": "પગલું 4: સિબિલન્ટ અંત તપાસો",
            "question": "શું તે -s, -x, અથવા -z માં સમાપ્ત થાય છે?",
            "action": "જો હા ➔ સમાન જોડણી જાળવી રાખો, તો લેખને લેસ/ડેસમાં બદલો"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "સ્પોકન ક્વિબેક બહુવચન સર્વનામ નિયમ",
            "meaning": "In natural Quebec French, 'on' completely replaces 'nous' in speech",
            "example": "નુસ મેંજન્સ ➔ ઓન મેંગે (ખૂબ સરળ જોડાણ!)"
          },
          {
            "name": "સ્પોકન ક્વિબેકમાં તુ એલિઝન",
            "meaning": "ક્વિબેક બોલાતા રજિસ્ટરમાં વાતચીતનું સંકોચન",
            "example": "તમે પ્રેમ કરો છો? ➔ તે પ્રીટ? · તું ફાઇમ તરીકે ? ➔ તે ફેઇમ છે?"
          },
          {
            "name": "તૃતીય વ્યક્તિ બહુવચન લિંગ નિયમ",
            "meaning": "ઓછામાં ઓછું એક પુરૂષ ધરાવતું કોઈપણ જૂથ વ્યાકરણની રીતે ils ને ડિફોલ્ટ કરે છે",
            "example": "માર્ક એટ સોફી ➔ ઇલ્સ · સોફી, મેરી અને ક્લેર ➔ એલ્સ"
          }
        ],
        "triggers": [
          {
            "word": "On",
            "rule": "Grammatically singular (takes il/elle verb form) but refers to 'we' / 'everyone'"
          },
          {
            "word": "Vous",
            "rule": "ડ્યુઅલ ફંક્શન: બહુવચન 'તમે બધા' અથવા એકવચન ઔપચારિક/સૌથીક 'તમે'"
          },
          {
            "word": "Il vs Ce",
            "rule": "એકદમ વિશેષણો સાથે 'il' નો ઉપયોગ કરો (Il est tard); સંશોધિત સંજ્ઞાઓ સાથે 'c’est' નો ઉપયોગ કરો (C’est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "હંમેશા સ્વર/શાંત h (J'habite, J'aime, J'écoute) પહેલાં 'e' ડ્રોપ કરો"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "j'ai, j'arrive, t'as, t'es (જે માટે ફરજિયાત elision, tu માટે બોલાય છે)"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "ડમી વિષય તરીકે હંમેશા 'il' નો ઉપયોગ કરે છે: Il pleut, Il neige, Il est 3h"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "'ચાલુ' નો ઉપયોગ કરો: En hiver, on porte un manteau"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: પ્રેક્ષકોને ઓળખો",
            "question": "શું તમે એક વ્યક્તિ સાથે ઔપચારિક રીતે અથવા જૂથ સાથે વાત કરી રહ્યા છો?",
            "action": "VOUS (ઔપચારિક અથવા બહુવચન) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: શું તમે 'અમે' વિશે વાત કરી રહ્યા છો?",
            "question": "શું આ બોલાય છે કે અનૌપચારિક ફ્રેન્ચ?",
            "action": "ચાલુ (+ 3જી વ્યક્તિ એકવચન ક્રિયાપદ) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 3: મિશ્ર જૂથોનું વિશ્લેષણ કરો",
            "question": "શું જૂથમાં ઓછામાં ઓછી 1 પુરૂષવાચી એન્ટિટી છે?",
            "action": "ILS નો ઉપયોગ કરો (માત્ર 100% તમામ-સ્ત્રી જૂથો ELLES લે છે)"
          },
          {
            "step": "પગલું 4: સ્વર સીમા તપાસો",
            "question": "શું આગામી ક્રિયાપદ સ્વરથી શરૂ થાય છે?",
            "action": "કરાર Je ➔ J’"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ER ક્રિયાપદો નિયમિત ફોર્મ્યુલા",
            "meaning": "તમામ ફ્રેન્ચ ક્રિયાપદોમાંથી 90% આ ચોક્કસ સમાપ્તિ ક્રમને અનુસરે છે",
            "example": "પાર્લર ➔ જે પારલે, તુ પાર્લે, ઇલ પાર્લે, નૌસ પાર્લન્સ, વૌસ પાર્લેઝ, ઇલ્સ પાર્લેન્ટ"
          },
          {
            "name": "-IR ક્રિયાપદો નિયમિત (ફિનિર) ફોર્મ્યુલા",
            "meaning": "Group 2 regular verbs insert the -iss- infix in plural persons",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "સાયલન્ટ 'બૂટ' અંતનો નિયમ",
            "meaning": "માત્ર nous (-ons) અને vous (-ez) સ્ટેમમાં અવાજવાળો ઉચ્ચારણ ઉમેરે છે!",
            "example": "parle, parles, parlent બધા સમાન રીતે ઉચ્ચારવામાં આવે છે: /paʁl/"
          }
        ],
        "triggers": [
          {
            "word": "Maintenant / En ce moment",
            "rule": "Present tense marker (action currently happening)"
          },
          {
            "word": "Tous les jours / Chaque semaine",
            "rule": "વર્તમાન તંગ રીઢો માર્કર (નિયમિત દિનચર્યા)"
          },
          {
            "word": "-ons ending",
            "rule": "અવાજવાળો /ɔ̃/ અનુનાસિક અવાજ — સાર્વત્રિક 1 લી વ્યક્તિ બહુવચન માર્કર"
          },
          {
            "word": "-ez ending",
            "rule": "અવાજવાળો /e/ સ્વર અવાજ — સાર્વત્રિક 2જી વ્યક્તિ બહુવચન માર્કર"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "અનુનાસિક તરીકે -ent નો ઉચ્ચાર ક્યારેય કરશો નહીં! Ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "je/tu/il/ils (બૂટની અંદર) માં સ્ટેમ ફેરફારો, nous/vous માં સામાન્ય પર પાછા ફરે છે: acheter ➔ j'achète, nous achetons"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "ગમાણ ➔ નૌસ કેરી (નરમ 'જે' અવાજ સાચવવા માટે 'e' રાખો)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ક્રિયાપદ જૂથને ઓળખો",
            "question": "શું અનંતનો અંત -er, -ir, અથવા -re માં થાય છે?",
            "action": "આધાર સ્ટેમ કાઢવા માટે સ્ટ્રીપ અંત"
          },
          {
            "step": "પગલું 2: વિષય સાથે મેળ કરો",
            "question": "Who is doing the action (je, tu, il, nous, vous, ils)?",
            "action": "અનુરૂપ અંત પ્રત્યય પસંદ કરો"
          },
          {
            "step": "પગલું 3: ઉચ્ચારણ ફિલ્ટર",
            "question": "શું 'બૂટ' (je/tu/il/ils) ની અંદરનો વિષય છે?",
            "action": "અંત સંપૂર્ણપણે મૌન રાખો! માત્ર સ્ટેમ સાંભળવામાં આવે છે"
          },
          {
            "step": "પગલું 4: બહુવચન તપાસો",
            "question": "તે nous અથવા vous છે?",
            "action": "Pronounce ending audibly: -ons (/ɔ̃/) or -ez (/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "સ્ટાન્ડર્ડ સજા ઓર્ડર ફોર્મ્યુલા",
            "meaning": "ઘોષણાત્મક ફ્રેન્ચ મૂળભૂત હકારાત્મક વાક્યો માટે અંગ્રેજી ક્રમને અનુસરે છે",
            "example": "એલેક્સ (એસ) માંગે (વી) ઉને પોમે (ઓ)"
          },
          {
            "name": "ધ નેગેશન સેન્ડવીચ ફોર્મ્યુલા",
            "meaning": "નકારાત્મકતા બ્રેડના બે સ્લાઇસની જેમ સંયુક્ત ક્રિયાપદની આસપાસ લપેટી જાય છે",
            "example": "Je NE parle PAS · Elle N’aime PAS le bruit"
          },
          {
            "name": "પ્રશ્ન રચના 3-ટિયર્સ",
            "meaning": "રજિસ્ટરના આધારે કોઈપણ હા/ના પ્રશ્ન પૂછવાની ત્રણ રીતો",
            "example": "તમે વિન્સ? (કેઝ્યુઅલ) · Est-ce que tu viens ? (ધોરણ) · Viens-tu ? (ઔપચારિક)"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "માનક નકાર (નહીં)"
          },
          {
            "word": "Ne ... jamais",
            "rule": "નકારાત્મક ટેવ (ક્યારેય નહીં) - 'પાસ' ને બદલે છે"
          },
          {
            "word": "Ne ... plus",
            "rule": "નકારાત્મક ચાલુ (હવે નહીં/હવે નહીં) — 'પાસ'ને બદલે છે"
          },
          {
            "word": "Est-ce que",
            "rule": "યુનિવર્સલ પ્રશ્ન ઓપનર: પ્રમાણભૂત SVO શબ્દ ક્રમ સાચવે છે"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ જે ને પાસ સાઈસ ➔ ✓ જે ને સાઈસ પાસ (ક્રિયાપદ સેન્ડવીચ)"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "J'sais pas · Y vient pas (મૌખિક ફ્રેન્ચમાં અત્યંત સામાન્ય)"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai, n'aime, n'écoute, n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: સંયુક્ત ક્રિયાપદને ઓળખો",
            "question": "પ્રાથમિક સંયુક્ત ક્રિયાપદ શું છે?",
            "action": "વિષયને તેની સામે સીધો મૂકો"
          },
          {
            "step": "પગલું 2: શું તમે નકારી રહ્યા છો?",
            "question": "શું તમે કહેવા માંગો છો કે ક્યારેય નહીં / હવે નહીં?",
            "action": "ક્રિયાપદને સેન્ડવીચ કરો: NE + ક્રિયાપદ + PAS / JAMAIS / PLUS"
          },
          {
            "step": "પગલું 3: શું તમે કોઈ પ્રશ્ન પૂછી રહ્યા છો?",
            "question": "તમે કયા રજીસ્ટરનો ઉપયોગ કરો છો?",
            "action": "અનૌપચારિક: સ્વરચિત (?) · ધોરણ: Est-ce que... · ઔપચારિક: ક્રિયાપદ-વિષયને ઉલટાવો"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "વિશેષણ કરાર મેટ્રિક્સ ફોર્મ્યુલા",
            "meaning": "વિશેષણો લિંગ અને સંખ્યા બંનેમાં તેમની સંજ્ઞા સાથે મેળ ખાતા હોવા જોઈએ",
            "example": "ગ્રાન્ડ (M) · ગ્રાન્ડ (F) · ગ્રાન્ડ્સ (M.Pl) · ગ્રાન્ડ્સ (F.Pl)"
          },
          {
            "name": "BAGS પ્લેસમેન્ટ કાયદો",
            "meaning": "મોટા ભાગના વિશેષણો સંજ્ઞા પછી જાય છે, સિવાય કે BAGS જે આગળ જાય છે",
            "example": "અન ગ્રાન્ડ લિવર (બેગ્સ: સાઈઝ) વિ અન લિવરે રૂજ (રંગ: નામ પછી)"
          },
          {
            "name": "Beau, Nouveau, Vieux માટે સ્વર સ્વિચ",
            "meaning": "સ્વર/ક થી શરૂ થતા પુરૂષવાચી સંજ્ઞાઓ પહેલા વિશેષ પુરૂષવાચી સ્વરૂપો",
            "example": "beau ➔ bel · nouveau ➔ nouvel · vieux ➔ vieil"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "beau, joli, jeune, vieux, bon, mauvais, grand, Petit ➔ સંજ્ઞા પહેલાં મૂકેલું"
          },
          {
            "word": "Colors & Shapes",
            "rule": "bleu, rouge, rond, carré ➔ સંજ્ઞા પછી મૂકવામાં આવે છે (une voiture rouge)"
          },
          {
            "word": "Nationalities",
            "rule": "canadien, français, américain ➔ સંજ્ઞા પછી મૂકવામાં આવે છે (un café québécois)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "ક્યારેય -s અથવા -e ઉમેરશો નહીં! (ડેસ ચૌસ્યુર્સ મેરોન)"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "heureux ➔ heureuse, curieux ➔ curieuse"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "એક્ટિફ ➔ સક્રિય, સર્જનાત્મક ➔ સર્જનાત્મક, રમતગમત ➔ રમતગમત"
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
            "question": "શું તે સુંદરતા, ઉંમર, દેવતા અથવા કદ છે?",
            "action": "જો હા ➔ સંજ્ઞા પહેલા મૂકો. Otherwise ➔ Place AFTER noun"
          },
          {
            "step": "પગલું 2: સંજ્ઞાનું લિંગ તપાસો",
            "question": "સંજ્ઞા સ્ત્રીલિંગ છે?",
            "action": "ઉમેરો -e (અથવા ટ્રાન્સફોર્મ પ્રત્યય: -eux ➔ -euse, -if ➔ -ive)"
          },
          {
            "step": "પગલું 3: સંજ્ઞાની સંખ્યા તપાસો",
            "question": "શું સંજ્ઞા બહુવચન છે?",
            "action": "ઉમેરો -s (અથવા -es જો સ્ત્રીની બહુવચન)"
          },
          {
            "step": "પગલું 4: સ્વર ક્લેશ તપાસો",
            "question": "શું તે પુરૂષવાચી સ્વર સંજ્ઞા પહેલા beau/nouveau/vieux છે?",
            "action": "બેલ, નોવેલ, વીઇલનો ઉપયોગ કરો"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "ફરજિયાત 'à' સંકોચન ફોર્મ્યુલા",
            "meaning": "પૂર્વનિર્ધારણ 'à' પુરૂષવાચી અને બહુવચન ચોક્કસ લેખો સાથે જોડાય છે",
            "example": "Je vais au gym (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "ફરજિયાત 'દ' સંકોચન ફોર્મ્યુલા",
            "meaning": "પૂર્વનિર્ધારણ 'de' પુરૂષવાચી અને બહુવચન ચોક્કસ લેખો સાથે જોડાય છે",
            "example": "લે રીટોર ડુ રોઈ (ડી+લે) · લા લિસ્ટ ડેસ ઇન્વિટિસ (ડી+લેસ)"
          },
          {
            "name": "ભૌગોલિક પૂર્વનિર્ધારણ ફોર્મ્યુલા",
            "meaning": "સ્થાન પૂર્વનિર્ધારણ ગંતવ્યના વ્યાકરણના લિંગ પર સખત રીતે આધાર રાખે છે",
            "example": "મોન્ટ્રીયલ, EN ફ્રાન્સ, AU કેનેડા, AUX États-Unis"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "હંમેશા à: à Montréal, à Québec, à Paris, à Toronto (કોઈ લેખ નથી!)"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "-e માં સમાપ્ત થાય છે ➜ સ્ત્રીની: en France, en Colombie, en Ontario (સ્વરથી શરૂ થાય છે)"
          },
          {
            "word": "AU + masculine country",
            "rule": "-e માં સમાપ્ત થતું નથી: au કેનેડા, au Mexique, au Japon"
          },
          {
            "word": "Chez + person / professional",
            "rule": "અર્થ 'ના ઘર/ઓફિસ પર': ચેઝ મોઇ, ચેઝ લે મેડેસિન, ચેઝ જીન"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ à le રેસ્ટોરન્ટ ➔ ✓ au રેસ્ટોરન્ટ · ❌ de le parc ➔ ✓ du parc"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "લા ફ્રાન્સ ➔ en ફ્રાન્સ, લા સુઈસ ➔ en સુઈસ (અપવાદ: le Mexique ➔ au Mexique)"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "À ક્યુબા, à મેડાગાસ્કર, à Haïti"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ગંતવ્ય પ્રકાર તપાસો",
            "question": "શું તે શહેર, દેશ અથવા વ્યક્તિ છે?",
            "action": "શહેર ➔ À · વ્યક્તિ ➔ ચેઝ · દેશ ➔ પગલું 2 જુઓ"
          },
          {
            "step": "પગલું 2: દેશનું લિંગ તપાસો",
            "question": "શું દેશ -e માં સમાપ્ત થાય છે કે સ્વરથી શરૂ થાય છે?",
            "action": "જો હા ➔ EN (en Italie, en France) · જો ના ➔ AU (au Canada)"
          },
          {
            "step": "પગલું 3: બહુવચન દેશો તપાસો",
            "question": "શું દેશ બહુવચન છે (États-Unis, Pays-Bas)?",
            "action": "AUX (aux États-Unis) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 4: ચોક્કસ લેખ ફ્યુઝન તપાસો",
            "question": "શું તમે à/de ને le અથવા les સાથે જોડી રહ્યા છો?",
            "action": "કરાર: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "પોસેસિવ એગ્રીમેન્ટ ફોર્મ્યુલા",
            "meaning": "માલિકી વિશેષણો POSSSESSED OBJECT સાથે સંમત થાય છે, ક્યારેય માલિક નથી!",
            "example": "તેની કાર = sa voiture (voiture is fem) · તેણીનું પુસ્તક = son livre (livre is masc)"
          },
          {
            "name": "સ્વર ક્લેશ લાઇફસેવર નિયમ",
            "meaning": "સ્વરથી શરૂ થતી સ્ત્રીની સંજ્ઞાઓ ધ્વન્યાત્મક પ્રવાહ માટે પુરૂષવાચી સ્વરૂપો પર સ્વિચ કરે છે",
            "example": "❌ મા અમી ➔ ✓ સોમ અમી · ❌ સા ઇકોલે ➔ ✓ પુત્ર ઇકોલે"
          },
          {
            "name": "નિદર્શન વિશેષણો ફોર્મ્યુલા",
            "meaning": "મતલબ આ અથવા તે; cet બેડોળ સ્વર સ્ટોપ્સને ટાળે છે",
            "example": "ce livre · cet hôtel · cette ટેબલ · ces clés"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "પુરૂષવાચી સંજ્ઞાઓ અથવા સ્વરથી શરૂ થતી સ્ત્રીની સંજ્ઞાઓ માટે વપરાય છે"
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "વ્યંજનથી શરૂ થતી સ્ત્રીની સંજ્ઞાઓ માટે સખત રીતે વપરાય છે"
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "1 માલિક માટે સાર્વત્રિક બહુવચન ધરાવે છે (લિંગને ધ્યાનમાં લીધા વિના)"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "બહુવિધ માલિકો માટે એકવચન કબજો (અમારો/તમારો/તેમનો)"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "Mon amie, son idée, ton histoire (સાઉન્ડ સ્મૂથ, /a-a/ ક્લેશ ટાળો)"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "Cet homme, cet એપાર્ટમેન્ટ, cet été"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "પુત્ર લિવરે = તેનું/તેણીનું પુસ્તક (1 માલિક); leur livre = તેમના પુસ્તક (બહુમાલિકો)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: કબજે કરેલી વસ્તુને ઓળખો",
            "question": "તેનું લિંગ અને સંખ્યા શું છે?",
            "action": "બહુવચન ➔ mes/tes/ses/nos/vos/leurs. એકવચન ➔ પગલું 2 જુઓ"
          },
          {
            "step": "પગલું 2: સ્વર પ્રારંભ માટે તપાસો",
            "question": "શું એકવચન સંજ્ઞા સ્વરથી શરૂ થાય છે કે શાંત h?",
            "action": "જો હા ➔ mon/ton/son/cet નો ઉપયોગ કરવો જ જોઈએ (ભલે સ્ત્રીલિંગ!)"
          },
          {
            "step": "પગલું 3: માલિક સાથે મેળ કરો",
            "question": "તેની માલિકી કોની છે (je, tu, il/elle, nous, vous, ils)?",
            "action": "યોગ્ય વ્યક્તિની માલિકીની પંક્તિ પસંદ કરો"
          },
          {
            "step": "પગલું 4: નિદર્શન ફિલ્ટર",
            "question": "શું તમે 'આ/તે' તરફ ઈશારો કરી રહ્યાં છો?",
            "action": "ce (M) / cet (M+vowel) / cette (F) / ces (બહુવચન)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "ફ્રેન્ચ 70s બેઝ-60 ગણિત ફોર્મ્યુલા",
            "meaning": "ફ્રેન્ચ નંબર 70-79 60 ની ટોચ પર 10 થી 19 ગણે છે",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "ફ્રેન્ચ 80s બેઝ-20 ગણિત ફોર્મ્યુલા",
            "meaning": "વિગેસિમલ બેઝ-20 ગણતરી સેલ્ટિક ફ્રેન્ચમાંથી વારસામાં મળી છે",
            "example": "80 માં -s (quatre-vingts), ડ્રોપ્સ -s જ્યારે પછી નંબર આવે છે (quatre-vingt-un)"
          },
          {
            "name": "ફ્રેન્ચ 90s ગણિત ફોર્મ્યુલા",
            "meaning": "4 ગુણ્યા 20 વત્તા કિશોરો (10 થી 19)",
            "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
          },
          {
            "name": "ઘડિયાળ સમય કહેવાની ફોર્મ્યુલા",
            "meaning": "સ્ટાન્ડર્ડ ફ્રેન્ચ ઘડિયાળ સૂત્ર સ્પષ્ટપણે 'હ્યુર્સ'નો ઉપયોગ કરે છે",
            "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "ફ્રાન્સ અને ક્વિબેકમાં 70 (60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "ફ્રાન્સ અને ક્વિબેકમાં 80 (4 x 20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "ફ્રાન્સ અને ક્વિબેકમાં 90 (4 x 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "21, 31, 41, 51, 61, 71 (et-un) અને સાડા કલાક (એટ ડેમી) માટે કનેક્ટર્સ"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = quatre-vingt-un (NO 'et'!), 91 = quatre-vingt-onze (NO 'et'!)"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "બધા સંયોજન સંખ્યાના ભાગોને હવે હાઇફેનેટ કરી શકાય છે: ડ્યુક્સ-સેન્ટ-સિન્ક્વેન્ટે"
          },
          {
            "pattern": "Half past agreement",
            "note": "une heure et demie (heure સાથે fem કરાર) vs midi et demi (masc)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ડેસીલ તપાસો (70, 80, 90)",
            "question": "શું આ સંખ્યા 70, 80 અથવા 90 ના દાયકામાં છે?",
            "action": "70s ➔ 60 + કિશોર · 80s ➔ 4x20 + અંક · 90s ➔ 4x20 + કિશોર"
          },
          {
            "step": "પગલું 2: 1s કનેક્ટર માટે તપાસો",
            "question": "શું તે 21, 31, 41, 51, 61, 71 છે?",
            "action": "'et' ઉમેરો: soixante-et-un. (81 અને 91 'et' લેતા નથી)"
          },
          {
            "step": "પગલું 3: સમય જણાવો",
            "question": "શું અડધો કલાક વીતી ગયો છે?",
            "action": "'moins' નો ઉપયોગ કરો: 4:50 = 5h moins dix"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "પાસ કમ્પોઝ માસ્ટર ફોર્મ્યુલા",
            "meaning": "પૂર્ણ થયેલ, વન-ઑફ ઇવેન્ટ્સ માટે સંયુક્ત ભૂતકાળ",
            "example": "J'ai mangé (avoir) · Je suis parti (être)"
          },
          {
            "name": "ÊTRE સહાયક પસંદગી ફોર્મ્યુલા",
            "meaning": "ગતિ/સ્થિતિ-પરિવર્તન અને રીફ્લેક્સિવની માત્ર ચોક્કસ ક્રિયાપદો êtreનો ઉપયોગ કરે છે",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "પાર્ટિસિપલ ફોર્મેશન ફોર્મ્યુલા",
            "meaning": "પ્રમાણભૂત નિયમિત પાર્ટિસિપલ અંત",
            "example": "પાર્લર ➜ પાર્લે · ફિનીર ➜ ફિની · હાજરી આપનાર ➜ હાજરી"
          },
          {
            "name": "Être કરાર કાયદો",
            "meaning": "સ્ત્રીની માટે ઉમેરો -e, être સાથે બહુવચન માટે -s",
            "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "પાછલા સમયનું ટ્રિગર: ગઈકાલે / છેલ્લી રાત"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "અચાનક વિક્ષેપ ટ્રિગર: હંમેશા Pasé Composé"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "વિશિષ્ટ આઇસોલેટેડ ઇવેન્ટ ટ્રિગર"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "ડેવેનીર, રેવેનીર, મોન્ટર, રેસ્ટર, સોર્ટિર, વેનીર, એલેર, નાઈટ્રે, ડીસેન્ડ્રે, એન્ટર, રેન્ટર, ટોમ્બર, રીટર્નર, એરાઇવર, મોરીર, પાર્ટીર, પેસર"
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
            "note": "Elle s'est lavé les mains (કોઈ કરાર નથી કારણ કે COD 'les mains' ક્રિયાપદ પછી છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: શું ક્રિયાપદ પ્રતિબિંબિત છે (se...)?",
            "question": "શું ક્રિયાપદમાં se/s’ છે?",
            "action": "જો હા ➔ Aux એ ÊTRE છે (અને પાર્ટિસિપલ વિષય સાથે સંમત થાય છે સિવાય કે ડાયરેક્ટ ઑબ્જેક્ટ અનુસરે)"
          },
          {
            "step": "પગલું 2: શું તે DR MRS VANDERTRAMP માં છે?",
            "question": "શું તે 17 મૂવમેન્ટ/ચેન્જ-ઓફ-સ્ટેટ ક્રિયાપદોમાંથી એક છે?",
            "action": "જો હા ➔ Aux એ ÊTRE છે (પ્રતિભાગી વિષય સાથે સંમત છે)"
          },
          {
            "step": "પગલું 3: મૂળભૂત સહાયક",
            "question": "અન્ય તમામ ક્રિયાપદો",
            "action": "AVOIR નો ઉપયોગ કરો (કોઈ વિષય કરાર નથી)"
          },
          {
            "step": "પગલું 4: પાર્ટિસિપલ બનાવો",
            "question": "નિયમિત સ્ટેમ અથવા અનિયમિત ફોર્મ લાગુ કરો",
            "action": "-er ➔ -é, -ir ➔ -i, -re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "ડાયરેક્ટ ઓબ્જેક્ટ સર્વનામ (COD) ફોર્મ્યુલા",
            "meaning": "કોઈપણ પૂર્વનિર્ધારણ વિના સીધી વસ્તુઓને બદલે છે",
            "example": "Je vois Marc ➔ Je LE vois · Elle Mange la pomme ➔ Elle LA Mange"
          },
          {
            "name": "પરોક્ષ પદાર્થ સર્વનામ (COI) ફોર્મ્યુલા",
            "meaning": "'à + વ્યક્તિ' ને બદલે છે (તેને / તેણીને / તેમને)",
            "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes માતાપિતા ➔ Je LEUR téléphone"
          },
          {
            "name": "ઑબ્જેક્ટ સર્વનામ પ્લેસમેન્ટ ફોર્મ્યુલા",
            "meaning": "ફ્રેન્ચ ક્રિયાપદ પહેલા પદાર્થ સર્વનામ મૂકે છે (અંગ્રેજીથી વિરુદ્ધ)",
            "example": "હું તને પ્રેમ કરું છું ➔ Je T'aime ( Je aime toi નહિ)"
          },
          {
            "name": "નજીકના ભવિષ્યના સર્વનામ પ્લેસમેન્ટ",
            "meaning": "સર્વનામ અનંત ક્રિયાપદને ગળે લગાવે છે જે તે તાર્કિક રીતે અનુસરે છે",
            "example": "જે વૈસ લે વોઇર (જે લે વૈસ વોઇર નથી)"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "પરોક્ષ સર્વનામનો અર્થ 'તેમને' અથવા 'તેણીને' (લિંગ-તટસ્થ!)"
          },
          {
            "word": "Leur",
            "rule": "પરોક્ષ સર્વનામનો અર્થ 'તેમને' (ક્યારેય સર્વનામ તરીકે -s લેતો નથી!)"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "ક્લાસિક COI ટ્રિગર ક્રિયાપદો જેમાં lui/leur જરૂરી છે"
          },
          {
            "word": "Moi / Toi",
            "rule": "પૂર્વનિર્ધારણ પછી અથવા સકારાત્મક આવશ્યકતામાં ઉપયોગમાં લેવાતા તણાવ સર્વનામ (regarde-moi!)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "પૂછો: શું કોઈ ઉપસર્ગ 'à' છે? જો હા ➔ COI (lui/leur); જો ના હોય તો ➔ COD (le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "Je ne le vois pas (સર્વનામ નકારાત્મક સેન્ડવીચની અંદર રહે છે!)"
          },
          {
            "pattern": "Elision with vowels",
            "note": "Je l'adore, il m'attend, t'écoute પર"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ક્રિયાપદના પદાર્થને ઓળખો",
            "question": "શું અથવા કોણ કાર્યવાહી પ્રાપ્ત કરી રહ્યું છે?",
            "action": "ઑબ્જેક્ટ શબ્દસમૂહને હાઇલાઇટ કરો"
          },
          {
            "step": "પગલું 2: શું વ્યક્તિની આગળ 'à' શબ્દ છે?",
            "question": "શું ક્રિયાપદ 'à quelqu'un' લે છે?",
            "action": "જો હા ➔ COI: LUI (એકવચન) / LEUR (બહુવચન)"
          },
          {
            "step": "પગલું 3: ડાયરેક્ટ ઑબ્જેક્ટ (કોઈ પૂર્વનિર્ધારણ નથી)?",
            "question": "શું તે સીધો જવાબ આપે છે 'શું' અથવા 'કોણ'?",
            "action": "જો હા ➔ COD: LE/LA/L'/LES"
          },
          {
            "step": "પગલું 4: ક્રિયાપદ પહેલાં સ્થિતિ",
            "question": "તે ક્યાં જાય છે?",
            "action": "સંયુક્ત ક્રિયાપદની બરાબર પહેલા (અથવા જો હાજર હોય તો અનંત પહેલાં)"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "અનિવાર્ય રચના ફોર્મ્યુલા",
            "meaning": "વિષય સર્વનામ છોડો; આદેશો માટે માત્ર 3 ક્રિયાપદ વ્યક્તિઓ અસ્તિત્વમાં છે",
            "example": "તુ વિઅન્સ ➔ વિઅન્સ ! · નૌસ એલોન્સ ➔ એલોન્સ ! · વોસ મંગેઝ ➔ મંગેઝ !"
          },
          {
            "name": "આ -ER ક્રિયાપદ 'Tu' -S ડ્રોપ લો",
            "meaning": "તમને સાદર છે ➔ સાદર! · તુ વાસ ➔ વા !",
            "example": "પારલે! (પાર્લ્સ નથી!) · Écoute ! (કોઈટ્સ નથી!)"
          },
          {
            "name": "મોડલ ક્રિયાપદો ફોર્મ્યુલા",
            "meaning": "મોડલ સંયોજિત હોય છે, ગૌણ ક્રિયા અનંતમાં રહે છે",
            "example": "Je peux venir · Il doit partir · Nous voulons manger"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "ક્ષમતા અથવા નમ્ર પરવાનગી વ્યક્ત કરે છે ('કેન/મે')"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "ફરજ, જવાબદારી અથવા સંભાવના વ્યક્ત કરે છે ('જરૂરી / હોવું જોઈએ')"
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "ઈચ્છા/ઈચ્છા વ્યક્ત કરે છે ('વોન્ટ ટુ') ➔ નમ્રતા માટે 'વાઉડ્રાઈસ' નો ઉપયોગ કરો"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "અંગત જવાબદારી ('એક જ જોઈએ/તે જરૂરી છે')"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "ક્રિયાપદ પછી હાઇફેનેટ: Mange-le ! ડોનેઝ-મોઇ!"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "સામાન્ય રીતે ક્રિયાપદની આગળ આવે છે: ને લે માંગે પાસ ! ને મે ડોને પાસ!"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "વાસ-વાય! મેંગેસ-એન! (સ્વર અથડામણ અટકાવવા માટે જ પુનઃસ્થાપિત કરે છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: સરનામું પસંદ કરો",
            "question": "શું તમે કોઈ મિત્ર (tu), જૂથ/સૌમ્ય (vous), અથવા તમારી જાતને (nous) સહિત કમાન્ડ કરી રહ્યાં છો?",
            "action": "તુ, નૌસ અથવા વૌસ પસંદ કરો"
          },
          {
            "step": "પગલું 2: વિષય સર્વનામ છોડો",
            "question": "tu / nous / vous દૂર કરો",
            "action": "માત્ર ક્રિયાપદ સ્ટેમ રાખો"
          },
          {
            "step": "પગલું 3: -ER 'tu' ફોર્મ તપાસો",
            "question": "શું તે 'tu' સ્વરૂપમાં -ER ક્રિયાપદ છે?",
            "action": "અંતિમ અક્ષર 's' છોડો (પાર્લે! સાદર!)"
          },
          {
            "step": "પગલું 4: હકારાત્મક વિરુદ્ધ નકારાત્મક તપાસો",
            "question": "શું તે 'તે કરો' અથવા 'તે ન કરો' આદેશ છે?",
            "action": "હકારાત્મક: ક્રિયાપદ-સર્વનામ (Aide-moi!) · નકારાત્મક: ને સર્વનામ ક્રિયાપદ પાસ (Ne m'aide pas!)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est vs Il est નિર્ણય ફોર્મ્યુલા",
            "meaning": "સંશોધિત સંજ્ઞાઓ સાથે c'est નો ઉપયોગ કરો; એકદમ વિશેષણો સાથે il est નો સીધો ઉપયોગ કરો",
            "example": "C'est un bon médecin (સંશોધિત સંજ્ઞા) vs Il est બુદ્ધિશાળી (બેર વિશેષણ)"
          },
          {
            "name": "Il y a Existence & Past Formula",
            "meaning": "દ્વિ અર્થ: હાજરીની સ્થિતિ અથવા સમય પહેલા વીતી ગયો",
            "example": "Il y a deux stylos sur la table · Je suis arrivé il y a dix minutes"
          },
          {
            "name": "Avoir Besion / Envie ફોર્મ્યુલા",
            "meaning": "ફ્રેન્ચમાં જરૂરિયાત/ઈચ્છાનો ભૌતિક કબજો વ્યક્ત કરો",
            "example": "J'ai besoin d'eau · J'ai envie de voyager"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "લેખ + સંજ્ઞા, નામો અથવા સંપૂર્ણ નિવેદનો દ્વારા અનુસરવામાં આવે છે (C'est génial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "લેખ અથવા એકદમ વિશેષણો વિનાના વ્યવસાયો દ્વારા અનુસરવામાં આવે છે (Il est avocat, Elle est gentille)"
          },
          {
            "word": "Il y a",
            "rule": "અવિચલ: એકવચન અથવા બહુવચન સંજ્ઞા પછી 'il y a' રહે છે"
          },
          {
            "word": "Avoir l'air",
            "rule": "એટલે 'દેખાવવું/દેખવું' પછી વિશેષણ: Tu as l'air fatigué"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ Il est un médecin ➔ ✓ C'est un médecin OR Il est médecin (બેર વ્યવસાય)"
          },
          {
            "pattern": "Negation of il y a",
            "note": "Il n'y a pas DE + noun (de માટે આંશિક ટીપાં: Il n'y a pas de problème)"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "J'ai besoin d'argent, j'ai envie d'apprendre"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ક્રિયાપદને શું અનુસરે છે તે તપાસો",
            "question": "શું ત્યાં કોઈ નિર્ણાયક/લેખ (un, une, le, mon) છે?",
            "action": "જો હા ➔ C'EST નો ઉપયોગ કરો (C'est un prof)"
          },
          {
            "step": "પગલું 2: શું તે એકદમ વિશેષણ અથવા એકદમ વ્યવસાય છે?",
            "question": "શબ્દ પહેલાં કોઈ લેખ નથી?",
            "action": "જો હા ➔ IL EST / ELLE EST નો ઉપયોગ કરો (Il est prof, Elle est calme)"
          },
          {
            "step": "પગલું 3: અસ્તિત્વ સૂચવે છે?",
            "question": "શું તમે 'There is/There are' કહેવા માંગો છો?",
            "action": "IL Y A નો ઉપયોગ કરો (બહુવચન માટે ક્યારેય બદલાતું નથી)"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "ક્વિબેક ઉચ્ચ-આવર્તન લેક્સિકલ ફોર્મ્યુલા",
            "meaning": "માનક ક્વિબેક શબ્દો સમગ્ર મોન્ટ્રીયલ અને QC દૈનિક જીવનમાં સાંભળવામાં આવે છે",
            "example": "પેટિટ ડીજેયુનર ➜ ડીજેયુનર · ડીજેયુનર ➜ ડીનર · ડીનર ➜ સૂપર"
          },
          {
            "name": "ક્વિબેક એફ્રિકેશન કાયદો",
            "meaning": "ઉચ્ચ આગળના સ્વરો પહેલાં, /t/ અને /d/ કુદરતી રીતે એક સૂક્ષ્મ આફ્રિકેટ હિસ ઉત્પન્ન કરે છે",
            "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "ક્વિબેક ઇન્ટરોગેટિવ -ટુ પાર્ટિકલ",
            "meaning": "બોલાતી ક્વિબેક ફ્રેન્ચમાં વાર્તાલાપ પ્રશ્ન ચિહ્ન",
            "example": "તુ વિન્સ-તુ? (તમે આવી રહ્યા છો?) · શું કરશો ? (શું તે સારું છે?)"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "'ફેર ડુ શોપિંગ' માટે ક્વિબેક (શોપિંગ કરવા માટે)"
          },
          {
            "word": "Fin de semaine",
            "rule": "'લે વીક-એન્ડ' માટે ક્વિબેક"
          },
          {
            "word": "Char",
            "rule": "'voiture' (કાર) માટે ક્વિબેક અનૌપચારિક"
          },
          {
            "word": "Chum / Blonde",
            "rule": "બોયફ્રેન્ડ/ગર્લફ્રેન્ડ માટે ક્વિબેક"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "ક્વિબેક રૂઢિપ્રયોગનો અર્થ થાય છે 'તે બધું સારું / સંપૂર્ણ છે!'"
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "સવાર: ડીજેયુનર, બપોર: ડીનર, સાંજ: સૂપર"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "ફેટે અવાજ /faɛ̯t/, père to /paɛ̯ʁ/ ની નજીક લાગે છે"
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "રદ કરનાર (અનુલર), તપાસનાર (ચકાસનાર), પાર્કર (ગેરર)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ક્વિબેક વાતચીત સેટિંગ ઓળખો",
            "question": "શું તમે મોન્ટ્રીયલ/ક્વિબેકમાં સ્થાનિક સાથે ચેટ કરી રહ્યાં છો?",
            "action": "સ્થાનિક શબ્દોનો ઉપયોગ કરો: fin de semaine, char, magasiner, souper"
          },
          {
            "step": "પગલું 2: Affrication માટે સાંભળો",
            "question": "શું શબ્દમાં તી, તુ, દી, ડુ છે?",
            "action": "મૂળ 'ts' અને 'dz' અવાજ સાંભળો: 'tu' માટે /tsy/"
          },
          {
            "step": "પગલું 3: પ્રશ્ન કણ '-tu'",
            "question": "શું સ્પીકરે ક્રિયાપદ પછી '-tu' ઉમેર્યું?",
            "action": "તેને અનૌપચારિક પ્રશ્ન ચિહ્ન તરીકે ઓળખો: y va-tu પર?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "શ્રાવ્ય સમાનતાનો નિયમ",
            "meaning": "ત્રણેય અંત કાનને 100% સમાન લાગે છે (/e/)",
            "example": "parler, parlé, parlez બધા એકસરખા અવાજ કરે છે: /paʁle/"
          },
          {
            "name": "'વેન્ડ્રે' કપાત કસોટી",
            "meaning": "-er (અનંત) અથવા -é (ભૂતકાળ પાર્ટિસિપલ) લખવું કે કેમ તે નક્કી કરો",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux manger"
          },
          {
            "name": "પાર્ટિસિપલ ડિડક્શન ટેસ્ટ",
            "meaning": "જો 'વેન્દુ' અર્થપૂર્ણ હોય, તો -é લખો",
            "example": "જય માંગ... ➔ જય વેંદુ ➔ જાઈ માંગે"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "ઇન્ફિનિટીવ રિપ્લેસમેન્ટ ટેસ્ટ શબ્દ (અલગ /ʁ/ અવાજ સાંભળો)"
          },
          {
            "word": "Vendu / Fait",
            "rule": "પાસ્ટ પાર્ટિસિપલ રિપ્લેસમેન્ટ ટેસ્ટ શબ્દ (અલગ /y/ અથવા /t/ અવાજ સાંભળો)"
          },
          {
            "word": "-ons",
            "rule": "અસંદિગ્ધ લેખિત અને બોલાયેલ /ɔ̃/ nous માટે સમાપ્ત થાય છે"
          },
          {
            "word": "-ent",
            "rule": "3જી વ્યક્તિ બહુવચન ils/elles માટે અસંદિગ્ધ મૌન લેખિત માર્કર"
          }
        ],
        "patterns": [
          {
            "pattern": "Two verbs in a row ➜ Second is Infinitive",
            "note": "Je veux partir · Il aime voyager · On doit reviser"
          },
          {
            "pattern": "After preposition ➜ Always Infinitive",
            "note": "ગમાણ, સાન્સ પાર્લર, અવંત ડી પાર્ટિર, એયુ લિયુ ડી ડોર્મર રેડવું"
          },
          {
            "pattern": "After avoir / être ➜ Past Participle",
            "note": "J'ai regardé, elle est partie"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: /e/ ધ્વનિ સાંભળો",
            "question": "શું શબ્દ અંતે /e/ જેવો સંભળાય છે?",
            "action": "વિકલ્પો: -er (Inf), -é (પાર્ટિસિપલ), અથવા -ez (vous)"
          },
          {
            "step": "પગલું 2: 'વેન્ડર' ટેસ્ટ લાગુ કરો",
            "question": "શું તમે વાક્યમાં 'VENDRE' શબ્દને બદલી શકો છો?",
            "action": "જો હા ➔ લખો -ER (અનંત: Je dois parler)"
          },
          {
            "step": "પગલું 3: શું તમે 'વેન્ડુ' ને બદલી શકો છો?",
            "question": "શું Avoir/être પછી 'VENDU' કુદરતી રીતે ફિટ થાય છે?",
            "action": "જો હા ➔ લખો -É (ભાગીદાર: J'ai parlé)"
          },
          {
            "step": "પગલું 4: શું વિષય 'વૂસ' છે?",
            "question": "શું તાત્કાલિક વિષય છે?",
            "action": "જો હા ➔ લખો -EZ (vous parlez)"
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "રીફ્લેક્સિવ પ્રેઝન્ટ કન્જુગેશન ફોર્મ્યુલા",
            "meaning": "રીફ્લેક્સિવ સર્વનામ પોતાની જાત સાથે ક્રિયા કરતા વિષય સાથે મેળ ખાય છે",
            "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
          },
          {
            "name": "પ્રોનોમિનલ પાસ કમ્પોઝ ફોર્મ્યુલા",
            "meaning": "100% સર્વનાત્મક ક્રિયાપદોને પાસ કમ્પોઝમાં ÊTRE ની જરૂર પડે છે",
            "example": "Elle s'est réveillée · Nous nous sommes couchés"
          },
          {
            "name": "રીફ્લેક્સિવ એગ્રીમેન્ટ કાયદો",
            "meaning": "જ્યારે ક્રિયા સીધી રીતે સ્વયંને હિટ કરે છે ત્યારે સંમત થાય છે; જો શરીરનો ભાગ અનુસરે તો કોઈ કરાર નથી",
            "example": "Elle s'est lavée (agrees) vs Elle s'est lavé les mains (કોઈ કરાર નથી: 'લેસ મેઈન્સ' સીધી વસ્તુ છે!)"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "દૈનિક નિયમિત સર્વનાત્મક ક્રિયાપદો"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "રીફ્લેક્સિવ સ્ટ્રક્ચરની જરૂર હોય તેવા મેમરી ક્રિયાપદો"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "પારસ્પરિક ક્રિયાપદનો અર્થ 'સાથે સારી રીતે મેળવવું'"
          },
          {
            "word": "S'en aller",
            "rule": "રૂઢિપ્રયોગાત્મક સર્વનાત્મક ક્રિયાપદ જેનો અર્થ થાય છે 'છોડવું / બહાર નીકળવું'"
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "Je NE me réveille PAS (ને... પાસની અંદર સર્વનામ હગ્ઝ ક્રિયાપદ)"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "Je vais ME લીવર (વિષય માટે રીફ્લેક્સિવ સર્વનામ બદલાય છે પરંતુ અનંત પહેલા બેસે છે)"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "લેવ-તોઇ! Réveillez-vous ! (હકારાત્મક આદેશોમાં -toi નો ઉપયોગ કરે છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: શું ક્રિયા પોતાને માટે કરવામાં આવે છે કે પારસ્પરિક?",
            "question": "શું કોઈ પોતાની જાતને કંઈક કરી રહ્યું છે (વાળ સાફ કરવા, જાગતા)?",
            "action": "સર્વનામ સ્વરૂપનો ઉપયોગ કરો: SE + ક્રિયાપદ"
          },
          {
            "step": "પગલું 2: રીફ્લેક્સિવ સર્વનામ સાથે મેળ કરો",
            "question": "વિષય કોણ છે?",
            "action": "je ➔ me, tu ➔ te, il ➔ se, nous ➔ nous, vous ➔ vous, ils ➔ se"
          },
          {
            "step": "પગલું 3: ભૂતકાળનો સમય તપાસો",
            "question": "શું તે પાસ કમ્પોઝ છે?",
            "action": "હંમેશા સહાયક તરીકે ÊTRE નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 4: કરાર ફિલ્ટર",
            "question": "ક્રિયાપદ પછી તરત જ સીધો પદાર્થ સ્પષ્ટ થાય છે?",
            "action": "જો હા (લેસ મેન્સ, લેસ ડેન્ટ્સ) ➔ કોઈ કરાર નથી! જો ના ➔ વિષય સાથે સંમત"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "ડાયરેક્ટ ઓબ્જેક્ટ (COD) ઓળખ ફોર્મ્યુલા",
            "meaning": "કોઈ પૂર્વનિર્ધારણ ક્રિયાપદને સીધી સંજ્ઞાથી અલગ કરતું નથી",
            "example": "મને આમંત્રણ આપો ➔ Je LES invite"
          },
          {
            "name": "પરોક્ષ ઑબ્જેક્ટ (COI) ઓળખ ફોર્મ્યુલા",
            "meaning": "વ્યક્તિ તરફ નિર્દેશ કરતા પૂર્વસર્જિત 'à' દ્વારા અલગ",
            "example": "Je parle à mon patron ➔ Je LUI parle"
          },
          {
            "name": "દ્વિ સર્વનામ ક્રમ હાયરાર્કી ફોર્મ્યુલા",
            "meaning": "બે સર્વનામનો ઉપયોગ કરતી વખતે ક્રિયાપદ પહેલાં સખત ડાબે-થી-જમણે ક્રમ",
            "example": "Il me le donne · Je le lui envoie"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "COI એકવચન (તેને/તેણીને) — લિંગ અંધ"
          },
          {
            "word": "Leur",
            "rule": "COI બહુવચન (તેમને) — લિંગ અંધ, ક્યારેય લેતો નથી"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "નિશ્ચિત પૂર્વનિર્ધારણ 'à' ના કારણે COI લેવું આવશ્યક ક્રિયાપદો"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "ફ્રેન્ચમાં ડાયરેક્ટ ક્રિયાપદો (કોડ લો, અંગ્રેજીથી વિપરીત કોઈ પૂર્વનિર્ધારણ!)"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "હાજરી આપો qqn (કોઈની રાહ જોવા માટે), chercher qch (કંઈક શોધવા માટે) ફ્રેન્ચમાં COD લો!"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "Il ME LE prête (1લી/2જી વ્યક્તિ 3જી સીધી પહેલા)"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "Je LE LUI dis (3જી પ્રત્યક્ષ પહેલા 3જી પરોક્ષ)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ક્રિયાપદ સંક્રમણ તપાસો",
            "question": "શું ફ્રેન્ચ ક્રિયાપદ વ્યક્તિ સાથે 'à' લે છે?",
            "action": "જો હા ➔ COI (lui/leur). જો ના ➔ COD (le/la/les)"
          },
          {
            "step": "પગલું 2: પ્રથમ ઑબ્જેક્ટ બદલો",
            "question": "કયું સર્વનામ તેનું પ્રતિનિધિત્વ કરે છે?",
            "action": "COD અથવા COI તરીકે ટૅગ કરો"
          },
          {
            "step": "પગલું 3: દ્વિ સર્વનામ ગોઠવો",
            "question": "ત્યાં બે સર્વનામ છે?",
            "action": "વંશવેલો અનુસરો: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ ક્રિયાપદ"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "ફ્યુચર પ્રોચે હકારાત્મક ફોર્મ્યુલા",
            "meaning": "તાત્કાલિક યોજનાઓ, ઇરાદાઓ અને ચોક્કસ આગામી ઇવેન્ટ્સ માટે વપરાય છે (જવાનું...)",
            "example": "Je vais manger · Nous allons voyager · Ils vont partir"
          },
          {
            "name": "ફ્યુચર પ્રોચે નેગેટિવ ફોર્મ્યુલા",
            "meaning": "નકારાત્મકતા સંયોજિત ક્રિયાપદ 'એલર' ની આસપાસ આવરિત થાય છે, અનંતને બહાર છોડી દે છે",
            "example": "જે ને વૈસ પાસ ટ્રાવેલર ડેમેઈન (જે ને ટ્રાવેલર પાસ નહિ)"
          },
          {
            "name": "Pronominal Futur Proche ફોર્મ્યુલા",
            "meaning": "રીફ્લેક્સિવ સર્વનામ વિષય સાથે સંમત થવું જોઈએ અને અનંતની સામે જ બેસવું જોઈએ",
            "example": "Je vais ME coucher · Vous allez VOUS amuser"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "નજીકના ભવિષ્યનો સમય ટ્રિગર્સ"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "નિકટવર્તી ભાવિ ટ્રિગર્સ"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "વર્તમાન કાળમાં સહાયક એલરનું જોડાણ"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "જે ને વૈસ પાસ ડોર્મર · એલે ને વા પાસ વેનીર"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je vais LE voir · Il va ME téléphoner (સર્વનામ અનંત ક્રિયાથી સંબંધિત છે)"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "M'as manger (Je vais manger માટે અનૌપચારિક બોલાય છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: હેતુ અથવા નજીકનું ભવિષ્ય તપાસો",
            "question": "શું આ કોઈ હેતુપૂર્વકની યોજના કે ઘટના ટૂંક સમયમાં બની રહી છે?",
            "action": "Futur Proche (Aller + Inf) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: ALLER ને જોડો",
            "question": "વિષય કોણ છે?",
            "action": "je Vais, tu vas, il va, nous allons, vous allez, ils vont"
          },
          {
            "step": "પગલું 3: મુખ્ય ક્રિયા જોડો",
            "question": "ક્રિયા ક્રિયાપદ શું છે?",
            "action": "INFINITIVE માં રાખો (-er, -ir, -re)"
          },
          {
            "step": "પગલું 4: સર્વનામ અથવા નકારાત્મકતા તપાસો",
            "question": "શું તે નકારાત્મક છે અથવા તેમાં કોઈ પદાર્થ સર્વનામ છે?",
            "action": "ને + એલર + પાસ + [સર્વનામ] + અનંત"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "ફ્યુચર સિમ્પલ માસ્ટર ફોર્મ્યુલા",
            "meaning": "નોંધ લો કે અંત શાબ્દિક રીતે AVOIR નો વર્તમાન સમય છે (ai, as, a, ons, ez, ont)!",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "-RE ક્રિયાપદો ભાવિ સ્ટેમ નિયમ",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "prendre ➔ je prendrai · attendre ➔ j'attendrai"
          },
          {
            "name": "કોર અનિયમિત ભાવિ દાંડી",
            "meaning": "દાંડી હંમેશા 'r' માં સમાપ્ત થાય છે, પછી પ્રમાણભૂત અંત લો",
            "example": "je serai, j'aurai, j'irai, je Ferai, je pourrai, je voudrai"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "દૂરના ભાવિ સમય માર્કર્સ"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "સમયના જોડાણો ફ્રેન્ચમાં ભવિષ્યને સરળ બનાવે છે"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "પ્રથમ શરતી નિયમ (Si j'ai le temps, je viendrai)"
          }
        ],
        "patterns": [
          {
            "pattern": "Future stems ALWAYS end in 'R'",
            "note": "parler-, finir-, vendr-, ser-, aur-, ir-, fer-"
          },
          {
            "pattern": "Do not confuse -ons with nous imparfait",
            "note": "નૌસ પાર્લરોન્સ (ફ્યુચર /ɔ̃/) વિ નૌસ પાર્લિયન્સ (ઇમ્પારફાઇટ /jɔ̃/)"
          },
          {
            "pattern": "3rd person plural is -ont (not -ent!)",
            "note": "ils parleront (/ɔ̃/ જેવો અવાજ, ઓન્સ સાથે જોડકણાં!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: ભાવિ સ્ટેમ નક્કી કરો",
            "question": "ક્રિયાપદ નિયમિત છે (-er, -ir, -re)?",
            "action": "infinitive રાખો (-re માંથી 'e' છોડો). જો અનિયમિત હોય, તો 'R' રુટનો ઉપયોગ કરો (ser-, aur-, ir-, fer-)"
          },
          {
            "step": "પગલું 2: AVOIR અંત જોડો",
            "question": "વિષય શું છે?",
            "action": "je ➔ -ai, tu ➔ -as, il ➔ -a, nous ➔ -ons, vous ➔ -ez, ils ➔ -ont"
          },
          {
            "step": "પગલું 3: અંતિમ પ્રત્યય ઉચ્ચાર કરો",
            "question": "સ્વરોની નોંધ લો",
            "action": "je parlerai (/e/), tu parleras (/a/), ils parleront (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "Imparfait સ્ટેમ નિષ્કર્ષણ ફોર્મ્યુલા",
            "meaning": "ફ્રેન્ચ ભાષામાં તમામ ક્રિયાપદોના 99.9% માટે કામ કરે છે!",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "Imparfait યુનિવર્સલ એન્ડિંગ્સ ફોર્મ્યુલા",
            "meaning": "નોટિસ -ais, -ais, -ait, -aient બધા એકસરખા ઉચ્ચારવામાં આવે છે: /ɛ/",
            "example": "je parlais, tu parlais, il parlait, ils parlaient all sound /paʁlɛ/"
          },
          {
            "name": "ફ્રેન્ચમાં એકમાત્ર અનિયમિત સ્ટેમ",
            "meaning": "દરેક અન્ય ક્રિયાપદ વર્તમાનમાં નૂસમાંથી તેનું સ્ટેમ કાઢે છે!",
            "example": "j'étais, nous étions, vous étiez"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "પુનરાવર્તિત આદત ટ્રિગર ➔ હંમેશા અયોગ્ય"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "સતત પૃષ્ઠભૂમિ ક્રિયા ટ્રિગર ➔ અયોગ્ય"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "ભૂતકાળનો ચાલુ યુગ / જીવનની સ્થિતિ"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "ભૂતકાળનું દૃશ્ય, હવામાન, સમય, ભાવનાત્મક સ્થિતિ"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "બધા ઉચ્ચારણ /ɛ/ (ખુલ્લું e). વિષય સર્વનામ તમને કહે છે કે તે કોણે કર્યું!"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "નૌસ પાર્લિઅન્સ (/paʁjɔ̃/), વૌસ પાર્લિઝ (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "je mangeais ('e' રાખો), je commençais (cedilla 'ç' ઉમેરો)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: વર્તમાન સમયમાં Nous લો",
            "question": "'નોસ' માટે વર્તમાનકાળ શું છે?",
            "action": "Nous parlons, nous faisons, nous buvons"
          },
          {
            "step": "પગલું 2: લોપ ઓફ -ONS",
            "question": "3 અક્ષરો દૂર કરો",
            "action": "parl-, fais-, buv- (આ તમારું સ્ટેમ છે)"
          },
          {
            "step": "પગલું 3: ક્રિયાપદ ÊTRE છે?",
            "question": "શું તે એકમાત્ર અપવાદ છે?",
            "action": "સ્ટેમ એટ-નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 4: અસ્પષ્ટ અંત જોડો",
            "question": "વિષય સાથે મેળ",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "સર્વનામ Y સ્થાન રિપ્લેસમેન્ટ ફોર્મ્યુલા",
            "meaning": "કોઈપણ ભૌગોલિક સ્થાન અથવા સ્થાનને બદલે છે (અંગ્રેજી: THERE)",
            "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "સર્વનામ Y નિર્જીવ પદાર્થ સૂત્ર",
            "meaning": "'à + વસ્તુ/વિભાવના' ને બદલે છે (વિચારવું, તેમાં ભાગ લેવો)",
            "example": "Je pense à mon avenir ➔ J'Y pense (Je pense à lui નથી: લોકો તણાવ સર્વનામ લે છે!)"
          },
          {
            "name": "સર્વનામ Y પ્લેસમેન્ટ ફોર્મ્યુલા",
            "meaning": "ક્રિયાપદ પહેલાં તરત જ બેસે છે",
            "example": "તુ વાય વાસ · ઓન ન'ય વા પાસ · વાસ-વાય ! (આવશ્યક)"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "પેન્સર à un examen ➔ y penser"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "'à' + નિર્જીવ વિચારો લેતી ક્રિયાપદો ➔ Y દ્વારા બદલવામાં આવી છે"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "સ્થાન ટ્રિગર્સ ➔ Y દ્વારા બદલવામાં આવ્યું છે"
          },
          {
            "word": "Il y a",
            "rule": "સર્વનામ Y ધરાવે છે: શાબ્દિક રીતે 'તે ત્યાં છે'"
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle (લોકો માટે તણાવ સર્વનામનો ઉપયોગ કરો!)"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "Va + y ➔ Vas-y ! (નીચ /a-i/ સ્વર અથડામણ ટાળવા માટે 's' ઉમેરે છે)"
          },
          {
            "pattern": "Near future placement",
            "note": "Je vais Y aller (અનંતની સામે જ બેસે છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: પૂર્વનિર્ધારણ તપાસો",
            "question": "શું શબ્દસમૂહ à, en, dans, sur, sous, અથવા chez દ્વારા રજૂ કરવામાં આવ્યો છે?",
            "action": "જો હા ➔ Y માટે ઉમેદવાર"
          },
          {
            "step": "પગલું 2: શું તે વ્યક્તિ છે?",
            "question": "શું વાક્ય માનવીનો સંદર્ભ આપે છે?",
            "action": "જો હા ➔ Y નો ઉપયોગ કરશો નહીં! à lui / à elle નો ઉપયોગ કરો. જો ના ➔ પગલું 3 પર આગળ વધો"
          },
          {
            "step": "પગલું 3: શું તે સ્થળ છે કે વસ્તુ?",
            "question": "શું તે સ્થાન છે કે અમૂર્ત ખ્યાલ (à mon travail, à mon avenir)?",
            "action": "આખા શબ્દસમૂહને Y વડે બદલો"
          },
          {
            "step": "પગલું 4: ક્રિયાપદ પહેલાં મૂકો",
            "question": "તે ક્યાં બેસે છે?",
            "action": "સંયુક્ત ક્રિયાપદ પહેલા (અથવા અનંત પહેલા)"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "કન્ડિશનલ એસેમ્બલી ફોર્મ્યુલા",
            "meaning": "હાઇબ્રિડ ટેન્શન: અસ્પષ્ટ અવાજ સાથે ફ્યુચર બોડીનો ઉપયોગ કરે છે!",
            "example": "aimer ➔ સ્ટેમ aimer- + -ais ➔ J'aimerais · être ➔ સ્ટેમ સેર- + -ait ➔ Il serait"
          },
          {
            "name": "યુનિવર્સલ પોલીટનેસ ફોર્મ્યુલા",
            "meaning": "દુકાનો, રેસ્ટોરાં અને વ્યાવસાયિક સેટિંગ્સમાં માંગને નરમ પાડે છે",
            "example": "Je veux un café (અસંસ્કારી) ➔ Je VOUDRAIS un café (નમ્ર)"
          },
          {
            "name": "બીજી શરતી 'Si' ફોર્મ્યુલા",
            "meaning": "કાલ્પનિક અવાસ્તવિક સ્થિતિ ('જો મારી પાસે હોત... હું હોત...')",
            "example": "Si j'avais de l'argent, j'achèterais une maison"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "કાફે, બેકરી, ગ્રાહક સેવામાં આવશ્યક નમ્રતા સૂત્ર"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "નમ્ર વિનંતીઓ: શું તમે / તમારી પાસે હશે?"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "સલાહ આપવી: જો હું તું હોત, તો હું..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "તમારા જૂતામાં, હું કરીશ ..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su (Les 'si' n'aiment pas les 'rais'!)"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "ફ્યુચર: જે પાર્લેરાઈ (/e/ બંધ) વિ કન્ડિશનલ: જે પાર્લેરાઈસ (/ɛ/ ઓપન)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "aur- (avoir), ser- (être), ir- (aller), fer- (faire), pourr- (pouvoir), devr- (devoir)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: હેતુ તપાસો (નમ્ર અથવા અનુમાનિત)",
            "question": "શું તમે ખોરાકનો ઓર્ડર આપી રહ્યાં છો, વિનંતી કરી રહ્યાં છો અથવા 'શું હોય તો'ની કલ્પના કરી રહ્યાં છો?",
            "action": "કન્ડિશનલ પ્રેઝન્ટનો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: ભાવિ સ્ટેમ મેળવો",
            "question": "ઇન્ફિનિટીવ (અથવા અનિયમિત -R સ્ટેમ) લો",
            "action": "voudr-, aimer-, pourr-, ser-"
          },
          {
            "step": "પગલું 3: અસ્પષ્ટ અંત જોડો",
            "question": "વિષય સાથે મેળ",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          },
          {
            "step": "પગલું 4: 'Si' કલમ તપાસો",
            "question": "શું વાક્ય 'Si' થી શરૂ થાય છે?",
            "action": "IMPARFAIT માં 'si' પછી ક્રિયાપદ બરાબર છે તેની ખાતરી કરો!"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "Gérondif રચના ફોર્મ્યુલા",
            "meaning": "વર્તમાન 'નોસ' સ્ટેમને બહાર કાઢો, પૂર્વનિર્ધારણ 'en' અને પ્રત્યય '-ant' ઉમેરો",
            "example": "પાર્લર ➔ નૌસ પાર્લોન્સ ➔ EN PARLANT · ફેરે ➔ નૌસ ફેઈસોન્સ ➔ EN FAISANT"
          },
          {
            "name": "એક સાથે ક્રિયાઓનું સૂત્ર",
            "meaning": "બંને ક્રિયાઓ એક જ સમયે ચોક્કસ સમાન વિષય દ્વારા થવી જોઈએ",
            "example": "Il écoute de la musique en étudiant (તે અભ્યાસ કરતી વખતે સંગીત સાંભળે છે)"
          },
          {
            "name": "રીત અને અર્થ સૂત્ર",
            "meaning": "પરિણામ કેવી રીતે પ્રાપ્ત થયું તે સમજાવે છે",
            "example": "C'est en forgeant qu'on devient forgeron · On apprend en faisant des erreurs"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "ફ્રેન્ચ ગેરોન્ડિફનું સહી માર્કર"
          },
          {
            "word": "Tout en + -ant",
            "rule": "કોન્ટ્રાસ્ટ અથવા કડક એકરૂપતા પર ભાર મૂકે છે (રડતી વખતે તે હસ્યો)"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "રોજિંદા જીવનમાં સામાન્ય ગેરોન્ડિફ અભિવ્યક્તિઓ"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "જે વ્યક્તિ મુખ્ય ક્રિયાપદ કરી રહી છે તે જ જૉરોન્ડિફ ક્રિયા કરી રહી છે!"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en ayant | savoir ➔ en sachant"
          },
          {
            "pattern": "Invariable",
            "note": "ગેરોન્ડિફ ક્યારેય -e અથવા -s લેતું નથી (હંમેશા -એન્ટમાં સમાપ્ત થાય છે)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: એકરૂપતા અથવા રીત તપાસો",
            "question": "શું બે ક્રિયાઓ એકસાથે થઈ રહી છે, અથવા તમે 'કેવી રીતે' જવાબ આપો છો?",
            "action": "Le Gérondif નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: વર્તમાનમાં સંયુક્ત નૌસ",
            "question": "ક્રિયાપદનું વર્તમાન 'નુસ' સ્વરૂપ શું છે?",
            "action": "nous prenons, nous marchons, nous finissons"
          },
          {
            "step": "પગલું 3: સ્ટ્રીપ -ONS અને ઉમેરો -ANT",
            "question": "-ons ને -ant થી બદલો",
            "action": "પૂર્વવર્તી, માર્ચન્ટ, ફિનિસન્ટ"
          },
          {
            "step": "પગલું 4: આગળ 'EN'",
            "question": "પૂર્વનિર્ધારણ 'en' ઉમેરો",
            "action": "en prenant, en marchant, en finissant"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "Passé તાજેતરના હકારાત્મક ફોર્મ્યુલા",
            "meaning": "થોડી ક્ષણો પહેલા પૂર્ણ થયેલી ક્રિયાઓ માટે વપરાય છે (અંગ્રેજી: Just did something)",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "ડી એલિઝન કાયદો",
            "meaning": "સ્વર-પ્રારંભિક ક્રિયાપદો પહેલાં ફરજિયાત સંકોચન",
            "example": "Il vient D'arriver · Elle vient D'entendre"
          },
          {
            "name": "Pronominal Passé Recent Formula",
            "meaning": "સર્વનામ વિષય સાથે મેળ ખાય છે પરંતુ અનંતને આલિંગન આપે છે",
            "example": "Je viens de ME réveiller · Ils viennent de SE marier"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "ટ્રિગર: માત્ર આ ખૂબ જ સેકન્ડ"
          },
          {
            "word": "Tout juste",
            "rule": "ટ્રિગર: માંડ માંડ / તાજી રીતે પૂર્ણ"
          },
          {
            "word": "Il y a une minute",
            "rule": "ટ્રિગર: એક મિનિટ પહેલા"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "વેનીરનું વર્તમાન જોડાણ"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ Je viens ગમાણ (એટલે કે હું ખાવા આવ્યો છું) ➔ ✓ Je viens DE ગમાણ (મેં હમણાં જ ખાધું)"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je viens de LE voir (સર્વનામ અનંત ક્રિયાપદની બરાબર પહેલાં બેસે છે)"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "Je venais de partir quand il a sonné (તેણે ફોન કર્યો ત્યારે હું હમણાં જ ગયો હતો)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: સમય તપાસો",
            "question": "શું ક્રિયા સેકન્ડ કે મિનિટ પહેલા થઈ હતી ('માત્ર કર્યું')?",
            "action": "Passé Recent નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: વેનિરનું જોડાણ",
            "question": "વિષય કોણ છે?",
            "action": "viens, viens, vient, venons, venez, viennent"
          },
          {
            "step": "પગલું 3: DE અથવા D' ઉમેરો",
            "question": "શું આગામી ક્રિયાપદ સ્વરથી શરૂ થાય છે?",
            "action": "સ્વરો/ક પહેલાં D નો ઉપયોગ કરો; વ્યંજનો પહેલાં DE"
          },
          {
            "step": "પગલું 4: એક્શન ઇન્ફિનિટીવ જોડો",
            "question": "મુખ્ય ક્રિયાપદને અનંતમાં રાખો",
            "action": "Je viens de finir mon café"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "સંપૂર્ણ કાલક્રમિક સમયરેખા ફોર્મ્યુલા",
            "meaning": "5 પ્રાથમિક કાર્યકાળ વાસ્તવિકતાની કાલક્રમિક સમયરેખા સાથે રચાયેલ છે",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "સ્પોકન ફ્રેન્ચ કન્જુગેશન ટ્રાયમવિરેટ",
            "meaning": "રોજિંદા વાર્તાલાપના 95% ફ્રેન્ચ બોલવા માટે પહેલા આ ત્રણ સમયને માસ્ટર કરો",
            "example": "J'ai parle ➔ Je parle ➔ Je Vais parler"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "પાસ કમ્પોઝ (પોઇન્ટ-ઇન-ટાઇમ) અથવા ઇમ્પારફાઇટ (ચાલુ પૃષ્ઠભૂમિ)"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "પ્રેઝન્ટ ડી લ'ઇન્ડિકેટિફ"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "ફ્યુચર પ્રોચે (વાતચીત) અથવા ફ્યુચર સિમ્પલ (ઔપચારિક/લેખિત)"
          }
        ],
        "patterns": [
          {
            "pattern": "Auxiliary tenses rely on Infinitives",
            "note": "Passé Récent = venir + de + INF · Futur Proche = aller + INF"
          },
          {
            "pattern": "Compound tenses rely on Participles",
            "note": "પાસ કંપોઝ = avoir/être + PARTICIPLE"
          },
          {
            "pattern": "Stem tenses rely on Endings",
            "note": "પ્રેઝન્ટ = સ્ટેમ+એન્ડિંગ્સ · ઇમ્પારફાઇટ = નોસ-સ્ટેમ+એન્ડિંગ્સ · ફ્યુચર સિમ્પલ = ઇન્ફ+ એન્ડિંગ્સ"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: સમય એન્કર શોધો",
            "question": "ક્રિયા ભૂતકાળ, વર્તમાન કે ભવિષ્ય છે?",
            "action": "કાલક્રમિક ધરી પર નિર્દેશ કરો"
          },
          {
            "step": "પગલું 2: નોંધણી પસંદ કરો (બોલાયેલ વિ ઔપચારિક)",
            "question": "તે કેઝ્યુઅલ વાતચીત છે કે ઔપચારિક લેખન?",
            "action": "સ્પોકન ➔ Futur Proche (vais faire) · ઔપચારિક ➔ Futur Simple (ferai)"
          },
          {
            "step": "પગલું 3: પાસ્ટ એક્શન ફિલ્ટર",
            "question": "શું તે અચાનક બનેલી ઘટના છે કે કોઈ દ્રશ્ય/આદત?",
            "action": "ઇવેન્ટ ➔ પાસ કંપોઝ · આદત/સેટિંગ ➔ અયોગ્ય"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS ફોર્મ્યુલા (ભૂતકાળથી વર્તમાનમાં ચાલુ)",
            "meaning": "ભૂતકાળમાં શરૂ થયું અને અત્યારે પણ ચાલુ છે (ફ્રેન્ચ વર્તમાનકાળનો ઉપયોગ કરે છે!)",
            "example": "J'habite à Montréal DEPUIS deux ans (હું અહીં 2 વર્ષથી રહું છું અને હજુ પણ રહું છું!)"
          },
          {
            "name": "IL Y A ફોર્મ્યુલા (ભૂતકાળમાં પૂર્ણ બિંદુ)",
            "meaning": "ભૂતકાળમાં એક પૂર્ણ થયેલ ક્ષણ તરફ નિર્દેશ કરે છે (અંગ્રેજી: AGO)",
            "example": "IL Y A dix મિનિટની પાર્ટી છે (ટ્રેન 10 મિનિટ પહેલા નીકળી હતી)"
          },
          {
            "name": "DANS ફોર્મ્યુલા (ભવિષ્ય માટે કાઉન્ટડાઉન)",
            "meaning": "ભાવિ ક્રિયા ક્યારે શરૂ થશે તેની ગણતરી કરે છે (અંગ્રેજી: IN)",
            "example": "લે કોર્સ શરૂ થાય છે DANS cinq મિનિટ (ક્લાસ 5 મિનિટમાં શરૂ થાય છે)"
          },
          {
            "name": "પેન્ડન્ટ ફોર્મ્યુલા (બંધ પૂર્ણ અવધિ)",
            "meaning": "સ્પષ્ટ શરૂઆત અને સમાપ્તિ છે; ક્રિયા પૂર્ણ થઈ ગઈ છે (અંગ્રેજી: FOR / DURING)",
            "example": "J'ai dormi PENDANT huit heures (હું 8 કલાક સૂઈ ગયો — હવે જાગ્યો)"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "હજુ પણ થઈ રહ્યું છે ➔ વર્તમાનકાળ લેવો જોઈએ"
          },
          {
            "word": "Il y a",
            "rule": "સમય પહેલા ➔ ભૂતકાળનો સમય લેવો જોઈએ"
          },
          {
            "word": "Dans",
            "rule": "ફ્યુચર કાઉન્ટડાઉન ➔ ભવિષ્યનો સમય લેવો જોઈએ"
          },
          {
            "word": "Pendant",
            "rule": "પૂર્ણ સમયનો બંધ બ્લોક ➔ સામાન્ય રીતે પાસ કમ્પોઝ"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ J'ai habité ici depuis 1 an ➔ ✓ J'habite ici depuis 1 an"
          },
          {
            "pattern": "Dans vs En",
            "note": "ડેન્સ 1h = હવેથી 1 કલાક શરૂ થાય છે (કાઉન્ટડાઉન) · En 1h = પૂર્ણ થવામાં 1 કલાક લાગે છે (ગતિ)"
          },
          {
            "pattern": "Pour with time",
            "note": "ભાવિ આયોજિત સમયગાળા માટે સખત રીતે: Je pars pour deux semaines"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: શું ક્રિયા હજુ પણ થઈ રહી છે?",
            "question": "શું તે ભૂતકાળમાં શરૂ થયું હતું અને વર્તમાનમાં ચાલુ રહ્યું છે?",
            "action": "જો હા ➔ DEPUIS (+ વર્તમાનકાળ)"
          },
          {
            "step": "પગલું 2: શું તે ભવિષ્યમાં કોઈ ક્રિયા છે?",
            "question": "શું તમે તે ક્યારે શરૂ થાય છે તેની ગણતરી કરી રહ્યાં છો?",
            "action": "જો હા ➔ DANS (+ ભવિષ્યકાળ)"
          },
          {
            "step": "પગલું 3: શું તે ભૂતકાળની ક્રિયા પૂર્ણ થઈ ગઈ છે?",
            "question": "શું તે 'X સમય પહેલા' થયું હતું?",
            "action": "જો હા ➔ IL Y A (+ Passé Composé)"
          },
          {
            "step": "પગલું 4: શું તે બંધ, માપેલ સમયગાળો છે?",
            "question": "શું તે પ્રારંભ અને સમાપ્તિ સાથે સમયના પૂર્ણ બ્લોકનું વર્ણન કરે છે?",
            "action": "જો હા ➔ પેન્ડન્ટ"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "ઐતિહાસિક સેટિંગ વિ એક્શન ફોર્મ્યુલા",
            "meaning": "ઈતિહાસના વર્ણનો ઈમ્પારફાઈટ સાથે સ્ટેજ સેટ કરે છે, પછી પાસે કમ્પોઝ સાથે આગળની ઘટનાક્રમ",
            "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey a fondé Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "ઐતિહાસિક તારીખ પૂર્વનિર્ધારણ ફોર્મ્યુલા",
            "meaning": "ઐતિહાસિક ટાઈમકીપિંગ માટે પૂર્વનિર્ધારણ",
            "example": "En 1642 · Au XVIIe siècle · Le 17 mai 1642"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "ચોક્કસ કેલેન્ડર વર્ષ ટ્રિગર ➔ પાયાની ઘટનાઓ માટે પાસ કમ્પોઝ"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "ઐતિહાસિક પૃષ્ઠભૂમિ ટ્રિગર ➔ અસ્પષ્ટ"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "1701 ની મુખ્ય શાંતિ સંધિ કેલિઅર દ્વારા હસ્તાક્ષર કરવામાં આવી હતી"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "'siècle' સાથે રોમન અંકોનો ઉપયોગ કરો: au XXIe siècle (21મી સદી)"
          },
          {
            "pattern": "Historical Present",
            "note": "ઇતિહાસ ઘણીવાર આબેહૂબ વાર્તા કહેવા માટે વર્તમાન સમયનો ઉપયોગ કરે છે (En 1642, il fonde...)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: શું તે તે યુગમાં જીવનની પરિસ્થિતિઓનું વર્ણન કરે છે?",
            "question": "રહેવાની પરિસ્થિતિઓ, દૃશ્યાવલિ, પરંપરાઓ?",
            "action": "IMPARFAIT (Ils chassaient, vivaient) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 2: શું તે ચોક્કસ વળાંક, યુદ્ધ અથવા સંધિ છે?",
            "question": "શું તે શરૂઆત અને સમાપ્તિ સાથે ચોક્કસ તારીખે થયું હતું?",
            "action": "PASSÉ COMPOSÉ (Il a fondé, ils ont signé) નો ઉપયોગ કરો"
          },
          {
            "step": "પગલું 3: તારીખ ફોર્મેટ તપાસો",
            "question": "શું તે માત્ર એક વર્ષ, સદી કે દિવસ છે?",
            "action": "એન [વર્ષ], ઓ [સદી], લે [દિવસ મહિનો વર્ષ]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "મૂવી કેમેરા વિ ફ્લેશ સ્નેપશોટ ફોર્મ્યુલા",
            "meaning": "Imparfait સ્ટેજ સેટ કરે છે (હવામાન, લાગણીઓ, 'કરતી હતી'); Pasé Composé વિક્ષેપ અથવા માઇલસ્ટોનને ટ્રિગર કરે છે",
            "example": "Il pleuvait (Imparfait: દ્રશ્ય) quand soudain la foudre a frappé (Passé Compose: સ્નેપશોટ)"
          },
          {
            "name": "વિક્ષેપિત ક્રિયા ફોર્મ્યુલા",
            "meaning": "જે સતત ક્રિયા ચાલુ હતી તે સમયાંતરે થતી ઘટના દ્વારા વિક્ષેપિત થાય છે",
            "example": "Je dormais (ઊંઘમાં હતો) quand le réveil A SONNÉ (રંગ)"
          },
          {
            "name": "કાચંડો ક્રિયાપદો ફોર્મ્યુલા",
            "meaning": "મનની સ્થિતિ અને અચાનક અનુભૂતિ વચ્ચે અમુક ક્રિયાપદોનો અર્થ બદલાય છે",
            "example": "જે સવાઈસ નાગર (ક્ષમતા) વિ જાઈ સુ લા નૌવેલ (ઘટના)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "હંમેશા અસ્પષ્ટ: જ્યારે કંઈક ચાલી રહ્યું હતું"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "હંમેશા પાસ કમ્પોઝ: અચાનક એક ઘટના બની"
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "હંમેશા અશુદ્ધ: વારંવાર રીઢો દિનચર્યાઓ"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "પાસે કંપોઝ: અલગ પૂર્ણ પ્રસંગ"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "કરી રહ્યો હતો = Imparfait · કર્યું = Passé Composé"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "J'avais peur, il faisait froid, elle était triste ➔ હંમેશા Imparfait"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "Je me suis levé, j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: પૂછો 'શું દ્રશ્ય હતું?'",
            "question": "શું તે પૃષ્ઠભૂમિ હવામાન, વાતાવરણ, લાગણીઓ અથવા ચાલુ ટેવોનું વર્ણન કરે છે?",
            "action": "જો હા ➔ અસ્પષ્ટ (વિડિયો કેમેરા રોલિંગ)"
          },
          {
            "step": "પગલું 2: પૂછો 'પછી શું થયું?'",
            "question": "શું તે કોઈ ચોક્કસ, પૂર્ણ થયેલી ક્રિયા છે જે વાર્તાને આગળ ધપાવે છે?",
            "action": "જો હા ➔ પાસ કંપોઝ (ફોટો સ્નેપશોટ BAM!)"
          },
          {
            "step": "પગલું 3: વિક્ષેપ માટે તપાસો",
            "question": "શું એક ક્રિયા બીજી ક્રિયામાં વિક્ષેપ પાડે છે?",
            "action": "પૃષ્ઠભૂમિ = Imparfait · વિક્ષેપ = Passé Composé"
          },
          {
            "step": "પગલું 4: ટ્રિગર શબ્દો તપાસો",
            "question": "'પેન્ડન્ટ ક્વે' (ઇમ્પારફાઇટ) અથવા 'સાઉડેન' (પાસે કંપોઝ) માટે જુઓ",
            "action": "તમારી તંગ પસંદગીને લૉક કરો"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE સ્ત્રીની પ્રત્યય સૂત્ર",
            "meaning": "-eux માં સમાપ્ત થતા લગભગ તમામ પાત્ર વિશેષણો સ્ત્રીલિંગમાં -euse માં શિફ્ટ થાય છે",
            "example": "généreux ➔ généreuse · courageux ➔ courageuse · paresseux ➔ paresseuse"
          },
          {
            "name": "-IF ➔ -IVE સ્ત્રીની પ્રત્યય સૂત્ર",
            "meaning": "વૉઇસિંગ /f/ થી વૉઇસ્ડ /v/ માં શિફ્ટ",
            "example": "રચનાત્મક ➔ સર્જનાત્મક · સક્રિય ➔ સક્રિય · સચેત ➔ સચેત"
          },
          {
            "name": "-EL / -ON ડબલ વ્યંજન ફોર્મ્યુલા",
            "meaning": "-e ઉમેરતા પહેલા અંતિમ વ્યંજનને બમણું કરે છે",
            "example": "નેચરલ ➔ નેચરલ · બોન ➔ બોન · મીમી ➔ મિગ્નોન"
          },
          {
            "name": "અચલ વિશેષણ પ્રત્યય -E",
            "meaning": "જો પુરૂષવાચી પહેલાથી જ ઉચ્ચારણ વગરના -e માં સમાપ્ત થાય તો કોઈ ફેરફારની જરૂર નથી",
            "example": "શાંત (M) ➔ શાંત (F) · ટાઇમાઇડ (M) ➔ ટાઇમાઇડ (F) · મિલનસાર (M) ➔ મિલનસાર (F)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "હૂંફાળું / આવકારદાયક વ્યક્તિત્વ (ક્વિબેકમાં ખૂબ જ સામાન્ય)"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "ઉદાર લક્ષણ"
          },
          {
            "word": "Franc / Franche",
            "rule": "સીધુ, સીધું (અનિયમિત સ્ત્રીની -che)"
          },
          {
            "word": "Doux / Douce",
            "rule": "સૌમ્ય, મીઠી (અનિયમિત સ્ત્રીની -ce)"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "બાવર્ડ (/bavaʁ/) ➔ બાવર્ડ (/bavaʁd/): 'd' સાંભળી શકાય તેવું બને છે!"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "પ્રલોભક ➔ séductrice, créateur ➔ créatrice"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "loyal ➔ loyale (fem), loyaux (masc બહુવચન)"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: પુરૂષવાચી અંત તપાસો",
            "question": "શું આધાર વિશેષણ -e માં સમાપ્ત થાય છે?",
            "action": "જો હા ➔ અચળ (શાંત, ડરપોક, સહાનુભૂતિ)"
          },
          {
            "step": "પગલું 2: શું તે -eux માં સમાપ્ત થાય છે?",
            "question": "શું પુરૂષવાચી પ્રત્યય -eux છે?",
            "action": "-euse માં રૂપાંતરિત કરો (généreuse, sérieuse)"
          },
          {
            "step": "પગલું 3: શું તે -if માં સમાપ્ત થાય છે?",
            "question": "શું પુરૂષવાચી પ્રત્યય -if છે?",
            "action": "-ive માં રૂપાંતરિત (સર્જનાત્મક, સચેત)"
          },
          {
            "step": "પગલું 4: નિયમિત વ્યંજન સમાપ્ત",
            "question": "શું તે -t, -d, અથવા -s માં સમાપ્ત થાય છે?",
            "action": "ઉમેરો -e અને અંતિમ વ્યંજન જાગૃત કરો (જેન્ટિલ ➔ જેન્ટિલ, બુદ્ધિશાળી ➔ બુદ્ધિશાળી)"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "વ્યાકરણ રીટેન્શન સમીકરણ",
            "meaning": "ફ્રેન્ચ વ્યાકરણ માર્ગદર્શિકા ડિઝાઇનને આધાર આપતા શિક્ષણશાસ્ત્રના સ્તંભો",
            "example": "સૂત્રો (તાર્કિક સ્પષ્ટતા) + માન્યતા બેજેસ (પેટર્ન ઓળખ) + SVG આકૃતિઓ (માનસિક મોડલ)"
          },
          {
            "name": "સતત શીખવાનું ચક્ર",
            "meaning": "પ્રારંભિક A1 થી મધ્યવર્તી B1 ક્વિબેક ફ્લુએન્સી સુધીની સ્વાયત્ત પ્રગતિ પાઇપલાઇન",
            "example": "અંતર પુનરાવર્તિત અંતરાલો 1, 3 અને 7 દિવસમાં નિયત વસ્તુઓનું શેડ્યૂલ કરે છે"
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "દરેક એક વિષય માટે ગાણિતિક-શૈલીના વ્યાકરણના સૂત્રો"
          },
          {
            "word": "Pattern Recognition",
            "rule": "નિયમોને તાત્કાલિક શોધવા માટે શબ્દ ટ્રિગર્સ અને અંતિમ પેટર્ન"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "વ્યાકરણના નિષ્કર્ષ પર કેવી રીતે પહોંચવું તે સમજાવતા પગલું-દર-પગલાં તર્કશાસ્ત્રના માર્ગો"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "દરેક વિષયના કાર્ડમાં એમ્બેડેડ વિઝ્યુઅલ ચિત્રો"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "અનુકૂલનશીલ સ્પર્શેન્દ્રિય વિઝ્યુઅલ ડિઝાઇન ડીપ ફોકસ માટે તૈયાર કરવામાં આવી છે"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "PWA સર્વિસ વર્કર સબવે અભ્યાસ માટે તમામ 30 મોડ્યુલોને કેશ કરે છે"
          },
          {
            "pattern": "Multi-language translations",
            "note": "7 મૂળ ભાષાઓમાં વ્યાપક સમર્થન"
          }
        ],
        "decisionSteps": [
          {
            "step": "પગલું 1: વ્યાકરણ વિષય પસંદ કરો",
            "question": "અભ્યાસક્રમના 30 વિભાગોમાંથી કોઈપણ પસંદ કરો",
            "action": "મુખ્ય સૂત્રો અને માન્યતા ટ્રિગર્સની સમીક્ષા કરો"
          },
          {
            "step": "પગલું 2: વિઝ્યુઅલ ડાયાગ્રામનું નિરીક્ષણ કરો",
            "question": "સંદર્ભથી વ્યાકરણના નિષ્કર્ષ સુધી નિર્ણયો કેવી રીતે આગળ વધે છે તે શોધો",
            "action": "SVG ફ્લો નોડ્સને અનુસરો"
          },
          {
            "step": "પગલું 3: ઇન્ટરેક્ટિવ બ્લોક્સની પ્રેક્ટિસ કરો",
            "question": "વિજેટ્સ અને જોડાણ કોષ્ટકો સાથે જ્ઞાનનું પરીક્ષણ કરો",
            "action": "તાત્કાલિક શ્રાવ્ય અને દ્રશ્ય પ્રતિસાદ"
          },
          {
            "step": "પગલું 4: SRS સાથે જાળવી રાખો",
            "question": "અવકાશવાળી પુનરાવર્તન કતારમાં આઇટમ્સની સમીક્ષા કરો",
            "action": "લાંબા ગાળાની યાદમાં સિમેન્ટ મેમરી"
          }
        ]
      }
    }
  },
  "hi": {
    "ui": {
      "hub_title": "सूत्र, शब्द ट्रिगर और दृश्य तर्क",
      "hub_subtitle": "एक नज़र में पैटर्न पहचानें • समझें कि व्याकरण के निष्कर्ष तक कैसे पहुँचा जाता है",
      "hub_sec_formulas": "व्याकरण के सूत्र",
      "hub_sec_triggers": "शब्दों और पैटर्न से कैसे पहचानें",
      "hub_sec_signals": "संकेत और ट्रिगर शब्द",
      "hub_sec_patterns": "शब्द अंत और रूप नियम",
      "hub_sec_path": "निदानात्मक निर्णय पथ — निष्कर्ष तक कैसे पहुँचें",
      "hub_sec_diagram": "दृश्य तर्क आरेख"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "निश्चित अनुच्छेद सूत्र",
            "meaning": "विशिष्ट ज्ञात इकाई या सार्वभौमिक अवधारणा (अंग्रेज़ी: THE)",
            "example": "जैमे ले कैफ़े (अवधारणा) · रेगार्डे ले ट्रेन (विशिष्ट)"
          },
          {
            "name": "अनिश्चितकालीन अनुच्छेद सूत्र",
            "meaning": "गणनीय, गैर-विशिष्ट व्यक्तिगत इकाई (अंग्रेजी: ए / एएन / कुछ)",
            "example": "जाचेते अन रोमन · एले मांगे उने पोम्मे"
          },
          {
            "name": "आंशिक अनुच्छेद सूत्र",
            "meaning": "बेशुमार द्रव्यमान, किसी पदार्थ का भाग (अंग्रेज़ी: SOME/ANY)",
            "example": "जे बोइस डू कैफ़े · नूस वूलन्स डे ला माउटार्डे"
          },
          {
            "name": "सार्वभौम निषेध कानून",
            "meaning": "निषेध सभी मात्रा लेखों को DE/D' तक संक्षिप्त कर देता है (être को छोड़कर)",
            "example": "J'ai un chien ➔ Je n'ai PAS DE chien (कभी भी पस उन चिएन नहीं)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "हमेशा निश्चित लेख ट्रिगर करता है (ले, ला, लेस) - समग्र पसंद/नापसंद को व्यक्त करता है"
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "बेशुमार मात्रा लेते समय आंशिक लेख (डु, डे ला, डेस) ट्रिगर करता है"
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "शून्य मात्रा ट्रिगर: लेखों को DE/D' में बदल देता है"
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "मात्रा के क्रियाविशेषण हमेशा बिना किसी लेख के DE/D' लेते हैं (ब्यूकूप डे कैफ़े)"
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90%+ पुल्लिंग ➜ ले / अन / डु का प्रयोग करें"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90%+ स्त्रीलिंग ➜ ला / उने / डे ला का उपयोग करें"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "अनुबंध: ले/ला ➔ एल' · डु/डे ला ➔ डे एल'"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: संदर्भ की जाँच करें",
            "question": "क्या यह एक सामान्य प्राथमिकता या कोई विशिष्ट ज्ञात वस्तु है?",
            "action": "यदि हां ➔ निश्चित (ले / ला / एल' / लेस)"
          },
          {
            "step": "चरण 2: गणनाशीलता की जाँच करें",
            "question": "क्या आप अलग-अलग संपूर्ण इकाइयाँ (1, 2, 3 आइटम) गिन सकते हैं?",
            "action": "यदि हाँ ➔ अनिश्चितकालीन (un / une / des)"
          },
          {
            "step": "चरण 3: द्रव्यमान पदार्थ की जाँच करें",
            "question": "क्या यह एक बेशुमार तरल, द्रव्यमान या खाद्य पदार्थ है?",
            "action": "यदि हाँ ➔ आंशिक (डु / डे ला / डे एल')"
          },
          {
            "step": "चरण 4: निषेध फ़िल्टर",
            "question": "क्या मुख्य क्रिया नकारा है (ne...pas) और क्रिया être नहीं?",
            "action": "यदि हां ➔ लेख को तुरंत घटाकर DE/D' कर दें"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "संज्ञा बहुवचन सूत्र",
            "meaning": "मानक बहुवचन नियम (अंत -s फ़्रेंच में मौन है)",
            "example": "ले लिवर ➔ लेस लिवर · ला टेबल ➔ लेस टेबल"
          },
          {
            "name": "अनियमित बहुवचन-अल सूत्र",
            "meaning": "ड्रॉप -अल और अटैच -ऑक्स (उच्चारण /ओ/)",
            "example": "अन जर्नल ➔ डेस जर्नलक्स · अन एनिमल ➔ डेस एनिमैक्स"
          },
          {
            "name": "अपरिवर्तनीय बहुवचन सूत्र",
            "meaning": "पहले से ही सिबिलेंट में समाप्त होने वाली संज्ञाएं बहुवचन में नहीं बदलती हैं",
            "example": "अन पेज़ ➔ डेस पेज़ · यूने वोइक्स ➔ डेस वोइक्स · अन नेज़ ➔ डेस नेज़"
          }
        ],
        "triggers": [
          {
            "word": "Suffix -eau / -al",
            "rule": "-s के बजाय -x का बहुवचन करता है (des gâteaux, des cadeaux, des journaux)"
          },
          {
            "word": "Days, months, languages, seasons",
            "rule": "हमेशा मर्दाना (ले लुंडी, ले फ़्रांसीसी, लेटे, ले प्रिंटेम्प्स)"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "हमेशा स्त्रैण (ला चिमी, ला फिजिक, ला पॉलिटिक)"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "हमेशा मर्दाना (ले किलोमीटर, ले नॉर्ड, ल'उएस्ट)"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-मेंट (ले गवर्नमेंट), -इस्मे (ले कैपिटलिज्म), -एज (ले वॉयेज), -ओइर (ले मिरोइर), -टेउर (ले डायरेक्टोअर)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-टियन / -सियन (ला नेशन), -टे (ला लिबर्टे), -यूरे (ला वोइचर), -एन्स / -एन्स (ला साइंस), -एट (ला साइकिलेट)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "ला प्लेज, ला केज, ला पेज (-उम्र लेकिन स्त्रीलिंग!) · ले साइलेंस, ले स्क्वेलेट (-सीई/-ते लेकिन पुल्लिंग!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: शब्द के अंत की जाँच करें",
            "question": "क्या शब्द -ment, -age, -isme, या -oir में समाप्त होता है?",
            "action": "यदि हाँ ➔ पुल्लिंग निर्दिष्ट करें (90%+ संभावना)"
          },
          {
            "step": "चरण 2: सार/राज्य प्रत्यय की जाँच करें",
            "question": "क्या शब्द -tion, -sion, -té, -ence, या -ure में समाप्त होता है?",
            "action": "यदि हाँ ➔ स्त्रीलिंग निर्दिष्ट करें (95%+ संभावना)"
          },
          {
            "step": "चरण 3: बहुवचन मार्कर की जाँच करें",
            "question": "क्या एकवचन का अंत -al, -eau, या -eu में होता है?",
            "action": "यदि हां ➔ -aux या -x से बहुवचन बनाएं"
          },
          {
            "step": "चरण 4: सिबिलेंट समाप्ति की जाँच करें",
            "question": "क्या यह -s, -x, या -z में ख़त्म होता है?",
            "action": "यदि हां ➔ समान वर्तनी बनाए रखें, लेख को लेस/डेस में बदलें"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "स्पोकन क्यूबेक बहुवचन सर्वनाम नियम",
            "meaning": "प्राकृतिक क्यूबेक फ़्रेंच में, 'ऑन' भाषण में 'नूस' को पूरी तरह से बदल देता है",
            "example": "Nous mangeons ➔ माँग पर (बहुत आसान संयुग्मन!)"
          },
          {
            "name": "स्पोकन क्यूबेक में तू एलिज़न",
            "meaning": "क्यूबेक स्पोकन रजिस्टरों में संवादात्मक संकुचन",
            "example": "तू यह अच्छा है ? ➔ यह अच्छा है ? · तू अस फैम? ➔ यह सच है ?"
          },
          {
            "name": "तृतीय व्यक्ति बहुवचन लिंग नियम",
            "meaning": "कोई भी समूह जिसमें कम से कम एक पुरुष हो, व्याकरणिक रूप से आईएलएस पर डिफॉल्ट करता है",
            "example": "मार्क और सोफी ➔ आईएलएस · सोफी, मैरी और क्लेयर ➔ एल्स"
          }
        ],
        "triggers": [
          {
            "word": "On",
            "rule": "व्याकरणिक रूप से एकवचन (आईएल/एले क्रिया रूप लेता है) लेकिन 'हम'/'हर कोई' को संदर्भित करता है"
          },
          {
            "word": "Vous",
            "rule": "दोहरा कार्य: बहुवचन 'आप सभी' या एकवचन औपचारिक/विनम्र 'आप'"
          },
          {
            "word": "Il vs Ce",
            "rule": "नंगे विशेषणों के साथ 'il' का प्रयोग करें (Il est tard); संशोधित संज्ञाओं के साथ 'c'est' का प्रयोग करें (C'est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "हमेशा स्वर/मौन h से पहले 'e' हटाता है (J'habite, J'aime, J'écoute)"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "जे'ए, जे'अराइव, टी'एएस, टी'एस (जेई के लिए अनिवार्य एलिजन, टीयू के लिए बोला गया)"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "हमेशा 'आईएल' को डमी विषय के रूप में उपयोग करता है: इल प्लुट, इल नेगे, इल इस्ट 3एच"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "'चालू' का प्रयोग करें: एन हिवर, ऑन पोर्टे अन मंटौ"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: दर्शकों की पहचान करें",
            "question": "क्या आप औपचारिक रूप से किसी एक व्यक्ति से बात कर रहे हैं या किसी समूह से?",
            "action": "VOUS का प्रयोग करें (औपचारिक या बहुवचन)"
          },
          {
            "step": "चरण 2: क्या आप 'हम' के बारे में बात कर रहे हैं?",
            "question": "क्या यह बोली जाने वाली या अनौपचारिक फ़्रेंच है?",
            "action": "चालू का प्रयोग करें (+ तीसरा व्यक्ति एकवचन क्रिया)"
          },
          {
            "step": "चरण 3: मिश्रित समूहों का विश्लेषण करें",
            "question": "क्या समूह में कम से कम 1 मर्दाना इकाई शामिल है?",
            "action": "ILS का उपयोग करें (केवल 100% सभी महिला समूह ELLES लेते हैं)"
          },
          {
            "step": "चरण 4: स्वर सीमा की जाँच करें",
            "question": "क्या अगली क्रिया स्वर से शुरू होती है?",
            "action": "अनुबंध जे ➔ जे'"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ईआर क्रिया नियमित फॉर्मूला",
            "meaning": "सभी फ्रांसीसी क्रियाओं में से 90% इसी सटीक समाप्ति क्रम का पालन करती हैं",
            "example": "पार्लर ➔ जे पार्ले, तू पार्ले, आईएल पार्ले, नूस पार्लंस, वौस पार्लेज़, आईएलएस पार्ले"
          },
          {
            "name": "-आईआर क्रिया नियमित (फिनिर) फॉर्मूला",
            "meaning": "समूह 2 की नियमित क्रियाएँ बहुवचन व्यक्तियों में -iss- infix सम्मिलित करती हैं",
            "example": "फ़िनिर ➔ जे फ़िनिस, तू फ़िनिस, आईएल फ़िनिट, नूस फ़िनिसंस, वौस फ़िनिसेज़, आईएलएस फ़िनिसेंट"
          },
          {
            "name": "साइलेंट 'बूट' एंडिंग्स रूल",
            "meaning": "केवल nous (-ons) और vous (-ez) ही मूल में ध्वनियुक्त शब्दांश जोड़ते हैं!",
            "example": "पार्ले, पार्ले, पार्लेंट सभी का उच्चारण समान रूप से किया जाता है: /paʁl/"
          }
        ],
        "triggers": [
          {
            "word": "Maintenant / En ce moment",
            "rule": "वर्तमान काल मार्कर (क्रिया वर्तमान में हो रही है)"
          },
          {
            "word": "Tous les jours / Chaque semaine",
            "rule": "वर्तमान काल अभ्यस्त मार्कर (नियमित दिनचर्या)"
          },
          {
            "word": "-ons ending",
            "rule": "ध्वनियुक्त /ɔ̃/ नासिका ध्वनि - सार्वभौमिक प्रथम व्यक्ति बहुवचन मार्कर"
          },
          {
            "word": "-ez ending",
            "rule": "ध्वनियुक्त /ई/ स्वर ध्वनि - सार्वभौमिक द्वितीय व्यक्ति बहुवचन मार्कर"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "-ent का उच्चारण कभी भी नासिका के रूप में न करें! आईएलएस पार्लेंट = /paʁl/, आईएलएस मैंजेंट = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "जेई/टीयू/आईएल/आईएलएस (बूट के अंदर) में स्टेम परिवर्तन, नूस/वौस में सामान्य स्थिति में लौटता है: एचेटर ➔ जे'एचेटे, नूस एचेटन"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "चरनी ➔ नूस मैंगोंन्स (नरम 'ज' ध्वनि को संरक्षित करने के लिए 'ई' रखें)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्रिया समूह को पहचानें",
            "question": "क्या इनफिनिटिव का अंत -er, -ir, या -re में होता है?",
            "action": "आधार तने को निकालने के लिए पट्टी का अंत"
          },
          {
            "step": "चरण 2: विषय का मिलान करें",
            "question": "कार्रवाई कौन कर रहा है (je,tu,il,nous,vous,ils)?",
            "action": "संगत अंतिम प्रत्यय का चयन करें"
          },
          {
            "step": "चरण 3: उच्चारण फ़िल्टर",
            "question": "क्या विषय 'बूट' (je/tu/il/ils) के अंदर है?",
            "action": "अंत को पूर्णतया मौन बनाये रखें! केवल तना सुनाई देता है"
          },
          {
            "step": "चरण 4: बहुवचन जाँच",
            "question": "क्या यह nous या vous है?",
            "action": "अंत का उच्चारण श्रव्य रूप से करें: -ons (/ɔ̃/) या -ez (/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "मानक वाक्य क्रम सूत्र",
            "meaning": "घोषणात्मक फ़्रेंच बुनियादी सकारात्मक वाक्यों के लिए अंग्रेजी क्रम का पालन करता है",
            "example": "एलेक्स (एस) मांगे (वी) उने पोमे (ओ)"
          },
          {
            "name": "नेगेशन सैंडविच फॉर्मूला",
            "meaning": "निषेध संयुग्मित क्रिया के चारों ओर रोटी के दो टुकड़ों की तरह लिपटा रहता है",
            "example": "जे ने पार्ले पास · एले नइमे पास ले ब्रुइट"
          },
          {
            "name": "प्रश्न निर्माण 3-स्तरीय",
            "meaning": "रजिस्टर के आधार पर कोई भी हाँ/नहीं प्रश्न पूछने के तीन तरीके",
            "example": "क्या आप जानते हैं? (आकस्मिक) · क्या आप चाहते हैं? (मानक) · वियन्स-तु ? (औपचारिक)"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "मानक निषेध (नहीं)"
          },
          {
            "word": "Ne ... jamais",
            "rule": "नकारात्मक आदत (कभी नहीं) - 'पस' की जगह लेती है"
          },
          {
            "word": "Ne ... plus",
            "rule": "नकारात्मक निरंतरता (अब नहीं / अब और नहीं) - 'पास' की जगह लेता है"
          },
          {
            "word": "Est-ce que",
            "rule": "सार्वभौमिक प्रश्न ओपनर: मानक एसवीओ शब्द क्रम को सुरक्षित रखता है"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ जे ने पस सैस ➔ ✓ जे ने पस सैस (क्रिया सैंडविच)"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "J'sais pas · Y vient pas (मौखिक फ़्रेंच में अत्यंत सामान्य)"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai, n'aime, n'écoute, n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: संयुग्मित क्रिया को पहचानें",
            "question": "प्राथमिक संयुग्मित क्रिया क्या है?",
            "action": "विषय को सीधे इसके सामने रखें"
          },
          {
            "step": "चरण 2: क्या आप नकार रहे हैं?",
            "question": "क्या आप अब और नहीं/कभी नहीं/नहीं कहना चाहते हैं?",
            "action": "क्रिया को सैंडविच करें: NE + क्रिया + PAS/JAMAIS/PLUS"
          },
          {
            "step": "चरण 3: क्या आप कोई प्रश्न पूछ रहे हैं?",
            "question": "आप किस रजिस्टर का उपयोग कर रहे हैं?",
            "action": "अनौपचारिक: इंटोनेशन (?) · मानक: एस्ट-सी क्यू... · औपचारिक: इनवर्ट वर्ब-सब्जेक्ट"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "विशेषण समझौता मैट्रिक्स फॉर्मूला",
            "meaning": "विशेषणों को लिंग और संख्या दोनों में उनकी संज्ञा से मेल खाना चाहिए",
            "example": "ग्रैंड (एम) · ग्रांडे (एफ) · ग्रैंड्स (एम.पी.एल.) · ग्रांडेस (एफ.पीएल)"
          },
          {
            "name": "बैग प्लेसमेंट कानून",
            "meaning": "BAGS को छोड़कर अधिकांश विशेषण संज्ञा के बाद आते हैं, जो आगे चलते हैं",
            "example": "अन ग्रैंड लिवर (बैग: आकार) बनाम अन लिवर रूज (रंग: संज्ञा के बाद)"
          },
          {
            "name": "ब्यू, नोव्यू, विएक्स के लिए स्वर स्विच",
            "meaning": "स्वर/ह से शुरू होने वाले पुल्लिंग संज्ञा से पहले विशेष पुल्लिंग रूप",
            "example": "ब्यू ➔ बेल · नोव्यू ➔ नोवेल · विएक्स ➔ विइल"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "ब्यू, जोली, ज्यून, विएक्स, बॉन, माउविस, ग्रैंड, पेटिट ➔ संज्ञा से पहले रखा गया"
          },
          {
            "word": "Colors & Shapes",
            "rule": "ब्लू, रूज, रोंड, कैरे ➔ संज्ञा के बाद रखा गया (यूने वोइचर रूज)"
          },
          {
            "word": "Nationalities",
            "rule": "कैनेडियन, फ़्रांसीसी, अमेरिकी ➔ संज्ञा के बाद रखा गया (अन कैफ़े क्यूबेकॉइस)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "कभी भी -s या -e न जोड़ें! (डेस चौसर्स मैरॉन)"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "ह्यूरेक्स ➔ ह्यूर्यूज़, क्यूरीक्स ➔ क्यूरीयूज़"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "एक्टिफ़ ➔ सक्रिय, क्रिएटिव ➔ क्रिएटिव, स्पोर्टिफ़ ➔ स्पोर्टिव"
          },
          {
            "pattern": "-el / -en ➜ -elle / -enne",
            "note": "नेचरल ➔ नेचरले, कैनेडियन ➔ कैनाडियन"
          },
          {
            "pattern": "-er ➜ -ère",
            "note": "प्रीमियर ➔ प्रीमियर, चेर ➔ चेरे"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: स्थिति की जाँच करें (बैग)",
            "question": "क्या यह सुंदरता, उम्र, अच्छाई या आकार है?",
            "action": "यदि हां ➔ संज्ञा से पहले लगाएं। अन्यथा ➔ संज्ञा के बाद रखें"
          },
          {
            "step": "चरण 2: संज्ञा के लिंग की जाँच करें",
            "question": "क्या संज्ञा स्त्रीलिंग है?",
            "action": "-e जोड़ें (या प्रत्यय बदलें: -eux ➔ -euse, -if ➔ -ive)"
          },
          {
            "step": "चरण 3: संज्ञा की संख्या की जाँच करें",
            "question": "क्या संज्ञा बहुवचन है?",
            "action": "-s जोड़ें (या -es यदि स्त्रीलिंग बहुवचन हो)"
          },
          {
            "step": "चरण 4: स्वर टकराव की जाँच करें",
            "question": "क्या यह पुल्लिंग स्वर संज्ञा से पहले beau/nouveau/vieux है?",
            "action": "बेल, नोवेल, विइल का प्रयोग करें"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "अनिवार्य 'à' संकुचन सूत्र",
            "meaning": "पूर्वसर्ग 'à' पुल्लिंग और बहुवचन निश्चित लेखों के साथ मेल खाता है",
            "example": "मैं एक जिम हूं (ए+ले) · मैं पार्ले ऑक्स एट्यूडिएंट्स (ए+लेस) हूं"
          },
          {
            "name": "अनिवार्य 'डी' संकुचन फॉर्मूला",
            "meaning": "पूर्वसर्ग 'डी' पुल्लिंग और बहुवचन निश्चित लेखों के साथ जुड़ता है",
            "example": "ले रिटौर डू रोई (डी+ले) · ला लिस्टे डेस इनविटेस (डी+लेस)"
          },
          {
            "name": "भौगोलिक पूर्वसर्ग सूत्र",
            "meaning": "स्थान पूर्वसर्ग गंतव्य के व्याकरणिक लिंग पर सख्ती से निर्भर करते हैं",
            "example": "À मॉन्ट्रियल, EN फ़्रांस, AU कनाडा, AUX एटैट्स-यूनिस"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "हमेशा à: à मॉन्ट्रियल, à क्यूबेक, à पेरिस, à टोरंटो (कोई लेख नहीं!)"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "-ई में समाप्त होता है ➜ स्त्रीलिंग: एन फ्रांस, एन कोलंबी, एन ओन्टारियो (स्वर से शुरू होता है)"
          },
          {
            "word": "AU + masculine country",
            "rule": "-ई में समाप्त नहीं होता: या कनाडा, या मेक्सिको, या जापान"
          },
          {
            "word": "Chez + person / professional",
            "rule": "इसका अर्थ है 'घर/कार्यालय पर': चेज़ मोई, चेज़ ले मेडेसीन, चेज़ जीन"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ आ ले रेस्तरां ➔ ✓ औ रेस्तरां · ❌ डे ले पार्क ➔ ✓ डू पार्क"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "ला फ़्रांस ➔ एन फ़्रांस, ला सुइस ➔ एन सुइस (अपवाद: ले मेक्सिक ➔ औ मेक्सिक)"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "क्यूबा, मेडागास्कर, हैती"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: गंतव्य प्रकार की जाँच करें",
            "question": "क्या यह एक शहर, एक देश या एक व्यक्ति है?",
            "action": "शहर ➔ À · व्यक्ति ➔ Chez · देश ➔ चरण 2 देखें"
          },
          {
            "step": "चरण 2: देश लिंग की जाँच करें",
            "question": "क्या देश का अंत -e से होता है या स्वर से शुरू होता है?",
            "action": "यदि हाँ ➔ EN (इटली, फ़्रांसीसी) · यदि नहीं ➔ AU (au कनाडा)"
          },
          {
            "step": "चरण 3: बहुवचन देशों की जाँच करें",
            "question": "क्या देश बहुवचन है (एटैट्स-यूनिस, पेज़-बास)?",
            "action": "AUX (aux États-Unis) का उपयोग करें"
          },
          {
            "step": "चरण 4: निश्चित आलेख संलयन की जाँच करें",
            "question": "क्या आप à/de को ले या लेस के साथ जोड़ रहे हैं?",
            "action": "अनुबंध: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "स्वामित्व समझौता फार्मूला",
            "meaning": "अधिकारवाचक विशेषण कब्जे वाली वस्तु से सहमत होते हैं, स्वामी से कभी नहीं!",
            "example": "उसकी कार = सा वॉयस (वॉयचर महिला है) · उसकी किताब = बेटा लिवर (लिवर मस्क है)"
          },
          {
            "name": "स्वर संघर्ष जीवनरक्षक नियम",
            "meaning": "स्वर से शुरू होने वाली स्त्रीलिंग संज्ञाएं ध्वन्यात्मक प्रवाह के लिए पुल्लिंग रूपों में बदल जाती हैं",
            "example": "❌ मा एमी ➔ ✓ मोन एमी · ❌ सा इकोले ➔ ✓ बेटा इकोले"
          },
          {
            "name": "प्रदर्शनवाचक विशेषण सूत्र",
            "meaning": "इसका मतलब यह या वह; Cet अजीब स्वर रुकने से बचता है",
            "example": "सीई लिवर · सीईटी होटल · सीईटी टेबल · सीईएस क्लेज़"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "स्वर से शुरू होने वाली पुल्लिंग संज्ञा या स्त्रीलिंग संज्ञा के लिए उपयोग किया जाता है"
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "व्यंजन से शुरू होने वाली स्त्रीवाचक संज्ञाओं के लिए सख्ती से उपयोग किया जाता है"
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "1 मालिक के लिए सार्वभौमिक बहुवचन स्वामित्व (लिंग की परवाह किए बिना)"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "एकाधिक स्वामियों के लिए एक ही कब्ज़ा (हमारा/आपका/उनका)"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "मोन अमी, बेटा आइडी, टन हिस्टायर (ध्वनि सहज, /ए-ए/ टकराव से बचें)"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "सेट होम, सेट अपार्टमेंट, सेट एट"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "बेटा लिवरे = उसकी किताब (1 मालिक); लेउर लिवरे = उनकी पुस्तक (बहु मालिक)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: कब्जे वाली वस्तु की पहचान करें",
            "question": "इसका लिंग और संख्या क्या है?",
            "action": "बहुवचन ➔ मेस/टेस/सेस/नोस/वोस/लेउर्स। एकवचन ➔ चरण 2 देखें"
          },
          {
            "step": "चरण 2: स्वर प्रारंभ की जाँच करें",
            "question": "क्या एकवचन संज्ञा स्वर या मौन h से शुरू होती है?",
            "action": "यदि हाँ ➔ mon/ton/son/cet का प्रयोग अवश्य करें (भले ही स्त्रीलिंग हो!)"
          },
          {
            "step": "चरण 3: स्वामी का मिलान करें",
            "question": "इसका मालिक कौन है (जेई, तू, आईएल/एले, नूस, वूस, आईएलएस)?",
            "action": "सही व्यक्ति की स्वामित्व वाली पंक्ति चुनें"
          },
          {
            "step": "चरण 4: प्रदर्शनात्मक फ़िल्टर",
            "question": "क्या आप 'इस/उस' की ओर इशारा कर रहे हैं?",
            "action": "सीई (एम) / सीईटी (एम+स्वर) / सीईटीई (एफ) / सीईएस (बहुवचन)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "फ़्रेंच 70 के दशक का बेस-60 गणित फॉर्मूला",
            "meaning": "फ़्रेंच संख्याएँ 70-79 60 के शीर्ष पर 10 से 19 तक गिनती करती हैं",
            "example": "71 = सोइक्सांटे-एट-ओंज़े · 77 = सोइक्सांटे-डिक्स-सेप्ट"
          },
          {
            "name": "फ़्रेंच 80 के दशक का बेस-20 गणित फॉर्मूला",
            "meaning": "विजेसिमल बेस-20 गणना सेल्टिक फ्रेंच से विरासत में मिली है",
            "example": "80 में एक -s (quatre-vingts) है, जब कोई संख्या आती है तो -s गिर जाता है (quatre-vingt-un)"
          },
          {
            "name": "फ्रेंच 90 के दशक का गणित फॉर्मूला",
            "meaning": "4 गुना 20 प्लस किशोर (10 से 19)",
            "example": "95 = क्वाट्रे-विंग्ट-क्विन्ज़ (4 × 20 + 15)"
          },
          {
            "name": "घड़ी का समय बताने का सूत्र",
            "meaning": "मानक फ़्रेंच घड़ी फॉर्मूला स्पष्ट रूप से 'ह्युरेस' का उपयोग करता है",
            "example": "इल इस्ट ट्रोइस ह्यूरेस एट क्वार्ट (3:15) · इल इस्ट मिडी एट डेमी (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "फ़्रांस और क्यूबेक में 70 (60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "फ़्रांस और क्यूबेक में 80 (4 x 20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "फ़्रांस और क्यूबेक में 90 (4 x 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "21, 31, 41, 51, 61, 71 (एट-अन) और हाफ पास्ट (एट डेमी) के लिए कनेक्टर्स"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = क्वात्रे-विंग्ट-अन (कोई 'एट' नहीं!), 91 = क्वात्रे-विंग्ट-ऑन्ज़ (कोई 'एट' नहीं!)"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "सभी यौगिक संख्या भागों को अब हाइफ़न किया जा सकता है: ड्यूक्स-सेंट-सिंक्वांटे"
          },
          {
            "pattern": "Half past agreement",
            "note": "उने ह्यूर एट डेमी (ह्यूरे के साथ महिला समझौता) बनाम मिडी एट डेमी (मास्क)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: डेसील की जाँच करें (70, 80, 90 के दशक)",
            "question": "क्या यह संख्या 70, 80 या 90 के दशक की है?",
            "action": "70 के दशक ➔ 60 + किशोर · 80 के दशक ➔ 4x20 + अंक · 90 के दशक ➔ 4x20 + किशोर"
          },
          {
            "step": "चरण 2: 1s कनेक्टर की जाँच करें",
            "question": "क्या यह 21, 31, 41, 51, 61, 71 है?",
            "action": "'et' जोड़ें: soixante-et-un. (81 और 91 'एट' नहीं लेते)"
          },
          {
            "step": "चरण 3: समय बताना",
            "question": "क्या आधा घंटा बीत गया?",
            "action": "'मोइन्स' का प्रयोग करें: 4:50 = 5 घंटे मोइन्स डिक्स"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "पासे कंपोज़ मास्टर फॉर्मूला",
            "meaning": "पूर्ण, एकबारगी घटनाओं के लिए मिश्रित अतीत",
            "example": "जय मांगे (एवॉयर) · जे सुइस पार्टि (एत्रे)"
          },
          {
            "name": "ÊTRE सहायक चयन फॉर्मूला",
            "meaning": "केवल गति/स्थिति-परिवर्तन और रिफ्लेक्सिव की विशिष्ट क्रियाओं में être का उपयोग किया जाता है",
            "example": "यह सब है · यह मेरे पास नहीं है"
          },
          {
            "name": "कृदंत निर्माण सूत्र",
            "meaning": "मानक नियमित कृदंत अंत",
            "example": "पार्लर ➜ पार्ले · फ़िनिर ➜ फ़िनी · अटेंड्रे ➜ अटेंडु"
          },
          {
            "name": "एत्रे समझौता कानून",
            "meaning": "स्त्रीलिंग के लिए -e, बहुवचन के लिए être के साथ -s जोड़ें",
            "example": "यह सब है · सब कुछ है · मेरा सब कुछ है"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "पिछला समय ट्रिगर: कल/पिछली रात"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "अचानक रुकावट ट्रिगर: हमेशा पास कंपोज़"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "विशिष्ट पृथक घटना ट्रिगर"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "डेवेनिर, रेवेनियर, मोन्टर, रेस्टर, सॉर्टिर, वेनिर, एलर, नैत्रे, डिसेंड्रे, एंटरर, रेंटरर, टॉम्बर, रिटर्नर, अराइवर, मौरिर, पार्टिर, पासर"
          }
        ],
        "patterns": [
          {
            "pattern": "Avoir has NO agreement with Subject",
            "note": "एले ए मांगे (नहीं -ई!), एले ए मंगे (नहीं -ई!)"
          },
          {
            "pattern": "Irregular participles to memorize",
            "note": "फेट (फेयर), प्रिस (प्रेंड्रे), वु (वॉयर), ईयू (एवोइर), एट (एत्रे), मिस (मेट्रे)"
          },
          {
            "pattern": "Reflexive agreement exception",
            "note": "एले एस'एस्ट लावे लेस मेन्स (कोई सहमति नहीं क्योंकि सीओडी 'लेस मेन्स' क्रिया के बाद है)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्या क्रिया प्रतिवर्ती (से...) है?",
            "question": "क्या क्रिया में से/एस है?",
            "action": "यदि हां ➔ औक्स ÊTRE है (और कृदंत विषय से सहमत है जब तक कि प्रत्यक्ष वस्तु अनुसरण नहीं करती है)"
          },
          {
            "step": "चरण 2: क्या यह डॉ. श्रीमती वेंडरट्रैम्प में है?",
            "question": "क्या यह 17 गति/स्थिति परिवर्तन क्रियाओं में से एक है?",
            "action": "यदि हां ➔ औक्स ÊTRE है (कृदंत विषय से सहमत है)"
          },
          {
            "step": "चरण 3: डिफ़ॉल्ट सहायक",
            "question": "अन्य सभी क्रियाएँ",
            "action": "AVOIR का उपयोग करें (कोई विषय समझौता नहीं)"
          },
          {
            "step": "चरण 4: कृदंत का निर्माण करें",
            "question": "नियमित तना या अनियमित रूप लगाएं",
            "action": "-er ➔ -é, -ir ➔ -i, -re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "प्रत्यक्ष वस्तु सर्वनाम (सीओडी) सूत्र",
            "meaning": "बिना किसी पूर्वसर्ग के प्रत्यक्ष वस्तुओं को प्रतिस्थापित करता है",
            "example": "जे वोइस मार्क ➔ जे ले वोइस · एले मांगे ला पोम्मे ➔ एले ला मांगे"
          },
          {
            "name": "अप्रत्यक्ष वस्तु सर्वनाम (सीओआई) सूत्र",
            "meaning": "'à + व्यक्ति' को प्रतिस्थापित करता है (उसे/उसे/उन्हें)",
            "example": "जे पार्ले ए मैरी ➔ जे लूइ पार्ले · जे टेलीफोन ए मेस पेरेंट्स ➔ जे लेउर टेलिफोन"
          },
          {
            "name": "वस्तु सर्वनाम प्लेसमेंट सूत्र",
            "meaning": "फ़्रांसीसी क्रिया के पहले वस्तुवाचक सर्वनाम लगाता है (अंग्रेजी के विपरीत)",
            "example": "मैं तुमसे प्यार करता हूँ ➔ जे तैइमे (जे ऐइमे तोई नहीं)"
          },
          {
            "name": "निकट भविष्य सर्वनाम प्लेसमेंट",
            "meaning": "सर्वनाम उस अनन्त क्रिया को गले लगाता है जिससे वह तार्किक रूप से संबंधित है",
            "example": "जे वैस ले वोइर (नहीं जे ले वैस वोइर)"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "अप्रत्यक्ष सर्वनाम का अर्थ है 'उसे' या 'उसे' (लिंग-तटस्थ!)"
          },
          {
            "word": "Leur",
            "rule": "अप्रत्यक्ष सर्वनाम का अर्थ है 'उन्हें' (कभी भी सर्वनाम के रूप में -s नहीं लेता है!)"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "क्लासिक COI ट्रिगर क्रियाओं के लिए lui/leur की आवश्यकता होती है"
          },
          {
            "word": "Moi / Toi",
            "rule": "पूर्वसर्गों के बाद या सकारात्मक अनिवार्यता में प्रयुक्त तनाववाचक सर्वनाम (Regarde-moi!)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "पूछें: क्या कोई पूर्वसर्ग 'à' है? यदि हाँ ➔ COI (lui/leur); यदि नहीं ➔ COD (le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "जे ने ले वोइस पस (सर्वनाम नकार सैंडविच के अंदर रहता है!)"
          },
          {
            "pattern": "Elision with vowels",
            "note": "मैं प्यार करता हूँ, मैं t'écoute पर उपस्थित रहूंगा"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्रिया के उद्देश्य को पहचानें",
            "question": "क्या या कौन कार्रवाई प्राप्त कर रहा है?",
            "action": "वस्तु वाक्यांश को हाइलाइट करें"
          },
          {
            "step": "चरण 2: क्या किसी व्यक्ति के पहले कोई पूर्वसर्ग 'à' है?",
            "question": "क्या क्रिया 'à quelqu'un' लेती है?",
            "action": "यदि हाँ ➔ COI: LUI (एकवचन) / LEUR (बहुवचन)"
          },
          {
            "step": "चरण 3: प्रत्यक्ष वस्तु (कोई पूर्वसर्ग नहीं)?",
            "question": "क्या यह सीधे 'क्या' या 'कौन' का उत्तर देता है?",
            "action": "यदि हाँ ➔ COD: LE / LA / L' / LES"
          },
          {
            "step": "चरण 4: क्रिया से पहले की स्थिति",
            "question": "यह कहां जाता है?",
            "action": "संयुग्मित क्रिया से ठीक पहले (या यदि मौजूद हो तो इनफिनिटिव से पहले)"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "अनिवार्य गठन सूत्र",
            "meaning": "विषय सर्वनाम छोड़ें; आदेशों के लिए केवल 3 क्रिया व्यक्ति मौजूद हैं",
            "example": "तू वियन्स ➔ वियन्स ! · Nous allons ➔ Allons ! · आप मांगे ➔ मांगे !"
          },
          {
            "name": "-ईआर क्रिया 'तू' -एस ड्रॉप लॉ",
            "meaning": "सादर ➔ सादर ! · तू वास ➔ वा !",
            "example": "पार्ले ! (पार्ल्स नहीं !) · इकोउटे ! (एकॉउट्स नहीं!)"
          },
          {
            "name": "मोडल क्रिया सूत्र",
            "meaning": "मोडल्स संयुग्मित होते हैं, द्वितीयक क्रिया इनफिनिटिव में रहती है",
            "example": "मेरे पास कोई विकल्प नहीं है · मैंने कुछ नहीं किया है · मेरे पास कोई चारा नहीं है"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "क्षमता या विनम्र अनुमति व्यक्त करता है ('कर सकते हैं/हो सकता है')"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "कर्तव्य, दायित्व, या संभाव्यता व्यक्त करता है ('जरूर/होना चाहिए')"
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "इच्छा/इच्छा व्यक्त करता है ('चाहता हूं') ➔ विनम्रता के लिए 'वौड्रेस' का प्रयोग करें"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "अवैयक्तिक दायित्व ('किसी को यह करना ही चाहिए/आवश्यक है')"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "क्रिया के बाद हाइफ़न करें: मांगे-ले ! डोनेज़-मोई !"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "सामान्य रूप से क्रिया से पहले: ने ले मांगे पास! ने मुझे नहीं दिया !"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "वास-य ! मंगेस-एन ! (केवल स्वर टकराव को रोकने के लिए -s को पुनर्स्थापित करता है)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: पताकर्ता चुनें",
            "question": "क्या आप किसी मित्र (tu), किसी समूह/विनम्र (vous), या स्वयं को (nous) सहित आदेश दे रहे हैं?",
            "action": "तु, नौ, या वौस चुनें"
          },
          {
            "step": "चरण 2: विषय सर्वनाम हटाएँ",
            "question": "तू/नूस/वौस को हटाओ",
            "action": "केवल क्रिया तना रखें"
          },
          {
            "step": "चरण 3: -ER 'tu' फॉर्म जांचें",
            "question": "क्या यह 'tu' रूप में एक -ER क्रिया है?",
            "action": "अंतिम अक्षर 's' छोड़ें (पारले! सादर!)"
          },
          {
            "step": "चरण 4: सकारात्मक बनाम नकारात्मक की जाँच करें",
            "question": "क्या यह 'यह करो' या 'यह मत करो' आदेश है?",
            "action": "सकारात्मक: क्रिया-सर्वनाम (Aide-moi !) · नकारात्मक: Ne सर्वनाम verb pas (Ne m'aide pas !)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "सेस्ट बनाम इल इस्ट निर्णय फॉर्मूला",
            "meaning": "संशोधित संज्ञाओं के साथ c'est का प्रयोग करें; सीधे विशेषणों के साथ il est का प्रयोग करें",
            "example": "C'est un bon medecin (संशोधित संज्ञा) बनाम Il est बुद्धिमान (नंगे विशेषण)"
          },
          {
            "name": "मैं एक अस्तित्व और अतीत सूत्र हूँ",
            "meaning": "दोहरा अर्थ: उपस्थिति की स्थिति या बीता हुआ समय",
            "example": "इल वाई ए ड्यूक्स स्टाइलोस सुर ला टेबल · जे सुइस अराइव इल वाई ए डिक्स मिनट्स"
          },
          {
            "name": "एवॉयर बेसियन / एनवी फॉर्मूला",
            "meaning": "आवश्यकता/चाहिए को फ़्रांसीसी में किसी आवश्यकता/इच्छा पर भौतिक कब्ज़ा व्यक्त किया जाता है",
            "example": "जय बसोइन डी'ऊ · जय एन्वी डे वॉयेजर"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "इसके बाद आलेख + संज्ञा, नाम, या संपूर्ण कथन (C'est genial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "लेख या नंगे विशेषण के बिना व्यवसायों द्वारा अनुसरण किया जाता है (इल इस्ट एवोकेट, एले इस्ट जेंटिल)"
          },
          {
            "word": "Il y a",
            "rule": "अपरिवर्तनीय: चाहे एकवचन या बहुवचन संज्ञा के बाद 'il y a' रहता है"
          },
          {
            "word": "Avoir l'air",
            "rule": "इसका अर्थ है 'दिखना/लगना' जिसके बाद विशेषण आता है: तू अस ल'एयर थकान"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ इल इस्ट अन मेडेसिन ➔ ✓ सी'एस्ट अन मेडेसिन या इल इस्ट मेडेसिन (नंगे पेशे)"
          },
          {
            "pattern": "Negation of il y a",
            "note": "इल एन'वाई ए पास डे + संज्ञा (डी में आंशिक गिरावट: इल एन'वाई ए पास डी समस्या)"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "जय हो डी'अर्जेंट, जय हो एनवी डी'एप्रेंड्रे"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: जांचें कि क्रिया के बाद क्या आता है",
            "question": "क्या कोई निर्धारक/लेख (अन, उने, ले, मोन) है?",
            "action": "यदि हाँ ➔ C'EST (C'est un prof) का प्रयोग करें"
          },
          {
            "step": "चरण 2: क्या यह एक कोरा विशेषण है या कोरा पेशा?",
            "question": "शब्द से पहले कोई लेख नहीं?",
            "action": "यदि हाँ ➔ IL EST / ELLE EST (Il est prof, Elle est Calme) का उपयोग करें"
          },
          {
            "step": "चरण 3: अस्तित्व का संकेत?",
            "question": "क्या आप कहना चाहते हैं 'वहाँ है/वहाँ हैं'?",
            "action": "IL Y A का प्रयोग करें (बहुवचन के लिए कभी परिवर्तन नहीं)"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "क्यूबेक हाई-फ़्रीक्वेंसी लेक्सिकल फॉर्मूला",
            "meaning": "मानक क्यूबेक शब्द मॉन्ट्रियल और क्यूसी के दैनिक जीवन में सुने जाते हैं",
            "example": "पेटिट डेजुनर ➜ डेजुनर · डेजुनर ➜ डायनर · डायनर ➜ सूपर"
          },
          {
            "name": "क्यूबेक अफ़्रीकेशन क़ानून",
            "meaning": "उच्च अग्र स्वरों से पहले, /t/ और /d/ स्वाभाविक रूप से एक सूक्ष्म एफ़्रिकेट फुसफुसाहट उत्पन्न करते हैं",
            "example": "तु = /tsy/ · पार्टि = /paʁtsi/ · डिमांचे = /dzimɑ̃ʃ/"
          },
          {
            "name": "क्यूबेक प्रश्नवाचक -टू कण",
            "meaning": "बोली जाने वाली क्यूबेक फ़्रेंच में संवादी प्रश्न चिह्न",
            "example": "तू वियन्स-तू ? (क्या आप आ रहे हैं?) · C'est-tu bon ? (क्या यह अच्छा है?)"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "'फेयर डू शॉपिंग' के लिए क्यूबेक (खरीदारी के लिए जाने के लिए)"
          },
          {
            "word": "Fin de semaine",
            "rule": "'ले सप्ताहांत' के लिए क्यूबेक"
          },
          {
            "word": "Char",
            "rule": "'वॉयचर' (कार) के लिए क्यूबेक अनौपचारिक"
          },
          {
            "word": "Chum / Blonde",
            "rule": "प्रेमी/प्रेमिका के लिए क्यूबेक"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "क्यूबेक मुहावरा जिसका अर्थ है 'यह सब अच्छा/उत्तम है!'"
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "सुबह: डीजेनर, दोपहर: डिनर, शाम: सूपर"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "फ़ेते /faɛ̯t/ के करीब लगता है, père से /paɛ̯ʁ/"
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "कैंसिलर (एनुलर), चेकर (सत्यापनकर्ता), पार्कर (गारर)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्यूबेक संवादी सेटिंग को पहचानें",
            "question": "क्या आप मॉन्ट्रियल/क्यूबेक में किसी स्थानीय व्यक्ति से बातचीत कर रहे हैं?",
            "action": "स्थानीय शब्दों का प्रयोग करें: फिन डे सेमेन, चार, मैगसिनर, सूपर"
          },
          {
            "step": "चरण 2: स्नेह के लिए सुनो",
            "question": "क्या शब्द में ती, तू, दी, दू है?",
            "action": "देशी 'ts' और 'dz' ध्वनि सुनें: 'tu' के लिए /tsy/"
          },
          {
            "step": "चरण 3: प्रश्न कण '-tu'",
            "question": "क्या वक्ता ने क्रिया के बाद '-तु' जोड़ा?",
            "action": "इसे एक अनौपचारिक प्रश्न चिह्नक के रूप में पहचानें: y va-tu पर?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "श्रवण समानता नियम",
            "meaning": "तीनों अंत कान को 100% एक जैसे लगते हैं (/e/)",
            "example": "पार्लर, पार्ले, पार्लेज़ सभी बिल्कुल एक जैसे लगते हैं: /paʁle/"
          },
          {
            "name": "'वेंडर' डिडक्शन टेस्ट",
            "meaning": "निर्धारित करें कि क्या लिखना है -er (infinitive) या -é (पिछले कृदंत)",
            "example": "जे वेउक्स मैंगर... ➔ जे वेक्स वेंडर (इन्फ) ➔ जे वेउक्स मैंगर"
          },
          {
            "name": "कृदंत कटौती परीक्षण",
            "meaning": "यदि 'वेंदु' का अर्थ हो तो -é लिखें",
            "example": "जय माँग... ➔ जय वेंदु ➔ जय माँगे"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "इनफ़िनिटिव प्रतिस्थापन परीक्षण शब्द (विशिष्ट /ʁ/ ध्वनि सुनें)"
          },
          {
            "word": "Vendu / Fait",
            "rule": "विगत कृदंत प्रतिस्थापन परीक्षण शब्द (विशिष्ट /y/ या /t/ ध्वनि सुनें)"
          },
          {
            "word": "-ons",
            "rule": "नूस के लिए स्पष्ट लिखित और मौखिक /ɔ̃/ अंत"
          },
          {
            "word": "-ent",
            "rule": "तीसरे व्यक्ति बहुवचन ils/elles के लिए स्पष्ट मूक लिखित मार्कर"
          }
        ],
        "patterns": [
          {
            "pattern": "Two verbs in a row ➜ Second is Infinitive",
            "note": "मैं एक सदस्य हूं · मेरा उद्देश्य समुद्री डाकू है · समीक्षा पर"
          },
          {
            "pattern": "After preposition ➜ Always Infinitive",
            "note": "पौर मंगर, सैंस पार्लर, अवंत डे पार्टिर, औ लिउ डे डोर्मिर"
          },
          {
            "pattern": "After avoir / être ➜ Past Participle",
            "note": "नमस्ते, यह एक पार्टी है"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: /ई/ ध्वनि सुनें",
            "question": "क्या शब्द अंत में /e/ जैसा लगता है?",
            "action": "विकल्प: -er (Inf), -é (कृदंत), या -ez (vous)"
          },
          {
            "step": "चरण 2: 'वेंडर' परीक्षण लागू करें",
            "question": "क्या आप वाक्य में 'वेंडर' शब्द प्रतिस्थापित कर सकते हैं?",
            "action": "यदि हाँ ➔ लिखें -ER (infinitive: Je dois parler)"
          },
          {
            "step": "चरण 3: क्या आप 'वेंदु' का स्थानापन्न कर सकते हैं?",
            "question": "क्या 'वेंदु' एवोइर/आत्रे के बाद स्वाभाविक रूप से फिट बैठता है?",
            "action": "यदि हां ➔ लिखें -É (कृदंत: जय पार्ले)"
          },
          {
            "step": "चरण 4: क्या विषय 'वौस' है?",
            "question": "क्या तात्कालिक विषय आपका है?",
            "action": "यदि हाँ ➔ -EZ लिखें (vous parlez)"
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "रिफ्लेक्सिव वर्तमान संयुग्मन सूत्र",
            "meaning": "रिफ्लेक्टिव सर्वनाम स्वयं क्रिया करने वाले विषय से मेल खाता है",
            "example": "मैं लेवे, तू ते लेवेज़, इल से लेवे, नोस नो लेवोन्स, वौस वौस लेवेज़, आईल्स से लेवेंट"
          },
          {
            "name": "प्रोनोमिनल पासे कंपोज़ फॉर्मूला",
            "meaning": "100% सर्वनाम क्रियाओं के लिए पास कंपोज़ में ÊTRE की आवश्यकता होती है",
            "example": "एले सेस्ट रेवेइली · नोस नोस सोम्मेस काउचेस"
          },
          {
            "name": "रिफ्लेक्सिव एग्रीमेंट कानून",
            "meaning": "सहमत तब होता है जब क्रिया सीधे स्वयं पर प्रहार करती है; यदि शरीर का भाग अनुसरण करता है तो कोई समझौता नहीं",
            "example": "एले एस'एस्ट लावे (सहमत) बनाम एले एस'एस्ट लावे लेस मेन्स (कोई सहमति नहीं: 'लेस मेन्स' प्रत्यक्ष वस्तु है!)"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "दैनिक दिनचर्या सर्वनाम क्रियाएँ"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "स्मृति क्रियाओं के लिए रिफ्लेक्सिव संरचनाओं की आवश्यकता होती है"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "पारस्परिक क्रिया का अर्थ है 'अच्छी तरह से साथ रहना'"
          },
          {
            "word": "S'en aller",
            "rule": "मुहावरेदार सर्वनाम क्रिया जिसका अर्थ है 'छोड़ना/बाहर जाना'"
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "जे नी मी रेवेल्ले पीएएस (सर्वनाम हग्स वर्ब इनसाइड ने... पास)"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "जे वैस एमई लीवर (रिफ्लेक्सिव सर्वनाम विषय के लिए बदलता है लेकिन इनफिनिटिव से पहले बैठता है)"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "लेवे-तोइ ! रेवेइलेज़-वौस ! (सकारात्मक आदेशों में -toi का उपयोग करता है)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्या कार्रवाई स्वयं से की गई है या पारस्परिक है?",
            "question": "क्या कोई अपने आप से कुछ कर रहा है (बालों को ब्रश करना, जागना)?",
            "action": "सर्वनाम रूप का प्रयोग करें: SE + क्रिया"
          },
          {
            "step": "चरण 2: रिफ्लेक्सिव सर्वनाम का मिलान करें",
            "question": "विषय कौन है?",
            "action": "जेई ➔ मैं, तू ➔ ते, आईएल ➔ से, नूस ➔ नूस, वौस ➔ वौस, आईएलएस ➔ से"
          },
          {
            "step": "चरण 3: विगत काल की जाँच करें",
            "question": "क्या यह पासे कंपोज़ है?",
            "action": "हमेशा ÊTRE को सहायक के रूप में उपयोग करें"
          },
          {
            "step": "चरण 4: अनुबंध फ़िल्टर",
            "question": "क्या क्रिया के तुरंत बाद कोई प्रत्यक्ष वस्तु निर्दिष्ट होती है?",
            "action": "यदि हां (लेस मेन्स, लेस डेंट्स) ➔ कोई समझौता नहीं! यदि नहीं ➔ विषय से सहमत हूँ"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "प्रत्यक्ष वस्तु (सीओडी) पहचान सूत्र",
            "meaning": "कोई भी पूर्वसर्ग क्रिया को प्रत्यक्ष संज्ञा से अलग नहीं करता है",
            "example": "मुझे आमंत्रित करें ➔ मुझे आमंत्रित करें"
          },
          {
            "name": "अप्रत्यक्ष वस्तु (सीओआई) पहचान सूत्र",
            "meaning": "किसी व्यक्ति की ओर इशारा करते हुए पूर्वसर्ग 'à' द्वारा अलग किया गया",
            "example": "जे पार्ले ए मोन संरक्षक ➔ जे लूइ पार्ले"
          },
          {
            "name": "दोहरी सर्वनाम क्रम पदानुक्रम सूत्र",
            "meaning": "दो सर्वनामों का उपयोग करते समय क्रिया से पहले बाएँ से दाएँ सख्त क्रम",
            "example": "मैंने मुझे नहीं दिया · मुझे लुइ एन्वोई मिला"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "सीओआई एकवचन (उसे/उसे) - लिंग अंधा"
          },
          {
            "word": "Leur",
            "rule": "COI बहुवचन (उनके लिए) - लिंग अंधा, कभी नहीं लेता -s"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "क्रियाएँ जिन्हें निश्चित पूर्वसर्ग 'à' के कारण COI लेना चाहिए"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "फ़्रेंच में प्रत्यक्ष क्रियाएं (सीओडी लें, अंग्रेजी के विपरीत कोई पूर्वसर्ग नहीं!)"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "अटेंड्रे qqn (किसी का इंतजार करना), chercher qch (कुछ ढूंढना) फ्रेंच में COD लें!"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "इल मी ले प्रेट (पहला/दूसरा व्यक्ति सीधे तीसरे से पहले आता है)"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "जे ले लूइ डिस (तीसरा प्रत्यक्ष, तीसरे अप्रत्यक्ष से पहले)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्रिया सकर्मकता की जाँच करें",
            "question": "क्या फ़्रेंच क्रिया में किसी व्यक्ति के साथ 'à' लगता है?",
            "action": "यदि हां ➔ COI (lui/leur). यदि नहीं ➔ COD (ले / ला / लेस)"
          },
          {
            "step": "चरण 2: पहली वस्तु बदलें",
            "question": "कौन सा सर्वनाम इसका प्रतिनिधित्व करता है?",
            "action": "सीओडी या सीओआई के रूप में टैग करें"
          },
          {
            "step": "चरण 3: दोहरे सर्वनामों को व्यवस्थित करें",
            "question": "क्या दो सर्वनाम हैं?",
            "action": "पदानुक्रम का पालन करें: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ क्रिया"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "फ़्यूचर प्रोचे सकारात्मक फॉर्मूला",
            "meaning": "तात्कालिक योजनाओं, इरादों और निश्चित आगामी घटनाओं के लिए उपयोग किया जाता है (जा रहे हैं...)",
            "example": "मैं वैसा ही हूं · हम सभी नाविक हैं · मैं भाग नहीं लूंगा"
          },
          {
            "name": "फ़्यूचर प्रोचे नकारात्मक फॉर्मूला",
            "meaning": "निषेध संयुग्मित क्रिया 'एलेर' के चारों ओर लपेटता है, और अनन्तिम को बाहर छोड़ देता है",
            "example": "मुझे कोई यात्रा नहीं करनी पड़ी (नहीं मुझे कोई यात्रा नहीं करनी पड़ी)"
          },
          {
            "name": "प्रोनोमिनल फ़्यूचर प्रोचे फॉर्मूला",
            "meaning": "रिफ्लेक्टिव सर्वनाम को विषय से सहमत होना चाहिए और इनफिनिटिव के ठीक सामने बैठना चाहिए",
            "example": "मैं तुमसे प्यार करता हूँ · तुम मुझे खुश करोगे"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "निकट भविष्य का समय ट्रिगर"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "आसन्न भविष्य के ट्रिगर"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "वर्तमान काल में सहायक एलेर का संयुग्मन"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "मेरे पास डॉर्मिर नहीं है · एले ने मेरे पास नहीं है"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "जे वैस ले वोइर · इल वा मी टेलीफोनर (सर्वनाम इनफिनिटिव एक्शन से संबंधित है)"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "एम'एएस मंगर (जे वैस मंगर के लिए अनौपचारिक रूप से बोली जाने वाली)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: आशय या निकट भविष्य की जाँच करें",
            "question": "क्या यह कोई इच्छित योजना या घटना है जो जल्द ही घटित हो रही है?",
            "action": "फ़्यूचर प्रोचे (एलर + इंफ) का उपयोग करें"
          },
          {
            "step": "चरण 2: ALLER को संयुग्मित करें",
            "question": "विषय कौन है?",
            "action": "जेई वैस, तू वास, आईएल वीए, नूस एलोन्स, वौस एलेज़, आईएलएस वोंट"
          },
          {
            "step": "चरण 3: मुख्य क्रिया संलग्न करें",
            "question": "क्रिया क्रिया क्या है?",
            "action": "इनफिनिटिव में रखें (-er, -ir, -re)"
          },
          {
            "step": "चरण 4: सर्वनाम या निषेध की जाँच करें",
            "question": "क्या यह नकारात्मक है या इसमें कोई वस्तु सर्वनाम है?",
            "action": "Ne + Aller + Pas + [सर्वनाम] + Infinitive"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "फ्यूचर सिंपल मास्टर फॉर्मूला",
            "meaning": "ध्यान दें कि अंत वस्तुतः AVOIR (ai, as, a, ons, ez, ont) का वर्तमान काल है!",
            "example": "पार्लर ➔ जेई पार्लर, तू पार्लर, आईएल पार्लर, नूस पार्लर, वौस पार्लर, आईएलएस पार्लरोंट"
          },
          {
            "name": "-आरई क्रिया भविष्य स्टेम नियम",
            "meaning": "विक्रेता-ए ➔ मैं विक्रेता-ऐ, तू विक्रेता-जैसा",
            "example": "प्रेंड्रे ➔ जे प्रेंड्रे · अटेंड्रे ➔ ज'अटेंड्रे"
          },
          {
            "name": "कोर अनियमित भविष्य के तने",
            "meaning": "तने हमेशा 'आर' में समाप्त होते हैं, फिर मानक अंत लें",
            "example": "जे सेराई, जे'औराई, जे'इराई, जे फेराई, जे पौराई, जे वौद्राई"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "सुदूर भविष्य के समय चिह्नक"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "फ़्रेंच में भविष्य को सरल बनाने वाले समय के संयोजन"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "पहला सशर्त नियम (Si j'ai la temps, je viendrai)"
          }
        ],
        "patterns": [
          {
            "pattern": "Future stems ALWAYS end in 'R'",
            "note": "पार्लर-, फ़िनिर-, वेंडर-, सेर-, और-, आईआर-, फेर-"
          },
          {
            "pattern": "Do not confuse -ons with nous imparfait",
            "note": "नूस पार्लेरियन्स (फ्यूचर /ɔ̃/) बनाम नूस पार्लेरियन्स (इम्परफेट /जेɔ̃/)"
          },
          {
            "pattern": "3rd person plural is -ont (not -ent!)",
            "note": "आईएलएस पार्लरोंट (/ɔ̃/ जैसा लगता है, ऑन्स के साथ तुकबंदी करता है!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: भविष्य का तना निर्धारित करें",
            "question": "क्या क्रिया नियमित है (-er, -ir, -re)?",
            "action": "इनफिनिटिव रखें (-re से 'e' हटाएं)। यदि अनियमित है, तो 'आर' रूट का उपयोग करें (सेर-, और-, आईआर-, फेर-)"
          },
          {
            "step": "चरण 2: AVOIR अंत संलग्न करें",
            "question": "विषय क्या है?",
            "action": "जे ➔ -एआई, तू ➔ -अस, आईएल ➔ -ए, नाउ ➔ -ऑन, वौस ➔ -ईज़, आईएलएस ➔ -ओंट"
          },
          {
            "step": "चरण 3: अंतिम प्रत्यय का उच्चारण करें",
            "question": "स्वरों पर ध्यान दें",
            "action": "मैं पार्लेराई (/ई/), तू पार्लेरस (/ए/), आईएलएस पार्लरोंट (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "इम्परफेट स्टेम एक्सट्रैक्शन फॉर्मूला",
            "meaning": "फ़्रेंच भाषा में 99.9% सभी क्रियाओं के लिए काम करता है!",
            "example": "पार्लर ➔ नूस पार्लर ➔ पार्ल- · फिनिर ➔ नूस फिनिसन्स ➔ फिनीस- · प्रेंड्रे ➔ नूस प्रीनॉन ➔ प्रेन-"
          },
          {
            "name": "इम्पार्फेट यूनिवर्सल एंडिंग्स फॉर्मूला",
            "meaning": "सूचना -ais, -ais, -ait, -aient सभी का उच्चारण समान रूप से किया जाता है: /ɛ/",
            "example": "जेई पार्लैस, तू पार्लैस, इल पार्लैट, आईएलएस पार्लिएंट सभी ध्वनि /पाललɛ/"
          },
          {
            "name": "फ़्रेंच में एकमात्र अनियमित तना",
            "meaning": "प्रत्येक अन्य क्रिया वर्तमान में संज्ञा से अपना तना निकालती है!",
            "example": "ज'एटैस, नोस एटिअन्स, वौस एटीज़"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "बार-बार आदत ट्रिगर ➔ हमेशा Imparfait"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "सतत पृष्ठभूमि कार्रवाई ट्रिगर ➔ Imparfait"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "विगत चल रहे युग/जीवन की स्थिति"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "अतीत के दृश्य, मौसम, समय, भावनात्मक स्थिति"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "सभी उच्चारण /ɛ/ (खुला ई)। विषय सर्वनाम आपको बताता है कि यह किसने किया!"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "नूस पार्लियंस (/paʁljɔ̃/), वौस पार्लिज़ (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "जे मंगेइस ('ई' रखें), जे कमेंकैस (सेडिला 'सी' जोड़ें)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: नूस को वर्तमान काल में लें",
            "question": "'नूस' का वर्तमान काल क्या है?",
            "action": "नाउ पार्लॉन्स, नाउ फ़िज़न्स, नाउ बुवोन्स"
          },
          {
            "step": "चरण 2: लोप ऑफ -ओएनएस",
            "question": "3 अक्षर -ऑन हटाएँ",
            "action": "पार्ल-, फ़ैस-, बुव- (यह आपका तना है)"
          },
          {
            "step": "चरण 3: क्या क्रिया ÊTRE है?",
            "question": "क्या यह एकमात्र अपवाद है?",
            "action": "तने का प्रयोग करें आदि-"
          },
          {
            "step": "चरण 4: इम्परफ़ेट अंत संलग्न करें",
            "question": "विषय का मिलान करें",
            "action": "-ऐस, -ऐस, -एआईटी, -आयन्स, -इज़, -एएंट"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "सर्वनाम Y स्थान प्रतिस्थापन सूत्र",
            "meaning": "किसी भी भौगोलिक स्थान या स्थान को प्रतिस्थापित करता है (अंग्रेज़ी: वहां)",
            "example": "जे वैस ए मॉन्ट्रियल ➔ जे'वाई वैस · इल इस्ट डेन्स सा चैंबर ➔ इल वाई इस्ट"
          },
          {
            "name": "सर्वनाम Y निर्जीव वस्तु सूत्र",
            "meaning": "'à + चीज़/अवधारणा' को प्रतिस्थापित करता है (सोचना, भाग लेना)",
            "example": "जे पेंस ए मोन एवेनिर ➔ जे'वाई पेंस (जे पेंस ए लुई नहीं: लोग तनाव सर्वनाम लेते हैं!)"
          },
          {
            "name": "सर्वनाम वाई प्लेसमेंट फॉर्मूला",
            "meaning": "क्रिया के ठीक पहले बैठता है",
            "example": "तू y vas · on ny va pas · vas-y ! (अनिवार्य)"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "पेंसर एक अन जांच ➔ वाई पेंसर"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "'à' लेने वाली क्रिया + निर्जीव विचार ➔ को Y द्वारा प्रतिस्थापित किया गया"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "स्थान ट्रिगर ➔ को Y द्वारा प्रतिस्थापित किया गया"
          },
          {
            "word": "Il y a",
            "rule": "इसमें सर्वनाम Y शामिल है: शाब्दिक रूप से 'यह वहाँ है'"
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ जे पेंस ए मैरी ➔ जे पेंस ➔ ✓ जे पेंस ए एले (लोगों के लिए तनाव सर्वनाम का उपयोग करें!)"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "वा + य ➔ वास-य ! (बदसूरत /a-i/ स्वर टकराव से बचने के लिए 's' जोड़ता है)"
          },
          {
            "pattern": "Near future placement",
            "note": "जे वैस वाई एलेर (इनफिनिटिव के ठीक सामने बैठता है)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: पूर्वसर्ग की जाँच करें",
            "question": "क्या यह वाक्यांश à, en, dans, Sur, sous, या chez द्वारा प्रस्तुत किया गया है?",
            "action": "यदि हाँ ➔ Y के लिए उम्मीदवार"
          },
          {
            "step": "चरण 2: क्या यह एक व्यक्ति है?",
            "question": "क्या यह वाक्यांश किसी इंसान को संदर्भित करता है?",
            "action": "यदि हाँ ➔ Y का प्रयोग न करें! à lui / à elle का प्रयोग करें। यदि नहीं ➔ चरण 3 पर आगे बढ़ें"
          },
          {
            "step": "चरण 3: क्या यह एक स्थान या वस्तु है?",
            "question": "क्या यह एक स्थान है या एक अमूर्त अवधारणा (ए मोन ट्रैवेल, ए मोन एवेनिर)?",
            "action": "संपूर्ण वाक्यांश को Y से बदलें"
          },
          {
            "step": "चरण 4: क्रिया से पहले रखें",
            "question": "यह कहाँ बैठता है?",
            "action": "संयुग्मित क्रिया से ठीक पहले (या इनफिनिटिव से पहले)"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "कंडीशनल असेंबली फॉर्मूला",
            "meaning": "हाइब्रिड काल: इम्परफेट आवाज के साथ फ्यूचर बॉडी का उपयोग करता है!",
            "example": "एइमर ➔ स्टेम एइमर- + -एआईएस ➔ जे'एमेराइस · एत्रे ➔ स्टेम सेर- + -एआईटी ➔ इल सेराईट"
          },
          {
            "name": "सार्वभौमिक विनम्रता सूत्र",
            "meaning": "दुकानों, रेस्तरां और पेशेवर सेटिंग में मांग को नरम करता है",
            "example": "जे वेउक्स अन कैफ़े (असभ्य) ➔ जे वौड्रेस अन कैफ़े (विनम्र)"
          },
          {
            "name": "दूसरा सशर्त 'सी' फॉर्मूला",
            "meaning": "काल्पनिक अवास्तविक स्थिति ('यदि मेरे पास... मैं होता...')",
            "example": "अगर मैं चांदी का मालिक हूं, तो मुझे एक घर मिल जाए"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "कैफे, बेकरी, ग्राहक सेवा में आवश्यक विनम्रता सूत्र"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "विनम्र अनुरोध: क्या आप कर सकते हैं/करेंगे?"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "सलाह देते हुए: यदि मैं तुम होते, तो मैं..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "आपके स्थान पर, मैं करूँगा..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ सी ज'औरैस सु ➔ ✓ सी ज'अवैस सु (लेस 'सी' एन'एमेंट पस लेस 'रईस'!)"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "भविष्य: जेई पार्लेराय (/ई/ बंद) बनाम कंडीशनल: जेई पार्लेराइस (/ɛ/ खुला)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "और- (एवोइर), सेर- (एत्रे), इर- (एलर), फेर- (फेयर), पौर- (पाउवोइर), डेवर- (डेवोइर)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: इरादे की जाँच करें (विनम्र या काल्पनिक)",
            "question": "क्या आप खाना ऑर्डर कर रहे हैं, अनुरोध कर रहे हैं, या 'क्या होगा अगर' की कल्पना कर रहे हैं?",
            "action": "कंडीशनल प्रेजेंट का उपयोग करें"
          },
          {
            "step": "चरण 2: भविष्य का तना प्राप्त करें",
            "question": "इन्फिनिटिव (या अनियमित -आर स्टेम) लें",
            "action": "वाउडर-, एइमर-, पौर-, सेर-"
          },
          {
            "step": "चरण 3: इम्परफ़ेट अंत संलग्न करें",
            "question": "विषय का मिलान करें",
            "action": "-ऐस, -ऐस, -एआईटी, -आयन्स, -इज़, -एएंट"
          },
          {
            "step": "चरण 4: 'सी' खंड की जाँच करें",
            "question": "क्या वाक्य 'सी' से शुरू होता है?",
            "action": "सुनिश्चित करें कि क्रिया IMPARFAIT में 'si' के ठीक बाद है!"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "जेरोनडिफ़ गठन फॉर्मूला",
            "meaning": "वर्तमान 'नूस' तना निकालें, पूर्वसर्ग 'एन' और प्रत्यय '-एंट' जोड़ें",
            "example": "पार्लर ➔ नूस पार्लर ➔ एन पार्लंट · फ़ेयर ➔ नूस फ़ेसन्स ➔ एन फ़ेसेंट"
          },
          {
            "name": "एक साथ क्रिया सूत्र",
            "meaning": "दोनों क्रियाएं एक ही समय में एक ही विषय द्वारा की जानी चाहिए",
            "example": "इल एकाउट डे ला म्यूज़िक एन एट्यूडिएंट (वह पढ़ाई के दौरान संगीत सुनता है)"
          },
          {
            "name": "ढंग और साधन सूत्र",
            "meaning": "बताता है कि परिणाम कैसे प्राप्त किया गया",
            "example": "C'est en forgeant qu'on devient forgeron · ऑन एपेंड एन फैज़ेंट डेस एरेर्स"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "फ़्रांसीसी जेरोनडिफ़ का हस्ताक्षर चिह्नक"
          },
          {
            "word": "Tout en + -ant",
            "rule": "विरोधाभास या सख्त एक साथता पर जोर देता है (वह रोते हुए मुस्कुराया)"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "दैनिक जीवन में सामान्य जेरोन्डिफ़ अभिव्यक्तियाँ"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "मुख्य क्रिया करने वाला व्यक्ति गेरोनडिफ़ क्रिया करने वाला होना चाहिए!"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en ayant | उद्धारकर्ता ➔ एन सच्चा"
          },
          {
            "pattern": "Invariable",
            "note": "जेरोनडिफ़ कभी भी -e या -s नहीं लेता (हमेशा -ant में समाप्त होता है)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: एक साथ या तरीके की जाँच करें",
            "question": "क्या दो क्रियाएं एक साथ हो रही हैं, या आप 'कैसे' का उत्तर दे रहे हैं?",
            "action": "ले गेरोनडिफ़ का प्रयोग करें"
          },
          {
            "step": "चरण 2: नाउस को वर्तमान में संयुग्मित करें",
            "question": "क्रिया का वर्तमान 'नूस' रूप क्या है?",
            "action": "नूस प्रीनोन्स, नूस मार्चोन्स, नूस फिनिसन्स"
          },
          {
            "step": "चरण 3: स्ट्रिप -ONS और ऐड -ANT",
            "question": "-ऑन को -एंट से बदलें",
            "action": "प्रेंटेंट, मर्चेंट, फिनिसेंट"
          },
          {
            "step": "चरण 4: 'EN' को आगे जोड़ें",
            "question": "पूर्वसर्ग 'एन' जोड़ें",
            "action": "एन प्रीनेंट, एन मर्चेंट, एन फिनिसेंट"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "पासे हालिया सकारात्मक फॉर्मूला",
            "meaning": "कुछ क्षण पहले पूर्ण किए गए कार्यों के लिए उपयोग किया जाता है (अंग्रेज़ी: अभी कुछ किया)",
            "example": "मैं अपने गंतव्य तक पहुंच गया · अपने गंतव्य तक पहुंच गया · अंतिम दिन तक पहुंच गया"
          },
          {
            "name": "डी एलीशन कानून",
            "meaning": "स्वर-प्रारंभिक क्रियाओं से पहले अनिवार्य संकुचन",
            "example": "इल विएंट डी'अरिवर · एले विएंट डी'एंटेंड्रे"
          },
          {
            "name": "प्रोनोमिनल पासे हालिया फॉर्मूला",
            "meaning": "सर्वनाम विषय से मेल खाता है लेकिन इनफिनिटिव को गले लगाता है",
            "example": "मेरे पति ने मुझे फिर से बुलाया है · मैंने उसे एसई मैरिअर में शामिल किया है"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "ट्रिगर: बस इसी क्षण"
          },
          {
            "word": "Tout juste",
            "rule": "ट्रिगर: अभी बमुश्किल/ताजा पूरा हुआ"
          },
          {
            "word": "Il y a une minute",
            "rule": "ट्रिगर: एक मिनट पहले"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "वेनिर का वर्तमान संयुग्मन"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ जे विएन्स डे चरनी (मतलब मैं खाना खाने आया हूं) ➔ ✓ जे विएन्स डे चरनी (मैंने अभी खाया)"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "जे विएन्स डे ले वोइर (सर्वनाम इनफिनिटिव क्रिया से ठीक पहले बैठता है)"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "जे वेनिस डे पार्टिर क्वांड इल ए सोने (मैं अभी निकला ही था कि उसका फोन आया)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: समय की जाँच करें",
            "question": "क्या कार्रवाई सेकंड या मिनट पहले हुई थी ('अभी हुई')?",
            "action": "पासे रीसेंट का उपयोग करें"
          },
          {
            "step": "चरण 2: वेनिर को संयुग्मित करें",
            "question": "विषय कौन है?",
            "action": "वियन्स, वियन्स, वियन्ट, वेनोन्स, वेनेज़, वियनेन्ट"
          },
          {
            "step": "चरण 3: DE या D' जोड़ें",
            "question": "क्या अगली क्रिया स्वर से शुरू होती है?",
            "action": "स्वर/घ से पहले D' का प्रयोग करें; व्यंजन से पहले DE"
          },
          {
            "step": "चरण 4: एक्शन इनफिनिटिव संलग्न करें",
            "question": "मुख्य क्रिया को इनफिनिटिव में रखें",
            "action": "मैं अपने मोन कैफ़े को समाप्त कर रहा हूँ"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "पूर्ण कालानुक्रमिक समयरेखा सूत्र",
            "meaning": "वास्तविकता की कालानुक्रमिक समयरेखा के साथ प्लॉट किए गए 5 प्राथमिक परिचालन काल",
            "example": "जेई वियन्स डे मंगेर ➔ जय मांगे / जे मंगेइस ➔ जे मंगे ➔ जे वैस मंगेर ➔ जे मंगेरई"
          },
          {
            "name": "बोली जाने वाली फ्रेंच संयुग्मन त्रिमूर्ति",
            "meaning": "रोजमर्रा की बातचीत में 95% फ्रेंच बोलने के लिए पहले इन तीन काल में महारत हासिल करें",
            "example": "जय पार्ले ➔ जय पार्ले ➔ जय पार्ले"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "पास कंपोज़ (पॉइंट-इन-टाइम) या इम्परफ़ेट (चल रही पृष्ठभूमि)"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "संकेतक प्रस्तुत करें"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "फ़्यूचर प्रोचे (बातचीत) या फ़्यूचर सिंपल (औपचारिक/लिखित)"
          }
        ],
        "patterns": [
          {
            "pattern": "Auxiliary tenses rely on Infinitives",
            "note": "पासे रीसेंट = वेनिर + डी + आईएनएफ · फ़्यूचर प्रोचे = एलर + आईएनएफ"
          },
          {
            "pattern": "Compound tenses rely on Participles",
            "note": "पासे कंपोज़ = एवोइर/एत्रे + पार्टिसिपल"
          },
          {
            "pattern": "Stem tenses rely on Endings",
            "note": "वर्तमान = तना+अंत · इम्परफेट = नूस-तना+अंत · फ़्यूचर सिंपल = inf+अंत"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: टाइम एंकर का पता लगाएँ",
            "question": "क्या क्रिया अतीत, वर्तमान या भविष्य है?",
            "action": "कालानुक्रमिक अक्ष पर पिनपॉइंट"
          },
          {
            "step": "चरण 2: रजिस्टर चुनें (मौखिक बनाम औपचारिक)",
            "question": "क्या यह आकस्मिक बातचीत है या औपचारिक लेखन?",
            "action": "बोली जाने वाली ➔ फ़्यूचर प्रोचे (वैस फेयर) · औपचारिक ➔ फ़्यूचर सिंपल (फेराई)"
          },
          {
            "step": "चरण 3: पिछली कार्रवाई फ़िल्टर",
            "question": "क्या यह अचानक हुई घटना है या कोई दृश्य/आदत?",
            "action": "घटना ➔ पुरानी रचना · आदत/सेटिंग ➔ इम्परफ़ेट"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS फॉर्मूला (अतीत से वर्तमान तक चल रहा है)",
            "meaning": "अतीत में शुरू हुआ और अभी भी जारी है (फ़्रेंच वर्तमान काल का उपयोग करता है!)",
            "example": "जे'हैबिट ए मॉन्ट्रियल डेपुइस ड्यूक्स एन्स (मैं यहां 2 साल से रह रहा हूं और अब भी रहता हूं!)"
          },
          {
            "name": "आईएल वाई ए फॉर्मूला (अतीत में पूरा बिंदु)",
            "meaning": "अतीत में एक पूर्ण किए गए क्षण की ओर इशारा करता है (अंग्रेज़ी: AGO)",
            "example": "ले ट्रेन इस पार्टी आईएल वाई ए डिक्स मिनट (ट्रेन 10 मिनट पहले रवाना हुई)"
          },
          {
            "name": "DANS फॉर्मूला (भविष्य की उलटी गिनती)",
            "meaning": "भविष्य की कार्रवाई कब शुरू होगी इसकी उल्टी गिनती (अंग्रेज़ी: IN)",
            "example": "ले कोर्स शुरू DANS cinq मिनट (कक्षा 5 मिनट में शुरू होती है)"
          },
          {
            "name": "पेंडेंट फॉर्मूला (बंद पूर्ण अवधि)",
            "meaning": "इसकी स्पष्ट शुरुआत और समाप्ति है; कार्रवाई पूरी तरह समाप्त हो गई है (अंग्रेज़ी: FOR/DURING)",
            "example": "जय डोरमी पेंडेंट हुइत ह्यूरेस (मैं 8 घंटे सोया - अब जाग गया)"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "अभी भी हो रहा है ➔ वर्तमान काल अवश्य लें"
          },
          {
            "word": "Il y a",
            "rule": "समय पहले ➔ भूतकाल अवश्य लें"
          },
          {
            "word": "Dans",
            "rule": "भविष्य की उलटी गिनती ➔ भविष्य काल अवश्य लें"
          },
          {
            "word": "Pendant",
            "rule": "पूर्ण समय का बंद ब्लॉक ➔ आमतौर पर पासे कंपोज़"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ मुझे इसकी आदत है 1 और ➔ ✓ मुझे इसकी आदत है 1 और"
          },
          {
            "pattern": "Dans vs En",
            "note": "1 घंटा = अब से 1 घंटा शुरू होता है (उल्टी गिनती) · 1 घंटा = पूरा होने में 1 घंटा लगता है (गति)"
          },
          {
            "pattern": "Pour with time",
            "note": "इच्छित भविष्य की नियोजित अवधियों के लिए सख्ती से: जे पार्स पोर ड्यूक्स सेमेन्स"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्या कार्रवाई अभी भी हो रही है?",
            "question": "क्या यह अतीत में शुरू हुआ और वर्तमान में भी जारी है?",
            "action": "यदि हाँ ➔ DEPUIS (+ वर्तमान काल)"
          },
          {
            "step": "चरण 2: क्या यह भविष्य में कोई कार्रवाई है?",
            "question": "क्या आप इसकी गिनती कर रहे हैं कि यह कब शुरू होगा?",
            "action": "यदि हाँ ➔ DANS (+ भविष्य काल)"
          },
          {
            "step": "चरण 3: क्या यह अतीत में पूरी तरह से समाप्त हो चुकी कार्रवाई है?",
            "question": "क्या यह 'X समय पहले' हुआ था?",
            "action": "यदि हाँ ➔ IL Y A (+ Passé Composé)"
          },
          {
            "step": "चरण 4: क्या यह एक बंद, मापी गई अवधि है?",
            "question": "क्या यह प्रारंभ और समाप्ति के साथ समय के पूर्ण ब्लॉक का वर्णन करता है?",
            "action": "यदि हां ➔ पेंडेंट"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "ऐतिहासिक सेटिंग बनाम एक्शन फॉर्मूला",
            "meaning": "इतिहास की कहानियाँ इम्परफ़ेट के साथ मंच तैयार करती हैं, फिर पासे कंपोज़ के साथ कालक्रम को आगे बढ़ाती हैं",
            "example": "लेस पीपल्स ऑटोचटोन्स विविएंट आईसीआई (इम्परफेट) और पॉल चोमेडे और फोंडे विले-मैरी एन 1642 (पास कंपोज़)"
          },
          {
            "name": "ऐतिहासिक तिथि पूर्वसर्ग सूत्र",
            "meaning": "ऐतिहासिक समय निर्धारण के लिए पूर्वसर्ग",
            "example": "एन 1642 · एयू XVIIe siècle · ले 17 मई 1642"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "विशिष्ट कैलेंडर वर्ष ट्रिगर ➔ फाउंडेशन इवेंट के लिए पासे कंपोज़"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "ऐतिहासिक पृष्ठभूमि ट्रिगर ➔ इम्परफ़ेट"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "1701 की प्रमुख शांति संधि पर कैलियरे द्वारा हस्ताक्षर किए गए"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "'Siècle' के साथ रोमन अंकों का प्रयोग करें: au XXIe siècle (21वीं सदी)"
          },
          {
            "pattern": "Historical Present",
            "note": "ज्वलंत कहानी कहने के लिए इतिहास अक्सर वर्तमान काल का उपयोग करता है (एन 1642, इल फोंडे...)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: क्या यह उस युग की जीवन स्थितियों का वर्णन कर रहा है?",
            "question": "रहने की स्थितियाँ, दृश्यावली, परंपराएँ?",
            "action": "IMPARFAIT का उपयोग करें (Ils chalsaient, vivaient)"
          },
          {
            "step": "चरण 2: क्या यह एक विशिष्ट मोड़, लड़ाई या संधि है?",
            "question": "क्या यह आरंभ और समाप्ति के साथ एक निश्चित तिथि पर घटित हुआ?",
            "action": "PASSÉ COMPOSÉ का उपयोग करें (Il a fondé, ils ontsigné)"
          },
          {
            "step": "चरण 3: दिनांक प्रारूप की जाँच करें",
            "question": "क्या यह सिर्फ एक साल, सदी या दिन है?",
            "action": "एन [वर्ष], औ [शताब्दी], ले [दिन महीना वर्ष]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "मूवी कैमरा बनाम फ़्लैश स्नैपशॉट फॉर्मूला",
            "meaning": "इम्पार्फ़ेट मंच तैयार करता है (मौसम, भावनाएँ, 'कर रहा था'); पासे कंपोज़ रुकावट या मील के पत्थर को ट्रिगर करता है",
            "example": "इल प्लुवैत (इम्परफ़ेट: सीन) क्वांड सौडेन ला फ़ौड्रे ए फ्रैपे (पास कंपोज़: स्नैपशॉट)"
          },
          {
            "name": "बाधित क्रिया सूत्र",
            "meaning": "जो सतत कार्रवाई चल रही थी वह समय की पाबंद घटना से बाधित हो जाती है",
            "example": "मैं सो रहा था (सो रहा था) और मैंने एक सोने का आनंद लिया (बजाया)"
          },
          {
            "name": "गिरगिट क्रिया सूत्र",
            "meaning": "कुछ क्रियाएं मन की स्थिति और अचानक अहसास के बीच अर्थ बदल देती हैं",
            "example": "जे सवैस नागर (क्षमता) बनाम जय सु ला नोवेल्ले (घटना)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "हमेशा इम्परफ़ेट: जबकि कुछ चल रहा था"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "ऑलवेज़ पासे कंपोज़: अचानक एक घटना घटी"
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "हमेशा इम्परफ़ेट: बार-बार आदतन दिनचर्या"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "पासे कंपोज़: पृथक पूर्ण अवसर"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "कर रहा था = इम्परफ़ेट · डिड = पासे कंपोज़"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "जावैस पेउर, इल फैसिट फ्रोइड, एले एटेइट ट्रिस्टे ➔ ऑलवेज इम्परफेट"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "जे मी सूइस लेवे, जे'ए मंगे एट जे सूइस पार्टि (ए ➔ बी ➔ सी = पासे कंपोज़)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: पूछें 'दृश्य क्या था?'",
            "question": "क्या यह पृष्ठभूमि के मौसम, माहौल, भावनाओं या चल रही आदतों का वर्णन करता है?",
            "action": "यदि हाँ ➔ IMPARFAIT (वीडियो कैमरा रोलिंग)"
          },
          {
            "step": "चरण 2: पूछें 'आगे क्या हुआ?'",
            "question": "क्या यह एक विशिष्ट, पूर्ण कार्रवाई है जो कहानी को आगे बढ़ाती है?",
            "action": "यदि हाँ ➔ PASSÉ COMPOSÉ (फोटो स्नैपशॉट BAM!)"
          },
          {
            "step": "चरण 3: व्यवधान की जाँच करें",
            "question": "क्या एक कार्रवाई से चल रही दूसरी कार्रवाई बाधित हुई?",
            "action": "पृष्ठभूमि = इम्परफ़ेट · व्यवधान = पासे कंपोज़"
          },
          {
            "step": "चरण 4: ट्रिगर शब्दों की जाँच करें",
            "question": "'पेंडेंट क्यू' (इम्पार्फेट) या 'सौडेन' (पास कंपोज़) की तलाश करें",
            "action": "अपने काल चयन को लॉक करें"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE स्त्रीलिंग प्रत्यय सूत्र",
            "meaning": "-eux में समाप्त होने वाले लगभग सभी वर्ण विशेषण स्त्रीलिंग में -euse में स्थानांतरित हो जाते हैं",
            "example": "जेनेरेक्स ➔ जेनेर्यूज़ · साहसक्स ➔ साहस प्रयोग · पारेसेक्स ➔ पारेस्यूज़"
          },
          {
            "name": "-IF ➔ -IVE स्त्रीलिंग प्रत्यय सूत्र",
            "meaning": "ध्वनि रहित /f/ से ध्वनिरहित /v/ में परिवर्तन",
            "example": "रचनात्मक ➔ रचनात्मक · सक्रिय ➔ सक्रिय · चौकस ➔ चौकस"
          },
          {
            "name": "-EL / -ON डबल व्यंजन सूत्र",
            "meaning": "-ई जोड़ने से पहले अंतिम व्यंजन को दोगुना करता है",
            "example": "नेचरल ➔ नेचरल · बॉन ➔ बोन · मिमी ➔ मिग्नोन"
          },
          {
            "name": "अव्यय विशेषण प्रत्यय -इ",
            "meaning": "यदि पुल्लिंग पहले से ही अनएक्सेंट -ई में समाप्त हो जाता है तो कोई बदलाव आवश्यक नहीं है",
            "example": "कैल्मे (एम) ➔ कैल्मे (एफ) · टाइमाइड (एम) ➔ टाइमाइड (एफ) · मिलनसार (एम) ➔ मिलनसार (एफ)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "गर्मजोशी से स्वागत करने वाला व्यक्तित्व (क्यूबेक में बहुत आम)"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "उदार गुण"
          },
          {
            "word": "Franc / Franche",
            "rule": "सीधा, सीधा (अनियमित स्त्रीलिंग-चे)"
          },
          {
            "word": "Doux / Douce",
            "rule": "कोमल, मधुर (अनियमित स्त्रीलिंग -सी)"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "बवार्ड (/bavaʁ/) ➔ बवार्डे (/bavaʁd/): 'डी' श्रव्य हो जाता है!"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "आकर्षक ➔ आकर्षक, रचनाकार ➔ रचनाकार"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "वफादार ➔ लॉयल (महिला), लोयाक्स (मास्क बहुवचन)"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: पुल्लिंग अंत की जाँच करें",
            "question": "क्या आधार विशेषण -ई में समाप्त होता है?",
            "action": "यदि हाँ ➔ अपरिवर्तनीय (शांत, डरपोक, सहानुभूतिपूर्ण)"
          },
          {
            "step": "चरण 2: क्या यह -eux में समाप्त होता है?",
            "question": "क्या पुल्लिंग प्रत्यय -eux है?",
            "action": "-यूज़ में रूपांतरित करें (जेनरीज़, सीरीयूज़)"
          },
          {
            "step": "चरण 3: क्या यह -if में समाप्त होता है?",
            "question": "क्या पुल्लिंग प्रत्यय -यदि है?",
            "action": "-ive में रूपांतरित करें (रचनात्मक, चौकस)"
          },
          {
            "step": "चरण 4: नियमित व्यंजन समाप्ति",
            "question": "क्या यह -t, -d, या -s में ख़त्म होता है?",
            "action": "-ई जोड़ें और अंतिम व्यंजन को जागृत करें (जेंटिल ➔ जेंटिल, इंटेलिजेंट ➔ इंटेलिजेंट)"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "व्याकरण प्रतिधारण समीकरण",
            "meaning": "फ़्रेंच व्याकरण गाइड डिज़ाइन को रेखांकित करने वाले शैक्षणिक स्तंभ",
            "example": "सूत्र (तार्किक स्पष्टता) + पहचान बैज (पैटर्न पहचान) + एसवीजी आरेख (मानसिक मॉडल)"
          },
          {
            "name": "सतत सीखने का चक्र",
            "meaning": "आरंभिक A1 से मध्यवर्ती B1 क्यूबेक प्रवाह तक स्वायत्त प्रगति पाइपलाइन",
            "example": "अंतराल पुनरावृत्ति अंतराल 1, 3, और 7 दिनों में देय वस्तुओं को निर्धारित करते हैं"
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "प्रत्येक विषय के लिए गणितीय शैली के व्याकरण सूत्र"
          },
          {
            "word": "Pattern Recognition",
            "rule": "नियमों का तुरंत पता लगाने के लिए शब्द ट्रिगर और समाप्ति पैटर्न"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "चरण-दर-चरण तर्क पथ बताते हैं कि व्याकरण के निष्कर्ष तक कैसे पहुंचा जाए"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "प्रत्येक विषय कार्ड में दृश्य चित्रण अंतर्निहित हैं"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "गहरे फोकस के लिए अनुकूलित अनुकूली स्पर्श दृश्य डिज़ाइन"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "PWA सर्विस वर्कर सबवे अध्ययन के लिए सभी 30 मॉड्यूल को कैश करता है"
          },
          {
            "pattern": "Multi-language translations",
            "note": "7 मूल भाषाओं में व्यापक समर्थन"
          }
        ],
        "decisionSteps": [
          {
            "step": "चरण 1: एक व्याकरण विषय चुनें",
            "question": "पाठ्यक्रम में 30 अनुभागों में से किसी एक का चयन करें",
            "action": "मुख्य सूत्रों और पहचान ट्रिगर्स की समीक्षा करें"
          },
          {
            "step": "चरण 2: दृश्य आरेख का निरीक्षण करें",
            "question": "पता लगाएं कि निर्णय संदर्भ से व्याकरण निष्कर्ष तक कैसे पहुंचते हैं",
            "action": "एसवीजी प्रवाह नोड्स का पालन करें"
          },
          {
            "step": "चरण 3: इंटरैक्टिव ब्लॉक का अभ्यास करें",
            "question": "विगेट्स और संयुग्मन तालिकाओं के साथ ज्ञान का परीक्षण करें",
            "action": "तत्काल श्रवण और दृश्य प्रतिक्रिया"
          },
          {
            "step": "चरण 4: एसआरएस के साथ बनाए रखें",
            "question": "अंतरालित पुनरावृत्ति कतार में आइटम की समीक्षा करें",
            "action": "स्मृति को दीर्घकालिक स्मरण में सुदृढ़ करें"
          }
        ]
      }
    }
  },
  "ta": {
    "ui": {
      "hub_title": "சூத்திரங்கள், சொல் தூண்டிகள் & காட்சி தர்க்கம்",
      "hub_subtitle": "வடிவங்களை ஒரு பார்வையில் அடையாளம் காணுங்கள் • இலக்கண முடிவை எவ்வாறு அடைவது என்பதைக் கண்டறியவும்",
      "hub_sec_formulas": "இலக்கண சூத்திரங்கள்",
      "hub_sec_triggers": "சொற்கள் மற்றும் வடிவங்கள் மூலம் அடையாளம் காண்பது எப்படி",
      "hub_sec_signals": "குறியீட்டு மற்றும் தூண்டுதல் சொற்கள்",
      "hub_sec_patterns": "சொல் முடிவுகள் & வடிவ விதிகள்",
      "hub_sec_path": "கண்டறியும் முடிவுப் பாதை — முடிவை அடைவது எப்படி",
      "hub_sec_diagram": "காட்சி தர்க்க வரைபடம்"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "திட்டவட்டமான கட்டுரை சூத்திரம்",
            "meaning": "குறிப்பிட்ட அறியப்பட்ட நிறுவனம் அல்லது உலகளாவிய கருத்து (ஆங்கிலம்: THE)",
            "example": "J'aime le café (concept) · Regarde le ரயில் (குறிப்பிட்டது)"
          },
          {
            "name": "காலவரையற்ற கட்டுரை சூத்திரம்",
            "meaning": "கணக்கிடக்கூடிய, குறிப்பிடப்படாத தனிப்பட்ட அலகு (ஆங்கிலம்: A / AN / SOME)",
            "example": "J’achète un roman · Elle mange une pomme"
          },
          {
            "name": "பகுதி கட்டுரை சூத்திரம்",
            "meaning": "கணக்கிட முடியாத நிறை, ஒரு பொருளின் பகுதி (ஆங்கிலம்: சில / ஏதேனும்)",
            "example": "Je bois du café · Nous vulons de la moutarde"
          },
          {
            "name": "உலகளாவிய மறுப்பு சட்டம்",
            "meaning": "நிராகரிப்பு அனைத்து அளவு கட்டுரைகளையும் DE / D'க்கு சுருக்குகிறது (être தவிர)",
            "example": "J'ai un chien ➔ Je n'ai PAS DE chien (ஒருபோதும் பாஸ் un chien)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "எப்போதும் திட்டவட்டமான கட்டுரைகளைத் தூண்டுகிறது (le, la, les) — ஒட்டுமொத்த விருப்பு/வெறுப்புகளை வெளிப்படுத்துகிறது"
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "கணக்கிடப்படாத அளவை எடுக்கும்போது பகுதியளவு கட்டுரைகளை (du, de la, des) தூண்டுகிறது"
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "பூஜ்ஜிய அளவு தூண்டுதல்: கட்டுரைகளை DE / D’ ஆக மாற்றுகிறது"
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "அளவின் வினையுரிச்சொற்கள் எப்போதும் ஒரு கட்டுரை இல்லாமல் DE / D’ (beaucoup de café)"
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90%+ ஆண்பால் ➜ le / un / du ஐப் பயன்படுத்தவும்"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90%+ பெண்பால் ➜ la / une / de la பயன்படுத்தவும்"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "ஒப்பந்தம்: le/la ➔ l’ · du/de la ➔ de l’"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: சூழலைச் சரிபார்க்கவும்",
            "question": "இது பொதுவான விருப்பமா அல்லது குறிப்பிட்ட அறியப்பட்ட பொருளா?",
            "action": "ஆம் எனில் ➔ திட்டவட்டமான (le / la / l' / les)"
          },
          {
            "step": "படி 2: எண்ணிக்கையை சரிபார்க்கவும்",
            "question": "தனிப்பட்ட முழு அலகுகளை (1, 2, 3 உருப்படிகள்) எண்ண முடியுமா?",
            "action": "ஆம் எனில் ➔ காலவரையின்றி (un / une / des)"
          },
          {
            "step": "படி 3: நிறை பொருளைச் சரிபார்க்கவும்",
            "question": "இது கணக்கிடப்படாத திரவமா, நிறை அல்லது உணவுப் பொருளா?",
            "action": "ஆம் என்றால் ➔ பகுதி (du / de la / de l’)"
          },
          {
            "step": "படி 4: நிராகரிப்பு வடிகட்டி",
            "question": "முக்கிய வினை நிராகரிக்கப்பட்டதா (ne... pas) மற்றும் être என்ற வினைச்சொல் அல்லவா?",
            "action": "ஆம் எனில் ➔ கட்டுரையை உடனடியாக DE / D’ ஆகக் குறைக்கவும்"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "பெயர்ச்சொல் பன்மைப்படுத்தல் சூத்திரம்",
            "meaning": "நிலையான பன்மை விதி (முடிவு -s பிரெஞ்சு மொழியில் அமைதியாக உள்ளது)",
            "example": "le livre ➔ les livres · la table ➔ les tables"
          },
          {
            "name": "ஒழுங்கற்ற பன்மை -அல் சூத்திரம்",
            "meaning": "Drop -al மற்றும் அட்டாச் -aux (உச்சரிக்கப்படுகிறது /o/)",
            "example": "un journal ➔ des journaux · un விலங்கு ➔ des animaux"
          },
          {
            "name": "மாறாத பன்மை சூத்திரம்",
            "meaning": "ஏற்கனவே சிபிலண்ட்களில் முடிவடையும் பெயர்ச்சொற்கள் பன்மையில் மாறாது",
            "example": "un pays ➔ des pays · une voix ➔ des voix · un nez ➔ des nez"
          }
        ],
        "triggers": [
          {
            "word": "Suffix -eau / -al",
            "rule": "-sக்கு பதிலாக -x உடன் பன்மைப்படுத்துகிறது (des gâteaux, des cadeaux, des journaux)"
          },
          {
            "word": "Days, months, languages, seasons",
            "rule": "எப்போதும் ஆண்மை (le lundi, le français, l’été, le printemps)"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "எப்போதும் பெண்பால் (லா சிமி, லா பிஸிக், லா பாலிட்டிக்)"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "எப்போதும் ஆண்மை (லெ கிலோமீட்டர், லெ நோர்ட், லூயெஸ்ட்)"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-ment (le gouvernement), -isme (le capitalisme), -age (le voyage), -oir (le miroir), -teur (le directeur)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-tion / -sion (la நாடு), -té (la liberté), -ure (la voiture), -ence / -ance (la science), -ette (la bicyclette)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "லா பிளேஜ், லா கேஜ், லா பேஜ் (-வயது ஆனால் பெண்மை!) · லெ சைலன்ஸ், லெ ஸ்குலெட் (-சி/-டி ஆனால் ஆண்பால்!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வார்த்தையின் முடிவைச் சரிபார்க்கவும்",
            "question": "வார்த்தை -ment, -age, -isme, or -oir என்று முடிகிறதா?",
            "action": "ஆம் எனில் ➔ ஆண்மையை ஒதுக்கவும் (90%+ நிகழ்தகவு)"
          },
          {
            "step": "படி 2: சுருக்கம்/நிலை பின்னொட்டு சரிபார்க்கவும்",
            "question": "வார்த்தை -tion, -sion, -té, -ence, or -ure இல் முடிகிறதா?",
            "action": "ஆம் எனில் ➔ பெண்ணை ஒதுக்கவும் (95%+ நிகழ்தகவு)"
          },
          {
            "step": "படி 3: பன்மை குறிப்பானை சரிபார்க்கவும்",
            "question": "ஒருமை -al, -eau அல்லது -eu இல் முடிகிறதா?",
            "action": "ஆம் எனில் ➔ -aux அல்லது -x உடன் படிவம் பன்மை"
          },
          {
            "step": "படி 4: சிபிலண்ட் முடிவைச் சரிபார்க்கவும்",
            "question": "இது -s, -x அல்லது -z இல் முடிகிறதா?",
            "action": "ஆம் என்றால் ➔ ஒரே மாதிரியான எழுத்துப்பிழையைத் தக்க வைத்துக் கொள்ளுங்கள், கட்டுரையை les/des என மாற்றவும்"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "ஸ்போகன் கியூபெக் பன்மை பிரதிபெயர் விதி",
            "meaning": "இயற்கையான கியூபெக் பிரெஞ்சில், 'ஆன்' என்பது பேச்சில் 'nous' ஐ முழுமையாக மாற்றுகிறது",
            "example": "நௌஸ் மாங்கீன்கள் ➔ மாங்கேயில் (மிகவும் எளிதான இணைப்பு!)"
          },
          {
            "name": "ஸ்போகன் கியூபெக்கில் Tu Elision",
            "meaning": "கியூபெக் பேச்சுப் பதிவேடுகளில் உரையாடல் சுருக்கம்",
            "example": "நீ es prêt ? ➔ T’es prêt ? · Tu as faim ? ➔ டி அஸ் ஃபேம் ?"
          },
          {
            "name": "மூன்றாம் நபர் பன்மை பாலின விதி",
            "meaning": "குறைந்தபட்சம் ஒரு ஆண் கொண்டிருக்கும் எந்தக் குழுவும் ilsக்கு இலக்கணப்படி இயல்புநிலையாக இருக்கும்",
            "example": "மார்க் மற்றும் சோஃபி ➔ ILS · Sophie, Marie et Claire ➔ elles"
          }
        ],
        "triggers": [
          {
            "word": "On",
            "rule": "இலக்கணப்படி ஒருமை (இல்/எல்லே வினை வடிவத்தை எடுக்கும்) ஆனால் 'நாம்' / 'எல்லோரையும்' குறிக்கிறது"
          },
          {
            "word": "Vous",
            "rule": "இரட்டை செயல்பாடு: பன்மை 'நீங்கள் அனைவரும்' அல்லது ஒருமை முறையான/கண்ணியமான 'நீங்கள்'"
          },
          {
            "word": "Il vs Ce",
            "rule": "வெற்று உரிச்சொற்களுடன் 'il' ஐப் பயன்படுத்தவும் (Il est tard); மாற்றியமைக்கப்பட்ட பெயர்ச்சொற்களுடன் 'c'est' ஐப் பயன்படுத்தவும் (C’est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "உயிரெழுத்துக்களுக்கு முன் எப்போதும் 'e' ஐ விடவும்/அமைதியான h (J'habite, J'aime, J'écoute)"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "j’ai, j’arrive, t’as, t’es (je க்கு கட்டாய நீக்கம், tu க்காக பேசப்படும்)"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "எப்போதும் போலி விஷயமாக 'il' ஐப் பயன்படுத்துகிறது: Il pleut, Il neige, Il est 3h"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "'ஆன்' பயன்படுத்தவும்: என் ஹைவர், போர்டே அன் மாண்டோவில்"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: பார்வையாளர்களை அடையாளம் காணவும்",
            "question": "நீங்கள் ஒரு நபரிடம் முறைப்படி பேசுகிறீர்களா அல்லது ஒரு குழுவிடம் பேசுகிறீர்களா?",
            "action": "VOUS (முறையான அல்லது பன்மை) பயன்படுத்தவும்"
          },
          {
            "step": "படி 2: நீங்கள் 'நாங்கள்' பற்றி பேசுகிறீர்களா?",
            "question": "இது பேசப்படும் அல்லது முறைசாரா பிரஞ்சு?",
            "action": "ON ஐப் பயன்படுத்தவும் (+ 3வது நபர் ஒருமை வினைச்சொல்)"
          },
          {
            "step": "படி 3: கலப்பு குழுக்களை பகுப்பாய்வு செய்யுங்கள்",
            "question": "குழுவில் குறைந்தது 1 ஆண்பால் உள்ளதா?",
            "action": "ILS ஐப் பயன்படுத்தவும் (100% அனைத்து பெண் குழுக்களும் ELLES ஐ எடுத்துக்கொள்கிறார்கள்)"
          },
          {
            "step": "படி 4: உயிரெழுத்து எல்லையை சரிபார்க்கவும்",
            "question": "அடுத்த வினைச்சொல் உயிரெழுத்தில் தொடங்குமா?",
            "action": "ஒப்பந்தம் Je➔ J’"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ER வினைச்சொற்கள் வழக்கமான சூத்திரம்",
            "meaning": "அனைத்து பிரெஞ்சு வினைச்சொற்களிலும் 90% இந்த சரியான முடிவு வரிசையைப் பின்பற்றுகின்றன",
            "example": "பார்லர் ➔ ஜெ பார்லே, டு பார்லெஸ், இல் பார்லே, நௌஸ் பார்லன்ஸ், வௌஸ் பார்லெஸ், ஐஎல்ஸ் பார்லென்ட்"
          },
          {
            "name": "-ஐஆர் வினைச்சொற்கள் வழக்கமான (ஃபினிர்) ஃபார்முலா",
            "meaning": "குழு 2 வழக்கமான வினைச்சொற்கள் பன்மை நபர்களில் -iss- infix ஐச் செருகுகின்றன",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "சைலண்ட் 'பூட்' முடிவுகளின் விதி",
            "meaning": "nous (-ons) மற்றும் vous (-ez) மட்டுமே தண்டுக்கு ஒரு குரல் எழுத்தைச் சேர்க்கிறது!",
            "example": "parle, parles, parlent அனைத்தும் ஒரே மாதிரியாக உச்சரிக்கப்படுகின்றன: /paʁl/"
          }
        ],
        "triggers": [
          {
            "word": "Maintenant / En ce moment",
            "rule": "நிகழ்கால குறிப்பான் (தற்போது நடக்கும் செயல்)"
          },
          {
            "word": "Tous les jours / Chaque semaine",
            "rule": "நிகழ்கால பழக்கமான மார்க்கர் (வழக்கமான வழக்கம்)"
          },
          {
            "word": "-ons ending",
            "rule": "குரல் /ɔ̃/ நாசி ஒலி — universal 1st person plural marker"
          },
          {
            "word": "-ez ending",
            "rule": "குரல் /இ/ உயிர் ஒலி — உலகளாவிய 2வது நபர் பன்மை குறிப்பான்"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "ஒரு நாசி என்று உச்சரிக்க வேண்டாம்! Ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "je/tu/il/ils (boot இன் உள்ளே) தண்டு மாற்றங்கள், nous/vous இல் இயல்பு நிலைக்குத் திரும்புகிறது: acheter ➔ j'achète, nous achetons"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "மேங்கர் ➔ nous mangeons (மென்மையான 'j' ஒலியைப் பாதுகாக்க 'e' ஐ வைக்கவும்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வினைச்சொல் குழுவை அடையாளம் காணவும்",
            "question": "முடிவிலி -er, -ir, அல்லது -re இல் முடிகிறதா?",
            "action": "அடிப்படை தண்டு பிரித்தெடுக்க துண்டு முடிவு"
          },
          {
            "step": "படி 2: விஷயத்தைப் பொருத்தவும்",
            "question": "செயலை யார் செய்கிறார்கள் (je, tu, il, nous, vous, ils)?",
            "action": "தொடர்புடைய முடிவு பின்னொட்டைத் தேர்ந்தெடுக்கவும்"
          },
          {
            "step": "படி 3: உச்சரிப்பு வடிகட்டி",
            "question": "பொருள் 'பூட்' (je/tu/il/ils) க்குள் உள்ளதா?",
            "action": "முற்றிலும் அமைதியாக முடிக்கவும்! தண்டு மட்டும் கேட்கிறது"
          },
          {
            "step": "படி 4: பன்மை சரிபார்ப்பு",
            "question": "இது nous அல்லது vous?",
            "action": "முடிவைக் கேட்கும்படி உச்சரிக்கவும்: -ons (/ɔ̃/) அல்லது -ez (/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "நிலையான வாக்கிய வரிசை சூத்திரம்",
            "meaning": "அடிப்படை உறுதிமொழி வாக்கியங்களுக்கான ஆங்கில வரிசையை பிரஞ்சு அறிவிப்பு பின்பற்றுகிறது",
            "example": "அலெக்ஸ் (எஸ்) மாங்கே (வி) யுனே பொம்மே (ஓ)"
          },
          {
            "name": "மறுப்பு சாண்ட்விச் ஃபார்முலா",
            "meaning": "நிராகரிப்பு இரண்டு ரொட்டித் துண்டுகள் போல இணைந்த வினைச்சொல்லைச் சுற்றி வருகிறது",
            "example": "Je NE parle PAS · Elle N'aime PAS le bruit"
          },
          {
            "name": "கேள்வி உருவாக்கம் 3-அடுக்குகள்",
            "meaning": "பதிவேட்டைப் பொறுத்து ஆம்/இல்லை என்ற கேள்வியைக் கேட்க மூன்று வழிகள்",
            "example": "Tu viens ? (சாதாரண) · Est-ce que tu viens ? (தரநிலை) · Viens-tu ? (முறையான)"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "நிலையான மறுப்பு (இல்லை)"
          },
          {
            "word": "Ne ... jamais",
            "rule": "எதிர்மறை பழக்கம் (ஒருபோதும் இல்லை) - 'பாஸ்' ஐ மாற்றுகிறது"
          },
          {
            "word": "Ne ... plus",
            "rule": "எதிர்மறை தொடர்ச்சி (இனி / இனி இல்லை) — 'pas' ஐ மாற்றுகிறது"
          },
          {
            "word": "Est-ce que",
            "rule": "யுனிவர்சல் கேள்வி திறப்பான்: நிலையான SVO சொல் வரிசையைப் பாதுகாக்கிறது"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ ஜெ நே பாஸ் சைஸ் ➔ ✓ ஜெ நே சைஸ் பாஸ் (வினைச்சொல்)"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "ஜே'சைஸ் பாஸ் · ஒய் வியன்ட் பாஸ் (வாய்வழி பிரஞ்சு மொழியில் மிகவும் பொதுவானது)"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai, n'aime, n'écoute, n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: இணைந்த வினைச்சொல்லை அடையாளம் காணவும்",
            "question": "முதன்மை இணைந்த வினைச்சொல் என்ன?",
            "action": "விஷயத்தை நேரடியாக முன் வைக்கவும்"
          },
          {
            "step": "படி 2: நீங்கள் மறுக்கிறீர்களா?",
            "question": "வேண்டாம் / ஒருபோதும் / இனி வேண்டாம் என்று சொல்ல விரும்புகிறீர்களா?",
            "action": "வினைச்சொல்லை சாண்ட்விச் செய்யவும்: NE + Verb + PAS / JAMAIS / PLUS"
          },
          {
            "step": "படி 3: நீங்கள் ஒரு கேள்வி கேட்கிறீர்களா?",
            "question": "நீங்கள் எந்தப் பதிவேட்டைப் பயன்படுத்துகிறீர்கள்?",
            "action": "முறைசாரா: உள்ளுணர்வு (?) · தரநிலை: Est-ce que... · முறையான: தலைகீழ் வினை-பொருள்"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "பெயரடை ஒப்பந்தம் மேட்ரிக்ஸ் ஃபார்முலா",
            "meaning": "உரிச்சொற்கள் பாலினம் மற்றும் எண் இரண்டிலும் அவற்றின் பெயர்ச்சொல்லுடன் பொருந்த வேண்டும்",
            "example": "Grand (M) · Grande (F) · Grands (M.Pl) · Grandes (F.Pl)"
          },
          {
            "name": "BAGS வேலை வாய்ப்பு சட்டம்",
            "meaning": "முன்னால் செல்லும் BAGS தவிர, பெரும்பாலான பெயரடைகள் பெயர்ச்சொல்லுக்குப் பிறகு செல்கின்றன",
            "example": "un GRAND livre (பைகள்: அளவு) vs un livre ROUGE (நிறம்: பெயர்ச்சொல்லுக்குப் பிறகு)"
          },
          {
            "name": "Beau, Nouveau, Vieux க்கான உயிர் சுவிட்ச்",
            "meaning": "உயிர்/h உடன் தொடங்கும் ஆண்பால் பெயர்ச்சொற்களுக்கு முன் சிறப்பு ஆண்பால் வடிவங்கள்",
            "example": "beau ➔ bel · nouveau ➔ nouvel · vieux ➔ vieil"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "beau, joli, jeune, vieux, bon, mauvais, Grand, petit ➔ பெயர்ச்சொல்லுக்கு முன் வைக்கப்பட்டது"
          },
          {
            "word": "Colors & Shapes",
            "rule": "bleu, rouge, rond, carré ➔ பெயர்ச்சொல்லுக்குப் பிறகு வைக்கப்பட்டது (une voiture rouge)"
          },
          {
            "word": "Nationalities",
            "rule": "கனடியன், ஃபிரான்சாய்ஸ், அமெரிகெய்ன் ➔ பெயர்ச்சொல்லுக்குப் பிறகு வைக்கப்பட்டது (அன் கஃபே கியூபெகோயிஸ்)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "-s அல்லது -e ஐ ஒருபோதும் சேர்க்க வேண்டாம்! (des chaussures marron)"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "heureux ➔ heureuse, curieux ➔ curieuse"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "ஆக்டிஃப் ➔ செயலில், கிரியேட்டிஃப் ➔ கிரியேட்டிவ், ஸ்போர்ட்டிஃப் ➔ விளையாட்டு"
          },
          {
            "pattern": "-el / -en ➜ -elle / -enne",
            "note": "இயற்கை ➔ இயல்பில், கனடியன் ➔ கனடியன்"
          },
          {
            "pattern": "-er ➜ -ère",
            "note": "பிரீமியர் ➔ பிரீமியர், செர் ➔ சேர்"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: சரிபார்ப்பு நிலை (BAGS)",
            "question": "இது அழகு, வயது, நன்மை அல்லது அளவு?",
            "action": "ஆம் எனில் ➔ பெயர்ச்சொல்லுக்கு முன் வைக்கவும். இல்லையெனில் ➔ பெயர்ச்சொல்லுக்குப் பின் வைக்கவும்"
          },
          {
            "step": "படி 2: பெயர்ச்சொல்லின் பாலினத்தைச் சரிபார்க்கவும்",
            "question": "பெயர்ச்சொல் பெண்மையா?",
            "action": "சேர் -e (அல்லது உருமாற்ற பின்னொட்டு: -eux ➔ -euse, -if ➔ -ive)"
          },
          {
            "step": "படி 3: பெயர்ச்சொல் எண்ணைச் சரிபார்க்கவும்",
            "question": "பெயர்ச்சொல் பன்மையா?",
            "action": "சேர் -s (அல்லது -es என்றால் பெண்பால் பன்மை)"
          },
          {
            "step": "படி 4: உயிர் மோதலை சரிபார்க்கவும்",
            "question": "இது ஆண்பால் உயிர் பெயர்ச்சொல்லுக்கு முன் beau/nouveau/vieux?",
            "action": "பெல், நோவல், வையில் பயன்படுத்தவும்"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "கட்டாய 'à' சுருக்க சூத்திரம்",
            "meaning": "முன்மொழிவு 'à' ஆண்பால் மற்றும் பன்மை திட்டவட்டமான கட்டுரைகளுடன் இணைகிறது",
            "example": "Je vais au gym (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "கட்டாய 'டி' சுருக்க சூத்திரம்",
            "meaning": "முன்மொழிவு 'de' ஆண்பால் மற்றும் பன்மை திட்டவட்டமான கட்டுரைகளுடன் இணைகிறது",
            "example": "Le retour du roi (de+le) · La liste des invités (de+les)"
          },
          {
            "name": "புவியியல் முன்மொழிவு சூத்திரம்",
            "meaning": "இருப்பிட முன்மொழிவுகள் இலக்கின் இலக்கண பாலினத்தைப் பொறுத்தது",
            "example": "À Montreal, EN பிரான்ஸ், AU கனடா, AUX États-Unis"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "எப்போதும் à: à Montreal, à Québec, à Paris, à Toronto (கட்டுரை இல்லை!)"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "-e ➜ பெண்பால்: en பிரான்ஸ், en கொலம்பி, en ஒன்டாரியோ (உயிரெழுத்தில் தொடங்குகிறது)"
          },
          {
            "word": "AU + masculine country",
            "rule": "-e இல் முடிவதில்லை: au Canada, au Mexique, au Japon"
          },
          {
            "word": "Chez + person / professional",
            "rule": "'வீடு/அலுவலகத்தில்' என்றால்: chez moi, chez le médecin, chez Jean"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ à le உணவகம் ➔ ✓ au உணவகம் · ❌ de le parc ➔ ✓ du parc"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "லா பிரான்ஸ் ➔ en பிரான்ஸ், லா சூயிஸ் ➔ en Suisse (விதிவிலக்கு: le Mexique ➔ au Mexique)"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "À கியூபா, à மடகாஸ்கர், à Haïti"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: இலக்கு வகையைச் சரிபார்க்கவும்",
            "question": "இது ஒரு நகரமா, ஒரு நாடு, அல்லது ஒரு நபரா?",
            "action": "நகரம் ➔ À · நபர் ➔ Chez · நாடு ➔ படி 2 ஐப் பார்க்கவும்"
          },
          {
            "step": "படி 2: நாட்டின் பாலினத்தைச் சரிபார்க்கவும்",
            "question": "நாடு -e இல் முடிகிறதா அல்லது உயிரெழுத்தில் தொடங்குகிறதா?",
            "action": "ஆம் எனில் ➔ EN (en இத்தாலி, en பிரான்ஸ்) · இல்லை என்றால் ➔ AU (au Canada)"
          },
          {
            "step": "படி 3: பன்மை நாடுகளைச் சரிபார்க்கவும்",
            "question": "நாடு பன்மையா (États-Unis, Pays-Bas)?",
            "action": "AUX (aux États-Unis) பயன்படுத்தவும்"
          },
          {
            "step": "படி 4: திட்டவட்டமான கட்டுரை இணைவை சரிபார்க்கவும்",
            "question": "நீங்கள் à/de ஐ le அல்லது les உடன் இணைக்கிறீர்களா?",
            "action": "ஒப்பந்தம்: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "உடைமை ஒப்பந்த சூத்திரம்",
            "meaning": "உடைமை உரிச்சொற்கள் உடைமைப் பொருளுடன் உடன்படுகின்றன, உரிமையாளர் அல்ல!",
            "example": "அவரது கார் = ச வோட்டர் (வாய்ச்சர் என்பது ஃபெம்) · அவரது புத்தகம் = மகன் லிவ்ரே (லிவ்ரே மாஸ்க்)"
          },
          {
            "name": "உயிரெழுத்து மோதல் உயிர்காக்கும் விதி",
            "meaning": "பெண்பால் பெயர்ச்சொற்கள் உயிரெழுத்தில் தொடங்கி ஒலிப்பு ஓட்டத்திற்கான ஆண்பால் வடிவங்களுக்கு மாறுகின்றன",
            "example": "❌ மா அமி ➔ ✓ மோன் அமி · ❌ ச ஈகோல் ➔ ✓ மகன் எகோல்"
          },
          {
            "name": "ஆர்ப்பாட்ட உரிச்சொற்கள் சூத்திரம்",
            "meaning": "இது அல்லது அது; cet மோசமான உயிரெழுத்து நிறுத்தங்களைத் தவிர்க்கிறது",
            "example": "ce livre · cet hotel · cette table · ces clés"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "உயிரெழுத்தில் தொடங்கும் ஆண்பால் பெயர்ச்சொற்கள் அல்லது பெண்பால் பெயர்ச்சொற்களுக்குப் பயன்படுத்தப்படுகிறது"
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "மெய்யெழுத்தில் தொடங்கும் பெண்பால் பெயர்ச்சொற்களுக்கு கண்டிப்பாகப் பயன்படுத்தப்படுகிறது"
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "1 உரிமையாளருக்கான உலகளாவிய பன்மை உடைமைகள் (பாலினத்தைப் பொருட்படுத்தாமல்)"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "பல உரிமையாளர்களுக்கான ஒற்றை உடைமை (எங்கள்/உங்கள்/அவர்கள்)"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "Mon amie, son idée, ton histoire (ஒலி மென்மையானது, /a-a/ மோதலைத் தவிர்க்கவும்)"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "Cet homme, cet apartement, cet été"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "மகன் லிவ்ரே = அவன்/அவள் புத்தகம் (1 உரிமையாளர்); leur livre = அவர்களின் புத்தகம் (பல உரிமையாளர்கள்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வைத்திருக்கும் பொருளை அடையாளம் காணவும்",
            "question": "அதன் பாலினம் மற்றும் எண் என்ன?",
            "action": "பன்மை ➔ mes/tes/ses/nos/vos/leurs. ஒருமை ➔ படி 2 ஐப் பார்க்கவும்"
          },
          {
            "step": "படி 2: உயிர் தொடக்கத்தை சரிபார்க்கவும்",
            "question": "ஒருமை பெயர்ச்சொல் உயிரெழுத்தில் தொடங்குகிறதா அல்லது மௌனமான h இல் தொடங்குகிறதா?",
            "action": "ஆம் எனில் ➔ மான் / டன் / மகன் / செட் பயன்படுத்த வேண்டும் (பெண்பால் இருந்தாலும் கூட!)"
          },
          {
            "step": "படி 3: மேட்ச் ஓனர்",
            "question": "யாருடையது (ஜெ, து, இல்/எல்லே, நௌஸ், வௌஸ், இல்ஸ்)?",
            "action": "சரியான நபரின் உடைமை வரிசையைத் தேர்ந்தெடுக்கவும்"
          },
          {
            "step": "படி 4: ஆர்ப்பாட்ட வடிகட்டி",
            "question": "நீங்கள் 'இது/அது' என்று சுட்டிக்காட்டுகிறீர்களா?",
            "action": "ce (M) / cet (M+vowel) / cette (F) / ces (பன்மை)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "பிரெஞ்சு 70களின் அடிப்படை-60 கணித சூத்திரம்",
            "meaning": "70-79 என்ற பிரெஞ்சு எண்கள் 60க்கு மேல் 10 முதல் 19 வரை எண்ணுகின்றன",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "பிரஞ்சு 80களின் அடிப்படை-20 கணித சூத்திரம்",
            "meaning": "விஜிசிமல் பேஸ்-20 கணக்கீடு செல்டிக் பிரஞ்சு மொழியிலிருந்து பெறப்பட்டது",
            "example": "80 இல் ஒரு -s (குவாட்டர்-விங்ட்ஸ்), துளிகள் -கள் ஒரு எண்ணைத் தொடர்ந்து வரும் போது (குவாட்ரே-விங்ட்-அன்)"
          },
          {
            "name": "பிரெஞ்சு 90களின் கணித சூத்திரம்",
            "meaning": "4 முறை 20 மற்றும் பதின்ம வயதினர் (10 முதல் 19 வரை)",
            "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
          },
          {
            "name": "கடிகார நேரம் சொல்லும் ஃபார்முலா",
            "meaning": "நிலையான பிரஞ்சு கடிகார சூத்திரம் வெளிப்படையாக 'heures' பயன்படுத்துகிறது",
            "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "பிரான்ஸ் மற்றும் கியூபெக்கில் 70 (60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "பிரான்ஸ் மற்றும் கியூபெக்கில் 80 (4 x 20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "பிரான்ஸ் மற்றும் கியூபெக்கில் 90 (4 x 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "21, 31, 41, 51, 61, 71 (et-un) மற்றும் ஹாஃப் பாஸ்ட் (et demie) க்கான இணைப்பிகள்"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = quatre-vingt-un (NO 'et'!), 91 = quatre-vingt-onze (NO 'et'!)"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "அனைத்து கூட்டு எண் பகுதிகளும் இப்போது ஹைபனேட் செய்யப்படலாம்: deux-cent-cinquante"
          },
          {
            "pattern": "Half past agreement",
            "note": "une heure et demie (heure உடன் பெண் ஒப்பந்தம்) vs மிடி எட் டெமி (மாஸ்க்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: Decile (70s, 80s, 90s) சரிபார்க்கவும்",
            "question": "எண் 70கள், 80கள் அல்லது 90களில் உள்ளதா?",
            "action": "70s ➔ 60 + டீன் ஏஜ் · 80s ➔ 4x20 + இலக்கம் · 90s ➔ 4x20 + டீன் ஏஜ்"
          },
          {
            "step": "படி 2: 1s இணைப்பியை சரிபார்க்கவும்",
            "question": "இது 21, 31, 41, 51, 61, 71?",
            "action": "'et' சேர்: soixante-et-un. (81 மற்றும் 91 'et' எடுக்கவில்லை)"
          },
          {
            "step": "படி 3: நேரத்தைக் கூறுதல்",
            "question": "அரை மணி நேரம் கடந்ததா?",
            "action": "'moins' பயன்படுத்தவும்: 4:50 = 5h moins dix"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "பாஸே கம்போஸ் மாஸ்டர் ஃபார்முலா",
            "meaning": "முடிக்கப்பட்ட, ஒரு முறை நிகழ்வுகளுக்கான கலவை கடந்த காலம்",
            "example": "J’ai mangé (avoir) · Je suis parti (être)"
          },
          {
            "name": "ÊTRE துணைத் தேர்வு சூத்திரம்",
            "meaning": "இயக்கம்/நிலை-மாற்றத்தின் குறிப்பிட்ட வினைச்சொற்கள் மற்றும் பிரதிபலிப்புகள் மட்டுமே être ஐப் பயன்படுத்துகின்றன",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "பார்டிசிபிள் ஃபார்முலா",
            "meaning": "நிலையான வழக்கமான பங்கேற்பு முடிவுகள்",
            "example": "பார்லர் ➜ பார்லே · ஃபினிர் ➜ ஃபினி · கலந்து கொள்"
          },
          {
            "name": "ஒப்பந்தச் சட்டம்",
            "meaning": "பெண்ணுக்கு -e, பன்மைக்கு -s ஐ être உடன் சேர்க்கவும்",
            "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "கடந்த கால தூண்டுதல்: நேற்று / நேற்று இரவு"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "திடீர் குறுக்கீடு தூண்டுதல்: எப்போதும் Passé Composé"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "குறிப்பிட்ட தனிமைப்படுத்தப்பட்ட நிகழ்வு தூண்டுதல்"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "டெவெனிர், ரெவெனிர், மான்டர், ரெஸ்டர், சோர்டிர், வெனிர், அலர், நாட்ரே, டெஸ்சென்ட்ரே, என்ட்ரர், ரெண்ட்ரர், டோம்பர், ரிட்டோர்னர், வந்தவர், மொரிர், பார்டிர், பாஸர்"
          }
        ],
        "patterns": [
          {
            "pattern": "Avoir has NO agreement with Subject",
            "note": "எல்லே எ மாங்கே (NO -e!), எல்லெஸ் ஆன்ட் ரீக்டே (NO -es!)"
          },
          {
            "pattern": "Irregular participles to memorize",
            "note": "fait (fair), pris (prendre), vu (voir), eu (avoir), été (être), mis (mettre)"
          },
          {
            "pattern": "Reflexive agreement exception",
            "note": "Elle s'est lavé les mains (COD 'les mains' என்பது வினைச்சொல்லுக்குப் பிறகு இருப்பதால் உடன்பாடு இல்லை)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வினைச்சொல் பிரதிபலிப்பு (se...)?",
            "question": "வினைச்சொல்லில் se / s’ உள்ளதா?",
            "action": "ஆம் எனில் ➔ Aux ÊTRE ஆக இருந்தால் (நேரடி பொருள் பின்தொடரும் வரை பங்கேற்பாளர்கள் விஷயத்துடன் உடன்படுவார்கள்)"
          },
          {
            "step": "படி 2: இது டாக்டர் திருமதி வாண்டர்டிராம்பில் உள்ளதா?",
            "question": "இது 17 இயக்கம்/மாற்றம்-நிலை வினைச்சொற்களில் ஒன்றா?",
            "action": "ஆம் எனில் ➔ Aux என்பது ÊTRE (பாதுகாப்பு பொருள் உடன்படுகிறது)"
          },
          {
            "step": "படி 3: இயல்புநிலை துணை",
            "question": "மற்ற அனைத்து வினைச்சொற்களும்",
            "action": "AVOIR ஐப் பயன்படுத்தவும் (பொருள் ஒப்பந்தம் இல்லை)"
          },
          {
            "step": "படி 4: பங்கேற்பை உருவாக்கவும்",
            "question": "வழக்கமான தண்டு அல்லது ஒழுங்கற்ற வடிவத்தில் விண்ணப்பிக்கவும்",
            "action": "-er ➔ -é, -ir ➔ -i, -re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "நேரடி பொருள் பிரதிபெயர் (COD) சூத்திரம்",
            "meaning": "எந்த முன்மொழிவு இல்லாமல் நேரடி பொருள்களை மாற்றுகிறது",
            "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
          },
          {
            "name": "மறைமுக பொருள் பிரதிபெயர் (COI) சூத்திரம்",
            "meaning": "'à + நபர்' (அவருக்கு / அவளுக்கு / அவர்களுக்கு) மாற்றுகிறது",
            "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes பெற்றோர்கள் ➔ Je LEUR téléphone"
          },
          {
            "name": "பொருள் பிரதிபெயர் வைப்பு சூத்திரம்",
            "meaning": "பிரெஞ்சு பொருள் பிரதிபெயர்களை வினைச்சொல்லுக்கு முன் வைக்கிறது (ஆங்கிலத்திற்கு எதிர்)",
            "example": "நான் உன்னை நேசிக்கிறேன் ➔ Je T'aime (Je aime toi அல்ல)"
          },
          {
            "name": "ஃபியூச்சர் ப்ரோனாவுன் பிளேஸ்மென்ட் அருகில்",
            "meaning": "பிரதிபெயர் அது தர்க்கரீதியாகச் சேர்ந்த முடிவிலி வினைச்சொல்லை அணைத்துக்கொள்கிறது",
            "example": "ஜெ வைஸ் லே வொயர் (ஜெ லெ வைஸ் வொயர் அல்ல)"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "மறைமுக பிரதிபெயர் 'அவருக்கு' அல்லது 'அவளுக்கு' (பாலினம்-நடுநிலை!)"
          },
          {
            "word": "Leur",
            "rule": "'அவர்களுக்கு' என்று பொருள்படும் மறைமுக பிரதிபெயர் (ஒரு-s-ஐ பிரதிபெயராக எடுத்துக்கொள்ள வேண்டாம்"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "கிளாசிக் COI தூண்டுதல் வினைச்சொற்கள் தேவைப்படும் lui/leur"
          },
          {
            "word": "Moi / Toi",
            "rule": "முன்மொழிவுகளுக்குப் பிறகு அல்லது நேர்மறையான கட்டாயத்தில் பயன்படுத்தப்படும் அழுத்த பிரதிபெயர்கள் (Regarde-moi!)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "கேள்: 'à' என்ற முன்னுரை உள்ளதா? ஆம் எனில் ➔ COI (lui/leur); இல்லை என்றால் ➔ COD (le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "Je ne le vois pas (இயற்கை பெயர் மறுப்பு சாண்ட்விச் உள்ளே இருக்கும்!)"
          },
          {
            "pattern": "Elision with vowels",
            "note": "Je l'adore, il m'attend, on t'écoute"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வினைச்சொல்லின் பொருளை அடையாளம் காணவும்",
            "question": "என்ன அல்லது யார் நடவடிக்கை பெறுகிறார்கள்?",
            "action": "பொருள் சொற்றொடரை முன்னிலைப்படுத்தவும்"
          },
          {
            "step": "படி 2: ஒரு நபருக்கு முன் 'à' என்ற முன்மொழிவு உள்ளதா?",
            "question": "வினைச்சொல் 'à quelqu'un' என்பதை எடுத்துக்கொள்கிறதா?",
            "action": "ஆம் எனில் ➔ COI: LUI (ஒருமை) / LEUR (பன்மை)"
          },
          {
            "step": "படி 3: நேரடி பொருள் (முன்மொழிவு இல்லை)?",
            "question": "இது நேரடியாக 'என்ன' அல்லது 'யார்' என்று பதிலளிக்கிறதா?",
            "action": "ஆம் எனில் ➔ குறியீடு: LE / LA / L' / LES"
          },
          {
            "step": "படி 4: வினைச்சொல்லுக்கு முன் நிலை",
            "question": "அது எங்கே போகிறது?",
            "action": "இணைந்த வினைச்சொல்லுக்கு முன் (அல்லது இருந்தால் முடிவிலிக்கு முன்)"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "கட்டாய உருவாக்கம் சூத்திரம்",
            "meaning": "டிராப் பொருள் ப்ரோநாயௌன்; கட்டளைகளுக்கு 3 வினை நபர்கள் மட்டுமே உள்ளனர்",
            "example": "Tu viens ➔ Viens ! · Nous allons ➔ Allons ! · Vous mangez ➔ Mangez !"
          },
          {
            "name": "தி -ER வினை 'து' -எஸ் டிராப் சட்டம்",
            "meaning": "நன்றி ➔ அன்புடன்! · தூ வாஸ் ➔ வா !",
            "example": "பார்லே ! (பார்லஸ் அல்ல!) · Écoute ! (எகூட்ஸ் அல்ல!)"
          },
          {
            "name": "மாதிரி வினைச்சொற்கள் சூத்திரம்",
            "meaning": "மாதிரிகள் இணைந்தவை, இரண்டாம் நிலை செயல் முடிவிலியில் இருக்கும்",
            "example": "Je peux venir · Il doit partir · Nous volons manger"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "திறன் அல்லது கண்ணியமான அனுமதியை வெளிப்படுத்துகிறது ('முடியும் / கூடும்')"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "கடமை, கடமை அல்லது நிகழ்தகவை வெளிப்படுத்துகிறது ('கட்டாயம் / வேண்டும்')"
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "விருப்பம்/விருப்பத்தை வெளிப்படுத்துகிறது ('விரும்புவது') ➔ நாகரீகத்திற்கு 'voudrais' பயன்படுத்தவும்"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "ஆள்மாறான கடமை ('ஒருவர் வேண்டும் / அது அவசியம்')"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "வினைச்சொல்லுக்குப் பிறகு ஹைபனேட்: மாங்கே-லே ! டோனஸ்-மோய்!"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "பொதுவாக வினைச்சொல்லுக்கு முந்தையது: நே லே மாங்கே பாஸ் ! நே மி டோன் பாஸ்!"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "வாஸ்-ஒய் ! மாங்கேஸ்-என் ! (உயிர் மோதலைத் தடுக்க மட்டுமே மீட்டமைக்கிறது)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: முகவரியைத் தேர்ந்தெடுக்கவும்",
            "question": "நீங்கள் ஒரு நண்பருக்கு (து), ஒரு குழு/கண்ணியமான (வௌஸ்) அல்லது உங்களையும் (நௌஸ்) சேர்த்துக் கட்டளையிடுகிறீர்களா?",
            "action": "tu, nous அல்லது vous என்பதைத் தேர்ந்தெடுக்கவும்"
          },
          {
            "step": "படி 2: பொருள் பிரதிபெயரை கைவிடவும்",
            "question": "Tu / nous / vous ஐ அகற்று",
            "action": "வினைச்சொல்லை மட்டும் வைத்திருங்கள்"
          },
          {
            "step": "படி 3: -ER 'tu' படிவத்தை சரிபார்க்கவும்",
            "question": "இது 'து' வடிவில் உள்ள -ER வினையா?",
            "action": "இறுதி எழுத்தான 's' ஐ விடுங்கள் (பார்லே! குறித்து !)"
          },
          {
            "step": "படி 4: உறுதிப்படுத்தல் மற்றும் எதிர்மறையை சரிபார்க்கவும்",
            "question": "இது 'செய்' அல்லது 'செய்யாதே' கட்டளையா?",
            "action": "உறுதிமொழி: வினைச்சொல்-பிரதிபெயர் (Aide-moi!) · எதிர்மறை: Ne pronoun verb pas (Ne m'aide pas !)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est vs Il est முடிவு ஃபார்முலா",
            "meaning": "மாற்றியமைக்கப்பட்ட பெயர்ச்சொற்களுடன் c'est ஐப் பயன்படுத்தவும்; வெற்று உரிச்சொற்களுடன் நேரடியாகப் பயன்படுத்தவும்",
            "example": "C'est un bon médecin (மாற்றியமைக்கப்பட்ட பெயர்ச்சொல்) vs Il est intelligent (அப்பட்டமான பெயரடை)"
          },
          {
            "name": "Il y a Existence & Past Formula",
            "meaning": "இரட்டை அர்த்தம்: இருப்பு நிலை அல்லது கடந்த காலத்திற்கு முன்பு",
            "example": "Il y a deux styles sur la table · Je suis Arrivé il y a dix minutes"
          },
          {
            "name": "Avoir Besion / Envie Formulas",
            "meaning": "பிரெஞ்சில் தேவை/விரும்புவது தேவை/ஆசையின் உடல் உடைமையை வெளிப்படுத்துகிறது",
            "example": "J'ai besoin d'eau · J'ai envie de voyager"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "தொடர்ந்து கட்டுரை + பெயர்ச்சொல், பெயர்கள் அல்லது முழு அறிக்கைகள் (C'est génial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "கட்டுரை அல்லது வெற்று உரிச்சொற்கள் இல்லாத தொழில்களால் பின்பற்றப்படுகிறது (Il est avocat, Elle est gentille)"
          },
          {
            "word": "Il y a",
            "rule": "மாறாதது: ஒருமை அல்லது பன்மை பெயர்ச்சொல்லைத் தொடர்ந்து 'il y a' இருக்கும்"
          },
          {
            "word": "Avoir l'air",
            "rule": "'தோற்றம்/தோற்றம்' எனப் பொருள்படும், அதைத் தொடர்ந்து உரிச்சொல்: Tu as l'air fatigué"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ Il est un médecin ➔ ✓ C'est un médecin அல்லது Il est médecin (வெற்றுத் தொழில்)"
          },
          {
            "pattern": "Negation of il y a",
            "note": "Il n'y a pas DE + noun (de: Il n'y a pas de problème என்பதன் பகுதி துளிகள்)"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "J'ai besoin d'argent, j'ai envie d'apprendre"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வினைச்சொல்லைப் பின்தொடர்வதைச் சரிபார்க்கவும்",
            "question": "தீர்மானிப்பவர்/கட்டுரை (un, une, le, mon) உள்ளதா?",
            "action": "ஆம் எனில் ➔ C'EST ஐப் பயன்படுத்தவும் (C'est un prof)"
          },
          {
            "step": "படி 2: இது வெறும் பெயரடையா அல்லது வெறும் தொழிலா?",
            "question": "வார்த்தைக்கு முன் கட்டுரை இல்லையா?",
            "action": "ஆம் எனில் ➔ IL EST / ELLE EST ஐப் பயன்படுத்தவும் (Il est prof, Elle est calme)"
          },
          {
            "step": "படி 3: இருப்பதைக் குறிக்கிறதா?",
            "question": "'இருக்கிறது / இருக்கிறது' என்று சொல்ல வேண்டுமா?",
            "action": "IL Y A ஐப் பயன்படுத்தவும் (பன்மைக்கு மாறாது)"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "கியூபெக் உயர் அதிர்வெண் லெக்சிகல் ஃபார்முலா",
            "meaning": "மாண்ட்ரீல் & க்யூசி தினசரி வாழ்க்கையில் கேட்கப்படும் நிலையான கியூபெக் சொற்கள்",
            "example": "பெட்டிட் டிஜியூனர் ➜ டிஜியூனர் · டிஜியூனர்"
          },
          {
            "name": "கியூபெக் அஃப்ரிகேஷன் சட்டம்",
            "meaning": "உயர் முன் உயிரெழுத்துக்களுக்கு முன், /t/ மற்றும் /d/ இயற்கையாகவே ஒரு நுட்பமான அஃப்ரிகேட் ஹிஸ்ஸை உருவாக்குகிறது",
            "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "கியூபெக் விசாரணை -து துகள்",
            "meaning": "கியூபெக் பிரெஞ்சு மொழியில் உரையாடல் கேள்வி குறிப்பான்",
            "example": "Tu viens-tu ? (நீங்கள் வருகிறீர்களா?) · C'est-tu bon ? (நல்லதா?)"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "கியூபெக் 'ஃபேர் டு ஷாப்பிங்' (ஷாப்பிங் செல்ல)"
          },
          {
            "word": "Fin de semaine",
            "rule": "கியூபெக் 'லீ வார இறுதி'"
          },
          {
            "word": "Char",
            "rule": "'வாய்ச்சர்' (கார்) க்கான கியூபெக் முறைசாரா"
          },
          {
            "word": "Chum / Blonde",
            "rule": "காதலன் / காதலிக்கான கியூபெக்"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "கியூபெக் மொழியின் பொருள் 'இதெல்லாம் நல்லது / சரியானது!'"
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "காலை: டிஜூனர், மதியம்: இரவு உணவு, மாலை: சூப்பர்"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "fête ஒலிகள் /faɛ̯t/, père to /paɛ̯ʁ/ க்கு அருகில்"
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "ரத்து செய்பவர் (அனுலர்), செக்கர் (சரிபார்ப்பவர்), பார்க்கர் (கேரர்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: கியூபெக் உரையாடல் அமைப்பை அடையாளம் காணவும்",
            "question": "மாண்ட்ரீல்/கியூபெக்கில் உள்ள ஒரு உள்ளூர் நபருடன் அரட்டை அடிக்கிறீர்களா?",
            "action": "உள்ளூர் சொற்களைப் பயன்படுத்தவும்: fin de semaine, char, magasiner, souper"
          },
          {
            "step": "படி 2: மனக்கசப்பைக் கேளுங்கள்",
            "question": "வார்த்தையில் தி, டு, டி, டு உள்ளதா?",
            "action": "சொந்த 'ts' மற்றும் 'dz' ஒலியைக் கேட்கவும்: /tsy/ 'tu' க்கு"
          },
          {
            "step": "படி 3: கேள்வித் துகள் '-து'",
            "question": "வினைச்சொல்லுக்குப் பிறகு பேச்சாளர் '-டு' சேர்த்தாரா?",
            "action": "இது ஒரு முறைசாரா கேள்வி குறிப்பான் என அங்கீகரிக்கவும்: y va-tu ?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "ஆடிட்டரி ஒற்றுமை விதி",
            "meaning": "மூன்று முடிவுகளும் காதுக்கு 100% ஒத்ததாக இருக்கும் (/e/)",
            "example": "parler, parlé, parlez அனைத்தும் ஒரே மாதிரியாக ஒலிக்கின்றன: /paʁle/"
          },
          {
            "name": "'Vendre' கழித்தல் சோதனை",
            "meaning": "-er (infinitive) அல்லது -é (past participle) என்று எழுத வேண்டுமா என்பதைத் தீர்மானிக்கவும்",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
          },
          {
            "name": "பார்டிசிபிள் டிடக்ஷன் டெஸ்ட்",
            "meaning": "'vendu' அர்த்தமுள்ளதாக இருந்தால், -é என்று எழுதவும்",
            "example": "ஜெய் மாங்... ➔ ஜெய் வேண்டு ➔ ஜெய் மாங்"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "முடிவிலி மாற்றுச் சோதனைச் சொல் (தனிப்பட்ட /ʁ/ ஒலியைக் கேளுங்கள்)"
          },
          {
            "word": "Vendu / Fait",
            "rule": "கடந்த பங்கேற்பு மாற்று சோதனை வார்த்தை (தனிப்பட்ட /y/ அல்லது /t/ ஒலியைக் கேட்கவும்)"
          },
          {
            "word": "-ons",
            "rule": "தெளிவற்ற எழுதப்பட்ட மற்றும் பேசப்படும் /ɔ̃/ nous க்கான முடிவு"
          },
          {
            "word": "-ent",
            "rule": "3வது நபர் பன்மை ils/elles க்கான தெளிவற்ற அமைதியான எழுதப்பட்ட மார்க்கர்"
          }
        ],
        "patterns": [
          {
            "pattern": "Two verbs in a row ➜ Second is Infinitive",
            "note": "Je veux partir · Il aime voyger · On doit réviser"
          },
          {
            "pattern": "After preposition ➜ Always Infinitive",
            "note": "மேங்கர், சான்ஸ் பார்லர், அவாண்ட் டி பார்டிர், ஆ லியு டி டார்மிர் ஆகியவற்றை ஊற்றவும்"
          },
          {
            "pattern": "After avoir / être ➜ Past Participle",
            "note": "ஜேய் ரீரிக்டே, எல்லே எஸ்ட் பார்ட்டி"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: /e/ ஒலியைக் கேளுங்கள்",
            "question": "வார்த்தையின் முடிவில் /e/ என ஒலிக்கிறதா?",
            "action": "விருப்பங்கள்: -er (Inf), -é (Participle), அல்லது -ez (vous)"
          },
          {
            "step": "படி 2: 'Vendre' சோதனையைப் பயன்படுத்தவும்",
            "question": "வாக்கியத்தில் 'VENDRE' என்ற வார்த்தையை மாற்ற முடியுமா?",
            "action": "ஆம் எனில் ➔ -ER என்று எழுதவும் (முடிவிலி: Je dois parler)"
          },
          {
            "step": "படி 3: நீங்கள் 'VENDU' ஐ மாற்ற முடியுமா?",
            "question": "Avoir/être க்குப் பிறகு 'VENDU' இயற்கையாகப் பொருந்துமா?",
            "action": "ஆம் எனில் ➔ -É என்று எழுதவும் (பாதுகாப்பு: J'ai parlé)"
          },
          {
            "step": "படி 4: தலைப்பு 'வௌஸ்' ஆக உள்ளதா?",
            "question": "உடனடி பொருள் வசீகரமா?",
            "action": "ஆம் எனில் ➔ எழுதவும் -EZ (vous parlez)"
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "பிரதிபலிப்பு நிகழ்கால இணைவு சூத்திரம்",
            "meaning": "பிரதிபலிப்பு பிரதிபெயர், செயலைச் செய்யும் பொருளுடன் பொருந்துகிறது",
            "example": "ஜெ மீ லீவ், டு டெ லீவ்ஸ், இல் சே லீவ், நௌஸ் நௌஸ் லெவன்ஸ், வௌஸ் வௌஸ் லெவெஸ், இல்ஸ் சே லெவென்ட்"
          },
          {
            "name": "ப்ரோனோமினல் பாஸ் கம்போஸ் ஃபார்முலா",
            "meaning": "100% ப்ரோனோமினல் வினைச்சொற்களுக்கு ÊTRE தேவை",
            "example": "Elle s'est reveillée · Nous nous sommes couchés"
          },
          {
            "name": "பிரதிபலிப்பு ஒப்பந்த சட்டம்",
            "meaning": "செயல் தன்னை நேரடியாக தாக்கும் போது ஒப்புக்கொள்கிறது; உடல் உறுப்பு பின்பற்றினால் உடன்பாடு இல்லை",
            "example": "Elle s'est lavée (ஒப்புக்கொள்கிறார்) vs Elle s'est lavé les mains (ஒப்பந்தம் இல்லை: 'les mains' என்பது நேரடிப் பொருள்!)"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "தினசரி வழக்கமான வினைச்சொற்கள்"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "நிர்பந்தமான கட்டமைப்புகள் தேவைப்படும் நினைவக வினைச்சொற்கள்"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "பரஸ்பர வினைச்சொல் 'நன்றாகப் பழகுவது'"
          },
          {
            "word": "S'en aller",
            "rule": "இடியோமேடிக் ப்ரோனோமினல் வினைச்சொல் 'வெளியேறுவது / வெளியே செல்வது'"
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "Je NE me réveille PAS (நீ... பாஸ் உள்ளே உள்ள வினைச்சொல் அணைத்துக்கொள்ளுதல்)"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "Je Vais ME லீவர் (பொருளுக்கான பிரதிபலிப்பு பிரதிபெயர் மாற்றங்கள் ஆனால் முடிவிலிக்கு முன் அமர்ந்திருக்கும்)"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "லெவ்-டோய் ! Réveillez-vous ! (உறுதியான கட்டளைகளில் -toi ஐப் பயன்படுத்துகிறது)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: செயல் தனக்காக செய்யப்பட்டதா அல்லது பரஸ்பரமா?",
            "question": "யாராவது தங்களுக்கு ஏதாவது செய்கிறார்களா (முடியைத் துலக்குவது, எழுந்திருப்பது)?",
            "action": "பெயர்ச்சொல் வடிவத்தைப் பயன்படுத்தவும்: SE + வினைச்சொல்"
          },
          {
            "step": "படி 2: பிரதிபலிப்பு பிரதிபெயரை பொருத்தவும்",
            "question": "பொருள் யார்?",
            "action": "je ➔ me, tu ➔ te, il ➔ se, nous ➔ nous, vous ➔ vous, ils ➔ se"
          },
          {
            "step": "படி 3: கடந்த கால சோதனை",
            "question": "இது பாஸே கம்போஸ் ஆகுமா?",
            "action": "எப்போதும் ÊTRE ஐ துணைப் பொருளாகப் பயன்படுத்தவும்"
          },
          {
            "step": "படி 4: ஒப்பந்த வடிப்பான்",
            "question": "வினைச்சொல்லுக்குப் பிறகு உடனடியாக ஒரு நேரடி பொருள் குறிப்பிடப்படுகிறதா?",
            "action": "ஆம் எனில் (லெஸ் மெயின்கள், லெஸ் டென்ட்ஸ்) ➔ ஒப்பந்தம் இல்லை! இல்லை என்றால் ➔ விஷயத்துடன் உடன்படுங்கள்"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "நேரடி பொருள் (சிஓடி) அடையாள சூத்திரம்",
            "meaning": "எந்த முன்னுரையும் வினைச்சொல்லை நேரடி பெயர்ச்சொல்லிலிருந்து பிரிக்காது",
            "example": "J'invite mes amis ➔ Je LES invite"
          },
          {
            "name": "மறைமுக பொருள் (COI) அடையாள சூத்திரம்",
            "meaning": "ஒரு நபரை சுட்டிக்காட்டி 'à' என்ற முன்னுரையால் பிரிக்கப்பட்டது",
            "example": "Je parle à mon patron ➔ Je LUI parle"
          },
          {
            "name": "இரட்டைப் பெயர்ச்சொல் வரிசை படிநிலை சூத்திரம்",
            "meaning": "இரண்டு பிரதிபெயர்களைப் பயன்படுத்தும் போது வினைச்சொல்லுக்கு முன் இடமிருந்து வலமாக வரிசைப்படுத்தவும்",
            "example": "Il me le donne · Je le lui envoie"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "COI ஒருமை (அவருக்கு / அவளுக்கு) — பாலினம் குருடர்"
          },
          {
            "word": "Leur",
            "rule": "COI பன்மை (அவர்களுக்கு) — பாலினம் குருட்டு, ஒருபோதும் -s எடுக்காது"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "நிலையான முன்மொழிவு 'à' காரணமாக COI ஐ எடுக்க வேண்டிய வினைச்சொற்கள்"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "பிரஞ்சு மொழியில் நேரடி வினைச்சொற்கள் (சிஓடியை எடுத்துக் கொள்ளுங்கள், ஆங்கிலம் போல முன்மொழிவு இல்லை!)"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "அட்டெண்ட்ரே qqn (யாருக்காக காத்திருக்க), chercher qch (ஏதாவது தேட) பிரெஞ்சு மொழியில் COD ஐ எடுத்துக் கொள்ளுங்கள்!"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "Il ME LE prête (1வது/2வது நபர் 3வது நேரடிக்கு முன்)"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "Je LE LUI dis (3வது நேரடி முன் 3வது மறைமுகம்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: வினைச்சொல் மாற்றத்தை சரிபார்க்கவும்",
            "question": "பிரெஞ்சு வினைச்சொல் ஒரு நபருடன் 'à' ஐ எடுத்துக்கொள்கிறதா?",
            "action": "ஆம் எனில் ➔ COI (lui / leur). இல்லை என்றால் ➔ COD (le / la / les)"
          },
          {
            "step": "படி 2: முதல் பொருளை மாற்றவும்",
            "question": "எந்த பிரதிபெயர் அதைக் குறிக்கிறது?",
            "action": "COD அல்லது COI எனக் குறியிடவும்"
          },
          {
            "step": "படி 3: இரட்டை பிரதிபெயர்களை வரிசைப்படுத்துங்கள்",
            "question": "இரண்டு பிரதிபெயர்கள் உள்ளதா?",
            "action": "படிநிலையைப் பின்பற்றவும்: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ Verb"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "Futur Proche உறுதியான சூத்திரம்",
            "meaning": "உடனடி திட்டங்கள், நோக்கங்கள் மற்றும் திட்டவட்டமான வரவிருக்கும் நிகழ்வுகளுக்குப் பயன்படுத்தப்படுகிறது (செல்கிறது...)",
            "example": "Je vais manger · Nous allons voyager · Ils vont partir"
          },
          {
            "name": "Futur Proche நெகட்டிவ் ஃபார்முலா",
            "meaning": "எதிர்மறையானது 'அலர்' என்ற இணைந்த வினைச்சொல்லைச் சுற்றி, முடிவிலியை வெளியே விட்டுவிடுகிறது",
            "example": "ஜெ நே வைஸ் பாஸ் ட்ரவைலர் டெமெய்ன் (ஜே நே ட்ரவைலர் பாஸ் அல்ல)"
          },
          {
            "name": "Pronominal Futur Proche ஃபார்முலா",
            "meaning": "பிரதிபலிப்பு பிரதிபெயர் பொருளுடன் உடன்பட வேண்டும் மற்றும் முடிவிலிக்கு முன்னால் அமர்ந்திருக்க வேண்டும்",
            "example": "Je vais ME coucher · Vous allez VOUS அமுசர்"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "எதிர்கால நேரம் தூண்டுகிறது"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "உடனடி எதிர்கால தூண்டுதல்கள்"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "நிகழ்காலத்தில் துணை அலரின் இணைத்தல்"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "Je ne vais pas dormir · Elle ne va pas venir"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je vais LE voir · Il va ME téléphoner (இயற்கை பெயர் முடிவிலி செயலைச் சேர்ந்தது)"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "மாஸ் மேங்கர் (ஜெ வைஸ் மேங்கருக்கு முறைசாரா பேசப்படுகிறது)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: உள்நோக்கம் அல்லது எதிர்காலத்திற்கு அருகில் சரிபார்க்கவும்",
            "question": "இது திட்டமிடப்பட்ட திட்டமா அல்லது நிகழ்வு விரைவில் நடக்குமா?",
            "action": "Futur Proche (Aller + Inf) பயன்படுத்தவும்"
          },
          {
            "step": "படி 2: ALLER ஐ இணைக்கவும்",
            "question": "பொருள் யார்?",
            "action": "ஜெ வைஸ், து வாஸ், இல் வா, நௌஸ் அல்லோன்ஸ், வௌஸ் அலெஸ், இல்ஸ் வோன்ட்"
          },
          {
            "step": "படி 3: முக்கிய செயலை இணைக்கவும்",
            "question": "செயல் வினை என்றால் என்ன?",
            "action": "INFINITIVE (-er, -ir, -re) இல் வைத்திருங்கள்"
          },
          {
            "step": "படி 4: பிரதிபெயர்கள் அல்லது மறுப்பை சரிபார்க்கவும்",
            "question": "இது எதிர்மறையா அல்லது பொருள் பிரதிபெயர் உள்ளதா?",
            "action": "Ne + Aller + Pas + [Pronoun] + Infinitive"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "ஃபியூச்சர் சிம்பிள் மாஸ்டர் ஃபார்முலா",
            "meaning": "முடிவானது AVOIR (ai, as, a, ons, ez, ont) இன் நிகழ்காலம் என்பதைக் கவனியுங்கள்!",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "-RE வினைச்சொற்கள் எதிர்கால தண்டு விதி",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "ப்ரெண்ட்ரே ➔ ஜெ பிரேந்திராய் · வருகையாளர் ➔ ஜ'அட்டேந்திரா"
          },
          {
            "name": "முக்கிய ஒழுங்கற்ற எதிர்கால தண்டுகள்",
            "meaning": "தண்டுகள் எப்போதும் 'r' இல் முடிவடையும், பின்னர் நிலையான முடிவுகளை எடுக்கவும்",
            "example": "ஜெ செராய், ஜௌராய், ஜிராய், ஜெ ஃபெராய், ஜெ புவ்ரை, ஜெ வவுத்ராய்"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "தொலைதூர எதிர்கால நேர குறிப்பான்கள்"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "பிரஞ்சு மொழியில் எளிமையான எதிர்காலத்தைத் தூண்டும் நேரத்தின் இணைப்புகள்"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "முதல் நிபந்தனை விதி (Si j'ai le temps, je viendrai)"
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
            "note": "ils parleront (/ɔ̃/ போன்ற ஒலிகள், ஆன்களுடன் ரைம்ஸ்!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: எதிர்கால தண்டு தீர்மானிக்கவும்",
            "question": "வினைச்சொல் வழக்கமானதா (-er, -ir, -re)?",
            "action": "முடிவிலியை வைத்திருங்கள் (-re இலிருந்து 'e' ஐ கைவிடவும்). ஒழுங்கற்றதாக இருந்தால், 'R' மூலத்தைப் பயன்படுத்தவும் (ser-, aur-, ir-, fer-)"
          },
          {
            "step": "படி 2: AVOIR முடிவுகளை இணைக்கவும்",
            "question": "பொருள் என்ன?",
            "action": "je ➔ -ai, tu ➔ -as, il ➔ -a, nous ➔ -ons, vous ➔ -ez, ils ➔ -ont"
          },
          {
            "step": "படி 3: இறுதி பின்னொட்டை உச்சரிக்கவும்",
            "question": "உயிரெழுத்துக்களைக் கவனியுங்கள்",
            "action": "je parlerai (/e/), tu parleras (/a/), ils parleront (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "இம்பார்ஃபைட் ஸ்டெம் பிரித்தெடுத்தல் ஃபார்முலா",
            "meaning": "பிரெஞ்சு மொழியில் உள்ள அனைத்து வினைச்சொற்களிலும் 99.9% வேலை செய்கிறது!",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "இம்பார்ஃபைட் யுனிவர்சல் என்டிங்ஸ் ஃபார்முலா",
            "meaning": "அறிவிப்பு -ais, -ais, -ait, -aient அனைத்தும் ஒரே மாதிரியாக உச்சரிக்கப்படுகின்றன: /ɛ/",
            "example": "je parlais, tu parlais, il parlait, ils parlaient அனைத்து ஒலி /paʁlɛ/"
          },
          {
            "name": "பிரெஞ்சு மொழியில் ஒரே ஒழுங்கற்ற தண்டு",
            "meaning": "மற்ற ஒவ்வொரு வினைச்சொல்லும் நிகழ்காலத்தில் உள்ள நௌஸிலிருந்து அதன் தண்டுகளை பிரித்தெடுக்கிறது!",
            "example": "j'étais, nous étions, vous étiez"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "மீண்டும் மீண்டும் பழக்கம் தூண்டுதல் ➔ எப்போதும் இம்பார்ஃபைட்"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "தொடர்ச்சியான பின்னணி செயல் தூண்டுதல் ➔ Imparfait"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "கடந்த காலம் / வாழ்க்கை நிலை"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "கடந்த கால காட்சிகள், வானிலை, நேரம், உணர்ச்சி நிலை"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "அனைத்து உச்சரிக்கப்படும் /ɛ/ (திறந்த இ). அதை யார் செய்தார்கள் என்று பொருள் பிரதிபெயர் சொல்கிறது!"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "nous parlions (/paʁljɔ̃/), vous parliez (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "je mangeais ('e' வைத்து), je commençais (செடில்லா 'ç' ஐ சேர்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: நிகழ்காலத்தில் Nous ஐ எடுத்துக் கொள்ளுங்கள்",
            "question": "'நௌஸ்' என்பதன் நிகழ்காலம் என்ன?",
            "action": "Nous parlons, nous faisons, nous buvons"
          },
          {
            "step": "படி 2: லாப் ஆஃப் -ONS",
            "question": "3 எழுத்துக்களை நீக்கவும்",
            "action": "parl-, fais-, buv- (இது உங்கள் தண்டு)"
          },
          {
            "step": "படி 3: வினைச்சொல் ÊTRE?",
            "question": "இது ஒற்றை விதிவிலக்கா?",
            "action": "தண்டு பயன்படுத்தவும் -"
          },
          {
            "step": "படி 4: இம்பார்ஃபைட் எண்டிங்ஸை இணைக்கவும்",
            "question": "பொருளைப் பொருத்து",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "பிரதிபெயர் Y இருப்பிட மாற்று சூத்திரம்",
            "meaning": "எந்த புவியியல் இடத்தையும் அல்லது இடத்தையும் மாற்றுகிறது (ஆங்கிலம்: THERE)",
            "example": "Je vais à Montreal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "பிரதிபெயர் Y உயிரற்ற பொருள் சூத்திரம்",
            "meaning": "'à + விஷயம்/கருத்தை' மாற்றுகிறது (சிந்தித்தல், பங்கேற்பது)",
            "example": "Je pense à mon avenir ➔ J'Y pense (Je pense à lui அல்ல: மக்கள் மன அழுத்த பிரதிபெயர்களை எடுத்துக்கொள்கிறார்கள்!)"
          },
          {
            "name": "பிரதிபெயர் Y வேலை வாய்ப்பு சூத்திரம்",
            "meaning": "வினைச்சொல்லுக்கு முன் உடனடியாக அமர்ந்திருக்கும்",
            "example": "Tu y vas · On n'y va pas · Vas-y ! (கட்டாயம்)"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "Penser à un examen ➔ y penser"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "'à' + உயிரற்ற யோசனைகளை எடுக்கும் வினைச்சொற்கள் ➔ Y ஆல் மாற்றப்பட்டது"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "இருப்பிடத் தூண்டுதல்கள் ➔ ஆல் மாற்றப்பட்டது"
          },
          {
            "word": "Il y a",
            "rule": "Y பிரதிபெயரைக் கொண்டுள்ளது: உண்மையில் 'அது உள்ளது'"
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle (மக்களுக்கு மன அழுத்த பிரதிபெயர் பயன்படுத்தவும்!)"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "Va + y ➔ Vas-y ! (அசிங்கமான /a-i/ உயிர் மோதலை தவிர்க்க 's' சேர்க்கிறது)"
          },
          {
            "pattern": "Near future placement",
            "note": "ஜெ வைஸ் ஒய் அல்லர் (இன்ஃபினிட்டிவ்க்கு முன்னால் அமர்ந்திருக்கிறார்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: முன்மொழிவைச் சரிபார்க்கவும்",
            "question": "à, en, dans, sur, sous அல்லது chez ஆல் அறிமுகப்படுத்தப்பட்ட வாக்கியமா?",
            "action": "ஆம் எனில் ➔ Y க்கான வேட்பாளர்"
          },
          {
            "step": "படி 2: இது ஒரு நபரா?",
            "question": "சொற்றொடர் மனிதனைக் குறிக்கிறதா?",
            "action": "ஆம் எனில் ➔ Y ஐ பயன்படுத்த வேண்டாம்! à lui / à elle ஐப் பயன்படுத்தவும். இல்லை என்றால் ➔ படி 3 க்குச் செல்லவும்"
          },
          {
            "step": "படி 3: இது ஒரு இடமா அல்லது பொருளா?",
            "question": "இது ஒரு இருப்பிடமா அல்லது சுருக்கமான கருத்தா (à mon travail, à mon avenir)?",
            "action": "முழு வாக்கியத்தையும் Y என்று மாற்றவும்"
          },
          {
            "step": "படி 4: வினைச்சொல்லுக்கு முன் வைக்கவும்",
            "question": "அது எங்கே அமர்ந்திருக்கிறது?",
            "action": "இணைந்த வினைச்சொல்லுக்கு முன் (அல்லது முடிவிலிக்கு முன்)"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "நிபந்தனை சட்டசபை ஃபார்முலா",
            "meaning": "கலப்பின காலம்: இம்பார்ஃபைட் குரலுடன் எதிர்கால உடலைப் பயன்படுத்துகிறது!",
            "example": "aimer ➔ தண்டு aimer- + -ais ➔ J'aimerais · être ➔ ஸ்டெம் ser- + -ait ➔ Il serait"
          },
          {
            "name": "யுனிவர்சல் பொலிட்னெஸ் ஃபார்முலா",
            "meaning": "கடைகள், உணவகங்கள் மற்றும் தொழில்முறை அமைப்புகளில் கோரிக்கைகளை மென்மையாக்குகிறது",
            "example": "Je veux un café (முரட்டுத்தனமான) ➔ Je VOUDRAIS un café (கண்ணியமான)"
          },
          {
            "name": "இரண்டாவது நிபந்தனை 'Si' சூத்திரம்",
            "meaning": "அனுமானமற்ற உண்மை நிலை ('நான் இருந்தால்... நான்...')",
            "example": "Si j'avais de l'argent, j'achèterais une maison"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "கஃபேக்கள், பேக்கரிகள், வாடிக்கையாளர் சேவை ஆகியவற்றில் அத்தியாவசியமான பணிவு சூத்திரம்"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "கண்ணியமான கோரிக்கைகள்: உங்களால் முடியுமா/ முடியுமா?"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "அறிவுரை வழங்குதல்: நான் நீயாக இருந்தால்..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "உங்கள் காலணியில், நான் செய்வேன் ..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su (Les 'si' n'aiment pas les 'rais'!)"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "எதிர்காலம்: je parlerai (/e/closed) vs Conditionnel: je parlerais (/ɛ/ open)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "aur- (avoir), ser- (être), ir- (aller), fer- (faire), pourr- (pouvoir), devr- (devoir)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: நோக்கத்தைச் சரிபார்க்கவும் (கண்ணியமான அல்லது அனுமானம்)",
            "question": "நீங்கள் உணவை ஆர்டர் செய்கிறீர்களா, கோரிக்கை வைக்கிறீர்களா அல்லது 'என்ன செய்தால்' என்று கற்பனை செய்கிறீர்களா?",
            "action": "Conditionnel Present ஐப் பயன்படுத்தவும்"
          },
          {
            "step": "படி 2: எதிர்கால தண்டு பெறவும்",
            "question": "முடிவிலி (அல்லது ஒழுங்கற்ற -R தண்டு)",
            "action": "voudr-, aimer-, pourr-, ser-"
          },
          {
            "step": "படி 3: இம்பார்ஃபைட் எண்டிங்ஸை இணைக்கவும்",
            "question": "பொருளைப் பொருத்து",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          },
          {
            "step": "படி 4: 'Si' பிரிவைச் சரிபார்க்கவும்",
            "question": "வாக்கியம் 'Si' என்று தொடங்குகிறதா?",
            "action": "IMPARFAIT இல் 'si' க்குப் பிறகு வினைச்சொல் இருப்பதை உறுதிசெய்யவும்!"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "Gérondif உருவாக்கம் சூத்திரம்",
            "meaning": "தற்போதைய 'nous' தண்டைப் பிரித்தெடுத்து, 'en' முன்னொட்டு மற்றும் '-ant' பின்னொட்டைச் சேர்க்கவும்",
            "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
          },
          {
            "name": "ஒரே நேரத்தில் செயல்களின் சூத்திரம்",
            "meaning": "இரண்டு செயல்களும் ஒரே நேரத்தில் ஒரே பாடத்தால் செய்யப்பட வேண்டும்",
            "example": "Il écoute de la musique en étudiant (அவர் படிக்கும் போது இசையைக் கேட்பார்)"
          },
          {
            "name": "முறை & பொருள் சூத்திரம்",
            "meaning": "முடிவு எப்படி கிடைத்தது என்பதை விளக்குகிறது",
            "example": "C'est en forgeant qu'on devient forgeron · On apprend en faisant des erreurs"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "பிரெஞ்சு ஜெராண்டிஃப் கையொப்பம்"
          },
          {
            "word": "Tout en + -ant",
            "rule": "மாறுபாடு அல்லது கண்டிப்பான ஒரே நேரத்தில் வலியுறுத்துகிறது (அழும்போது அவர் சிரித்தார்)"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "அன்றாட வாழ்வில் பொதுவான ஜெராண்டிஃப் வெளிப்பாடுகள்"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "முக்கிய வினைச்சொல்லைச் செய்பவர் ஜெராண்டிஃப் செயலைச் செய்பவராக இருக்க வேண்டும்!"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en ayant | savoir ➔ en sachant"
          },
          {
            "pattern": "Invariable",
            "note": "ஜெராண்டிஃப் ஒருபோதும் -e அல்லது -s (எப்பொழுதும் -எறும்பில் முடிவடையும்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: ஒரே நேரத்தில் அல்லது முறையைச் சரிபார்க்கவும்",
            "question": "இரண்டு செயல்கள் ஒரே நேரத்தில் நடக்கின்றனவா அல்லது 'எப்படி' என்று பதிலளிக்கிறீர்களா?",
            "action": "Le Gérondif ஐப் பயன்படுத்தவும்"
          },
          {
            "step": "படி 2: தற்போது நௌஸை இணைக்கவும்",
            "question": "வினைச்சொல்லின் தற்போதைய 'நோஸ்' வடிவம் என்ன?",
            "action": "nous prenons, nous marchons, nous finissons"
          },
          {
            "step": "படி 3: ஸ்ட்ரிப் -ONS மற்றும் சேர் -ANT",
            "question": "-ஆன்களை -எறும்புடன் மாற்றவும்",
            "action": "prenant, marchant, finissant"
          },
          {
            "step": "படி 4: 'EN' ஐ முன்வை",
            "question": "'en' என்ற முன்னுரையைச் சேர்க்கவும்",
            "action": "en prenant, en marchant, en finissant"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "சமீபத்திய உறுதியான ஃபார்முலா",
            "meaning": "சில நிமிடங்களுக்கு முன்பு முடிக்கப்பட்ட செயல்களுக்குப் பயன்படுத்தப்பட்டது (ஆங்கிலம்: ஏதோ செய்தது)",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "டி எலிஷன் சட்டம்",
            "meaning": "உயிர்-தொடக்க வினைச்சொற்களுக்கு முன் கட்டாய சுருக்கம்",
            "example": "Il vient D'arriver · Elle vient D'entendre"
          },
          {
            "name": "Pronominal Passé Recent Formula",
            "meaning": "பிரதிபெயர் பொருளுடன் பொருந்துகிறது ஆனால் முடிவிலியை அணைக்கிறது",
            "example": "Je viens de ME reveiller · Ils viennent de SE marier"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "தூண்டுதல்: இந்த வினாடிதான்"
          },
          {
            "word": "Tout juste",
            "rule": "தூண்டுதல்: வெறும் / புதிதாக முடிக்கப்பட்டது"
          },
          {
            "word": "Il y a une minute",
            "rule": "தூண்டுதல்: ஒரு நிமிடம் முன்பு"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "வெனிரின் தற்போதைய இணைவு"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ Je viens manger (நான் சாப்பிட வருகிறேன் என்று அர்த்தம்) ➔ ✓ Je viens DE manger (நான் சாப்பிட்டேன்)"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je viens de LE voir (இயற்கைச்சொல் முடிவிலி வினைச்சொல்லுக்கு முன் அமைந்துள்ளது)"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "Je venais de partir quand il a sonné (அவர் ஒலித்த போது நான் கிளம்பிவிட்டேன்)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: நேரத்தைச் சரிபார்க்கவும்",
            "question": "செயல் சில வினாடிகள் அல்லது நிமிடங்களுக்கு முன்பு நடந்ததா ('இப்போதாவது')?",
            "action": "Passé Recent ஐப் பயன்படுத்தவும்"
          },
          {
            "step": "படி 2: VENIR ஐ இணைக்கவும்",
            "question": "பொருள் யார்?",
            "action": "viens, viens, vient, venons, venez, viennent"
          },
          {
            "step": "படி 3: DE அல்லது D’ஐச் சேர்க்கவும்",
            "question": "அடுத்த வினைச்சொல் உயிரெழுத்தில் தொடங்குமா?",
            "action": "உயிரெழுத்துக்களுக்கு முன் D' ஐப் பயன்படுத்தவும்/h; மெய் எழுத்துக்களுக்கு முன் DE"
          },
          {
            "step": "படி 4: ஆக்‌ஷன் இன்ஃபினிட்டிவ்வை இணைக்கவும்",
            "question": "முக்கிய வினைச்சொல்லை முடிவிலியில் வைத்திருங்கள்",
            "action": "Je viens de finir mon café"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "முழு காலவரிசை காலவரிசை சூத்திரம்",
            "meaning": "5 முதன்மை செயல்பாட்டு காலங்கள் யதார்த்தத்தின் காலவரிசையில் திட்டமிடப்பட்டுள்ளன",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "ஸ்போகன் ஃபிரெஞ்ச் ட்ரையம்விரேட்",
            "meaning": "தினசரி உரையாடல் பிரெஞ்சில் 95% பேசுவதற்கு முதலில் இந்த மூன்று காலங்களை மாஸ்டர் செய்யுங்கள்",
            "example": "J'ai parlé ➔ Je parle ➔ Je vais parler"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "Passé Composé (பாயின்ட்-இன்-டைம்) அல்லது Imparfait (நடந்து வரும் பின்னணி)"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "ப்ரெசென்ட் டி எல்'இண்டிகேடிஃப்"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "Futur Proche (உரையாடல்) அல்லது Futur Simple (முறையான/எழுதப்பட்டது)"
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
            "note": "நிகழ்காலம் = தண்டு+முடிவுகள் · Imparfait = nous-stem+endings · Futur Simple = inf+endings"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: டைம் ஆங்கரைக் கண்டறிக",
            "question": "செயல் கடந்ததா, நிகழ்காலமா அல்லது எதிர்காலமா?",
            "action": "காலவரிசை அச்சில் குறிக்கவும்"
          },
          {
            "step": "படி 2: பதிவைத் தேர்ந்தெடுக்கவும் (பேசப்பட்டது மற்றும் முறையானது)",
            "question": "இது சாதாரண உரையாடலா அல்லது முறையான எழுத்தா?",
            "action": "பேசப்பட்டது ➔ Futur Proche (vais faire) · முறையான ➔ Futur Simple (ferai)"
          },
          {
            "step": "படி 3: கடந்த கால நடவடிக்கை வடிகட்டி",
            "question": "திடீர் நிகழ்வா அல்லது காட்சி/பழக்கமா?",
            "action": "நிகழ்வு ➔ Passé Composé · பழக்கம்/அமைப்பு ➔ Imparfait"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS ஃபார்முலா (கடந்த காலம் முதல் தற்போது வரை)",
            "meaning": "கடந்த காலத்தில் தொடங்கி இப்போதும் தொடர்கிறது (பிரெஞ்சு நிகழ்காலத்தைப் பயன்படுத்துகிறது!)",
            "example": "J'habite à Montréal DEPUIS deux ans (நான் 2 வருடங்கள் இங்கு வாழ்ந்து வருகிறேன்!)"
          },
          {
            "name": "IL Y A ஃபார்முலா (கடந்த காலத்தில் முடிக்கப்பட்ட புள்ளி)",
            "meaning": "கடந்த காலத்தில் ஒரு முடிக்கப்பட்ட தருணத்தை சுட்டிக்காட்டுகிறது (ஆங்கிலம்: AGO)",
            "example": "Le train est parti IL Y A dix minutes (ரயில் 10 நிமிடங்களுக்கு முன்பு புறப்பட்டது)"
          },
          {
            "name": "DANS ஃபார்முலா (எதிர்காலத்திற்கான கவுண்டவுன்)",
            "meaning": "எதிர்கால நடவடிக்கை எப்போது தொடங்கும் என்று கணக்கிடுகிறது (ஆங்கிலம்: IN)",
            "example": "Le படிப்புகள் DANS cinq நிமிடங்களில் தொடங்கும் (வகுப்பு 5 நிமிடங்களில் தொடங்குகிறது)"
          },
          {
            "name": "பதக்க சூத்திரம் (முடிக்கப்பட்ட காலம்)",
            "meaning": "தெளிவான தொடக்கமும் முடிவும் உள்ளது; செயல் முற்றிலும் முடிந்துவிட்டது (ஆங்கிலம்: FOR / DURING)",
            "example": "J'ai dormi PENDANT huit heures (நான் 8 மணிநேரம் தூங்கினேன் - இப்போது விழித்திருக்கிறேன்)"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "இப்போதும் நடக்கிறது ➔ நிகழ்காலத்தை எடுக்க வேண்டும்"
          },
          {
            "word": "Il y a",
            "rule": "நேரம் முன்பு ➔ கடந்த காலத்தை எடுக்க வேண்டும்"
          },
          {
            "word": "Dans",
            "rule": "எதிர்கால கவுண்டவுன் ➔ எதிர்கால காலத்தை எடுத்துக்கொள்ள வேண்டும்"
          },
          {
            "word": "Pendant",
            "rule": "நிறைவு செய்யப்பட்ட நேரத்தின் மூடிய தொகுதி ➔ பொதுவாக பாஸே கம்போஸ்"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ J'ai habité ici depuis 1 an ➔ ✓ J'habite ici depuis 1 an"
          },
          {
            "pattern": "Dans vs En",
            "note": "Dans 1h = இப்போதிலிருந்து 1 மணிநேரம் தொடங்குகிறது (கவுண்ட்டவுன்) · En 1h = முடிக்க 1 மணிநேரம் ஆகும் (வேகம்)"
          },
          {
            "pattern": "Pour with time",
            "note": "எதிர்கால திட்டமிடப்பட்ட காலத்திற்கு கண்டிப்பாக: Je pars deux semaines ஊற்றவும்"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: செயல் இப்போதும் நடக்கிறதா?",
            "question": "அது கடந்த காலத்தில் ஆரம்பித்து நிகழ்காலத்திலும் தொடர்ந்ததா?",
            "action": "ஆம் எனில் ➔ DEPUIS (+ நிகழ்காலம்)"
          },
          {
            "step": "படி 2: இது எதிர்காலத்தில் ஒரு செயலா?",
            "question": "அது எப்போது தொடங்கும் என்று எண்ணிக் கொண்டிருக்கிறீர்களா?",
            "action": "ஆம் எனில் ➔ டான்ஸ் (+ எதிர்கால காலம்)"
          },
          {
            "step": "படி 3: இது கடந்த காலத்தில் செய்த செயலா?",
            "question": "இது 'எக்ஸ் டைம் முன்பு' நடந்ததா?",
            "action": "ஆம் எனில் ➔ IL Y A (+ Passé Composé)"
          },
          {
            "step": "படி 4: இது ஒரு மூடிய, அளவிடப்பட்ட காலமா?",
            "question": "இது தொடக்கம் மற்றும் முடிவுடன் நிறைவு செய்யப்பட்ட நேரத் தொகுதியை விவரிக்கிறதா?",
            "action": "ஆம் எனில் ➔ பதக்கம்"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "வரலாற்று அமைப்பு vs அதிரடி ஃபார்முலா",
            "meaning": "வரலாற்று விவரிப்புகள் Imparfait உடன் மேடை அமைக்கின்றன, பின்னர் Passé Composé உடன் காலவரிசையை மேம்படுத்துகின்றன",
            "example": "Les peuples autochtones vivaient Ici (Imparfait) quand Paul Chomedey a fondé Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "வரலாற்று தேதி முன்மொழிவு சூத்திரம்",
            "meaning": "வரலாற்று நேரக்கட்டுப்பாட்டிற்கான முன்மொழிவுகள்",
            "example": "En 1642 · Au XVIIe siècle · Le 17 mai 1642"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "அடித்தள நிகழ்வுகளுக்கான குறிப்பிட்ட காலண்டர் ஆண்டு தூண்டுதல் ➔ Passé Composé"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "வரலாற்று பின்னணி தூண்டுதல் ➔ Imparfait"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "1701 இன் முக்கிய சமாதான ஒப்பந்தம் காலியர் கையெழுத்திட்டது"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "'siècle' உடன் ரோமன் எண்களைப் பயன்படுத்தவும்: au XXIe siècle (21 ஆம் நூற்றாண்டு)"
          },
          {
            "pattern": "Historical Present",
            "note": "தெளிவான கதைசொல்லலுக்கு வரலாறு பெரும்பாலும் நிகழ்காலத்தை பயன்படுத்துகிறது (En 1642, il fonde...)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: அது அந்தக் காலத்தின் வாழ்க்கை நிலைமைகளை விவரிக்கிறதா?",
            "question": "வாழ்க்கை நிலைமைகள், இயற்கைக்காட்சி, மரபுகள்?",
            "action": "IMPARFAIT ஐப் பயன்படுத்தவும் (Ils chassaient, vivaient)"
          },
          {
            "step": "படி 2: இது ஒரு குறிப்பிட்ட திருப்புமுனையா, போர் அல்லது ஒப்பந்தமா?",
            "question": "இது ஒரு தொடக்கமும் முடிவும் கொண்ட ஒரு திட்டவட்டமான தேதியில் நடந்ததா?",
            "action": "PASSÉ COMPOSÉ பயன்படுத்தவும் (Il a fondé, ils ont signé)"
          },
          {
            "step": "படி 3: தேதி வடிவமைப்பைச் சரிபார்க்கவும்",
            "question": "இது ஒரு வருடமா, நூற்றாண்டுதானா அல்லது நாளா?",
            "action": "En [ஆண்டு], au [நூற்றாண்டு], le [நாள் மாதம் ஆண்டு]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "மூவி கேமரா vs ஃப்ளாஷ் ஸ்னாப்ஷாட் ஃபார்முலா",
            "meaning": "Imparfait மேடை அமைக்கிறது (வானிலை, உணர்ச்சிகள், 'செய்து கொண்டிருந்தது'); Passé Composé குறுக்கீடு அல்லது மைல்கல்லைத் தூண்டுகிறது",
            "example": "Il pleuvait (Imparfait: scene) quand soudain la foudre a frappé (Passé Composé: snapshot)"
          },
          {
            "name": "குறுக்கிடப்பட்ட செயல் சூத்திரம்",
            "meaning": "நடந்துகொண்டிருந்த தொடர்ச்சியான செயல், ஒரு நேர நிகழ்வால் குறுக்கிடப்படுகிறது",
            "example": "ஜெ டோர்மைஸ் (தூங்கிக் கொண்டிருந்தார்) குவாண்ட் லெ ரெவில் எ சோனே (ராங்)"
          },
          {
            "name": "பச்சோந்தி வினைச்சொற்கள் சூத்திரம்",
            "meaning": "சில வினைச்சொற்கள் மனநிலை மற்றும் திடீர் உணர்தல் ஆகியவற்றுக்கு இடையேயான அர்த்தத்தை மாற்றுகின்றன",
            "example": "ஜெ சவைஸ் நாகர் (திறன்) எதிராக ஜை சு லா நோவெல்லே (நிகழ்வு)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "எப்போதும் இம்பர்ஃபைட்: ஏதோ நடந்து கொண்டிருந்த போது"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "எப்பொழுதும் பாஸே கம்போஸ்: திடீரென்று ஒரு நிகழ்வு தாக்கியது"
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "எப்பொழுதும் இம்பர்ஃபைட்: மீண்டும் மீண்டும் பழக்க வழக்கங்கள்"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "Passé Composé: தனிமைப்படுத்தப்பட்ட நிறைவு சந்தர்ப்பம்"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "செய்து கொண்டிருந்தது = Imparfait · செய்தது = Passé Composé"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "J'avais peur, il faisait froid, elle était triste ➔ எப்போதும் Imparfait"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "Je me suis levé, j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: 'காட்சி என்ன?'",
            "question": "இது பின்னணி வானிலை, வளிமண்டலம், உணர்வுகள் அல்லது நடந்துகொண்டிருக்கும் பழக்கங்களை விவரிக்கிறதா?",
            "action": "ஆம் எனில் ➔ IMPARFAIT (வீடியோ கேமரா உருளும்)"
          },
          {
            "step": "படி 2: 'அடுத்து என்ன நடந்தது?'",
            "question": "இது கதையை முன்னோக்கி நகர்த்தும் ஒரு குறிப்பிட்ட, முடிக்கப்பட்ட செயலா?",
            "action": "ஆம் என்றால் ➔ PASSÉ COMPOSÉ (Photo Snapshot BAM!)"
          },
          {
            "step": "படி 3: குறுக்கீட்டைச் சரிபார்க்கவும்",
            "question": "ஒரு செயல் மற்றொரு செயலுக்கு இடையூறாக இருந்ததா?",
            "action": "பின்னணி = Imparfait · குறுக்கீடு = Passé Composé"
          },
          {
            "step": "படி 4: தூண்டுதல் வார்த்தைகளைச் சரிபார்க்கவும்",
            "question": "'பென்டண்ட் க்யூ' (இம்பார்ஃபைட்) அல்லது 'சௌடைன்' (பாஸ் கம்போஸ்) ஆகியவற்றைப் பார்க்கவும்",
            "action": "உங்கள் பதட்டமான தேர்வில் பூட்டு"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE பெண்பால் பின்னொட்டு சூத்திரம்",
            "meaning": "ஏறக்குறைய அனைத்து எழுத்து உரிச்சொற்களும் -eux-க்கு -euse-ல் முடிவடையும்",
            "example": "généreux ➔ généreuse · தைரியம் ➔ தைரியம் · paresseux ➔ paresseuse"
          },
          {
            "name": "-IF ➔ -IVE பெண்பால் பின்னொட்டு சூத்திரம்",
            "meaning": "குரல் இல்லாத /f/ இலிருந்து குரல் கொடுக்கப்பட்ட /v/ க்கு குரல் மாற்றம்",
            "example": "கிரியேட்டிஃப் ➔ ஆக்டிஃப்"
          },
          {
            "name": "-EL / -ON இரட்டை மெய் சூத்திரம்",
            "meaning": "-e ஐ சேர்ப்பதற்கு முன் இறுதி மெய்யை இரட்டிப்பாக்குகிறது",
            "example": "இயற்கை ➔ இயல்பில் · பான் ➔ பொன்னே · மிமி ➔ மிக்னோன்"
          },
          {
            "name": "மாறாத உரிச்சொல் பின்னொட்டு -இ",
            "meaning": "ஆண்பால் ஏற்கனவே உச்சரிப்பு இல்லாத -e இல் முடிந்தால் மாற்றம் தேவையில்லை",
            "example": "அமைதி (எம்) ➔ அமைதி (எஃப்) · டைமைட் (எம்) ➔ டைமைட் (எஃப்) · நேசமான (எம்) ➔ நேசமான (எஃப்)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "சூடான / வரவேற்கும் ஆளுமை (கியூபெக்கில் மிகவும் பொதுவானது)"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "தாராள குணம்"
          },
          {
            "word": "Franc / Franche",
            "rule": "நேரடியான, நேரடியான (ஒழுங்கற்ற பெண்பால் -ச்சே)"
          },
          {
            "word": "Doux / Douce",
            "rule": "மென்மையான, இனிமையான (ஒழுங்கற்ற பெண்பால் -ce)"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "bavard (/bavaʁ/) ➔ Bavarde (/bavaʁd/): 'd' கேட்கக்கூடியதாக மாறுகிறது!"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "séducteur ➔ séductrice, createur ➔ créatrice"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "விசுவாசமான ➔ லாயல் (ஃபெம்), லோயாக்ஸ் (மாஸ்க் பன்மை)"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: ஆண்பால் முடிவைச் சரிபார்க்கவும்",
            "question": "அடிப்படை உரிச்சொல் -e இல் முடிகிறதா?",
            "action": "ஆம் எனில் ➔ மாறாதது (அமைதி, பயம், அனுதாபம்)"
          },
          {
            "step": "படி 2: இது -eux இல் முடிகிறதா?",
            "question": "ஆண்பால் பின்னொட்டு -eux?",
            "action": "-euse ஆக மாற்றவும் (généreuse, sérieuse)"
          },
          {
            "step": "படி 3: அது -if என்பதில் முடிவடைகிறதா?",
            "question": "ஆண்பால் பின்னொட்டு - என்றால்?",
            "action": "-ஐவ் ஆக மாற்றவும் (படைப்பு, கவனத்துடன்)"
          },
          {
            "step": "படி 4: வழக்கமான மெய் எண்டிங்",
            "question": "இது -t, -d, அல்லது -s இல் முடிகிறதா?",
            "action": "-e ஐச் சேர்த்து, இறுதி மெய்யெழுத்தை எழுப்பவும் (ஜென்டில் ➔ ஜென்டில், நுண்ணறிவு ➔ புத்திசாலி)"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "இலக்கணம் தக்கவைத்தல் சமன்பாடு",
            "meaning": "ஃபிரெஞ்சு இலக்கண வழிகாட்டி வடிவமைப்பிற்கு அடிகோலப்பட்ட கல்வித் தூண்கள்",
            "example": "சூத்திரங்கள் (தர்க்கரீதியான தெளிவு) + அங்கீகாரம் பேட்ஜ்கள் (முறை அங்கீகாரம்) + SVG வரைபடங்கள் (மன மாதிரிகள்)"
          },
          {
            "name": "தொடர்ச்சியான கற்றல் சுழற்சி",
            "meaning": "தொடக்கநிலை A1 இலிருந்து இடைநிலை B1 கியூபெக் சரளத்திற்கு தன்னாட்சி முன்னேற்றக் குழாய்",
            "example": "இடைவெளி மீண்டும் மீண்டும் இடைவெளிகள் 1, 3 மற்றும் 7 நாட்களில் உரிய உருப்படிகளை திட்டமிடுகின்றன"
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "ஒவ்வொரு தலைப்புக்கும் கணித பாணி இலக்கண சூத்திரங்கள்"
          },
          {
            "word": "Pattern Recognition",
            "rule": "விதிகளை உடனடியாகக் கண்டறிய வார்த்தை தூண்டுதல்கள் மற்றும் முடிவு வடிவங்கள்"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "இலக்கண முடிவை எவ்வாறு அடைவது என்பதை விளக்கும் படிப்படியான தர்க்க பாதைகள்"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "ஒவ்வொரு தலைப்பு அட்டையிலும் காட்சி விளக்கப்படங்கள் உட்பொதிக்கப்பட்டுள்ளன"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "தகவமைப்பு தொட்டுணரக்கூடிய காட்சி வடிவமைப்புகள் ஆழமான கவனத்திற்கு ஏற்றவாறு வடிவமைக்கப்பட்டுள்ளன"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "சுரங்கப்பாதை ஆய்வுக்காக PWA சர்வீஸ் ஒர்க்கர் அனைத்து 30 தொகுதிகளையும் தேக்கி வைக்கிறார்"
          },
          {
            "pattern": "Multi-language translations",
            "note": "7 தாய்மொழிகளில் விரிவான ஆதரவு"
          }
        ],
        "decisionSteps": [
          {
            "step": "படி 1: இலக்கண தலைப்பைத் தேர்வு செய்யவும்",
            "question": "பாடத்திட்டத்தில் உள்ள 30 பிரிவுகளில் ஏதேனும் ஒன்றைத் தேர்ந்தெடுக்கவும்",
            "action": "முக்கிய சூத்திரங்கள் மற்றும் அங்கீகார தூண்டுதல்களை மதிப்பாய்வு செய்யவும்"
          },
          {
            "step": "படி 2: காட்சி வரைபடத்தை ஆய்வு செய்யவும்",
            "question": "சூழலில் இருந்து இலக்கண முடிவு வரை முடிவுகள் எவ்வாறு பிரிகின்றன என்பதைக் கண்டறியவும்",
            "action": "SVG ஓட்ட முனைகளைப் பின்பற்றவும்"
          },
          {
            "step": "படி 3: ஊடாடும் தொகுதிகளைப் பயிற்சி செய்யுங்கள்",
            "question": "விட்ஜெட்டுகள் மற்றும் இணைப்பு அட்டவணைகள் மூலம் அறிவை சோதிக்கவும்",
            "action": "உடனடி செவி மற்றும் காட்சி பின்னூட்டம்"
          },
          {
            "step": "படி 4: SRS உடன் வைத்திருங்கள்",
            "question": "இடைவெளி மீண்டும் மீண்டும் வரிசையில் உள்ள உருப்படிகளை மதிப்பாய்வு செய்யவும்",
            "action": "நீண்ட கால நினைவுக்கு நினைவகத்தை உறுதிப்படுத்தவும்"
          }
        ]
      }
    }
  },
  "ko": {
    "ui": {
      "hub_title": "문법 공식, 단어 트리거 및 시각적 논리",
      "hub_subtitle": "한눈에 패턴을 인식하고 문법적 결론에 도달하는 과정을 추적하세요",
      "hub_sec_formulas": "문법 공식",
      "hub_sec_triggers": "단어와 패턴으로 인식하는 방법",
      "hub_sec_signals": "신호 및 단서 단어",
      "hub_sec_patterns": "어미 및 형태 규칙",
      "hub_sec_path": "진단 결정 경로 — 올바른 결론에 도달하는 방법",
      "hub_sec_diagram": "시각적 논리 다이어그램"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "정관사 공식",
            "meaning": "특정 알려진 실체 또는 보편적 개념(영어: THE)",
            "example": "J'aime le Café (개념) · Regarde le Train (구체적)"
          },
          {
            "name": "무기한 기사 공식",
            "meaning": "셀 수 있는, 불특정 개별 단위(영어: A / AN / SOME)",
            "example": "J'achète un roman · Elle mange une pomme"
          },
          {
            "name": "부분 기사 공식",
            "meaning": "셀 수 없는 질량, 물질의 일부(영어: SOME / ANY)",
            "example": "Je bois du Café · Nous voulons de la moutarde"
          },
          {
            "name": "보편적 부정법",
            "meaning": "부정은 모든 수량 기사를 DE / D'로 축소합니다(être 제외).",
            "example": "J'ai un chien ➔ Je n'ai PAS DE chien (never pas un chien)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "항상 DEFINITE 기사(le, la, les)를 트리거합니다. 전반적인 좋아요/싫어요를 표현합니다."
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "셀 수 없는 수량을 가져올 때 PARTITIVE 기사(du, de la, des)를 트리거합니다."
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "제로 수량 트리거: 물품을 DE/D'로 변환합니다."
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "수량 부사는 관사 없이 항상 DE / D'를 사용합니다(beaucoup de Cafe)."
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90%+ 남성형 ➜ le / un / du 사용"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90%+ 여성스러움 ➜ la / une / de la 사용"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "계약: le/la ➔ l' · du/de la ➔ de l'"
          }
        ],
        "decisionSteps": [
          {
            "step": "Step 1: Check Context",
            "question": "이것이 일반적인 선호입니까, 아니면 특정한 알려진 개체입니까?",
            "action": "YES ➔ 확정(le / la / l' / les)"
          },
          {
            "step": "2단계: 가산성 확인",
            "question": "개별 전체 단위(1, 2, 3개 품목)를 셀 수 있나요?",
            "action": "YES ➔ 무기한 (un / une / des)"
          },
          {
            "step": "3단계: 질량 물질 확인",
            "question": "셀 수 없는 액체, 덩어리 또는 식품인가요?",
            "action": "YES ➔ 부분형(du / de la / de l')"
          },
          {
            "step": "Step 4: Negation Filter",
            "question": "주동사가 부정(ne... pas)되고 동사 être가 아니나요?",
            "action": "If YES ➔ Reduce article immediately to DE / D’"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "명사 복수화 공식",
            "meaning": "Standard plural rule (ending -s is silent in French)",
            "example": "le livre ➔ les livres · la table ➔ les tables"
          },
          {
            "name": "불규칙 복수형 -al 공식",
            "meaning": "-al을 삭제하고 -aux(/o/로 발음)를 추가합니다.",
            "example": "un journal ➔ des journaux · un animal ➔ des animaux"
          },
          {
            "name": "Invariant Plural Formula",
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
            "rule": "항상 MASCULINE(le lundi, le français, l'été, le printemps)"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "항상 여성적(la chimie, la bodies, la politique)"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "항상 남성적(le kilomètre, le nord, l'ouest)"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-ment(le gouvernement), -isme(le capitalisme), -age(le voyage), -oir(le miroir), -teur(le directeur)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-tion / -sion(la nation), -té(la liberte), -ure(la voiture), -ence / -ance(la science), -ette(la Bicyclette)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "la plage, la cage, la page (-age but feminine!) · le silence, le squelette (-ce/-te but masculine!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 단어 끝 확인",
            "question": "단어가 -ment, -age, -isme 또는 -oir로 끝나나요?",
            "action": "그렇다면 ➔ 남성적 지정(확률 90% 이상)"
          },
          {
            "step": "2단계: 초록/주식 접미사 확인",
            "question": "단어가 -tion, -sion, -té, -ence 또는 -ure로 끝나나요?",
            "action": "YES ➔ 여성성 부여 (95%+확률)"
          },
          {
            "step": "3단계: 복수형 마커 확인",
            "question": "단수형은 -al, -eau 또는 -eu로 끝나나요?",
            "action": "그렇다면 ➔ -aux 또는 -x를 사용하여 복수형을 만듭니다."
          },
          {
            "step": "4단계: 치찰음 결말 확인",
            "question": "-s, -x 또는 -z로 끝나나요?",
            "action": "If YES ➔ Retain identical spelling, change article to les/des"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "음성 퀘벡 복수 대명사 규칙",
            "meaning": "자연스러운 퀘벡 프랑스어에서는 'on'이 음성에서 'nous'를 완전히 대체합니다.",
            "example": "Nous mangeons ➔ On mange (활용이 훨씬 쉬워졌습니다!)"
          },
          {
            "name": "음성 퀘벡의 Tu Elision",
            "meaning": "퀘벡 음성 레지스터의 대화 수축",
            "example": "당신은 무엇입니까? ➔ T'es pêt ? · Tu as faim ? ➔ faim ?"
          },
          {
            "name": "3인칭 복수 성별 규칙",
            "meaning": "적어도 한 명의 남성을 포함하는 그룹은 문법적으로 기본적으로 ils로 설정됩니다.",
            "example": "마크와 소피 ➔ ils · Sophie, Marie et Claire ➔ elles"
          }
        ],
        "triggers": [
          {
            "word": "On",
            "rule": "문법적으로 단수(il/elle 동사 형태 사용)이지만 '우리' / '모두'를 나타냅니다."
          },
          {
            "word": "Vous",
            "rule": "이중 기능: 복수형 '너희 모두' 또는 단수 격식/공손함 '당신'"
          },
          {
            "word": "Il vs Ce",
            "rule": "형용사만 사용하여 'il'을 사용합니다(Il est tard). 수식 명사와 함께 'c'est' 사용(C'est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "모음/무성 h 앞에는 항상 'e'를 삭제합니다(J'habite, J'aime, J'écoute)."
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "j'ai, j'arrive, t'as, t'es(je의 경우 필수 생략, tu의 경우)"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "항상 'il'을 더미 주어로 사용합니다: Il pleut, Il neige, Il est 3h"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "'on' 사용: En hiver, on porte un manteau"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 청중 식별",
            "question": "한 사람에게 공식적으로 말하고 있습니까, 아니면 그룹에게 말하고 있습니까?",
            "action": "VOUS(격식 또는 복수)를 사용하세요."
          },
          {
            "step": "2단계: '우리'를 말하는 건가요?",
            "question": "프랑스어인가요 아니면 비격식적인 프랑스어인가요?",
            "action": "ON 사용 (+ 3인칭 단수동사)"
          },
          {
            "step": "3단계: 혼합 그룹 분석",
            "question": "그룹에 남성 개체가 1개 이상 포함되어 있나요?",
            "action": "ILS를 사용하세요(100% 여성 그룹만 ELLES를 선택합니다)"
          },
          {
            "step": "4단계: 모음 경계 확인",
            "question": "다음 동사는 모음으로 시작합니까?",
            "action": "계약 Je ➔ J'"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ER 동사 정규식",
            "meaning": "모든 프랑스어 동사의 90%가 정확한 종료 순서를 따릅니다.",
            "example": "parler ➔ je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent"
          },
          {
            "name": "-IR 동사 일반(Finir) 공식",
            "meaning": "그룹 2 일반 동사는 복수 명사에 -iss- 중위를 삽입합니다.",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "조용한 '부팅' 엔딩 규칙",
            "meaning": "nous(-ons)와 vous(-ez)만이 어간에 유성 음절을 추가합니다!",
            "example": "parle, parles, parlent는 모두 동일하게 발음됩니다: /paʁl/"
          }
        ],
        "triggers": [
          {
            "word": "Maintenant / En ce moment",
            "rule": "현재 시제 표시(현재 일어나고 있는 동작)"
          },
          {
            "word": "Tous les jours / Chaque semaine",
            "rule": "현재시제 습관표지자(정규적인 루틴)"
          },
          {
            "word": "-ons ending",
            "rule": "유성 /ɔ̃/ 비음 — 보편적인 1인칭 복수 표시"
          },
          {
            "word": "-ez ending",
            "rule": "유성 /e/ 모음 소리 — 보편적인 2인칭 복수 표시"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "절대로 -ent를 비음으로 발음하지 마세요! Ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "je/tu/il/ils(부팅 내부)에서 어간 변경, nous/vous에서 정상으로 돌아옴: acheter ➔ j'achète, nous achetons"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "Manger ➔ nous mangeons (부드러운 'j' 소리를 유지하려면 'e'를 유지하세요)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동사 그룹 식별",
            "question": "부정사는 -er, -ir 또는 -re로 끝나나요?",
            "action": "기본 줄기를 추출하기 위한 스트립 엔딩"
          },
          {
            "step": "2단계: 주제 일치",
            "question": "누가 그 행동(je, tu, il, nous, vous, ils)을 하고 있나요?",
            "action": "해당 끝 접미사를 선택하세요."
          },
          {
            "step": "3단계: 발음 필터",
            "question": "주어가 'boot'(je/tu/il/ils) 안에 있나요?",
            "action": "계속해서 완전히 조용히 끝내세요! 줄기만 들림"
          },
          {
            "step": "4단계: 복수형 확인",
            "question": "누우스인가, 부스인가?",
            "action": "청각적으로 끝나는 발음: -ons(/ɔ̃/) 또는 -ez(/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "표준문장 순서 공식",
            "meaning": "선언적 프랑스어는 기본 긍정문의 영어 순서를 따릅니다.",
            "example": "Alex(S) mange(V) une pomme(O)"
          },
          {
            "name": "부정 샌드위치 공식",
            "meaning": "부정은 빵 두 조각처럼 활용형 동사를 둘러쌉니다.",
            "example": "Je NE parle PAS · Elle N'aime PAS le bruit"
          },
          {
            "name": "질문 구성 3단계",
            "meaning": "등록에 따라 예/아니요 질문을 하는 세 가지 방법",
            "example": "투 비엔스? (캐주얼) · Est-ce que tu viens ? (표준) · Viens-tu ? (공식)"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "표준 부정(not)"
          },
          {
            "word": "Ne ... jamais",
            "rule": "부정적인 습관(절대로) — 'pas'를 대체합니다."
          },
          {
            "word": "Ne ... plus",
            "rule": "부정적인 연속(더 이상 / 더 이상 아님) — 'pas'를 대체합니다."
          },
          {
            "word": "Est-ce que",
            "rule": "보편적인 질문 오프너: 표준 SVO 단어 순서를 유지합니다."
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ Je ne pas sais ➔ ✓ Je ne sais pas (동사 샌드위치)"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "J'sais pas · Y vient pas (구두 프랑스어에서 매우 흔함)"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai, n'aime, n'écoute, n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 활용형 동사 식별",
            "question": "기본 활용 동사는 무엇입니까?",
            "action": "주제 바로 앞에 제목을 배치하세요."
          },
          {
            "step": "2단계: 부정하고 있나요?",
            "question": "더 이상은/절대/안 된다고 말하고 싶나요?",
            "action": "샌드위치 샌드위치: NE + 동사 + PAS / JAMAIS / PLUS"
          },
          {
            "step": "3단계: 질문을 하시나요?",
            "question": "어떤 레지스터를 사용하고 있나요?",
            "action": "격식: 억양(?) · 표준: Est-ce que... · 격식: 동사-주어 반전"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "형용사 일치 행렬 공식",
            "meaning": "형용사는 성별과 숫자 모두에서 명사와 일치해야 합니다.",
            "example": "그랜드(M) · 그란데(F) · 그랜드(M.Pl) · 그란데스(F.Pl)"
          },
          {
            "name": "BAGS 배치법",
            "meaning": "앞에 오는 BAGS를 제외하고 대부분의 형용사는 명사 뒤에 옵니다.",
            "example": "un GRAND livre (가방: 사이즈) vs un livre ROUGE (색상: 명사 뒤)"
          },
          {
            "name": "보(Beau), 누보(Nouveau), 비유(Vieux)에 대한 모음 스위치",
            "meaning": "모음/h로 시작하는 남성 명사 앞의 특수 남성형",
            "example": "보 ➔ 벨·누보 ➔ 누벨·비유 ➔ 비에유"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "beau, joli, jeune, vieux, bon, mauvais, grand, petit ➔ 명사 앞에 위치"
          },
          {
            "word": "Colors & Shapes",
            "rule": "bleu, rouge, rond, carré ➔ 명사 뒤에 위치함 (une voiture rouge)"
          },
          {
            "word": "Nationalities",
            "rule": "canadien, français, américain ➔ 명사 뒤에 배치됨 (un Cafe québécois)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "-s 또는 -e를 추가하지 마십시오! (데 쇼쉬르 마롱)"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "heureux ➔ heureuse, curieux ➔ curieuse"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "actif ➔ 활동적, creatif ➔ 창의적, sportif ➔ sportive"
          },
          {
            "pattern": "-el / -en ➜ -elle / -enne",
            "note": "naturel ➔ naturelle, canadien ➔ canadienne"
          },
          {
            "pattern": "-er ➜ -ère",
            "note": "프리미어 ➔ 프리미어, 셰르 ➔ 셰르"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 위치 확인(가방)",
            "question": "그것은 아름다움인가, 나이인가, 선함인가, 아니면 크기인가?",
            "action": "그렇다면 ➔ 명사 앞에 놓으십시오. 그렇지 않은 경우 ➔ 명사 뒤에 위치"
          },
          {
            "step": "2단계: 명사의 성별 확인",
            "question": "명사는 여성인가요?",
            "action": "-e 추가(또는 변환 접미사: -eux ➔ -euse, -if ➔ -ive)"
          },
          {
            "step": "3단계: 명사의 개수 확인",
            "question": "명사는 복수인가요?",
            "action": "-s(또는 여성 복수형인 경우 -es)를 추가하세요."
          },
          {
            "step": "4단계: 모음 충돌 확인",
            "question": "남성 모음 명사 앞에는 beau/nouveau/vieux 인가요?",
            "action": "벨, 누벨, 비유를 사용하세요"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "필수 'à' 수축 공식",
            "meaning": "전치사 'à'는 남성 및 복수 정관사와 융합됩니다.",
            "example": "Je vais au gym (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "필수 'de' 수축 공식",
            "meaning": "전치사 'de'가 남성 및 복수 정관사와 융합됩니다.",
            "example": "Le retour du roi (de+le) · La liste des invités (de+les)"
          },
          {
            "name": "지리적 전치사 공식",
            "meaning": "위치 전치사는 목적지의 문법적 성별에 따라 엄격하게 달라집니다.",
            "example": "À 몬트리올, EN 프랑스, AU 캐나다, AUX États-Unis"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "항상 à: à Montréal, à Québec, à Paris, à 토론토(기사 없음!)"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "-e로 끝남 ➜ 여성형: en France, en Colombie, en Ontario (모음으로 시작)"
          },
          {
            "word": "AU + masculine country",
            "rule": "-e로 끝나지 않음: au Canada, au Mexique, au Japon"
          },
          {
            "word": "Chez + person / professional",
            "rule": "'집/사무실에서'라는 뜻: chez moi, chez le médecin, chez Jean"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ à le 레스토랑 ➔ ✓ au 레스토랑 · ❌ de le parc ➔ ✓ du parc"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "La France ➔ en France, la Suisse ➔ en Suisse (예외: le Mexique ➔ au Mexique)"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "쿠바, 마다가스카르, 아이티"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 대상 유형 확인",
            "question": "도시인가, 국가인가, 아니면 사람인가?",
            "action": "도시 ➔ À · 사람 ➔ Chez · 국가 ➔ 2단계 참조"
          },
          {
            "step": "2단계: 국가 성별 확인",
            "question": "국가가 -e로 끝나나요, 아니면 모음으로 시작하나요?",
            "action": "YES인 경우 ➔ EN(en Italie, en France) · NO인 경우 ➔ AU(au 캐나다)"
          },
          {
            "step": "3단계: 복수 국가 확인",
            "question": "국가는 복수형입니까(États-Unis, Pays-Bas)?",
            "action": "AUX(aux États-Unis) 사용"
          },
          {
            "step": "4단계: 정관제 융합 확인",
            "question": "à/de를 le 또는 les와 결합하시나요?",
            "action": "계약: à+le ➜ au, à+les ➜ aux, de+le ➜ du, de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "소유 계약 공식",
            "meaning": "소유 형용사는 POSSESSED OBJECT와 일치하며 결코 소유자와 일치하지 않습니다!",
            "example": "그의 차 = sa voiture (voiture is fem) · 그녀의 책 = son livre (livre is masc)"
          },
          {
            "name": "모음 충돌 생명의 은인 규칙",
            "meaning": "모음으로 시작하는 여성 명사는 음성 흐름을 위해 남성형으로 전환됩니다.",
            "example": "❌ ma amie ➔ ✓ mon amie · ❌ sa école ➔ ✓ son école"
          },
          {
            "name": "실증 형용사 공식",
            "meaning": "이것은 또는 저것을 의미합니다. Cet은 어색한 모음 중단을 피합니다.",
            "example": "ce livre · cet hôtel · cette 테이블 · ces clés"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "남성 명사 또는 모음으로 시작하는 여성 명사에 사용됩니다."
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "자음으로 시작하는 여성 명사에만 사용됩니다."
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "소유자 1인의 범용 복수 소유격(성별 무관)"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "여러 소유자(당사/귀하/그들의)에 대한 단일 소유"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "Mon amie, son idée, ton histoire (부드러운 소리, /a-a/ 충돌 방지)"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "셋 옴므, 셋 아파트, 셋 에테"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "son livre = 그/그녀의 책(1명의 소유자); leur livre = 그들의 책(다중 소유자)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 소지품 식별",
            "question": "성별과 번호는 무엇입니까?",
            "action": "복수형 ➔ mes/tes/ses/nos/vos/leurs. 단수 ➔ 2단계 참조"
          },
          {
            "step": "2단계: 모음 시작 확인",
            "question": "단수 명사는 모음이나 묵음 h로 시작합니까?",
            "action": "그렇다면 ➔ 반드시 mon / ton / son / cet를 사용해야 합니다(여성인 경우에도!)"
          },
          {
            "step": "3단계: 매치 소유자",
            "question": "누가 그것을 소유합니까(je, tu, il/elle, nous, vous, ils)?",
            "action": "올바른 사람의 소유격 행을 선택하세요"
          },
          {
            "step": "4단계: 시연 필터",
            "question": "'이것/저것'을 가리키고 있나요?",
            "action": "ce(M) / cet(M+모음) / cette(F) / ces(복수형)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "프랑스어 70년대 Base-60 수학 공식",
            "meaning": "프랑스어 숫자 70-79는 60 위에 10부터 19까지를 셉니다",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "프랑스어 80년대 Base-20 수학 공식",
            "meaning": "Celtic French에서 상속받은 Vigesimal base-20 계산",
            "example": "80에는 -s(quatre-vingts)가 있고 뒤에 숫자가 오면 -s를 삭제합니다(quatre-vingt-un)."
          },
          {
            "name": "프랑스어 90년대 수학 공식",
            "meaning": "4 x 20 + 10대(10~19세)",
            "example": "95 = 콰트레-빙트-퀸즈(4 × 20 + 15)"
          },
          {
            "name": "시계 시간 알려주는 공식",
            "meaning": "표준 프랑스 시계 공식은 'heures'를 명시적으로 사용합니다.",
            "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "프랑스 및 퀘벡 70(60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "프랑스 및 퀘벡에서는 80개(4 x 20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "프랑스 및 퀘벡에서는 90(4 x 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "21, 31, 41, 51, 61, 71(et-un) 및 반 과거(et demie)용 커넥터"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = quatre-vingt-un (NO 'et'!), 91 = quatre-vingt-onze (NO 'et'!)"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "이제 모든 복합 숫자 부분에 하이픈을 넣을 수 있습니다: deux-cent-cinquate"
          },
          {
            "pattern": "Half past agreement",
            "note": "une heure et demie(heure와의 fem 계약) vs midi et demi(masc)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 십분위수 확인(70대, 80대, 90대)",
            "question": "70년대, 80년대, 90년대 숫자인가요?",
            "action": "70대 ➔ 60대 이상 청소년 · 80대 ➔ 4x20 + 숫자 · 90대 ➔ 4x20 이상 청소년"
          },
          {
            "step": "2단계: 1s 커넥터 확인",
            "question": "21, 31, 41, 51, 61, 71인가요?",
            "action": "'et'을 추가하세요: soixante-et-un. (81과 91은 'et'을 사용하지 않습니다)"
          },
          {
            "step": "3단계: 시간 말하기",
            "question": "30분쯤 지났나요?",
            "action": "'모인'을 사용하세요: 4:50 = 5시간 모인 딕스"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "파세 콩포제 마스터 포뮬러",
            "meaning": "완료된 일회성 이벤트의 복합 과거",
            "example": "J'ai mangé (avoir) · Je suis parti (être)"
          },
          {
            "name": "äTRE 보조 선택 공식",
            "meaning": "동작/상태 변화 및 재귀 동사의 특정 동사만 être를 사용합니다.",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "입자 형성 공식",
            "meaning": "표준 일반 분사 어미",
            "example": "parler ➜ parlé · finir ➜ fini · Attre ➜ Attendu"
          },
          {
            "name": "Étre 계약법",
            "meaning": "여성의 경우 -e를 추가하고, être와 함께 복수형의 경우 -s를 추가합니다.",
            "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "과거 시간 트리거: 어제/어제 밤"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "갑작스러운 중단 유발: 항상 Passé Composé"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "특정 격리된 이벤트 트리거"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir, Passer"
          }
        ],
        "patterns": [
          {
            "pattern": "Avoir has NO agreement with Subject",
            "note": "Elle a mangé (NO -e!), Elles ont thoughté (NO -es!)"
          },
          {
            "pattern": "Irregular participles to memorize",
            "note": "fait(공정), pris(prendre), vu(voir), eu(avoir), été(être), mis(mettre)"
          },
          {
            "pattern": "Reflexive agreement exception",
            "note": "Elle s'est lavé les mains(COD 'les mains'가 AFTER 동사이기 때문에 일치하지 않음)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동사가 재귀적입니까(se...)?",
            "question": "동사에 se / s'가 있나요?",
            "action": "YES ➔ Aux가 تRE인 경우(직접 목적어가 뒤따르지 않는 한 분사는 주어와 일치합니다)"
          },
          {
            "step": "2단계: DR MRS VANDERTRAMP에 있나요?",
            "question": "17개의 이동/상태 변화 동사 중 하나인가요?",
            "action": "YES ➔ Aux가 تRE인 경우(분사가 주제와 일치함)"
          },
          {
            "step": "3단계: 기본 보조",
            "question": "다른 모든 동사",
            "action": "AVOIR 사용(주제 동의 없음)"
          },
          {
            "step": "4단계: 분사 만들기",
            "question": "규칙적인 줄기 또는 불규칙한 형태 적용",
            "action": "-er ➔ -é, -ir ➔ -i, -re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "직접목적대명사(COD) 공식",
            "meaning": "전치사 없이 직접 목적어를 대체합니다.",
            "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
          },
          {
            "name": "간접 목적어 대명사(COI) 수식",
            "meaning": "'à + 사람'을 대체합니다(그에게 / 그녀에게 / 그들에게)",
            "example": "Je parle à Marie ➔ Je LUI parle · Je téléphone à mes 부모님 ➔ Je LEUR téléphone"
          },
          {
            "name": "목적대명사 배치 공식",
            "meaning": "프랑스어는 동사 앞에 목적 대명사를 배치합니다(영어 반대).",
            "example": "사랑해요 ➔ Je T'aime (Je aime toi 아님)"
          },
          {
            "name": "가까운 미래 대명사 배치",
            "meaning": "대명사는 논리적으로 속해 있는 부정사를 포옹합니다.",
            "example": "Je vais le voir(Je vais le voir 아님)"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "'그에게' 또는 '그녀에게'를 의미하는 간접 대명사(성 중립적!)"
          },
          {
            "word": "Leur",
            "rule": "'그들에게'를 의미하는 간접 대명사(-s를 대명사로 사용하지 마세요!)"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "lui/leur가 필요한 클래식 COI 트리거 동사"
          },
          {
            "word": "Moi / Toi",
            "rule": "전치사 뒤에 사용되거나 긍정적 명령형으로 사용되는 강세 대명사(Regarde-moi !)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "질문: 전치사 'à'가 있나요? 그렇다면 ➔ COI(lui/leur); 그렇지 않은 경우 ➔ COD(le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "Je ne le vois pas (대명사는 부정 샌드위치 안에 있습니다!)"
          },
          {
            "pattern": "Elision with vowels",
            "note": "Je l'adore, il m'attend, on t'écoute"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동사의 목적어 식별",
            "question": "무엇을 또는 누가 조치를 받는가?",
            "action": "목적어를 강조하세요"
          },
          {
            "step": "2단계: 사람 앞에 전치사 'à'가 있나요?",
            "question": "동사는 'à quelqu'un'을 취합니까?",
            "action": "YES ➔ COI: LUI(단수) / LEUR(복수)"
          },
          {
            "step": "3단계: 직접 목적어(전치사 없음)?",
            "question": "'무엇' 또는 '누구'에 대해 직접적으로 대답합니까?",
            "action": "YES ➔ COD: LE / LA / L' / LES"
          },
          {
            "step": "4단계: 동사 앞에 위치",
            "question": "어디로 가나요?",
            "action": "활용동사 바로 앞(또는 존재할 경우 부정사 앞)"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "명령형 형성 공식",
            "meaning": "주제 대명사를 삭제하십시오. 명령에는 동사가 3개만 존재합니다.",
            "example": "투비엔스 ➔ 비엔스! · 노우스 알론스 ➔ 알론스 ! · Vous mangez ➔ Mangez !"
          },
          {
            "name": "-ER 동사 'Tu' -S 삭제 법칙",
            "meaning": "당신은 안부 ➔ 안부를 전합니다! · 투 바스 ➔ 바!",
            "example": "팔레! (Parles 아님!) · Écoute ! (Écoutes가 아닙니다!)"
          },
          {
            "name": "모달 동사 공식",
            "meaning": "조동사는 공액화되고 보조 동작은 부정사에 유지됩니다.",
            "example": "Je peux venir · Il doit partir · Nous voulons manger"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "능력이나 정중한 허락을 표현합니다('can / may')"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "의무, 책임 또는 가능성을 표현합니다('해야 합니다/해야 합니다')."
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "욕망/의지를 표현함('원함') ➔ 공손함을 위해 'voudrais' 사용"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "비인격적인 의무('해야 한다/~해야 한다')"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "동사 뒤에 하이픈 넣기: Mange-le ! 도네즈모이!"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "일반적으로 동사 앞에: Ne le mange pas ! 네 나 돈네 파스!"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "바시! 망게엔! (모음 충돌을 방지하기 위해서만 -s를 복원합니다)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 수취인 선택",
            "question": "친구(tu)에게 명령합니까, 그룹/예의바른 사람(vous)에게 명령합니까, 아니면 자신을 포함하여 명령(nous)합니까?",
            "action": "투(tu), 누스(nous), vous(vous) 중 하나를 선택하세요."
          },
          {
            "step": "2단계: 주어 대명사 삭제",
            "question": "tu / nous / vous 제거",
            "action": "동사 어간만 유지"
          },
          {
            "step": "3단계: -ER 'tu' 형식 확인",
            "question": "'tu' 형태의 -ER 동사인가요?",
            "action": "마지막 문자 's'를 삭제합니다(Parle ! Regarde !)"
          },
          {
            "step": "4단계: 긍정 vs 부정 확인",
            "question": "'하라' 명령인가, '하지 말라' 명령인가?",
            "action": "긍정: 동사-대명사 (Aide-moi !) · 부정: Ne 대명사 동사 pas (Ne m'aide pas !)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est 대 Il est 결정 공식",
            "meaning": "수정된 명사와 함께 c'est를 사용하세요. il est를 직접 형용사와 함께 사용하세요",
            "example": "C'est un bon medecin(수정 명사) vs Il estintelligent(베어 형용사)"
          },
          {
            "name": "Il y a 존재 및 과거 공식",
            "meaning": "이중 의미: 존재 상태 또는 경과 시간 전",
            "example": "Il y a deux stylos sur la table · Je suis il y a dix 분 도착"
          },
          {
            "name": "아보아르 베시온(Avoir Besion) / 엔비 포뮬러(Envie Formulas)",
            "meaning": "프랑스어로 Need / Want는 욕구/욕망에 대한 물리적 소유를 표현합니다.",
            "example": "J'ai besoin d'eau · J'ai envie de voyager"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "관사 + 명사, 이름 또는 전체 문장이 옵니다(C'est génial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "관사 또는 단순 형용사가 없는 직업이 뒤따릅니다(Il est avocat, Elle est gentille)"
          },
          {
            "word": "Il y a",
            "rule": "불변: 뒤에 단수 명사가 오든 복수 명사가 오든 'il y a'를 유지합니다."
          },
          {
            "word": "Avoir l'air",
            "rule": "'보다/보이다'라는 뜻 뒤에 형용사가 옵니다: Tu as l'air fatigué"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ Il est un médecin ➔ ✓ C'est un médecin OR Il est médecin(베어 직업)"
          },
          {
            "pattern": "Negation of il y a",
            "note": "Il n'y a pas DE + 명사(부분형은 de로 떨어짐: Il n'y a pas de problème)"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "J'ai besoin d'argent, j'ai 부러워 d'apprendre"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동사 뒤에 무엇이 있는지 확인하세요",
            "question": "관사/관사(un, une, le, mon)가 있나요?",
            "action": "그렇다면 ➔ C'EST(C'est un prof)를 사용하세요."
          },
          {
            "step": "2단계: 벌거벗은 형용사인가 아니면 벌거벗은 직업인가?",
            "question": "단어 앞에 기사가 없나요?",
            "action": "그렇다면 ➔ IL EST / ELLE EST(Il est prof, Elle est chille)를 사용하세요."
          },
          {
            "step": "3단계: 존재를 나타냄?",
            "question": "'있다/있다'라고 말하고 싶나요?",
            "action": "IL YA A 사용(복수형으로 변경되지 않음)"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "퀘벡 고주파 어휘 공식",
            "meaning": "몬트리올 및 QC 일상 생활에서 듣는 표준 퀘벡 용어",
            "example": "petit déjeuner ➜ déjeuner · déjeuner ➜ dîner · dîner ➜ 수프"
          },
          {
            "name": "퀘벡 아프카케이션 법",
            "meaning": "고모음 앞에서 /t/와 /d/는 자연스럽게 미묘한 마찰음 쉿소리를 냅니다.",
            "example": "tu = /tsy/ · parti = /paʁtsi/ · dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "퀘벡 의문사 -tu 입자",
            "meaning": "퀘벡 프랑스어로 된 대화형 물음표",
            "example": "투비엔투? (오시나요?) · C'est-tu bon ? (좋은가요?)"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "퀘벡 'faire du shopping'(쇼핑하러 가다)"
          },
          {
            "word": "Fin de semaine",
            "rule": "'주말'을 뜻하는 퀘벡"
          },
          {
            "word": "Char",
            "rule": "'voiture'(자동차)에 대한 비공식 퀘벡"
          },
          {
            "word": "Chum / Blonde",
            "rule": "남자친구/여자친구를 위한 퀘벡"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "'모든 것이 좋다/완벽해!'를 의미하는 퀘벡 관용어"
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "아침: déjeuner, 점심: dîner, 저녁: 수프"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "fête는 /faɛ̯t/에 더 가깝게 들리고, père는 /paɛ̯ʁ/에 더 가깝습니다."
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "canceller (annuler), checker (vérifier), parker (garer)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 퀘벡 대화 환경 파악",
            "question": "몬트리올/퀘벡에 사는 현지인과 대화를 나누고 계시나요?",
            "action": "현지 용어 사용: fin de semaine, char, magasiner, 수프"
          },
          {
            "step": "2단계: 고통에 귀를 기울이세요",
            "question": "단어에 ti, tu, di, du가 있나요?",
            "action": "기본 'ts' 및 'dz' 소리 듣기: 'tu'의 경우 /tsy/"
          },
          {
            "step": "3단계: 질문 입자 '-tu'",
            "question": "화자가 동사 뒤에 '-tu'를 추가했나요?",
            "action": "비공식적인 물음표로 인식하세요. On y va-tu ?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "청각 유사성 규칙",
            "meaning": "세 엔딩 모두 귀에 100% 동일하게 들립니다(/e/).",
            "example": "parler, parlé, parlez는 모두 똑같이 발음됩니다: /paʁle/"
          },
          {
            "name": "'Vendre' 공제 테스트",
            "meaning": "-er(부정사) 또는 -é(과거분사)를 쓸지 결정합니다.",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
          },
          {
            "name": "분사 추론 테스트",
            "meaning": "'vendu'가 의미가 있으면 -é를 쓰세요.",
            "example": "J'ai mang... ➔ J'ai VENDU ➔ J'ai MANGÉ"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "부정사 대체 테스트 단어(뚜렷한 /ʁ/ 소리 듣기)"
          },
          {
            "word": "Vendu / Fait",
            "rule": "과거 분사 대체 테스트 단어(뚜렷한 /y/ 또는 /t/ 소리 듣기)"
          },
          {
            "word": "-ons",
            "rule": "nous로 끝나는 명확한 문어체 및 음성 /ɔ̃/"
          },
          {
            "word": "-ent",
            "rule": "3인칭 복수형 ils/elles에 대한 명확한 묵음 표시"
          }
        ],
        "patterns": [
          {
            "pattern": "Two verbs in a row ➜ Second is Infinitive",
            "note": "Je veux partir · Il aime voyager · On doit réviser"
          },
          {
            "pattern": "After preposition ➜ Always Infinitive",
            "note": "부어 구유, 산 팔레르, 아방 드 파르티르, 오 리유 드 도르미르"
          },
          {
            "pattern": "After avoir / être ➜ Past Participle",
            "note": "J'ai thanksé, elle est party"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: /e/ 소리 듣기",
            "question": "단어가 끝에 /e/처럼 들리나요?",
            "action": "옵션: -er(Inf), -é(분사) 또는 -ez(vous)"
          },
          {
            "step": "2단계: 'Vendre' 테스트 적용",
            "question": "문장에 'VENDRE'라는 단어를 대체할 수 있나요?",
            "action": "YES ➔ 쓰기 -ER (부정사: Je dois parler)"
          },
          {
            "step": "3단계: 'VENDU'로 대체할 수 있나요?",
            "question": "avoir/être 뒤에 'VENDU'가 자연스럽게 어울리나요?",
            "action": "YES인 경우 ➔ -É(분사: J'ai parlé)를 씁니다."
          },
          {
            "step": "4단계: 주어가 'Vous'인가요?",
            "question": "직접적인 주제가 Vous인가요?",
            "action": "그렇다면 ➔ -EZ(vous parlez)를 작성하세요."
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "재귀 현재 활용 공식",
            "meaning": "재귀 대명사는 자신에게 행동을 하는 주어와 일치합니다.",
            "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
          },
          {
            "name": "대명사 Passé Composé 공식",
            "meaning": "대명사의 100%는 고전적인 표현에서 تRE가 필요합니다.",
            "example": "Elle s'est réveillée · Nous nous sommes Couches"
          },
          {
            "name": "재귀합의법",
            "meaning": "행동이 자신에게 직접적으로 영향을 미칠 때 동의합니다. 신체 부위가 뒤따르면 동의하지 않음",
            "example": "Elle s'est lavée(동의) vs Elle s'est lavé les mains(동의 없음: 'les mains'는 직접 목적어입니다!)"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "일상 대명사"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "재귀 구조가 필요한 기억 동사"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "'잘 지내다'라는 뜻의 상호동사"
          },
          {
            "word": "S'en aller",
            "rule": "'떠나다/떠나다'를 의미하는 관용적 대명사"
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "Je NE me réveille PAS (대명사는 ne... pas 내부에 동사를 포옹합니다)"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "Je vais ME 레버(주어에 대한 재귀 대명사는 변경되지만 부정사 앞에 위치함)"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "레브토이! Reveillez-vous! (긍정 명령에서는 -toi를 사용합니다)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 그 행동이 자신에게 행해진 것인가, 아니면 상호적인 것인가?",
            "question": "누군가가 자기 자신에게 뭔가를 하고 있습니까(머리 빗기, 잠에서 깨기)?",
            "action": "대명사 형태 사용: SE + 동사"
          },
          {
            "step": "2단계: 재귀 대명사 일치",
            "question": "대상은 누구입니까?",
            "action": "je ➔ me, tu ➔ te, il ➔ se, nous ➔ nous, vous ➔ vous, ils ➔ se"
          },
          {
            "step": "3단계: 과거 시제 확인",
            "question": "파세 콩포세인가요?",
            "action": "항상 تRE를 보조 수단으로 사용하십시오."
          },
          {
            "step": "4단계: 계약 필터",
            "question": "동사 바로 뒤에 직접 목적어가 지정되어 있나요?",
            "action": "예(les mains, les dents)인 경우 ➔ 동의하지 않습니다! NO일 경우 ➔ 주제에 동의함"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "직접 개체(COD) 식별 공식",
            "meaning": "전치사는 동사와 직접 명사를 분리하지 않습니다.",
            "example": "J'invite mes amis ➔ Je LES 초대"
          },
          {
            "name": "간접 개체(COI) 식별 공식",
            "meaning": "사람을 가리키는 전치사 'à'로 구분",
            "example": "Je parle à mon 후원자 ➔ Je LUI parle"
          },
          {
            "name": "이중 대명사 순서 계층 공식",
            "meaning": "두 개의 대명사를 사용할 때 동사 앞의 엄격한 왼쪽에서 오른쪽 순서",
            "example": "Il me le donne · Je le lui envoie"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "COI 단수 (그에게 / 그녀에게) — 성맹"
          },
          {
            "word": "Leur",
            "rule": "COI 복수형(그들에게) — 성맹, 절대 -s를 취하지 않음"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "고정 전치사 'à' 때문에 COI를 취해야 하는 동사"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "프랑스어의 직접 동사(COD를 사용하고 영어와 달리 전치사는 사용하지 않음!)"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "Attendre qqn(누군가를 기다리다), chercher qch(무엇을 찾다) 프랑스어로 COD를 받으세요!"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "Il ME LE prête(1인칭/2인칭이 3인칭 바로 앞에 옴)"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "Je LE LUI dis (3번째 직접은 3번째 간접 앞에 옴)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동사 이행성 확인",
            "question": "프랑스어 동사는 사람과 함께 'à'를 취합니까?",
            "action": "그렇다면 ➔ COI(lui/leur). NO ➔ COD(le/la/les)인 경우"
          },
          {
            "step": "2단계: 첫 번째 개체 바꾸기",
            "question": "그것을 나타내는 대명사는 무엇입니까?",
            "action": "COD 또는 COI로 태그 지정"
          },
          {
            "step": "3단계: 이중 대명사 배열",
            "question": "대명사가 2개 있나요?",
            "action": "계층 구조를 따르세요: [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ 동사"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "미래 지향적 긍정 공식",
            "meaning": "즉각적인 계획, 의도, 예정된 확실한 이벤트에 사용됩니다(다음으로...)",
            "example": "Je vais manger · Nous allons voyager · Ils vont partir"
          },
          {
            "name": "퓨쳐프로체 네거티브 포뮬러",
            "meaning": "부정사는 활용형 동사 'aller'를 감싸고 부정사는 바깥쪽에 남습니다.",
            "example": "Je ne vais pas travailler demain(Je ne travailler pas 아님)"
          },
          {
            "name": "대명사 미래 프로슈 포뮬러",
            "meaning": "재귀 대명사는 주어와 일치해야 하며 부정사 바로 앞에 위치해야 합니다.",
            "example": "Je vais ME 소파 의자 · Vous allez VOUS amuser"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "가까운 미래 시간 트리거"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "임박한 미래의 트리거"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "현재형 보조 알레르기의 활용"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "Je ne vais pas dormir · Elle ne va pas venir"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je vais LE voir · Il va ME téléphoner (대명사는 부정사 동작에 속함)"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "M'as manger(Je vais manger의 경우 비공식적으로 사용됨)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 의도 또는 가까운 미래 확인",
            "question": "이것이 곧 예정된 계획이나 이벤트인가요?",
            "action": "Futur Proche(Aller + Inf) 사용"
          },
          {
            "step": "2단계: ALLER 접합",
            "question": "대상은 누구입니까?",
            "action": "je vais, tu vas, il va, nous allons, vous allez, ils vont"
          },
          {
            "step": "3단계: 기본 작업 연결",
            "question": "행동 동사는 무엇입니까?",
            "action": "부정사(-er, -ir, -re)로 유지하세요."
          },
          {
            "step": "4단계: 대명사 또는 부정 확인",
            "question": "부정인가요, 아니면 목적대명사가 있나요?",
            "action": "Ne + Aller + Pas + [대명사] + 부정사"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "퓨처 심플 마스터 포뮬러",
            "meaning": "결말은 문자 그대로 AVOIR의 현재 시제(ai, as, a, ons, ez, ont)입니다!",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "-RE 동사 미래 어간 규칙",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "prendre ➔ je prendrai · Attendre ➔ j'attendrai"
          },
          {
            "name": "핵심 불규칙 미래 줄기",
            "meaning": "어간은 항상 'r'로 끝나고 표준 어미를 취합니다.",
            "example": "Je serai, j'aurai, j'irai, je ferai, je pourrai, je voudrai"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "먼 미래의 시간 표시"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "프랑스어로 미래를 유발하는 시간의 접속사 단순"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "첫 번째 조건부 규칙(Si j'ai le temps, je viendrai)"
          }
        ],
        "patterns": [
          {
            "pattern": "Future stems ALWAYS end in 'R'",
            "note": "parler-, finir-, vendr-, ser-, aur-, ir-, fer-"
          },
          {
            "pattern": "Do not confuse -ons with nous imparfait",
            "note": "nous parlerons(Futur /ɔ̃/) 대 nous parlions(Imparfait /jɔ̃/)"
          },
          {
            "pattern": "3rd person plural is -ont (not -ent!)",
            "note": "ils parleront (/ɔ̃/처럼 들리며 ons와 운율이 같습니다!)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 미래 줄기 결정",
            "question": "동사는 규칙적(-er, -ir, -re)입니까?",
            "action": "부정사를 유지하세요(-re에서 'e' 삭제). 불규칙한 경우 'R' 루트(ser-, aur-, ir-, fer-)를 사용합니다."
          },
          {
            "step": "2단계: AVOIR 엔딩 첨부",
            "question": "주제는 무엇입니까?",
            "action": "je ➔ -ai, tu ➔ -as, il ➔ -a, nous ➔ -ons, vous ➔ -ez, ils ➔ -ont"
          },
          {
            "step": "3단계: 최종 접미사 발음",
            "question": "모음에 주목하세요",
            "action": "je parlerai (/e/), tu parleras (/a/), ils parleront (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "임파르페 줄기 추출 포뮬러",
            "meaning": "프랑스어의 모든 동사의 99.9%에 작동합니다!",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "Imparfait 유니버설 엔딩 공식",
            "meaning": "-ais, -ais, -ait, -aient는 모두 동일하게 발음됩니다. /ɛ/",
            "example": "je parlais, tu parlais, il parlait, ils parlaient 모든 소리 /paʁlɛ/"
          },
          {
            "name": "프랑스어의 유일한 불규칙 어간",
            "meaning": "다른 모든 동사는 현재 nous에서 어간을 추출합니다!",
            "example": "j'étais, nous étions, vous étiez"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "반복되는 습관 유발 ➔ 항상 Imparfait"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "지속적인 백그라운드 작업 트리거 ➔ Imparfait"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "과거 진행중인 시대 / 삶의 상태"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "과거의 풍경, 날씨, 시간, 감정상태"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "모두 /ɛ/(열린 e)로 발음됩니다. 주어 대명사는 누가 그랬는지 알려줍니다!"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "nous parlions (/paʁljɔ̃/), vous parliez (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "je mangeais ('e' 유지), je commençais (cedilla 'ç' 추가)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 현재 시제로 Nous를 취하세요.",
            "question": "'nous'의 현재 시제는 무엇입니까?",
            "action": "Nous parlons, nous faisons, nous buvons"
          },
          {
            "step": "2단계: 차단 -ONS",
            "question": "-ons 3개 문자를 제거하세요.",
            "action": "parl-, fais-, buv-(이것이 어간입니다)"
          },
          {
            "step": "3단계: 동사는 تRE인가요?",
            "question": "단일 예외 être인가요?",
            "action": "줄기 ét-를 사용하세요."
          },
          {
            "step": "4단계: Imparfait 엔딩 첨부",
            "question": "주제를 일치시키세요",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "대명사 Y 위치 대체 공식",
            "meaning": "모든 지리적 장소 또는 위치를 대체합니다(영어: THERE).",
            "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "대명사 Y 무생물 개체 공식",
            "meaning": "'à + 사물/개념'을 대체합니다(생각하기, 참여하기).",
            "example": "Je pense à mon avenir ➔ J'Y pense (Je pense à lui가 아님: 사람들은 강세 대명사를 사용합니다!)"
          },
          {
            "name": "대명사 Y 배치 공식",
            "meaning": "동사 바로 앞에 위치",
            "example": "Tu y vas · On n'y va pas · Vas-y ! (필수)"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "Penser à un Examen ➔ y penser"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "'à' + 무생물 개념을 취하는 동사 ➔ Y로 대체됨"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "위치 트리거 ➔ Y로 대체됨"
          },
          {
            "word": "Il y a",
            "rule": "대명사 Y 포함: 문자 그대로 '그것이 있다'"
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle (사람에게는 스트레스 대명사를 사용하세요!)"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "Va + y ➔ Vas-y ! (보기 흉한 /a-i/ 모음 충돌을 피하기 위해 's'를 추가합니다)"
          },
          {
            "pattern": "Near future placement",
            "note": "Je vais Y aller (부정사 바로 앞에 앉음)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 전치사 확인",
            "question": "문구가 à, en, dans, sur, sous 또는 chez로 소개됩니까?",
            "action": "'예'인 경우 ➔ Y 후보"
          },
          {
            "step": "2단계: 사람인가요?",
            "question": "이 문구가 인간을 지칭하는 것인가요?",
            "action": "그렇다면 ➔ Y!를 사용하지 마십시오. à lui / à elle를 사용하세요. 아니요인 경우 ➔ 3단계로 진행하세요."
          },
          {
            "step": "3단계: 장소인가 사물인가?",
            "question": "위치인가 아니면 추상적인 개념인가(à mon travail, à mon avenir)?",
            "action": "전체 문구를 Y로 바꾸기"
          },
          {
            "step": "4단계: 동사 앞에 배치",
            "question": "어디에 앉아 있나요?",
            "action": "활용동사 바로 앞(또는 부정사 앞)"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "컨디셔널 어셈블리 공식",
            "meaning": "하이브리드 시제: Imparfait 음성과 함께 Future 몸체를 사용합니다!",
            "example": "aimer ➔ 어미 aimer- + -ais ➔ J'aimerais · être ➔ 어간 ser- + -ait ➔ Il serait"
          },
          {
            "name": "보편적인 공손함의 공식",
            "meaning": "상점, 레스토랑 및 전문적인 환경의 요구를 완화합니다.",
            "example": "Je veux un Café (무례함) ➔ Je VOUDRAIS un Café (예의바르게)"
          },
          {
            "name": "두 번째 조건부 'Si' 공식",
            "meaning": "가상의 비현실적 조건('만약 내가 그랬다면... 나는...')",
            "example": "Si j'avais de l'argent, j'achèterais une maison"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "카페, 베이커리, 고객 서비스에서의 필수 공손 공식"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "정중한 요청: 그럴 수 있나요? / 그럴까요?"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "조언하기: 내가 당신이라면..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "당신의 입장에서, 나는 할 것입니다 ..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su (Les 'si' n'aiment pas les 'rais'!)"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "미래: je parlerai(/e/ 닫힘) vs Conditionnel: je parlerais(/ɛ/ 열림)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "aur-(avoir), ser-(être), ir-(aller), fer-(faire), pourr-(pouvoir), devr-(devoir)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 의도 확인(정의적 또는 가상)",
            "question": "음식을 주문하고, 요청하고, 아니면 '만약'을 상상하고 있나요?",
            "action": "Conditionnel 현재 사용"
          },
          {
            "step": "2단계: Future Stem 가져오기",
            "question": "부정사(또는 불규칙 -R 어간)를 취하세요.",
            "action": "voudr-, aimer-, pourr-, ser-"
          },
          {
            "step": "3단계: Imparfait 엔딩 첨부",
            "question": "주제를 일치시키세요",
            "action": "-ais, -ais, -ait, -ions, -iez, -aient"
          },
          {
            "step": "4단계: 'Si' 절 확인",
            "question": "문장이 '시'로 시작하나요?",
            "action": "IMPARFAIT에 'si' 바로 뒤에 동사가 있는지 확인하세요!"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "Gérondif 형성 공식",
            "meaning": "현재 'nous' 어간을 추출하고 전치사 'en'과 접미사 '-ant'를 추가합니다.",
            "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
          },
          {
            "name": "동시 행동 공식",
            "meaning": "두 작업은 정확히 동일한 대상이 동시에 수행해야 합니다.",
            "example": "Il écoute de la musique en étudiant (그는 공부하면서 음악을 듣습니다)"
          },
          {
            "name": "매너 & 수단 공식",
            "meaning": "결과가 어떻게 달성되었는지 설명합니다.",
            "example": "C'est en forgeant qu'on devient forgeron · On apprend en faisant des erreurs"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "프랑스 제롱디프의 시그니처 마커"
          },
          {
            "word": "Tout en + -ant",
            "rule": "대비나 엄격한 동시성을 강조함 (울면서 웃었음)"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "일상생활에서 자주 쓰이는 gérondif 표현"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "본동사를 수행하는 사람은 gérondif 동작을 수행하는 사람이어야 합니다!"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en aant | savoir ➔ en sachant"
          },
          {
            "pattern": "Invariable",
            "note": "gérondif는 -e 또는 -s를 사용하지 않습니다(항상 -ant로 끝남)."
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 동시성 또는 방식 확인",
            "question": "두 가지 행동이 동시에 일어나는가, 아니면 '어떻게'라고 대답하는가?",
            "action": "르 제롱디프 사용"
          },
          {
            "step": "2단계: 현재에 Nous 활용",
            "question": "동사의 현재 'nous' 형태는 무엇입니까?",
            "action": "누스 프레논, 누스 마르숑, 누스 피니슨"
          },
          {
            "step": "3단계: -ONS 제거 및 -ANT 추가",
            "question": "-ons를 -ant로 교체",
            "action": "프레낭트, 마샹트, 피니상트"
          },
          {
            "step": "4단계: 'EN' 앞에 추가",
            "question": "전치사 'en'을 추가하세요.",
            "action": "앙 프레낭, 앙 행진, 앙 피니상"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "Passé Récent 긍정 공식",
            "meaning": "방금 전에 완료된 작업에 사용됩니다(영어: 방금 뭔가를 했습니다).",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "De Elision 법칙",
            "meaning": "모음으로 시작하는 동사 앞의 필수 수축",
            "example": "Il vient D'arriver · Elle vient D'entendre"
          },
          {
            "name": "대명사 Passé Récent 공식",
            "meaning": "대명사는 주어와 일치하지만 부정사를 껴안습니다.",
            "example": "Je viens de ME réveiller · Ils viennent de SE marier"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "트리거: 바로 지금 이 순간"
          },
          {
            "word": "Tout juste",
            "rule": "트리거: 겨우 / 갓 완료됨"
          },
          {
            "word": "Il y a une minute",
            "rule": "트리거: 1분 전"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "venir의 현재 활용형"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ Je viens manger (먹으러 왔다는 뜻) ➔ ✓ Je viens DE manger (방금 먹었습니다)"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je viens de LE voir (대명사는 부정사 바로 앞에 위치)"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "Je venais de partir quand il a sonné (그가 전화했을 때 나는 막 떠났습니다)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 타이밍 확인",
            "question": "해당 작업이 몇 초 또는 몇 분 전에 발생했습니까('방금 했습니다')?",
            "action": "Passé Récent 사용"
          },
          {
            "step": "2단계: VENIR 접합",
            "question": "대상은 누구입니까?",
            "action": "viens, viens, vient, venons, venez, viennent"
          },
          {
            "step": "3단계: DE 또는 D' 추가",
            "question": "다음 동사는 모음으로 시작합니까?",
            "action": "모음/h 앞에 D'를 사용하세요. DE 자음 앞"
          },
          {
            "step": "4단계: 동작 부정사 연결",
            "question": "주요 동사를 부정사로 유지하세요",
            "action": "Je viens de finir mon 카페"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "전체 연대순 타임라인 공식",
            "meaning": "현실의 연대순 타임라인을 따라 그려진 5가지 기본 작동 시제",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "음성 프랑스어 활용 삼두 정치",
            "meaning": "일상 프랑스어 회화의 95%를 구사하려면 먼저 이 세 가지 시제를 마스터하세요.",
            "example": "J'ai parlé ➔ Je parle ➔ Je vais parler"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "Passé Composé(특정 시점) 또는 Imparfait(진행 중인 배경)"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "현재 드 린디카티프"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "Futur Proche(대화) 또는 Futur Simple(공식/서문)"
          }
        ],
        "patterns": [
          {
            "pattern": "Auxiliary tenses rely on Infinitives",
            "note": "Passé Récent = venir + de + INF · 미래 Proche = aller + INF"
          },
          {
            "pattern": "Compound tenses rely on Participles",
            "note": "Passé Composé = avoir/être + 분사"
          },
          {
            "pattern": "Stem tenses rely on Endings",
            "note": "현재 = 어간+엔딩 · Imparfait = nous-stem+엔딩 · Futur Simple = inf+엔딩"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 시간 앵커 찾기",
            "question": "그 행동은 과거인가, 현재인가, 미래인가?",
            "action": "연대기 축의 정확한 위치"
          },
          {
            "step": "2단계: 등록 선택(구두 vs 격식)",
            "question": "일상적인 대화인가요, 아니면 격식을 갖춘 글쓰기인가요?",
            "action": "음성 ➔ Futur Proche(vais faire) · Formal ➔ Futur Simple(ferai)"
          },
          {
            "step": "3단계: 과거 작업 필터",
            "question": "갑작스러운 사건인가, 아니면 장면/습관인가?",
            "action": "이벤트 ➔ Passé Composé · 습관/환경 ➔ Imparfait"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS 공식(과거부터 현재까지 진행 중)",
            "meaning": "과거에 시작되어 지금도 여전히 계속되고 있습니다. (프랑스어에서는 현재 시제를 사용합니다!)",
            "example": "J'habite à Montréal DEPUIS deux ans (저는 여기서 2년 동안 살았고 지금도 살고 있습니다!)"
          },
          {
            "name": "IL Y A 공식(과거의 완성점)",
            "meaning": "과거에 완료된 단일 순간을 가리킵니다(영어: AGO).",
            "example": "Le train est parti IL Y A dix 분 (기차는 10분 전에 출발했습니다.)"
          },
          {
            "name": "DANS 공식(미래를 향한 카운트다운)",
            "meaning": "향후 작업이 시작되는 시점까지 카운트다운합니다(영어: IN).",
            "example": "Le cours 시작 DANS cinq 분 (5분 후 수업 시작)"
          },
          {
            "name": "PENDANT Formula (마감 완료 기간)",
            "meaning": "시작과 끝이 명확합니다. 동작이 완전히 끝났습니다 (영어: FOR / DURING)",
            "example": "J'ai dormi PENDANT huit heures (8시간 동안 자고 이제 일어났어요)"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "지금도 여전히 일어나고 있습니다. ➔ 반드시 현재 시제를 취해야 합니다."
          },
          {
            "word": "Il y a",
            "rule": "시간 전 ➔ 과거 시제를 취해야 합니다."
          },
          {
            "word": "Dans",
            "rule": "미래 카운트다운 ➔ 미래 시제를 취해야 합니다."
          },
          {
            "word": "Pendant",
            "rule": "완료된 시간의 닫힌 블록 ➔ 일반적으로 Passé Composé"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ J'aihabé ici depuis 1an ➔ ✓ J'habite ici depuis 1an"
          },
          {
            "pattern": "Dans vs En",
            "note": "Dans 1h = 지금부터 1시간 후에 시작(카운트다운) · En 1h = 완료하는 데 1시간 소요(속도)"
          },
          {
            "pattern": "Pour with time",
            "note": "엄격하게 의도된 미래 계획 기간 동안: Je pars pour deux semaines"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 현재도 해당 작업이 진행되고 있나요?",
            "question": "과거에 시작해서 현재까지 계속되고 있나요?",
            "action": "YES ➔ DEPUIS (+ 현재시제)"
          },
          {
            "step": "2단계: 미래의 행동인가?",
            "question": "시작되는 시간을 카운트다운하고 있나요?",
            "action": "그렇다면 ➔ DANS(+미래시제)"
          },
          {
            "step": "3단계: 과거에 완전히 끝난 행동인가요?",
            "question": "'X시간 전'에 그런 일이 일어났나요?",
            "action": "만약 YES ➔ IL YA (+ Passé Composé)"
          },
          {
            "step": "4단계: 폐쇄적이고 측정된 기간인가요?",
            "question": "시작과 끝이 포함된 완전한 시간 블록을 설명합니까?",
            "action": "그렇다면 ➔ 펜던트"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "역사적 배경과 액션 공식",
            "meaning": "역사 서술은 Imparfait로 무대를 마련하고 Passé Composé로 연대기를 발전시킵니다.",
            "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey afonté Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "역사적 날짜 전치사 공식",
            "meaning": "역사적 시간 측정을 위한 전치사",
            "example": "1642년 · Au XVIIe siècle · Le 17 mai 1642"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "특정 연도 트리거 ➔ 재단 이벤트를 위한 Passé Composé"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "과거 배경 트리거 ➔ Imparfait"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "칼리에르가 서명한 1701년 주요 평화 조약"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "'siècle'에 로마 숫자 사용: au XXIe siècle (21세기)"
          },
          {
            "pattern": "Historical Present",
            "note": "역사는 생생한 스토리텔링을 위해 현재 시제를 사용하는 경우가 많습니다(En 1642, il fonde...)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 그 시대의 생활 상황을 묘사하는가?",
            "question": "생활 조건, 풍경, 전통?",
            "action": "IMPARFAIT 사용(Ils chassaient, vivaient)"
          },
          {
            "step": "2단계: 구체적인 전환점인가, 전투인가, 아니면 조약인가?",
            "question": "시작과 끝이 정해진 정해진 날짜에 일어났나요?",
            "action": "PASSÉ COMPOSÉ(Il afonté, ils ont signé)를 사용하세요."
          },
          {
            "step": "3단계: 날짜 형식 확인",
            "question": "단지 1년, 100년, 아니면 하루인가요?",
            "action": "En [년], au [세기], le [일월년]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "영화 카메라와 플래시 스냅샷 공식",
            "meaning": "Imparfait는 무대(날씨, 감정, '하고 있던 일')를 설정합니다. Passé Composé는 중단 또는 이정표를 유발합니다.",
            "example": "Il pleuvait(Imparfait: 장면) quand soudain la foudre a frappé(Passé Composé: 스냅샷)"
          },
          {
            "name": "중단된 행동 공식",
            "meaning": "진행 중이던 연속 작업이 시간을 엄수한 이벤트로 인해 중단됩니다.",
            "example": "Je dormais (자고 있었음) quand le réveil A SONNÉ (울림)"
          },
          {
            "name": "카멜레온 동사 공식",
            "meaning": "특정 동사는 마음 상태와 갑작스러운 깨달음 사이에서 의미를 바꿉니다.",
            "example": "Je savais nager(능력) vs J'ai su la nouvelle(이벤트)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "Always Imparfait: 작업이 진행 중인 동안"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "Always Passé Composé: 갑자기 사건이 발생했습니다."
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "Always Imparfait: 반복되는 습관적인 루틴"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "Passé Composé: 고립된 완성 행사"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "하고 있었다 = Imparfait · 했다 = Passé Composé"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "J'avais peur, il faisait froid, elle était triste ➔ Always Imparfait"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "Je me suis levé, j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: '어떤 장면이었나요?'라고 질문하세요.",
            "question": "배경 날씨, 분위기, 감정 또는 지속적인 습관을 설명합니까?",
            "action": "YES ➔ IMPARFAIT(비디오 카메라 롤링)"
          },
          {
            "step": "2단계: '다음에는 무슨 일이 일어났나요?'라고 물어보세요.",
            "question": "이야기를 앞으로 나아가게 하는 구체적이고 완성된 행동인가?",
            "action": "그렇다면 ➔ PASSÉ COMPOSÉ (사진 스냅샷 BAM!)"
          },
          {
            "step": "3단계: 중단 여부 확인",
            "question": "한 작업이 진행 중인 다른 작업을 방해했습니까?",
            "action": "배경 = Imparfait · 중단 = Passé Composé"
          },
          {
            "step": "4단계: 유발 단어 확인",
            "question": "'pendant que'(Imparfait) 또는 'soudain'(Passé Composé)을 찾으세요.",
            "action": "긴장된 선택을 잠그세요"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE 여성 접미사 공식",
            "meaning": "-eux로 끝나는 거의 모든 문자 형용사는 여성형에서 -euse로 변경됩니다.",
            "example": "généreux ➔ généreuse · 용기 ➔ 용기 사용 · paresseux ➔ paresseuse"
          },
          {
            "name": "-IF ➔ -IVE 여성 접미사 수식",
            "meaning": "무성 /f/에서 유성 /v/로의 유성 전환",
            "example": "creatif ➔ 창의적 · actif ➔ 적극적 · 주의 ➔ 세심한"
          },
          {
            "name": "-EL / -ON 이중 자음 공식",
            "meaning": "-e를 추가하기 전에 마지막 자음을 두 배로 늘립니다.",
            "example": "네이처 ➔ 네이처레 · 봉 ➔ 본느 · 미미 ➔ 미뇽느"
          },
          {
            "name": "불변 형용사 접미사 -E",
            "meaning": "남성형이 이미 악센트 없는 -e로 끝나는 경우 변경이 필요하지 않습니다.",
            "example": "차분함(M) ➔ 차분함(F) · 티마이드(M) ➔ 티마이드(F) · 사교적(M) ➔ 사교적(F)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "따뜻하고 환영하는 성격(퀘벡에서 매우 흔함)"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "관대한 특성"
          },
          {
            "word": "Franc / Franche",
            "rule": "직접적, 직설적(불규칙한 여성형 -che)"
          },
          {
            "word": "Doux / Douce",
            "rule": "온화한, 달콤한 (불규칙한 여성형 -ce)"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "bavard (/bavaʁ/) ➔ bavarde (/bavaʁd/): 'd'가 들리게 됩니다!"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "유혹자 ➔ 유혹자, 창조자 ➔ 창조자"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "충성스러운 ➔ 충성스러운 (fem), loyaux (masc 복수형)"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 남성 결말을 확인하세요",
            "question": "기본 형용사는 -e로 끝나나요?",
            "action": "YES ➔ 변함 없음 (침착함, 소심함, 동정심)"
          },
          {
            "step": "2단계: -eux로 끝나나요?",
            "question": "남성 접미사는 -eux인가요?",
            "action": "-euse로 변환(généreuse, sérieuse)"
          },
          {
            "step": "3단계: -if로 끝나나요?",
            "question": "남성 접미사 -if인가요?",
            "action": "-ive로 전환(창의적, 세심함)"
          },
          {
            "step": "4단계: 정규 자음 어미",
            "question": "-t, -d 또는 -s로 끝나나요?",
            "action": "-e를 추가하고 마지막 자음을 각성합니다(gentil ➔ gentille, Intelligent ➔ Intelligente)"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "문법 유지 방정식",
            "meaning": "프랑스어 문법 가이드 디자인을 뒷받침하는 교육학적 기둥",
            "example": "공식(논리적 명확성) + 인식 배지(패턴 인식) + SVG 다이어그램(멘탈 모델)"
          },
          {
            "name": "지속적인 학습주기",
            "meaning": "초급 A1에서 중급 B1까지 자율적인 진행 파이프라인 퀘벡 유창함",
            "example": "간격을 두는 반복 간격으로 만기 항목을 1일, 3일, 7일로 예약합니다."
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "모든 단일 주제에 대한 수학적 스타일의 문법 공식"
          },
          {
            "word": "Pattern Recognition",
            "rule": "규칙을 즉시 감지하는 단어 트리거 및 종료 패턴"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "문법 결론에 도달하는 방법을 설명하는 단계별 논리 경로"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "모든 주제 카드에 포함된 시각적 일러스트레이션"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "깊은 초점에 맞춰진 적응형 촉각 시각적 디자인"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "PWA Service Worker는 지하철 연구를 위해 30개 모듈을 모두 캐시합니다."
          },
          {
            "pattern": "Multi-language translations",
            "note": "7개 모국어에 대한 포괄적인 지원"
          }
        ],
        "decisionSteps": [
          {
            "step": "1단계: 문법 주제 선택",
            "question": "커리큘럼의 30개 섹션 중 하나를 선택하세요.",
            "action": "핵심 수식 및 인식 트리거 검토"
          },
          {
            "step": "2단계: 시각적 다이어그램 검사",
            "question": "문맥에서 문법 결론까지 결정이 어떻게 분기되는지 추적",
            "action": "SVG 흐름 노드를 따르세요."
          },
          {
            "step": "3단계: 대화형 블록 연습",
            "question": "위젯과 활용표로 지식 테스트",
            "action": "즉각적인 청각 및 시각적 피드백"
          },
          {
            "step": "4단계: SRS로 보관",
            "question": "간격 반복 대기열의 항목 검토",
            "action": "기억을 장기 회상으로 굳히다"
          }
        ]
      }
    }
  },
  "zh": {
    "ui": {
      "hub_title": "语法公式、单词触发器与可视化逻辑",
      "hub_subtitle": "一览无余掌握结构规律 • 追踪语法结论的推导判定路径",
      "hub_sec_formulas": "语法逻辑公式",
      "hub_sec_triggers": "如何通过单词与形态特征快速识别",
      "hub_sec_signals": "标志词与触发词",
      "hub_sec_patterns": "词尾与形态规律",
      "hub_sec_path": "诊断决策推导路径 —— 如何一步步得出正确语法结论",
      "hub_sec_diagram": "可视化逻辑示意图"
    },
    "topics": {
      "articles": {
        "title": "Articles: Definite, Indefinite & Partitive",
        "formulas": [
          {
            "name": "定冠词公式",
            "meaning": "特定的已知实体或普遍概念（英语：THE）",
            "example": "J’aime le Cafe（概念） · Regarde le train（具体）"
          },
          {
            "name": "不定冠词公式",
            "meaning": "可数的、非特定的个体单位（英语：A / AN / SOME）",
            "example": "J’achète un roman · Elle mange une pomme"
          },
          {
            "name": "部分冠词公式",
            "meaning": "不可数质量，物质的一部分（英语：SOME / ANY）",
            "example": "我的咖啡厅 · Nous voulons de la moutarde"
          },
          {
            "name": "普遍否定法",
            "meaning": "否定将所有数量冠词折叠为 DE / D’（除了 être）",
            "example": "J’ai un chien ➔ Je n’ai PAS DE chien (从不 pas un chien)"
          }
        ],
        "triggers": [
          {
            "word": "Aimer / Préférer / Adorer / Détester",
            "rule": "总是触发明确的文章（le、la、les）——表达总体喜欢/不喜欢"
          },
          {
            "word": "Manger / Boire / Acheter / Vouloir",
            "rule": "获取未计数数量时触发部分冠词（du、de la、des）"
          },
          {
            "word": "Ne ... pas / Ne ... plus / Ne ... jamais",
            "rule": "零数量触发：将物品转化为DE/D’"
          },
          {
            "word": "Beaucoup / Trop / Un peu / Assez",
            "rule": "数量副词总是带 DE / D’，不带冠词 (beaucoup de Cafe)"
          }
        ],
        "patterns": [
          {
            "pattern": "Endings: -eau, -isme, -ment, -age, -phone",
            "note": "90%+ 男性 ➜ 使用 le / un / du"
          },
          {
            "pattern": "Endings: -tion, -sion, -ée, -ure, -ence, -té",
            "note": "90%+ 女性化 ➜ 使用 la / une / de la"
          },
          {
            "pattern": "Vowel clash: Noun starts with vowel or silent h-",
            "note": "契约：le/la ➔ l’ · du/de la ➔ de l’"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查上下文",
            "question": "这是一般偏好还是特定的已知对象？",
            "action": "如果是 ➔ 确定 (le / la / l’ / les)"
          },
          {
            "step": "第 2 步：检查可数性",
            "question": "您能数出单个整体单位（1、2、3 项）吗？",
            "action": "如果是 ➔ 不定 (un / une / des)"
          },
          {
            "step": "步骤 3：检查质量物质",
            "question": "它是不可计数的液体、物质还是食物？",
            "action": "如果是 ➔ 部分 (du / de la / de l’)"
          },
          {
            "step": "第四步：否定过滤器",
            "question": "主要动词是否被否定 (ne... pas) 而不是动词 être ？",
            "action": "如果是 ➔ 立即将文章减少为 DE / D’"
          }
        ]
      },
      "nouns": {
        "title": "Nouns & Gender Recognition Rules",
        "formulas": [
          {
            "name": "名词复数公式",
            "meaning": "标准复数规则（法语中结尾 -s 不发音）",
            "example": "le livre ➔ les livres · la table ➔ les 表格"
          },
          {
            "name": "不规则复数公式",
            "meaning": "删除 -al 并附加 -aux（发音为 /o/）",
            "example": "联合国杂志 ➔ des journaux · 联合国动物 ➔ des animaux"
          },
          {
            "name": "不变复数公式",
            "meaning": "已经以咝音结尾的名词复数不变",
            "example": "un pays ➔ des pays · une voix ➔ des voix · un nez ➔ des nez"
          }
        ],
        "triggers": [
          {
            "word": "Suffix -eau / -al",
            "rule": "用 -x 代替 -s 进行复数化（des gâteaux、des cadeaux、des journaux）"
          },
          {
            "word": "Days, months, languages, seasons",
            "rule": "始终男性化（le lundi、le français、l’été、le printemps）"
          },
          {
            "word": "Academic subjects, sciences (-ie, -ique)",
            "rule": "永远女性化（la chimie、la structique、la politique）"
          },
          {
            "word": "Metric units, compass directions",
            "rule": "始终阳刚（le kilomètre、le Nord、l’ouest）"
          }
        ],
        "patterns": [
          {
            "pattern": "Predictable Masculine Suffixes",
            "note": "-ment (le gouvernement), -isme (le Capitalisme), -age (le voyage), -oir (le miroir), -teur (le directeur)"
          },
          {
            "pattern": "Predictable Feminine Suffixes",
            "note": "-tion / -sion (la nation), -té (la liberté), -ure (la voiture), -ence / -ance (la science), -ette (la bikette)"
          },
          {
            "pattern": "Key Exceptions to Memorize",
            "note": "la plage、la cage、la page（-年龄但女性化！）·le沉默、le squelette（-ce/-te但男性化！）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查词尾",
            "question": "该词是否以 -ment、-age、-isme 或 -oir 结尾？",
            "action": "如果是 ➔ 分配男性（90%+ 概率）"
          },
          {
            "step": "第 2 步：检查摘要/状态后缀",
            "question": "该单词是否以 -tion、-sion、-té、-ence 或 -ure 结尾？",
            "action": "如果是 ➔ 指定女性（95%+ 概率）"
          },
          {
            "step": "第 3 步：检查复数标记",
            "question": "单数是否以 -al、-eau 或 -eu 结尾？",
            "action": "如果是 ➔ 用 -aux 或 -x 构成复数"
          },
          {
            "step": "第四步：检查咝音结尾",
            "question": "它以 -s、-x 或 -z 结尾吗？",
            "action": "如果是 ➔ 保留相同的拼写，将文章更改为 les/des"
          }
        ]
      },
      "pronouns": {
        "title": "Subject Pronouns & Quebec 'On' Rule",
        "formulas": [
          {
            "name": "魁北克口语复数代词规则",
            "meaning": "在自然的魁北克法语中，“on”完全取代了言语中的“nous”",
            "example": "Nous mangeons ➔ On mange （更容易接合！）"
          },
          {
            "name": "魁北克口语中的 Tu Elision",
            "meaning": "魁北克口语语域中的会话收缩",
            "example": "你还好吗？ ➔ 这是什么？ · 屠如法姆？ ➔ 相信吗？"
          },
          {
            "name": "第三人称复数性别规则",
            "meaning": "任何包含至少一名男性的群体在语法上默认为 ils",
            "example": "马克和苏菲 ➔ ils · 苏菲、玛丽和克莱尔 ➔ elles"
          }
        ],
        "triggers": [
          {
            "word": "On",
            "rule": "语法上为单数（采用 il/elle 动词形式），但指“我们”/“每个人”"
          },
          {
            "word": "Vous",
            "rule": "双重功能：复数“you all”或单数正式/礼貌“You”"
          },
          {
            "word": "Il vs Ce",
            "rule": "将 'il' 与形容词一起使用 (Il est tard)；将 'c'est' 与修饰名词一起使用 (C'est un ami)"
          },
          {
            "word": "Je ➜ J’",
            "rule": "总是在元音/不发音的 h 之前删除“e”（J’habite、J’aime、J’écoute）"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun before vowel (je, tu in speech)",
            "note": "j’ai, j’arrive, t’as, t’es（强制省略 je，口语为 tu）"
          },
          {
            "pattern": "Impersonal subjects (météo, time)",
            "note": "始终使用“il”作为虚拟主语：Il pleut、Il neige、Il est 3h"
          },
          {
            "pattern": "Indefinite 'someone / people in general'",
            "note": "使用“on”：En hiver, on porte un manteau"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：确定受众",
            "question": "您是在正式地与一个人还是一群人交谈？",
            "action": "使用 VOUS（正式或复数）"
          },
          {
            "step": "第 2 步：您是在谈论“我们”吗？",
            "question": "这是口语法语还是非正式法语？",
            "action": "使用 ON（+ 第三人称单数动词）"
          },
          {
            "step": "第 3 步：分析混合组",
            "question": "该群体是否至少包含 1 个男性实体？",
            "action": "使用 ILS（只有 100% 的全女性团体参加 ELLES）"
          },
          {
            "step": "第四步：检查元音边界",
            "question": "下一个动词是否以元音开头？",
            "action": "合同 Je ➔ J’"
          }
        ]
      },
      "verbs": {
        "title": "Present Tense Conjugation & Stem Formulas",
        "formulas": [
          {
            "name": "-ER 动词正则公式",
            "meaning": "90% 的法语动词都遵循这个精确的终止顺序",
            "example": "parler ➔ je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent"
          },
          {
            "name": "-IR 动词常规 (Finir) 公式",
            "meaning": "第 2 组规则动词在复数人称中插入 -iss- 中缀",
            "example": "finir ➔ je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent"
          },
          {
            "name": "无声“引导”结局规则",
            "meaning": "只有 nous (-ons) 和 vous (-ez) 在词干上添加浊音节！",
            "example": "parle、parles、parlent 的发音都相同：/paʁl/"
          }
        ],
        "triggers": [
          {
            "word": "Maintenant / En ce moment",
            "rule": "现在时标记（当前正在发生的动作）"
          },
          {
            "word": "Tous les jours / Chaque semaine",
            "rule": "现在时习惯标记（常规）"
          },
          {
            "word": "-ons ending",
            "rule": "浊音 /ɔ̃/ 鼻音 — 通用第一人称复数标记"
          },
          {
            "word": "-ez ending",
            "rule": "浊音 /e/ 元音 — 通用第二人称复数标记"
          }
        ],
        "patterns": [
          {
            "pattern": "-ent on verbs is 100% SILENT",
            "note": "切勿将 -ent 发音为鼻音！ ils parlent = /paʁl/, ils mangent = /mɑ̃ʒ/"
          },
          {
            "pattern": "Boot Verb Vowel Alternation",
            "note": "je/tu/il/ils 中的词干变化（靴子内），nous/vous 中恢复正常：acheter ➔ j'achète, nous achetons"
          },
          {
            "pattern": "G-softening in Nous: -geons",
            "note": "Manger ➔ nous mangeons（保留“e”以保持柔和的“j”音）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：识别动词组",
            "question": "不定式以 -er、-ir 或 -re 结尾吗？",
            "action": "剥去末端以提取基茎"
          },
          {
            "step": "第二步：匹配主题",
            "question": "谁在执行该操作（je、tu、il、nous、vous、ils）？",
            "action": "选择对应的结尾后缀"
          },
          {
            "step": "第三步：发音过滤器",
            "question": "主题是否在“boot”内（je/tu/il/ils）？",
            "action": "保持完全沉默的结局！只听到茎"
          },
          {
            "step": "第四步：复数检查",
            "question": "是nous还是vous？",
            "action": "发音结尾：-ons (/ɔ̃/) 或 -ez (/e/)"
          }
        ]
      },
      "sentences": {
        "title": "Sentence Structure, Negation Sandwich & Questions",
        "formulas": [
          {
            "name": "标准句子顺序公式",
            "meaning": "陈述性法语遵循英语基本肯定句的顺序",
            "example": "Alex (S) mange (V) une pomme (O)"
          },
          {
            "name": "否定三明治公式",
            "meaning": "否定像两片面包一样包裹着共轭动词",
            "example": "Je NE parle PAS · Elle N’aime PAS le bruit"
          },
          {
            "name": "问题形成 3 层",
            "meaning": "根据寄存器询问任何是/否问题的三种方法",
            "example": "你维恩斯？ （休闲）·Est-ce que tu viens ？ （标准） · Viens-tu ？ （正式）"
          }
        ],
        "triggers": [
          {
            "word": "Ne ... pas",
            "rule": "标准否定（not）"
          },
          {
            "word": "Ne ... jamais",
            "rule": "消极习惯（从不）——取代“pas”"
          },
          {
            "word": "Ne ... plus",
            "rule": "负延续（不再/不再）——取代“pas”"
          },
          {
            "word": "Est-ce que",
            "rule": "通用问题开头：保留标准 SVO 词序"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'ne pas' together around conjugated verbs",
            "note": "❌ Je ne pas sais ➔ ✓ Je ne sais pas（夹在动词中间）"
          },
          {
            "pattern": "Spoken Quebec / Casual French drops 'ne'",
            "note": "J'sais pas · Y vient pas（在法语口语中极为常见）"
          },
          {
            "pattern": "Vowel clash with ne: n’",
            "note": "n'ai、n'aime、n'écoute、n'habite"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：识别动词变位",
            "question": "主要共轭动词是什么？",
            "action": "将主题直接放在其前面"
          },
          {
            "step": "第二步：你是否定的？",
            "question": "你想说不/从不/不再吗？",
            "action": "夹住动词：NE + 动词 + PAS / JAMAIS / PLUS"
          },
          {
            "step": "第三步：你在问问题吗？",
            "question": "你用什么寄存器？",
            "action": "非正式：语调 (?) · 标准：Est-ce que... · 正式：倒装动词主语"
          }
        ]
      },
      "adjectives": {
        "title": "Adjective Agreement Matrix & BAGS Placement",
        "formulas": [
          {
            "name": "形容词一致性矩阵公式",
            "meaning": "形容词的性别和数量必须与其名词相匹配",
            "example": "格兰德 (M) · 格兰德 (F) · 格兰德 (M.Pl) · 格兰德 (F.Pl)"
          },
          {
            "name": "袋子放置法",
            "meaning": "大多数形容词都在名词后面，除了 BAGS 在前面",
            "example": "un GRAND livre（包袋：尺寸）与 un livre ROUGE（颜色：名词后）"
          },
          {
            "name": "Beau、Nouveau、Vieux 的元音转换",
            "meaning": "以元音/h 开头的阳性名词前的特殊阳性形式",
            "example": "美女 ➔ 贝尔 · 新风格 ➔ 新风格 · 旧风格 ➔ 旧风格"
          }
        ],
        "triggers": [
          {
            "word": "B.A.G.S. adjectives",
            "rule": "beau, joli, jeune, vieux, bon, mauvais, grand, petit ➔ 放在名词之前"
          },
          {
            "word": "Colors & Shapes",
            "rule": "bleu, rouge, rond, carré ➔ 放在名词之后 (une voiture rouge)"
          },
          {
            "word": "Nationalities",
            "rule": "canadien, français, américain ➔ 放置在名词之后 (un Cafe québécois)"
          },
          {
            "word": "Invariable colors (marron, orange)",
            "rule": "切勿添加 -s 或 -e！ （德·乔苏斯·马龙）"
          }
        ],
        "patterns": [
          {
            "pattern": "-eux ➜ -euse",
            "note": "heureux ➔ heureuse, curieux ➔ curieuse"
          },
          {
            "pattern": "-if ➜ -ive",
            "note": "actif ➔ 活跃、créatif ➔ 创造性、sportif ➔ 运动"
          },
          {
            "pattern": "-el / -en ➜ -elle / -enne",
            "note": "自然 ➔ 自然，加拿大 ➔ 加拿大"
          },
          {
            "pattern": "-er ➜ -ère",
            "note": "总理 ➔ 首演、谢尔 ➔ 谢尔"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查位置（行李）",
            "question": "是美丽、年龄、善良还是身材？",
            "action": "如果是 ➔ 放在名词之前。否则 ➔ 放在名词之后"
          },
          {
            "step": "第 2 步：检查名词的性别",
            "question": "名词是阴性吗？",
            "action": "添加 -e （或变换后缀：-eux ➔ -euse、-if ➔ -ive）"
          },
          {
            "step": "第三步：检查名词数量",
            "question": "名词是复数吗",
            "action": "添加 -s （如果是阴性复数则添加 -es）"
          },
          {
            "step": "第四步：检查元音冲突",
            "question": "阳性元音名词前是 beau/nouveau/vieux 吗？",
            "action": "使用bel、nouvel、vieil"
          }
        ]
      },
      "prepositions": {
        "title": "Preposition Contractions & Geographic Rules",
        "formulas": [
          {
            "name": "强制“à”收缩公式",
            "meaning": "介词“à”与阳性冠词和复数定冠词融合",
            "example": "我可以去健身房 (à+le) · Je parle aux étudiants (à+les)"
          },
          {
            "name": "强制“de”收缩公式",
            "meaning": "介词“de”与阳性冠词和复数定冠词融合",
            "example": "国王归来 (de+le) · 受邀者名单 (de+les)"
          },
          {
            "name": "地理介词公式",
            "meaning": "位置介词严格取决于目的地的语法性别",
            "example": "À 蒙特利尔、EN 法国、AU 加拿大、AUX États-Unis"
          }
        ],
        "triggers": [
          {
            "word": "À + city",
            "rule": "总是 à： 蒙特利尔、魁北克、巴黎、多伦多（无冠词！）"
          },
          {
            "word": "EN + feminine country/province",
            "rule": "以 -e 结尾 ➜ 阴性：en France、en Colombie、en Ontario（以元音开头）"
          },
          {
            "word": "AU + masculine country",
            "rule": "不以 -e 结尾：au Canada、au Mexique、au Japon"
          },
          {
            "word": "Chez + person / professional",
            "rule": "意思是“在……的房子/办公室”：chez moi、chez le médecin、chez Jean"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'à le' or 'de le'",
            "note": "❌ à le 餐厅 ➔ ✓ au 餐厅 · ❌ de le parc ➔ ✓ du parc"
          },
          {
            "pattern": "Countries ending in -e are feminine",
            "note": "La France ➔ en France、la Suisse ➔ en Suisse（例外：le Mexique ➔ au Mexique）"
          },
          {
            "pattern": "Islands often take 'à'",
            "note": "À 古巴、马达加斯加、海地"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查目的地类型",
            "question": "是一个城市、一个国家、还是一个人？",
            "action": "城市 ➔ À · 人 ➔ 地点 · 国家 ➔ 参见步骤 2"
          },
          {
            "step": "第 2 步：检查国家/地区性别",
            "question": "国家是以 -e 结尾还是以元音开头？",
            "action": "如果是 ➔ EN（意大利、法国） · 如果否 ➔ AU（加拿大）"
          },
          {
            "step": "第 3 步：检查多个国家/地区",
            "question": "国家是复数吗（États-Unis、Pays-Bas）？",
            "action": "使用 AUX (aux États-Unis)"
          },
          {
            "step": "步骤 4：检查定冠词融合",
            "question": "您是否将 à/de 与 le 或 les 组合在一起？",
            "action": "合约：à+le ➜ au、à+les ➜ aux、de+le ➜ du、de+les ➜ des"
          }
        ]
      },
      "possessives": {
        "title": "Possessives & Demonstratives System",
        "formulas": [
          {
            "name": "占有协议公式",
            "meaning": "所有格形容词与所拥有的对象一致，而不是与所有者一致！",
            "example": "他的车 = sa voiture （voiture 是 fem） · 她的书 = son livre （livre 是 masc）"
          },
          {
            "name": "元音冲突救星规则",
            "meaning": "以元音开头的阴性名词切换为阳性形式以实现语音流动",
            "example": "❌ma amie ➔ ✓ mon amie · ❌ sa école ➔ ✓ son école"
          },
          {
            "name": "指示形容词公式",
            "meaning": "意味着这个或那个； cet 避免尴尬的元音停音",
            "example": "ce livre · cet 酒店 · cette 表 · ces clés"
          }
        ],
        "triggers": [
          {
            "word": "Mon / Ton / Son",
            "rule": "用于男性名词或以元音开头的女性名词"
          },
          {
            "word": "Ma / Ta / Sa",
            "rule": "严格用于以辅音开头的阴性名词"
          },
          {
            "word": "Mes / Tes / Ses",
            "rule": "1 位所有者的通用复数所有格（无论性别）"
          },
          {
            "word": "Notre / Votre / Leur",
            "rule": "多个所有者（我们的/您的/他们的）的单一占有"
          }
        ],
        "patterns": [
          {
            "pattern": "Feminine vowel clash",
            "note": "Mon amie, son idée, ton histoire（听起来流畅，避免/a-a/冲突）"
          },
          {
            "pattern": "Demonstrative before vowel: cet",
            "note": "Cet homme、Cet 公寓、Cet été"
          },
          {
            "pattern": "Distinction: son vs leur",
            "note": "儿子 livre = 他/她的书（1 位拥有者）； leur livre = 他们的书（多所有者）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：识别所拥有的物品",
            "question": "它的性别和号码是什么？",
            "action": "复数 ➔ mes/tes/ses/nos/vos/leurs。单数 ➔ 参见步骤 2"
          },
          {
            "step": "第 2 步：检查元音开头",
            "question": "单数名词是以元音开头还是以不发音的 h 开头？",
            "action": "如果是 ➔ 必须使用 mon / ton / son / cet （即使是女性！）"
          },
          {
            "step": "第 3 步：匹配所有者",
            "question": "谁拥有它（je、tu、il/elle、nous、vous、ils）？",
            "action": "选择正确的人的所有格行"
          },
          {
            "step": "第 4 步：示范过滤器",
            "question": "你指的是“这个/那个”吗？",
            "action": "ce (M) / cet (M+元音) / cette (F) / ces (复数)"
          }
        ]
      },
      "numbers": {
        "title": "Number Arithmetic (70–99) & Time Formulas",
        "formulas": [
          {
            "name": "法国 70 年代 Base-60 数学公式",
            "meaning": "法国数字 70-79 在 60 的基础上数 10 到 19",
            "example": "71 = soixante-et-onze · 77 = soixante-dix-sept"
          },
          {
            "name": "法国 80 年代 20 进制数学公式",
            "meaning": "从凯尔特法语继承的以 20 为底的十进制计算",
            "example": "80 有一个 -s (quatre-vingts)，当后面跟着数字时会删除 -s (quatre-vingt-un)"
          },
          {
            "name": "法国90年代数学公式",
            "meaning": "4 乘以 20 加上青少年（10 至 19）",
            "example": "95 = quatre-vingt-quinze (4 × 20 + 15)"
          },
          {
            "name": "时钟报时公式",
            "meaning": "标准法国时钟公式明确使用“heures”",
            "example": "Il est trois heures et quart (3:15) · Il est midi et demi (12:30)"
          }
        ],
        "triggers": [
          {
            "word": "Soixante-dix",
            "rule": "法国和魁北克 70 (60 + 10)"
          },
          {
            "word": "Quatre-vingts",
            "rule": "法国和魁北克 80 个 (4 x 20)"
          },
          {
            "word": "Quatre-vingt-dix",
            "rule": "法国和魁北克 90 (4 x 20 + 10)"
          },
          {
            "word": "Et un / et demie",
            "rule": "21、31、41、51、61、71（et-un）和半点（et demie）的连接器"
          }
        ],
        "patterns": [
          {
            "pattern": "Et-un only applies to 21, 31, 41, 51, 61, 71",
            "note": "81 = quatre-vingt-un（没有“et”！），91 = quatre-vingt-onze（没有“et”！）"
          },
          {
            "pattern": "Hyphen rule (1990 spelling reform)",
            "note": "所有复合数字部分现在都可以连字符： deux-cent-cinquante"
          },
          {
            "pattern": "Half past agreement",
            "note": "une heure et demie (fem 与 heure 协议) vs midi et demi (masc)"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查十分位数（70 秒、80 秒、90 秒）",
            "question": "这个数字是70后、80后还是90后？",
            "action": "70 年代 ➔ 60 + 青少年 · 80 年代 ➔ 4x20 + 数字 · 90 年代 ➔ 4x20 + 青少年"
          },
          {
            "step": "步骤 2：检查 1s 连接器",
            "question": "是21、31、41、51、61、71吗？",
            "action": "添加“et”：soixante-et-un。 （81 和 91 不带“et”）"
          },
          {
            "step": "第三步：报时",
            "question": "已经过了半个小时了吗？",
            "action": "使用“moins”：4:50 = 5h moins dix"
          }
        ]
      },
      "passe_compose": {
        "title": "Passé Composé: Auxiliary Choice & Participle Agreement",
        "formulas": [
          {
            "name": "Passé Composé 大师公式",
            "meaning": "用于完成的、一次性事件的复合过去时",
            "example": "J’ai mangé (avoir) · Je suis party (être)"
          },
          {
            "name": "ÊTRE 辅助选择公式",
            "meaning": "只有特定的运动/状态变化动词和反身动词才使用 être",
            "example": "Elle est allée · Ils se sont levés"
          },
          {
            "name": "分词形成公式",
            "meaning": "标准规则分词词尾",
            "example": "parler ➜ parlé · finir ➜ fini · attendre ➜ attendu"
          },
          {
            "name": "埃特尔协议法",
            "meaning": "添加 -e 代表阴性，-s 代表带有 être 的复数",
            "example": "Elle est alléE · Elles sont alléES · Ils sont alléS"
          }
        ],
        "triggers": [
          {
            "word": "Hier / Hier soir",
            "rule": "过去时间触发：昨天/昨晚"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "突然中断触发：始终为 Passé Composé"
          },
          {
            "word": "Une fois / Lundi dernier",
            "rule": "特定的隔离事件触发"
          },
          {
            "word": "DR MRS VANDERTRAMP",
            "rule": "德文尼尔、雷文尼尔、蒙特、雷斯特、索提尔、维尼尔、阿勒、奈特、下降、进入者、承租者、坟墓、返回者、到达者、穆里尔、帕特尔、传球者"
          }
        ],
        "patterns": [
          {
            "pattern": "Avoir has NO agreement with Subject",
            "note": "Elle a mangé (NO -e!), Elles ontregardé (NO -es!)"
          },
          {
            "pattern": "Irregular participles to memorize",
            "note": "fait (faire)、pris (prendre)、vu (voir)、eu (avoir)、été (être)、mis (mettre)"
          },
          {
            "pattern": "Reflexive agreement exception",
            "note": "Elle s'est lavé les mains（没有一致意见，因为 COD 'les mains' 位于动词之后）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：动词是否反身 (se...)？",
            "question": "动词有se / s’吗？",
            "action": "如果 YES ➔ Aux 是 ÊTRE（分词与主语一致，除非后面有直接宾语）"
          },
          {
            "step": "第 2 步：是在 DR MRS VANDERTRAMP 吗？",
            "question": "它是 17 个运动/状态变化动词之一吗？",
            "action": "如果 YES ➔ Aux 是 ÊTRE（分词与主语一致）"
          },
          {
            "step": "第三步：默认辅助",
            "question": "所有其他动词",
            "action": "使用 AVOIR（无附带协议）"
          },
          {
            "step": "第四步：形成分词",
            "question": "应用规则茎或不规则形状",
            "action": "-er ➔ -é、-ir ➔ -i、-re ➔ -u"
          }
        ]
      },
      "object_pronouns": {
        "title": "Object Pronouns & Placement Formulas",
        "formulas": [
          {
            "name": "直接宾语代词 (COD) 公式",
            "meaning": "替换不带任何介词的直接宾语",
            "example": "Je vois Marc ➔ Je LE vois · Elle mange la pomme ➔ Elle LA mange"
          },
          {
            "name": "间接宾语代词 (COI) 公式",
            "meaning": "替换“à + person”（对他/对她/对他们）",
            "example": "与玛丽交谈 ➔ 与 LUI 交谈 · 与父母联系电话 ➔ 与 LEUR 电话联系"
          },
          {
            "name": "宾语代词放置公式",
            "meaning": "法语将宾语代词放在动词之前（与英语相反）",
            "example": "我爱你 ➔ Je T'aime（不是 Je aime toi）"
          },
          {
            "name": "近期代词的位置",
            "meaning": "代词拥抱它逻辑上所属的不定式动词",
            "example": "Je vais le voir（不是 Je le vais voir）"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "间接代词，意思是“对他”或“对她”（不分性别！）"
          },
          {
            "word": "Leur",
            "rule": "间接代词，意思是“对他们来说”（永远不要使用 -s 作为代词！）"
          },
          {
            "word": "Parler à, téléphoner à, donner à",
            "rule": "需要 lui/leur 的经典 COI 触发动词"
          },
          {
            "word": "Moi / Toi",
            "rule": "介词后或肯定祈使句中使用的重音代词 (Regarde-moi !)"
          }
        ],
        "patterns": [
          {
            "pattern": "COD vs COI diagnostic test",
            "note": "问：有介词“à”吗？如果是 ➔ COI (lui/leur);如果没有 ➔ COD (le/la/les)"
          },
          {
            "pattern": "Negative sentence pronoun placement",
            "note": "Je ne le vois pas（代词留在否定三明治中！）"
          },
          {
            "pattern": "Elision with vowels",
            "note": "Je l'adore，il m'attend，on t'écoute"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：识别动词的宾语",
            "question": "什么或谁正在接收该操作？",
            "action": "突出显示宾语短语"
          },
          {
            "step": "步骤2：人称前面有介词“à”吗？",
            "question": "动词是否带“à quelqu'un”？",
            "action": "如果是 ➔ COI：LUI（单数）/LEUR（复数）"
          },
          {
            "step": "第三步：直接宾语（无介词）？",
            "question": "它直接回答“什么”或“谁”吗？",
            "action": "如果是 ➔ COD：LE / LA / L' / LES"
          },
          {
            "step": "第四步：放在动词前面",
            "question": "它去哪里？",
            "action": "就在共轭动词之前（或在不定式之前，如果有的话）"
          }
        ]
      },
      "imperatives": {
        "title": "Imperative Commands & Modal Verbs",
        "formulas": [
          {
            "name": "命令式构成公式",
            "meaning": "去掉主语代词；命令仅存在 3 个动词人称",
            "example": "你维恩斯➔维恩斯！ · 诺斯阿隆 ➔ 阿隆！ · 你的曼格斯 ➔ 曼格斯！"
          },
          {
            "name": "-ER 动词 'Tu' -S 删除法则",
            "meaning": "您问候➔问候！ · 你瓦斯➔瓦！",
            "example": "帕尔！ （不是 Parles！）·Écoute！ （不是埃库特！）"
          },
          {
            "name": "情态动词公式",
            "meaning": "情态动词是共轭的，次要动作保留在不定式中",
            "example": "Je peux venir · Il doit partir · Nous voulons manger"
          }
        ],
        "triggers": [
          {
            "word": "Pouvoir (peux, peut, pouvons...)",
            "rule": "表达能力或礼貌的许可（“可以/可以”）"
          },
          {
            "word": "Devoir (dois, doit, devons...)",
            "rule": "表达职责、义务或可能性（“必须/必须”）"
          },
          {
            "word": "Vouloir (veux, veut, voulons...)",
            "rule": "表达愿望/意愿（“想要”）➔ 使用“voudrais”以表示礼貌"
          },
          {
            "word": "Falloir (Il faut...)",
            "rule": "非个人义务（“必须/有必要”）"
          }
        ],
        "patterns": [
          {
            "pattern": "Pronoun placement in affirmative commands",
            "note": "动词后用连字符：Mangle-le！唐尼兹我！"
          },
          {
            "pattern": "Negative imperative pronoun placement",
            "note": "通常在动词前面：Ne le mange pas !我不知道！"
          },
          {
            "pattern": "Exception: restoration of -s before y/en",
            "note": "瓦斯！曼格斯！ （恢复 -s 只是为了防止元音冲突）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：选择收件人",
            "question": "您是在命令朋友 (tu)、团体/礼貌 (vous) 还是包括您自己 (nous)？",
            "action": "选择 tu、nous 或 vous"
          },
          {
            "step": "第二步：去掉主语代词",
            "question": "删除你/nous/vous",
            "action": "只保留动词词干"
          },
          {
            "step": "第 3 步：检查 -ER 'tu' 形式",
            "question": "它是“tu”形式的-ER动词吗？",
            "action": "去掉最后一个字母 ''（Parle！Regarde！）"
          },
          {
            "step": "第 4 步：检查肯定与否定",
            "question": "它是“执行”还是“不执行”命令？",
            "action": "肯定句：动词代词 (Aide-moi !) · 否定句：Ne 代词动词 pas (Ne m'aide pas !)"
          }
        ]
      },
      "useful_structures": {
        "title": "High-Frequency French Structures",
        "formulas": [
          {
            "name": "C'est 与 Il est 决策公式",
            "meaning": "将 c'est 与修饰名词一起使用； il est 直接与形容词一起使用",
            "example": "C'est un bon médecin（修饰名词）与 Il est smart（纯粹形容词）"
          },
          {
            "name": "Il y a 存在与过去的公式",
            "meaning": "双重含义：存在状态或过去的时间",
            "example": "Il y a deux stylos sur la table · Je suis arrivé il y a dix 分钟"
          },
          {
            "name": "Avoir Besion / Envie 配方",
            "meaning": "法语中的“需要/想要”表达了实际拥有的需要/欲望",
            "example": "J'ai besoin d'eau · J'ai 嫉妒 de voyager"
          }
        ],
        "triggers": [
          {
            "word": "C'est",
            "rule": "后接冠词 + 名词、名称或整个陈述 (C'est génial)"
          },
          {
            "word": "Il est / Elle est",
            "rule": "后面是没有冠词或空形容词的专业（Il est avocat、Elle est gentille）"
          },
          {
            "word": "Il y a",
            "rule": "不变：无论后面跟单数还是复数名词，都保持“il y a”"
          },
          {
            "word": "Avoir l'air",
            "rule": "意思是“看起来/似乎”，后接形容词：Tu as l'air fatigué"
          }
        ],
        "patterns": [
          {
            "pattern": "Never say 'Il est un médecin'",
            "note": "❌ Il est un médecin ➔ ✓ C'est un médecin 或 Il est médecin （裸职业）"
          },
          {
            "pattern": "Negation of il y a",
            "note": "Il n'y a pas DE + 名词（分词下降为 de：Il n'y a pas de problème）"
          },
          {
            "pattern": "De elision with avoir besoin/envie",
            "note": "我是银色的，我是羡慕的"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查动词后面的内容",
            "question": "是否有限定词/冠词（un、une、le、mon）？",
            "action": "如果是 ➔ 使用 C'EST (C'est un prof)"
          },
          {
            "step": "第二步：它是一个纯粹的形容词还是纯粹的职业？",
            "question": "这个词之前没有冠词吗？",
            "action": "如果是 ➔ 使用 IL EST / ELLE EST (Il est prof, Elle est calme)"
          },
          {
            "step": "第三步：表明存在？",
            "question": "你想说“有/有”吗？",
            "action": "使用 IL Y A（复数不变）"
          }
        ]
      },
      "quebec_vocab": {
        "title": "Quebec French Lexical Shifts & Affrication",
        "formulas": [
          {
            "name": "魁北克高频词汇公式",
            "meaning": "蒙特利尔和魁北克日常生活中听到的标准魁北克术语",
            "example": "小晚餐 ➜ 晚餐 · 晚餐 ➜ 晚餐 · 晚餐 ➜ 汤"
          },
          {
            "name": "魁北克摩擦法",
            "meaning": "在高前元音之前，/t/ 和 /d/ 自然会产生微妙的塞擦嘶嘶声",
            "example": "tu = /tsy/·parti = /paʁtsi/·dimanche = /dzimɑ̃ʃ/"
          },
          {
            "name": "魁北克疑问句 -tu 助词",
            "meaning": "魁北克法语口语会话问号",
            "example": "你维恩斯图？ （你来吗？） · C'est-tu bon ? （好不好？）"
          }
        ],
        "triggers": [
          {
            "word": "Magasiner",
            "rule": "魁北克省“faire du shopping”（去购物）"
          },
          {
            "word": "Fin de semaine",
            "rule": "魁北克的“周末”"
          },
          {
            "word": "Char",
            "rule": "魁北克非正式语“voiture”（汽车）"
          },
          {
            "word": "Chum / Blonde",
            "rule": "魁北克适合男朋友/女朋友"
          },
          {
            "word": "C'est tiguidou !",
            "rule": "魁北克习语的意思是“一切都很好/完美！”"
          }
        ],
        "patterns": [
          {
            "pattern": "Meals 1 step shift",
            "note": "上午：午餐，中午：晚餐，晚上：汤"
          },
          {
            "pattern": "Short vowels open up in closed syllables",
            "note": "fête 听起来更接近 /faɛ̯t/，père 更接近 /paɛ̯ʁ/"
          },
          {
            "pattern": "Anglicisms adapted into French verbs",
            "note": "取消者 (annuler)、检查者 (vérifier)、帕克 (garer)"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：确定魁北克的对话环境",
            "question": "您在与蒙特利尔/魁北克当地人聊天吗？",
            "action": "使用当地术语：fin de semaine、char、magasiner、souper"
          },
          {
            "step": "第二步：聆听是否有烦恼",
            "question": "这个词有ti、tu、di、du吗？",
            "action": "听到原生的“ts”和“dz”声音：/tsy/ 代表“tu”"
          },
          {
            "step": "第三步：疑问助词“-tu”",
            "question": "说话者是否在动词后添加了“-tu”？",
            "action": "将其识别为非正式问号：On y va-tu ?"
          }
        ]
      },
      "verb_endings": {
        "title": "Verb Endings: Phonetics vs Spelling Deduction",
        "formulas": [
          {
            "name": "听觉相似规则",
            "meaning": "所有三个结局听起来 100% 相同 (/e/)",
            "example": "parler、parlé、parlez 听起来都完全相同：/paʁle/"
          },
          {
            "name": "“Vendre”演绎测试",
            "meaning": "确定是写-er（不定式）还是-é（过去分词）",
            "example": "Je veux mang... ➔ Je veux VENDRE (Inf) ➔ Je veux MANGER"
          },
          {
            "name": "分词演绎测试",
            "meaning": "如果“vendu”有意义，请写-é",
            "example": "J'ai mang... ➔ J'ai VENDU ➔ J'ai MANGÉ"
          }
        ],
        "triggers": [
          {
            "word": "Vendre / Faire",
            "rule": "不定式替换测试词（听到不同的 /ʁ/ 声音）"
          },
          {
            "word": "Vendu / Fait",
            "rule": "过去分词替换测试词（听到不同的 /y/ 或 /t/ 声音）"
          },
          {
            "word": "-ons",
            "rule": "明确的书面和口语 /ɔ̃/ 结尾为 nous"
          },
          {
            "word": "-ent",
            "rule": "用于第三人称复数 ils/elles 的明确无声书面标记"
          }
        ],
        "patterns": [
          {
            "pattern": "Two verbs in a row ➜ Second is Infinitive",
            "note": "Je veuxpartir · Il aime voyager · On doit réviser"
          },
          {
            "pattern": "After preposition ➜ Always Infinitive",
            "note": "pour manger, sans parler, 前卫 departir, au lieu de dormir"
          },
          {
            "pattern": "After avoir / être ➜ Past Participle",
            "note": "我尊重你，我是派对"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：听到 /e/ 声音",
            "question": "这个词结尾听起来像/e/吗？",
            "action": "选项：-er (Inf)、-é (分词) 或 -ez (vous)"
          },
          {
            "step": "第 2 步：应用“Vendre”测试",
            "question": "你能将“VENDRE”这个词代入句子中吗？",
            "action": "如果是 ➔ 写 -ER（不定式：Je dois parler）"
          },
          {
            "step": "第 3 步：您可以替换“VENDU”吗？",
            "question": "“VENDU”自然适合放在 avoir/être 后面吗？",
            "action": "如果是 ➔ 写 -É （分词：J'ai parlé）"
          },
          {
            "step": "第四步：主语是“Vous”吗？",
            "question": "直接主语是你吗？",
            "action": "如果是 ➔ 写入 -EZ (vous parlez)"
          }
        ]
      },
      "pronominal": {
        "title": "Pronominal & Reflexive Verbs Master Rules",
        "formulas": [
          {
            "name": "反身现在共轭公式",
            "meaning": "反身代词匹配对自己做动作的主语",
            "example": "Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent"
          },
          {
            "name": "代词 Passé Composé 公式",
            "meaning": "100% 的代词动词在复合过去式中需要 ÊTRE",
            "example": "Elle s'est réveillée · Nous nous sommes couchés"
          },
          {
            "name": "反身协议法",
            "meaning": "当行动直接打击自己时表示同意；如果身体部位跟随则不达成协议",
            "example": "Elle s'est lavée（同意） vs Elle s'est lavé les mains（不同意：“les mains”是直接宾语！）"
          }
        ],
        "triggers": [
          {
            "word": "Se lever, se coucher, s'habiller",
            "rule": "日常代词动词"
          },
          {
            "word": "Se souvenir de / Se rappeler",
            "rule": "需要反身结构的记忆动词"
          },
          {
            "word": "S'entendre bien avec",
            "rule": "互惠动词，意思是“相处得很好”"
          },
          {
            "word": "S'en aller",
            "rule": "惯用代词动词，意思是“离开/出去”"
          }
        ],
        "patterns": [
          {
            "pattern": "Negative reflexive sandwich",
            "note": "Je NE me réveille PAS（代词拥抱动词在 ne...pas 内）"
          },
          {
            "pattern": "Near future reflexive placement",
            "note": "Je vais ME lever（反身代词改变主语，但位于不定式之前）"
          },
          {
            "pattern": "Imperative reflexive command",
            "note": "Lève-toi！ Réveillez-vous！ （在肯定命令中使用 -toi）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第一步：这个行为是对自己做的还是对等的？",
            "question": "有人对自己做了什么（梳头、起床）吗？",
            "action": "使用代词形式：SE + 动词"
          },
          {
            "step": "第 2 步：匹配反身代词",
            "question": "主体是谁？",
            "action": "je ➔ 我，tu ➔ te，il ➔ se，nous ➔ nous，vous ➔ vous，ils ➔ se"
          },
          {
            "step": "第三步：过去时态检查",
            "question": "是Passé Composé吗？",
            "action": "始终使用 ÊTRE 作为辅助"
          },
          {
            "step": "第 4 步：协议过滤器",
            "question": "动词后是否指定直接宾语？",
            "action": "如果是（les mains、les dents）➔ 不同意！如果否 ➔ 同意主题"
          }
        ]
      },
      "cod_coi": {
        "title": "COD vs COI Distinction & Dual Pronoun Ordering",
        "formulas": [
          {
            "name": "直接对象（COD）识别公式",
            "meaning": "没有介词将动词与直接名词分开",
            "example": "J'invite mes amis ➔ Je LES 邀请"
          },
          {
            "name": "间接宾语 (COI) 识别公式",
            "meaning": "由指向人的介词“à”分隔",
            "example": "Je parle à mon granton ➔ Je LUI parle"
          },
          {
            "name": "双代词顺序层次公式",
            "meaning": "使用两个代词时动词前严格从左到右的顺序",
            "example": "Il me le donne · Je le lui envoie"
          }
        ],
        "triggers": [
          {
            "word": "Lui",
            "rule": "COI 单数（对他/对她）——性别盲"
          },
          {
            "word": "Leur",
            "rule": "COI 复数（对他们来说）——性别盲目，从不使用 -s"
          },
          {
            "word": "Téléphoner à, sourire à, répondre à",
            "rule": "由于固定介词“à”而必须采用 COI 的动词"
          },
          {
            "word": "Regarder, écouter, attendre, chercher",
            "rule": "法语中的直接动词（以 COD 为例，与英语不同，没有介词！）"
          }
        ],
        "patterns": [
          {
            "pattern": "English false friend prepositions",
            "note": "attendre qqn（等人）、chercher qch（找东西）用法语COD！"
          },
          {
            "pattern": "Dual pronoun: me/te/nous/vous precedes le/la/les",
            "note": "Il ME LE prête（第一/第二人先于第三人）"
          },
          {
            "pattern": "Dual pronoun: le/la/les precedes lui/leur",
            "note": "Je LE LUI dis (第三直接先于第三间接)"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查动词及物性",
            "question": "法语动词带“à”表示人称吗？",
            "action": "如果是 ➔ COI (lui / leur)。如果否 ➔ COD (le / la / les)"
          },
          {
            "step": "第 2 步：替换第一个对象",
            "question": "什么代词代表它？",
            "action": "标记为 COD 或 COI"
          },
          {
            "step": "第三步：排列双代词",
            "question": "有两个代词吗？",
            "action": "遵循层次结构： [me/te/se/nous/vous] ➔ [le/la/les] ➔ [lui/leur] ➔ 动词"
          }
        ]
      },
      "futur_proche": {
        "title": "Futur Proche: The 'Aller + Infinitif' Formula",
        "formulas": [
          {
            "name": "Futur Proche 肯定配方",
            "meaning": "用于当前的计划、意图和明确的即将发生的事件（去...）",
            "example": "Je vais manger · Nous allons voyager · Ils vontpartir"
          },
          {
            "name": "Futur Proche 负公式",
            "meaning": "否定围绕共轭动词“aller”，将不定式留在外面",
            "example": "Je ne vais pas travailler demain (NOT Je ne travailler pas)"
          },
          {
            "name": "代词未来 Proche 公式",
            "meaning": "反身代词必须与主语一致并且位于不定式的前面",
            "example": "Je vais ME coucher · Vous allez VOUS amuser"
          }
        ],
        "triggers": [
          {
            "word": "Bientôt / Ce soir / Demain",
            "rule": "近期时间触发器"
          },
          {
            "word": "Dans cinq minutes / Tout de suite",
            "rule": "即将发生的未来触发因素"
          },
          {
            "word": "Je vais, tu vas, il va, nous allons, vous allez, ils vont",
            "rule": "现在时辅助 aller 的变化"
          }
        ],
        "patterns": [
          {
            "pattern": "Negation wraps around aller only",
            "note": "Je ne vais pas dormir · Elle ne va pas venir"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je vais LE voir · Il va ME téléphoner（代词属于不定式动作）"
          },
          {
            "pattern": "Spoken Quebec contraction",
            "note": "M'as manger（非正式口语，表示 Je vais manger）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查意图或近期情况",
            "question": "这是即将发生的预期计划或事件吗？",
            "action": "使用 Futur Proche (Aller + Inf)"
          },
          {
            "step": "第 2 步：结合 ALLER",
            "question": "主体是谁？",
            "action": "je vais, tu vas, il va, nous allons, vous allez, ils vont"
          },
          {
            "step": "第 3 步：附加主要操作",
            "question": "什么是动作动词？",
            "action": "保留不定式（-er、-ir、-re）"
          },
          {
            "step": "第四步：检查代词或否定",
            "question": "是否定词还是有宾语代词？",
            "action": "Ne + Aller + Pas + [代词] + 不定式"
          }
        ]
      },
      "futur_simple": {
        "title": "Futur Simple: Future Stem + Avoir Endings Formula",
        "formulas": [
          {
            "name": "未来简单大师公式",
            "meaning": "请注意，结尾实际上是 AVOIR 的现在时（ai、as、a、ons、ez、ont）！",
            "example": "parler ➔ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront"
          },
          {
            "name": "-RE 动词未来词干规则",
            "meaning": "vendr-e ➔ je vendr-ai, tu vendr-as",
            "example": "prendre ➔ je prendrai · attendre ➔ j'attendrai"
          },
          {
            "name": "核心不规则未来茎",
            "meaning": "词干总是以“r”结尾，然后采用标准词尾",
            "example": "我是塞莱，我是奥莱，我是伊莱，我是费莱，我是普莱，我是沃德莱"
          }
        ],
        "triggers": [
          {
            "word": "L'année prochaine / Dans dix ans",
            "rule": "遥远的未来时间标记"
          },
          {
            "word": "Quand / Dès que + Future",
            "rule": "法语中触发简单将来时的时间连词"
          },
          {
            "word": "Si + Présent ➔ Futur Simple",
            "rule": "第一个条件规则（Si j'ai le temps, je viendrai）"
          }
        ],
        "patterns": [
          {
            "pattern": "Future stems ALWAYS end in 'R'",
            "note": "parler-、finir-、vendr-、ser-、aur-、ir-、fer-"
          },
          {
            "pattern": "Do not confuse -ons with nous imparfait",
            "note": "nous parlerons (Futur /ɔ̃/) vs nous parlions (Imparfait /jɔ̃/)"
          },
          {
            "pattern": "3rd person plural is -ont (not -ent!)",
            "note": "ils parleront（听起来像/ɔ̃/，与ons押韵！）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第一步：确定未来的主干",
            "question": "动词是否规则（-er、-ir、-re）？",
            "action": "保留不定式（从 -re 中删除“e”）。如果不规则，请使用“R”根（ser-、aur-、ir-、fer-）"
          },
          {
            "step": "第 2 步：附加 AVOIR 结尾",
            "question": "主题是什么？",
            "action": "je ➔ -ai、tu ➔ -as、il ➔ -a、nous ➔ -ons、vous ➔ -ez、ils ➔ -ont"
          },
          {
            "step": "第三步：发音最后的后缀",
            "question": "注意元音",
            "action": "je parlerai (/e/)、tu parleras (/a/)、ils parleront (/ɔ̃/)"
          }
        ]
      },
      "imparfait": {
        "title": "Imparfait: Stem Extraction & Past Setting Rules",
        "formulas": [
          {
            "name": "不对称茎提取配方",
            "meaning": "适用于法语中 99.9% 的动词！",
            "example": "parler ➔ nous parlons ➔ parl- · finir ➔ nous finissons ➔ finiss- · prendre ➔ nous prenons ➔ pren-"
          },
          {
            "name": "不对称通用结局公式",
            "meaning": "注意 -ais、-ais、-ait、-aient 发音相同：/ɛ/",
            "example": "je parlais, tu parlais, il parlait, ils parlaient all sound /paʁlɛ/"
          },
          {
            "name": "法语中唯一的不规则词干",
            "meaning": "其他每一个动词都从现在的 nous 中提取其词干！",
            "example": "j'étais, nous étions, vous étiez"
          }
        ],
        "triggers": [
          {
            "word": "Tous les jours / Chaque été",
            "rule": "重复的习惯触发➔总是不公平"
          },
          {
            "word": "Pendant que... (While...)",
            "rule": "连续后台动作触发➔Imparfait"
          },
          {
            "word": "Quand j'étais jeune / petit",
            "rule": "过去正在进行的时代/生活状态"
          },
          {
            "word": "Il faisait beau / Il était 14h",
            "rule": "过去的风景、天气、时间、心情"
          }
        ],
        "patterns": [
          {
            "pattern": "-ais, -ait, -aient sound IDENTICAL",
            "note": "全部发音为/ɛ/（打开e）。主语代词告诉你是谁干的！"
          },
          {
            "pattern": "Nous and Vous have an audible 'i'",
            "note": "nous parlions (/paʁljɔ̃/), vous parliez (/paʁlje/)"
          },
          {
            "pattern": "Verbs in -ger and -cer",
            "note": "je mangeais（保留“e”），je commençais（添加变音符“ç”）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：用现在时态理解 Nous",
            "question": "“nous”的现在时是什么？",
            "action": "Nous parlons、nous faisons、nous buvons"
          },
          {
            "step": "第 2 步：关闭 -ONS",
            "question": "去掉3个字母-on",
            "action": "parl-、fais-、buv-（这是你的茎）"
          },
          {
            "step": "第三步：动词是ÊTRE吗？",
            "question": "这是唯一的例外吗？",
            "action": "使用词干 ét-"
          },
          {
            "step": "第 4 步：附加不对称结尾",
            "question": "配合主题",
            "action": "-ais、-ais、-ait、-ions、-iez、-aient"
          }
        ]
      },
      "pronom_y": {
        "title": "Pronoun Y: Replacing 'À' & Prepositional Locations",
        "formulas": [
          {
            "name": "代词 Y 位置替换公式",
            "meaning": "替换任何地理位置或位置（英语：THRERE）",
            "example": "Je vais à Montréal ➔ J'Y vais · Il est dans sa chambre ➔ Il Y est"
          },
          {
            "name": "代词 Y 无生命物体 公式",
            "meaning": "替换“à + 事物/概念”（思考、参与）",
            "example": "Je pense à mon avenir ➔ J'Y pense （不是 Je pense à lui：人们使用压力代词！）"
          },
          {
            "name": "代词 Y 放置公式",
            "meaning": "紧接在动词之前",
            "example": "Tu y vas · On n'y va pas · Vas-y！ （势在必行）"
          }
        ],
        "triggers": [
          {
            "word": "Penser à (une chose)",
            "rule": "思考 à 考试 ➔ 思考"
          },
          {
            "word": "Participer à, réfléchir à, s'intéresser à",
            "rule": "动词采用 'à' + 无生命的想法 ➔ 替换为 Y"
          },
          {
            "word": "Aller à, habiter à, vivre en, être chez",
            "rule": "位置触发器 ➔ 替换为 Y"
          },
          {
            "word": "Il y a",
            "rule": "包含代词 Y：字面意思是“那里有”"
          }
        ],
        "patterns": [
          {
            "pattern": "Y NEVER replaces a person!",
            "note": "❌ Je pense à Marie ➔ J'y pense ➔ ✓ Je pense à elle （对人使用重音代词！）"
          },
          {
            "pattern": "Vas-y imperative restoration of -s",
            "note": "Va + y ➔ Vas-y ! （添加 's' 以避免丑陋的 /a-i/ 元音冲突）"
          },
          {
            "pattern": "Near future placement",
            "note": "Je vais Y aller（位于不定式前面）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第一步：检查介词",
            "question": "该短语是由 à、en、dans、sur、sous 或 chez 引入的吗？",
            "action": "如果是 ➔ Y 的候选者"
          },
          {
            "step": "第二步：它是一个人吗？",
            "question": "这句话是指人吗？",
            "action": "如果是 ➔ 不要使用 Y！使用à lui / à elle。如果否 ➔ 继续步骤 3"
          },
          {
            "step": "第三步：它是一个地方还是一个东西？",
            "question": "它是一个地点还是一个抽象概念（à mon travail, à mon avenir）？",
            "action": "将整个短语替换为 Y"
          },
          {
            "step": "第四步：放在动词之前",
            "question": "它坐在哪里？",
            "action": "就在共轭动词之前（或不定式之前）"
          }
        ]
      },
      "conditionnel": {
        "title": "Conditionnel Présent: Politeness & Hypotheticals",
        "formulas": [
          {
            "name": "条件组装公式",
            "meaning": "混合时态：使用 Future 体和 Imparfait 声音！",
            "example": "瞄准器 ➔ 干瞄准器- + -ais ➔ J'aimerais · être ➔ 干 ser- + -ait ➔ Il serait"
          },
          {
            "name": "通用礼貌公式",
            "meaning": "缓解商店、餐馆和专业环境的需求",
            "example": "Je veux un cafe (粗鲁) ➔ Je VOUDRAIS un cab (礼貌)"
          },
          {
            "name": "第二个条件“Si”公式",
            "meaning": "假设的不真实的情况（“如果我有……我会……”）",
            "example": "如果你是银色的，我就是你的房子"
          }
        ],
        "triggers": [
          {
            "word": "Je voudrais / J'aimerais",
            "rule": "咖啡馆、面包店、客户服务的基本礼貌准则"
          },
          {
            "word": "Pourriez-vous / Auriez-vous",
            "rule": "礼貌请求：你可以/愿意吗？"
          },
          {
            "word": "Si j'étais vous...",
            "rule": "给个建议：如果我是你，我会..."
          },
          {
            "word": "À votre place, je ferais...",
            "rule": "换作你的话，我会做..."
          }
        ],
        "patterns": [
          {
            "pattern": "Never put conditionnel directly after 'SI'",
            "note": "❌ Si j'aurais su ➔ ✓ Si j'avais su（Les 'si' n'aiment pas les 'rais'！）"
          },
          {
            "pattern": "Pronunciation difference: -ai vs -ais",
            "note": "Futur: je parlerai (/e/ 关闭) vs Conditionnel: je parlerais (/ɛ/ 打开)"
          },
          {
            "pattern": "Irregular stems match the future",
            "note": "aur- (avoir)、ser- (être)、ir- (aller)、fer- (faire)、pourr- (pouvoir)、devr- (devoir)"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查意图（礼貌的或假设的）",
            "question": "您是在点餐、提出请求还是想象“如果”？",
            "action": "使用条件现在时"
          },
          {
            "step": "第二步：获得未来的主干",
            "question": "取不定式（或不规则的-R词干）",
            "action": "voudr-、aimer-、pourr-、ser-"
          },
          {
            "step": "第 3 步：附加不对称结尾",
            "question": "配合主题",
            "action": "-ais、-ais、-ait、-ions、-iez、-aient"
          },
          {
            "step": "第 4 步：检查“Si”条款",
            "question": "这句话以“Si”开头吗？",
            "action": "确保“si”后面的动词位于 IMPARFAIT 中！"
          }
        ]
      },
      "gerondif": {
        "title": "Le Gérondif: Simultaneous Actions & Manner",
        "formulas": [
          {
            "name": "Gérondif 形成公式",
            "meaning": "提取现在时的“nous”词干，添加介词“en”和后缀“-ant”",
            "example": "parler ➔ nous parlons ➔ EN PARLANT · faire ➔ nous faisons ➔ EN FAISANT"
          },
          {
            "name": "同时动作公式",
            "meaning": "这两个动作必须由完全相同的主体同时执行",
            "example": "Il écoute de la musique en étudiant（他一边学习一边听音乐）"
          },
          {
            "name": "方式与手段公式",
            "meaning": "解释如何取得结果",
            "example": "C'est en forgeant qu'on devient forgeron · On apprend en faisant des erreurs"
          }
        ],
        "triggers": [
          {
            "word": "En + -ant",
            "rule": "法国 gérondif 的签名标记"
          },
          {
            "word": "Tout en + -ant",
            "rule": "强调对比或严格同时性（边笑边哭）"
          },
          {
            "word": "En faisant, en lisant, en buvant",
            "rule": "日常生活中常见的gérondif表达"
          }
        ],
        "patterns": [
          {
            "pattern": "Same Subject Requirement",
            "note": "执行主要动词的人必须是执行 gérondif 动作的人！"
          },
          {
            "pattern": "3 Irregular Gérondifs",
            "note": "être ➔ en étant | avoir ➔ en ayant | savoir ➔ en sachant"
          },
          {
            "pattern": "Invariable",
            "note": "gérondif 从不采用 -e 或 -s （始终以 -ant 结尾）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查同时性或方式",
            "question": "两个动作是同时发生的，还是你回答“如何”？",
            "action": "使用 Le Gérondif"
          },
          {
            "step": "第二步：结合当下的诺斯",
            "question": "动词的现在时“nous”形式是什么？",
            "action": "nous prenons、nous Marchons、nous finissons"
          },
          {
            "step": "步骤 3：剥离 -ONS 并添加 -ANT",
            "question": "将 -ons 替换为 -ant",
            "action": "prenant, 马尔尚, 菲尼桑"
          },
          {
            "step": "第 4 步：添加“EN”",
            "question": "添加介词“en”",
            "action": "en prenant、en Marchant、en finissant"
          }
        ]
      },
      "passe_recent": {
        "title": "Passé Récent: The 'Venir de + Infinitif' Formula",
        "formulas": [
          {
            "name": "过去的肯定公式",
            "meaning": "用于刚刚完成的动作（英语：刚刚做了某事）",
            "example": "Je viens de manger · Le train vient d'arriver · Nous venons de finir"
          },
          {
            "name": "消除法则",
            "meaning": "元音开头动词前的强制收缩",
            "example": "Il vient D’arriver · Elle vient D’entendre"
          },
          {
            "name": "代词 Passé Récent 公式",
            "meaning": "代词与主语匹配，但包含不定式",
            "example": "Je viens de ME réveiller · Ils viennent de SE marier"
          }
        ],
        "triggers": [
          {
            "word": "À l'instant",
            "rule": "触发点：就在这一秒"
          },
          {
            "word": "Tout juste",
            "rule": "触发因素：刚刚完成/刚刚完成"
          },
          {
            "word": "Il y a une minute",
            "rule": "触发时间：一分钟前"
          },
          {
            "word": "Je viens, tu viens, il vient, nous venons, vous venez, ils viennent",
            "rule": "venir 的现在时变位"
          }
        ],
        "patterns": [
          {
            "pattern": "Never forget the preposition 'DE'",
            "note": "❌ Je viens manger（我来吃饭的意思） ➔ ✓ Je viens DE manger（我刚吃饭）"
          },
          {
            "pattern": "Pronoun placement before infinitive",
            "note": "Je viens de LE voir（代词位于不定式动词之前）"
          },
          {
            "pattern": "Past in the past (Venir in Imparfait)",
            "note": "Je venais departir quand il a sonné（他按铃时我刚刚离开）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查时间",
            "question": "该操作是几秒前还是几分钟前发生的（“刚刚发生”）？",
            "action": "使用“最近过去”"
          },
          {
            "step": "第 2 步：共轭 VENIR",
            "question": "主体是谁？",
            "action": "维恩斯、维恩斯、维恩特、维农斯、维内斯、维恩特"
          },
          {
            "step": "步骤 3：添加 DE 或 D’",
            "question": "下一个动词是否以元音开头？",
            "action": "在元音/h之前使用D’；辅音前的DE"
          },
          {
            "step": "第四步：附加动作不定式",
            "question": "保持主要动词为不定式",
            "action": "我的咖啡厅结束了"
          }
        ]
      },
      "conjugation_master": {
        "title": "Master Conjugation Timeline: Past, Present & Future",
        "formulas": [
          {
            "name": "完整时间线公式",
            "meaning": "沿着现实时间顺序绘制的 5 种主要操作时态",
            "example": "Je viens de manger ➔ J'ai mangé / Je mangeais ➔ Je mange ➔ Je vais manger ➔ Je mangerai"
          },
          {
            "name": "法语口语变位三巨头",
            "meaning": "先掌握这三种时态，才能说95%的日常法语会话",
            "example": "J'ai parlé ➔ Je parle ➔ Je vais parler"
          }
        ],
        "triggers": [
          {
            "word": "Hier (Yesterday)",
            "rule": "Passé Composé（时间点）或 Imparfait（持续背景）"
          },
          {
            "word": "Aujourd'hui / En ce moment",
            "rule": "指示性现在"
          },
          {
            "word": "Demain / Ce soir",
            "rule": "Futur Proche（对话）或 Futur Simple（正式/书面）"
          }
        ],
        "patterns": [
          {
            "pattern": "Auxiliary tenses rely on Infinitives",
            "note": "Passé Récent = venir + de + INF · Futur Proche = aller + INF"
          },
          {
            "pattern": "Compound tenses rely on Participles",
            "note": "Passé Composé = avoir/être + 分词"
          },
          {
            "pattern": "Stem tenses rely on Endings",
            "note": "现在 = 词干 + 词尾 · Imparfait = nous-词干 + 词尾 · 未来简单 = inf+词尾"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：找到时间锚点",
            "question": "该动作是过去、现在还是将来？",
            "action": "精确定位时间轴"
          },
          {
            "step": "第 2 步：选择注册（口语与正式）",
            "question": "是随意的谈话还是正式的写作？",
            "action": "口语 ➔ Futur Proche (vais faire) · 正式 ➔ Futur Simple (ferai)"
          },
          {
            "step": "第 3 步：过去的操作过滤器",
            "question": "是突发事件还是场景/习惯？",
            "action": "事件 ➔ Passé Composé · 习惯/环境 ➔ 不公平"
          }
        ]
      },
      "prepositions_temps": {
        "title": "Time Prepositions: Depuis, Il y a, Dans & Pendant",
        "formulas": [
          {
            "name": "DEPUIS 公式（过去至今）",
            "meaning": "从过去开始，现在仍在继续（法语使用现在时！）",
            "example": "J'habite à Montréal DEPUIS deux ans（我已经在这里住了两年了，现在仍然如此！）"
          },
          {
            "name": "IL Y A 公式（过去完成的点）",
            "meaning": "指向过去一个已完成的时刻（英语：AGO）",
            "example": "Le train est parti IL Y A dix 分钟（火车 10 分钟前出发）"
          },
          {
            "name": "DANS 公式（未来倒计时）",
            "meaning": "倒计时未来行动何时开始（英语：IN）",
            "example": "Le curs begin DANS cinq 分钟（课程在 5 分钟后开始）"
          },
          {
            "name": "吊坠公式（关闭完成持续时间）",
            "meaning": "有明确的开始和结束；动作完全结束（英语：FOR / DURING）",
            "example": "J'ai dormi PENDANT huit heures（我睡了 8 个小时 — 现在醒了）"
          }
        ],
        "triggers": [
          {
            "word": "Depuis",
            "rule": "现在仍在发生 ➔ 必须采用现在时"
          },
          {
            "word": "Il y a",
            "rule": "时间之前 ➔ 必须采用过去时"
          },
          {
            "word": "Dans",
            "rule": "未来倒计时 ➔ 必须采用将来时态"
          },
          {
            "word": "Pendant",
            "rule": "完成时间的封闭块 ➔ 通常是 Passé Composé"
          }
        ],
        "patterns": [
          {
            "pattern": "Never use Passé Composé with Depuis",
            "note": "❌ J'aihabité ici depuis 1 和 ➔ ✓ J'habite ici depuis 1 和"
          },
          {
            "pattern": "Dans vs En",
            "note": "Dans 1h = 从现在开始 1 小时（倒计时） · En 1h = 需要 1 小时完成（速度）"
          },
          {
            "pattern": "Pour with time",
            "note": "严格按照预期的未来计划持续时间：Je pars pour deux semaines"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：该操作现在仍在进行吗？",
            "question": "它是从过去开始并持续到现在的吗？",
            "action": "如果是 ➔ DEPUIS（+ 现在时）"
          },
          {
            "step": "步骤2：这是将来的一个动作吗？",
            "question": "你在倒数什么时候开始吗？",
            "action": "如果是 ➔ DANS（+将来时）"
          },
          {
            "step": "第三步：这是一个完全过去的动作吗？",
            "question": "是“X年前”发生的吗？",
            "action": "如果是 ➔ IL Y A (+ Passé Composé)"
          },
          {
            "step": "第 4 步：这是一个封闭的、测量的持续时间吗？",
            "question": "它是否描述了一个完整的时间段（包含开始和结束）？",
            "action": "如果是 ➔ 吊坠"
          }
        ]
      },
      "histoire_montreal": {
        "title": "Historical Narrative: Past Tense Sequence Analysis",
        "formulas": [
          {
            "name": "历史背景与行动公式",
            "meaning": "历史叙事以 Imparfait 为舞台，然后以 Passé Composé 推进年表",
            "example": "Les peuples autochtones vivaient ici (Imparfait) quand Paul Chomedey a foldé Ville-Marie en 1642 (Passé Composé)"
          },
          {
            "name": "历史日期介词公式",
            "meaning": "历史计时介词",
            "example": "1642 年 · 十七世纪 · 1642 年 5 月 17 日"
          }
        ],
        "triggers": [
          {
            "word": "En 1642 / En 1701",
            "rule": "特定日历年触发器 ➔ Passé Composé 用于基金会活动"
          },
          {
            "word": "À cette époque / Au début",
            "rule": "历史背景触发➔ 不公平"
          },
          {
            "word": "La Grande Paix de Montréal",
            "rule": "1701 年卡利埃签署的主要和平条约"
          }
        ],
        "patterns": [
          {
            "pattern": "Centuries in French",
            "note": "使用带有“siècle”的罗马数字：au XXIe siècle（21 世纪）"
          },
          {
            "pattern": "Historical Present",
            "note": "历史经常使用现在时来生动地讲述故事（En 1642, il folde...）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第一步：描述的是那个时代的生活状况吗？",
            "question": "生活条件、风景、传统？",
            "action": "使用 IMPARFAIT (Ils chassaient, vivaient)"
          },
          {
            "step": "第二步：这是一个具体的转折点、战争还是条约？",
            "question": "事情发生在一个有开始和结束的明确日期吗？",
            "action": "使用 PASSÉ COMPOSÉ (Il a folndé, ils ont Signé)"
          },
          {
            "step": "步骤 3：检查日期格式",
            "question": "只是一年、一个世纪还是一天？",
            "action": "En [年]、au [世纪]、le [日月年]"
          }
        ]
      },
      "pc_vs_imparfait": {
        "title": "Passé Composé vs Imparfait: The Movie Scene Rule",
        "formulas": [
          {
            "name": "电影摄影机与闪光灯快照公式",
            "meaning": "Imparfait 奠定了基础（天气、情绪、“正在做的事情”）； Passé Composé 触发中断或里程碑",
            "example": "Il pleuvait（Imparfait：场景）quand soudain la foudre a frappé（Passé Composé：快照）"
          },
          {
            "name": "中断动作公式",
            "meaning": "正在进行的连续动作被准时事件打断",
            "example": "Je dormais (正在睡觉) quand le réveil A SONNÉ (rang)"
          },
          {
            "name": "变色龙动词公式",
            "meaning": "某些动词会改变心态和突然意识到之间的含义",
            "example": "Je savais nager (能力) vs J'ai su la nouvelle (事件)"
          }
        ],
        "triggers": [
          {
            "word": "Pendant que... / Alors que...",
            "rule": "总是不公平：当事情正在进行时"
          },
          {
            "word": "Soudain / Tout à coup",
            "rule": "Always Passé Composé：突然发生一件事"
          },
          {
            "word": "Chaque matin / D'habitude",
            "rule": "总是不公平：重复的习惯动作"
          },
          {
            "word": "Hier à 15h / Un jour",
            "rule": "Passé Composé：孤立完成的场合"
          }
        ],
        "patterns": [
          {
            "pattern": "Ongoing state vs point in time",
            "note": "正在做 = Imparfait · 做了 = Passé Composé"
          },
          {
            "pattern": "Physical description & feelings",
            "note": "J'avais peur, il faisait froid, elle était triste ➔ 总是 Imparfait"
          },
          {
            "pattern": "Sequence of consecutive actions",
            "note": "Je me suis levé, j'ai mangé et je suis parti (A ➔ B ➔ C = Passé Composé)"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：问“当时的场景是什么？”",
            "question": "它是否描述了背景天气、气氛、感受或持续的习惯？",
            "action": "如果是 ➔ IMPARFAIT（摄像机滚动）"
          },
          {
            "step": "第二步：问“接下来发生了什么？”",
            "question": "是一个具体的、完整的动作推动了故事的发展吗？",
            "action": "如果是 ➔ PASSÉ COMPOSÉ（照片快照 BAM！）"
          },
          {
            "step": "第 3 步：检查是否有中断",
            "question": "一项行动是否打断了正在进行的另一项行动？",
            "action": "背景 = 不平衡 · 中断 = Passé Composé"
          },
          {
            "step": "第 4 步：检查触发词",
            "question": "寻找“pendant que”（Imparfait）或“soudain”（Passé Composé）",
            "action": "锁定您的时态选择"
          }
        ]
      },
      "personality_adjectives": {
        "title": "Personality Adjectives: Feminine Shifts & Suffix Rules",
        "formulas": [
          {
            "name": "-EUX ➔ -EUSE 女性后缀公式",
            "meaning": "几乎所有以 -eux 结尾的字符形容词在阴性中都转变为 -euse",
            "example": "généreux ➔ généreuse · 勇气 ➔ 勇气 · paresseux ➔ paresseuse"
          },
          {
            "name": "-IF ➔ -IVE 女性后缀公式",
            "meaning": "发声从清音/f/转变为浊音/v/",
            "example": "créatif ➔ 创造性 · actif ➔ 积极 · 注意力 ➔ 细心"
          },
          {
            "name": "-EL / -ON 双辅音公式",
            "meaning": "添加 -e 之前将最后一个辅音加倍",
            "example": "naturel ➔ naturelle · bon ➔ bonne · mimi ➔ mignonne"
          },
          {
            "name": "不变形容词后缀 -E",
            "meaning": "如果阳性已经以不重音 -e 结尾，则无需更改",
            "example": "平静 (M) ➔ 平静 (F) · 胆怯 (M) ➔ 胆怯 (F) · 善于交际 (M) ➔ 善于交际 (F)"
          }
        ],
        "triggers": [
          {
            "word": "Chaleureux / Chaleureuse",
            "rule": "热情/热情的性格（在魁北克很常见）"
          },
          {
            "word": "Généreux / Généreuse",
            "rule": "慷慨的特质"
          },
          {
            "word": "Franc / Franche",
            "rule": "直接，直接（不规则阴性-che）"
          },
          {
            "word": "Doux / Douce",
            "rule": "温柔、甜美（不规则女性-ce）"
          }
        ],
        "patterns": [
          {
            "pattern": "Silent consonants awaken in feminine",
            "note": "bavard (/bavaʁ/) ➔ bavarde (/bavaʁd/)：可以听到“d”！"
          },
          {
            "pattern": "-teur ➔ -trice",
            "note": "séducteur ➔ séductrice, créateur ➔ créatrice"
          },
          {
            "pattern": "-al ➔ -ale, -aux",
            "note": "忠诚 ➔loyale（女性），loyaux（男性复数）"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：检查男性结局",
            "question": "基本形容词是否以-e结尾？",
            "action": "如果是 ➔ 不变（平静、胆怯、同情）"
          },
          {
            "step": "第2步：它以-eux结尾吗？",
            "question": "阳性后缀是-eux吗？",
            "action": "转换为 -euse（généreuse、sérieuse）"
          },
          {
            "step": "第三步：是否以-if结尾？",
            "question": "阳性后缀是-if吗？",
            "action": "转变为-ive（有创意、细心）"
          },
          {
            "step": "第四步：常规辅音结尾",
            "question": "它以 -t、-d 或 -s 结尾吗？",
            "action": "添加 -e 并唤醒最后的辅音（gentil ➔ gentille，intelligent ➔ smarte）"
          }
        ]
      },
      "whats_new": {
        "title": "Platform Architecture & Learning System Roadmap",
        "formulas": [
          {
            "name": "语法保留方程",
            "meaning": "支撑法语语法指南设计的教学支柱",
            "example": "公式（逻辑清晰）+识别徽章（模式识别）+SVG图（心理模型）"
          },
          {
            "name": "持续学习周期",
            "meaning": "从初级 A1 到中级 B1 魁北克流利度的自主进展管道",
            "example": "间隔重复间隔将到期项目安排在 1、3 和 7 天"
          }
        ],
        "triggers": [
          {
            "word": "Visual Formulas",
            "rule": "每个主题的数学式语法公式"
          },
          {
            "word": "Pattern Recognition",
            "rule": "单词触发和结束模式可立即检测规则"
          },
          {
            "word": "Diagnostic Decision Trees",
            "rule": "逐步的逻辑路径解释如何得出语法结论"
          },
          {
            "word": "SVG Interactive Diagrams",
            "rule": "每个主题卡中均嵌入视觉插图"
          }
        ],
        "patterns": [
          {
            "pattern": "Neo-Brutalism & Modern themes",
            "note": "专为深度聚焦而定制的自适应触觉视觉设计"
          },
          {
            "pattern": "Offline Transit Practice",
            "note": "PWA Service Worker 缓存所有 30 个地铁研究模块"
          },
          {
            "pattern": "Multi-language translations",
            "note": "全面支持 7 种母语"
          }
        ],
        "decisionSteps": [
          {
            "step": "第 1 步：选择语法主题",
            "question": "选择课程中 30 个部分中的任意部分",
            "action": "查看核心公式和识别触发器"
          },
          {
            "step": "第 2 步：检查视觉图",
            "question": "追踪决策如何从上下文分支到语法结论",
            "action": "跟随 SVG 流节点"
          },
          {
            "step": "第三步：练习互动块",
            "question": "使用小部件和共轭表测试知识",
            "action": "即时听觉和视觉反馈"
          },
          {
            "step": "第 4 步：使用 SRS 保留",
            "question": "查看间隔重复队列中的项目",
            "action": "将记忆巩固为长期回忆"
          }
        ]
      }
    }
  }
};

/**
 * Lookup helper for Hub UI strings
 */
window.tGrammarUi = function(key) {
  const lang = window.currentLang || 'en';
  const store = window.GRAMMAR_PATTERNS_TRANSLATIONS;
  if (store && store[lang] && store[lang].ui && store[lang].ui[key]) {
    return store[lang].ui[key];
  }
  if (store && store.en && store.en.ui && store.en.ui[key]) {
    return store.en.ui[key];
  }
  return '';
};

/**
 * Lookup helper for Topic grammar data in active language
 */
window.tGrammarData = function(sectionId) {
  const lang = window.currentLang || 'en';
  const store = window.GRAMMAR_PATTERNS_TRANSLATIONS;
  if (store && store[lang] && store[lang].topics && store[lang].topics[sectionId]) {
    return store[lang].topics[sectionId];
  }
  if (store && store.en && store.en.topics && store.en.topics[sectionId]) {
    return store.en.topics[sectionId];
  }
  return null;
};
