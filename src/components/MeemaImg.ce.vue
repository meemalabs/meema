<template>
  <div class="w-full h-12 bg-black" style="height: 60px">
    <div ref="meema" class="w-1/2 h-12 bg-red-500" style="height: 60px">
      <!-- <img :src="url" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MeemaImg',

  props: {
    src: {
      type: String,
      required: true
      // TODO: add validation rule
    },

    // TODO: blurhash, lazy, etc.

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

  computed: {
    url() {
      return `https://dev-cdn.mee.ma/${this.src}?w=${this.width}`;
    }
  },

  mounted() {
    console.log('this.$refs.meema.clientHeight', this.$refs.meema);
  }
});
</script>
