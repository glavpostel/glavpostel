$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)
$cf='css/custom-rebuild.css'
$c=[System.IO.File]::ReadAllText($cf)
$add=@'

/* ===== reviews v24: both arrows orange when active, dots one row ===== */
.rv-arrow.prev,.rv-arrow.next{background:#e8730c !important;color:#fff !important;box-shadow:0 5px 18px rgba(232,115,12,.55) !important;}
.rv-arrow.prev:hover,.rv-arrow.next:hover{background:#cf6207 !important;}
.rv-arrow[disabled],.rv-arrow.prev[disabled],.rv-arrow.next[disabled]{background:#f3cdab !important;color:#fff !important;box-shadow:none !important;opacity:1 !important;}
@media(max-width:560px){
.rv-pages{flex-wrap:nowrap !important;gap:4px !important;overflow:hidden;justify-content:center;}
.rv-page{width:8px !important;height:8px !important;min-width:0 !important;padding:0 !important;border-radius:50% !important;font-size:0 !important;border:1px solid #d8d8d8;}
.rv-page.act{width:18px !important;height:8px !important;border-radius:6px !important;background:#e8730c !important;border-color:#e8730c !important;}
}
'@
if($c.IndexOf('reviews v24') -lt 0){ $c=$c+$add; [System.IO.File]::WriteAllText($cf,$c,$enc) }
$hf='index.html'
$h=[System.IO.File]::ReadAllText($hf)
$h=[regex]::Replace($h,'custom-rebuild\.css\?v=\d+','custom-rebuild.css?v=24')
[System.IO.File]::WriteAllText($hf,$h,$enc)
Write-Output ('v24='+([regex]::Matches($c,'reviews v24')).Count+' csshtml='+([regex]::Matches($h,[regex]::Escape('custom-rebuild.css?v=24'))).Count)
