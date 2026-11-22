// Shared game data built from LG (lang.js). No DOM: node also loads it (build_variant.py) to list every spoken phrase.
// Item = [glyph, name, word, fallbackEmoji, animCode, customHtml]
(function (G) {
  const LG = G.LG;
  const drawN = k => {
    const t = k / 10 | 0, o = k % 10;
    return '<span class="cnt">' + (t ? '<span class="tens">' + Array(t).fill('<span class="ten">' + "<i></i>".repeat(10) + "</span>").join("") + "</span>" : "") +
      (o ? '<span class="ones">' + Array(o).fill('<img src="anim/1f34e.webp" alt="" onerror="this.outerHTML=&quot;🍎&quot;">').join("") + "</span>" : "") + "</span>";
  };
  const N = Array.from({ length: 100 }, (_, j) => { const k = j + 1; return [String(k), LG.num(k), "", "", "", drawN(k)]; });
  const C = LG.colors.map(x => [`<span class="dot" style="background:${x[0]}"></span>`, ...x.slice(1)]);
  const SETS = { h: { L: LG.letters, ...LG.sets.h }, n: { L: N, ...LG.sets.n }, c: { L: C, ...LG.sets.c } };
  // spoken: card open / picture-game success / question
  const line = (k, x) => k === "n" ? x[1] : LG.line(x);
  const okLine = (k, x) => k === "n" ? x[1] : LG.ok(x);
  const q = (k, i) => LG.q(k, SETS[k].L[i][1]);
  function phrases() {
    const S = new Set([LG.great, LG.bravo, LG.retry]);
    for (const k of ["h", "n", "c"]) {
      S.add(LG.congrats + SETS[k].all); S.add(SETS[k].pic);
      SETS[k].L.forEach((x, i) => { S.add(line(k, x)); S.add(okLine(k, x)); S.add(q(k, i)); if (k !== "n") S.add(x[2]); });
    }
    return [...S];
  }
  G.CORE = { SETS, line, okLine, q, phrases };
})(typeof window !== "undefined" ? window : globalThis);
