<template>
  <div class="navbar__wrapper">
    <nav class="navbar bms-container"
         role="navigation"
         aria-label="dropdown navigation">
      <div class="navbar-brand">
        <a href="/"
           title="Baby Feeding Code Square">
          <img class="navbar-item navbar__logo"
               src="@/assets/img/bms/brastfeeding-logo.png"
               alt="Baby Feeding Code Square logo">
        </a>

        <a class="navbar-item"
           href="/"
           title="BBaby Feeding Code Square">
          <h1 class="navbar__title"> Baby Feeding Code Square </h1>
        </a>

        <div class="navbar-burger" :class="{ 'is-active': modalActive }">
          <div class="navbar-item">
            <LanguageDropdown />
            <a @click="modalActive=!modalActive"
               class="navbar-item"
               role="button"
               aria-label="menu"
               aria-expanded="false">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>


      <div class="navbar-menu"
           :class="{ 'is-active': modalActive }">
        <div class="navbar-end">
          <router-link v-for="item in items"
                       :key="item.id"
                       :to="item.to"
                       :title="item.title"
                       class="navbar-item animatable">
            {{ item.title }}
          </router-link>

          <LanguageDropdown v-if="!modalActive"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageDropdown from '@/components/LanguageDropdown';

export default {
    name: 'Navbar',
    components: {
      LanguageDropdown,
    },
    data() {
      return {
        modalActive: false,
      }
    },
    computed: {
      items() {
        return [
          {
            id: "home",
            title: this.$t('navbar.home'),
            to: `index#home`,
          },
          {
            id: "webchat",
            title: this.$t('navbar.bot'),
            to: `index#webchat`,
          },
          {
            id: "map",
            title: this.$t('navbar.map'),
            to: { name: 'map' },
          },
          {
            id: "videos",
            title: this.$t('navbar.videos'),
            to: `index#videos`,
          },
          {
            id: "support",
            title: this.$t('navbar.support'),
            to: `support#support`,
          },
        ];
      },
    },
}
</script>

<style lang="scss" scoped>

.navbar-brand {
  align-items: center;
}

.modal-item {
  display: block;
  margin: 0.75rem;
}

.animatable {
  transition: all .1s;
}

.animatable:hover {
  font-weight: bold;
  transform: scale(1.1);
}

.navbar {
  margin: 0 auto;
  background-color: transparent;

  &__icon {
    font-size: 25px;
  }

  &-item {
    &:focus {
      background-color: inherit;
      color: white;
    }
    &.router-link-active {
      font-weight: bold;
    }
  }

  &-item, /deep/ .dropdown-trigger {
    font-family: "Open Sans", sans-serif;
    font-size: 1em;
    color: white;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    display: flex;
    align-content: center;
  }

  &-item:hover, &-burger:hover, /deep/ .dropdown-trigger:hover {
    background-color: transparent;
    color: white;
  }

  &-burger {
    height: inherit;
    color: white;
    width: inherit;
    > .navbar-item {
      padding-left: 0;
    }
  }

  &__wrapper {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 29;
    top: 0;
    background-color: #047afb;
  }

  &__title {
    color: white;
    text-decoration: none;
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
      font-size: 0.9em;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }

  &__logo {
    max-height: 50px;
    padding: 2px;
    border-style: none;
  }
}

.navbar-menu.is-active {
  .navbar-item {
    color: #2D2926;
  }

  .animatable:hover {
    transform: scale(1);
  }
}
</style>
