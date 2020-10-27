'use strict';

import $ from 'jquery';
import './index.css';

function main() {
  console.log('DOM is loaded');
  shoppingList.bindEventListeners();
  shoppingList.render();
  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

import shoppingList from './scripts/shopping-list';


$(main);
