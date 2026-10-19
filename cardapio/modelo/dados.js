// ============================================================
//  DADOS DO CLIENTE — o único arquivo que você edita por cliente
//  Copie a pasta "modelo" com o nome do cliente e preencha abaixo.
//  Dica: os arquivos demo-*/dados.js são exemplos completos para copiar.
// ============================================================
(function () {
  // Grupos de opções que se repetem em vários produtos podem ficar aqui em cima
  // e ser usados em "opcoes: [ADICIONAIS]". Apague se não precisar.
  const ADICIONAIS = { titulo: "Adicionais", max: 3, itens: [
    { nome: "Bacon", preco: 5 },
    { nome: "Queijo extra", preco: 4 }
  ]};

  window.CARDAPIO = {
    demo: false,                      // true mostra a faixa "exemplo" e não abre os contatos
    nome: "Nome do Estabelecimento",
    slogan: "Uma frase curta sobre a casa",
    url: "",                          // link final publicado (usado no QR Code e no compartilhar)

    // Imagens: coloque os arquivos na pasta img/ do cliente.
    // Vazio = usa as iniciais do nome (logo) e uma arte com o emoji (capa).
    logo: "",                         // ex.: "img/logo.png" (quadrado, 300 x 300 px)
    banner: "",                       // ex.: "img/capa.webp" (1200 x 520 px)
    emoji: "🍽️", emoji2: "",

    // Cores e fontes (fontes do Google Fonts: https://fonts.google.com)
    tema: {
      primaria: "#E4572E",            // botões, preços, destaques
      secundaria: "#FFC914",          // detalhes e etiquetas
      fundo: "#FFF7EE",
      superficie: "#FFFFFF",          // fundo dos cards
      texto: "#1E1A17",
      textoSuave: "#6E655E",
      fonteTitulo: "Anton",
      fonteTexto: "Manrope"
      // textoSobrePrimaria: "#FFFFFF" // opcional: o modelo já escolhe branco ou preto sozinho
    },

    // Contato (deixe "" para esconder o botão)
    whatsapp: "5511999999999",        // 55 + DDD + número, só dígitos
    telefone: "(11) 99999-9999",
    instagram: "@perfil",
    endereco: "Rua, número - Bairro, Cidade - UF",
    aviso: "",                        // recado em destaque no topo (ex.: "Fechado no feriado de 15/11")

    // Dias: 0=Dom 1=Seg 2=Ter 3=Qua 4=Qui 5=Sex 6=Sáb. Pode passar da meia-noite (ex.: 18:00 às 02:00).
    // Dois turnos no mesmo dia = duas linhas com o mesmo dia.
    horarios: [
      { dias: [1, 2, 3, 4, 5, 6], abre: "11:00", fecha: "22:00" }
    ],

    entrega: {
      taxa: 5,                        // apague "taxa" (e "bairros") se o local não faz entrega
      pedidoMinimo: 20,               // vale só para entrega
      gratisAcima: 0,                 // ex.: 80 = entrega grátis acima de R$ 80 (0 = não usa)
      tempo: "30-45 min",
      tempoRetirada: "20 min",
      retirada: true                  // false = só entrega
      // Taxa por bairro (substitui "taxa"; o cliente escolhe o bairro na sacola):
      // bairros: [ { nome: "Centro", taxa: 5 }, { nome: "Jardim América", taxa: 8 } ]
    },
    pagamentos: ["Pix", "Cartão na entrega", "Dinheiro"],  // "Dinheiro" pergunta o troco
    assinatura: "Cardápio digital",
    dicaObs: "Ex.: tirar algum ingrediente", // exemplo no campo de observação dos produtos
    credito: { texto: "", link: "" }, // ex.: { texto: "Quer um cardápio assim? Fale comigo", link: "https://wa.me/55..." }

    // ---------------- PRODUTOS ----------------
    // Etiquetas: "mais-vendido", "promo", "destaque", "novo", "vegano", "vegetariano", "picante",
    //            "combo", "gelada", "sem-gluten", "serve-2", "serve-4", "encomenda"
    // Itens com "mais-vendido", "promo" ou "destaque" aparecem no carrossel do topo.
    // Campos do produto:
    //   foto: "img/x-burger.webp" (800 px de largura, até 150 KB). Sem foto, usa o emoji.
    //   precoAntigo: mostra o preço riscado (promoção)
    //   esgotado: true            → aparece apagado e não deixa pedir
    //   aPartirDe: true           → escreve "a partir de" antes do preço
    //   dicaObs: "Ex.: sem cebola" → texto de exemplo no campo de observação do produto
    //   opcoes: [ ... ]           → tamanhos, sabores, adicionais (veja abaixo)
    // Grupo de opções: { titulo, min, max, itens: [{ nome, preco, desc, esgotado }] }
    //   min: 1, max: 1 → escolha obrigatória de uma (ex.: tamanho)
    //   max: 3         → até 3, opcional (ex.: adicionais)
    //   preco do item da opção é SOMADO ao preço do produto (vazio = grátis)
    // Categoria com sugerir: true → seus produtos aparecem como "Peça também" na sacola (bebidas, sobremesas).
    categorias: [
      { nome: "Lanches", aviso: "", itens: [
        { nome: "Produto simples", desc: "Descrição curta e apetitosa.", preco: 19.9, foto: "", emoji: "🍔", tags: ["mais-vendido"] },
        { nome: "Produto com opções", desc: "Escolha o tamanho e os adicionais.", preco: 24.9, foto: "", emoji: "🍔", opcoes: [
          { titulo: "Tamanho", min: 1, max: 1, itens: [{ nome: "Simples" }, { nome: "Duplo", preco: 8 }] },
          ADICIONAIS
        ]}
      ]},
      { nome: "Bebidas", sugerir: true, itens: [
        { nome: "Refrigerante lata", desc: "350 ml.", preco: 6.5, emoji: "🥤" }
      ]}
    ]
  };
})();
