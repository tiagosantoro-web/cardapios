# Cria a pasta de um novo cliente a partir do modelo (mesma função do novo-cliente.js, sem precisar de Node).
# Uso, na pasta cardapio:  powershell -ExecutionPolicy Bypass -File ferramentas\novo-cliente.ps1 "Pizzaria do Joao"
param([string]$nome)
$slug = $nome.ToLower().Normalize([Text.NormalizationForm]::FormD) -replace '\p{Mn}', '' -replace '[^a-z0-9]+', '-' -replace '^-|-$', ''
if (-not $slug) { "Uso: powershell -File ferramentas\novo-cliente.ps1 `"Nome do cliente`""; exit 1 }
$raiz = Split-Path -Parent $PSScriptRoot
$destino = Join-Path $raiz $slug
if (Test-Path $destino) { "Ja existe: $slug"; exit 1 }
New-Item -ItemType Directory -Force (Join-Path $destino "img") | Out-Null
Copy-Item (Join-Path $raiz "modelo\index.html"), (Join-Path $raiz "modelo\dados.js") $destino
"Pronto! Edite $slug\dados.js e coloque as fotos em $slug\img\"
