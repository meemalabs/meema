<template>
  <img :src="url" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'MeemaImg',

  props: {
    src: {
      type: String,
      required: true
      // TODO: add validation rule
    },

    width: {
      type: Number,
      default: null
    },

    w: {
      type: Number,
      default: null
    },

    height: {
      type: Number,
      default: null
    },

    h: {
      type: Number,
      default: null
    }
  },

  setup: () => {
    const count = ref(0);
    return { count };
  },

  computed: {
    // a computed getter
    url() {
      return `https://dev-cdn.mee.ma/${this.src}?w=${this.width}`;
    }
  }
});
</script>
