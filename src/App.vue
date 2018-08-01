<template>
  <div class="root__container">
    <Header></Header>
    <main class="main__container">
      <div class="main-container__bg" :class="{'main-container__bg-dark': darkMode}"></div>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  /* height: 100vh;
  width: 100vw; */
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.root__container {
  /* width: 100vw; */
  /* height: 100vh; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.5fr auto;
  position: relative;
}

.main__container {
  height: 100%;
}

.main-container__bg {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  background: white;
  transition: opacity 300ms linear;
}

.main-container__bg-dark {
  opacity: 1;
  background: linear-gradient(to bottom, #b290ff, #2e1d65);
  transition: opacity 300ms linear;
}
</style>
