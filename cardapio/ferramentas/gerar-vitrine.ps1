# Gera vitrine.html (mesma função do gerar-vitrine.js, para quem não tem Node instalado).
# Uso, na pasta cardapio:  powershell -ExecutionPolicy Bypass -File ferramentas\gerar-vitrine.ps1
$raiz = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding $false
function Ler($f) { [IO.File]::ReadAllText((Join-Path $raiz $f), $utf8) }

$demos = @(
  @("hamburgueria", "&#127828; Hamburgueria"),
  @("pizzaria", "&#127829; Pizzaria"),
  @("adega", "&#127870; Adega"),
  @("doceria", "&#129473; Doceria e a&ccedil;a&iacute;")
)
$dados = ($demos | ForEach-Object {
  $k = $_[0]
  (Ler "demo-$k\dados.js").Replace("window.CARDAPIO =", "DEMOS[`"$k`"] =").Replace('"img/', "`"demo-$k/img/")
}) -join "`n"
$botoes = ($demos | ForEach-Object { "<button type=`"button`" data-demo=`"$($_[0])`" aria-pressed=`"false`">$($_[1])</button>" }) -join "`n    "

$html = (Ler "ferramentas\vitrine-modelo.html").Replace("/*CSS*/", (Ler "assets\style.css")).Replace("<!--BOTOES-->", $botoes).Replace("/*DADOS*/", $dados).Replace("/*APP*/", (Ler "assets\app.js"))
[IO.File]::WriteAllText((Join-Path $raiz "vitrine.html"), $html, $utf8)
"vitrine.html gerado ({0} KB)" -f [math]::Round($html.Length / 1024)
