(function(d) {
    var config = {
      kitId: 'rnb3dpu',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
const loginNavBtn = document.getElementById('login-nav-btn');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    loginNavBtn.classList.toggle('active')
});

const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.banner-img');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);

        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');

        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        });
    });

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

  const slider = document.querySelector('.collection-track');
  let isDown = false, startX = 0, scrollLeft = 0;

  /* 마우스 */
  slider.addEventListener('mousedown', (e)=>{
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  window.addEventListener('mouseup', ()=> isDown = false);
  slider.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX);
  });

  /* 터치 */
  slider.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('touchmove', (e)=>{
    const x = e.touches[0].pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX);
  });