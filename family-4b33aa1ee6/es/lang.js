// Edición en español. Todo lo que el juego muestra o dice.
(function (G) {
  const U = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve",
    "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  const T = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  G.LG = {
    code: "es", lang: "es", dir: "ltr", title: "ABC Peques", sub: "Letras · Números · Colores", voice: "es-ES-ElviraNeural", rate: "-15%", ttsLang: "es-ES", store: "abckids_es",
    famPhoto: "📷 Tu foto", famVoice: "🎤 Tu voz", prev: "←", next: "→",
    topics: ["A B C", "1 2 3", "🎨 Colores"], nav: ["Aprende", "Escribe", "Juega", "Fotos"],
    noVoice: "No hay voz en español en este dispositivo — los sonidos grabados funcionan igual",
    zip: "⚠️ Descomprime el archivo primero (Extraer todo) y abre index.html — si no, no funcionan las imágenes ni los sonidos",
    clear: "Borrar", check: "Comprobar", nextBtn: "Siguiente", listen: "🔊 Escucha", writeIt: "Escríbela ✍️", write: "Escribe ",
    great: "¡Muy bien!", bravo: "¡Genial!", retry: "Inténtalo otra vez", congrats: "¡Enhorabuena! Has terminado ",
    greatMsg: "¡Muy bien! ⭐", moreMsg: "Completa la letra 💪", insideMsg: "Escribe dentro de la letra 🙂",
    sets: { h: { n: "la letra", all: "todas las letras", unit: "letras", pic: "¿Con qué letra empieza?" },
            n: { n: "el número", all: "todos los números", unit: "números", pic: "¿Cuántos hay?" },
            c: { n: "el color", all: "todos los colores", unit: "colores", pic: "¿De qué color es?" } },
    formLabels: ["mayúscula", "minúscula"],
    forms: c => [c, c.toLowerCase()],
    num: k => k === 100 ? "cien" : k < 30 ? U[k] : T[k / 10 | 0] + (k % 10 ? " y " + U[k % 10] : ""),
    line: x => x[1] + ", de " + x[2],
    ok: x => x[2] + " empieza por " + x[1],
    q: (k, n) => "¿Dónde está " + (k === "h" ? "la letra " : k === "n" ? "el número " : "el color ") + n + "?",
    letters: [["A","a","abeja","🐝","1f41d"],["B","be","ballena","🐳","1f433"],["C","ce","conejo","🐇","1f407"],["D","de","delfín","🐬","1f42c"],["E","e","estrella","⭐","2b50"],["F","efe","flor","🌷","1f337"],["G","ge","gato","🐱","1f431"],["H","hache","helado","🍨","1f368"],["I","i","iguana","🦎","1f98e"],["J","jota","jirafa","🦒",""],["K","ka","kiwi","🥝","1f95d"],["L","ele","león","🦁","1f981"],["M","eme","mariposa","🦋","1f98b"],["N","ene","nube","☁️","2601_fe0f"],["Ñ","eñe","ñu","🐂","1f402"],["O","o","oso","🐻","1f43b"],["P","pe","pingüino","🐧","1f427"],["Q","cu","queso","🧀","1f9c0"],["R","erre","rana","🐸","1f438"],["S","ese","sol","🌞","1f31e"],["T","te","tortuga","🐢","1f422"],["U","u","uvas","🍇","1f347"],["V","uve","vaca","🐮","1f42e"],["W","uve doble","wafle","🧇",""],["X","equis","xilófono","🎶","1f3b6"],["Y","ye","yoyó","🪀",""],["Z","zeta","zanahoria","🥕","1f955"]],
    colors: [["#e53935","rojo","manzana","🍎","1f34e"],["#1e88e5","azul","ola","🌊","1f30a"],["#fdd835","amarillo","limón","🍋","1f34b"],["#43a047","verde","rana","🐸","1f438"],["#fb8c00","naranja","zorro","🦊","1f98a"],["#8e24aa","morado","uvas","🍇","1f347"],["#f06292","rosa","flor","🌷","1f337"],["#6d4c41","marrón","oso","🐻","1f43b"],["#212121","negro","murciélago","🦇","1f987"],["#ffffff","blanco","nube","☁️","2601_fe0f"]],
  };
})(typeof window !== "undefined" ? window : globalThis);

;(function(C){const n=C.name;LG.base={title:LG.title,great:LG.great,bravo:LG.bravo,congrats:LG.congrats};LG.kid=n;LG.family=true;LG.multi=C.multi||null;LG.title+=n?' · '+n:'';LG.store+='_'+n;for(const k of ['great','bravo','congrats'])LG[k]=n?n+(LG.sep||', ')+LG[k]:LG[k];LG.letters.forEach(x=>{const p=C.photos[x[0]];if(p){x[2]=p[0];x[5]='<img src="'+p[1]+'" alt="" style="width:1.6em;height:1.6em;object-fit:cover;border-radius:30%;vertical-align:middle">'}})})({"name": "", "photos": {}, "multi": ["ar", "en", "es", "fr"]});
