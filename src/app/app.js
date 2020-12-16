'use strict';
import { gsap } from 'gsap';
// gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const tl = gsap.timeline({ paused: true });

// tl.to('.one', {
//   duration: 0.5,
//   y: 6,
//   rotation: 45,
//   ease: 'expo.inOut',
// });
// tl.to('.two', {
//   duration: 0.5,
//   y: -6,
//   rotation: -45,
//   ease: 'expo.inOut',
//   delay: -0.5,
// });

// tl.to('.navbar', {
//   duration: 0.5,
//   top: '0%',
//   ease: 'power1.inOut',
//   // delay: 0.5,
// });
// tl.from('.navbar__link', {
//   duration: 0.8,
//   stagger: 0.3,
//   x: -200,
//   opacity: 0,
//   ease: 'power1.out',
//   clearProps: 'all',
// });
// tl.reverse();
// gsap.set('.navbar__link', { clearProps: 'all' });

// const navLink = document.querySelector('.navbar__link');
// const toggleBtn = document.querySelector('.toggle-btn');
// toggleBtn.addEventListener('click', function () {
//   tl.reversed(!tl.reversed());
//   navLink.style.cssText = '';
// });

const slider = document.querySelector('.background-slider');
const hero = document.querySelector('.hero');
const left = document.querySelector('.hero__left');
const right = document.querySelector('.hero__right');
const mainText = document.querySelector('.hero__text--main');
const secondText = document.querySelectorAll('.hero__text--second');

const tl1 = gsap.timeline();

tl1
  .fromTo(
    hero,
    { height: '0%' },
    { height: '60%', duration: 2, ease: 'power2.out' }
  )
  .fromTo(
    hero,
    { width: '100%' },
    { width: '80%', duration: 2, ease: 'power2.out' }
  )
  .fromTo(
    slider,
    { x: '-100%' },
    { x: '0%', duration: 2, ease: 'power2.out' },
    '-=2'
  )
  .from(left, { opacity: 0, x: '-20%', backdropFilter: 'blur(0px)' })
  .from(mainText, { opacity: 0, duration: 1, ease: 'back' })
  .from(secondText, { opacity: 0, duration: 1, ease: 'back' }, '-=1.5')
  .from(
    '.media ul li',
    {
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: 'back',
    },
    '-=2'
  )
  .from(
    '.navbar',
    {
      opacity: 0,
      x: '-100%',
      duration: 1,
      ease: 'power2.easeInOut',
    },
    '-=2'
  )
  .from('.scrolldown', { opacity: 0, y: 100, duration: 1 });
