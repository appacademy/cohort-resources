import configureStore  from "./store/store";
import { receiveTea } from "./actions/tea_actions";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.");

  const store = configureStore();
  window.store = store;
  window.receiveTea = receiveTea
})
