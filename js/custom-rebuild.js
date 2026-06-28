(function(){
"use strict";

/* ===================== ДАННЫЕ ОТЗЫВОВ ===================== */
var REVIEWS = [
 {name:"Ольга",city:"Краснодар",date:"14 марта 2025",rating:5,
  text:"Заказывала комплект евро, пришло быстро и упаковано очень аккуратно.\nСатин плотный, приятный к телу, совсем не электризуется. После стирки не полинял и не сел.\nОчень довольна, рекомендую!",
  reply:"Ольга, спасибо за подробный отзыв и видео! Рады, что комплект порадовал. Ждём Вас снова!",
  photos:["reviews/r1-1.png","reviews/r1-2.png"],video:"reviews/r1.mp4"},

 {name:"Марина",city:"Ростов-на-Дону",date:"2 февраля 2025",rating:5,
  text:"Ткань мягкая, цвет ровно как на фото.\nСпим теперь всей семьёй только на таком.",
  reply:"Марина, благодарим за отзыв! Приятных снов.",
  photos:["reviews/r2-1.png"],video:null},

 {name:"Светлана",city:"Воронеж",date:"19 января 2025",rating:4,
  text:"Бельё хорошее, сатин действительно качественный.\nЕдинственное — доставку ждала чуть дольше, чем рассчитывала. Но результат того стоил.",
  reply:"Светлана, спасибо! Учтём замечание по срокам — уже работаем над ускорением доставки.",
  photos:["reviews/r3-1.png","reviews/r3-2.png"],video:null},

 {name:"Екатерина",city:"Краснодар",date:"28 февраля 2025",rating:5,
  text:"Шикарный комплект за такую цену!\nПолуторка, шов ровный, наволочки с запахом. Муж оценил.\nСняла видео, чтобы было видно качество.",
  reply:"Екатерина, спасибо за видеоотзыв! Очень приятно.",
  photos:["reviews/r4-1.png"],video:"reviews/r4.mp4"},

 {name:"Анна",city:"Самара",date:"7 марта 2025",rating:5,
  text:"Брала в подарок маме.\nУпаковка подарочная, бельё плотное, цвет благородный.\nМама в восторге!",
  reply:"Анна, спасибо! Передавайте маме наилучшие пожелания!",
  photos:["reviews/r5-1.png","reviews/r5-2.png"],video:null},

 {name:"Ирина",city:"Казань",date:"21 декабря 2024",rating:5,
  text:"Отличный сатин, не скользит и почти не мнётся.\nЗаказала уже второй комплект.",
  reply:"Ирина, спасибо за доверие и повторный заказ!",
  photos:["reviews/r6-1.png"],video:null},

 {name:"Наталья",city:"Уфа",date:"11 января 2025",rating:4,
  text:"Качество хорошее, соответствует описанию.\nЦвет чуть темнее, чем на картинке, но мне даже больше нравится.",
  reply:"Наталья, благодарим за честный отзыв!",
  photos:["reviews/r7-1.png"],video:null},

 {name:"Татьяна",city:"Сочи",date:"3 марта 2025",rating:5,
  text:"Спасибо за быструю доставку и приятный материал.\nСплю теперь как в облаке.",
  reply:"Татьяна, сладких снов! Спасибо, что выбрали нас.",
  photos:["reviews/r8-1.png"],video:null},

 {name:"Юлия",city:"Нижний Новгород",date:"16 февраля 2025",rating:5,
  text:"Долго выбирала — и нисколько не пожалела.\nСатин гладкий, дышит, летом не жарко.\nЗаписала видео распаковки.",
  reply:"Юлия, спасибо за видео и тёплые слова!",
  photos:["reviews/r9-1.png"],video:"reviews/r9.mp4"},

 {name:"Виктория",city:"Пермь",date:"24 декабря 2024",rating:5,
  text:"Комплект супер, ткань плотная, швы аккуратные.\nРекомендую!",
  reply:"Виктория, спасибо за рекомендацию!",
  photos:["reviews/r10-1.png"],video:null},

 {name:"Людмила",city:"Волгоград",date:"9 января 2025",rating:4,
  text:"Хорошее бельё, приятное к телу.\nНемного помялось при пересылке, но после глажки всё отлично.",
  reply:"Людмила, спасибо! Рады, что всё в порядке.",
  photos:["reviews/r11-1.png"],video:null},

 {name:"Оксана",city:"Саратов",date:"30 января 2025",rating:5,
  text:"Заказывала семейный, всем хватило.\nКачество на высоте, цвет сочный.",
  reply:"Оксана, благодарим за заказ! Уюта Вашему дому.",
  photos:["reviews/r12-1.png"],video:null},

 {name:"Елена",city:"Тюмень",date:"5 февраля 2025",rating:5,
  text:"Очень довольна покупкой.\nСатин мягкий, после стирки как новый.",
  reply:"Елена, спасибо! Носите с удовольствием.",
  photos:["reviews/r13-1.png"],video:null},

 {name:"Дарья",city:"Челябинск",date:"22 февраля 2025",rating:5,
  text:"Пришло раньше срока, бельё шикарное и плотное.\nБуду заказывать ещё.",
  reply:"Дарья, спасибо! Ждём Вас снова.",
  photos:["reviews/r14-1.png"],video:null},

 {name:"Алёна",city:"Краснодар",date:"1 марта 2025",rating:5,
  text:"Это уже третий комплект от вас.\nКачество стабильно отличное, поэтому снимаю видео для тех, кто сомневается.",
  reply:"Алёна, огромное спасибо за лояльность и видео!",
  photos:["reviews/r15-1.png"],video:"reviews/r15.mp4"},

 {name:"Галина",city:"Ижевск",date:"13 января 2025",rating:4,
  text:"Хорошее постельное, сатин приятный.\nХотелось бы больше расцветок, а так всё нравится.",
  reply:"Галина, спасибо! Скоро пополним ассортимент новыми расцветками.",
  photos:["reviews/r16-1.png"],video:null},

 {name:"Кристина",city:"Ставрополь",date:"26 февраля 2025",rating:5,
  text:"Мягкое, плотное, не просвечивает.\nЗа эти деньги — лучшее, что находила.",
  reply:"Кристина, спасибо за отзыв! Очень приятно.",
  photos:["reviews/r17-1.png"],video:null}
];

/* ===================== ХЕЛПЕРЫ ===================== */
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function stars(n){var s="";for(var i=0;i<5;i++)s+=(i<n?"\u2605":"\u2606");return s;}
function esc(t){return (t||"").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
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
   var th=e.target.closest(".pgal__thumb");
   if(th){active=parseInt(th.getAttribute("data-i"),10);render();return;}
   if(e.target.closest(".pgal__main")){openPlx(art,imgs,active);}
  });
 });
}

/* ===================== ОТЗЫВЫ ===================== */
var rvmOv;
function buildRvm(){
 rvmOv=el("div","rvm-overlay");
 rvmOv.innerHTML='<div class="rvm"><span class="rvm-close">\u00d7</span><div id="rvmBody"></div></div>';
 document.body.appendChild(rvmOv);
 rvmOv.querySelector(".rvm-close").onclick=closeRvm;
 rvmOv.addEventListener("click",function(e){if(e.target===rvmOv)closeRvm();});
}
function openRvm(r){
 if(!rvmOv)buildRvm();
 var media="";
 if(r.video)media+='<video src="'+r.video+'" controls playsinline preload="metadata"></video>';
 r.photos.forEach(function(p){media+='<div class="m" style="'+bg(p)+'"></div>';});
 var html='<div class="rvm-head"><div class="rvm-ava">'+esc(r.name.charAt(0))+'</div>'+
  '<div><div class="rvm-name">'+esc(r.name)+'</div><div class="rvm-sub">'+esc(r.city)+' \u00b7 '+esc(r.date)+'</div></div></div>'+
  '<div class="rvm-stars">'+stars(r.rating)+'</div>'+
  '<div class="rvm-text">'+esc(r.text)+'</div>'+
  (media?'<div class="rvm-media">'+media+'</div>':'')+
  '<div class="rvm-reply"><b>Ответ продавца</b><span>'+esc(r.reply)+'</span></div>';
 rvmOv.querySelector("#rvmBody").innerHTML=html;
 rvmOv.classList.add("open");
}
function closeRvm(){if(rvmOv)rvmOv.classList.remove("open");}

function renderReviews(){
 var root=document.getElementById("rvRoot");
 if(!root)return;
 root.innerHTML="";
 REVIEWS.forEach(function(r){
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
   '<div class="rv-text">'+esc(r.text)+'</div>'+
   '<div class="rv-more">Читать полностью \u2192</div></div>';
  card.addEventListener("click",function(e){
   if(e.target.closest("video"))return;
   openRvm(r);
  });
  root.appendChild(card);
 });
}

/* ===================== СТАРТ ===================== */
function init(){initGalleries();renderReviews();}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}else{init();}
})();
