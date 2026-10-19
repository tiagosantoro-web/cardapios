// EXEMPLO ILUSTRATIVO: estabelecimento fictício, fotos de banco de imagens (Unsplash) e preços de referência.
(function () {
  window.CARDAPIO = {
    demo: true,
    nome: "Adega Noite Gelada",
    slogan: "Cerveja trincando, drinks na hora e entrega até as 2h",
    url: "",
    logo: "img/logo.svg", banner: "img/capa.webp",
    emoji: "🍾", emoji2: "🧊",
    tema: { primaria: "#F5B700", secundaria: "#7B2CBF", fundo: "#121016", superficie: "#1D1A23", texto: "#F4F1F8", textoSuave: "#A39CAE", borda: "rgba(255,255,255,0.10)", fonteTitulo: "Oswald", fonteTexto: "Manrope" },
    whatsapp: "5511900000000",
    telefone: "(11) 90000-0000",
    instagram: "@noitegelada",
    endereco: "Jardim Briquet, Itapevi - SP",
    aviso: "🔞 Venda proibida para menores de 18 anos. O documento pode ser pedido na entrega.",
    horarios: [{ dias: [0, 1, 2, 3, 4, 5, 6], abre: "10:00", fecha: "02:00" }],
    entrega: { taxa: 6, pedidoMinimo: 35, gratisAcima: 150, tempo: "20-35 min", tempoRetirada: "10 min", retirada: true },
    pagamentos: ["Pix", "Cartão na entrega", "Dinheiro"],
    assinatura: "Beba com moderação · Se beber, não dirija · Exemplo ilustrativo",
    credito: { texto: "Cardápio digital por Solodev Studio", link: "https://solodevstudio.com.br/" },
    salao: { ativo: true, mesas: 12, taxaServico: 10, tituloDestaques: "Mais pedidos da noite", wifi: { rede: "NoiteGelada", senha: "gelada2026" } },
    categorias: [
      { nome: "Combos", itens: [
        { nome: "Balde Resenha", desc: "6 long necks no balde com gelo. Escolha a cerveja.", preco: 64.9, precoAntigo: 74, foto: "img/balde-resenha.webp", emoji: "🍻", tags: ["promo", "combo"], opcoes: [
          { titulo: "Cerveja", min: 1, max: 1, itens: [{ nome: "Pilsen" }, { nome: "Puro malte", preco: 8 }, { nome: "Artesanal IPA", preco: 24 }] }
        ]},
        { nome: "Combo Whisky + Energético", desc: "Whisky 8 anos 1 L, 4 energéticos 473 ml e gelo de coco.", preco: 179.9, foto: "img/combo-whisky.webp", emoji: "🥃", tags: ["mais-vendido", "combo"], opcoes: [
          { titulo: "Sabor do energético", min: 1, max: 1, itens: [{ nome: "Tradicional" }, { nome: "Tropical" }, { nome: "Melancia" }, { nome: "Sem açúcar" }] }
        ]},
        { nome: "Combo Gin Tônica", desc: "Gin 750 ml, 4 tônicas, especiarias e limão-siciliano.", preco: 139.9, foto: "img/combo-gin.webp", emoji: "🍸", tags: ["combo"] }
      ]},
      { nome: "Cervejas", aviso: "Todas trincando. Gelo e carvão: consulte pelo WhatsApp.", itens: [
        { nome: "Puro malte long neck", desc: "355 ml. A mais pedida para a resenha.", preco: 9.9, foto: "img/puro-malte.webp", emoji: "🍺", tags: ["gelada", "mais-vendido"] },
        { nome: "Chopp pilsen growler", desc: "1 litro de chopp tirado na hora, no growler de vidro.", preco: 24.9, foto: "img/pilsen.webp", emoji: "🍺", tags: ["gelada"] },
        { nome: "IPA artesanal", desc: "Garrafa 500 ml. Amargor médio e notas cítricas.", preco: 21.9, foto: "img/artesanais.webp", emoji: "🍺", tags: ["gelada"] },
        { nome: "Stout artesanal", desc: "Garrafa 500 ml. Encorpada, com notas de café e chocolate.", preco: 22.9, foto: "img/stout.webp", emoji: "🍺" },
        { nome: "Kit degustação", desc: "4 estilos artesanais de 355 ml para provar.", preco: 64.9, foto: "img/degustacao.webp", emoji: "🍻", tags: ["novo"] }
      ]},
      { nome: "Drinks", aviso: "Feitos na hora, copo de 500 ml com tampa.", itens: [
        { nome: "Caipirinha", desc: "Fruta amassada na hora, açúcar ou adoçante e muito gelo.", preco: 22.9, foto: "img/caipirinha.webp", emoji: "🍹", tags: ["mais-vendido"], opcoes: [
          { titulo: "Base", min: 1, max: 1, itens: [{ nome: "Cachaça" }, { nome: "Vodka", preco: 4 }, { nome: "Saquê", preco: 6 }] },
          { titulo: "Fruta", min: 1, max: 1, itens: [{ nome: "Limão" }, { nome: "Morango", preco: 2 }, { nome: "Maracujá", preco: 2 }, { nome: "Kiwi", preco: 3 }] }
        ], dicaObs: "Ex.: com adoçante, pouco gelo" },
        { nome: "Aperol Spritz", desc: "Aperol, espumante, água com gás e rodela de laranja.", preco: 34.9, foto: "img/spritz.webp", emoji: "🍊" },
        { nome: "Mojito", desc: "Rum, hortelã, limão, açúcar e água com gás.", preco: 28.9, foto: "img/mojito.webp", emoji: "🌿" },
        { nome: "Drink Tropical", desc: "Vodka, maracujá, laranja e xarope de baunilha.", preco: 26.9, foto: "img/tropical.webp", emoji: "🍸", tags: ["novo"] },
        { nome: "Old Fashioned", desc: "Bourbon, açúcar, angostura e casca de laranja.", preco: 36.9, foto: "img/old-fashioned.webp", emoji: "🥃" },
        { nome: "Dry Martini", desc: "Gin, vermute seco e azeitonas.", preco: 34.9, foto: "img/dry-martini.webp", emoji: "🍸" }
      ]},
      { nome: "Vinhos", itens: [
        { nome: "Malbec argentino", desc: "Garrafa 750 ml. Tinto seco, frutado e macio.", preco: 79.9, foto: "img/tinto.webp", emoji: "🍷" },
        { nome: "Sauvignon Blanc chileno", desc: "Garrafa 750 ml. Branco seco e refrescante.", preco: 69.9, foto: "img/branco.webp", emoji: "🥂" }
      ]},
      { nome: "Petiscos", sugerir: true, itens: [
        { nome: "Asinhas barbecue", desc: "12 asinhas assadas com molho barbecue defumado.", preco: 39.9, foto: "img/asinhas.webp", emoji: "🍗", tags: ["serve-2"] },
        { nome: "Batata frita", desc: "400 g, sequinha, com sal e alecrim.", preco: 24.9, foto: "img/fritas.webp", emoji: "🍟" },
        { nome: "Costelinha barbecue", desc: "500 g de costela suína assada lentamente.", preco: 59.9, foto: "img/costelinha.webp", emoji: "🍖", tags: ["serve-2"] }
      ]},
      { nome: "Sem álcool", sugerir: true, itens: [
        { nome: "Suco de laranja", desc: "500 ml, natural.", preco: 11.9, foto: "img/suco.webp", emoji: "🍊" },
        { nome: "Limonada suíça", desc: "500 ml. Limão batido com leite condensado.", preco: 13.9, foto: "img/limonada.webp", emoji: "🍋" }
      ]}
    ]
  };
})();
