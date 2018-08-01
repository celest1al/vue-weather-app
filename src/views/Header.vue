<template>
    <header :class="{'main__header-dark': darkMode}" class="main__header">
        <div class="left__section">
            <svg @click="showSideBar" class="hamburger__icon" id="Menu_Burger_Icon" data-name="Menu Burger Icon" viewBox="31.5 30 49.9 32">
                <defs>
                    <svg:style>
                        .hamburger__icon__fill {
                            fill: #594e78
                        }
                    </svg:style>
                </defs>
                <rect id="Rectangle_9" width="49.9" height="4" :class="{'hamburger__icon__fill-dark': darkMode}" class="hamburger__icon__fill"
                    data-name="Rectangle 9" rx="2" transform="translate(31.5 58)" />
                <rect id="Rectangle_10" width="49.9" height="4" :class="{'hamburger__icon__fill-dark': darkMode}" class="hamburger__icon__fill"
                    data-name="Rectangle 10" rx="2" transform="translate(31.5 44)" />
                <rect id="Rectangle_11" width="49.9" height="4" :class="{'hamburger__icon__fill-dark': darkMode}" class="hamburger__icon__fill"
                    data-name="Rectangle 11" rx="2" transform="translate(31.5 30)" />
            </svg>

            <svg @click="toHome" class="logo__icon" viewBox="150.3 22.2 213.7 42.8">
                <path fill="#00ff9b" d="M150.3 65V22.2L193 65z" data-name="Path 1" />
                <path fill="#003eff" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2" />
                <text :class="{'logo__text-dark': darkMode}" class="logo__text" fill="#432c85" font-family="SegoeUI-Semibold,Segoe UI" font-size="30"
                    font-weight="600" letter-spacing=".1em" transform="translate(237 56)">
                    <tspan x="0" y="0">Ozan</tspan>
                </text>
            </svg>
            <aside class="side-menu__container" :class="{'side-menu__container-active': showMenu}" @click="showSideBar">
                <nav class="slide-menu" :class="{'slide-menu-active': showMenu}" @click.prevent="$event.stopImmediatePropagation();">
                    <section class="menu-header">
                        <span class="greeting__text">Welcome Back</span>
                        <div class="profile-image__container">
                            <img src="https://avatars3.githubusercontent.com/u/5658460?s=460&v=4" alt="profile-image" class="profile__image">
                        </div>
                        <div class="account-details">
                            <span class="name__text">Fauzan Rindra</span>
                            <span class="email__text">fauzanrindra@gmail.com</span>
                        </div>
                    </section>
                    <section class="menu-body">

                    </section>
                    <section class="menu-footer">

                    </section>
                </nav>
            </aside>
        </div>

        <h3 class="date__text">{{ todayDate }}</h3>


        <div class="mode-toggle__container">
            <span class="mode-toggle__text">Light</span>

            <label class="toggle-button__container">
                <input type="checkbox" class="mode-toggle__input" v-model="darkMode" />
                <span :class="{'mode-toggle__bg-checked': darkMode}" class="mode-toggle__bg"></span>
                <span :class="{'mode-toggle__circle-checked': darkMode}" class="mode-toggle__circle"></span>
            </label>

            <span class="mode-toggle__text">Dark</span>
        </div>

    </header>
</template>

<script>
import moment from "moment";
export default {
  name: "pageHeader",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    showSideBar() {
      return (this.showMenu = !this.showMenu);
    },
    toHome() {
      this.$router.push("/");
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      },
      set() {
        this.$store.commit("changeMode");
      }
    },
    todayDate() {
      return moment().format("dddd, DD MMMM YYYY");
    }
  }
};
</script>

<style scoped>
/* side menu */
.side-menu__container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 25;
}

.side-menu__container-active {
  pointer-events: auto;
}

.side-menu__container::before {
  content: "";
  cursor: pointer;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0c1066;
  opacity: 0;
  transition: opacity 300ms linear;
  will-change: opacity;
}

.side-menu__container-active::before {
  opacity: 0.3;
}

.slide-menu {
  box-sizing: border-box;
  transform: translateX(-103%);
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 90%;
  max-width: 26rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 4fr 1fr;
  grid-gap: 1rem;
  transition: transform 300ms linear;
  will-change: transform;
}

.slide-menu-active {
  transform: none;
}

.menu-header {
  background: linear-gradient(to right, #00ff9b, #5f84fb);
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "greeting greeting" "image details";
  box-sizing: border-box;
  width: 100%;
  align-content: center;
  color: white;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);
}

.greeting__text {
  grid-area: greeting;
  font-size: 1.25rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-top: 1rem;
  justify-self: center;
  align-self: center;
}

.account-details {
  grid-area: details;
  display: flex;
  flex-flow: column;
  margin-left: 1rem;
  align-self: center;
}

.name__text {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.email__text {
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

.menu-body {
  display: grid;
  width: 100%;
}

.profile-image__container {
  grid-area: image;
  margin-right: 0.5rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  align-self: center;
  margin-left: 2rem;
}

.profile__image {
  max-width: 4rem;
}

/* header */
.main__header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  height: 4rem;
  margin: 0;
  align-items: center;
  transition: background-color 500ms linear;
  animation: fadein 1s ease-in-out 0ms 1;
}

.main__header-dark {
  background-color: #2b244d;
  color: white;
}

.toggle-button__container {
  cursor: pointer;
  position: relative;
  margin: 0 0.5rem;
}

.mode-toggle__input {
  -webkit-appearance: none;
  -moz-appearance: none;
}

.mode-toggle__bg {
  height: 1rem;
  width: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  transition: background-color 300ms linear;
}

.mode-toggle__circle {
  height: 1.3rem;
  width: 1.3rem;
  background-color: #2b244d;
  position: absolute;
  top: -0.2rem;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
  transition: left 300ms linear;
  left: 0.1rem;
}

.mode-toggle__circle-checked {
  background-color: white;
  left: 1.75rem;
}

.mode-toggle__bg-checked {
  background-color: #ff0070;
}

.mode-toggle__text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

/*Content*/

.left__section {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  max-width: 5rem;
}

.date__text {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: inline;
  margin: 0.5rem 0;
}

/*SVGs*/

.hamburger__icon {
  position: relative;
  z-index: 35;
  height: 1rem;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
}

.hamburger__icon__fill {
  fill: #594e78;
}

.logo__icon {
  height: 2rem;
  margin-left: 1rem;
  cursor: pointer;
}

.logo__text {
  fill: #2b244d;
}

.logo__text-dark {
  fill: #ffff;
}

.hamburger__icon__fill {
  fill: #2b244d;
}

.hamburger__icon__fill-dark {
  fill: #ffff;
}
</style>
