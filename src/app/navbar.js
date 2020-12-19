'use strict';
import { gsap } from 'gsap';

const toggleBtn = document.querySelector('.toggle-btn');
const navLink = document.querySelector('.navbar__link');

const tl = gsap.timeline({
  onReverseComplete: function () {
    gsap.set('.navbar, .navbar__link', {
      clearProps: 'all',
    });
  },
  paused: true,
});

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
  duration: 1,
  top: '0%',
  ease: 'power1.inOut',
  background: '#1a0a1d',
  height: '100vh',
  display: 'block',
});
tl.to('.navbar__link', {
  duration: 0.8,
  stagger: 0.3,
  x: 0,
  opacity: 1,
  ease: 'power1.out',
});
tl.reverse();

toggleBtn.addEventListener('click', function () {
  tl.reversed(!tl.reversed());
});

const tl1 = gsap.timeline({
  onComplete: function () {
    gsap.set('.navbar, .navbar__link', {
      clearProps: 'all',
    });
  },
  paused: true,
});

navLink.addEventListener('click', function () {
  tl.reversed(!tl.reversed());
});
