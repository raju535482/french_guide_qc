// Section: What's New & Recent Updates (whats_new)
window.sectionsData = window.sectionsData || [];
window.sectionsData.push({
  "id": "whats_new",
  "icon": "auto_awesome",
  "title": "What's New & Updates",
  "subtitle": "Recent Features, New Sections & Release Highlights",
  "color": "#F59E0B",
  "noCheckpoint": true,
  "content": [
    {
      "rule": "1. Latest Additions & Highlights",
      "english": "Here is a complete summary of recently added sections, newly supported interactive widgets, enhanced themes, and features.",
      "customHtml": `
<style>
.wn-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.wn-hero-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}
.wn-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #F59E0B;
  color: #121212;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--r-xs);
  width: fit-content;
}
.wn-hero-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
}
.wn-hero-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}
.wn-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.wn-feature-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.wn-feature-card:hover {
  transform: translateY(-2px);
  border-color: #F59E0B;
}
.wn-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wn-tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: var(--r-xs);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.wn-tag-new {
  background: color-mix(in srgb, #10B981 18%, var(--surface-1));
  color: #10B981;
  border: 1px solid #10B981;
}
.wn-tag-theme {
  background: color-mix(in srgb, #8B5CF6 18%, var(--surface-1));
  color: #8B5CF6;
  border: 1px solid #8B5CF6;
}
.wn-tag-tool {
  background: color-mix(in srgb, #F59E0B 18%, var(--surface-1));
  color: #F59E0B;
  border: 1px solid #F59E0B;
}
.wn-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.45rem;
}
.wn-card-body {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.45;
}
.wn-card-btn {
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--surface-1);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.4rem 0.8rem;
  border-radius: var(--r-xs);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.wn-card-btn:hover {
  background: #F59E0B;
  color: #121212;
  border-color: #F59E0B;
}

/* Neo-Brutalist overrides */
[data-style="neo-brutalist"] .wn-hero-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 5px 5px 0px var(--neo-border);
  background: var(--surface-1);
}
[data-style="neo-brutalist"] .wn-hero-badge {
  border: 1.5px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
}
[data-style="neo-brutalist"] .wn-feature-card {
  border: 2.5px solid var(--neo-border);
  box-shadow: 4px 4px 0px var(--neo-border);
  background: var(--surface-1);
}
[data-style="neo-brutalist"] .wn-feature-card:hover {
  box-shadow: 6px 6px 0px var(--neo-border);
  transform: translate(-2px, -2px);
}
[data-style="neo-brutalist"] .wn-tag {
  border: 1.5px solid var(--neo-border);
  font-weight: 800;
}
[data-style="neo-brutalist"] .wn-card-btn {
  border: 2px solid var(--neo-border);
  box-shadow: 2px 2px 0px var(--neo-border);
  font-weight: 700;
}
[data-style="neo-brutalist"] .wn-card-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px var(--neo-border);
}
</style>

<div class="wn-container">
  <div class="wn-hero-card">
    <div class="wn-hero-badge"><span class="ms ms-sm">celebration</span> LATEST RELEASE</div>
    <h3 class="wn-hero-title">Welcome to the Enhanced French Grammar Guide</h3>
    <p class="wn-hero-desc">We regularly update this guide with new curriculum modules, conversational vocabulary databases, pronunciation guides, and modern visual themes to enhance your Quebec French learning experience.</p>
  </div>

  <div class="wn-cards-grid">
    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-new">New Section</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Section 28</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#8B5CF6">psychology</span> Personality Adjectives</div>
      <div class="wn-card-body">76 authentic French personality adjectives with natural conversational definitions, real-life spoken examples, native audio pronunciation, and 7 target language translations (English, Persian, Gujarati, Hindi, Tamil, Korean, Chinese).</div>
      <button class="wn-card-btn" onclick="go(sections.findIndex(s=>s.id==='personality_adjectives'))">View Section <span class="ms ms-sm">arrow_forward</span></button>
    </div>

    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-theme">Design</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Default Style</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#F59E0B">palette</span> Neo-Brutalist Theme</div>
      <div class="wn-card-body">Bold high-contrast borders, tactile drop shadows, vibrant color badges, and retro-modern typography tailored for maximum readability on both desktop and mobile devices.</div>
      <button class="wn-card-btn" onclick="changeStyleTheme('neo-brutalist')">Active Theme <span class="ms ms-sm">check</span></button>
    </div>

    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-new">New Section</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Section 27</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#EC4899">movie_filter</span> Passé Composé vs Imparfait</div>
      <div class="wn-card-body">The "Movie Camera vs Photo Snapshot" golden rule: master how to choose between ongoing background descriptions and sudden interrupting events in past-tense narratives.</div>
      <button class="wn-card-btn" onclick="go(sections.findIndex(s=>s.id==='pc_vs_imparfait'))">View Section <span class="ms ms-sm">arrow_forward</span></button>
    </div>

    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-new">New Section</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Section 26</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#EAB308">account_balance</span> Histoire de Montréal</div>
      <div class="wn-card-body">Historical timeline and interactive quizzes based on Pointe-à-Callière archaeological discoveries from 6000 BCE through modern Quebec times.</div>
      <button class="wn-card-btn" onclick="go(sections.findIndex(s=>s.id==='histoire_montreal'))">View Section <span class="ms ms-sm">arrow_forward</span></button>
    </div>

    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-tool">Interactive</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Tool</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#10B981">replay</span> Spaced Repetition (SRS)</div>
      <div class="wn-card-body">Built-in smart review queue that automatically tracks grammar mistakes and schedules retention flashcards using spaced repetition algorithms.</div>
      <button class="wn-card-btn" onclick="openSRSModal()">Open Review Queue <span class="ms ms-sm">open_in_new</span></button>
    </div>

    <div class="wn-feature-card">
      <div class="wn-card-head">
        <span class="wn-tag wn-tag-tool">Lookup</span>
        <span style="font-size:0.75rem;color:var(--text-muted);">Conjugator</span>
      </div>
      <div class="wn-card-title"><span class="ms ms-sm" style="color:#38BDF8">auto_stories</span> 7,800+ French Verbs DB</div>
      <div class="wn-card-body">Instant conjugator covering present, past, future, conditional, subjunctive, and imperative moods with Quebec conversational notes.</div>
      <button class="wn-card-btn" onclick="openVerbModal()">Open Conjugator <span class="ms ms-sm">open_in_new</span></button>
    </div>
  </div>
</div>
`
    },
    {
      "rule": "2. Changelog & Version History",
      "english": "A quick timeline of recent updates, fixes, and content additions.",
      "table": {
        "headers": ["Version / Date", "Type", "Summary of What's New"],
        "rows": [
          ["v20 (Latest)", "New Section", "Added Section 28: 76 French Personality Adjectives with 7 languages & audio"],
          ["v20 (Latest)", "Theme", "Made Neo-Brutalist the default visual theme with custom tactile styling"],
          ["v19", "UI Improvement", "Simplified Personality Adjectives from card grid to clean vertical list"],
          ["v18", "Performance", "Fixed scroll-reveal intersection observer to show cards instantly without scrolling"],
          ["v17", "Feature", "Added 'What's New' announcement popup and dedicated guide section"],
          ["v16", "New Section", "Added Section 27: Passé Composé vs Imparfait 'Movie Camera' rule"],
          ["v15", "New Section", "Added Section 26: Histoire de Montréal interactive historical timeline"]
        ]
      },
      "tip": "💡 Tip: You can reopen the What's New announcement modal anytime by clicking the bell icon in the top header bar."
    }
  ]
});
