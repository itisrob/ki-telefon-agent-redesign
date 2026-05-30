// Mobile nav toggle
function toggleNav(){document.getElementById('navlinks').classList.toggle('open');}

// DSGVO-friendly video loading: click placeholder -> load embed (YouTube / Vimeo / MP4)
document.addEventListener('click',function(e){
  var ph=e.target.closest('.video-ph');
  if(!ph)return;
  var wrap=ph.parentElement;
  var yt=ph.getAttribute('data-yt');
  var vimeo=ph.getAttribute('data-vimeo');
  var mp4=ph.getAttribute('data-mp4');
  var el;
  if(mp4){
    el=document.createElement('video');
    el.src=mp4;el.controls=true;el.autoplay=true;el.setAttribute('playsinline','');
    el.style.cssText='position:absolute;inset:0;width:100%;height:100%;background:#000';
  } else if(vimeo){
    el=document.createElement('iframe');
    el.src='https://player.vimeo.com/video/'+vimeo+'?autoplay=1';
    el.allow='autoplay; fullscreen; picture-in-picture';el.allowFullscreen=true;
  } else if(yt){
    if(!yt||yt.indexOf('VIDEO_ID')===0){alert('Video-Link wird hinterlegt.');return;}
    el=document.createElement('iframe');
    el.src='https://www.youtube-nocookie.com/embed/'+yt+'?autoplay=1&rel=0';
    el.allow='accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    el.allowFullscreen=true;
  } else {return;}
  ph.remove();
  wrap.appendChild(el);
});

// Lead form demo handler
function submitForm(e){
  e.preventDefault();
  var f=e.target;f.style.display='none';
  var s=f.parentElement.querySelector('.success');
  if(s)s.style.display='block';
  return false;
}
