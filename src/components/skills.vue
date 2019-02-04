<template>
  <div id="skills" class="app--home--skills ">
    <div class="app--home--skills--container container-fluid d-flex flex-column align-items-start">
      <p class="app--home--skills--container--title container">Skills</p>
      <ul class="app--home--skills--container--nav d-flex align-items-center container-fluid nav" data-aos="zoom-in" data-aos-duration="500">
        <li class="nav-item app--home--skills--container--nav--html" :id="status.html"  @click="showHtml"><a class="nav-link" href="#8">HTML5</a></li>
        <li class="nav-item app--home--skills--container--nav--css" :id="status.css"  @click="showCss"><a class="nav-link" href="#9">CSS3</a></li>
        <li class="nav-item app--home--skills--container--nav--sass" :id="status.sass" @click="showSass"><a class="nav-link" href="#10" >SCSS</a></li>
        <li class="nav-item app--home--skills--container--nav--bootstrap" :id="status.bootstrap" @click="showBootstrap"><a class="nav-link" href="#11" >Bootstrap</a></li>
        <li class="nav-item app--home--skills--container--nav--js" :id="status.js"  @click="showJs"><a class="nav-link" href="#12">JavaScript</a></li>
        <li class="nav-item app--home--skills--container--nav--jquery" :id="status.jquery" @click="showJquery"><a class="nav-link" href="#13">jQuery</a></li>
        <li class="nav-item app--home--skills--container--nav--vue" :id="status.vue"  @click="showVue"><a class="nav-link" href="#14">Vue.js</a></li>
        <li class="nav-item app--home--skills--container--nav--git" :id="status.git" @click="showGit"><a class="nav-link" href="#15">Git</a></li>
      </ul>
      <div class="app--home--skills--container--content d-flex">
          <p class="app--home--skills--container--content--html" v-show="descriptions.html">I learned HTML to build the skeleton of the page and also to put content on the page as every front-end developer needs to know HTML because it's the beginning of becoming a front-end developer. </p>
          <p class="app--home--skills--container--content--css" v-show="descriptions.css" >We all should use CSS to design and layout the content of the page so I use it because that's what makes websites look good and beautiful. <br> but it's not magic, the beauty of the website depends on the designer.</p>
          <p class="app--home--skills--container--content--sass" v-show="descriptions.sass">There are some preprocessors for CSS I chose SASS between the most popular of them completely blind I just read the name in an article and start learning later i found out there's other preprocessor's. they are really helpful for me cause makes my work cleaner and faster.</p>
          <p class="app--home--skills--container--content--bootstrap" v-show="descriptions.bootstrap">CSS has a lot of frameworks and they all has their own unique features and choosing between them is depends on what you need, I chose bootstrap because it's fast and easy to use and learn and it's one of the most popular CSS frameworks. </p>
          <p class="app--home--skills--container--content--js" v-show="descriptions.js">I'm using javascript to make websites dynamic and make them interactive for users so they can do it by sending requests to the server and server give them responses.</p>
          <p class="app--home--skills--container--content--jquery" v-show="descriptions.jquery">As the creator's of jquery says write less, do more jQuery library help's me to use javascript in an easier way and makes my work cleaner and faster like CSS frameworks.</p>
          <p class="app--home--skills--container--content--vue" v-show="descriptions.vue">Vue is one of the most and popular javascript frameworks, i preferred  to use vue instead of react and angular because it's a small, fast and flexible framework that allows me to reach better performance than others and faster applications.</p>
          <p class="app--home--skills--container--content--git" v-show="descriptions.git">Any application has multiple versions GIT is really helpful to make multiple versions of your application and manage them, like go back on the previous version of your code and it’s also a great tool for team working.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      descriptions:{
        html:true,
        css:false,
        sass:false,
        bootstrap:false,
        js:false,
        jquery:false,
        vue:false,
        git:false
      },
      status:{
        html:'clicked',
        css:'not-clicked',
        sass:'not-clicked',
        bootstrap:'not-clicked',
        js:'not-clicked',
        jquery:'not-clicked',
        vue:'not-clicked',
        git:'not-clicked'
      }
    }
  },
  methods:{
    showHtml(){
      if(this.descriptions.html === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.html = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.html = 'clicked';
      }
    },
    showCss(){
      if(this.descriptions.css === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.css = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.css = 'clicked';
      }
    },
    showSass(){
      if(this.descriptions.sass === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.sass = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.sass = 'clicked';
      }
    },
    showBootstrap(){
      if(this.descriptions.bootstrap === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.bootstrap = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.bootstrap = 'clicked';
      }
    },
    showJs(){
      if(this.descriptions.js === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.js = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.js = 'clicked';
      }
    },
    showJquery(){
      if(this.descriptions.jquery === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.jquery = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.jquery = 'clicked';
      }
    },
    showVue(){
      if(this.descriptions.vue === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.vue = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.vue = 'clicked';
      }
    },
    showGit(){
      if(this.descriptions.git === !true){
      Object.keys(this.descriptions).forEach(v => this.descriptions[v] = false)
      this.descriptions.git = true;
      Object.keys(this.status).forEach(v => this.status[v] = 'not-clicked')
      this.status.git = 'clicked';
      }
    }

  }
}
</script>

<style lang="scss">
</style>
