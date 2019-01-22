<template>
  <div id="header" class="app--home--header">
      <ul class="app--home--header--nav nav container-fluid position-fixed fixed-top">
          <li class="nav-item app--home--header--nav--name"><a class="nav-link" href="#1">Emad Moghimi</a></li>
          <li :class="'nav-item app--home--header--nav--intro ' + nav.intro" @click="showIntro"><a class="nav-link" href="#3" >Intro</a></li>
          <li :class="'nav-item app--home--header--nav--information ' + nav.info" @click="showInformation"><a class="nav-link" href="#4">Information</a></li>
          <li :class="'nav-item app--home--header--nav--skills ' + nav.skills" @click="showSkills"><a class="nav-link" href="#5">Skills</a></li>
          <li :class="'nav-item app--home--header--nav--projects ' + nav.projects" @click="showProjects"><a class="nav-link" href="#6">Projects</a></li>
      </ul>
  </div>
</template>

<script>
import { bus } from "../main.js"
export default {
  data () {
    return {
      scroll:0,
      nav:{
        intro:'scale-intro',
        info:'',
        skills:'',
        projects:''
      }
    }
  },
  methods:{
    showIntro(){
      this.nav.intro = 'scale-intro'
      this.nav.info = ''
      this.nav.skills = ''
      this.nav.projects = ''
        $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#intro').offset().top 
    }, 500);
});
     
    
    },
    showInformation(){
      this.nav.intro = ''
      this.nav.info = 'scale-info'
      this.nav.skills = ''
      this.nav.projects = ''
      $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#information').offset().top 
    }, 500);
});
    },
    showSkills(){
      this.nav.intro = ''
      this.nav.info = ''
      this.nav.skills = 'scale-skills'
      this.nav.projects = ''
       $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#skills').offset().top 
    }, 500);
});
    },
    showProjects(){
      this.nav.intro = ''
      this.nav.info = ''
      this.nav.skills = ''
      this.nav.projects = 'scale-projects'
      $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#projects').offset().top 
    }, 500);
});
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss">
</style>
