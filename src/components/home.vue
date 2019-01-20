<template>
  <div id="home" class="app--home">
    <app-header></app-header>
    <app-intro></app-intro>
    <app-info></app-info>
    <app-skills></app-skills>
    <app-projects></app-projects>
  </div>
</template>

<script>
import Header from "./header.vue"
import Intro from "./intro.vue"
import Information from "./information.vue"
import Skills from "./skills.vue"
import Projects from "./projects.vue"
export default {
  components:{
    "app-header":Header,
    "app-intro":Intro,
    "app-info":Information,
    "app-skills":Skills,
    "app-projects":Projects
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
