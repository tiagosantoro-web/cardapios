# Cardápio Digital: modelo-base

Um único modelo de cardápio que vira o cardápio de cada cliente trocando **um arquivo de dados** (`dados.js`). Sem servidor, sem banco de dados, sem mensalidade de ferramenta.

- `vitrine.html`: os 4 exemplos num arquivo só, com uma barra para trocar de segmento. É o que você mostra no celular durante a visita. As fotos ficam nas pastas `demo-*/img`, então leve a pasta `cardapio` inteira (fontes e QR Code precisam de internet).
- `index.html`: página de vendas para mandar por link ao empresário. **Antes de usar, edite o bloco `VENDEDOR` no topo do arquivo** (sua marca, seu WhatsApp, Instagram e cidade).

Sobre os exemplos: as empresas são fictícias e as fotos vêm do Unsplash (licença gratuita, uso comercial permitido). Os preços são de referência para a região de São Paulo em 2026. Nos exemplos (`demo: true`), os botões de contato não abrem nada, para ninguém mandar mensagem a um número inventado.

## 1. Tecnologia recomendada

**HTML, CSS e JavaScript puros, com hospedagem estática gratuita.**

| Opção | Custo inicial | Custo recorrente | Velocidade para criar cada cliente | Dependência | Veredito |
|---|---|---|---|---|---|
| **HTML/CSS/JS + dados por cliente** (este projeto) | R$ 0 | R$ 0 (domínio opcional) | Rápida: só preencher `dados.js` e trocar fotos | Nenhuma | **Recomendado** |
| WordPress + plugin de cardápio | Hospedagem paga | Hospedagem + plugins premium | Média | Plugins, atualizações, segurança | Caro e lento para escalar |
| No-code (Wix, Canva Sites, etc.) | R$ 0 a plano pago | Plano pago para domínio e recursos | Média, tudo manual por cliente | Total da plataforma | Bom para 1 site, ruim para dezenas |
| PDF / imagem | R$ 0 | R$ 0 | Rápida | Nenhuma | Parece amador, sem pedido nem busca |
| Plataformas prontas de delivery | R$ 0 | Mensalidade ou comissão | Rápida | Total | É o concorrente, não a ferramenta |

Por que essa escolha:
- **Custa zero** para hospedar dezenas de cardápios (GitHub Pages, Netlify ou Cloudflare Pages, nos planos gratuitos).
- **Carrega rápido** no celular: a página inteira tem cerca de 50 KB sem as fotos.
- **Um molde para todos**: o visual e as funções ficam em `assets/`. Melhorou o modelo, todos os clientes recebem a melhoria.
- **Sem amarras**: os arquivos são seus e funcionam em qualquer hospedagem.

Custos reais para começar:
- Hospedagem: **R$ 0** (planos gratuitos acima).
- Domínio próprio (opcional): um `.com.br` no registro.br custa em torno de R$ 40 por ano; confira o valor atual no site. Um domínio seu serve para todos os clientes (`seudominio.com.br/pizzaria-do-joao`).
- Ferramentas: editor de texto gratuito (VS Code) e um compressor de imagens gratuito (squoosh.app).

## 2. O que o cardápio faz

1. Capa, logo, nome, slogan e cores do estabelecimento (o texto dos botões fica branco ou preto sozinho, conforme a cor).
2. Selo **Aberto agora · até 23:30** ou **Fechado agora · abre amanhã às 11:00**, calculado pelo horário (aceita horário que passa da meia-noite e dois turnos por dia).
3. Categorias fixas no topo, que acompanham a rolagem, e **busca** sem precisar de acento.
4. Carrossel de **destaques** (mais vendidos, promoções, combos) e preço "de/por".
5. Cards com foto, descrição, preço e etiquetas (Novo, Vegetariano, Picante, Serve 2, Sob encomenda...).
6. **Tamanhos, sabores e adicionais** com preço que soma sozinho (escolha obrigatória ou opcional, com limite de quantidade).
7. **Produto esgotado** (fica apagado e não pode ser pedido) e observação por produto ("sem cebola").
8. **Sacola**: quantidade, entrega ou retirada, **taxa fixa ou por bairro**, pedido mínimo, **entrega grátis acima de X**, pagamento, troco e observações.
9. **"Peça também"**: bebidas e sobremesas sugeridas dentro da sacola, para aumentar o valor do pedido.
10. **Mensagem organizada no WhatsApp**, com itens, opções, total, endereço e pagamento.
11. Lembra a sacola, o nome e o endereço do cliente no celular dele (só nos cardápios reais, não nos exemplos).
12. Botões de WhatsApp, Instagram, Como chegar e Ligar; **Compartilhar** e **QR Code** com download.
13. Se uma foto não carregar, o produto mostra o emoji no lugar.
14. **Pedido na mesa (aba "Estou no local")**: veja a seção 2.1.

### 2.1 Pedido na mesa

Liga com `salao: { ativo: true }` no `dados.js` (todos os exemplos já vêm ligados). O cardápio ganha a aba **Estou no local**:

- Cardápio no estilo **impresso** (moldura, títulos ornamentados, linha pontilhada até o preço, tamanhos com preço embaixo do prato).
- Cartão da mesa no topo, com **Chamar garçom** e **Minha conta**, e a senha do **Wi-Fi** com botão de copiar.
- O pedido vai para o garçom de dois jeitos (campo `envio`):
  - `"whatsapp"`: abre o WhatsApp do salão (`salao.whatsapp`, ou o número principal) com o número da mesa e os itens;
  - `"mostrar"`: tela grande e limpa para o cliente mostrar ao garçom, que funciona sem internet;
  - `"ambos"` (padrão): os dois botões.
- **Minha conta**: pedidos feitos pelo celular, com horário, taxa de serviço opcional, **divisão da conta** e forma de pagamento. O botão **Pedir a conta** avisa o salão. A conta fica guardada no celular por 12 horas.
- Produtos só para uma das abas: `somenteSalao: true` (ex.: couvert) ou `somenteDelivery: true` (ex.: combo com refrigerante 2 L).

**QR Code de cada mesa:** abra o cardápio com `?imprimir=mesas` no fim do link (ex.: `.../pizzaria-do-joao/?imprimir=mesas`) ou toque no botão de QR Code no topo e em "QR Codes das mesas para imprimir". Sai uma folha A4 com 4 cartões por página (logo, número da mesa, QR Code e Wi-Fi). Cada QR abre `.../?mesa=12`, que já entra na aba do salão com a mesa preenchida. Preencha o `url` do `dados.js` antes de imprimir.

Limite honesto: sem servidor, não existe painel de cozinha nem confirmação automática. O pedido chega no WhatsApp do salão (um celular no caixa resolve) ou é anotado pelo garçom a partir da tela.

Para depois (só quando um cliente pedir ou pagar por isso):
- Meia a meia com cálculo automático (hoje: campo de observação).
- Painel para o próprio cliente editar preços (uma planilha do Google publicada pode alimentar o `dados.js`).
- Cupom de desconto, estatísticas de acesso (Cloudflare Web Analytics é gratuito).
- Pagamento online e app próprio: não compensam no começo.

## 3. Estrutura dos arquivos

```
cardapio/
├── index.html              página de portfólio (para vender)
├── vitrine.html            as 4 demos num arquivo só (gerado)
├── assets/
│   ├── style.css           visual do modelo (igual para todos)
│   └── app.js              funcionamento (igual para todos)
├── modelo/                 ponto de partida de cada cliente
│   ├── index.html
│   └── dados.js            ← o único arquivo que muda
├── demo-hamburgueria/      exemplos (empresas fictícias), cada um com img/
├── demo-pizzaria/          (taxa por bairro, broto/grande, borda)
├── demo-adega/             (tema escuro, horário até 2h, drinks montados)
├── demo-doceria/           (açaí montado, sabores de brigadeiro, encomendas)
└── ferramentas/
    ├── novo-cliente.js / .ps1   cria a pasta de um cliente novo
    ├── gerar-vitrine.js / .ps1  refaz o vitrine.html
    └── vitrine-modelo.html      molde usado para gerar a vitrine
```

Os scripts `.ps1` fazem o mesmo que os `.js`, para quem não tem Node instalado (Windows).

## 4. Como criar o cardápio de um cliente (cerca de 1 hora com as fotos em mãos)

1. Crie a pasta, na pasta `cardapio`:
   - com Node: `node ferramentas/novo-cliente.js "Pizzaria do João"`
   - sem Node (Windows): `powershell -ExecutionPolicy Bypass -File ferramentas\novo-cliente.ps1 "Pizzaria do João"`
   - ou copie a pasta `modelo` e renomeie para `pizzaria-do-joao`.
2. Abra `pizzaria-do-joao/dados.js` e preencha nome, cores, WhatsApp, horários, entrega e produtos. Cada campo tem um comentário explicando, e os `demo-*/dados.js` são exemplos completos para copiar (tamanhos, adicionais, bairros).
3. Coloque logo e fotos em `pizzaria-do-joao/img/` e aponte no `dados.js` (`logo: "img/logo.png"`, `foto: "img/margherita.jpg"`).
   - Fotos com 800 px de largura, em WebP ou JPG, até uns 150 KB cada (use squoosh.app).
   - Sem foto, o card usa o emoji do produto. Funciona, mas **foto real é o que mais valoriza o cardápio**.
4. Confira `demo: false` e preencha `url` com o link final, que é o que o QR Code vai abrir. Para a prévia bonita ao mandar o link no WhatsApp, coloque no `index.html` do cliente `<meta property="og:image" content="https://...link-completo.../img/capa.webp">` (precisa ser o endereço completo).
5. Abra `pizzaria-do-joao/index.html` no navegador para conferir, publique e mande o link para o cliente aprovar.

Alteração de preço ou produto é editar uma linha no `dados.js` e publicar de novo.

## 5. Como testar no seu computador

Dê dois cliques em `vitrine.html` ou em qualquer `index.html`. Não precisa instalar nada.

Para testar no celular na mesma rede Wi-Fi, rode na pasta `cardapio`: `python3 -m http.server 8000` e abra `http://IP-DO-COMPUTADOR:8000` no celular.

Se você mudar um exemplo ou o `assets/`, atualize o `vitrine.html` com `node ferramentas/gerar-vitrine.js` ou, sem Node, `powershell -ExecutionPolicy Bypass -File ferramentas\gerar-vitrine.ps1`.

## 6. Como publicar de graça

**Mais rápido (Netlify Drop, sem conta técnica):**
1. Acesse app.netlify.com/drop e arraste a pasta `cardapio`.
2. Em segundos sai um link `algumacoisa.netlify.app`. Crie uma conta grátis para o link não expirar e renomeie o site (ex.: `cardapios-tiago.netlify.app`).
3. Cada cliente fica em `cardapios-tiago.netlify.app/pizzaria-do-joao/`.
4. Para atualizar, arraste a pasta de novo em "Deploys".

**Mais organizado (GitHub Pages):**
1. Crie um repositório público, por exemplo `cardapios`, e envie a pasta (pelo site: "Add file" → "Upload files").
2. Em Settings → Pages, escolha a branch `main` e a pasta raiz.
3. O endereço fica `seuusuario.github.io/cardapios/pizzaria-do-joao/`.
4. Cada alteração salva no GitHub publica sozinha em cerca de um minuto, e você tem o histórico de tudo que mudou.

**Domínio próprio:** os dois serviços aceitam domínio de graça; você só paga o registro do domínio.

## 7. QR Code

Cada cardápio tem um botão de QR Code no topo que gera o código do próprio link, com botão para baixar a imagem em PNG. Garanta que o campo `url` do `dados.js` esteja preenchido com o link publicado antes de gerar o QR para impressão. Para material impresso, coloque o QR com pelo menos 3 cm de lado e uma chamada curta ("Aponte a câmera e veja o cardápio").

## 8. Identidade visual por segmento

O modelo é o mesmo; o que muda é o `tema` no `dados.js`. Sugestões usadas nas demos:

| Segmento | Cor principal | Fundo | Fonte do título | Clima |
|---|---|---|---|---|
| Hamburgueria / lanchonete | laranja brasa `#E4572E` + amarelo | creme claro | Anton (condensada, forte) | energia, fome |
| Pizzaria / cantina | vermelho tomate `#B3261E` + verde manjericão | papel claro | Fraunces (serifada) | tradição, forno |
| Adega / distribuidora / bar | dourado `#F5B700` + roxo | **escuro** `#121016` | Oswald | noite, gelado |
| Doceria / açaí / cafeteria | framboesa `#C2185B` + rosa | rosado claro | Playfair Display (elegante) | delicado, carinho |
| Marmitaria / restaurante | verde `#2E7D32` + laranja | branco quente | Fraunces ou Manrope | caseiro, confiável |

Regras que valem para todos:
- Preço sempre na cor principal e em negrito.
- No máximo duas cores fortes; o resto é neutro.
- A cor principal precisa ter bom contraste com texto branco (botões).
- Fotos com fundo parecido entre si deixam o cardápio com cara profissional.

Adegas e bares: mantenha o aviso "Venda proibida para menores de 18 anos" no campo `assinatura`.
