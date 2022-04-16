<template>
  <div class="h-12 w-full bg-black" style="height: 60px">
    <div ref="meema" class="h-12 w-1/2 bg-red-500" style="height: 60px">
      <!-- <img :src="url" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

interface Props {
  src: string;
  width?: number | null;
  w?: number | null;
  height?: number | null;
  h?: number | null;
  // blurhash, lazy, alt,
}

withDefaults(defineProps<Props>(), {
  width: null,
  w: null,
  height: null,
  h: null
});

onMounted(() => {
  // console.log('$refs', this.$refs.meema);
});

const url = computed(() => `https://dev-cdn.mee.ma/${src}?w=${width}`);
</script>
