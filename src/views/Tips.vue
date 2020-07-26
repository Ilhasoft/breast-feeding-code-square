<template>
  <div
    class="how"
  >
    <text-section id="how"
                  class="home__section">
      <h2 slot="title">
        {{ $t('tips.title') }}
      </h2>
      <div slot="text">
        <p>
          {{ $t('tips.tip_1') }}
          <br>
          <br>
          {{ $t('tips.tip_2') }}
          <br>
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_1') }}</strong> {{ $t('tips.tip_3.text_1') }}
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_2') }}</strong> {{ $t('tips.tip_3.text_2') }}
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_3') }}</strong> {{ $t('tips.tip_3.text_3') }}
        </p>
        <p>
          <strong>{{ $t('tips.tip_3.emphasis_4') }}</strong> {{ $t('tips.tip_3.text_4') }}
        </p>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '../components/TextSection';

export default {
  name: 'how',
  components: {
      TextSection,
  },
}
</script>

<style lang="scss">
</style>
