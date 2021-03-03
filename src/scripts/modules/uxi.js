import lottie from 'lottie-web';

const tl = new TimelineMax({ paused: true })
  .set('.uxi .venture__preview', { perspective: 100 })
  .to('.uxi .venture__preview', 0.5, {
    rotation: 25,
    rotationX: -4,
    rotationY: 1,
    scaleX: 0.9,
    scaleY: 1.3,
    ease: Back.easeOut.config(1.2),
  });

const uxi = () => {
  const svgContainer = document.querySelector('.uxi .venture__preview');
  const uxIntervention = document.querySelector('.venture.uxi');

  // flag to determine whether or not animation is playing
  let isAnimating = true;

  // load lottie animation
  const animation = lottie.loadAnimation({
    container: svgContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '../assets/images/ux-intervention/data.json',
  });

  // wait for DOM to load
  animation.addEventListener('DOMLoaded', function () {
    // play initial animation after 1s
    setTimeout(() => {
      animation.playSegments([0, 90], true);
    }, 1000);

    // on card hover
    uxIntervention.addEventListener('mouseenter', (e) => {
      // make sure animation is not already running
      if (!isAnimating) {
        // set is animating to true
        isAnimating = true;
        // play frames 85-210 (signature)
        animation.playSegments([90, 210], true);
        // animate perspective change
        tl.play();
      }
    });

    // when animation completes
    animation.addEventListener('complete', (e) => {
      // set is animating to false
      isAnimating = false;
      // animate perspective change back to normal
      tl.reverse();
    });
  });
};

export default uxi;
