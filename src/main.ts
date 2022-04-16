import { defineCustomElement } from 'vue';
import Img from './components/ImgV2.ce.vue';
// import Video from './components/VideoV2.ce.vue';
// import Audio from './components/AudioV2.ce.vue';
import Table from './components/TableV2.ce.vue';
import './styles/index.css';

// console.log('Img.styles', Img.styles); // ["/* inlined css */"]

// convert into custom element constructor
const ImgCustomElement = defineCustomElement(Img);
const TableCustomElement = defineCustomElement(Table);

// export individual elements
customElements.define('img-v2', ImgCustomElement);
customElements.define('table-v2', TableCustomElement);
