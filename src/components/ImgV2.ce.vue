<template>
  <img :src="url" />
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
  // () => `https://dev-cdn.mee.ma/${props.src}?w=${props.width}`
  () =>
    `https://images.pexels.com/photos/11039600/pexels-photo-11039600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
);

onMounted(() => {
  console.log('url', url.value);
  console.log('props', props);
});
</script>
