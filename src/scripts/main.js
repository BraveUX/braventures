import { loop } from './modules/helpers';
import cards from './modules/cards';
import header from './modules/header';
import lottie from 'lottie-web';

const main = () => {
  cards();
  header();
};

document.addEventListener('DOMContentLoaded', main);

(function uxIntervention() {
  const svgContainer = document.querySelector('.uxi .venture__preview');

  const animation = lottie.loadAnimation({
    container: svgContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/images/ux-intervention/data.json',
  });

  setTimeout(() => {
    animation.goToAndStop(106);
  }, 100);

  let frames = [];

  animation.onLoopComplete = (e) => {
    console.log(e);
    console.log('doot');
    animation.playSegments([0, 106], true);
  };

  document.querySelector('.venture.uxi').addEventListener('click', (e) => {
    e.preventDefault();
    animation.play();
  });
})();
