<template>
  <div id="app" class="app">
    <app-home></app-home>
  </div>
</template>

<script>
import Home from "./components/home.vue"
export default {
  components:{
    "app-home":Home
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "./scss/styles.scss";
</style>
