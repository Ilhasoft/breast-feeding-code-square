<template>
  <div class="banner">
    <div class="bms-container">
      <div class="columns m-t-1">
        <div class="column is-4">
          <img class="banner__img-bms"
               src="@/assets/img/bms/brastfeeding-logo.png"
               alt="BMS logo">
        </div>
        <div class="column is-2 center-img">
          <img class="banner__img-unicef"
               src="@/assets/img/bms/unicef.svg"
               alt="UNICEF logo">
        </div>
        <div class="column is-6 center-img has-text-left-tablet p-l-1">
          <img class="banner__img-eca"
               src="@/assets/img/bms/eca.svg"
               alt="UNICEF logo">
        </div>
      </div>
      <router-link
        to=""
        class="banner__btn content-inline-box">
        <img class="banner__img-eca p-0"
             src="@/assets/img/bms/group-5.svg"
             alt="UNICEF logo">
        <span class="p-0">
          {{ $t('hero.button') }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Hero',
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      unicefLogo() {
        return require(this.getLanguage === 'ru' ?
          "@/assets/img/unicef-russian.png" : "@/assets/img/unicef-horizontal.png");
      },
      whoLogo() {
        return require("@/assets/img/who-logo.png");
      },
    },
  }
</script>

<style lang="scss" scoped>

.banner {
  /*background-image: url(../assets/img/bms/bg-header.png);*/
  background-image: linear-gradient(to bottom, #fe207c, #f8ded1 60%);
  padding: 80px 0 90px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  .bms-container {
    text-align: center;
    position: relative;
  }

  &__btn {
    display: flex;
    width: 180px;
    background-color: #fe207c;
    color: white;
    font-size: 0.9em;
    position: absolute;
    top: 10px;
    right: 50px;
    padding: 0.5em;
    align-items: center;
    @media (max-width: 769px) {
      position: inherit;
      top: inherit;
      right: inherit;
      margin: 0 auto;
    }
  }

  &__img {

    vertical-align: middle;

    &-bms {
      width: 26vh;
      min-width: 200px;
    }

    &-unicef {
      width: 25vh;
    }

    &-ecta {
      width: 25vh;
    }

  }
}
@media (min-width: 769px) {
  .center-img {
    display: flex;
    align-items: center;
  }
}
</style>
