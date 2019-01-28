<template>
  <div id="projects" class="app--home--projects container">
    <p class="app--home--projects--title">Projects</p>
    <div class="app--home--projects--container d-flex justify-content-around align-items-center flex-wrap">
      <a href="https://gitlab.com/emmoghimi/Farzib" target="_blank">
        <div class="app--home--projects--container--first-project container d-flex flex-column justify-content-around align-items-center">
          <img src="../assets/farzib.png" alt="">
          <div class="app--home--projects--container--first-project--des position-absolute d-flex justify-content-center align-items-center">
            <i class="fas fa-info-circle position-relative"></i>
            <p>More</p>
          </div>
      </div>
      </a>
     <a href="https://item-ga.firebaseapp.com/" target="_blank">
        <div class="app--home--projects--container--second-project container d-flex flex-column justify-content-around align-items-center">
          <img class="img" src="../assets/itemga.png" alt="">
          <div class="app--home--projects--container--second-project--des position-absolute d-flex justify-content-center align-items-center">
            <i class="fas fa-info-circle position-relative"></i>
            <p>More</p>
          </div>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
