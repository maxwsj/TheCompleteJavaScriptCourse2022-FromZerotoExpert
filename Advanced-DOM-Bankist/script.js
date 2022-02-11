'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Elements
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const loansTeste = document.querySelector('.operations__tab--2');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

// Functions

// Oldschool way of doing smooth animation and scrolling
btnScrollTo.addEventListener('click', function (e) {
  // First we need to get the coordenates from the element that we want to scroll to
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect()); // target is essentially this btnScrollTo element

  // scrolling (old way)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Smoth animation
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way of scrolling
  // First we take the element that we want to scroll to, and on that we call scroll into view and then we pass an object and specify again behavior and set it to smooth
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Gettin the scroll position
// document.addEventListener('click', function (e) {
//   console.log(section1.getBoundingClientRect());
// });
// document.addEventListener('click', function () {
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
// });
// Y is the current position of the view port

// Gettin the height and width of viewport
// document.addEventListener('click', function () {
//   console.log(
//     'height/width (X/Y)',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
// });

/////////////////////////////////////////
// Event Delegation: Implementing Page Navigation

// // Without Event Delegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     // Recebe o atributo dentro do HREF
//     const id = this.getAttribute('href');

//     // Seleciona o elemento que vamos rolar através da variável id
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// With Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////// Building a Tabbed Component ///////

// Bad practice
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// Modern Way - Event Delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Before adding active, we remove all active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//// Passing Arguments to Event Handlers ///////
// Menu mouse hover fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

// Mouseout is the oppisite of mouseover
nav.addEventListener('mouseout', handleHover.bind(1));

///// Implementing a Sticky Navigation: The Scroll Event /////

// Not so efficient way of doing the sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

////// A Better Way: The Intersection Observer API /////
// Observer callback
// const obsCallback = function (entries, observer) {
//   // the entries parameter is actually an array of the threshold entries
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // Observer options
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////// Revealing Elements on Scroll ///////
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return; // Guard clause

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // Para de observar o target
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//////////// Lazy Loading Images ////////////
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  // If they are not intersecting then return
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  treashold: 0,
  rootMargin: '200px', // faz com que a imagem carregue ao atingirmos 200pxs antes da imagem
});

imgTargets.forEach(img => imgObserver.observe(img));

//// Building a Slider Component: Part 1 ////

//  Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnLRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length; // On nodelist we can read the lenght just as in an array

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active'); // select based on the data slide attribute
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide == maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    /* curSlide:
     FirstSlide:   -100%
     SecondSlide:     0%
     Thridlide:     100%
     FourthSlide:   200%
  */
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    // Inicio o dot
    activateDot(0);
    // Zera o carrousel e deixa na primeira imagem
    goToSlide(0);
  };
  init();

  // Next slide
  btnLRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  ///// Building a Slider Component: Part 2 /////

  // Slide with arrows
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
//////////////// LECTURES /////////////////////////
// Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// Oldschool way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

/////////////////////////////////////////
// Event Propagation in Practice
// rgb(255, 255, 255)
// Event Propagation in Practice
// Generates Random Integers
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// // Generates Random Colors
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

///////////////////////////////
// DOM Traversing

// const h1 = document.querySelector('h1');

// // Selecting elements - GOING DOWNWARDS: child //

// h1.querySelectorAll('.highlight');
// h1.childNodes;
// h1.children; // Gives us an HTMLCollection

// // h1.firstElementChild.getElementsByClassName.color = 'white'; // Only the first child element is changed

// // h1.lastElementChild.getElementsByClassName.color = 'white'; // Only the last child element is changed

// // Selecting elements - GOING UPWARDS parents //
// h1.parentNode;
// h1.parentElement;

// h1.closest('.header').getElementsByClassName.background =
//   'var(--gradient-secondary)'; // Busca o parente mais próximo do elemento header

// // Selecting elements - GOING SIDEWAYS: siblings //
// h1.previousElementSibling;
// h1.nextElementSibling;

// h1.previousSibling; // for nodes
// h1.nextSibling; // for nodes

// h1.parentElement.children; // Podemos usar juntos

// // Trabalhando na prática com DOM traversing
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
