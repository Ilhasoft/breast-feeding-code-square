<template>
  <div class="home">
    <Hero />
    <ContentNavbar class="bms-container content-navbar" />
    <div id="home" class="bms-container">
      <div class="home__content p-1 m-1 m-b-2 m-t-0">
        <router-view />
      </div>
    </div>
    <div v-if="isOpenVideos"
         id="video"
         class="home__section__wrapper"
         aria-labelledby="carouselheading">
      <text-section class="home__section">
        <h2 id="carouselheading" slot="title" class="bms-container">
          {{ $t('videos.title') }}
        </h2>
        <InfoVideoList
          slot="content"
          :videos="videos"
        />
      </text-section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from '../components/Hero.vue';
import TextSection from '../components/TextSection.vue';
import InfoVideoList from '../components/InfoVideoList.vue';
import ContentNavbar from '../components/ContentNavbar.vue';
import { isMobile } from '../util/browser';

export default {
  name: 'Home',
  components: {
    ContentNavbar,
    Hero,
    TextSection,
    InfoVideoList,
  },
  data() {
    return {
      isOpenVideos: true,
      videos: [],
    };
  },
  methods: {
    initVideos() {
      this.videos = [
        {
          url: this.$t('videos.video_1_url'),
          title: this.$t('videos.video_1_title'),
        },
        {
          url: this.$t('videos.video_2_url'),
          title: this.$t('videos.video_2_title'),
        },
        {
          url: this.$t('videos.video_3_url'),
          title: this.$t('videos.video_3_title'),
        },
        {
          url: this.$t('videos.video_4_url'),
          title: this.$t('videos.video_4_title'),
        },
      ];
    },
    resetVideos() {
      this.isOpenVideos = false;
      setTimeout(() => this.isOpenVideos = true, 0);
    }
  },
  watch: {
      // eslint-disable-next-line
      '$i18n.locale'() {
        this.resetVideos();
        this.initVideos();
      },
      isOpen() {
        document.body.classList.toggle('opened')
        if (isMobile()) {
          document.body.classList.toggle('mobile')
        }
        this.resetVideos();
      },
  },
  computed: {
    ...mapGetters([
      'getLanguage',
    ]),
  },
  mounted() {
    this.initVideos();
    this.resetVideos();
  }
}
</script>

<style lang="scss" scoped>

.content-navbar {
  position: relative;
  top: -70px;
}

</style>
