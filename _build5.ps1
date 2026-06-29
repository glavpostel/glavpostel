$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)

# 1) locate & copy hero image (no hardcoded non-ASCII path)
$parent = Split-Path (Get-Location) -Parent
$src = Get-ChildItem -LiteralPath $parent -Recurse -Filter '20.png' -File | Select-Object -First 1
if($src -eq $null){ throw '20.png not found under parent' }
Copy-Item -LiteralPath $src.FullName -Destination 'images\hero20.png' -Force

# 2) CSS v26: darkened photo hero (white text) + button normalize
$cf='css/custom-rebuild.css'
$c=[System.IO.File]::ReadAllText($cf)
$add=@'

/* ===== v26 hero: darkened photo + button normalize ===== */
.header{background-image:linear-gradient(rgba(22,17,12,.58),rgba(22,17,12,.66)),url(../images/hero20.png) !important;background-size:cover !important;background-position:center !important;color:#fff !important;}
.header:before{display:none !important;}
.header .title{color:#fff !important;text-shadow:0 2px 16px rgba(0,0,0,.5) !important;}
.header .description{color:#f4ede2 !important;text-shadow:0 1px 8px rgba(0,0,0,.45) !important;}
.header .logo-box,.header .logotype .text,.header .number,.header .home-number,.header .home-number-desc{color:#fff !important;}
.header .logo-ico,.header .logotype .ico{filter:none !important;opacity:1 !important;}
.prod-buttons{display:flex !important;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center;margin-top:14px;}
.prod-buttons .item{float:none !important;margin:0 !important;width:auto !important;display:block;}
.prod-buttons .item a{display:inline-flex !important;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;max-width:100%;white-space:nowrap;}
@media(max-width:560px){.prod-buttons{flex-direction:column;align-items:stretch;}.prod-buttons .item,.prod-buttons .item a{width:100% !important;}}
'@
if($c.IndexOf('v26 hero') -lt 0){ $c=$c+$add; [System.IO.File]::WriteAllText($cf,$c,$enc) }

# 3) bump css cache version
$hf='index.html'
$h=[System.IO.File]::ReadAllText($hf)
$h=[regex]::Replace($h,'custom-rebuild\.css\?v=\d+','custom-rebuild.css?v=26')
[System.IO.File]::WriteAllText($hf,$h,$enc)

Write-Output ('src='+$src.FullName)
Write-Output ('hero='+(Test-Path 'images\hero20.png')+' size='+(Get-Item 'images\hero20.png').Length+' v26='+([regex]::Matches($c,'v26 hero')).Count+' csshtml='+([regex]::Matches($h,[regex]::Escape('custom-rebuild.css?v=26'))).Count)
