import configureStore from './store/store';
import {receiveGreenTea, receiveTea} from './actions/tea_actions';
import { receiveCookie } from './actions/cookies_actions';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")

  const store = configureStore();

  window.store = store;
  // window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
  window.receiveCookie = receiveCookie
})