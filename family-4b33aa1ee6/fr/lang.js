// Édition française. Tout ce que le jeu affiche ou dit.
(function (G) {
  const U = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  const T = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
  const num = k => {
    if (k === 100) return "cent"; if (k < 20) return U[k];
    const t = k / 10 | 0, o = k % 10;
    if (t === 7 || t === 9) return T[t] + (k === 71 ? " et " : "-") + U[10 + o];
    if (o === 0) return t === 8 ? "quatre-vingts" : T[t];
    return T[t] + (o === 1 && t < 8 ? " et un" : "-" + U[o]);
  };
  G.LG = {
    code: "fr", lang: "fr", dir: "ltr", title: "ABC Petits", sub: "Lettres · Nombres · Couleurs", voice: "fr-FR-DeniseNeural", rate: "-15%", ttsLang: "fr-FR", store: "abckids_fr",
    famPhoto: "📷 Ta photo", famVoice: "🎤 Ta voix", prev: "←", next: "→",
    topics: ["A B C", "1 2 3", "🎨 Couleurs"], nav: ["Apprendre", "Écrire", "Jouer", "Images"],
    noVoice: "Pas de voix française sur cet appareil — les sons enregistrés fonctionnent quand même",
    zip: "⚠️ Décompresse d'abord le fichier (Extraire tout), puis ouvre index.html — sinon les images et les sons ne marchent pas",
    clear: "Effacer", check: "Vérifier", nextBtn: "Suivant", listen: "🔊 Écoute", writeIt: "Écris-la ✍️", write: "Écris ",
    great: "Bravo !", bravo: "Très bien !", retry: "Essaie encore", congrats: "Félicitations ! Tu as fini ",
    greatMsg: "Bravo ! ⭐", moreMsg: "Termine la lettre 💪", insideMsg: "Reste dans la lettre 🙂",
    sets: { h: { n: "la lettre", all: "toutes les lettres", unit: "lettres", pic: "Par quelle lettre ça commence ?" },
            n: { n: "le nombre", all: "tous les nombres", unit: "nombres", pic: "Combien y en a-t-il ?" },
            c: { n: "la couleur", all: "toutes les couleurs", unit: "couleurs", pic: "De quelle couleur est-ce ?" } },
    formLabels: ["majuscule", "minuscule"],
    forms: c => [c, c.toLowerCase()],
    num,
    line: x => x[1] + " comme " + x[2],
    ok: x => x[2] + " commence par " + x[1],
    q: (k, n) => "Où est " + (k === "h" ? "la lettre " : k === "n" ? "le nombre " : "la couleur ") + n + " ?",
    letters: [["A","a","abeille","🐝","1f41d"],["B","bé","baleine","🐳","1f433"],["C","cé","chat","🐱","1f431"],["D","dé","dauphin","🐬","1f42c"],["E","e","étoile","⭐","2b50"],["F","effe","fromage","🧀","1f9c0"],["G","gé","grenouille","🐸","1f438"],["H","hache","hérisson","🦔",""],["I","i","iguane","🦎","1f98e"],["J","ji","jouet","🧸",""],["K","ka","kiwi","🥝","1f95d"],["L","elle","lion","🦁","1f981"],["M","emme","main","✋","270b"],["N","enne","nuage","☁️","2601_fe0f"],["O","o","ours","🐻","1f43b"],["P","pé","pingouin","🐧","1f427"],["Q","qu","quille","🎳",""],["R","erre","renard","🦊","1f98a"],["S","esse","soleil","🌞","1f31e"],["T","té","tortue","🐢","1f422"],["U","u","ukulélé","🪕",""],["V","vé","vache","🐮","1f42e"],["W","double vé","wagon","🚃",""],["X","ixe","xylophone","🎶","1f3b6"],["Y","i grec","yaourt","🥛",""],["Z","zède","zèbre","🦓",""]],
    colors: [["#e53935","rouge","pomme","🍎","1f34e"],["#1e88e5","bleu","vague","🌊","1f30a"],["#fdd835","jaune","citron","🍋","1f34b"],["#43a047","vert","grenouille","🐸","1f438"],["#fb8c00","orange","renard","🦊","1f98a"],["#8e24aa","violet","raisin","🍇","1f347"],["#f06292","rose","fleur","🌷","1f337"],["#6d4c41","marron","ours","🐻","1f43b"],["#212121","noir","chauve-souris","🦇","1f987"],["#ffffff","blanc","nuage","☁️","2601_fe0f"]],
  };
})(typeof window !== "undefined" ? window : globalThis);

;(function(C){const n=C.name;LG.base={title:LG.title,great:LG.great,bravo:LG.bravo,congrats:LG.congrats};LG.kid=n;LG.family=true;LG.multi=C.multi||null;LG.title+=n?' · '+n:'';LG.store+='_'+n;for(const k of ['great','bravo','congrats'])LG[k]=n?n+(LG.sep||', ')+LG[k]:LG[k];LG.letters.forEach(x=>{const p=C.photos[x[0]];if(p){x[2]=p[0];x[5]='<img src="'+p[1]+'" alt="" style="width:1.6em;height:1.6em;object-fit:cover;border-radius:30%;vertical-align:middle">'}})})({"name": "", "photos": {}, "multi": ["ar", "en", "es", "fr"]});
