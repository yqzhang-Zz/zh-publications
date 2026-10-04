(function(){
  function updateHeaderOffset(){
    var mast=document.querySelector('.masthead');
    document.documentElement.style.setProperty('--ap-masthead-height',(mast?mast.offsetHeight:60)+'px');
  }
  function focusSection(hash,smooth){
    var id;try{id=decodeURIComponent((hash||'').replace(/^#/,''));}catch(e){return false;}
    var el=id&&document.getElementById(id);if(!el)return false;
    var mast=document.querySelector('.masthead');
    var contents=document.querySelector('.ap-contents');
    var top=window.scrollY+el.getBoundingClientRect().top-(mast?mast.offsetHeight:60)-(contents?contents.offsetHeight:0)-16;
    var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:Math.max(0,top),behavior:smooth&&!reduced?'smooth':'instant'});
    return true;
  }
  window.apFocusSection=focusSection;
  // Capture before the legacy theme's anchor handler. No iframe navigation is needed.
  document.addEventListener('click',function(e){
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var a=e.target.closest('a[href^="#"]');if(!a||a.getAttribute('href')==='#')return;
    if(focusSection(a.getAttribute('href'),true)){e.preventDefault();e.stopImmediatePropagation();}
  },true);
  var highlightTimer,cleanupTimer;
  function clearHighlights(){
    clearTimeout(highlightTimer);clearTimeout(cleanupTimer);
    document.querySelectorAll('.ap-paper.ap-target').forEach(function(el){el.classList.remove('ap-target','ap-target-fading');});
  }
  function focusPapers(hash,search){
    var id=(hash||'').replace(/^#/,'');
    if(!id.startsWith('paper-'))return;
    var el=document.getElementById(id);if(!el||!el.classList.contains('ap-paper'))return;
    clearHighlights();
    var ids=[id],param=new URLSearchParams(search||'').get('highlight');
    if(param)param.split(',').forEach(function(value){if(/^[JC]\d+$/.test(value))ids.push('paper-'+value);});
    var targets=Array.from(new Set(ids)).map(function(value){return document.getElementById(value);}).filter(function(node){return node&&node.classList.contains('ap-paper');});
    el.scrollIntoView({block:'start',behavior:'instant'});
    targets.forEach(function(node){void node.offsetWidth;node.classList.add('ap-target');});
    highlightTimer=setTimeout(function(){
      targets.forEach(function(node){node.classList.add('ap-target-fading');});
      var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      cleanupTimer=setTimeout(function(){targets.forEach(function(node){node.classList.remove('ap-target','ap-target-fading');});},reduced?0:850);
    },3000);
  }
  window.apFocusPapers=focusPapers;
  window.apFocusPaper=function(hash){focusPapers(hash,location.search);};
  function setup(){
    updateHeaderOffset();
    var mast=document.querySelector('.masthead');
    if(mast&&window.ResizeObserver)new ResizeObserver(updateHeaderOffset).observe(mast);
    window.addEventListener('resize',updateHeaderOffset);
    document.querySelectorAll('a[href]').forEach(function(a){
      var u;try{u=new URL(a.getAttribute('href'),location.href);}catch(e){return;}
      if(u.hash.startsWith('#paper-')&&(u.hostname===location.hostname||u.hostname==='yqzhang-zz.github.io'))a.target='_self';
    });
    focusPapers(location.hash,location.search);
    if(location.hash&&!location.hash.startsWith('#paper-'))focusSection(location.hash,false);
  }
  document.addEventListener('DOMContentLoaded',setup);
  window.addEventListener('hashchange',function(){
    if(location.hash.startsWith('#paper-'))focusPapers(location.hash,location.search);
    else focusSection(location.hash,false);
  });
})();
