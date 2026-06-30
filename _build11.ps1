$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)
$css='css\custom-rebuild.css'
$add=@'

/* ===== v31b hero desktop fit: taller block + flattering crop on PC; mobile untouched ===== */
@media (min-width:1000px){
  .header{min-height:600px !important;background-size:cover !important;background-position:center 30% !important;}
}
@media (min-width:1500px){
  .header{min-height:660px !important;background-position:center 28% !important;}
}
'@
$c=[System.IO.File]::ReadAllText($css,$enc)
if($c -notmatch 'v31b hero desktop fit'){ [System.IO.File]::WriteAllText($css,$c+$add,$enc) }
$idx='index.html'
$h=[System.IO.File]::ReadAllText($idx,$enc)
$h=[regex]::Replace($h,'custom-rebuild\.css\?v=\d+','custom-rebuild.css?v=30')
[System.IO.File]::WriteAllText($idx,$h,$enc)
$c2=[System.IO.File]::ReadAllText($css,$enc)
$h2=[System.IO.File]::ReadAllText($idx,$enc)
$n=([regex]::Matches($c2,'v31b hero desktop fit')).Count
$v=([regex]::Matches($h2,'custom-rebuild\.css\?v=30')).Count
'herofix={0} cssv30={1}' -f $n,$v
