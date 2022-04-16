import { defineCustomElement } from 'vue';
import ImgV2 from './components/ImgV2.ce.vue';
import './styles/index.css';

// console.log('ImgV2.styles', ImgV2.styles); // ["/* inlined css */"]

// convert into custom element constructor
const ImgV2CustomElement = defineCustomElement(ImgV2);

// export individual elements
customElements.define('img-v2', ImgV2CustomElement);
