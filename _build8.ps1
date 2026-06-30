$ErrorActionPreference='Stop'
$enc=New-Object System.Text.UTF8Encoding($false)
$css='css\custom-rebuild.css'
$add=@'

/* v29: set composition shown inside product card (orange style) */
.products-item .additional_fields{display:block!important;margin-top:14px;padding-top:12px;border-top:1px dashed #e7c9a0;text-align:left;}
.products-item .additional_fields::before{content:"\0412\0020\043A\043E\043C\043F\043B\0435\043A\0442\0435:";display:block;font-weight:700;color:#cf6207;margin-bottom:4px;}
.products-item .additional_fields > div{font-size:14px;line-height:1.7;color:#3a3a3a;}
.products-item .pillowcases::before{content:"\041D\0430\0432\043E\043B\043E\0447\043A\0438: ";font-weight:700;color:#e8730c;}
.products-item .duvet-cover::before{content:"\041F\043E\0434\043E\0434\0435\044F\043B\044C\043D\0438\043A: ";font-weight:700;color:#e8730c;}
.products-item .bedsheet::before{content:"\041F\0440\043E\0441\0442\044B\043D\044F: ";font-weight:700;color:#e8730c;}
'@
$c=[System.IO.File]::ReadAllText($css,$enc)
if($c -notmatch 'v29: set composition'){ [System.IO.File]::WriteAllText($css,$c+$add,$enc) }
$idx='index.html'
$h=[System.IO.File]::ReadAllText($idx,$enc)
[System.IO.File]::WriteAllText($idx,$h.Replace('custom-rebuild.css?v=28','custom-rebuild.css?v=29'),$enc)
$c2=[System.IO.File]::ReadAllText($css,$enc)
$h2=[System.IO.File]::ReadAllText($idx,$enc)
$specs=([regex]::Matches($c2,'v29: set composition')).Count
$v=([regex]::Matches($h2,'custom-rebuild\.css\?v=29')).Count
'specs={0} v29={1}' -f $specs,$v
