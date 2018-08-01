<template>
  <div class="card__container">
    <weather-card v-for="(city, index) of citiesWeather" :key="index" :cityDetail="city" />
    <add-city-card />
  </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard.vue";
import AddCityCard from "@/components/AddCityCard.vue";

export default {
  name: "home",
  components: {
    "weather-card": WeatherCard,
    "add-city-card": AddCityCard
  },
  computed: {
    citiesWeather() {
      return this.$store.state.cityWeatherList;
    }
  },
  created() {
    const cities = this.$store.state.cities;
    for (let city of cities) {
      this.$store.dispatch("getCityWeatherList", city);
    }
  }
};
</script>

<style scoped>
.card__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  align-items: center;
  justify-items: center;
  height: 100%;
}
</style>
