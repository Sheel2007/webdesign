function randomChoice(list) {
    let len = list.length;
    return list[Math.floor(len * Math.random())];
  }
  function makePhrase() {
    let words1 = [
      "24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win", "front-end",
      "web-based", "pervasive", "smart", "six-sigma", "critical-path", "dynamic"
    ];
    let words2 = [
      "empowered", "value-added", "oriented", "focused", "aligned", "sticky",
      "oriented", "centric", "distributed", "clustered", "branded", "positioned",
      "outside-the-box", "networked", "cooperative", "shared", "targeted",
      "leveraged"
    ];
    let words3 = [
      "process", "solution", "tipping-point", "strategy", "vision", "space",
      "architecture", "core competency", "mindshare", "portal", "vision",
      "paradigm", "mission"
    ];
    document.getElementById("word1").innerHTML = randomChoice(words1);
    document.getElementById("word2").innerHTML = randomChoice(words2);
    document.getElementById("word3").innerHTML = randomChoice(words3);
  }
  function init() {
    makePhrase();
}

window.onload = init;