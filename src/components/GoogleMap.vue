<template>
    <div class="map__container">
        <svg @click="goBack" class="back__button" viewBox="4085 152 98.5 126">
            <defs>
                <svg:style>
                    .a { fill: #2b244d; } .b { fill: rgba(0, 0, 0, 0); } .b, .c { stroke: #fff; stroke-width: 2px; } .c { fill: none; } .d {
                    fill: #fff; font-size: 15px; font-family: SegoeUI, Segoe UI; letter-spacing: 0.4em; }
                </svg:style>
            </defs>
            <g transform="translate(3980)">
                <circle class="a" cx="39" cy="39" r="39" transform="translate(105 152)" />
                <line class="b" x1="80" transform="translate(123.5 190.5)" />
                <line class="b" y1="26" x2="26" transform="translate(123.5 164.5)" />
                <line class="c" x1="26" y1="27" transform="translate(123.5 190.5)" />
                <text class="d" transform="translate(117 274)">
                    <tspan x="0" y="0">BACK</tspan>
                </text>
            </g>
        </svg>
        <div class="map__header">
            <h2 :class="{'map__header-text-dark': darkMode}" class="map__header-text">Search a city</h2>
            <label>
                <gmap-autocomplete @place_changed="setPlace" />
                <button :disabled="buttonActive" @click="addMarker">Add city</button>
            </label>
        </div>
        <gmap-map :center="center" :zoom="12" style="width: 60vw; height: 70vh; margin: 15px auto">
            <gmap-marker :key="index" v-for="(marker, index) in markers" :position="marker.position" @click="center = marker.position"
            />
        </gmap-map>
    </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {
        lat: 45.508,
        lng: -73.587
      },
      markers: [],
      places: [],
      currentPlace: null,
      cityName: ""
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
    buttonActive() {
        if (!this.currentPlace) {
            return true
        } else {
            return false
        }
    }
  },
  methods: {
    goBack() {
        this.$router.push("/");
    },
    setPlace(place) {
      this.currentPlace = place;
        const marker = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        this.markers.push({
          position: marker
        });
        this.places.push(place);
        this.center = marker;
        this.cityName = place.name;
    },
    addMarker() {
      this.$store.commit("updateCityList", this.cityName);
      this.currentPlace = null
      this.$router.push("/");
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  mounted() {
    this.geolocate();
  }
};
</script>

<style scoped>
.map__container {
  animation: fadein 0.8s ease-in-out 0ms 1;
  background: linear-gradient(#fc7db8, #495cfc);
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.background-gradient__circle {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
  height: 120%;
}

.back__button {
  position: absolute;
  top: 2rem;
  left: 2.25rem;
  width: 5rem;
  cursor: pointer;
  z-index: 3;
}

.map__header {
  margin: 0 auto;
}

.map__header-text {
  text-align: center;
}

.map__header-text-dark {
  text-align: center;
  color: white;
}
</style>