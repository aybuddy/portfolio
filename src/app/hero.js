'use strict';
import { gsap } from 'gsap';

const logo = document.querySelector('.logo');
const toggleButtons = document.querySelector('.toggle-btn');
const hero = document.querySelector('.hero__container--2');
const mainTextContainer = document.querySelector('.hero__container--1');
const mainText = document.querySelector('.hero__text--main');
const secondText = document.querySelectorAll('.hero__text--second');
const heroAdv = document.querySelectorAll('.hero__adv--link');
const socialLinks = document.querySelectorAll('.hero__social--link');
const footerLinks = document.querySelectorAll('.footer__links');

const tl2 = gsap.timeline();

const responsiveAnimation = () => ({
  '(min-width: 1024px)': tl2
    .fromTo(
      hero,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: 'power4.out',
      }
    )
    .fromTo(
      mainText,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
      '-=2'
    )
    .fromTo(
      mainTextContainer,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
      '-=2'
    )
    .fromTo(
      secondText,
      { x: '100%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
      '-=1'
    )
    .fromTo(
      heroAdv,
      { y: '100%', opacity: 0 },
      { y: 0, duration: 1, opacity: 1, stagger: 0.3, ease: 'power4.out' }
    )
    .fromTo(
      socialLinks,
      { y: '100%', opacity: 0 },
      { y: 0, duration: 1, opacity: 1, stagger: 0.3, ease: 'power4.out' },
      '-=0.5'
    )
    .fromTo(
      toggleButtons,
      { x: '100%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
      '-=1'
    )
    .fromTo(
      logo,
      { x: '-100%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
      '-=0.5'
    )
    .fromTo(
      footerLinks,
      { y: '-100%', opacity: 0 },
      { y: 0, duration: 1, opacity: 1, stagger: 0.3, ease: 'power4.out' }
    ),
});

responsiveAnimation();
