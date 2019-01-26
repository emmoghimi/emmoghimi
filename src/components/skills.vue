<template>
  <div id="skills" class="app--home--skills" data-aos="fade-right" data-aos-duration="1000">
    <div class="app--home--skills--container container d-flex flex-column align-items-start">
      <p class="app--home--skills--container--title">My skills</p>
      <ul class="app--home--skills--container--nav d-flex align-items-center container nav ">
        <li class="nav-item app--home--skills--container--nav--html" :id="status.html"><a class="nav-link" href="#8" @click="showHtml">HTML5</a></li>
        <li class="nav-item app--home--skills--container--nav--css" :id="status.css"><a class="nav-link" href="#9" @click="showCss">CSS3</a></li>
        <li class="nav-item app--home--skills--container--nav--sass" :id="status.sass"><a class="nav-link" href="#10" @click="showSass">SCSS</a></li>
        <li class="nav-item app--home--skills--container--nav--bootstrap" :id="status.bootstrap"><a class="nav-link" href="#11" @click="showBootstrap">Bootstrap</a></li>
        <li class="nav-item app--home--skills--container--nav--js" :id="status.js"><a class="nav-link" href="#12" @click="showJs">JavaScript</a></li>
        <li class="nav-item app--home--skills--container--nav--jquery" :id="status.jquery"><a class="nav-link" href="#13" @click="showJquery">jQuery</a></li>
        <li class="nav-item app--home--skills--container--nav--vue" :id="status.vue"><a class="nav-link" href="#14" @click="showVue">Vue.js</a></li>
        <li class="nav-item app--home--skills--container--nav--git" :id="status.git"><a class="nav-link" href="#15" @click="showGit">Git</a></li>
      </ul>
      <div class="app--home--skills--container--content d-flex">
          <p class="app--home--skills--container--content--html" v-show="descriptions.html">I learned HTML to build the skeleton of the page and also to put content on the page as every front-end developer needs to know HTML because it's the beginning of becoming a front-end developer. </p>
          <p class="app--home--skills--container--content--css" v-show="descriptions.css" >We all should use CSS to design and layout the content of the page so I use it because that's what makes websites look good and beautiful. <br> but it's not magic, the beauty of the website depends on the designer.</p>
          <p class="app--home--skills--container--content--sass" v-show="descriptions.sass">There are some preprocessors for CSS I chose SASS between the most popular of them completely blind I just read the name in an article and start learning later i found out there's other preprocessor's. they are really helpful for me cause makes my work cleaner and faster.</p>
          <p class="app--home--skills--container--content--bootstrap" v-show="descriptions.bootstrap">CSS has a lot of frameworks and they all has their own unique features and choosing between them is depends on what you need, I chose bootstrap because it's fast and easy to use and learn and it's one of the most popular CSS frameworks. </p>
          <p class="app--home--skills--container--content--js" v-show="descriptions.js">We can design and layout a website with HTML and CSS but users can only watch it and there is nothing to communicate with the so-called it's static, I'm using javascript to make websites dynamic and make them interactive for users so they can do it by sending requests to the server and server give them responses.</p>
          <p class="app--home--skills--container--content--jquery" v-show="descriptions.jquery">As the creator's of jquery says write less, do more jQuery library help's me to use javascript in an easier way and makes my work cleaner and faster like CSS frameworks.</p>
          <p class="app--home--skills--container--content--vue" v-show="descriptions.vue">Vue is one of the most and popular javascript frameworks, i preferd to use vue instead of react and angular because it's a small, fast and flexible framework that allows me to reach better performance than others and faster applications.</p>
          <p class="app--home--skills--container--content--git" v-show="descriptions.git">Any application has multiple versions GIT is really helpful to make multiple versions of your application and manage them, like go back on the previous version of your code and it’s also a great tool for team working.</p>
      </div>
      <p>My resume</p>
      <button>Download</button>
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
