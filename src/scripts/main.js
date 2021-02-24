import { loop } from './modules/helpers';
import cards from './modules/cards';
import header from './modules/header';
import lottie from 'lottie-web';

const main = () => {
  cards();
  header();
};

document.addEventListener('DOMContentLoaded', main);

// (function uxIntervention() {
//   const svgContainer = document.querySelector('.');

//   lottie.loadAnimation({
//     container: svgContainer,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'data.json',
//   });
// });
