(function(){
  var d=document,root=d.documentElement,body=d.body;
  var hamburger=d.querySelector('.hamburger'),drawer=d.getElementById('mobmenu');
  function setMenu(open){
    body.classList.toggle('menu-open',open);
    root.style.overflow=open?'hidden':'';
    if(hamburger)hamburger.setAttribute('aria-expanded',open?'true':'false');
    if(drawer)drawer.setAttribute('aria-hidden',open?'false':'true');
  }
  if(hamburger)hamburger.addEventListener('click',function(){setMenu(!body.classList.contains('menu-open'));});
  d.querySelectorAll('[data-close]').forEach(function(el){el.addEventListener('click',function(){setMenu(false);});});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>768)setMenu(false);});
  d.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var item=b.parentNode,open=!item.classList.contains('open');
      item.classList.toggle('open',open);
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
