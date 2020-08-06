<template>
  <div id="app">
    <Chat :is-open.sync="isOpen" />
    <Navbar/>
    <div class="content-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Chat from './components/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat,
    Navbar,
    Footer,
  },
  data() {
    return {
      isOpen: false,
    };
  },
}
</script>

<style lang="scss">
@import "assets/css/variables";
@import "assets/css/common";
@import '~@mdi/font/css/materialdesignicons.css';
@import '~@mdi/font/css/materialdesignicons.min.css';
@import "~bulma/bulma";

html {
  scroll-behavior: smooth;
  background-repeat: no-repeat;
}
body.opened.mobile {
  #home, #how, #about, #learn-more {
    display: none;
  }
}
body {
  /*padding-top: 80px;*/
}
button {
  cursor: pointer;
}

.group-message .message {
  background-color: inherit;
}
.conversation-container .message .response {
  height: inherit !important;
}

.navbar__wrapper, .content-container {
  > * {

  }

}
</style>
