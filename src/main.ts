import { defineCustomElement } from 'vue';
import Img from './components/ImgV2.ce.vue';
// import Video from './components/VideoV2.ce.vue';
// import Audio from './components/AudioV2.ce.vue';
import Table from './components/TableV2.ce.vue';
import './styles/index.css';

// console.log('Img.styles', Img.styles); // ["/* inlined css */"]

// convert into custom element constructor
const ImgV2CustomElement = defineCustomElement(Img);
const TableV2CustomElement = defineCustomElement(Table);

// export individual elements
// export { ImgV2CustomElement, TableV2CustomElement };

// export function register() {
customElements.define('img-v2', ImgV2CustomElement);
customElements.define('table-v2', TableV2CustomElement);
// }
