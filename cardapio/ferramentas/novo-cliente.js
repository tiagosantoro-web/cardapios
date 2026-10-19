#!/usr/bin/env node
// Cria a pasta de um novo cliente a partir do modelo.
// Uso: node ferramentas/novo-cliente.js nome-do-cliente
const fs = require("fs"), path = require("path");
const slug = (process.argv[2] || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
if (!slug) { console.log("Uso: node ferramentas/novo-cliente.js nome-do-cliente"); process.exit(1); }
const raiz = path.join(__dirname, ".."), destino = path.join(raiz, slug);
if (fs.existsSync(destino)) { console.log("Já existe: " + slug); process.exit(1); }
fs.mkdirSync(path.join(destino, "img"), { recursive: true });
for (const f of ["index.html", "dados.js"]) fs.copyFileSync(path.join(raiz, "modelo", f), path.join(destino, f));
console.log(`Pronto! Edite ${slug}/dados.js e coloque as fotos em ${slug}/img/`);
