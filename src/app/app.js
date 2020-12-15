'use strict';
import { gsap } from 'gsap';

const tl = gsap.timeline({ paused: true });

tl.to('.one', {
  duration: 0.5,
  y: 6,
  rotation: 45,
  ease: 'expo.inOut',
});
tl.to('.two', {
  duration: 0.5,
  y: -6,
  rotation: -45,
  ease: 'expo.inOut',
  delay: -0.5,
});

tl.to('.navbar', {
  duration: 0.5,
  top: '0%',
  ease: 'power1.inOut',
  // delay: 0.5,
});
tl.from('.navbar__link', {
  duration: 0.8,
  stagger: 0.3,
  x: -200,
  opacity: 0,
  ease: 'power1.out',
  clearProps: 'all',
});
tl.reverse();
// gsap.set('.navbar__link', { clearProps: 'all' });

const navLink = document.querySelector('.navbar__link');
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', function () {
  tl.reversed(!tl.reversed());
  navLink.style.cssText = '';
});
