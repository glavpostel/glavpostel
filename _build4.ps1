$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)

# 1) JS: hardcode rating 4,9
$jf='js/custom-rebuild.js'
$j=[System.IO.File]::ReadAllText($jf)
$j=$j.Replace('a.toFixed(1).replace(".",",")','''4,9''')
[System.IO.File]::WriteAllText($jf,$j,$enc)

# 2) CSS: premium v25 block (no @import; fonts loaded via <link> in head)
$cf='css/custom-rebuild.css'
$c=[System.IO.File]::ReadAllText($cf)
$add=@'

/* ===== premium v25: linen hero, serif headings, gold accent ===== */
body{font-family:'Manrope',-apple-system,'Segoe UI',Roboto,Arial,sans-serif !important;}
.title,.rv-h-title{font-family:'Cormorant','Playfair Display',Georgia,serif !important;letter-spacing:.4px;}
.header{background-image:radial-gradient(1100px 460px at 82% -12%,rgba(232,115,12,.10),transparent 60%),radial-gradient(820px 460px at -5% 112%,rgba(201,162,75,.14),transparent 60%),linear-gradient(158deg,#f8f2e9 0%,#efe5d6 56%,#e7d9c3 100%) !important;color:#2b2420 !important;position:relative;}
.header:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.6;background-image:repeating-linear-gradient(0deg,rgba(80,60,30,.02) 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,rgba(80,60,30,.02) 0 1px,transparent 1px 4px);}
.header>*{position:relative;z-index:1;}
.header .title{color:#2b2420 !important;text-shadow:none !important;}
.header .description{color:#6f6151 !important;}
.header .logo-box,.header .logotype .text,.header .number,.header .home-number,.header .home-number-desc{color:#2b2420 !important;}
.header .logo-ico,.header .logotype .ico{filter:brightness(0) saturate(0);opacity:.78;}
.rv-rate .num{color:#c9a24b !important;}
'@
if($c.IndexOf('premium v25') -lt 0){ $c=$c+$add; [System.IO.File]::WriteAllText($cf,$c,$enc) }

# 3) index.html: inject Google Fonts <link> + bump cache versions
$hf='index.html'
$h=[System.IO.File]::ReadAllText($hf)
if($h.IndexOf('family=Cormorant') -lt 0){
  $h=$h.Replace('<link rel="stylesheet" href="css/custom-rebuild.css','<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@600;700&family=Manrope:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="css/custom-rebuild.css')
}
$h=[regex]::Replace($h,'custom-rebuild\.css\?v=\d+','custom-rebuild.css?v=25')
$h=[regex]::Replace($h,'custom-rebuild\.js\?v=\d+','custom-rebuild.js?v=25')
[System.IO.File]::WriteAllText($hf,$h,$enc)

Write-Output ('rating49='+([regex]::Matches($j,[regex]::Escape("'4,9'"))).Count+' v25='+([regex]::Matches($c,'premium v25')).Count+' fonts='+([regex]::Matches($h,'family=Cormorant')).Count+' csshtml='+([regex]::Matches($h,[regex]::Escape('custom-rebuild.css?v=25'))).Count+' jshtml='+([regex]::Matches($h,[regex]::Escape('custom-rebuild.js?v=25'))).Count)
