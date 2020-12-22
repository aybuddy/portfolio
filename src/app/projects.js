'use strict';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const tlProj = gsap.timeline();

tlProj.from('.project-title', {
  y: '100%',
  opacity: 0,
  duration: 2,
  ease: 'back',
  scrollTrigger: {
    trigger: '.project-title',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});

gsap.utils.toArray('.fromLeft').forEach(section => {
  tlProj.from(section, {
    x: '-100px',
    opacity: 0,
    duration: 4,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 75%',
      scrub: true,
    },
  });
});

gsap.utils.toArray('.fromRight').forEach(section => {
  tlProj.from(section, {
    x: '100%',
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 75%',
      scrub: true,
    },
  });
});

gsap.utils.toArray('.fromBottom').forEach(section => {
  tlProj.from(section, {
    y: '50',
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 75%',
      scrub: true,
    },
  });
});

gsap.utils.toArray('.fromSpan').forEach(section => {
  tlProj.from(section, {
    x: '-100%',
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 75%',
      scrub: true,
    },
  });
});
gsap.utils.toArray('.fromButton').forEach(section => {
  tlProj.from(section, {
    y: '50',
    opacity: 0,
    duration: 4,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      end: 'bottom 75%',
      scrub: true,
    },
  });
});

tlProj.from('.about-title', {
  y: '100%',
  opacity: 0,
  duration: 2,
  ease: 'back',
  scrollTrigger: {
    trigger: '.project-title',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});

tlProj.from('.about__text', {
  y: '50',
  opacity: 0,
  duration: 2,
  ease: 'power4.easeOut',
  scrollTrigger: {
    trigger: '.about__text',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});

tlProj.from('.contact-title', {
  y: '100%',
  opacity: 0,
  duration: 2,
  ease: 'back',
  scrollTrigger: {
    trigger: '.project-title',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});

tlProj.from('.contact__linked', {
  y: '50',
  opacity: 0,
  duration: 2,
  ease: 'power4.easeOut',
  scrollTrigger: {
    trigger: '.contact__linked',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});
tlProj.from('.contact__email', {
  y: '50',
  opacity: 0,
  duration: 2,
  ease: 'power4.easeOut',
  scrollTrigger: {
    trigger: '.contact__email',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true,
  },
});
