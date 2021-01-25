<template>
  <div class="content-navbar">
    <div class="columns has-text-centered-tablet m-1 m-l-0 m-r-0">
      <router-link
        :to="{ name: 'what' }"
        class="what column is-one-quarter p-1">
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-1.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('what.title') }}
          </span>
        </div>
      </router-link>
<!--      <router-link-->
<!--        :to="{ name: 'tips' }"-->
<!--        class="tips column is-one-quarter p-1">-->
<!--        <div class="content-box p-1">-->
<!--          <div>-->
<!--            <div class="content-inline-box p-1">-->
<!--              <img src="../assets/img/bms/group-2.svg" />-->
<!--            </div>-->
<!--          </div>-->
<!--          <span class="subtitle">-->
<!--            {{ $t('tips.title') }}-->
<!--          </span>-->
<!--        </div>-->
<!--      </router-link>-->
      <router-link
        :to="{ name: 'internationalCode' }"
        class="international-code column is-one-quarter p-1">
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-2.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('international-code.title') }}
          </span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'breastfeeding-in-covid19' }"
        class="breastfeeding-in-covid19 column is-one-quarter p-1"
      >
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-3.svg" />
            </div>
          </div>
          <span class="subtitle">
            {{ $t('features.title') }}
          </span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'violation' }"
        class="violation column is-one-quarter p-1">
        <div class="content-box p-1">
          <div>
            <div class="content-inline-box p-1">
              <img src="../assets/img/bms/group-4.svg" />
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
      .subtitle {
        color: white;
      }
    }
    &.international-code .content-box {
      background-color:  #53ec25;
    }
    &.violation .content-box {
      background-color:  #f9a028;
    }

    &.breastfeeding-in-covid19 .content-box {
      background-color:  #c6422f;
    }
    //
    //&.tips .content-box {
    //  background-color:  #f9a028;
    //}

    &.what .content-box {
      background-color:  #36ade1;
    }
  }

  @media (max-width: 769px) {
    .content-box {
      display: flex;
      align-items: center;
      .subtitle {
        font-size: 1em;
      }
      .content-inline-box {
        margin-right: 1em;
        img {
          width: 30px;
          max-width: 30px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .content-inline-box {
      position: relative;
      top: -60px;
    }
    .subtitle {
      position: relative;
      top: -20px;
    }
  }

}

.content-navbar .international-code .subtitle {
  color: #53ec25;
}

.content-navbar .violation .subtitle {
  color: #f9a028;
}

.content-navbar .breastfeeding-in-covid19 .subtitle {
  color: #c6422f;
}

.content-navbar .what .subtitle {
  color: #36ade1;
}

//.content-navbar .tips .subtitle {
//  color: #f9a028;
//}
</style>
