<template>
  <div
    class="about"
  >
    <text-section id="about"
                  class="home__section">
      <h2 slot="title">
        {{ $t('features.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('features.text_1') }}
        </p>
        <p>
          {{ $t('features.text_2') }}
        </p>
      </div>
      <FeatureList :list="features"
                   slot="content"
                   class="home__section"/>
      <div slot="after-content">
        <p>
          {{ $t('features.text_3') }}
        </p>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '../components/TextSection';
import FeatureList from '../components/FeatureList';

export default {
  name: 'breastfeeding-in-covid19',
  components: {
    FeatureList,
    TextSection,
  },

  computed: {
    features() {
      return [
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_1_title'),
          text: this.$t( 'features.feature_1_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_2_title'),
          text: this.$t( 'features.feature_2_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_3_title'),
          text: this.$t( 'features.feature_3_text'),
        },
        {
          iconName: "mdi mdi-chevron-right",
          title: this.$t( 'features.feature_4_title'),
          text: this.$t( 'features.feature_4_text'),
        },
      ];
    },
  },
}
</script>

<style lang="scss">
.about {
  /deep/ .section__title {
    color: #fe207c;
  }
}
</style>
