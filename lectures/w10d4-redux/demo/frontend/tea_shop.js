import configureStore from "./store/store";
import { receiveJasmineTea, receiveTea } from "./actions/tea_action";

document.addEventListener("DOMContentLoaded", () => {
    console.log("welcome to the magic tea shop")
    const store = configureStore();
    window.store = store;
    window.receiveJasmineTea = receiveJasmineTea;
    window.receiveTea = receiveTea;
})