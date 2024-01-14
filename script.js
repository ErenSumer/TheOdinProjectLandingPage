// Navigation toggle for mobile
const navBar = document.querySelector('.nav-bar');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navBar.classList.toggle('open');
});


// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Scroll effects
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener('scroll', () => { 
  handleScrollAnimation();
});
