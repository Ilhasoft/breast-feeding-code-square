<template>
  <div
    class="what"
  >
    <text-section id="what"
                  class="home__section">
      <h2 slot="title">
        {{ $t('what.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('what.text_1') }}
        </p>
        <p>
          {{ $t('what.text_2') }}
        </p>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '../components/TextSection';

export default {
  name: 'what',
  components: {
    TextSection,
  },
}
</script>

<style lang="scss">
.what {
  /deep/ .section__title {
    color: #c6422f;
  }
}
</style>
