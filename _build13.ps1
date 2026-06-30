$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)
$idx='index.html'
$c=[System.IO.File]::ReadAllText($idx,$enc)
$selBefore=([regex]::Matches($c,[regex]::Escape(', .lead-iframe-wrap'))).Count
$c=$c.Replace(', .lead-iframe-wrap','')
$blurBefore=([regex]::Matches($c,'addEventListener\(''blur''')).Count
$pat='//[^\r\n]*[\r\n]+\s*window\.addEventListener\(''blur'',[\s\S]*?\}, 0\);\s*\}\);'
$c=[regex]::Replace($c,$pat,'')
$blurAfter=([regex]::Matches($c,'addEventListener\(''blur''')).Count
$selAfter=([regex]::Matches($c,[regex]::Escape(', .lead-iframe-wrap'))).Count
[System.IO.File]::WriteAllText($idx,$c,$enc)
'selBefore={0} selAfter={1} blurBefore={2} blurAfter={3}' -f $selBefore,$selAfter,$blurBefore,$blurAfter
