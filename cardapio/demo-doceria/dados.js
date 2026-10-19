// EXEMPLO ILUSTRATIVO: estabelecimento fictício, fotos de banco de imagens (Unsplash) e preços de referência.
(function () {
  window.CARDAPIO = {
    demo: true,
    nome: "Doce Ateliê",
    slogan: "Confeitaria artesanal, açaí e cafés especiais",
    url: "",
    logo: "img/logo.svg", banner: "img/capa.webp",
    emoji: "🧁", emoji2: "🍓",
    tema: { primaria: "#C2185B", secundaria: "#F8BBD0", fundo: "#FFF5F8", superficie: "#FFFFFF", texto: "#3B1F2B", textoSuave: "#8A6B78", fonteTitulo: "Playfair Display", fonteTexto: "Manrope" },
    whatsapp: "5511900000000",
    telefone: "(11) 90000-0000",
    instagram: "@doceatelie",
    endereco: "Centro, Itapevi - SP",
    horarios: [{ dias: [1, 2, 3, 4, 5, 6], abre: "09:00", fecha: "20:00" }, { dias: [0], abre: "13:00", fecha: "19:00" }],
    entrega: { taxa: 6, pedidoMinimo: 25, gratisAcima: 100, tempo: "30-50 min", tempoRetirada: "15 min", retirada: true },
    pagamentos: ["Pix", "Cartão", "Dinheiro"],
    assinatura: "Cardápio digital · exemplo ilustrativo",
    credito: { texto: "Cardápio digital por Solodev Studio", link: "https://solodevstudio.com.br/" },
    dicaObs: "Ex.: sem granulado, embalar para presente",
    salao: { ativo: true, mesas: 10, wifi: { rede: "DoceAtelie", senha: "docinho2026" } },
    categorias: [
      { nome: "Queridinhos", itens: [
        { nome: "Caixa de brigadeiros gourmet", desc: "Feitos com chocolate belga. Escolha a caixa e até 3 sabores.", preco: 27, foto: "img/brigadeiros.webp", emoji: "🍫", tags: ["mais-vendido"], opcoes: [
          { titulo: "Caixa", min: 1, max: 1, itens: [{ nome: "6 unidades" }, { nome: "12 unidades", preco: 24 }, { nome: "25 unidades", preco: 78 }] },
          { titulo: "Sabores", min: 1, max: 3, itens: [{ nome: "Tradicional" }, { nome: "Ninho" }, { nome: "Pistache" }, { nome: "Churros" }, { nome: "Maracujá" }, { nome: "Oreo" }] }
        ]},
        { nome: "Bolo de pote Ninho com morango", desc: "250 ml. Massa fofinha, creme de leite Ninho e morangos frescos.", preco: 17.9, foto: "img/bolo-de-pote.webp", emoji: "🍓", tags: ["mais-vendido"] },
        { nome: "Brigadeiro de colher", desc: "Pote de 200 g, cremoso, com granulado belga.", preco: 19.9, foto: "img/brigadeiro-colher.webp", emoji: "🥄", tags: ["novo"] }
      ]},
      { nome: "Bolos e fatias", aviso: "Bolos inteiros sob encomenda, com 48 h de antecedência.", itens: [
        { nome: "Fatia Red Velvet", desc: "Massa aveludada e cobertura de cream cheese.", preco: 19.9, foto: "img/red-velvet.webp", emoji: "🍰" },
        { nome: "Fatia de morango com chantilly", desc: "Pão de ló, creme de baunilha e morangos.", preco: 18.9, foto: "img/fatia-morango.webp", emoji: "🍰" },
        { nome: "Fatia de mousse de chocolate", desc: "Base de brownie e mousse de chocolate meio amargo.", preco: 18.9, foto: "img/mousse.webp", emoji: "🍫" },
        { nome: "Fatia Floresta Negra", desc: "Chocolate, chantilly e cerejas ao kirsch.", preco: 19.9, foto: "img/floresta-negra.webp", emoji: "🍒" },
        { nome: "Bolo trufado de chocolate", desc: "Inteiro, com recheio e cobertura de trufa.", preco: 129, foto: "img/bolo-chocolate.webp", emoji: "🎂", tags: ["encomenda"], opcoes: [
          { titulo: "Tamanho", min: 1, max: 1, itens: [{ nome: "1 kg", desc: "Serve 10 pessoas" }, { nome: "2 kg", desc: "Serve 20 pessoas", preco: 110 }] }
        ], dicaObs: "Data e horário de retirada, frase no topo..." },
        { nome: "Naked cake de frutas vermelhas", desc: "1,5 kg. Massa de baunilha, creme e frutas frescas.", preco: 189, foto: "img/naked-cake.webp", emoji: "🎂", tags: ["encomenda"], dicaObs: "Data e horário de retirada" }
      ]},
      { nome: "Açaí e gelados", itens: [
        { nome: "Açaí na tigela", desc: "Açaí cremoso com até 4 acompanhamentos grátis.", preco: 18.9, foto: "img/acai.webp", emoji: "🍇", tags: ["mais-vendido"], opcoes: [
          { titulo: "Tamanho", min: 1, max: 1, itens: [{ nome: "300 ml" }, { nome: "500 ml", preco: 7 }, { nome: "700 ml", preco: 13 }] },
          { titulo: "Acompanhamentos grátis", max: 4, itens: [{ nome: "Granola" }, { nome: "Banana" }, { nome: "Leite em pó" }, { nome: "Paçoca" }, { nome: "Leite condensado" }, { nome: "Confete" }] },
          { titulo: "Adicionais", max: 5, itens: [{ nome: "Nutella", preco: 6 }, { nome: "Morango", preco: 4 }, { nome: "Kiwi", preco: 4 }, { nome: "Leite Ninho", preco: 3 }, { nome: "Bis picado", preco: 3 }] }
        ], dicaObs: "Ex.: granola separada, pouco leite condensado" },
        { nome: "Sundae de brownie", desc: "400 ml. Sorvete, pedaços de brownie, chantilly e calda de chocolate.", preco: 24.9, foto: "img/sundae.webp", emoji: "🍨" },
        { nome: "Milkshake de Nutella", desc: "400 ml, com chantilly e granulado.", preco: 24.9, foto: "img/shake.webp", emoji: "🥤" }
      ]},
      { nome: "Docinhos", sugerir: true, itens: [
        { nome: "Cupcake Red Velvet", desc: "Com frosting de cream cheese.", preco: 12.9, foto: "img/cupcake-red.webp", emoji: "🧁" },
        { nome: "Cupcake de Oreo", desc: "Massa de chocolate e buttercream de Oreo.", preco: 12.9, foto: "img/cupcake-oreo.webp", emoji: "🧁" },
        { nome: "Cookie com gotas de chocolate", desc: "Grande, crocante por fora e macio por dentro.", preco: 10.9, foto: "img/cookies.webp", emoji: "🍪" },
        { nome: "Brownie", desc: "Chocolate meio amargo, casquinha crocante.", preco: 11.9, foto: "img/brownie.webp", emoji: "🍫" },
        { nome: "Croissant amanteigado", desc: "Massa folhada feita na casa, saída do forno.", preco: 9.9, foto: "img/croissant.webp", emoji: "🥐" }
      ]},
      { nome: "Cafés", sugerir: true, itens: [
        { nome: "Cappuccino", desc: "300 ml, com canela e chocolate.", preco: 13.9, foto: "img/cappuccino.webp", emoji: "☕" },
        { nome: "Café latte", desc: "300 ml. Espresso de grãos especiais e leite vaporizado.", preco: 12.9, foto: "img/latte.webp", emoji: "☕", opcoes: [
          { titulo: "Leite", min: 1, max: 1, itens: [{ nome: "Integral" }, { nome: "Sem lactose", preco: 2 }, { nome: "Vegetal (aveia)", preco: 3 }] }
        ]},
        { nome: "Mocha com chantilly", desc: "300 ml. Espresso, chocolate, leite e chantilly.", preco: 16.9, foto: "img/mocha.webp", emoji: "☕" }
      ]}
    ]
  };
})();
