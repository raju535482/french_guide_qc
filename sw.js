// French Grammar Guide — Service Worker for offline PWA transit practice
const CACHE_NAME = 'french-grammar-guide-v20';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './data/verbs_db.js',
  './data/personality_adjectives.json',
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
  './js/sections/28_personality_adjectives.js'
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
