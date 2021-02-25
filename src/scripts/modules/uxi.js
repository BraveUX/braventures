import lottie from 'lottie-web';

const uxi = () => {
  const svgContainer = document.querySelector('.uxi .venture__preview');
  const uxIntervention = document.querySelector('.venture.uxi');

  // flag to determine whether or not animation is playing
  let isAnimating = false;

  // load lottie animation
  const animation = lottie.loadAnimation({
    container: svgContainer,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '../assets/images/ux-intervention/data.json',
  });

  // increase lottie animation speed by 25%
  lottie.setSpeed(1.25);

  // wait for DOM to load
  animation.addEventListener('DOMLoaded', function () {
    if (!isAnimating) {
      // play initial animation after 1s
      setTimeout(() => {
        isAnimating = true;
        animation.play();
      }, 1000);
    }

    // function to pause animation on frame 112
    const animationPause = (e) => {
      if (e.currentTime >= 112) {
        isAnimating = false;
        animation.pause();
      }
    };

    // listen to frames and pause at defined frame
    animation.addEventListener('enterFrame', animationPause);

    // on card hover
    uxIntervention.addEventListener('mouseenter', (e) => {
      // make sure animation is not already running
      if (!isAnimating) {
        // remove animationPause listener
        animation.removeEventListener('enterFrame', animationPause, false);
        // set is animating to true
        isAnimating = true;
        // play animation for current frame
        animation.play();
      }
    });

    // when loop completes
    animation.addEventListener('loopComplete', (e) => {
      // re-add animationPause listener
      animation.addEventListener('enterFrame', animationPause);
    });
  });
};

export default uxi;
