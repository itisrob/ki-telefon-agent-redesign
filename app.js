// Mobile nav toggle
function toggleNav(){document.getElementById('navlinks').classList.toggle('open');}

// DSGVO-friendly YouTube loading: click placeholder -> load nocookie embed
document.addEventListener('click',function(e){
  var ph=e.target.closest('.video-ph');
  if(!ph)return;
  var id=ph.getAttribute('data-yt');
  if(!id||id.indexOf('VIDEO_ID')===0){
    alert('Hier wird das YouTube-Video eingebunden, sobald der Link hinterlegt ist.');
    return;
  }
  var wrap=ph.parentElement;
  var f=document.createElement('iframe');
  f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';
  f.allow='accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  f.allowFullscreen=true;
  ph.remove();
  wrap.appendChild(f);
});

// Lead form demo handler
function submitForm(e){
  e.preventDefault();
  var f=e.target;
  f.style.display='none';
  var s=f.parentElement.querySelector('.success');
  if(s)s.style.display='block';
  return false;
}
