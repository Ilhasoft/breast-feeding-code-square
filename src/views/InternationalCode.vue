<template>
  <div
    class="international-code"
  >
    <text-section>
      <p slot="title">
        {{ $t('international-code.title') }}
      </p>
      <div slot="text">
        <div v-for="index in 5" :key="index">
          <strong>
            {{ $t(`international-code.section_${index}_title`) }}
          </strong>
          <p v-html="$t(`international-code.section_${index}_text`)">
          </p>
          <br>
        </div>
      </div>
    </text-section>
  </div>
</template>

<script>
import TextSection from '@/components/TextSection';

export default {
    name: 'InternationalCode',
    components: {
        TextSection,
    },
}
</script>

<style lang="scss">
.international-code {
  /deep/ .section__title {
    color: #53ec25;
  }
  ul {
    padding-left: 1.2em;
    list-style: inherit;
  }

}
</style>
