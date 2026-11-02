// French Grammar Guide — Service Worker for offline PWA transit practice
const CACHE_NAME = 'french-grammar-guide-v34';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './data/verbs_db.js',
  './data/personality_adjectives.json',
  './js/grammar_patterns_diagrams.js',
  './js/grammar_patterns_translations.js',
  './js/past_tense_trainer.js',
  './js/conjugator.js',
  './js/translations.js',
  './js/dem_translations.js',
  './js/app.js',
  './js/sections/00_articles.js',
  './js/sections/01_nouns.js',
  './js/sections/02_pronouns.js',
  './js/sections/03_verbs.js',
  './js/sections/04_sentences.js',
  './js/sections/05_adjectives.js',
  './js/sections/06_prepositions.js',
  './js/sections/07_possessives.js',
  './js/sections/08_numbers.js',
  './js/sections/09_passe_compose.js',
  './js/sections/10_object_pronouns.js',
  './js/sections/11_imperatives.js',
  './js/sections/12_useful_structures.js',
  './js/sections/13_quebec_vocab.js',
  './js/sections/14_verb_endings.js',
  './js/sections/15_pronominal.js',
  './js/sections/16_cod_coi.js',
  './js/sections/17_futur_proche.js',
  './js/sections/18_futur_simple.js',
  './js/sections/19_imparfait.js',
  './js/sections/20_pronom_y.js',
  './js/sections/21_conditionnel.js',
  './js/sections/22_gerondif.js',
  './js/sections/23_passe_recent.js',
  './js/sections/24_conjugation_master.js',
  './js/sections/25_prepositions_temps.js',
  './js/sections/26_histoire_montreal.js',
  './js/sections/27_pc_vs_imparfait.js',
  './js/sections/28_personality_adjectives.js',
  './js/sections/29_whats_new.js',
  './js/sections/30_il_faut_que.js',
  './js/sections/31_sante_quebec.js',
  './js/sections/32_culture_medias.js',
  './js/sections/33_habitation_quebec.js',
  './js/habitation_images_data.js',
  './assets/images/human_body_anatomy.png',
  './assets/images/logements_quebec.jpg',
  './assets/images/types_de_logements.jpg',
  './assets/images/logements_atypiques.jpg',
  './assets/images/logements_uniques.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(k => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful local responses
        if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
