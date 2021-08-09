import { defineCustomElement } from "vue";
import MeemaImg from "./components/MeemaImg.ce.vue";
import "./styles/index.css";

console.log("MeemaImg.styles", MeemaImg.styles); // ["/* inlined css */"]

// convert into custom element constructor
const MeemaImgCustomElement = defineCustomElement(MeemaImg);

// export individual elements
customElements.define("meema-img", MeemaImgCustomElement);
