anime({
  targets: '.navbar',
  translateY: [
    { value: 85, duration: 800 }
  ],
  easing: 'easeInOutBounce'
});

anime({
  targets: '.text-container',
  translateX: [
    { value: 1000, duration: 500, delay: 1000}
  ],
  easing: 'easeInOutSine'
});

anime({
  targets: '.shape',
  translateX: [
    { value: -2000, duration: 1500, delay: 1500 },
  ],
  easing: 'easeInOutQuad',
  direction: 'reverse'
});

//animation on about section
const aboutAnimation = anime({
  targets: '.about-animation',
  translateY: [ 
    { value: [40, -20], duration: 1000}
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});
const section1 = document.querySelector('#home');

//about me img animation
const aboutMe = anime({
  targets: '.about-img-container',
  translateX: [
    { value: [-30, 20], duration: 500 }
  ],
  opacity: [
    { value: 1, duration: 500 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false
});
const section2 = document.querySelector('.landing-page');

//about me education animation
const aboutEducation = anime({
  targets: '.education-container',
  translateX: [
    { value: [50, 0], duration: 500 }
  ],
  opacity: [
    { value: 1, duration: 500 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false
});

const aboutExpertise = anime({
  targets: '.experience-container',
  translateX: [
    { value: [50, 0], duration: 500 }
  ],
  opacity: [
    { value: 1, duration: 500 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false
});

const aboutHobbies = anime({
  targets: '.my-hobbies-container',
  translateY: [
    { value: [35, 0], duration: 500 }
  ],
  opacity: [
    { value: 1, duration: 500 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false
});

const hobbiesList = anime({
  targets: '.hobbies-list-container',
  translateX: [
    { value: [50, 0], duration: 500 }
  ],
  opacity: [
    { value: 1, duration: 500 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false
});

//animation scroll
const animationOnScroll = function(div, speed=300, offset=0) {
  const scrollPercent = window.pageYOffset - div.offsetTop;
  return (scrollPercent + offset) / speed;
}

//scroll listener
window.onscroll = function() {
  aboutAnimation.seek(animationOnScroll(section1) * aboutAnimation.duration);

  aboutMe.seek(animationOnScroll(section2) * aboutMe.duration);

  aboutEducation.seek(animationOnScroll(section1, 300, -100) * aboutEducation.duration);

  aboutExpertise.seek(animationOnScroll(section1, 300, -190) * aboutExpertise.duration);

  aboutHobbies.seek(animationOnScroll(section2, 200, -190) * aboutHobbies.duration);

  hobbiesList.seek(animationOnScroll(section2, 350, -190) * hobbiesList.duration);
}