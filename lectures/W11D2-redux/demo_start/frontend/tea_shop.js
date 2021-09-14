import configureStore from "./store/store"
import {receivedTea} from "./actions/teaActions"




document.addEventListener("DOMContentLoaded", () => {
  
  const store = configureStore();
  window.receivedTea = receivedTea;
  window.store = store
  console.log("Welcome to the magic tea shop.")
})