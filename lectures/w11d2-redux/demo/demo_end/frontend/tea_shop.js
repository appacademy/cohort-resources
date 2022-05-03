import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveGreenTea, receiveTea } from './actions/tea_actions';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")
  const store = configureStore();
  window.store = store;
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
})