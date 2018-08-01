import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import moment from "moment";

Vue.use(Vuex);

const API_KEY = "d4987eda04d97b85246b7403cecb8eeb";

export default new Vuex.Store({
  state: {
    darkMode: false,
    cities: ["jakarta"],
    cityDetail: {},
    cityWeatherList: []
  },
  mutations: {
    changeMode(state) {
      state.darkMode = !state.darkMode;
    },
    updateCityList(state, city) {
      const updated = [...state.cities];
      updated.push(city);
      state.cities = updated;
    },
    updateCityWeatherList(state, citiesDetail) {
      state.cityWeatherList = citiesDetail;
    },
    updateCityWeatherDetail(state, newCityWeatherDetail) {
      const updated = {
        ...state.cityDetail,
        ...newCityWeatherDetail
      };
      state.cityDetail = updated;
    },
    updateCityForecastDetail(state, newCityForecastDetail) {
      const updated = {
        ...state.cityDetail,
        ...newCityForecastDetail
      };
      state.cityDetail = updated;
    }
  },
  actions: {
    getCityWeatherList({ commit, state }) {
      const citiesDetail = [];
      for (let city of state.cities) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
          )
          .then(response => {
            const data = response.data;
            citiesDetail.push(data);
          });
      }
      commit("updateCityWeatherList", citiesDetail);
    },
    getCityWeatherDetail({ commit }, city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
        )
        .then(response => {
          const data = response.data;
          commit("updateCityWeatherDetail", data);
        });
    },
    getCityForecastDetail({ commit }, city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`
        )
        .then(response => {
          const data = response.data;
          const list = [];
          const today = moment().format("ddd");
          let updated = {};
          for (let i = 0; i < data.list.length - 1; i++) {
            let day = moment.unix(data.list[i].dt).format("ddd");
            let dayAfter = moment.unix(data.list[i + 1].dt).format("ddd");
            if (day !== dayAfter && day !== today && list.length <= 5) {
              updated = {
                ...data.list[i],
                day
              };
              list.push(updated);
            }
          }
          const updatedData = {
            ...data,
            list
          };
          commit("updateCityForecastDetail", updatedData);
        });
    }
  }
});
