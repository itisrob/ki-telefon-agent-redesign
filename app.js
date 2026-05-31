// Mobile nav toggle
function toggleNav(){document.getElementById('navlinks').classList.toggle('open');}

// Click-to-open "Lösungen" dropdown (desktop)
document.addEventListener('click',function(e){
  var top=e.target.closest('.nav-top');
  if(top){
    e.preventDefault();
    var item=top.closest('.nav-item');
    var open=item.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach(function(x){x.classList.remove('open');});
    if(!open) item.classList.add('open');
    return;
  }
  if(!e.target.closest('.nav-item')){
    document.querySelectorAll('.nav-item.open').forEach(function(x){x.classList.remove('open');});
  }
});

// DSGVO-friendly video loading: YouTube / Vimeo / MP4
document.addEventListener('click',function(e){
  var ph=e.target.closest('.video-ph');
  if(!ph)return;
  var wrap=ph.parentElement;
  var yt=ph.getAttribute('data-yt'),vimeo=ph.getAttribute('data-vimeo'),mp4=ph.getAttribute('data-mp4'),el;
  if(mp4){el=document.createElement('video');el.src=mp4;el.controls=true;el.autoplay=true;el.setAttribute('playsinline','');el.style.cssText='position:absolute;inset:0;width:100%;height:100%;background:#000';}
  else if(vimeo){el=document.createElement('iframe');el.src='https://player.vimeo.com/video/'+vimeo+'?autoplay=1';el.allow='autoplay; fullscreen; picture-in-picture';el.allowFullscreen=true;}
  else if(yt){if(!yt||yt.indexOf('VIDEO_ID')===0){alert('Hier wird das Video eingebunden, sobald der Link hinterlegt ist.');return;}el=document.createElement('iframe');el.src='https://www.youtube-nocookie.com/embed/'+yt+'?autoplay=1&rel=0';el.allow='accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';el.allowFullscreen=true;}
  else{return;}
  ph.remove();wrap.appendChild(el);
});

// Lead form demo handler
function submitForm(e){e.preventDefault();var f=e.target;f.style.display='none';var s=f.parentElement.querySelector('.success');if(s)s.style.display='block';return false;}

// Scroll reveal
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && els.length){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  } else { els.forEach(function(el){el.classList.add('in');}); }
});

// Cookie consent banner
(function(){
  try{ if(localStorage.getItem('ktaConsent')) return; }catch(e){}
  function build(){
    var b=document.createElement('div');b.className='cookie-banner';
    b.innerHTML='<div class="cb-inner"><p>Wir verwenden Cookies und – nach Ihrer Einwilligung – Tracking-Tools (Google Analytics, Meta-Pixel, Microsoft Clarity), um die Website zu verbessern. Details in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p><div class="cb-btns"><button class="btn btn-ghost" onclick="ktaConsent(0)">Nur notwendige</button><button class="btn btn-gold" onclick="ktaConsent(1)">Alle akzeptieren</button></div></div>';
    document.body.appendChild(b);
  }
  if(document.body) build(); else document.addEventListener('DOMContentLoaded',build);
})();
function ktaConsent(all){try{localStorage.setItem('ktaConsent',all?'all':'essential');}catch(e){}var b=document.querySelector('.cookie-banner');if(b)b.remove();}
