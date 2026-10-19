// EXEMPLO ILUSTRATIVO: estabelecimento fictício, fotos de banco de imagens (Unsplash) e preços de referência.
(function () {
  const TAMANHO = (grande) => ({ titulo: "Tamanho", min: 1, max: 1, itens: [
    { nome: "Broto", desc: "25 cm · 4 fatias" },
    { nome: "Grande", desc: "35 cm · 8 fatias", preco: grande }
  ]});
  const BORDA = { titulo: "Borda recheada", max: 1, itens: [
    { nome: "Catupiry", preco: 12 }, { nome: "Cheddar", preco: 12 }, { nome: "Chocolate", preco: 14 }
  ]};
  const OBS = "Ex.: meia calabresa, sem cebola, bem assada";

  window.CARDAPIO = {
    demo: true,
    nome: "Forno Nonna",
    slogan: "Massa de longa fermentação, assada no forno a lenha",
    url: "",
    logo: "img/logo.svg", banner: "img/capa.webp",
    emoji: "🍕", emoji2: "🍅",
    tema: { primaria: "#B3261E", secundaria: "#2E7D32", fundo: "#FBF6EF", superficie: "#FFFFFF", texto: "#2A1D17", textoSuave: "#7A6A60", fonteTitulo: "Fraunces", fonteTexto: "Manrope" },
    whatsapp: "5511900000000",
    telefone: "(11) 90000-0000",
    instagram: "@fornonna",
    endereco: "Vila Nova Itapevi, Itapevi - SP",
    horarios: [{ dias: [0, 2, 3, 4, 5, 6], abre: "18:00", fecha: "23:30" }],
    entrega: {
      pedidoMinimo: 45, tempo: "45-60 min", tempoRetirada: "25 min", retirada: true,
      // taxa por bairro: o cliente escolhe o bairro na sacola
      bairros: [
        { nome: "Vila Nova Itapevi", taxa: 5 },
        { nome: "Centro", taxa: 6 },
        { nome: "Jardim Briquet", taxa: 7 },
        { nome: "Cohab", taxa: 8 },
        { nome: "Amador Bueno", taxa: 12 }
      ]
    },
    pagamentos: ["Pix", "Cartão na entrega", "Dinheiro", "Vale-refeição"],
    assinatura: "Cardápio digital · exemplo ilustrativo",
    categorias: [
      { nome: "Promoções", itens: [
        { nome: "Terça em Dobro", desc: "2 pizzas grandes tradicionais. Diga os sabores na observação.", preco: 119.9, precoAntigo: 144, foto: "img/terca-dobro.webp", emoji: "🍕", tags: ["promo"], dicaObs: "Ex.: 1 margherita e 1 calabresa" },
        { nome: "Combo Família", desc: "1 pizza grande tradicional + 1 broto doce + refrigerante 2 L.", preco: 109.9, precoAntigo: 128, foto: "img/combo-familia.webp", emoji: "👨‍👩‍👧", tags: ["combo", "serve-4"], dicaObs: "Ex.: grande portuguesa, broto de chocolate, guaraná" }
      ]},
      { nome: "Pizzas tradicionais", aviso: "Molho de tomate italiano e muçarela em todas. Meia a meia? Escreva na observação.", itens: [
        { nome: "Margherita", desc: "Muçarela de búfala, tomate, manjericão fresco e azeite extravirgem.", preco: 42, foto: "img/margherita.webp", emoji: "🍕", tags: ["mais-vendido"], opcoes: [TAMANHO(28), BORDA], dicaObs: OBS },
        { nome: "Calabresa", desc: "Calabresa artesanal fatiada, cebola roxa e azeitonas pretas.", preco: 39, foto: "img/calabresa.webp", emoji: "🍕", opcoes: [TAMANHO(26), BORDA], dicaObs: OBS },
        { nome: "Portuguesa", desc: "Presunto, ovos, cebola, ervilha, pimentão e azeitonas.", preco: 44, foto: "img/portuguesa.webp", emoji: "🍳", opcoes: [TAMANHO(28), BORDA], dicaObs: OBS },
        { nome: "Frango com Catupiry", desc: "Frango desfiado temperado e Catupiry original.", preco: 44, foto: "img/frango-catupiry.webp", emoji: "🍗", tags: ["mais-vendido"], opcoes: [TAMANHO(28), BORDA], dicaObs: OBS },
        { nome: "Quatro Queijos", desc: "Muçarela, provolone, gorgonzola e parmesão.", preco: 46, foto: "img/quatro-queijos.webp", emoji: "🧀", opcoes: [TAMANHO(30), BORDA], dicaObs: OBS },
        { nome: "Pepperoni", desc: "Pepperoni fatiado fino e mel de pimenta.", preco: 46, foto: "img/pepperoni.webp", emoji: "🌶️", tags: ["picante"], opcoes: [TAMANHO(30), BORDA], dicaObs: OBS }
      ]},
      { nome: "Pizzas especiais", itens: [
        { nome: "Burrata e Rúcula", desc: "Burrata inteira no centro, rúcula, tomate-cereja e pesto de manjericão.", preco: 54, foto: "img/burrata.webp", emoji: "🌿", tags: ["novo"], opcoes: [TAMANHO(34)], dicaObs: OBS },
        { nome: "Parma e Rúcula", desc: "Presunto de Parma, rúcula, lascas de parmesão e redução de balsâmico.", preco: 56, foto: "img/parma-rucula.webp", emoji: "🍕", opcoes: [TAMANHO(36)], dicaObs: OBS },
        { nome: "Horta da Nonna", desc: "Abobrinha, berinjela, pimentões assados, cebola roxa e muçarela.", preco: 48, foto: "img/vegetariana.webp", emoji: "🥗", tags: ["vegetariano"], opcoes: [TAMANHO(30)], dicaObs: OBS }
      ]},
      { nome: "Entradas", itens: [
        { nome: "Bruschetta de tomate", desc: "4 fatias de pão de fermentação natural, tomate, manjericão e azeite.", preco: 28.9, foto: "img/bruschetta.webp", emoji: "🍅" }
      ]},
      { nome: "Sobremesas", sugerir: true, itens: [
        { nome: "Petit gâteau", desc: "Bolinho de chocolate com recheio cremoso e sorvete de creme.", preco: 26.9, foto: "img/petit-gateau.webp", emoji: "🍫" },
        { nome: "Brownie com sorvete", desc: "Brownie de chocolate meio amargo, sorvete e calda quente.", preco: 22.9, foto: "img/brownie.webp", emoji: "🍨", esgotado: true }
      ]},
      { nome: "Bebidas", sugerir: true, itens: [
        { nome: "Vinho tinto da casa", desc: "Garrafa 750 ml. Tinto seco chileno, ótimo com pizza.", preco: 69.9, foto: "img/vinho.webp", emoji: "🍷" },
        { nome: "Cerveja artesanal", desc: "Garrafa 500 ml. Lager ou IPA de cervejaria da região.", preco: 19.9, foto: "img/cerveja.webp", emoji: "🍺", opcoes: [
          { titulo: "Estilo", min: 1, max: 1, itens: [{ nome: "Lager" }, { nome: "IPA", preco: 3 }] }
        ]},
        { nome: "Suco natural de laranja", desc: "500 ml, espremido na hora.", preco: 12.9, foto: "img/suco.webp", emoji: "🍊" },
        { nome: "Soda italiana", desc: "400 ml. Morango, maçã verde ou frutas vermelhas.", preco: 14.9, foto: "img/soda-italiana.webp", emoji: "🍹" }
      ]}
    ]
  };
})();
