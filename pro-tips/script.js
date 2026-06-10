tailwind.config = {
  theme: { extend: {
    colors: { dark: { 950:'#050505',900:'#0a0a0a',800:'#121212',700:'#1a1a1a',600:'#222222' }, gold: { DEFAULT:'#d4af37',HVR:'#b5952f',light:'#f3e5ab',muted:'#8a7322' } },
    fontFamily: { sans:['Montserrat','sans-serif'], serif:['Playfair Display','serif'] },
    backgroundImage: { 'gold-gradient':'linear-gradient(135deg,#f3e5ab 0%,#d4af37 50%,#8a7322 100%)' }
  } }
}

document.getElementById('mobile-btn').addEventListener('click',()=>document.getElementById('mobile-menu').classList.toggle('hidden'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('active');observer.unobserve(e.target);}}),{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const ni=document.getElementById('navbar-inner');
window.addEventListener('scroll',()=>ni&&(window.scrollY>50?(ni.classList.add('py-2'),n.classList.remove('py-3')):(ni.classList.add('py-3'),n.classList.remove('py-2'))));
const path=window.location.pathname.replace(/\/$/,'');
document.querySelectorAll('.nav-item').forEach(a=>{const ap=new URL(a.href,window.location).pathname.replace(/\/$/,'');if(ap===path)a.classList.add('text-gold');});