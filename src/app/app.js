'use strict';
import { gsap } from 'gsap';
// gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

console.log('From the App');
const logo = document.querySelector('.logo');
const toggleButtons = document.querySelector('.toggle-btn');
const hero = document.querySelector('.hero__container--2');
const mainTextContainer = document.querySelector('.hero__container--1');
const mainText = document.querySelector('.hero__text--main');
const secondText = document.querySelectorAll('.hero__text--second');
const heroAdv = document.querySelectorAll('.hero__adv--link');
const socialLinks = document.querySelectorAll('.hero__social--link');
const footerLinks = document.querySelectorAll('.footer__links');

// const tl1 = gsap.timeline();

// const responsiveAnimation = () => ({
//   '(min-width: 280px)': tl1.to(hero, {
//     height: '75vh',
//     duration: 2,
//     ease: 'power2.out',
//   }),
// });

// responsiveAnimation();

const tl2 = gsap.timeline();

const responsiveAnimationDesk = () => ({
  '(min-width: 1024px)': tl2
    .fromTo(
      hero,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: 'back',
      }
    )
    .fromTo(
      mainText,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 },
      '-=2'
    )
    .fromTo(
      mainTextContainer,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 },
      '-=2'
    )
    .fromTo(
      secondText,
      { x: '100%', opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 },
      '-=1'
    )
    .fromTo(
      heroAdv,
      { y: '100%', opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, stagger: '0.3' }
    )
    .fromTo(
      socialLinks,
      { y: '100%', opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, stagger: '0.3' },
      '-=1'
    )
    .fromTo(
      toggleButtons,
      { x: '100%', opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 },
      '-=1'
    )
    .fromTo(
      logo,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 }
    )
    .fromTo(
      footerLinks,
      { y: '-100%', opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, stagger: '0.3' }
    ),
});

responsiveAnimationDesk();

// tl1.to(hero, { height: '75vh', duration: 2, ease: 'power2.out' });

// tl1.fromTo(
//   hero,
//   { height: '0%' },
//   { height: '75vh', duration: 2, ease: 'power2.out' }
// );
//   .fromTo(
//     hero,
//     { width: '100%' },
//     { width: '80%', duration: 2, ease: 'power2.out' }
//   )
//   .fromTo(
//     slider,
//     { x: '-100%' },
//     { x: '0%', duration: 2, ease: 'power2.out' },
//     '-=2'
//   )
//   .from(left, { opacity: 0, x: '-20%', backdropFilter: 'blur(0px)' })
//   .from(mainText, { opacity: 0, duration: 1, ease: 'back' })
//   .from(secondText, { opacity: 0, duration: 1, ease: 'back' }, '-=1.5')
//   .from(
//     '.media ul li',
//     {
//       opacity: 0,
//       stagger: 0.5,
//       duration: 1,
//       ease: 'back',
//     },
//     '-=2'
//   )
//   .from(
//     '.navbar',
//     {
//       opacity: 0,
//       x: '-100%',
//       duration: 1,
//       ease: 'power2.easeInOut',
//     },
//     '-=2'
//   )
//   .from('.scrolldown', { opacity: 0, y: 100, duration: 1 });
