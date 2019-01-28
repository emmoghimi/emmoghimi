<template>
  <div id="intro" class="app--home--intro">
    <div class="app--home--intro--container container-fluid d-flex flex-column">
      <p class="app--home--intro--container--title">Hi <br> im Emad Moghimi <br> a Front-end web developer</p>
      <div class="app--home--intro--container--social-network d-flex flex-column">
          <ul class="app--home--intro--container--social-network--nav d-flex container-fluid nav flex-wrap">
            <li class="app--home--intro--container--social-network--nav--gitlab nav-item"><a href="https://gitlab.com/emmoghimi" target="_blank" class="nav-link"><i class="fab fa-gitlab"></i></a></li>
            <li class="app--home--intro--container--social-network--nav--github nav-item"><a href="http://github.com/emmoghimi" target="_blank" class="nav-link"><i class="fab fa-github"></i></a></li>
            <li class="app--home--intro--container--social-network--nav--phone nav-item" @click="phoneInfo"><a href="#6" class="nav-link"><i class="fas fa-mobile-alt"></i></a></li>
            <li class="app--home--intro--container--social-network--nav--twitter nav-item"><a href="http://twitter.com/emmoghimi" target="_blank" class="nav-link"><i class="fab fa-twitter"></i></a></li>
            <li class="app--home--intro--container--social-network--nav--gmail nav-item"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=emmoghimi@gmail.com" target="_blank" class="nav-link"><i class="fas fa-envelope"></i></a></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    phoneInfo(){
     swal(`Send me message or call me 
      +989372256142 "Emad Moghimi"`);
    }
  }
}
</script>

<style lang="scss">
</style>
