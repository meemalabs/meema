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
  width?: number;
  w?: number;
  height?: number;
  h?: number;
  // blurhash, lazy, alt,
}

const props = defineProps<Props>();

const url = computed(
  () => `https://dev-cdn.mee.ma/${props.src}?w=${props.width}`
);

onMounted(() => {
  console.log('url', url);
});
</script>
