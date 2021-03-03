import { loop } from './modules/helpers';
import cards from './modules/cards';
import header from './modules/header';
import uxi from './modules/uxi';

const main = () => {
  cards();
  header();
  uxi();
};

document.addEventListener('DOMContentLoaded', main);
