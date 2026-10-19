#!/usr/bin/env node
// Gera vitrine.html: um arquivo único com todos os cardápios de exemplo e uma barra para trocar de segmento.
// As fotos continuam nas pastas demo-*/img, então mantenha a vitrine junto dessas pastas.
// Uso: node ferramentas/gerar-vitrine.js   (sem Node: powershell -File ferramentas/gerar-vitrine.ps1)
const fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ler = (f) => fs.readFileSync(path.join(raiz, f), "utf8");

const demos = [
  ["hamburgueria", "🍔 Hamburgueria"],
  ["pizzaria", "🍕 Pizzaria"],
  ["adega", "🍾 Adega"],
  ["doceria", "🧁 Doceria e açaí"]
];
const dados = demos.map(([k]) => ler(`demo-${k}/dados.js`)
  .replace("window.CARDAPIO =", `DEMOS["${k}"] =`)
  .replace(/"img\//g, `"demo-${k}/img/`)).join("\n");
const botoes = demos.map(([k, n]) => `<button type="button" data-demo="${k}" aria-pressed="false">${n}</button>`).join("\n    ");

// funções no lugar do texto: evita que "$&" e parecidos dentro do código sejam interpretados
const html = ler("ferramentas/vitrine-modelo.html")
  .replace("/*CSS*/", () => ler("assets/style.css"))
  .replace("<!--BOTOES-->", () => botoes)
  .replace("/*DADOS*/", () => dados)
  .replace("/*APP*/", () => ler("assets/app.js"));
fs.writeFileSync(path.join(raiz, "vitrine.html"), html);
console.log("vitrine.html gerado (" + Math.round(html.length / 1024) + " KB)");
