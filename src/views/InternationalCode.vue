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
          <p>
            {{ $t(`international-code.section_${index}_text`) }}
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
    color: #36ade1;
  }
}
</style>
