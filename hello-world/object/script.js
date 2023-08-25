"use strict";

const evList = [
  { name: "サンダース", type: "でんき", weight: 24.5, abilities: "ちくでん" },
  { name: "ブースター", type: "ほのお", weight: 25.0, abilities: "もらいび" },
  { name: "エーフィ", type: "エスパー", weight: 26.5, abilities: "シンクロ" },
  { name: "ブラッキー", type: "あく", weight: 27.0, abilities: "シンクロ" },
  { name: "リーフィア", type: "くさ", weight: 25.5, abilities: "リーフガード" },
  {
    name: "ニンフィア",
    type: "フェアリー",
    weight: 23.5,
    abilities: "メロメロボディ",
  },
  { name: "グレイシア", type: "こおり", weight: 25.9, abilities: "ゆがくれ" },
  { name: "シャワーズ", type: "みず", weight: 29.0, abilities: "ちょすい" },
];

const table = document.querySelector("table");
const tr = document.createElement("tr");
const header = ["名前", "タイプ", "体重", "特技"];

for (const h of header) {
  const th = document.createElement("th");
  th.textContent = h;
  tr.append(th);
}
table.append(tr);

for (const ev of evList) {
  const tr = document.createElement("tr");
  for (const prop in ev) {
    const td = document.createElement("td");
    td.textContent = ev[prop];
    if (prop == "weight") {
      td.textContent += " kg";
    }
    tr.append(td);
  }
  table.append(tr);
}
