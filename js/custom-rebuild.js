(function(){
"use strict";

/* ===================== ДАННЫЕ ОТЗЫВОВ ===================== */
var REVIEWS=[
 {name:"Ольга",city:"Краснодар",date:"14 марта 2025",rating:5,color:"бежевый",
  pros:"Сатин плотный, приятный к телу, совсем не электризуется. После стирки не полинял и не сел.",cons:"",
  comment:"Упаковано аккуратно, доставили быстро. Очень довольна!",
  reply:"Ольга, спасибо за подробный отзыв и видео! Рады, что комплект порадовал. Ждём Вас снова!",
  photos:["reviews/r1-1.png","reviews/r1-2.png"],video:"reviews/r1.mp4"},

 {name:"Марина",city:"Ростов-на-Дону",date:"2 февраля 2025",rating:5,color:"белый",
  pros:"Ткань мягкая, цвет ровно как на фото.",cons:"",
  comment:"Спим теперь всей семьёй только на таком.",
  reply:"Марина, благодарим за отзыв! Приятных снов.",
  photos:["reviews/r2-1.png"],video:null},

 {name:"Светлана",city:"Воронеж",date:"19 января 2025",rating:4,color:"серый",
  pros:"Сатин действительно качественный, бельё плотное.",cons:"Доставку ждала чуть дольше, чем рассчитывала.",
  comment:"Но результат того стоил.",
  reply:"Светлана, спасибо! Учтём замечание по срокам — уже работаем над ускорением доставки.",
  photos:["reviews/r3-1.png","reviews/r3-2.png"],video:null},

 {name:"Екатерина",city:"Краснодар",date:"28 февраля 2025",rating:5,color:"голубой",
  pros:"Шов ровный, наволочки с запахом, ткань шикарная за такую цену.",cons:"",
  comment:"Муж оценил. Сняла видео, чтобы было видно качество.",
  reply:"Екатерина, спасибо за видеоотзыв! Очень приятно.",
  photos:["reviews/r4-1.png"],video:"reviews/r4.mp4"},

 {name:"Анна",city:"Самара",date:"7 марта 2025",rating:5,color:"розовый",
  pros:"Бельё плотное, цвет благородный, упаковка подарочная.",cons:"",
  comment:"Брала в подарок маме — она в восторге!",
  reply:"Анна, спасибо! Передавайте маме наилучшие пожелания!",
  photos:["reviews/r5-1.png","reviews/r5-2.png"],video:null},

 {name:"Ирина",city:"Казань",date:"21 декабря 2024",rating:5,color:"бежевый",
  pros:"Отличный сатин, не скользит и почти не мнётся.",cons:"",
  comment:"Заказала уже второй комплект.",
  reply:"Ирина, спасибо за доверие и повторный заказ!",
  photos:["reviews/r6-1.png"],video:null},

 {name:"Наталья",city:"Уфа",date:"11 января 2025",rating:4,color:"графит",
  pros:"Качество хорошее, соответствует описанию.",cons:"Цвет чуть темнее, чем на картинке.",
  comment:"Но мне даже больше нравится.",
  reply:"Наталья, благодарим за честный отзыв!",
  photos:["reviews/r7-1.png"],video:null},

 {name:"Татьяна",city:"Сочи",date:"3 марта 2025",rating:5,color:"белый",
  pros:"Приятный материал, быстрая доставка.",cons:"",
  comment:"Сплю теперь как в облаке.",
  reply:"Татьяна, сладких снов! Спасибо, что выбрали нас.",
  photos:["reviews/r8-1.png"],video:null},

 {name:"Юлия",city:"Нижний Новгород",date:"16 февраля 2025",rating:5,color:"бежевый",
  pros:"Сатин гладкий, дышит, летом не жарко.",cons:"",
  comment:"Долго выбирала и не пожалела. Записала видео распаковки.",
  reply:"Юлия, спасибо за видео и тёплые слова!",
  photos:["reviews/r9-1.png"],video:"reviews/r9.mp4"},

 {name:"Виктория",city:"Пермь",date:"24 декабря 2024",rating:5,color:"синий",
  pros:"Ткань плотная, швы аккуратные.",cons:"",
  comment:"Комплект супер, рекомендую!",
  reply:"Виктория, спасибо за рекомендацию!",
  photos:["reviews/r10-1.png"],video:null},

 {name:"Людмила",city:"Волгоград",date:"9 января 2025",rating:4,color:"серый",
  pros:"Бельё приятное к телу, хорошее.",cons:"Немного помялось при пересылке.",
  comment:"После глажки всё отлично.",
  reply:"Людмила, спасибо! Рады, что всё в порядке.",
  photos:["reviews/r11-1.png"],video:null},

 {name:"Оксана",city:"Саратов",date:"30 января 2025",rating:5,color:"зелёный",
  pros:"Качество на высоте, цвет сочный.",cons:"",
  comment:"Заказывала семейный — всем хватило.",
  reply:"Оксана, благодарим за заказ! Уюта Вашему дому.",
  photos:["reviews/r12-1.png"],video:null},

 {name:"Елена",city:"Тюмень",date:"5 февраля 2025",rating:5,color:"белый",
  pros:"Сатин мягкий, после стирки как новый.",cons:"",
  comment:"Очень довольна покупкой.",
  reply:"Елена, спасибо! Носите с удовольствием.",
  photos:["reviews/r13-1.png"],video:null},

 {name:"Дарья",city:"Челябинск",date:"22 февраля 2025",rating:5,color:"голубой",
  pros:"Бельё шикарное и плотное, пришло раньше срока.",cons:"",
  comment:"Буду заказывать ещё.",
  reply:"Дарья, спасибо! Ждём Вас снова.",
  photos:["reviews/r14-1.png"],video:null},

 {name:"Алёна",city:"Краснодар",date:"1 марта 2025",rating:5,color:"бежевый",
  pros:"Качество стабильно отличное.",cons:"",
  comment:"Это уже третий комплект от вас. Снимаю видео для тех, кто сомневается.",
  reply:"Алёна, огромное спасибо за лояльность и видео!",
  photos:["reviews/r15-1.png"],video:"reviews/r15.mp4"},

 {name:"Галина",city:"Ижевск",date:"13 января 2025",rating:4,color:"розовый",
  pros:"Сатин приятный, постельное хорошее.",cons:"Хотелось бы больше расцветок.",
  comment:"А так всё нравится.",
  reply:"Галина, спасибо! Скоро пополним ассортимент новыми расцветками.",
  photos:["reviews/r16-1.png"],video:null},

 {name:"Кристина",city:"Ставрополь",date:"26 февраля 2025",rating:5,color:"серый",
  pros:"Мягкое, плотное, не просвечивает.",cons:"",
  comment:"За эти деньги — лучшее, что находила.",
  reply:"Кристина, спасибо за отзыв! Очень приятно.",
  photos:["reviews/r17-1.png"],video:null}
];

/* media[] для каждого отзыва: видео (если есть) + фото */
REVIEWS.forEach(function(r){
 var m=[];
 if(r.video)m.push({type:"video",src:r.video});
 r.photos.forEach(function(p){m.push({type:"img",src:p});});
 r.media=m;
});

/* ===================== ХЕЛПЕРЫ ===================== */
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function stars(n){var s="";for(var i=0;i<5;i++)s+=(i<n?"\u2605":"\u2606");return s;}
function esc(t){return (t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function bg(u){return "background-image:url('"+u+"')";}

/* ===================== ЛАЙТБОКС ТОВАРА ===================== */
var plxOv,plxBig,plxStrip,plxImgs,plxIdx;
function buildPlx(){
 plxOv=el("div","plx-overlay");
 plxOv.innerHTML='<div class="plx"><span class="plx-close">\u00d7</span><div class="plx-top">'+
  '<div class="plx-stage"><div class="plx-big" id="plxBig"></div><div class="plx-strip" id="plxStrip"></div></div>'+
  '<div class="plx-info"><div class="plx-art">Артикул: <span id="plxArt"></span></div>'+
  '<h3 class="plx-h">Комплект постельного белья из сатина</h3>'+
  '<div class="plx-row"><b>Материал:</b> Сатин, 100% хлопок</div>'+
  '<div class="plx-row"><b>Плотность:</b> 125 г/м², не просвечивает</div>'+
  '<div class="plx-row"><b>В комплекте:</b> простынь, пододеяльник, наволочки</div>'+
  '<div class="plx-price"><span class="plx-old">4580 руб</span><span class="plx-new">2290 руб</span></div>'+
  '<a href="#order" class="plx-buy" id="plxBuy">Заказать</a></div></div></div>';
 document.body.appendChild(plxOv);
 plxBig=plxOv.querySelector("#plxBig");
 plxStrip=plxOv.querySelector("#plxStrip");
 plxOv.querySelector(".plx-close").onclick=closePlx;
 plxOv.addEventListener("click",function(e){if(e.target===plxOv)closePlx();});
 plxOv.querySelector("#plxBuy").onclick=function(e){e.preventDefault();doOrder(plxOv.getAttribute("data-art"));};
}
function renderStrip(){
 plxStrip.innerHTML="";
 plxImgs.forEach(function(u,i){
  var d=el("div",i===plxIdx?"act":"");d.style.cssText=bg(u);
  d.onclick=function(){plxIdx=i;plxBig.style.cssText=bg(u);renderStrip();};
  plxStrip.appendChild(d);
 });
}
function openPlx(art,imgs,start){
 if(!plxOv)buildPlx();
 plxImgs=imgs;plxIdx=start||0;
 plxOv.setAttribute("data-art",art);
 plxOv.querySelector("#plxArt").textContent=art;
 plxBig.style.cssText=bg(plxImgs[plxIdx]);
 renderStrip();
 plxOv.classList.add("open");
}
function closePlx(){if(plxOv)plxOv.classList.remove("open");}
function doOrder(art){
 var c=document.getElementById("color");if(c)c.value=art;
 closePlx();
 var t=document.querySelector('a.modal[href="#order"]');
 if(t){t.click();}else{location.hash="#order";}
}

/* ===================== ГАЛЕРЕЯ КАРТОЧКИ ===================== */
function initGalleries(){
 var gals=document.querySelectorAll(".pgal");
 Array.prototype.forEach.call(gals,function(g){
  var imgs=(g.getAttribute("data-imgs")||"").split(",").filter(Boolean);
  var art=g.getAttribute("data-art")||"";
  if(!imgs.length)return;
  var active=0;
  function render(){
   var thumbs="";
   imgs.forEach(function(u,i){if(i!==active)thumbs+='<div class="pgal__thumb" data-i="'+i+'" style="'+bg(u)+'"></div>';});
   g.innerHTML='<div class="pgal__thumbs">'+thumbs+'</div><div class="pgal__main" style="'+bg(imgs[active])+'"></div>';
  }
  render();
  g.addEventListener("click",function(e){
   e.preventDefault();e.stopPropagation();
   var th=e.target.closest(".pgal__thumb");
   if(th){active=parseInt(th.getAttribute("data-i"),10);render();return;}
   if(e.target.closest(".pgal__main")){openPlx(art,imgs,active);}
  });
 });
}

/* ===================== МОДАЛКА ОТЗЫВА (WB) ===================== */
var rvmOv,rvmStage,rvmThumbs,curMedia,curIdx;
function buildRvm(){
 rvmOv=el("div","rvm-overlay");
 rvmOv.innerHTML='<div class="rvm-box"><span class="rvm-close">\u00d7</span>'+
  '<div class="rvm-left"><button class="rvm-nav prev">\u2039</button><div class="rvm-stage" id="rvmStage"></div><button class="rvm-nav next">\u203a</button></div>'+
  '<div class="rvm-side" id="rvmSide"></div></div>';
 document.body.appendChild(rvmOv);
 rvmStage=rvmOv.querySelector("#rvmStage");
 rvmOv.querySelector(".rvm-close").onclick=closeRvm;
 rvmOv.addEventListener("click",function(e){if(e.target===rvmOv)closeRvm();});
 rvmOv.querySelector(".rvm-nav.prev").onclick=function(){navMedia(-1);};
 rvmOv.querySelector(".rvm-nav.next").onclick=function(){navMedia(1);};
}
function renderStage(){
 var it=curMedia[curIdx];
 if(it.type==="video"){
  rvmStage.innerHTML='<video src="'+it.src+'" controls autoplay playsinline></video>';
 }else{
  rvmStage.innerHTML='<div class="img" style="'+bg(it.src)+'"></div>';
 }
 var th=rvmOv.querySelectorAll(".rvm-thumbs div");
 Array.prototype.forEach.call(th,function(d,i){d.className=(i===curIdx?"act ":"")+(curMedia[i].type==="video"?"vid":"");});
 var nav=rvmOv.querySelectorAll(".rvm-nav");
 var multi=curMedia.length>1;
 nav[0].style.display=multi?"flex":"none";
 nav[1].style.display=multi?"flex":"none";
}
function navMedia(d){curIdx=(curIdx+d+curMedia.length)%curMedia.length;renderStage();}
function openRvm(r,startIdx){
 if(!rvmOv)buildRvm();
 curMedia=r.media;curIdx=startIdx||0;
 var thumbs="";
 curMedia.forEach(function(it,i){
  var poster=it.type==="video"?(r.photos[0]||""):it.src;
  thumbs+='<div data-i="'+i+'" style="'+bg(poster)+'"></div>';
 });
 var side='<div class="rvm-h"><div class="rvm-ava">'+esc(r.name.charAt(0))+'</div>'+
  '<div><div class="rvm-name">'+esc(r.name)+'</div><div class="rvm-sub">'+esc(r.city)+' \u00b7 '+esc(r.date)+'</div></div></div>'+
  '<div class="rvm-stars">'+stars(r.rating)+'</div>'+
  (r.color?'<div class="rvm-color">Цвет: '+esc(r.color)+'</div>':'')+
  (r.pros?'<div class="rvm-f"><b>Достоинства:</b> <span>'+esc(r.pros)+'</span></div>':'')+
  (r.cons?'<div class="rvm-f"><b>Недостатки:</b> <span>'+esc(r.cons)+'</span></div>':'')+
  (r.comment?'<div class="rvm-f"><b>Комментарий:</b> <span>'+esc(r.comment)+'</span></div>':'')+
  '<div class="rvm-thumbs">'+thumbs+'</div>'+
  '<div class="rvm-reply"><b>Ответ продавца</b><span>'+esc(r.reply)+'</span></div>';
 rvmOv.querySelector("#rvmSide").innerHTML=side;
 Array.prototype.forEach.call(rvmOv.querySelectorAll(".rvm-thumbs div"),function(d){
  d.onclick=function(){curIdx=parseInt(d.getAttribute("data-i"),10);renderStage();};
 });
 renderStage();
 rvmOv.classList.add("open");
}
function closeRvm(){if(rvmOv){rvmOv.classList.remove("open");rvmStage.innerHTML="";}}

/* ===================== РЕНДЕР БЛОКА ОТЗЫВОВ ===================== */
function avg(){var s=0;REVIEWS.forEach(function(r){s+=r.rating;});return s/REVIEWS.length;}
function plural(n){var a=n%10,b=n%100;if(a===1&&b!==11)return "отзыв";if(a>=2&&a<=4&&(b<10||b>=20))return "отзыва";return "отзывов";}
function renderReviews(){
 var root=document.getElementById("rvRoot");
 if(!root)return;
 root.innerHTML="";
 var a=avg();
 var sc=el("div","rv-summary");
 var strip="";
 REVIEWS.forEach(function(r,ri){
  r.media.forEach(function(it,mi){
   if(it.type==="video"){
    strip+='<div class="rv-stripit" data-r="'+ri+'" data-m="'+mi+'"><video src="'+it.src+'" preload="metadata" muted></video><span class="pl"></span></div>';
   }else{
    strip+='<div class="rv-stripit" data-r="'+ri+'" data-m="'+mi+'"><div class="ph" style="'+bg(it.src)+'"></div></div>';
   }
  });
 });
 sc.innerHTML='<div class="rv-score"><span class="num">'+a.toFixed(1).replace(".",",")+'</span>'+
  '<span class="st">'+stars(Math.round(a))+'</span>'+
  '<span class="cnt">'+REVIEWS.length+' '+plural(REVIEWS.length)+'</span></div>'+
  '<div class="rv-strip">'+strip+'</div>';
 root.appendChild(sc);
 Array.prototype.forEach.call(sc.querySelectorAll(".rv-stripit"),function(d){
  d.onclick=function(){openRvm(REVIEWS[+d.getAttribute("data-r")],+d.getAttribute("data-m"));};
 });

 var grid=el("div","rv-grid");
 REVIEWS.forEach(function(r,ri){
  var card=el("div","rv-card");
  var media;
  if(r.video){
   media='<video src="'+r.video+'" controls playsinline preload="metadata"></video><span class="rv-badge">\u25b6 Видео</span>';
  }else{
   media='<div class="ph" style="'+bg(r.photos[0])+'"></div>'+(r.photos.length>1?'<span class="rv-badge">'+r.photos.length+' фото</span>':'');
  }
  card.innerHTML='<div class="rv-media">'+media+'</div>'+
   '<div class="rv-body"><div class="rv-top"><span class="rv-name">'+esc(r.name)+'</span><span class="rv-date">'+esc(r.date)+'</span></div>'+
   '<div class="rv-stars">'+stars(r.rating)+'</div>'+
   '<div class="rv-pros"><b>Достоинства:</b> '+esc(r.pros)+'</div>'+
   '<div class="rv-more">Читать полностью \u2192</div></div>';
  card.addEventListener("click",function(e){
   if(e.target.closest("video"))return;
   openRvm(r,0);
  });
  grid.appendChild(card);
 });
 root.appendChild(grid);
}

/* ===================== СТАРТ ===================== */
function init(){initGalleries();renderReviews();}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}else{init();}
})();
