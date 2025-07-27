<template>
  <!-- <q-page> -->
  <ScrollyImages />
  <!-- </q-page> -->
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollyImages from '../components/ScrollyImages.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'IndexPage',
  components: {
    ScrollyImages
  },
  setup() {
    // You can put logic here if needed
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #000000;
  color: white;
  overscroll-behavior: none;
  padding: 0;
  overflow-x: hidden;
}
</style>
