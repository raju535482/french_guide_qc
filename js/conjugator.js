// ═════════════════════════════════════════════════════════════════════════
// COMPREHENSIVE FRENCH CONJUGATOR ENGINE
// Covers regular (-er, -ir, -re) & all tricky orthographic / irregular verbs
// ═════════════════════════════════════════════════════════════════════════

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.FrenchConjugator = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const pronouns = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
  const engPronouns = ["I", "you", "he/she", "we", "you", "they"];

  const isVowel = (s) => /^[aeiouhàéèêîôûëïü]/i.test(s);
  const elideJe = (v) => isVowel(v) ? "j'" + v : "je " + v;

  const vandertramp = new Set([
    'aller', 'venir', 'arriver', 'partir', 'entrer', 'sortir', 'monter',
    'descendre', 'naître', 'mourir', 'rester', 'tomber', 'retourner',
    'passer', 'rentrer', 'devenir', 'revenir', 'redevenir', 'repartir',
    'ressortir', 'remonter', 'redescendre', 'retomber', 'parvenir'
  ]);

  // Master dictionary of irregular verbs with all 6 tenses + PP + Aux + Gerund
  const irregularVerbs = {
    'être': {
      pres: ["suis", "es", "est", "sommes", "êtes", "sont"],
      pc: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
      imp: ["étais", "étais", "était", "étions", "étiez", "étaient"],
      fut: ["serai", "seras", "sera", "serons", "serez", "seront"],
      cond: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
      pp: "été", aux: "avoir", ger: "en étant", impfStem: "ét", futStem: "ser"
    },
    'avoir': {
      pres: ["ai", "as", "a", "avons", "avez", "ont"],
      pc: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
      imp: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
      fut: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
      cond: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
      pp: "eu", aux: "avoir", ger: "en ayant", impfStem: "av", futStem: "aur"
    },
    'aller': {
      pres: ["vais", "vas", "va", "allons", "allez", "vont"],
      pc: ["suis allé(e)", "es allé(e)", "est allé(e)", "sommes allé(e)s", "êtes allé(e)(s)", "sont allé(e)s"],
      imp: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
      fut: ["irai", "iras", "ira", "irons", "irez", "iront"],
      cond: ["irais", "irais", "irait", "irions", "iriez", "iraient"],
      pp: "allé", aux: "être", ger: "en allant", impfStem: "all", futStem: "ir"
    },
    'faire': {
      pres: ["fais", "fais", "fait", "faisons", "faites", "font"],
      pc: ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],
      imp: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
      fut: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
      cond: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"],
      pp: "fait", aux: "avoir", ger: "en faisant", impfStem: "fais", futStem: "fer"
    },
    'pouvoir': {
      pres: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
      pc: ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
      imp: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
      fut: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
      cond: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"],
      pp: "pu", aux: "avoir", ger: "en pouvant", impfStem: "pouv", futStem: "pourr"
    },
    'vouloir': {
      pres: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
      pc: ["ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],
      imp: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
      fut: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
      cond: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"],
      pp: "voulu", aux: "avoir", ger: "en voulant", impfStem: "voul", futStem: "voudr"
    },
    'devoir': {
      pres: ["dois", "dois", "doit", "devons", "devez", "doivent"],
      pc: ["ai dû", "as dû", "a dû", "avons dû", "avez dû", "ont dû"],
      imp: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
      fut: ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
      cond: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"],
      pp: "dû", aux: "avoir", ger: "en devant", impfStem: "dev", futStem: "devr"
    },
    'savoir': {
      pres: ["sais", "sais", "sait", "savons", "savez", "savent"],
      pc: ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
      imp: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
      fut: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
      cond: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"],
      pp: "su", aux: "avoir", ger: "en sachant", impfStem: "sav", futStem: "saur"
    },
    'voir': {
      pres: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
      pc: ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
      imp: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
      fut: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
      cond: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"],
      pp: "vu", aux: "avoir", ger: "en voyant", impfStem: "voy", futStem: "verr"
    },
    'prendre': {
      pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
      pc: ["ai pris", "as pris", "a pris", "avons pris", "avez pris", "ont pris"],
      imp: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
      fut: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
      cond: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"],
      pp: "pris", aux: "avoir", ger: "en prenant", impfStem: "pren", futStem: "prendr"
    },
    'venir': {
      pres: ["viens", "viens", "vient", "venons", "venez", "viennent"],
      pc: ["suis venu(e)", "es venu(e)", "est venu(e)", "sommes venu(e)s", "êtes venu(e)(s)", "sont venu(e)s"],
      imp: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
      fut: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
      cond: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"],
      pp: "venu", aux: "être", ger: "en venant", impfStem: "ven", futStem: "viendr"
    },
    'tenir': {
      pres: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
      pc: ["ai tenu", "as tenu", "a tenu", "avons tenu", "avez tenu", "ont tenu"],
      imp: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
      fut: ["tiendrai", "tiendras", "tiendra", "tiendrons", "tiendrez", "tiendront"],
      cond: ["tiendrais", "tiendrais", "tiendrait", "tiendrions", "tiendriez", "tiendraient"],
      pp: "tenu", aux: "avoir", ger: "en tenant", impfStem: "ten", futStem: "tiendr"
    },
    'dire': {
      pres: ["dis", "dis", "dit", "disons", "dites", "disent"],
      pc: ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
      imp: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
      fut: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
      cond: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"],
      pp: "dit", aux: "avoir", ger: "en disant", impfStem: "dis", futStem: "dir"
    },
    'lire': {
      pres: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
      pc: ["ai lu", "as lu", "a lu", "avons lu", "avez lu", "ont lu"],
      imp: ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
      fut: ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
      cond: ["lirais", "lirais", "lirait", "lirions", "liriez", "liraient"],
      pp: "lu", aux: "avoir", ger: "en lisant", impfStem: "lis", futStem: "lir"
    },
    'écrire': {
      pres: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
      pc: ["ai écrit", "as écrit", "a écrit", "avons écrit", "avez écrit", "ont écrit"],
      imp: ["écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
      fut: ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
      cond: ["écrirais", "écrirais", "écrirait", "écririons", "écririez", "écriraient"],
      pp: "écrit", aux: "avoir", ger: "en écrivant", impfStem: "écriv", futStem: "écrir"
    },
    'boire': {
      pres: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
      pc: ["ai bu", "as bu", "a bu", "avons bu", "avez bu", "ont bu"],
      imp: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
      fut: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
      cond: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"],
      pp: "bu", aux: "avoir", ger: "en buvant", impfStem: "buv", futStem: "boir"
    },
    'croire': {
      pres: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
      pc: ["ai cru", "as cru", "a cru", "avons cru", "avez cru", "ont cru"],
      imp: ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
      fut: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
      cond: ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"],
      pp: "cru", aux: "avoir", ger: "en croyant", impfStem: "croy", futStem: "croir"
    },
    'mettre': {
      pres: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
      pc: ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
      imp: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
      fut: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
      cond: ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"],
      pp: "mis", aux: "avoir", ger: "en mettant", impfStem: "mett", futStem: "mettr"
    },
    'connaître': {
      pres: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
      pc: ["ai connu", "as connu", "a connu", "avons connu", "avez connu", "ont connu"],
      imp: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
      fut: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
      cond: ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"],
      pp: "connu", aux: "avoir", ger: "en connaissant", impfStem: "connaiss", futStem: "connaîtr"
    },
    'vivre': {
      pres: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
      pc: ["ai vécu", "as vécu", "a vécu", "avons vécu", "avez vécu", "ont vécu"],
      imp: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
      fut: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
      cond: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"],
      pp: "vécu", aux: "avoir", ger: "en vivant", impfStem: "viv", futStem: "vivr"
    },
    'suivre': {
      pres: ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
      pc: ["ai suivi", "as suivi", "a suivi", "avons suivi", "avez suivi", "ont suivi"],
      imp: ["suivais", "suivais", "suivait", "suivions", "suiviez", "suivaient"],
      fut: ["suivrai", "suivras", "suivra", "suivrons", "suivrez", "suivront"],
      cond: ["suivrais", "suivrais", "suivrait", "suivrions", "suivriez", "suivraient"],
      pp: "suivi", aux: "avoir", ger: "en suivant", impfStem: "suiv", futStem: "suivr"
    },
    'dormir': {
      pres: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
      pc: ["ai dormi", "as dormi", "a dormi", "avons dormi", "avez dormi", "ont dormi"],
      imp: ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
      fut: ["dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"],
      cond: ["dormirais", "dormirais", "dormirait", "dormirions", "dormiriez", "dormiraient"],
      pp: "dormi", aux: "avoir", ger: "en dormant", impfStem: "dorm", futStem: "dormir"
    },
    'partir': {
      pres: ["pars", "pars", "part", "partons", "partez", "partent"],
      pc: ["suis parti(e)", "es parti(e)", "est parti(e)", "sommes parti(e)s", "êtes parti(e)(s)", "sont parti(e)s"],
      imp: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
      fut: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
      cond: ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"],
      pp: "parti", aux: "être", ger: "en partant", impfStem: "part", futStem: "partir"
    },
    'sortir': {
      pres: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
      pc: ["suis sorti(e)", "es sorti(e)", "est sorti(e)", "sommes sorti(e)s", "êtes sorti(e)(s)", "sont sorti(e)s"],
      imp: ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
      fut: ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"],
      cond: ["sortirais", "sortirais", "sortirait", "sortirions", "sortiriez", "sortiraient"],
      pp: "sorti", aux: "être", ger: "en sortant", impfStem: "sort", futStem: "sortir"
    },
    'servir': {
      pres: ["sers", "sers", "sert", "servons", "servez", "servent"],
      pc: ["ai servi", "as servi", "a servi", "avons servi", "avez servi", "ont servi"],
      imp: ["servais", "servais", "servait", "servions", "serviez", "servaient"],
      fut: ["servirai", "serviras", "servira", "servirons", "servirez", "serviront"],
      cond: ["servirais", "servirais", "servirait", "servirions", "serviriez", "serviraient"],
      pp: "servi", aux: "avoir", ger: "en servant", impfStem: "serv", futStem: "servir"
    },
    'courir': {
      pres: ["cours", "cours", "court", "courons", "courez", "courent"],
      pc: ["ai couru", "as couru", "a couru", "avons couru", "avez couru", "ont couru"],
      imp: ["courais", "courais", "courait", "courions", "couriez", "couraient"],
      fut: ["courrai", "courras", "courra", "courrons", "courrez", "courront"],
      cond: ["courrais", "courrais", "courrait", "courrions", "courriez", "courraient"],
      pp: "couru", aux: "avoir", ger: "en courant", impfStem: "cour", futStem: "courr"
    },
    'mourir': {
      pres: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
      pc: ["suis mort(e)", "es mort(e)", "est mort(e)", "sommes mort(e)s", "êtes mort(e)(s)", "sont mort(e)s"],
      imp: ["mourais", "mourais", "mourait", "mourions", "mouriez", "mouraient"],
      fut: ["mourrai", "mourras", "mourra", "mourrons", "mourrez", "mourront"],
      cond: ["mourrais", "mourrais", "mourrait", "mourrions", "mourriez", "mourraient"],
      pp: "mort", aux: "être", ger: "en mourant", impfStem: "mour", futStem: "mourr"
    },
    'ouvrir': {
      pres: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
      pc: ["ai ouvert", "as ouvert", "a ouvert", "avons ouvert", "avez ouvert", "ont ouvert"],
      imp: ["ouvrais", "ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"],
      fut: ["ouvrirai", "ouvriras", "ouvrira", "ouvrirons", "ouvrirez", "ouvriront"],
      cond: ["ouvrirais", "ouvrirais", "ouvrirait", "ouvririons", "ouvririez", "ouvriraient"],
      pp: "ouvert", aux: "avoir", ger: "en ouvrant", impfStem: "ouvr", futStem: "ouvrir"
    },
    'offrir': {
      pres: ["offre", "offres", "offre", "offrons", "offrez", "offrent"],
      pc: ["ai offert", "as offert", "a offert", "avons offert", "avez offert", "ont offert"],
      imp: ["offrais", "offrais", "offrait", "offrions", "offriez", "offraient"],
      fut: ["offrirai", "offriras", "offrira", "offrirons", "offrirez", "offriront"],
      cond: ["offrirais", "offrirais", "offrirait", "offririons", "offriez", "offriraient"],
      pp: "offert", aux: "avoir", ger: "en offrant", impfStem: "offr", futStem: "offrir"
    },
    'recevoir': {
      pres: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
      pc: ["ai reçu", "as reçu", "a reçu", "avons reçu", "avez reçu", "ont reçu"],
      imp: ["recevais", "recevais", "recevait", "recevions", "receviez", "recevaient"],
      fut: ["recevrai", "recevras", "recevra", "recevrons", "recevrez", "recevront"],
      cond: ["recevrais", "recevrais", "recevrait", "recevrions", "recevriez", "recevraient"],
      pp: "reçu", aux: "avoir", ger: "en recevant", impfStem: "recev", futStem: "recevr"
    },
    'craindre': {
      pres: ["crains", "crains", "craint", "craignons", "craignez", "craignent"],
      pc: ["ai craint", "as craint", "a craint", "avons craint", "avez craint", "ont craint"],
      imp: ["craignais", "craignais", "craignait", "craignions", "craigniez", "craignaient"],
      fut: ["craindrai", "craindras", "craindra", "craindrons", "craindrez", "craindront"],
      cond: ["craindrais", "craindrais", "craindrait", "craindrions", "craindriez", "craindraient"],
      pp: "craint", aux: "avoir", ger: "en craignant", impfStem: "craign", futStem: "craindr"
    },
    'peindre': {
      pres: ["peins", "peins", "peint", "peignons", "peignez", "peignent"],
      pc: ["ai peint", "as peint", "a peint", "avons peint", "avez peint", "ont peint"],
      imp: ["peignais", "peignais", "peignait", "peignions", "peigniez", "peignaient"],
      fut: ["peindrai", "peindras", "peindra", "peindrons", "peindrez", "peindront"],
      cond: ["peindrais", "peindrais", "peindrait", "peindrions", "peindriez", "peindraient"],
      pp: "peint", aux: "avoir", ger: "en peignant", impfStem: "peign", futStem: "peindr"
    },
    'joindre': {
      pres: ["joins", "joins", "joint", "joignons", "joignez", "joignent"],
      pc: ["ai joint", "as joint", "a joint", "avons joint", "avez joint", "ont joint"],
      imp: ["joignais", "joignais", "joignait", "joignions", "joigniez", "joignaient"],
      fut: ["joindrai", "joindras", "joindra", "joindrons", "joindrez", "joindront"],
      cond: ["joindrais", "joindrais", "joindrait", "joindrions", "joindriez", "joindraient"],
      pp: "joint", aux: "avoir", ger: "en joignant", impfStem: "joign", futStem: "joindr"
    },
    'rire': {
      pres: ["ris", "ris", "rit", "rions", "riez", "rient"],
      pc: ["ai ri", "as ri", "a ri", "avons ri", "avez ri", "ont ri"],
      imp: ["riais", "riais", "riait", "riions", "riiez", "riaient"],
      fut: ["rirai", "riras", "rira", "rirons", "rirez", "riront"],
      cond: ["rirais", "rirais", "rirait", "ririons", "ririez", "riraient"],
      pp: "ri", aux: "avoir", ger: "en riant", impfStem: "ri", futStem: "rir"
    },
    'asseoir': {
      pres: ["m'assieds", "t'assieds", "s'assied", "nous asseyons", "vous asseyez", "s'asseyent"],
      pc: ["me suis assis(e)", "t'es assis(e)", "s'est assis(e)", "nous sommes assis(e)s", "vous êtes assis(e)(s)", "se sont assis(e)s"],
      imp: ["m'asseyais", "t'asseyais", "s'asseyait", "nous asseyions", "vous asseyiez", "s'asseyaient"],
      fut: ["m'assiérai", "t'assiéras", "s'assiéra", "nous assiérons", "vous assiérez", "s'assiéront"],
      cond: ["m'assiérais", "t'assiérais", "s'assiérait", "nous assiérions", "vous assiériez", "s'assiéraient"],
      pp: "assis", aux: "être", ger: "en s'asseyant", impfStem: "assey", futStem: "assiér"
    }
  };

  // Derivative map (e.g. comprendre -> prendre, promettre -> mettre)
  const derivatives = [
    { pfx: "com", base: "prendre" }, { pfx: "ap", base: "prendre" }, { pfx: "sur", base: "prendre" },
    { pfx: "de", base: "venir" }, { pfx: "re", base: "venir" }, { pfx: "sou", base: "venir" },
    { pfx: "pro", base: "mettre" }, { pfx: "per", base: "mettre" }, { pfx: "ad", base: "mettre" },
    { pfx: "trans", base: "mettre" }, { pfx: "sou", base: "mettre" }, { pfx: "re", base: "mettre" },
    { pfx: "re", base: "dire" }, { pfx: "pré", base: "dire" }, { pfx: "con", base: "dire" },
    { pfx: "dé", base: "couvrir" }, { pfx: "re", base: "couvrir" }, { pfx: "souf", base: "frir" },
    { pfx: "sou", base: "rire" }, { pfx: "re", base: "joindre" }, { pfx: "re", base: "peindre" },
    { pfx: "sur", base: "vivre" }, { pfx: "pour", base: "suivre" }, { pfx: "re", base: "partir" },
    { pfx: "re", base: "sortir" }, { pfx: "en", base: "dormir" }, { pfx: "re", base: "connaître" }
  ];

  function getReflexivePronoun(pronIndex, nextWord) {
    const vw = isVowel(nextWord);
    switch (pronIndex) {
      case 0: return vw ? "m'" : "me ";
      case 1: return vw ? "t'" : "te ";
      case 2: return vw ? "s'" : "se ";
      case 3: return "nous ";
      case 4: return "vous ";
      case 5: return vw ? "s'" : "se ";
    }
  }

  function conjugate(infinitive) {
    const raw = (infinitive || '').trim().toLowerCase();
    if (!raw) return null;

    let isReflex = false;
    let verb = raw;
    if (raw.startsWith("se ")) {
      isReflex = true;
      verb = raw.slice(3).trim();
    } else if (raw.startsWith("s'")) {
      isReflex = true;
      verb = raw.slice(2).trim();
    }

    let pres = [], pc = [], imp = [], fut = [], cond = [], fp = [], pr = [];
    let subj = [], impfSubj = [], impv = [], ps = [];
    let pp = '', auxType = (isReflex || vandertramp.has(verb)) ? 'être' : 'avoir';
    let ger = '';

    // 0. CHECK MASTER DATABASE (window.__FRENCH_VERBS_DB__ or root.__FRENCH_VERBS_DB__)
    const db = (typeof window !== 'undefined' && window.__FRENCH_VERBS_DB__) ||
               (typeof global !== 'undefined' && global.__FRENCH_VERBS_DB__) ||
               (typeof root !== 'undefined' && root.__FRENCH_VERBS_DB__) || null;
    const dbEntry = db ? db[verb] : null;

    if (dbEntry && dbEntry.P && dbEntry.P.length === 6) {
      pres = [...dbEntry.P];
      if (dbEntry.I && dbEntry.I.length === 6) imp = [...dbEntry.I];
      if (dbEntry.F && dbEntry.F.length === 6) fut = [...dbEntry.F];
      if (dbEntry.C && dbEntry.C.length === 6) cond = [...dbEntry.C];
      if (dbEntry.S && dbEntry.S.length === 6) subj = [...dbEntry.S];
      if (dbEntry.T && dbEntry.T.length === 6) impfSubj = [...dbEntry.T];
      if (dbEntry.J && dbEntry.J.length === 6) ps = [...dbEntry.J];
      if (dbEntry.Y && dbEntry.Y.length >= 5) impv = [dbEntry.Y[1], dbEntry.Y[3], dbEntry.Y[4]];
      if (dbEntry.K && dbEntry.K.length > 0) pp = dbEntry.K[0];
      if (dbEntry.G && dbEntry.G.length > 0) ger = 'en ' + dbEntry.G[0];
    } else if (irregularVerbs[verb]) {
      const ir = irregularVerbs[verb];
      pres = [...ir.pres];
      imp = [...ir.imp];
      fut = [...ir.fut];
      cond = [...ir.cond];
      pp = ir.pp;
      ger = ir.ger;
    } else {
      // Check derivatives
      let matchedDeriv = null;
      for (const d of derivatives) {
        if (verb === d.pfx + d.base) {
          matchedDeriv = d;
          break;
        }
      }

      if (matchedDeriv && irregularVerbs[matchedDeriv.base]) {
        const baseIr = irregularVerbs[matchedDeriv.base];
        const pfx = matchedDeriv.pfx;
        pres = baseIr.pres.map(f => pfx + f);
        imp = baseIr.imp.map(f => pfx + f);
        fut = baseIr.fut.map(f => pfx + f);
        cond = baseIr.cond.map(f => pfx + f);
        pp = pfx + baseIr.pp;
        ger = `en ${pfx}${baseIr.ger.replace(/^en\s+/, '')}`;
      } else if (verb.endsWith('er')) {
        // -ER STEM-CHANGING & REGULAR VERB RULES
        const stem = verb.slice(0, -2);
        pp = stem + 'é';
        ger = 'en ' + stem + 'ant';

        // 1. -GER verbs (manger, nager, voyager) -> nous mangeons, imp mangeais...
        if (stem.endsWith('g')) {
          pres = [stem + "e", stem + "es", stem + "e", stem + "eons", stem + "ez", stem + "ent"];
          imp = [stem + "eais", stem + "eais", stem + "eait", stem + "ions", stem + "iez", stem + "eaient"];
          ger = 'en ' + stem + 'eant';
        }
        // 2. -CER verbs (commencer, lancer) -> nous commençons, imp commençais...
        else if (stem.endsWith('c')) {
          const cStem = stem.slice(0, -1) + 'ç';
          pres = [stem + "e", stem + "es", stem + "e", cStem + "ons", stem + "ez", stem + "ent"];
          imp = [cStem + "ais", cStem + "ais", cStem + "ait", stem + "ions", stem + "iez", cStem + "aient"];
          ger = 'en ' + cStem + 'ant';
        }
        // 3. -ELER / -ETER verbs (appeler, jeter) -> j'appelle, ils appellent, fut appellerai
        else if (verb === 'appeler' || verb.endsWith('appeler') || verb === 'rappeler') {
          const doubleStem = stem + 'l';
          pres = [doubleStem + "e", doubleStem + "es", doubleStem + "e", stem + "ons", stem + "ez", doubleStem + "ent"];
          imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
          fut = [doubleStem + "erai", doubleStem + "eras", doubleStem + "era", doubleStem + "erons", doubleStem + "erez", doubleStem + "eront"];
          cond = [doubleStem + "erais", doubleStem + "erais", doubleStem + "erait", doubleStem + "erions", doubleStem + "eriez", doubleStem + "eraient"];
        }
        else if (verb === 'jeter' || verb.endsWith('jeter') || verb === 'rejeter') {
          const doubleStem = stem + 't';
          pres = [doubleStem + "e", doubleStem + "es", doubleStem + "e", stem + "ons", stem + "ez", doubleStem + "ent"];
          imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
          fut = [doubleStem + "erai", doubleStem + "eras", doubleStem + "era", doubleStem + "erons", doubleStem + "erez", doubleStem + "eront"];
          cond = [doubleStem + "erais", doubleStem + "erais", doubleStem + "erait", doubleStem + "erions", doubleStem + "eriez", doubleStem + "eraient"];
        }
        // 4. -EYER / -AYER / -OYER / -UYER verbs (payer, envoyer, nettoyer, essuyer)
        else if (stem.endsWith('y')) {
          const iStem = stem.slice(0, -1) + 'i';
          if (verb === 'envoyer') {
            pres = [iStem + "e", iStem + "es", iStem + "e", stem + "ons", stem + "ez", iStem + "ent"];
            imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
            fut = ["enverrai", "enverras", "enverra", "enverrons", "enverrez", "enverront"];
            cond = ["enverrais", "enverrais", "enverrait", "enverrions", "enverriez", "enverraient"];
          } else {
            pres = [iStem + "e", iStem + "es", iStem + "e", stem + "ons", stem + "ez", iStem + "ent"];
            imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
            fut = [iStem + "erai", iStem + "eras", iStem + "era", iStem + "erons", iStem + "erez", iStem + "eront"];
            cond = [iStem + "erais", iStem + "erais", iStem + "erait", iStem + "erions", iStem + "eriez", iStem + "eraient"];
          }
        }
        // 5. e_er / é_er accent change verbs (acheter, préférer, lever, répéter)
        else if (/e[b-df-hj-np-tv-z]$/.test(stem) || /é[b-df-hj-np-tv-z]$/.test(stem)) {
          const graveStem = stem.replace(/e([b-df-hj-np-tv-z])$/, 'è$1').replace(/é([b-df-hj-np-tv-z])$/, 'è$1');
          pres = [graveStem + "e", graveStem + "es", graveStem + "e", stem + "ons", stem + "ez", graveStem + "ent"];
          imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
          if (stem.includes('e') && !stem.includes('é')) {
            fut = [graveStem + "erai", graveStem + "eras", graveStem + "era", graveStem + "erons", graveStem + "erez", graveStem + "eront"];
            cond = [graveStem + "erais", graveStem + "erais", graveStem + "erait", graveStem + "erions", graveStem + "eriez", graveStem + "eraient"];
          } else {
            fut = [verb + "ai", verb + "as", verb + "a", verb + "ons", verb + "ez", verb + "ont"];
            cond = [verb + "ais", verb + "ais", verb + "ait", verb + "ions", verb + "iez", verb + "aient"];
          }
        }
        // 6. Regular -ER verbs
        else {
          pres = [stem + "e", stem + "es", stem + "e", stem + "ons", stem + "ez", stem + "ent"];
          imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
          fut = [verb + "ai", verb + "as", verb + "a", verb + "ons", verb + "ez", verb + "ont"];
          cond = [verb + "ais", verb + "ais", verb + "ait", verb + "ions", verb + "iez", verb + "aient"];
        }

        if (!fut || !fut.length) {
          fut = [verb + "ai", verb + "as", verb + "a", verb + "ons", verb + "ez", verb + "ont"];
          cond = [verb + "ais", verb + "ais", verb + "ait", verb + "ions", verb + "iez", verb + "aient"];
        }
      } else if (verb.endsWith('ir')) {
        // -IR REGULAR & TRICKY STEMS
        const stem = verb.slice(0, -2);
        pp = stem + 'i';
        pres = [stem + "is", stem + "is", stem + "it", stem + "issons", stem + "issez", stem + "issent"];
        imp = [stem + "issais", stem + "issais", stem + "issait", stem + "issions", stem + "issiez", stem + "issaient"];
        fut = [verb + "ai", verb + "as", verb + "a", verb + "ons", verb + "ez", verb + "ont"];
        cond = [verb + "ais", verb + "ais", verb + "ait", verb + "ions", verb + "iez", verb + "aient"];
        ger = 'en ' + stem + 'issant';
      } else if (verb.endsWith('re')) {
        // -RE REGULAR & EXTENDED
        const stem = verb.slice(0, -2);
        pp = stem + 'u';
        pres = [stem + "s", stem + "s", stem.endsWith('d') || stem.endsWith('t') ? stem : stem + "t", stem + "ons", stem + "ez", stem + "ent"];
        imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
        const fstem = verb.slice(0, -1);
        fut = [fstem + "ai", fstem + "as", fstem + "a", fstem + "ons", fstem + "ez", fstem + "ont"];
        cond = [fstem + "ais", fstem + "ais", fstem + "ait", fstem + "ions", fstem + "iez", fstem + "aient"];
        ger = 'en ' + stem + 'ant';
      } else {
        // Fallback default
        const stem = verb;
        pres = [stem, stem, stem, stem, stem, stem];
        imp = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
        fut = [stem + "ai", stem + "as", stem + "a", stem + "ons", stem + "ez", stem + "ont"];
        cond = [stem + "ais", stem + "ais", stem + "ait", stem + "ions", stem + "iez", stem + "aient"];
        pp = stem;
        ger = 'en ' + stem;
      }
    }

    // Build Passé Composé with correct Auxiliary & Agreement
    const avoirAux = ["ai", "as", "a", "avons", "avez", "ont"];
    const etreAux = ["suis", "es", "est", "sommes", "êtes", "sont"];

    pc = [];
    for (let i = 0; i < 6; i++) {
      if (auxType === 'être') {
        const ag = (i < 3) ? "(e)" : "(e)s";
        const aux = etreAux[i];
        if (isReflex) {
          const rp = getReflexivePronoun(i, aux);
          pc.push(`${rp.trim()} ${aux} ${pp}${ag}`);
        } else {
          pc.push(`${aux} ${pp}${ag}`);
        }
      } else {
        const aux = avoirAux[i];
        if (isReflex) {
          const rp = getReflexivePronoun(i, aux);
          pc.push(`${rp.trim()} ${aux} ${pp}`);
        } else {
          pc.push(`${aux} ${pp}`);
        }
      }
    }

    // Build Futur Proche & Passé Récent
    const aller_pres = ["vais", "vas", "va", "allons", "allez", "vont"];
    const venir_pres = ["viens", "viens", "vient", "venons", "venez", "viennent"];

    fp = [];
    pr = [];
    for (let i = 0; i < 6; i++) {
      if (isReflex) {
        const rp = getReflexivePronoun(i, verb);
        fp.push(`${aller_pres[i]} ${rp.trim()} ${verb}`);
        const de = isVowel(rp) ? "d'" : "de ";
        pr.push(`${venir_pres[i]} ${de}${rp.trim()} ${verb}`);
      } else {
        fp.push(`${aller_pres[i]} ${verb}`);
        const de = isVowel(verb) ? "d'" : "de ";
        pr.push(`${venir_pres[i]} ${de}${verb}`);
      }
    }

    // If reflexive, wrap present, imp, fut, cond with reflexive pronouns
    if (isReflex) {
      for (let i = 0; i < 6; i++) {
        const rpPres = getReflexivePronoun(i, pres[i]);
        pres[i] = `${rpPres.trim()} ${pres[i]}`;

        const rpImp = getReflexivePronoun(i, imp[i]);
        imp[i] = `${rpImp.trim()} ${imp[i]}`;

        const rpFut = getReflexivePronoun(i, fut[i]);
        fut[i] = `${rpFut.trim()} ${fut[i]}`;

        const rpCond = getReflexivePronoun(i, cond[i]);
        cond[i] = `${rpCond.trim()} ${cond[i]}`;
      }
      ger = `en se ${ger.replace(/^en\s+/, '')}`;
    }

    // Ensure subj / impv have fallback if database wasn't used or lacked them
    if (!subj.length && pres.length === 6) {
      subj = [pres[0], pres[1], pres[2], (imp[3] || pres[3]), (imp[4] || pres[4]), pres[5]];
    }
    if (!impv.length && pres.length === 6) {
      impv = [pres[1].replace(/s$/, ''), pres[3], pres[4]];
    }

    return {
      infinitive: raw,
      baseVerb: verb,
      isReflexive: isReflex,
      auxiliary: auxType,
      pastParticiple: pp,
      gerund: ger,
      pres,
      pc,
      imp,
      fut,
      cond,
      subj,
      impfSubj,
      impv,
      ps,
      fp,
      pr
    };
  }

  return {
    conjugate,
    irregularVerbs,
    vandertramp,
    isVowel,
    elideJe
  };
}));
