// EXEMPLO ILUSTRATIVO: estabelecimento fictício, fotos de banco de imagens (Unsplash) e preços de referência.
(function () {
  const TURBINAR = { titulo: "Turbine seu burger", max: 4, itens: [
    { nome: "Bacon crocante", preco: 5 },
    { nome: "Cheddar extra", preco: 4 },
    { nome: "Carne extra (90 g)", preco: 9 },
    { nome: "Cebola caramelizada", preco: 3 },
    { nome: "Ovo na chapa", preco: 3 }
  ]};
  const VIRAR_COMBO = { titulo: "Transforme em combo", max: 1, itens: [
    { nome: "Batata média + refri lata", desc: "Sai R$ 6 mais barato que separado", preco: 19.9 }
  ]};
  const REFRI = { titulo: "Refrigerante", min: 1, max: 1, itens: [
    { nome: "Cola" }, { nome: "Cola zero" }, { nome: "Guaraná" }, { nome: "Laranja" }
  ]};

  window.CARDAPIO = {
    demo: true,
    nome: "Brasa Burger",
    slogan: "Smash burger na chapa, pão brioche e muito queijo",
    url: "",
    logo: "img/logo.svg", banner: "img/capa.webp",
    emoji: "🍔", emoji2: "🍟",
    tema: { primaria: "#E4572E", secundaria: "#FFC914", fundo: "#FFF7EE", superficie: "#FFFFFF", texto: "#1E1A17", textoSuave: "#6E655E", fonteTitulo: "Anton", fonteTexto: "Manrope" },
    whatsapp: "5511900000000",
    telefone: "(11) 90000-0000",
    instagram: "@brasaburger",
    endereco: "Centro, Itapevi - SP",
    horarios: [{ dias: [0, 1, 2, 3, 4, 5, 6], abre: "11:00", fecha: "23:30" }],
    entrega: { taxa: 7, pedidoMinimo: 30, gratisAcima: 90, tempo: "35-50 min", tempoRetirada: "20 min", retirada: true },
    pagamentos: ["Pix", "Cartão na entrega", "Dinheiro", "Vale-refeição"],
    assinatura: "Cardápio digital · exemplo ilustrativo",
    dicaObs: "Ex.: sem cebola, sem picles, molho à parte",
    salao: { ativo: true, mesas: 16, taxaServico: 10, wifi: { rede: "BrasaBurger", senha: "smash2026" } },
    categorias: [
      { nome: "Combos", itens: [
        { nome: "Combo Brasa", desc: "Smash Duplo + batata média + refri lata. O pedido mais pedido da casa.", preco: 44.9, precoAntigo: 52.7, foto: "img/combo-brasa.webp", emoji: "🍔", tags: ["promo", "combo"], opcoes: [REFRI] },
        { nome: "Combo Casal", desc: "2 Brasa Clássico, batata grande com cheddar e bacon e 2 refris lata.", preco: 99.9, precoAntigo: 116.6, foto: "img/combo-casal.webp", emoji: "🍟", tags: ["combo", "serve-2"] }
      ]},
      { nome: "Burgers", aviso: "Todos no pão brioche selado na manteiga. Carne 100% bovina, moída na casa.", itens: [
        { nome: "Brasa Clássico", desc: "Blend 120 g, cheddar, picles, cebola e molho da casa.", preco: 29.9, foto: "img/brasa-classico.webp", emoji: "🍔", tags: ["mais-vendido"], opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Smash Duplo", desc: "Dois smash de 90 g bem selados, cheddar duplo, cebola na chapa e molho da casa.", preco: 36.9, foto: "img/smash-duplo.webp", emoji: "🍔", tags: ["mais-vendido"], opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Bacon Lovers", desc: "Dois smash de 90 g, cheddar, muito bacon crocante e maionese defumada.", preco: 39.9, foto: "img/bacon-lovers.webp", emoji: "🥓", opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Cheddar Melt", desc: "Blend 150 g, cheddar cremoso escorrendo, bacon e cebola crispy.", preco: 38.9, foto: "img/cheddar-melt.webp", emoji: "🧀", opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Brasa Salada", desc: "Blend 150 g, queijo prato, alface americana, tomate, cebola roxa e maionese verde.", preco: 32.9, foto: "img/salada.webp", emoji: "🥬", opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Inferno", desc: "Blend 150 g, pepper jack, jalapeño, bacon e molho de pimenta defumada.", preco: 38.9, foto: "img/inferno.webp", emoji: "🌶️", tags: ["picante"], opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Brasa Triplo", desc: "Três smash de 90 g, cheddar triplo e bacon. Para quem chega com fome.", preco: 46.9, foto: "img/brasa-triplo.webp", emoji: "🍔", opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Chicken Crispy", desc: "Sobrecoxa empanada e crocante, coleslaw, picles e maionese de alho.", preco: 31.9, foto: "img/chicken-crispy.webp", emoji: "🍗", tags: ["novo"], opcoes: [TURBINAR, VIRAR_COMBO] },
        { nome: "Veggie da Horta", desc: "Burger de grão-de-bico e quinoa, queijo, guacamole, tomate e rúcula.", preco: 32.9, foto: "img/veggie.webp", emoji: "🥑", tags: ["vegetariano"], opcoes: [VIRAR_COMBO] }
      ]},
      { nome: "Porções", sugerir: true, itens: [
        { nome: "Batata rústica", desc: "Com casca, páprica e alecrim. Acompanha maionese da casa.", preco: 19.9, foto: "img/batata-rustica.webp", emoji: "🍟", opcoes: [
          { titulo: "Tamanho", min: 1, max: 1, itens: [{ nome: "Média", desc: "250 g · serve 1" }, { nome: "Grande", desc: "450 g · serve 2", preco: 9 }] }
        ]},
        { nome: "Batata cheddar e bacon", desc: "Batata frita coberta com cheddar cremoso e bacon em cubos.", preco: 32.9, foto: "img/batata-cheddar.webp", emoji: "🧀", tags: ["mais-vendido", "serve-2"] },
        { nome: "Onion rings", desc: "12 anéis de cebola empanados na farinha panko, com barbecue.", preco: 26.9, foto: "img/onion-rings.webp", emoji: "🧅" },
        { nome: "Frango crocante", desc: "10 tiras de frango empanadas com dois molhos à escolha.", preco: 34.9, foto: "img/frango-crocante.webp", emoji: "🍗", tags: ["serve-2"] }
      ]},
      { nome: "Bebidas", sugerir: true, itens: [
        { nome: "Milkshake de Oreo", desc: "400 ml. Sorvete de creme batido com Oreo e calda de chocolate.", preco: 22.9, foto: "img/shake-oreo.webp", emoji: "🥤", tags: ["mais-vendido"] },
        { nome: "Milkshake de morango", desc: "400 ml. Sorvete de creme com morangos frescos.", preco: 22.9, foto: "img/shake-morango.webp", emoji: "🍓" },
        { nome: "Refrigerante lata", desc: "350 ml, bem gelado.", preco: 7, foto: "img/refrigerante.webp", emoji: "🥤", opcoes: [REFRI] },
        { nome: "Limonada de morango", desc: "500 ml. Limão espremido na hora, morango e hortelã.", preco: 14.9, foto: "img/limonada-morango.webp", emoji: "🍹", tags: ["novo"] }
      ]}
    ]
  };
})();
