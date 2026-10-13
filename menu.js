(function(){
  var nav=document.querySelector('nav'); if(!nav) return;
  var inner=nav.querySelector('.nav-inner'), links=nav.querySelector('.nav-links'); if(!inner||!links) return;
  var b=document.createElement('button'); b.className='nav-toggle'; b.type='button'; b.setAttribute('aria-label','Apri il menu'); b.setAttribute('aria-expanded','false');
  b.innerHTML='<span></span><span></span><span></span>'; inner.appendChild(b);
  function set(o){ nav.classList.toggle('open',o); b.setAttribute('aria-expanded',o?'true':'false'); }
  b.addEventListener('click',function(){ set(!nav.classList.contains('open')); });
  links.addEventListener('click',function(e){ if(e.target.tagName==='A') set(false); });
})();