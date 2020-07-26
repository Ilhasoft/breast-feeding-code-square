<template>
  <div class="banner">
    <div class="bms-container">
      <img class="banner__img-bms"
           src="@/assets/img/bms/brastfeeding-logo.png"
           alt="BMS logo">

      <div class="columns m-t-1">
        <div class="column is-6 has-text-right-tablet">
          <img class="banner__img-unicef"
               src="@/assets/img/bms/unicef.svg"
               alt="UNICEF logo">
        </div>
        <div class="column is-6 has-text-left-tablet">
          <img class="banner__img-eca"
               src="@/assets/img/bms/eca.svg"
               alt="UNICEF logo">
        </div>
      </div>
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

  background-image: linear-gradient(to bottom, #28a7df, #47c9ef 60%);
  padding: 80px 0 140px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  .bms-container {
    text-align: center;
  }

  &__img {

    vertical-align: middle;

    &-bms {
      width: 26vh;
      min-width: 200px;
    }

    &-unicef {
      width: 15vh;
    }

    &-ecta {
      width: 25vh;
    }

    @media (max-width: 350px) {
      min-width: inherit;
    }
  }
}

</style>
