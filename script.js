const navbarAnimation = anime({
  targets: '.navbar',
  translateY: [
    { value: 85, duration: 400 }
  ],
  easing: 'easeInOutQuad'
});

const landingPageText = anime({
  targets: '.text-container',
  translateY: [
    { value: 120, duration: 600, delay: 100}
  ],
  opacity: [
    { value: 1, duration: 800 }
  ],
  easing: 'easeInOutQuad'
});

const shapebg = anime({
  targets: '.shape',
  translateY: [
    { value: 0, duration: 50, delay: 0 },
  ],
  opacity: [
    { value: 1, duration: 300 }
  ],
  easing: 'easeInOutQuad'
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

//ANIMATION SKILLS SECTION
const skillAnimation = anime({
  targets: '.skill-animation',
  translateY: [
    { value: [40, -20], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})
const section3 = document.querySelector('.my-hobbies-container');

const techSkillAnimation = anime({
  targets: '.tech-used',
  translateX: [
    { value: [-50, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const techGridAnimation = anime({
  targets: '.skills-grid',
  translateY: [
    { value: [50, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const skillServicesAnimation = anime({
  targets: '.skill-services',
  translateX: [
    { value: [-50, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const webDevContainerAnimation = anime({
  targets: '.web-service',
  translateX: [
    { value: [-70, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const gameDevContainerAnimation = anime({
  targets: '.game-service',
  translateY: [
    { value: [70, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const photoEditContainerAnimation = anime({
  targets: '.edit-service',
  translateX: [
    { value: [70, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

//PROJECT SECTION ANIMATION
const projectAnimation = anime({
  targets: '.project-animation',
  translateY: [
    { value: [40, -20], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});
const section4 = document.querySelector('.tech-used-container');

const kapyaCafeProjectAnimation = anime({
  targets: '.kapya-cafe',
  translateX: [
    { value: [120, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const kapyaLaptopAnimation = anime({
  targets: '.kapya-laptop',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const kapyaCafeTextAnimation = anime({
  targets: '.kapya-cafe-title',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const kapyaProgLangUsedAnimation = anime({
  targets: '.kapya-prog-lang',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const kapyaCafeDescAnimation = anime({
  targets: '.kapya-desc',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const kapyaCafeButtonAnimation = anime({
  targets: '.kapya-button',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

//TODOLIST ANIMATION
const todoListAnimation = anime({
  targets: '.todo-list',
  translateX: [
    { value: [-120, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});
const section5 = document.querySelector('.project-animation');

const todoListLaptopAnimation = anime({
  targets: '.todo-list-laptop',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const todoListTextAnimation = anime({
  targets: '.todo-list-title',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const todoListProgLangAnimation = anime({
  targets: '.todo-list-prog-lang',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const todoListDescAnimation = anime({
  targets: '.todo-list-desc',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const todoListButton = anime({
  targets: '.todo-list-button',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

//ROCK PAPER SCISSOR ANIMATION
const rockPaperScissorAnimation = anime({
  targets: '.rock-paper-scissor',
  translateX: [
    { value: [120, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const rockPaperScissorLaptopAnimation = anime({
  targets: '.rock-paper-scissor-laptop',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const rockPaperScissorTitleAnimation = anime({
  targets: '.rock-paper-scissor-title',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const rockPaperScissorProgLangAnimation = anime({
  targets: '.rock-paper-scissor-prog-lang',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const rockPaperScissorDescAnimation = anime({
  targets: '.rock-paper-scissor-desc',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const rockPaperScissorButtonAnimation = anime({
  targets: '.rock-paper-scissor-button',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

//CONTACT ANIMATION SECTION
const contactAnimation = anime({
  targets: '.contact-animation',
  translateY: [
    { value: [60, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});
const section6 = document.querySelector('.rock-paper-scissor');

const contactContainerAnimation = anime({
  targets: '.contact-container',
  translateY: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const letsTalkAnimation = anime({
  targets: '.lets-talk',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const contactDescAnimation = anime({
  targets: '.contact-desc',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const mailSentPicAnimation = anime({
  targets: '.mail-sent-pic',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const nameContainerAnimation = anime({
  targets: '.name-container',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
})

const contactInfoContainerAnimation = anime({
  targets: '.contact-info-container',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const messageContainerAnimation = anime({
  targets: '.message-container',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const locationContainerAnimation = anime({
  targets: '.location-container',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const contactNumberContainerAnimation = anime({
  targets: '.contact-number-container',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const fbIconAnimation = anime({
  targets: '.fb-icon',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const linkedinIconAnimation = anime({
  targets: '.linkedin-icon',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const discordIconAnimation = anime({
  targets: '.discord-icon',
  translateX: [
    { value: [80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
});

const submitButtonAnimation = anime({
  targets: '.submit-button',
  translateX: [
    { value: [-80, 0], duration: 1000 }
  ],
  opacity: [
    { value: 1, duration: 1000 }
  ],
  easing: 'easeInOutQuad',
  autoplay: false,
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

  skillAnimation.seek(animationOnScroll(section3, 300, 300) * skillAnimation.duration);

  techSkillAnimation.seek(animationOnScroll(section3, 300, 200) * techSkillAnimation.duration);

  techGridAnimation.seek(animationOnScroll(section3, 300, 100) * techGridAnimation.duration);

  skillServicesAnimation.seek(animationOnScroll(section3, 300, 50) * skillServicesAnimation.duration);

  webDevContainerAnimation.seek(animationOnScroll(section3, 300, -80) * webDevContainerAnimation.duration);

  gameDevContainerAnimation.seek(animationOnScroll(section3, 300, -80) * gameDevContainerAnimation.duration);

  photoEditContainerAnimation.seek(animationOnScroll(section3, 300, -80) * photoEditContainerAnimation.duration);

  projectAnimation.seek(animationOnScroll(section4, 300, 200) * projectAnimation.duration);

  kapyaCafeProjectAnimation.seek(animationOnScroll(section4, 300, 100) * kapyaCafeProjectAnimation.duration);

  kapyaLaptopAnimation.seek(animationOnScroll(section4, 300, -100) * kapyaLaptopAnimation.duration);

  kapyaCafeTextAnimation.seek(animationOnScroll(section4, 300, 0) * kapyaCafeTextAnimation.duration);

  kapyaProgLangUsedAnimation.seek(animationOnScroll(section4, 300, -30) * kapyaProgLangUsedAnimation.duration);

  kapyaCafeDescAnimation.seek(animationOnScroll(section4, 400, -40) * kapyaCafeDescAnimation.duration);

  kapyaCafeButtonAnimation.seek(animationOnScroll(section4, 300, -200) * kapyaCafeButtonAnimation.duration);

  todoListAnimation.seek(animationOnScroll(section5, 300, 340) * todoListAnimation.duration);

  todoListLaptopAnimation.seek(animationOnScroll(section5, 300, 250) * todoListLaptopAnimation.duration);

  todoListTextAnimation.seek(animationOnScroll(section5, 300, 200) * todoListTextAnimation.duration);

  todoListProgLangAnimation.seek(animationOnScroll(section5, 300, 150) * todoListProgLangAnimation.duration);

  todoListDescAnimation.seek(animationOnScroll(section5, 400, 150) * todoListDescAnimation.duration);

  todoListButton.seek(animationOnScroll(section5, 300, 40) * todoListButton.duration);

  rockPaperScissorAnimation.seek(animationOnScroll(section5, 300, -120) * rockPaperScissorAnimation.duration);

  rockPaperScissorLaptopAnimation.seek(animationOnScroll(section5, 300, -190) * rockPaperScissorLaptopAnimation.duration);

  rockPaperScissorTitleAnimation.seek(animationOnScroll(section5, 300, -240) * rockPaperScissorTitleAnimation.duration);

  rockPaperScissorProgLangAnimation.seek(animationOnScroll(section5, 300, -320) * rockPaperScissorProgLangAnimation.duration);

  rockPaperScissorDescAnimation.seek(animationOnScroll(section5, 300, -390) * rockPaperScissorDescAnimation.duration);

  rockPaperScissorButtonAnimation.seek(animationOnScroll(section5, 300, -480) * rockPaperScissorButtonAnimation.duration);

  contactAnimation.seek(animationOnScroll(section6, 300, 275) * contactAnimation.duration);

  contactContainerAnimation.seek(animationOnScroll(section6, 300, 195) * contactContainerAnimation.duration);

  letsTalkAnimation.seek(animationOnScroll(section6, 300, 150) * letsTalkAnimation.duration);

  contactDescAnimation.seek(animationOnScroll(section6, 300, 100) * contactDescAnimation.duration);

  mailSentPicAnimation.seek(animationOnScroll(section6, 300, 120) * mailSentPicAnimation.duration);

  nameContainerAnimation.seek(animationOnScroll(section6, 300, 40) * mailSentPicAnimation.duration);

  contactInfoContainerAnimation.seek(animationOnScroll(section6, 300, -10) * contactInfoContainerAnimation.duration);

  messageContainerAnimation.seek(animationOnScroll(section6, 300, -60) * messageContainerAnimation.duration);

  locationContainerAnimation.seek(animationOnScroll(section6, 300, -140) * locationContainerAnimation.duration);

  contactNumberContainerAnimation.seek(animationOnScroll(section6, 300, -190) * contactNumberContainerAnimation.duration);

  fbIconAnimation.seek(animationOnScroll(section6, 350, -250) * fbIconAnimation.duration);

  linkedinIconAnimation.seek(animationOnScroll(section6, 370, -250) * linkedinIconAnimation.duration);

  discordIconAnimation.seek(animationOnScroll(section6, 390, -250) * discordIconAnimation.duration);

  submitButtonAnimation.seek(animationOnScroll(section6, 300, -300) * submitButtonAnimation.duration);
}