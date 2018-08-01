<template>
    <footer class="main__footer">
        <small :class="{'copyright__text-dark': darkMode}" class="copyright__text">Copyright © 2018 Ozan</small>
  </footer>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
};
</script>


<style scoped>
.main__footer {
  background: transparent;
  /* position: absolute; */
  bottom: 1rem;
  left: 1.5rem;
  z-index: 100;
}

.copyright__text {
  letter-spacing: 0.1rem;
  color: black;
}

.copyright__text-dark {
  letter-spacing: 0.1rem;
  color: white;
}

@media only screen and (max-width: 300px) {
  .slide-menu {
    width: 100%;
  }
}
</style>
