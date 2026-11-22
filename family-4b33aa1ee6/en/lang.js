// English edition. Everything the game shows or speaks.
(function (G) {
  const U = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const T = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  G.LG = {
    code: "en", lang: "en", dir: "ltr", title: "ABC Kids", sub: "Letters · Numbers · Colors", voice: "en-US-AnaNeural", rate: "-10%", ttsLang: "en-US", store: "abckids_en",
    famPhoto: "📷 Your photo", famVoice: "🎤 Your voice", prev: "←", next: "→",
    topics: ["A B C", "1 2 3", "🎨 Colors"], nav: ["Learn", "Write", "Play", "Pictures"],
    noVoice: "No English voice on this device — the recorded sounds still work",
    zip: "⚠️ Unzip the file first (Extract all), then open index.html — otherwise pictures and sounds won't work",
    clear: "Clear", check: "Check", nextBtn: "Next", listen: "🔊 Listen", writeIt: "Write it ✍️", write: "Write the ",
    great: "Great job!", bravo: "Well done!", retry: "Try again", congrats: "Congratulations! You finished ",
    greatMsg: "Great! ⭐", moreMsg: "Finish the letter 💪", insideMsg: "Stay inside the letter 🙂",
    sets: { h: { n: "letter", all: "all the letters", unit: "letters", pic: "Which letter does it start with?" },
            n: { n: "number", all: "all the numbers", unit: "numbers", pic: "How many?" },
            c: { n: "color", all: "all the colors", unit: "colors", pic: "What color is it?" } },
    formLabels: ["uppercase", "lowercase"],
    forms: c => [c, c.toLowerCase()],
    num: k => k === 100 ? "one hundred" : k < 20 ? U[k] : T[k / 10 | 0] + (k % 10 ? "-" + U[k % 10] : ""),
    line: x => x[1] + " is for " + x[2],
    ok: x => x[2] + " starts with " + x[1],
    q: (k, n) => k === "c" ? "Where is " + n + "?" : "Where is the " + (k === "h" ? "letter " : "number ") + n + "?",
    letters: [["A","A","apple","🍎","1f34e"],["B","B","bee","🐝","1f41d"],["C","C","cat","🐱","1f431"],["D","D","dog","🐕","1f415"],["E","E","eagle","🦅","1f985"],["F","F","fox","🦊","1f98a"],["G","G","grapes","🍇","1f347"],["H","H","horse","🐎","1f40e"],["I","I","ice cream","🍨","1f368"],["J","J","jellyfish","🪼","1fabc"],["K","K","kangaroo","🦘","1f998"],["L","L","lion","🦁","1f981"],["M","M","monkey","🐒","1f412"],["N","N","nose","👃","1f443"],["O","O","octopus","🐙","1f419"],["P","P","penguin","🐧","1f427"],["Q","Q","queen","👑","1f451"],["R","R","rocket","🚀","1f680"],["S","S","sun","🌞","1f31e"],["T","T","turtle","🐢","1f422"],["U","U","umbrella","☂️","2602_fe0f"],["V","V","volcano","🌋","1f30b"],["W","W","whale","🐳","1f433"],["X","X","xylophone","🎶","1f3b6"],["Y","Y","yo-yo","🪀",""],["Z","Z","zebra","🦓",""]],
    colors: [["#e53935","red","apple","🍎","1f34e"],["#1e88e5","blue","wave","🌊","1f30a"],["#fdd835","yellow","lemon","🍋","1f34b"],["#43a047","green","frog","🐸","1f438"],["#fb8c00","orange","fox","🦊","1f98a"],["#8e24aa","purple","grapes","🍇","1f347"],["#f06292","pink","flower","🌷","1f337"],["#6d4c41","brown","bear","🐻","1f43b"],["#212121","black","bat","🦇","1f987"],["#ffffff","white","cloud","☁️","2601_fe0f"]],
  };
})(typeof window !== "undefined" ? window : globalThis);

;(function(C){const n=C.name;LG.base={title:LG.title,great:LG.great,bravo:LG.bravo,congrats:LG.congrats};LG.kid=n;LG.family=true;LG.multi=C.multi||null;LG.title+=n?' · '+n:'';LG.store+='_'+n;for(const k of ['great','bravo','congrats'])LG[k]=n?n+(LG.sep||', ')+LG[k]:LG[k];LG.letters.forEach(x=>{const p=C.photos[x[0]];if(p){x[2]=p[0];x[5]='<img src="'+p[1]+'" alt="" style="width:1.6em;height:1.6em;object-fit:cover;border-radius:30%;vertical-align:middle">'}})})({"name": "", "photos": {}, "multi": ["ar", "en", "es", "fr"]});
