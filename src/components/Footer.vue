<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__info">
        {{ $t('extraInfo.text') }}

        <div class="bms-container">
          <div class="columns has-text-centered-tablet p-b-1">
            <div class="column has-text-left-tablet has-text-centered">
              <div class="m-t-1">
<!--                <img src="../assets/img/icons/local.svg" />-->
                <a :href="$t('footer.unicefHomeHref')" target="_blank">
                  {{ $t('footer.unicefHome') }}
                </a>
              </div>
              <div class="">
<!--                <img src="../assets/img/icons/phone.svg" />-->
                - <a :href="$t('footer.unicefWhatWeDoHref')" target="_blank">
                  {{ $t('footer.unicefWhatWeDo') }}
                </a>
              </div>
              <div class="">
<!--                <img src="../assets/img/icons/mail.svg" />-->
                - <a :href="$t('footer.unicefWhereWeWorkHref')" target="_blank">
                  {{ $t('footer.unicefWhereWeWork') }}
                </a>
              </div>
            </div>

            <div class="column has-text-right-tablet has-text-centered">
              <div class="">
                <a href="https://www.facebook.com/unicefeca" target="_blank">
                  <img class="m-1" src="../assets/img/icons/fb.svg" />
                </a>
                <a href="https://twitter.com/unicef_eca" target="_blank">
                  <img class="m-1" src="../assets/img/icons/twitter.svg" />
                </a>
                <a href="https://www.youtube.com/user/unicefceecis2009" target="_blank">
                  <img class="m-1" src="../assets/img/icons/youtube.svg" />
                </a>
              </div>
              <div>
                <a href=" https://www.unicef.org/eca/contact-us" target="_blank">
                  {{ $t('footer.contactUs') }}
                </a>
                |
                <router-link :to="'privacy'" :title="$t('footer.privacyPolicy')">
                  {{ $t('footer.privacyPolicy') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false" class="footer__info-images">
        <a href="https://www.unicef.org/eca/" title="UNICEF ECARO">
          <img class="footer__info-images__unicef" :src="unicefLogo" alt="UNICEF ECARO">
        </a>
        <a href="http://www.euro.who.int/en/home" title="WHO/Europe">
          <img class="footer__info-images__who" :src="whoLogo" alt="WHO/Europe">
        </a>
      </div>
      <div class="footer__links">
        <div class="bms-container">
          <a href="https://bothub.it/" :title="$t('footer.bothub')">
            {{ $t('footer.bothub') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Footer',
    computed: {
      ...mapGetters([
        'getLanguage',
      ]),
      unicefLogo() {
        return require(this.getLanguage !== 'ru' ?
          "@/assets/img/unicef-eu-asia.png" : "@/assets/img/unicef-russian-white.png");
      },
      whoLogo() {
        return require("@/assets/img/who-europe-white.png");
      },
    },
}
</script>

<style lang="scss" scoped>
$img-height: 9vh;
.footer {
  width: 100%;
  color: #47536e;
  font-size: 1em;
  background: white;
  font-family: "Open Sans", sans-serif;
  padding: 0;

  &__links {
    background-color: #f1f1f2;
    margin-bottom: 5.5vh;
    flex-wrap: wrap;
    column-gap: 1rem;
    justify-content: flex-start;
  }

  &__info-images {
    background-color: #047afb;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &__info {
    background-color: #047afb;

    color: white;
    a {
      color: white !important;
      text-decoration: underline;
    }
    //padding: 1vh 5vh;
    //text-align: center;
  }

  &__info-images {
    padding: 2vh 3vh 3vh;

    &__unicef {
      max-width: 100%;
      height: $img-height;
      margin-right: 3vh;
    }

    &__who {
      max-width: 100%;
      height: $img-height;
      margin-right: 3vh;
    }
  }

  //&__wrapper {
  //  margin: 0 auto;
  //  width: 100%;
  //  display: flex;
  //  column-gap: 50px;
  //  flex-wrap: wrap;
  //}

  a {
    color: #2089fb;
  }

  a:hover {
    color: #7b94c9;
  }
}
</style>
