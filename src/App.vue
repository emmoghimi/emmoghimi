<template>
  <div id="app" class="app" v-on:scroll="handleScroll">
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
    console.log(this.scrolled)
    if(this.scrolled <= 900){
      bus.$emit('scrolledToIntro',this.scrolled);
    }
    if(this.scrolled >= 900){
      bus.$emit('scrolledToInfo',this.scrolled);
    }
    if(this.scrolled >= 1471.199951171875){
      bus.$emit('scrolledToSkills',this.scrolled);
    }
    if(this.scrolled >= 1900.800048828125){
      bus.$emit('scrolledToProjects',this.scrolled);
    }
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
