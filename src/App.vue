<template>
  <div id="app" class="app">
    <app-home></app-home>
  </div>
</template>

<script>
import Home from "./components/home.vue"
import { bus } from "./main.js"
export default {
  components:{
    "app-home":Home
  },
  data () {
    return {
      scrolled: 0
    }
  },
  methods: {
  handleScroll () {
    this.scrolled = window.scrollY;
    bus.$emit('Scrolled',this.scrolled);
  }
},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
}
}
</script>

<style lang="scss">
@import "./scss/styles.scss";
</style>
