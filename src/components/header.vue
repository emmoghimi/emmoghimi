<template>
  <div id="header" class="app--home--header" v-on="on()">
      <ul class="app--home--header--nav nav container-fluid position-fixed fixed-top d-flex justify-content-center">
          <li :class="'nav-item app--home--header--nav--intro ' + navClick.intro + navScroll.intro" @click="showIntro"><a class="nav-link" href="#3" >Intro</a></li>
          <li :class="'nav-item app--home--header--nav--information ' + navClick.info + navScroll.info" @click="showInformation"><a class="nav-link" href="#4">Aboutme</a></li>
          <li :class="'nav-item app--home--header--nav--skills ' + navClick.skills + navScroll.skills" @click="showSkills"><a class="nav-link" href="#5">Skills</a></li>
          <li :class="'nav-item app--home--header--nav--projects ' + navClick.projects + navScroll.projects" @click="showProjects"><a class="nav-link" href="#6">Projects</a></li>
      </ul>
  </div>
</template>

<script>
import { bus } from "../main.js"
export default {
  data () {
    return {
      scroll:0,
      navClick:{
        intro:'',
        info:'',
        skills:'',
        projects:''
      },
      navScroll:{
        intro:'',
        info:'',
        skills:'',
        projects:''
      }
    }
  },
  methods:{
    on(){
      bus.$on('scrolledToIntro',(data) =>{
       this.navScroll.intro = ' scale-intro'
       this.navClick.intro = ''
       this.navScroll.info = ''
       this.navScroll.skills = ''
       this.navScroll.projects = ''

     });
      bus.$on('scrolledToInfo',(data) =>{
       this.scroll = data;
       this.navScroll.intro = ''
       this.navScroll.info = ' scale-info'
       this.navClick.info = ''
       this.navScroll.skills = ''
       this.navScroll.projects = ''
     });
     bus.$on('scrolledToSkills',(data) =>{
       this.navScroll.intro = ''
       this.navScroll.info = ''
       this.navScroll.skills = ' scale-skills'
       this.navClick.skills = ''
       this.navScroll.projects = ''

     });
     bus.$on('scrolledToProjects',(data) =>{
       this.navScroll.intro = ''
       this.navScroll.info = ''
       this.navScroll.skills = ''
       this.navScroll.projects = ' scale-projects'
       this.navClick.projects = ''

     });
    },
    showIntro(){
        if(this.navClick.intro === ''){
          this.navClick.intro = 'scale-intro'
          this.navClick.info = ''
          this.navClick.skills = ''
          this.navClick.projects = ''
        }
        $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#intro').offset().top 
        }, 200);
        });
    },
    showInformation(){
      if(this.navClick.info === ''){
        this.navClick.intro = ''
        this.navClick.info = 'scale-info'
        this.navClick.skills = ''
        this.navClick.projects = ''
      }
      $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#information').offset().top 
      }, 200);
      });
    },
    showSkills(){
      if(this.navClick.skills === ''){
        this.navClick.intro = ''
        this.navClick.info = ''
        this.navClick.skills = 'scale-skills'
        this.navClick.projects = ''
      }
       $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#skills').offset().top 
      }, 200);
      });
    },
    showProjects(){
      if(this.navClick.projects === ''){
        this.navClick.intro = ''
        this.navClick.info = ''
        this.navClick.skills = ''
        this.navClick.projects = 'scale-projects'
      }
      $( document ).ready(function() {
        $("html, body").animate({
        scrollTop: $('#projects').offset().top 
      }, 200);
      });
    }
  }
}
</script>

<style lang="scss">
</style>
