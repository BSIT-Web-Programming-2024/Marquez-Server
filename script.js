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
