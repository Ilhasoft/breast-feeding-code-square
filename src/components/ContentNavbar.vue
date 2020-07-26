<template>
  <div class="content-navbar">
    <div class="columns has-text-centered m-1 m-l-0 m-r-0">
      <router-link
         :to="{ name: 'what' }"
         class="column is-4 p-1"
      >
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-1.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('features.title') }}
          </span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'tips' }"
        class="column is-4 p-1">
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-2.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('tips.title') }}
          </span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'violation' }"
        class="column is-4 p-1">
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-3.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('violation.title') }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ContentNavbar',
}
</script>

<style lang="scss" scoped>
$color: #36ade1;

.content-navbar {
  .column {
    cursor: pointer;
  }
  .content-box {
    height: 100%;
    .subtitle {
      color: $color;
    }
  }

  .router-link-active {
    .content-box {
      background-color: $color;
      .subtitle {
        color: white;
      }
    }
  }

  @media (max-width: 769px) {
    .content-inline-box {
      margin-bottom: 1.5em;
    }
  }

  @media (min-width: 769px) {
    .content-inline-box {
      position: relative;
      top: -70px;
    }
    .subtitle {
      position: relative;
      top: -30px;
    }
  }

}
</style>
