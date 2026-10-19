/* Cardápio Digital — modelo-base
   Lê window.CARDAPIO (definido no dados.js de cada cliente) e monta a página.
   Dois jeitos de pedir: delivery/retirada e "Estou no local" (pedido da mesa para o garçom).
   Não é preciso editar este arquivo para criar um novo cardápio. */
(function () {
  "use strict";

  const ICONES = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    mapa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    telefone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    compartilhar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
    qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/></svg>',
    busca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    mais: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    sacola: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    relogio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    talher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M7 3v4M9 3v4M11 3v4"/><path d="M17 21V3c-2.2 1.5-3 4-3 7 0 2 1 3 3 3"/></svg>',
    moto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M8.5 17h6l3-7h-4M14 6h3l1.5 4M5.5 17l3-6h5"/></svg>',
    sino: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
    conta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/></svg>'
  };

  const ROTULOS = {
    "mais-vendido": "Mais vendido", promo: "Promoção", novo: "Novo", vegano: "Vegano", vegetariano: "Vegetariano",
    picante: "Picante", combo: "Combo", gelada: "Gelada", destaque: "Destaque", "sem-gluten": "Sem glúten",
    "serve-2": "Serve 2", "serve-4": "Serve 4", encomenda: "Sob encomenda"
  };
  const DIAS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const DIAS_LONGOS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const DOZE_HORAS = 12 * 60 * 60 * 1000;

  function iniciar() {
  const D = window.CARDAPIO;
  if (!D) { document.getElementById("app").innerHTML = '<p style="padding:24px">Arquivo dados.js não encontrado.</p>'; return; }

  // um #app novo a cada início, para poder trocar de cardápio sem recarregar
  const antigo = document.getElementById("app");
  const raiz = antigo.cloneNode(false);
  antigo.replaceWith(raiz);
  document.body.style.overflow = "";
  document.body.classList.remove("modo-impressao");

  const params = new URLSearchParams(location.search);
  const E = D.entrega || {};
  const bairros = Array.isArray(E.bairros) && E.bairros.length ? E.bairros : null;
  const fazEntrega = E.taxa != null || !!bairros;
  const fazRetirada = E.retirada !== false || !fazEntrega;
  const itens = [];
  const porId = {};
  let sacola = []; // [{ id, qtd, esc: [[grupo, opção], ...], obs }]
  let modo = fazEntrega ? "entrega" : "retirada";
  const cliente = { nome: "", end: "", bairro: "", pag: "", troco: "", obs: "" };
  let rascunho = null; // item sendo montado no painel de produto
  let focoAnterior = null;
  let observador = null;
  let revelador = null;
  let ultimaQtd = 0;
  const semMovimento = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- salão (pedido na mesa) ----------
  const S = D.salao && D.salao.ativo !== false ? D.salao : null;
  const envioSalao = (S && S.envio) || "ambos"; // "whatsapp", "mostrar" ou "ambos"
  const whatsSalao = S ? String(S.whatsapp || D.whatsapp || "").replace(/\D/g, "") : "";
  const usaWhatsSalao = envioSalao !== "mostrar" && !!whatsSalao;
  const usaTelaGarcom = envioSalao !== "whatsapp" || !whatsSalao;
  const mesaUrl = S ? String(params.get("mesa") || "").replace(/[^0-9a-zA-Z-]/g, "").slice(0, 6) : "";
  const mesaFixa = !!mesaUrl;
  let contexto = S && (S.somente || mesaFixa) ? "salao" : "delivery";
  let mesa = mesaUrl;
  let historico = []; // pedidos já feitos nesta visita: [{ hora, itens: [{ qtd, nome, extras, total }], total }]
  let acaoPendente = null; // o que fazer depois de informar a mesa
  let aoConcluirSalao = null; // o que fazer quando o cliente confirma que enviou no WhatsApp
  const conta = { servico: true, pessoas: 1, pag: "" };
  // no salão não existe "na entrega": "Cartão na entrega" vira "Cartão"
  const pagamentosSalao = S ? (S.pagamentos || (D.pagamentos || []).map((p) => p.replace(/\s+na entrega$/i, "")).filter((p, k, a) => a.indexOf(p) === k)) : [];

  // ---------- utilidades ----------
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const real = (v) => Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const num = (v) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));
  const semAcento = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const iniciais = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  const linkWhats = (texto, numero) => "https://wa.me/" + String(numero || D.whatsapp || "").replace(/\D/g, "") + (texto ? "?text=" + encodeURIComponent(texto) : "");
  const horaAgora = () => new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const chaveLocal = "cardapio:" + semAcento(D.nome).replace(/[^a-z0-9]+/g, "-");
  const visivel = (x) => (contexto === "salao" ? !x.somenteDelivery : !x.somenteSalao);

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("visivel");
    clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove("visivel"), 2400);
  }

  // ---------- tema ----------
  // texto legível sobre a cor principal (branco em cores escuras, quase preto em cores claras como amarelo)
  function corSobre(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
    if (!m) return "#ffffff";
    const n = parseInt(m[1], 16);
    const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    const L = 0.2126 * lin(n >> 16) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
    return L > 0.4 ? "#1a1a1a" : "#ffffff";
  }
  function aplicarTema() {
    const t = D.tema || {};
    const r = document.documentElement.style;
    const mapa = { primaria: "--primaria", secundaria: "--secundaria", fundo: "--fundo", superficie: "--superficie", texto: "--texto", textoSuave: "--texto-suave", borda: "--borda" };
    Object.keys(mapa).forEach((k) => (t[k] ? r.setProperty(mapa[k], t[k]) : r.removeProperty(mapa[k])));
    r.setProperty("--sobre-primaria", t.textoSobrePrimaria || corSobre(t.primaria));
    t.fonteTitulo ? r.setProperty("--fonte-titulo", `"${t.fonteTitulo}", system-ui, sans-serif`) : r.removeProperty("--fonte-titulo");
    t.fonteTexto ? r.setProperty("--fonte-texto", `"${t.fonteTexto}", system-ui, sans-serif`) : r.removeProperty("--fonte-texto");
    const fontes = [t.fonteTitulo, t.fonteTexto || "Manrope"].filter(Boolean);
    const link = document.getElementById("fontes") || document.createElement("link");
    link.id = "fontes"; link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?" + fontes.map((f) => "family=" + f.replace(/ /g, "+") + ":wght@400;500;600;700;800").join("&") + "&display=swap";
    document.head.appendChild(link);
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "theme-color"; document.head.appendChild(meta); }
    meta.content = t.fundo || t.primaria || "#ffffff";
    document.title = D.nome + " · Cardápio e pedidos";
    const desc = document.querySelector('meta[name="description"]');
    if (desc && D.slogan) desc.content = D.nome + ": " + D.slogan + ". Veja o cardápio e peça pelo WhatsApp.";
  }

  // ---------- horário de funcionamento ----------
  const minutos = (h) => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
  const horarios = D.horarios || [];
  function turnoAtual(agora) {
    const d = agora.getDay(), m = agora.getHours() * 60 + agora.getMinutes();
    return horarios.find((h) => {
      const abre = minutos(h.abre), fecha = minutos(h.fecha);
      if (fecha > abre) return h.dias.includes(d) && m >= abre && m < fecha;
      // vira a madrugada (ex.: 18:00 às 02:00)
      return (h.dias.includes(d) && m >= abre) || (h.dias.includes((d + 6) % 7) && m < fecha);
    });
  }
  function proximaAbertura(agora) {
    const d = agora.getDay(), m = agora.getHours() * 60 + agora.getMinutes();
    for (let k = 0; k <= 7; k++) {
      const dia = (d + k) % 7;
      const turnos = horarios.filter((h) => h.dias.includes(dia)).sort((a, b) => minutos(a.abre) - minutos(b.abre));
      const t = turnos.find((h) => k > 0 || minutos(h.abre) > m);
      if (t) return (k === 0 ? "hoje" : k === 1 ? "amanhã" : DIAS_LONGOS[dia]) + " às " + t.abre;
    }
    return "";
  }
  function situacao() {
    const agora = new Date(), t = turnoAtual(agora);
    if (t) return { aberto: true, texto: "Aberto agora", detalhe: "até " + t.fecha };
    const p = proximaAbertura(agora);
    return { aberto: false, texto: "Fechado agora", detalhe: p ? "abre " + p : "" };
  }
  function diasTexto(dias) {
    if (dias.length === 7) return "Todos os dias";
    const ordem = [1, 2, 3, 4, 5, 6, 0].filter((d) => dias.includes(d));
    const grupos = [];
    ordem.forEach((d) => {
      const g = grupos[grupos.length - 1];
      if (g && (g[g.length - 1] + 1) % 7 === d && g[g.length - 1] !== 0) g.push(d); else grupos.push([d]);
    });
    return grupos.map((g) => (g.length >= 3 ? DIAS[g[0]] + " a " + DIAS[g[g.length - 1]] : g.map((d) => DIAS[d]).join(", "))).join(", ");
  }

  // ---------- preços e sacola ----------
  const temOpcoes = (i) => Array.isArray(i.opcoes) && i.opcoes.length > 0;
  const opcao = (i, g, o) => i.opcoes[g].itens[o];
  const aPartir = (i) => i.aPartirDe || (temOpcoes(i) && i.opcoes.some((g) => (g.min || 0) > 0 && g.itens.some((o) => o.preco)));
  const precoUnit = (l) => { const i = porId[l.id]; return i.preco + l.esc.reduce((s, [g, o]) => s + (opcao(i, g, o).preco || 0), 0); };
  const chave = (l) => l.id + "|" + l.esc.map((x) => x.join(".")).join(",") + "|" + (l.obs || "");
  const quantidade = () => sacola.reduce((n, l) => n + l.qtd, 0);
  const qtdItem = (id) => sacola.reduce((n, l) => n + (l.id === id ? l.qtd : 0), 0);
  const subtotal = () => sacola.reduce((s, l) => s + l.qtd * precoUnit(l), 0);
  const linhaSimples = (id) => sacola.find((l) => l.id === id && !l.esc.length && !l.obs);
  const extrasLinha = (l) => escolhasTexto(l).concat(l.obs ? ["Obs.: " + l.obs] : []);

  function escolhasTexto(l) {
    const i = porId[l.id], porGrupo = {};
    l.esc.forEach(([g, o]) => { (porGrupo[g] = porGrupo[g] || []).push(opcao(i, g, o).nome); });
    return Object.keys(porGrupo).map((g) => i.opcoes[g].titulo + ": " + porGrupo[g].join(", "));
  }

  // taxa de entrega: null = ainda falta escolher o bairro
  function taxa() {
    if (modo !== "entrega") return 0;
    if (E.gratisAcima && subtotal() >= E.gratisAcima) return 0;
    if (bairros) { const b = bairros.find((x) => x.nome === cliente.bairro); return b ? b.taxa || 0 : null; }
    return E.taxa || 0;
  }

  function carregar() {
    if (D.demo) return;
    try {
      const s = JSON.parse(localStorage.getItem(chaveLocal) || "null");
      if (s) {
        Object.assign(cliente, s.cliente || {});
        if (s.modo === "retirada" ? fazRetirada : fazEntrega) modo = s.modo || modo;
        // só recupera itens que continuam existindo com o mesmo nome e as mesmas opções
        sacola = (s.sacola || []).filter((l) => {
          const i = porId[l.id];
          return i && i.nome === l.nome && !i.esgotado && l.qtd > 0 && Array.isArray(l.esc) &&
            l.esc.every(([g, o]) => i.opcoes && i.opcoes[g] && i.opcoes[g].itens[o]);
        }).map((l) => ({ id: l.id, qtd: l.qtd, esc: l.esc, obs: l.obs || "" }));
      }
      // visita ao salão: vale por 12 horas e só para a mesma mesa
      const m = S && JSON.parse(localStorage.getItem(chaveLocal + ":salao") || "null");
      if (m && Date.now() - m.ts < DOZE_HORAS && (!mesaUrl || m.mesa === mesaUrl)) {
        if (!mesa) mesa = m.mesa || "";
        historico = Array.isArray(m.historico) ? m.historico : [];
        if (!mesaFixa && !S.somente && m.contexto) contexto = m.contexto;
      }
    } catch (err) {}
  }
  function salvar() {
    if (D.demo) return;
    try {
      localStorage.setItem(chaveLocal, JSON.stringify({
        modo, cliente: { nome: cliente.nome, end: cliente.end, bairro: cliente.bairro, pag: cliente.pag },
        sacola: sacola.map((l) => ({ id: l.id, nome: porId[l.id].nome, qtd: l.qtd, esc: l.esc, obs: l.obs }))
      }));
      if (S) localStorage.setItem(chaveLocal + ":salao", JSON.stringify({ ts: Date.now(), mesa, historico, contexto }));
    } catch (err) {}
  }

  // ---------- peças visuais ----------
  function foto(item, classe) {
    const selo = (item.tags || []).find((t) => t === "promo" || t === "mais-vendido");
    const conteudo = item.foto
      ? `<img src="${esc(item.foto)}" alt="${esc(item.nome)}" loading="lazy" decoding="async" data-emoji="${esc(item.emoji || D.emoji || "🍽️")}">`
      : `<div class="emoji"><span>${item.emoji || D.emoji || "🍽️"}</span></div>`;
    return `<div class="foto ${classe || ""}">${selo && !classe ? `<div class="tags"><span class="tag ${selo}">${ROTULOS[selo]}</span></div>` : ""}${conteudo}</div>`;
  }
  function tagsTexto(item, todas) {
    const t = (item.tags || []).filter((x) => todas || (x !== "promo" && x !== "mais-vendido" && x !== "destaque"));
    return t.length ? `<div class="tags">${t.map((x) => `<span class="tag ${x}">${ROTULOS[x] || esc(x)}</span>`).join("")}</div>` : "";
  }
  function preco(item) {
    return `<span class="preco">${item.precoAntigo ? `<s>${real(item.precoAntigo)}</s>` : ""}${aPartir(item) ? "<small>a partir de</small>" : ""}${real(item.preco)}</span>`;
  }
  function controle(i) {
    if (i.esgotado) return `<div data-ctrl="${i.id}"><span class="rotulo-esgotado">Esgotado</span></div>`;
    const l = !temOpcoes(i) && linhaSimples(i.id);
    if (l) return `<div class="qtd" data-ctrl="${i.id}"><button type="button" data-menos="${i.id}" aria-label="Remover um ${esc(i.nome)}">−</button><span aria-live="polite">${l.qtd}</span><button type="button" data-mais="${i.id}" aria-label="Adicionar mais um ${esc(i.nome)}">+</button></div>`;
    const n = qtdItem(i.id);
    return `<div data-ctrl="${i.id}"><button type="button" class="add" ${temOpcoes(i) ? "data-abrir" : "data-mais"}="${i.id}" aria-label="Adicionar ${esc(i.nome)}">${ICONES.mais}${n ? `<span class="badge">${n}</span>` : ""}</button></div>`;
  }
  // nos demos os contatos não abrem nada: o número e os perfis são fictícios
  function contato(href, icone, rotulo, externo) {
    if (D.demo) return `<button type="button" class="contato" data-acao="demo-contato" data-rotulo="${rotulo}">${icone}${rotulo}</button>`;
    return `<a class="contato" href="${href}"${externo ? ' target="_blank" rel="noopener"' : ""}>${icone}${rotulo}</a>`;
  }

  // ---------- cardápio do salão (estilo cardápio impresso) ----------
  // primeiro grupo obrigatório com preços diferentes (ex.: broto / grande) vira a linha "Broto 42,00 · Grande 70,00"
  function variantes(i) {
    const g = (i.opcoes || []).find((x) => (x.min || 0) >= 1 && (x.max || 1) === 1 && x.itens.some((o) => o.preco));
    return g ? g.itens.filter((o) => !o.esgotado).slice(0, 3) : null;
  }
  function controleClassico(i) {
    if (i.esgotado) return `<div data-ctrl="${i.id}" data-estilo="classico"><span class="esgotado-classico">esgotado</span></div>`;
    const n = qtdItem(i.id);
    return `<div data-ctrl="${i.id}" data-estilo="classico"><button type="button" class="add-classico${n ? " com-itens" : ""}" ${temOpcoes(i) ? "data-abrir" : "data-mais"}="${i.id}" aria-label="Adicionar ${esc(i.nome)}${n ? ` (${n} no pedido)` : ""}">${n ? `<span>${n}</span>` : ICONES.mais}</button></div>`;
  }
  function prato(i) {
    const v = variantes(i);
    const valor = num(i.preco + (v ? Math.min.apply(null, v.map((o) => o.preco || 0)) : 0));
    const marcas = (i.tags || []).map((t) => ROTULOS[t] || t);
    const fotos = S.fotos !== false && i.foto;
    return `<article class="prato${i.esgotado ? " esgotado" : ""}" data-abrir="${i.id}" tabindex="0" aria-label="${esc(i.nome)}, ${real(i.preco)}" data-busca="${esc(semAcento(i.nome + " " + (i.desc || "") + " " + i.categoria))}">
      ${fotos ? `<img class="miniatura" src="${esc(i.foto)}" alt="" loading="lazy" decoding="async" data-emoji="${esc(i.emoji || D.emoji || "🍽️")}">` : ""}
      <div class="prato-corpo">
        <div class="prato-linha"><h3>${esc(i.nome)}</h3><span class="pontilhado" aria-hidden="true"></span><span class="prato-preco">${i.precoAntigo ? `<s>${num(i.precoAntigo)}</s>` : ""}${valor}</span></div>
        ${i.desc ? `<p>${esc(i.desc)}</p>` : ""}
        ${v ? `<div class="prato-variantes">${v.map((o) => `<span>${esc(o.nome)} <b>${num(i.preco + (o.preco || 0))}</b></span>`).join("")}</div>` : ""}
        ${marcas.length ? `<div class="prato-marcas">${marcas.map(esc).join(" · ")}</div>` : ""}
      </div>
      ${controleClassico(i)}
    </article>`;
  }
  function montarClassico(destaques, categorias) {
    return `<main class="classico"><div class="folha">
      <div class="folha-topo"><span class="ornamento" aria-hidden="true">✦ &nbsp;✦&nbsp; ✦</span><p class="folha-titulo">Cardápio</p><p class="folha-sub">Toque no prato para pedir · valores em reais</p></div>
      ${destaques.length ? `<section class="sugestoes-chef" id="sec-destaques"><h2><span>${esc(S.tituloDestaques || "Sugestões da casa")}</span></h2>${destaques.map(prato).join("")}</section>` : ""}
      ${categorias.map(([c, ci]) => `
        <section class="secao-classica" id="sec-${ci}" data-categoria>
          <h2><span>${esc(c.nome)}</span></h2>
          ${c.aviso ? `<p class="nota-classica">${esc(c.aviso)}</p>` : ""}
          ${c.itens.filter(visivel).map(prato).join("")}
        </section>`).join("")}
      <p class="vazio" hidden>Nenhum item encontrado. Tente outra palavra.</p>
      <div class="folha-fim" aria-hidden="true">✦</div>
    </div></main>`;
  }
  function montarDelivery(destaques, categorias) {
    return `<main>
      ${destaques.length ? `
      <section class="secao" id="sec-destaques">
        <h2>Destaques da casa</h2>
        <div class="destaques">
          ${destaques.map((i) => `
            <article class="destaque" data-abrir="${i.id}" tabindex="0" aria-label="${esc(i.nome)}, ${real(i.preco)}">
              ${foto(i)}
              <div class="corpo"><h3>${esc(i.nome)}</h3><p>${esc(i.desc)}</p>
                <div class="rodape">${preco(i)}${controle(i)}</div>
              </div>
            </article>`).join("")}
        </div>
      </section>` : ""}
      ${categorias.map(([c, ci]) => {
        const lista = c.itens.filter(visivel);
        return `
        <section class="secao" id="sec-${ci}" data-categoria>
          <h2>${esc(c.nome)} <small>${lista.length} ${lista.length === 1 ? "item" : "itens"}</small></h2>
          ${c.aviso ? `<p class="aviso-categoria">${esc(c.aviso)}</p>` : ""}
          <div class="lista">
            ${lista.map((i) => `
              <article class="item${i.esgotado ? " esgotado" : ""}" data-abrir="${i.id}" tabindex="0" aria-label="${esc(i.nome)}, ${real(i.preco)}" data-busca="${esc(semAcento(i.nome + " " + (i.desc || "") + " " + c.nome))}">
                <div class="corpo">
                  ${tagsTexto(i)}
                  <h3>${esc(i.nome)}</h3>
                  <p>${esc(i.desc)}</p>
                  <div class="rodape">${preco(i)}${controle(i)}</div>
                </div>
                ${foto(i)}
              </article>`).join("")}
          </div>
        </section>`;
      }).join("")}
      <p class="vazio" hidden>Nenhum item encontrado. Tente outra palavra.</p>
    </main>`;
  }
  function mesaCard() {
    return `<div class="mesa-card">
      <button type="button" class="mesa-numero" data-acao="mesa"${mesaFixa ? " disabled" : ""}>
        <span>${mesa ? "Você está na" : "Está no salão?"}</span>
        <b>${mesa ? "Mesa " + esc(mesa) : "Informar a mesa"}</b>
      </button>
      <div class="mesa-acoes">
        ${usaWhatsSalao ? `<button type="button" data-acao="chamar-garcom">${ICONES.sino}<span>Chamar garçom</span></button>` : ""}
        <button type="button" data-acao="conta">${ICONES.conta}<span>Minha conta</span></button>
      </div>
    </div>`;
  }

  // ---------- montagem ----------
  function indexar() {
    D.categorias.forEach((c, ci) => c.itens.forEach((it, ii) => { it.id = ci + "-" + ii; it.categoria = c.nome; itens.push(it); porId[it.id] = it; }));
  }
  function montar() {
    const salao = contexto === "salao";
    const categorias = D.categorias.map((c, ci) => [c, ci]).filter(([c]) => visivel(c) && c.itens.some(visivel));
    const destaques = itens.filter((i) => visivel(i) && D.categorias.some((c) => c.nome === i.categoria && visivel(c)) && !i.esgotado && (i.tags || []).some((t) => t === "mais-vendido" || t === "promo" || t === "destaque"));
    const s = situacao();
    const taxas = bairros ? bairros.map((b) => b.taxa || 0) : [];
    const taxaTexto = bairros ? (Math.min.apply(null, taxas) ? "a partir de " + real(Math.min.apply(null, taxas)) : "grátis em alguns bairros") : E.taxa ? real(E.taxa) : "grátis";
    const abas = S && !S.somente && !mesaFixa;

    raiz.innerHTML = `
      ${D.demo ? '<div class="faixa-demo">Cardápio de exemplo · empresa, fotos e preços ilustrativos</div>' : ""}
      <header class="capa">
        ${D.banner ? `<img class="capa-img" src="${esc(D.banner)}" alt="" fetchpriority="high">` : `<div class="capa-arte"><span>${D.emoji || "🍽️"}</span><span>${D.emoji2 || D.emoji || ""}</span></div>`}
        <div class="capa-acoes">
          <button type="button" class="btn-redondo" data-acao="qr" aria-label="QR Code do cardápio">${ICONES.qr}</button>
          <button type="button" class="btn-redondo" data-acao="compartilhar" aria-label="Compartilhar cardápio">${ICONES.compartilhar}</button>
        </div>
      </header>
      <section class="perfil">
        <div class="logo">${D.logo ? `<img src="${esc(D.logo)}" alt="${esc(D.nome)}">` : esc(iniciais(D.nome))}</div>
        <h1>${esc(D.nome)}</h1>
        ${D.slogan ? `<p class="slogan">${esc(D.slogan)}</p>` : ""}
        ${horarios.length && !salao ? `<span class="status ${s.aberto ? "aberto" : "fechado"}">${s.texto}${s.detalhe ? ` <span>· ${s.detalhe}</span>` : ""}</span>` : ""}
        ${salao ? `
          ${mesaCard()}
          ${S.wifi && S.wifi.rede ? `<button type="button" class="wifi" data-acao="wifi">${ICONES.wifi}<span>Wi-Fi <b>${esc(S.wifi.rede)}</b>${S.wifi.senha ? ` · senha <b>${esc(S.wifi.senha)}</b>` : ""}</span>${S.wifi.senha ? "<em>copiar</em>" : ""}</button>` : ""}
        ` : `
          <div class="infos">
            ${E.tempo ? `<span>${ICONES.relogio}<b>${esc(E.tempo)}</b></span>` : ""}
            ${fazEntrega ? `<span>Entrega <b>${taxaTexto}</b></span>` : ""}
            ${E.pedidoMinimo ? `<span>Mínimo <b>${real(E.pedidoMinimo)}</b></span>` : ""}
            ${!fazEntrega && fazRetirada ? "<span><b>Retirada no local</b></span>" : ""}
          </div>
          ${E.gratisAcima ? `<p class="selo-frete">🛵 Entrega grátis em pedidos acima de ${real(E.gratisAcima)}</p>` : ""}
          <div class="contatos">
            ${D.whatsapp ? contato(linkWhats("Olá! Vim pelo cardápio digital."), ICONES.whatsapp, "WhatsApp", true) : ""}
            ${D.instagram ? contato("https://instagram.com/" + esc(D.instagram.replace("@", "")), ICONES.instagram, "Instagram", true) : ""}
            ${D.endereco ? contato("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(D.endereco), ICONES.mapa, "Como chegar", true) : ""}
            ${D.telefone ? contato("tel:" + esc(D.telefone.replace(/\D/g, "")), ICONES.telefone, "Ligar") : ""}
          </div>
        `}
        ${D.aviso ? `<p class="aviso-loja">${esc(D.aviso)}</p>` : ""}
      </section>

      ${abas ? `
      <div class="abas" role="tablist" aria-label="Como você quer pedir">
        <button type="button" role="tab" aria-selected="${!salao}" data-contexto="delivery">${ICONES.moto}<span>Delivery e retirada</span></button>
        <button type="button" role="tab" aria-selected="${salao}" data-contexto="salao">${ICONES.talher}<span>Estou no local</span></button>
      </div>` : ""}

      <nav class="barra${salao ? " barra-salao" : ""}" aria-label="Categorias">
        <div class="busca">${ICONES.busca}<input type="search" placeholder="Buscar no cardápio" aria-label="Buscar no cardápio" enterkeyhint="search"></div>
        <div class="chips">
          ${destaques.length ? `<button type="button" class="chip ativo" data-ir="sec-destaques">${salao ? esc(S.tituloDestaques || "Sugestões") : "Destaques"}</button>` : ""}
          ${categorias.map(([c, i], k) => `<button type="button" class="chip${!destaques.length && !k ? " ativo" : ""}" data-ir="sec-${i}">${esc(c.nome)}</button>`).join("")}
        </div>
      </nav>

      ${salao ? montarClassico(destaques, categorias) : montarDelivery(destaques, categorias)}

      <footer class="rodape-pagina">
        <b>${esc(D.nome)}</b>
        ${D.endereco ? `<p>${esc(D.endereco)}</p>` : ""}
        ${horarios.length ? `<p>${horarios.map((h) => `${diasTexto(h.dias)}: ${h.abre} às ${h.fecha}`).join("<br>")}</p>` : ""}
        ${D.pagamentos ? `<p>Aceitamos ${D.pagamentos.map(esc).join(" · ")}</p>` : ""}
        <div class="assinatura">${esc(D.assinatura || "Cardápio digital")}</div>
        ${D.credito && D.credito.texto ? `<a class="credito" href="${esc(D.credito.link || "#")}" target="_blank" rel="noopener">${esc(D.credito.texto)}</a>` : ""}
      </footer>

      <button type="button" class="sacola-barra" data-acao="sacola"><span class="esq">${salao ? ICONES.conta : ICONES.sacola}<span class="contador">0</span><span class="rotulo-barra">${salao ? "Ver pedido" : "Ver sacola"}</span></span><span class="soma">R$ 0,00</span></button>
      ${D.whatsapp && !salao ? (D.demo
        ? `<button type="button" class="wa-flutuante" data-acao="demo-contato" data-rotulo="WhatsApp" aria-label="Falar no WhatsApp">${ICONES.whatsapp}</button>`
        : `<a class="wa-flutuante" href="${linkWhats("Olá! Vim pelo cardápio digital.")}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ICONES.whatsapp}</a>`) : ""}
      <div class="fundo-escuro"></div>
      <div class="painel" role="dialog" aria-modal="true" aria-label="Detalhes"></div>
      <div class="tela-garcom" role="dialog" aria-modal="true" aria-label="Pedido para o garçom" hidden></div>
    `;
  }
  function render() {
    montar();
    atualizar();
    observarSecoes();
    revelar();
    // fotos que já estavam no cache do navegador não disparam "load" de novo
    $$("img", raiz).forEach((img) => { if (img.complete && img.naturalWidth) img.classList.add("ok"); });
  }

  // ---------- efeitos ----------
  // cards e pratos "sobem" suavemente quando estão para entrar na tela.
  // À prova de falhas: nada fica escondido; se o navegador não avisar a rolagem, só não há animação.
  function revelar() {
    if (revelador) revelador.disconnect();
    if (!("IntersectionObserver" in window) || semMovimento()) return;
    revelador = new IntersectionObserver((entradas) => entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("rv-on");
      revelador.unobserve(en.target);
    }), { rootMargin: "0px 0px 60px 0px" });
    $$(".item, .destaque, .prato, .secao > h2, .secao-classica > h2, .sugestoes-chef, .rodape-pagina", raiz).forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return; // o que já está na tela entra junto com a página
      revelador.observe(el);
    });
  }
  // bolinha que voa do botão "+" até a sacola
  function voar(a) {
    if (!a || !a.width || semMovimento() || !document.body.animate) return pular();
    const barra = $(".sacola-barra", raiz).getBoundingClientRect();
    const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2;
    const dx = barra.left + 34 - x0, dy = Math.min(barra.top, innerHeight - 70) + 26 - y0;
    const bola = document.createElement("div");
    bola.className = "voo";
    bola.style.left = x0 - 9 + "px"; bola.style.top = y0 - 9 + "px";
    document.body.appendChild(bola);
    bola.animate([
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 70}px) scale(1.15)`, opacity: 1, offset: 0.45 },
      { transform: `translate(${dx}px, ${dy}px) scale(.35)`, opacity: 0.4 }
    ], { duration: 620, easing: "cubic-bezier(.4, 0, .6, 1)" }).onfinish = () => { bola.remove(); pular(); };
  }
  function pular() {
    const barra = $(".sacola-barra", raiz);
    if (!barra || semMovimento()) return;
    barra.classList.remove("pulo"); void barra.offsetWidth; barra.classList.add("pulo");
  }

  // ---------- atualização da sacola ----------
  function atualizar() {
    $$("[data-ctrl]", raiz).forEach((el) => {
      const i = porId[el.dataset.ctrl];
      el.outerHTML = el.dataset.estilo === "classico" ? controleClassico(i) : controle(i);
    });
    const n = quantidade();
    const barra = $(".sacola-barra", raiz);
    barra.classList.toggle("visivel", n > 0);
    const wa = $(".wa-flutuante", raiz); if (wa) wa.classList.toggle("oculto", n > 0);
    const contador = $(".contador", barra);
    contador.textContent = n;
    if (n !== ultimaQtd && n) { contador.classList.remove("pop"); void contador.offsetWidth; contador.classList.add("pop"); }
    ultimaQtd = n;
    $(".soma", barra).textContent = real(subtotal());
    salvar();
    const p = $(".painel", raiz);
    if (p.dataset.tipo === "sacola") n ? abrirSacola() : fecharPainel();
  }
  function adicionar(linha) {
    const k = chave(linha), existente = sacola.find((l) => chave(l) === k);
    existente ? (existente.qtd += linha.qtd) : sacola.push(linha);
    if (navigator.vibrate) navigator.vibrate(12);
    atualizar();
  }
  function alterarSimples(id, delta) {
    const i = porId[id];
    if (temOpcoes(i)) return abrirProduto(id);
    const l = linhaSimples(id);
    if (delta > 0) {
      adicionar({ id, qtd: 1, esc: [], obs: "" });
      if (contexto === "salao" && $(".painel", raiz).dataset.tipo !== "sacola") toast(`${i.nome} no pedido`);
      return;
    }
    if (l) { l.qtd--; if (!l.qtd) sacola.splice(sacola.indexOf(l), 1); }
    atualizar();
  }
  function alterarLinha(idx, delta) {
    const l = sacola[idx]; if (!l) return;
    l.qtd += delta;
    if (l.qtd <= 0) sacola.splice(idx, 1);
    if (delta > 0 && navigator.vibrate) navigator.vibrate(12);
    atualizar();
  }

  // ---------- painéis ----------
  function abrirPainel(html, tipo, rotulo) {
    const p = $(".painel", raiz);
    const jaAberto = p.classList.contains("aberto");
    if (!jaAberto) focoAnterior = document.activeElement;
    const rolagem = jaAberto && p.dataset.tipo === tipo ? p.scrollTop : 0;
    p.innerHTML = `<div class="alca"></div><button type="button" class="fechar" data-acao="fechar" aria-label="Fechar">×</button>` + html;
    p.dataset.tipo = tipo;
    p.setAttribute("aria-label", rotulo || "Detalhes");
    p.classList.add("aberto"); $(".fundo-escuro", raiz).classList.add("aberto");
    p.scrollTop = rolagem;
    document.body.style.overflow = "hidden";
    if (!jaAberto) $(".fechar", p).focus({ preventScroll: true });
  }
  function fecharPainel() {
    const p = $(".painel", raiz);
    if (!p.classList.contains("aberto")) return;
    p.classList.remove("aberto"); p.dataset.tipo = "";
    $(".fundo-escuro", raiz).classList.remove("aberto"); document.body.style.overflow = "";
    rascunho = null;
    if (focoAnterior && document.contains(focoAnterior)) focoAnterior.focus({ preventScroll: true });
  }

  // produto: escolha de opções, observação e quantidade
  function abrirProduto(id, voltarSacola) {
    const i = porId[id];
    rascunho = {
      id, qtd: 1, obs: "", voltarSacola: !!voltarSacola,
      sel: (i.opcoes || []).map((g) => {
        if ((g.min || 0) >= 1 && (g.max || 1) === 1) { const o = g.itens.findIndex((x) => !x.esgotado); return o >= 0 ? [o] : []; }
        return [];
      })
    };
    const grupos = (i.opcoes || []).map((g, gi) => {
      const min = g.min || 0, max = g.max || 1, unico = max === 1;
      const regra = min >= 1 ? (unico ? "Obrigatório · escolha 1" : `Obrigatório · escolha de ${min} a ${max}`) : unico ? "Opcional · escolha 1" : `Opcional · até ${max}`;
      return `<fieldset class="grupo" data-grupo="${gi}">
        <legend><span>${esc(g.titulo)}</span><small>${regra}</small></legend>
        ${g.itens.map((o, oi) => `<label class="opcao${o.esgotado ? " indisponivel" : ""}">
          <input type="${unico ? "radio" : "checkbox"}" name="g${gi}" data-g="${gi}" data-o="${oi}"${rascunho.sel[gi].includes(oi) ? " checked" : ""}${o.esgotado ? " disabled" : ""}>
          <span class="nome-opcao">${esc(o.nome)}${o.desc ? `<small>${esc(o.desc)}</small>` : ""}</span>
          <span class="preco-opcao">${o.esgotado ? "Esgotado" : o.preco ? "+ " + real(o.preco) : ""}</span>
        </label>`).join("")}
      </fieldset>`;
    }).join("");
    abrirPainel(`
      ${foto(i, "foto-grande")}
      ${tagsTexto(i, true)}
      <h2>${esc(i.nome)}</h2>
      <p class="desc">${esc(i.desc)}</p>
      ${i.detalhe ? `<p class="desc detalhe">${esc(i.detalhe)}</p>` : ""}
      <div class="preco-produto">${preco(i)}</div>
      ${grupos}
      ${i.esgotado ? "" : `<div class="campo"><label for="f-obs-item">Alguma observação?</label><textarea id="f-obs-item" data-rascunho="obs" maxlength="140" placeholder="${esc(i.dicaObs || D.dicaObs || "Ex.: tirar algum ingrediente")}"></textarea></div>`}
      <div class="painel-rodape">
        ${i.esgotado ? '<button type="button" class="btn-principal tema" disabled>Indisponível no momento</button>' : `
        <div class="qtd grande"><button type="button" data-rqtd="-1" aria-label="Diminuir quantidade">−</button><span class="rqtd">1</span><button type="button" data-rqtd="1" aria-label="Aumentar quantidade">+</button></div>
        <button type="button" class="btn-principal tema" data-acao="confirmar-item">Adicionar <span class="rtotal"></span></button>`}
      </div>
    `, "produto", i.nome);
    atualizarRascunho();
  }
  function atualizarRascunho() {
    if (!rascunho) return;
    const i = porId[rascunho.id], p = $(".painel", raiz);
    const unit = i.preco + rascunho.sel.reduce((s, os, g) => s + os.reduce((t, o) => t + (opcao(i, g, o).preco || 0), 0), 0);
    const tot = $(".rtotal", p); if (tot) tot.textContent = "· " + real(unit * rascunho.qtd);
    const q = $(".rqtd", p); if (q) q.textContent = rascunho.qtd;
    // desabilita as caixas quando o limite do grupo foi atingido
    (i.opcoes || []).forEach((g, gi) => {
      const max = g.max || 1; if (max === 1) return;
      const cheio = rascunho.sel[gi].length >= max;
      $$(`input[data-g="${gi}"]`, p).forEach((inp) => { inp.disabled = !!opcao(i, gi, +inp.dataset.o).esgotado || (cheio && !inp.checked); });
    });
  }
  function confirmarItem() {
    const i = porId[rascunho.id];
    for (let gi = 0; gi < (i.opcoes || []).length; gi++) {
      const g = i.opcoes[gi];
      if (rascunho.sel[gi].length < (g.min || 0)) {
        toast((g.min || 0) > 1 ? `Escolha pelo menos ${g.min} em "${g.titulo}"` : `Escolha uma opção em "${g.titulo}"`);
        const el = $(`[data-grupo="${gi}"]`, raiz); el.classList.add("pendente"); el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }
    const esc_ = [];
    rascunho.sel.forEach((os, g) => os.slice().sort((a, b) => a - b).forEach((o) => esc_.push([g, o])));
    const obs = (($("#f-obs-item") || {}).value || "").trim();
    const voltar = rascunho.voltarSacola;
    adicionar({ id: i.id, qtd: rascunho.qtd, esc: esc_, obs });
    rascunho = null;
    voltar ? abrirSacola() : (fecharPainel(), pular());
    toast(`${i.nome} ${contexto === "salao" ? "no pedido" : "na sacola"}`);
  }

  function linhasSacola() {
    return sacola.map((l, idx) => {
      const i = porId[l.id];
      return `<div class="linha-sacola">
        ${i.foto ? `<img src="${esc(i.foto)}" alt="" loading="lazy" data-emoji="${esc(i.emoji || "")}">` : `<span class="mini-emoji">${i.emoji || D.emoji || "🍽️"}</span>`}
        <div class="nome">${esc(i.nome)}${extrasLinha(l).map((x) => `<small>${esc(x)}</small>`).join("")}<b>${real(precoUnit(l) * l.qtd)}</b></div>
        <div class="qtd"><button type="button" data-lmenos="${idx}" aria-label="Remover um">${l.qtd === 1 ? "🗑" : "−"}</button><span>${l.qtd}</span><button type="button" data-lmais="${idx}" aria-label="Adicionar mais um">+</button></div>
      </div>`;
    }).join("");
  }
  // sugestões para aumentar o pedido: categorias marcadas com sugerir: true
  function blocoSugestoes() {
    const naSacola = new Set(sacola.map((l) => l.id));
    const sugestoes = itens.filter((i) => !i.esgotado && visivel(i) && !naSacola.has(i.id) && D.categorias.some((c) => c.sugerir && c.nome === i.categoria && visivel(c))).slice(0, 8);
    return sugestoes.length ? `<div class="sugestoes"><p>Peça também</p><div class="sugestoes-lista">${sugestoes.map((i) => `
      <div class="sugestao">${foto(i, "mini")}<span>${esc(i.nome)}</span><b>${aPartir(i) ? "a partir de " : ""}${real(i.preco)}</b><button type="button" class="add" ${temOpcoes(i) ? "data-abrir" : "data-mais"}="${i.id}" aria-label="Adicionar ${esc(i.nome)}">${ICONES.mais}</button></div>`).join("")}
    </div></div>` : "";
  }

  function abrirSacola() {
    if (contexto === "salao") return abrirComanda();
    const st = subtotal(), tx = taxa();
    const s = situacao();
    const faltaMinimo = modo === "entrega" && E.pedidoMinimo && st < E.pedidoMinimo ? E.pedidoMinimo - st : 0;
    const faltaGratis = modo === "entrega" && E.gratisAcima && st < E.gratisAcima ? E.gratisAcima - st : 0;
    const dinheiro = /dinheiro/i.test(cliente.pag);
    if (D.pagamentos && !D.pagamentos.includes(cliente.pag)) cliente.pag = "";

    abrirPainel(`
      <h2>Sua sacola</h2>
      ${!s.aberto && horarios.length ? `<p class="nota">Estamos fechados agora${s.detalhe ? " (" + s.detalhe + ")" : ""}. Você pode enviar o pedido e respondemos assim que abrirmos.</p>` : ""}
      ${linhasSacola()}
      ${blocoSugestoes()}

      ${fazEntrega && fazRetirada ? `
      <div class="segmentado" role="group" aria-label="Como você quer receber">
        <button type="button" data-modo="entrega" aria-pressed="${modo === "entrega"}" class="${modo === "entrega" ? "ativo" : ""}">🛵 Entrega</button>
        <button type="button" data-modo="retirada" aria-pressed="${modo === "retirada"}" class="${modo === "retirada" ? "ativo" : ""}">🏪 Retirar no local</button>
      </div>` : ""}
      ${modo === "retirada" && D.endereco ? `<p class="nota suave">Retirada em: ${esc(D.endereco)}${E.tempoRetirada ? " · pronto em " + esc(E.tempoRetirada) : ""}</p>` : ""}

      <div class="campo"><label for="f-nome">Seu nome</label><input id="f-nome" data-campo="nome" autocomplete="name" value="${esc(cliente.nome)}"></div>
      ${modo === "entrega" && bairros ? `<div class="campo"><label for="f-bairro">Bairro</label><select id="f-bairro" data-campo="bairro"><option value="">Selecione o bairro</option>${bairros.map((b) => `<option value="${esc(b.nome)}"${b.nome === cliente.bairro ? " selected" : ""}>${esc(b.nome)} · ${b.taxa ? real(b.taxa) : "grátis"}</option>`).join("")}</select></div>` : ""}
      ${modo === "entrega" ? `<div class="campo"><label for="f-end">Endereço de entrega</label><input id="f-end" data-campo="end" autocomplete="street-address" placeholder="Rua, número, complemento e referência" value="${esc(cliente.end)}"></div>` : ""}
      ${D.pagamentos ? `<div class="campo"><span class="rotulo">Forma de pagamento</span><div class="escolhas" role="radiogroup" aria-label="Forma de pagamento">${D.pagamentos.map((p) => `<button type="button" role="radio" aria-checked="${p === cliente.pag}" data-pag="${esc(p)}" class="${p === cliente.pag ? "ativo" : ""}">${esc(p)}</button>`).join("")}</div></div>` : ""}
      ${dinheiro ? `<div class="campo"><label for="f-troco">Troco para quanto?</label><input id="f-troco" data-campo="troco" inputmode="decimal" placeholder="Deixe em branco se não precisar" value="${esc(cliente.troco)}"></div>` : ""}
      <div class="campo"><label for="f-obs">Observações do pedido</label><textarea id="f-obs" data-campo="obs" placeholder="Ex.: interfone quebrado, mandar sachês">${esc(cliente.obs)}</textarea></div>

      <div class="totais">
        <div><span>Subtotal</span><span>${real(st)}</span></div>
        ${modo === "entrega" ? `<div><span>Taxa de entrega${bairros && cliente.bairro ? " · " + esc(cliente.bairro) : ""}</span><span>${tx == null ? "selecione o bairro" : tx ? real(tx) : "Grátis"}</span></div>` : ""}
        <div class="total"><span>Total</span><span>${real(st + (tx || 0))}</span></div>
      </div>
      ${faltaGratis && !faltaMinimo ? `<p class="nota destaque-nota">Faltam ${real(faltaGratis)} para a entrega grátis</p>` : ""}
      ${faltaMinimo ? `<p class="aviso">Faltam ${real(faltaMinimo)} para o pedido mínimo de entrega (${real(E.pedidoMinimo)}).</p>` : ""}
      <div class="painel-rodape">
        <button type="button" class="btn-principal" data-acao="enviar" ${faltaMinimo ? "disabled" : ""}>${ICONES.whatsapp} Enviar pedido pelo WhatsApp</button>
      </div>
      ${D.demo ? '<p class="centro rodape-demo">Exemplo: o número de WhatsApp é fictício. Você verá a mensagem pronta.</p>' : ""}
    `, "sacola", "Sua sacola");
  }

  function mensagemPedido() {
    const st = subtotal(), tx = taxa() || 0;
    const l = [`*Novo pedido · ${D.nome}*`, ""];
    sacola.forEach((x) => {
      const i = porId[x.id];
      l.push(`*${x.qtd}x ${i.nome}* · ${real(precoUnit(x) * x.qtd)}`);
      extrasLinha(x).forEach((t) => l.push("   " + t));
    });
    l.push("", "Subtotal: " + real(st));
    if (modo === "entrega") l.push("Entrega" + (bairros ? " (" + cliente.bairro + ")" : "") + ": " + (tx ? real(tx) : "grátis"));
    l.push("*Total: " + real(st + tx) + "*", "");
    l.push("*Nome:* " + cliente.nome.trim());
    l.push(modo === "entrega" ? "*Entregar em:* " + cliente.end.trim() + (bairros ? " · " + cliente.bairro : "") : "*Retirada no local*");
    if (cliente.pag) l.push("*Pagamento:* " + cliente.pag + (/dinheiro/i.test(cliente.pag) && cliente.troco.trim() ? " · troco para R$ " + cliente.troco.trim().replace(/^r\$\s*/i, "") : ""));
    if (cliente.obs.trim()) l.push("*Observações:* " + cliente.obs.trim());
    return l.join("\n");
  }

  // balão com a mensagem como ela chega no WhatsApp (usado nos exemplos)
  const balao = (msg) => `<div class="previa-whats"><div class="balao">${esc(msg).replace(/\*([^*\n]+)\*/g, "<b>$1</b>").replace(/\n/g, "<br>")}</div></div>`;

  function enviar() {
    const foco = (sel, msg) => { toast(msg); const el = $(sel); if (el) el.focus(); };
    if (!sacola.length) return toast("Sua sacola está vazia");
    if (!cliente.nome.trim()) return foco("#f-nome", "Informe seu nome");
    if (modo === "entrega" && bairros && !cliente.bairro) return foco("#f-bairro", "Selecione o bairro");
    if (modo === "entrega" && !cliente.end.trim()) return foco("#f-end", "Informe o endereço de entrega");
    if (D.pagamentos && !cliente.pag) { toast("Escolha a forma de pagamento"); const el = $("[data-pag]"); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    salvar();
    const msg = mensagemPedido();
    if (D.demo) {
      abrirPainel(`<h2>Pedido pronto ✅</h2>
        <p class="desc">No cardápio real, este botão abre o WhatsApp da loja com a mensagem abaixo já escrita. É só o cliente tocar em enviar.</p>
        ${balao(msg)}
        <a class="btn-principal" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${ICONES.whatsapp} Testar no meu WhatsApp</a>
        <button type="button" class="btn-secundario" data-acao="sacola">Voltar para a sacola</button>`, "demo", "Pedido pronto");
      return;
    }
    window.open(linkWhats(msg), "_blank");
    abrirPainel(`<div class="centro"><h2>Quase lá! 📲</h2>
      <p class="desc">Abrimos o WhatsApp com o seu pedido. Confira e toque em <b>enviar</b> para confirmar.</p>
      <a class="btn-principal" href="${linkWhats(msg)}" target="_blank" rel="noopener">${ICONES.whatsapp} Abrir o WhatsApp de novo</a>
      <button type="button" class="btn-secundario" data-acao="limpar">Já enviei, esvaziar a sacola</button></div>`, "enviado", "Pedido enviado");
  }

  // ---------- salão: mesa, pedido para o garçom e conta ----------
  function exigirMesa(acao) {
    if (mesa) return true;
    acaoPendente = acao;
    abrirMesa();
    return false;
  }
  function abrirMesa() {
    abrirPainel(`<div class="centro">
      <span class="icone-mesa">${ICONES.talher}</span>
      <h2>Em qual mesa você está?</h2>
      <p class="desc">O número está na plaquinha ou no QR Code da mesa.</p>
      <input class="entrada-mesa" id="f-mesa" inputmode="numeric" maxlength="6" autocomplete="off" value="${esc(mesa)}" placeholder="Nº" aria-label="Número da mesa">
      <button type="button" class="btn-principal tema" data-acao="confirmar-mesa">Confirmar mesa</button></div>`, "mesa", "Número da mesa");
    setTimeout(() => { const el = $("#f-mesa"); if (el) el.focus(); }, 320);
  }
  function confirmarMesa() {
    const v = (($("#f-mesa") || {}).value || "").replace(/[^0-9a-zA-Z-]/g, "").slice(0, 6);
    if (!v) { toast("Digite o número da mesa"); return; }
    mesa = v; salvar();
    const card = $(".mesa-card", raiz); if (card) card.outerHTML = mesaCard();
    const acao = acaoPendente; acaoPendente = null;
    if (acao) acao(); else { fecharPainel(); toast("Mesa " + mesa + " confirmada"); }
  }

  function abrirComanda() {
    const st = subtotal();
    abrirPainel(`
      <h2>Seu pedido</h2>
      <div class="mesa-linha">${mesa
        ? `<span>${ICONES.talher}Mesa <b>${esc(mesa)}</b></span>${mesaFixa ? "" : '<button type="button" class="link" data-acao="mesa">trocar</button>'}`
        : `<span>${ICONES.talher}Mesa não informada</span><button type="button" class="link" data-acao="mesa">informar</button>`}</div>
      ${linhasSacola()}
      ${blocoSugestoes()}
      <div class="campo"><label for="f-nome">Seu nome <small>(opcional, ajuda o garçom)</small></label><input id="f-nome" data-campo="nome" autocomplete="given-name" value="${esc(cliente.nome)}"></div>
      <div class="campo"><label for="f-obs">Observações</label><textarea id="f-obs" data-campo="obs" placeholder="${esc(S.dicaObs || "Ex.: trazer as bebidas primeiro")}">${esc(cliente.obs)}</textarea></div>
      <div class="totais"><div class="total"><span>Total deste pedido</span><span>${real(st)}</span></div></div>
      ${S.taxaServico ? `<p class="nota suave">Taxa de serviço de ${num(S.taxaServico).replace(",00", "")}% (opcional) cobrada no fechamento da conta.</p>` : ""}
      <div class="painel-rodape coluna">
        ${usaWhatsSalao ? `<button type="button" class="btn-principal tema" data-acao="enviar-mesa">${ICONES.sino} Enviar pedido ao garçom</button>` : ""}
        ${usaTelaGarcom ? `<button type="button" class="${usaWhatsSalao ? "btn-secundario" : "btn-principal tema"}" data-acao="mostrar-garcom">Mostrar na tela para o garçom</button>` : ""}
      </div>
      ${usaWhatsSalao ? '<p class="centro rodape-demo">O pedido chega no WhatsApp do salão com o número da sua mesa.</p>' : ""}
      ${historico.length ? `<button type="button" class="link link-bloco" data-acao="conta">Ver pedidos já feitos (${historico.length})</button>` : ""}
    `, "sacola", "Seu pedido");
  }

  function mensagemMesa() {
    const l = [`*Mesa ${mesa} · Novo pedido*`, D.nome + (cliente.nome.trim() ? " · Cliente: " + cliente.nome.trim() : ""), ""];
    sacola.forEach((x) => {
      const i = porId[x.id];
      l.push(`*${x.qtd}x ${i.nome}* · ${real(precoUnit(x) * x.qtd)}`);
      extrasLinha(x).forEach((t) => l.push("   " + t));
    });
    l.push("", "*Total do pedido: " + real(subtotal()) + "*");
    if (cliente.obs.trim()) l.push("*Observações:* " + cliente.obs.trim());
    return l.join("\n");
  }

  // envia uma mensagem do salão: nos exemplos mostra a prévia; no real abre o WhatsApp e pede confirmação
  function enviarWhatsSalao(msg, titulo, explicacao, aoConcluir) {
    aoConcluirSalao = aoConcluir;
    if (D.demo) {
      abrirPainel(`<h2>${titulo}</h2>
        <p class="desc">${explicacao}</p>
        ${balao(msg)}
        <div class="painel-rodape coluna">
          <button type="button" class="btn-principal tema" data-acao="concluir-salao">Concluir exemplo</button>
          <a class="btn-secundario" href="https://wa.me/?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">Testar no meu WhatsApp</a>
        </div>`, "demo", titulo);
      return;
    }
    window.open(linkWhats(msg, whatsSalao), "_blank");
    abrirPainel(`<div class="centro"><h2>Quase lá! 📲</h2>
      <p class="desc">Abrimos o WhatsApp do salão com a mensagem pronta. Toque em <b>enviar</b> para confirmar.</p>
      <button type="button" class="btn-principal tema" data-acao="concluir-salao">Já enviei</button>
      <a class="btn-secundario" href="${linkWhats(msg, whatsSalao)}" target="_blank" rel="noopener">Abrir o WhatsApp de novo</a></div>`, "enviado", "Confirmar envio");
  }

  function enviarMesa() {
    if (!sacola.length) return toast("Seu pedido está vazio");
    if (!exigirMesa(enviarMesa)) return;
    enviarWhatsSalao(mensagemMesa(), "Pedido para o garçom",
      "No cardápio real, o pedido chega no WhatsApp do salão (celular do caixa ou do garçom) já com o número da mesa:", registrarPedido);
  }
  function registrarPedido() {
    historico.push({
      hora: horaAgora(), total: subtotal(),
      itens: sacola.map((l) => ({ qtd: l.qtd, nome: porId[l.id].nome, extras: extrasLinha(l), total: precoUnit(l) * l.qtd }))
    });
    sacola = []; cliente.obs = "";
    atualizar();
    abrirPainel(`<div class="centro">
      <span class="icone-ok">✓</span>
      <h2>Pedido enviado!</h2>
      <p class="desc">O garçom já recebeu o pedido da <b>mesa ${esc(mesa)}</b>. Quer mais alguma coisa? É só pedir de novo por aqui.</p>
      <button type="button" class="btn-principal tema" data-acao="fechar">Voltar ao cardápio</button>
      <button type="button" class="btn-secundario" data-acao="conta">Ver minha conta</button></div>`, "ok", "Pedido enviado");
  }

  function mostrarGarcom() {
    if (!sacola.length) return toast("Seu pedido está vazio");
    if (!exigirMesa(mostrarGarcom)) return;
    fecharPainel();
    const t = $(".tela-garcom", raiz);
    t.innerHTML = `
      <div class="tg-caixa">
        <p class="tg-loja">${esc(D.nome)}</p>
        <p class="tg-mesa"><small>Mesa</small>${esc(mesa)}</p>
        ${cliente.nome.trim() ? `<p class="tg-nome">${esc(cliente.nome.trim())}</p>` : ""}
        <ol class="tg-itens">${sacola.map((l) => `<li><b>${l.qtd}×</b><div>${esc(porId[l.id].nome)}${extrasLinha(l).map((x) => `<small>${esc(x)}</small>`).join("")}</div></li>`).join("")}</ol>
        ${cliente.obs.trim() ? `<p class="tg-obs">Obs.: ${esc(cliente.obs.trim())}</p>` : ""}
        <p class="tg-total"><span>Total</span><b>${real(subtotal())}</b></p>
        <p class="tg-hora">Pedido feito às ${horaAgora()}</p>
      </div>
      <div class="tg-acoes">
        <button type="button" class="btn-secundario" data-acao="fechar-garcom">Voltar</button>
        <button type="button" class="btn-principal tema" data-acao="garcom-anotou">Garçom anotou ✓</button>
      </div>`;
    t.hidden = false;
    document.body.style.overflow = "hidden";
    $("[data-acao=garcom-anotou]", t).focus();
  }
  function fecharGarcom() {
    const t = $(".tela-garcom", raiz);
    if (t.hidden) return false;
    t.hidden = true; document.body.style.overflow = "";
    return true;
  }

  function chamarGarcom() {
    if (!exigirMesa(chamarGarcom)) return;
    enviarWhatsSalao(`🔔 *Mesa ${mesa}* está chamando o garçom.\n${D.nome}`, "Chamar o garçom",
      "No cardápio real, o salão recebe este aviso no WhatsApp:", () => { fecharPainel(); toast("Garçom avisado. Já vamos até você!"); });
  }

  function valoresConta() {
    const consumo = historico.reduce((s, p) => s + p.total, 0);
    const servico = S.taxaServico && conta.servico ? consumo * S.taxaServico / 100 : 0;
    return { consumo, servico, total: consumo + servico };
  }
  function abrirConta() {
    const v = valoresConta();
    const pct = S.taxaServico ? num(S.taxaServico).replace(",00", "") : "";
    if (conta.pag && !pagamentosSalao.includes(conta.pag)) conta.pag = "";
    abrirPainel(`
      <h2>Minha conta</h2>
      <p class="desc">${mesa ? "Mesa " + esc(mesa) + " · " : ""}pedidos feitos por este celular</p>
      ${historico.length ? historico.map((p, k) => `
        <div class="rodada">
          <p class="rodada-titulo"><span>Pedido ${k + 1}</span><span>${esc(p.hora)}</span></p>
          ${p.itens.map((it) => `<div class="rodada-item"><span>${it.qtd}× ${esc(it.nome)}${it.extras.length ? `<small>${esc(it.extras.join(" · "))}</small>` : ""}</span><span>${real(it.total)}</span></div>`).join("")}
        </div>`).join("") : '<p class="nota suave">Você ainda não fez pedidos por aqui. Os pedidos enviados pelo cardápio aparecem nesta tela.</p>'}
      ${historico.length ? `
      <div class="totais">
        <div><span>Consumo</span><span>${real(v.consumo)}</span></div>
        ${S.taxaServico ? `<div><label class="servico"><input type="checkbox" data-servico${conta.servico ? " checked" : ""}> Serviço (${pct}%)</label><span>${real(v.servico)}</span></div>` : ""}
        <div class="total"><span>Total estimado</span><span>${real(v.total)}</span></div>
      </div>
      <div class="dividir">
        <span>Dividir a conta</span>
        <div class="qtd"><button type="button" data-pessoas="-1" aria-label="Menos uma pessoa">−</button><span>${conta.pessoas}</span><button type="button" data-pessoas="1" aria-label="Mais uma pessoa">+</button></div>
        <b>${conta.pessoas > 1 ? real(v.total / conta.pessoas) + " cada" : "1 pessoa"}</b>
      </div>` : ""}
      ${pagamentosSalao.length ? `<div class="campo"><span class="rotulo">Como vai pagar?</span><div class="escolhas" role="radiogroup" aria-label="Forma de pagamento">${pagamentosSalao.map((p) => `<button type="button" role="radio" aria-checked="${p === conta.pag}" data-pagconta="${esc(p)}" class="${p === conta.pag ? "ativo" : ""}">${esc(p)}</button>`).join("")}</div></div>` : ""}
      <p class="nota suave">Pedidos feitos direto com o garçom não aparecem aqui. O valor final é conferido no fechamento.</p>
      <div class="painel-rodape coluna">
        ${usaWhatsSalao ? `<button type="button" class="btn-principal tema" data-acao="pedir-conta">${ICONES.conta} Pedir a conta</button>` : `<p class="centro desc">Para fechar, é só chamar o garçom.</p>`}
      </div>
      ${historico.length ? '<button type="button" class="link link-bloco" data-acao="limpar-conta">Limpar pedidos deste celular</button>' : ""}
    `, "conta", "Minha conta");
  }
  function pedirConta() {
    if (!exigirMesa(pedirConta)) return;
    const v = valoresConta();
    const l = [`🧾 *Mesa ${mesa} · Pedido de conta*`, D.nome, ""];
    if (v.consumo) {
      l.push("Consumo pelo cardápio: " + real(v.consumo));
      if (v.servico) l.push(`Serviço (${num(S.taxaServico).replace(",00", "")}%): ` + real(v.servico));
      l.push("*Total estimado: " + real(v.total) + "*");
      if (conta.pessoas > 1) l.push(`Dividir em ${conta.pessoas} pessoas: ${real(v.total / conta.pessoas)} cada`);
    }
    if (conta.pag) l.push("Pagamento: " + conta.pag);
    enviarWhatsSalao(l.join("\n"), "Pedir a conta", "No cardápio real, o salão recebe o pedido de conta no WhatsApp:",
      () => { fecharPainel(); toast("Conta pedida! O garçom já traz."); });
  }

  // ---------- QR Codes das mesas para imprimir (?imprimir=mesas) ----------
  function imprimirMesas() {
    document.body.classList.add("modo-impressao");
    const total = Math.max(1, Math.min(200, +(S && S.mesas) || 20));
    const base = D.url || location.href.split(/[?#]/)[0];
    const hash = D.url ? "" : location.hash;
    const urlMesa = (n) => base + (base.includes("?") ? "&" : "?") + "mesa=" + encodeURIComponent(n) + hash;
    raiz.innerHTML = `
      <div class="impressao">
        <div class="impressao-topo">
          <h1>QR Codes das mesas</h1>
          <p><b>${esc(D.nome)}</b> · cada QR abre o cardápio já com o número da mesa. Imprima em papel A4 (4 por folha), recorte e coloque em displays de acrílico nas mesas.</p>
          ${D.demo ? '<p class="nota suave">Exemplo: no cardápio real, os QR Codes apontam para o link publicado do cliente.</p>'
            : !D.url ? '<p class="aviso">Preencha o campo <b>url</b> no dados.js com o link publicado. Sem ele, os QR Codes apontam para este computador.</p>' : ""}
          <div class="impressao-controles">
            <label>Da mesa <input type="number" id="m-de" value="1" min="1" max="200"></label>
            <label>até <input type="number" id="m-ate" value="${total}" min="1" max="200"></label>
            <button type="button" class="btn-principal tema" id="m-imprimir">Imprimir</button>
          </div>
        </div>
        <div class="cartoes"></div>
      </div>`;
    function desenhar() {
      const de = Math.max(1, +$("#m-de").value || 1), ate = Math.min(de + 199, Math.max(de, +$("#m-ate").value || de));
      const cartoes = [];
      for (let n = de; n <= ate; n++) cartoes.push(`
        <div class="cartao-mesa">
          <div class="cm-topo">
            <div class="cm-logo">${D.logo ? `<img src="${esc(D.logo)}" alt="">` : esc(iniciais(D.nome))}</div>
            <p class="cm-nome">${esc(D.nome)}</p>
          </div>
          <p class="cm-mesa"><small>Mesa</small>${n}</p>
          <div class="cm-qr" data-url="${esc(urlMesa(n))}"></div>
          <p class="cm-chamada"><b>Aponte a câmera do celular</b>veja o cardápio e faça seu pedido daqui mesmo</p>
          ${S && S.wifi && S.wifi.rede ? `<p class="cm-wifi">Wi-Fi: ${esc(S.wifi.rede)}${S.wifi.senha ? " · senha: " + esc(S.wifi.senha) : ""}</p>` : ""}
        </div>`);
      $(".cartoes", raiz).innerHTML = cartoes.join("");
      (function gerar() {
        if (!window.QRCode) return void setTimeout(gerar, 150);
        $$(".cm-qr", raiz).forEach((el) => new window.QRCode(el, { text: el.dataset.url, width: 240, height: 240, colorDark: "#111111", colorLight: "#ffffff", correctLevel: window.QRCode.CorrectLevel.M }));
      })();
    }
    $("#m-de").addEventListener("change", desenhar);
    $("#m-ate").addEventListener("change", desenhar);
    $("#m-imprimir").addEventListener("click", () => window.print());
    desenhar();
  }

  // ---------- compartilhar e QR ----------
  function urlCardapio() { return D.url || location.href.split(/[?#]/)[0] + location.hash; }
  async function compartilhar() {
    const dados = { title: D.nome, text: `Confira o cardápio de ${D.nome}`, url: urlCardapio() };
    if (navigator.share) { try { await navigator.share(dados); } catch (e) {} return; }
    try { await navigator.clipboard.writeText(dados.url); toast("Link copiado!"); }
    catch (e) { window.open("https://wa.me/?text=" + encodeURIComponent(dados.text + " " + dados.url), "_blank"); }
  }
  function abrirQR() {
    abrirPainel(`<div class="centro"><h2>QR Code do cardápio</h2>
      <p class="desc">Para o balcão, os panfletos e as embalagens.</p>
      <div class="qr-caixa" id="qr"></div>
      <p class="link-copia">${esc(urlCardapio())}</p>
      <button type="button" class="btn-principal tema" data-acao="baixar-qr">Baixar imagem do QR Code</button>
      ${S ? `<a class="btn-secundario" href="?imprimir=mesas${esc(location.hash)}" target="_blank" rel="noopener">QR Codes das mesas para imprimir</a>` : ""}</div>`, "qr", "QR Code");
    const alvo = $("#qr");
    if (window.QRCode) new window.QRCode(alvo, { text: urlCardapio(), width: 200, height: 200, colorDark: "#111111", colorLight: "#ffffff", correctLevel: window.QRCode.CorrectLevel.M });
    else alvo.innerHTML = '<p style="color:#111;font-size:13px">Sem internet para gerar o QR agora.</p>';
  }
  function baixarQR() {
    const c = $("#qr canvas"), img = $("#qr img");
    const a = document.createElement("a");
    a.href = c ? c.toDataURL("image/png") : img && img.src;
    a.download = "qrcode-" + semAcento(D.nome).replace(/[^a-z0-9]+/g, "-") + ".png";
    a.click();
  }
  async function copiarWifi() {
    try { await navigator.clipboard.writeText(S.wifi.senha); toast("Senha do Wi-Fi copiada"); }
    catch (e) { toast("Senha: " + S.wifi.senha); }
  }

  // ---------- busca e navegação ----------
  function buscar(termo) {
    const t = semAcento(termo.trim());
    let algum = false;
    $$("[data-categoria]", raiz).forEach((sec) => {
      let visiveis = 0;
      $$("[data-busca]", sec).forEach((it) => { const ok = !t || it.dataset.busca.includes(t); it.hidden = !ok; if (ok) visiveis++; });
      sec.hidden = !visiveis; if (visiveis) algum = true;
    });
    const dest = $("#sec-destaques"); if (dest) dest.hidden = !!t;
    $(".vazio", raiz).hidden = algum;
  }

  function observarSecoes() {
    if (observador) observador.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observador = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        $$(".chip", raiz).forEach((c) => c.classList.toggle("ativo", c.dataset.ir === en.target.id));
        const ativo = $(`.chip[data-ir="${en.target.id}"]`, raiz);
        if (ativo) ativo.parentElement.scrollTo({ left: ativo.offsetLeft - 16, behavior: "smooth" });
      });
    }, { rootMargin: "-130px 0px -60% 0px" });
    $$(".secao, .secao-classica, .sugestoes-chef", raiz).forEach((s) => observador.observe(s));
  }

  // ---------- eventos ----------
  function eventos() {
    raiz.addEventListener("click", (ev) => {
      const el = ev.target.closest("[data-mais],[data-menos],[data-lmais],[data-lmenos],[data-rqtd],[data-acao],[data-ir],[data-modo],[data-pag],[data-pagconta],[data-pessoas],[data-contexto],[data-abrir],.fundo-escuro");
      if (!el) return;
      if (el.classList.contains("fundo-escuro")) return fecharPainel();
      if (el.dataset.mais) {
        ev.stopPropagation();
        const painelAberto = $(".painel", raiz).classList.contains("aberto");
        const origem = el.getBoundingClientRect(); // medido antes: o botão é redesenhado ao adicionar
        alterarSimples(el.dataset.mais, 1);
        if (!painelAberto) voar(origem);
        return;
      }
      if (el.dataset.menos) { ev.stopPropagation(); return alterarSimples(el.dataset.menos, -1); }
      if (el.dataset.lmais) return alterarLinha(+el.dataset.lmais, 1);
      if (el.dataset.lmenos) return alterarLinha(+el.dataset.lmenos, -1);
      if (el.dataset.rqtd) { rascunho.qtd = Math.max(1, Math.min(99, rascunho.qtd + +el.dataset.rqtd)); return atualizarRascunho(); }
      if (el.dataset.ir) return document.getElementById(el.dataset.ir).scrollIntoView({ behavior: "smooth" });
      if (el.dataset.modo) { modo = el.dataset.modo; salvar(); return abrirSacola(); }
      if (el.dataset.pag != null) { cliente.pag = el.dataset.pag; salvar(); return abrirSacola(); }
      if (el.dataset.pagconta != null) { conta.pag = el.dataset.pagconta; return abrirConta(); }
      if (el.dataset.pessoas) { conta.pessoas = Math.max(1, Math.min(30, conta.pessoas + +el.dataset.pessoas)); return abrirConta(); }
      if (el.dataset.contexto) {
        if (el.dataset.contexto === contexto) return;
        contexto = el.dataset.contexto; salvar(); render();
        const abas = $(".abas", raiz); if (abas) abas.scrollIntoView({ block: "start" });
        if (contexto === "salao" && !mesa) toast("Informe sua mesa para pedir");
        return;
      }
      if (el.dataset.abrir) { ev.stopPropagation(); return abrirProduto(el.dataset.abrir, $(".painel", raiz).dataset.tipo === "sacola"); }
      switch (el.dataset.acao) {
        case "sacola": return abrirSacola();
        case "fechar": return fecharPainel();
        case "enviar": return enviar();
        case "compartilhar": return compartilhar();
        case "qr": return abrirQR();
        case "baixar-qr": return baixarQR();
        case "confirmar-item": return confirmarItem();
        case "limpar": sacola = []; cliente.obs = ""; cliente.troco = ""; atualizar(); return fecharPainel();
        case "demo-contato": return toast(`No cardápio real, "${el.dataset.rotulo}" abre o contato da loja`);
        // trocar a mesa de dentro do pedido volta para o pedido
        case "mesa": acaoPendente = $(".painel", raiz).dataset.tipo === "sacola" ? abrirComanda : null; return abrirMesa();
        case "confirmar-mesa": return confirmarMesa();
        case "enviar-mesa": return enviarMesa();
        case "mostrar-garcom": return mostrarGarcom();
        case "garcom-anotou": fecharGarcom(); return registrarPedido();
        case "fechar-garcom": fecharGarcom(); return abrirComanda();
        case "chamar-garcom": return chamarGarcom();
        case "conta": return abrirConta();
        case "pedir-conta": return pedirConta();
        case "concluir-salao": { const f = aoConcluirSalao; aoConcluirSalao = null; return f ? f() : fecharPainel(); }
        case "limpar-conta": historico = []; salvar(); return abrirConta();
        case "wifi": return S.wifi.senha ? copiarWifi() : null;
      }
    });
    raiz.addEventListener("keydown", (ev) => {
      if ((ev.key === "Enter" || ev.key === " ") && ev.target.matches("article[data-abrir]")) { ev.preventDefault(); abrirProduto(ev.target.dataset.abrir); }
      if (ev.key === "Enter" && ev.target.id === "f-mesa") { ev.preventDefault(); confirmarMesa(); }
    });
    raiz.addEventListener("input", (ev) => {
      const t = ev.target;
      if (t.matches(".busca input")) return buscar(t.value);
      if (t.dataset.campo) { cliente[t.dataset.campo] = t.value; if (t.dataset.campo !== "bairro") salvar(); }
    });
    raiz.addEventListener("change", (ev) => {
      const t = ev.target;
      if (t.dataset.campo === "bairro") { cliente.bairro = t.value; salvar(); return abrirSacola(); }
      if (t.matches("[data-servico]")) { conta.servico = t.checked; return abrirConta(); }
      if (t.dataset.g != null && rascunho) {
        const g = +t.dataset.g, o = +t.dataset.o, i = porId[rascunho.id], max = i.opcoes[g].max || 1;
        if (max === 1) rascunho.sel[g] = t.checked ? [o] : [];
        else if (t.checked) rascunho.sel[g].push(o);
        else rascunho.sel[g] = rascunho.sel[g].filter((x) => x !== o);
        t.closest(".grupo").classList.remove("pendente");
        atualizarRascunho();
      }
    });
    // foto carregada aparece com um fade suave
    raiz.addEventListener("load", (ev) => { if (ev.target.tagName === "IMG") ev.target.classList.add("ok"); }, true);
    // foto que não carregar vira o emoji do produto
    raiz.addEventListener("error", (ev) => {
      const img = ev.target;
      if (img.tagName !== "IMG") return;
      if (img.classList.contains("capa-img")) img.outerHTML = `<div class="capa-arte"><span>${D.emoji || "🍽️"}</span><span>${D.emoji2 || ""}</span></div>`;
      else if (img.parentElement.classList.contains("logo")) img.parentElement.textContent = iniciais(D.nome);
      else if (img.classList.contains("miniatura")) img.outerHTML = `<span class="miniatura mini-emoji">${img.dataset.emoji || D.emoji || "🍽️"}</span>`;
      else img.outerHTML = `<div class="emoji"><span>${img.dataset.emoji || D.emoji || "🍽️"}</span></div>`;
    }, true);
    document.onkeydown = (e) => { if (e.key === "Escape" && !fecharGarcom()) fecharPainel(); };
  }

  aplicarTema();
  if (params.get("imprimir") === "mesas") return imprimirMesas();
  indexar();
  carregar();
  eventos();
  render();
  }

  window.CardapioDigital = { iniciar };
  iniciar();
})();
