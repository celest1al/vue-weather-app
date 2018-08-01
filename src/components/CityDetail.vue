<template>
    <div style="height: 100%">
        <div class="details-page__wrapper-dark">
            <svg class="background-gradient__circle" viewBox="4572 73 1328 1328">
                <defs>
                    <linearGradient id="ddd" x2="0" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#ff8b8b" />
                        <stop offset="1" stop-color="#6676ff" />
                    </linearGradient>
                </defs>
                <circle cx="664" cy="664" r="664" fill="url(#ddd)" transform="translate(4572 73)" />
            </svg>

            <svg class="back__button" @click="goBack" viewBox="4085 152 98.5 126">
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

            <section class="main-weather__card-dark">
                <section class="card-header__container-dark">
                    <svg viewBox="4302 163 1218 406">
                        <defs>
                            <svg:style>
                                .aa { opacity: 0.6; }
                            </svg:style>
                            <linearGradient id="aa" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color="#000075" />
                                <stop offset="1" stop-color="#ff8c8c" />
                            </linearGradient>
                        </defs>
                        <path class="aa" fill="url(#aa)" d="M20,0H1198a20,20,0,0,1,20,20V406a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z"
                            transform="translate(4302 163)" />
                    </svg>
                    <div class="header-content__wrapper">
                        <div class="today-weather__container">
                            <div class="temp-state__container">
                                <span class="temperature__text">{{ cityDetail.main ? Math.round(cityDetail.main.temp) : 0 }}°</span>
                                <span class="weather-state__text">{{ cityDetail.weather ? cityDetail.weather[0].main : "" }}</span>
                            </div>
                            <div class="hum-wind__container">
                                <div class="hum__container">
                                    <span class="hum__text">humidity</span>
                                    <span class="hum-value__text">{{ cityDetail.main? cityDetail.main.humidity : 0 }} %</span>
                                </div>

                                <div class="hum-wind__separator">&nbsp;</div>

                                <div class="wind__container">
                                    <span class="wind__text">wind</span>
                                    <span class="wind-value__text">{{ cityDetail.wind ? cityDetail.wind.speed : 0 }} K/M</span>
                                </div>
                            </div>
                        </div>
                        <div class="city-name__container">
                            <div class="city-name__underline">
                                <span class="city-name__text">{{ cityDetail.name || "" }}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <main class="body-content__wrapper">
                    <section class="twitter-feed__container">
                        <div class="twitter-feed__header">
                            <svg class="twitter__icon" viewBox="4332 625.812 30 24.375">
                                <defs>
                                    <svg:style>
                                        .twitter-icon-fill { fill: #03a9f4; }
                                    </svg:style>
                                </defs>
                                <path class="twitter-icon-fill" d="M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z"
                                    transform="translate(4332 577.812)" />
                            </svg>
                            <span class="twitter-feed__text">Twitter Feed</span>
                            <span class="twitter-feed-tag__text">#{{ cityDetail.name }}</span>
                        </div>
                        <div class="twitter-feed__body">
                            <!--TODO: retrieve tweets from twitter API-->
                        </div>
                    </section>

                    <section class="forecast__container">
                        <div v-for="(day, index) of cityDetail.list" :key="index" class="day-weather__container">
                            <span class="day-name__text">{{ day.day }}</span>
                            <svg class="forecast-condition__icon" v-if="day.weather[0].main === 'Clouds'" viewBox="2436.9 -843.1 275.5 274.1">
                                <g data-name="cloudy icon" transform="translate(84 790)">
                                    <circle cx="137" cy="137" r="137" fill="#fff" data-name="Ellipse 23" transform="translate(2354 -1633)" />
                                    <path fill="#ffde17" d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
                                        data-name="Subtraction 1" />
                                </g>
                            </svg>

                            <svg class="forecast-condition__icon" v-else-if="day.weather[0].main === 'Rain' || day.weather[0].main === 'Drizzle'" viewBox="3170 -843.1 163.5 242.7">
                                <g data-name="Rain Icon">
                                    <g data-name="Water Drops">
                                        <path fill="#0032cc" d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z" data-name="Path 7" />
                                        <path fill="#003eff" d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z" data-name="Path 3" />
                                    </g>
                                </g>
                            </svg>

                            <svg class="forecast-condition__icon" v-else-if="day.weather[0].main === 'Storm'" viewBox="3487.9 -810.7 291.2 200.3">
                                <g data-name="Strom icon" transform="translate(1959 -1260.7)">
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 14" rx="55.3" ry="51.7" transform="translate(1529 490.4)" />
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 15" rx="55.3" ry="51.7" transform="translate(1569.6 467.8)"
                                    />
                                    <circle cx="55.3" cy="55.3" r="55.3" class="cls-1" data-name="Ellipse 16" transform="translate(1618.9 476.8)" />
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 17" rx="55.3" ry="51.7" transform="translate(1631.8 450)" />
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 18" rx="55.3" ry="51.7" transform="translate(1687.1 477.5)"
                                    />
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 19" rx="55.3" ry="51.7" transform="translate(1709.6 507.3)"
                                    />
                                    <circle cx="55.3" cy="55.3" r="55.3" class="cls-1" data-name="Ellipse 20" transform="translate(1639.6 500.1)" />
                                    <ellipse cx="55.3" cy="51.7" class="cls-1" data-name="Ellipse 21" rx="55.3" ry="51.7" transform="translate(1569.6 507.3)"
                                    />
                                    <path fill="none" stroke="#fd0" stroke-width="18" d="M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2" data-name="Path 59"
                                    />
                                    <path fill="none" stroke="#fd0" stroke-width="15" d="M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2" data-name="Path 60" />
                                </g>
                            </svg>


                            <svg class="forecast-condition__icon" v-else-if="day.weather[0].main === 'Sunny' || day.weather[0].main === 'Clear'" viewBox="2050 -845 262 262">
                                <circle cx="131" cy="131" r="131" fill="#ffde17" data-name="Sun Icon" transform="translate(2050 -845)" />
                            </svg>

                            <span class="day-temp__text">{{ Math.round(day.main.temp) }}°</span>
                            <span class="day-state__text">{{ day.weather[0].main }}</span>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    cityDetail() {
      return this.$store.state.cityDetail;
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  },
  created() {
    const cityName = this.$route.params.cityName;
    this.$store.dispatch("getCityWeatherDetail", cityName);
    this.$store.dispatch("getCityForecastDetail", cityName);
  }
};
</script>

<style scoped>
.details-page__wrapper-dark {
  background: linear-gradient(#fc7db8, #495cfc);
  height: 100%;
  width: 100%;
  display: flex;
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

.main-weather__card-dark {
  background-color: white;
  height: 85%;
  width: 65%;
  border-radius: 1rem;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1.25fr;
  justify-items: center;
  animation: fadein 0.8s ease-in-out 0ms 1;
}

.card-header__container-dark {
  width: 100%;
  max-height: 20rem;
  position: relative;
  z-index: 1;
}

.back__button {
  position: absolute;
  top: 2rem;
  left: 2.25rem;
  width: 5rem;
  cursor: pointer;
  z-index: 3;
}

.city__illustration {
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  position: relative;
}

.header-content__wrapper {
  /* background-image: url(/assets/images/night.jpg); */
  position: absolute;
  z-index: 2;
  color: white;
  top: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
}

.temperature__text {
  font-size: 6rem;
  letter-spacing: 0.75rem;
}

.city-name__container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25%;
}

.city-name__underline {
  background: transparent;
  border-radius: 5px;
  height: 5px;
  box-shadow: 0 3rem 0 0 #ffffff;
}

.city-name__text {
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 1.75rem;
  padding-bottom: 2rem;
}

.today-weather__container {
  align-self: center;
  justify-self: center;
  display: grid;
  width: 100%;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;
}

.temp-state__container {
  display: flex;
  justify-content: center;
  flex-flow: column;
}

.weather-state__text {
  letter-spacing: 0.5rem;
  font-size: 1.15rem;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.hum-wind__container {
  display: flex;
  align-items: center;
  margin-left: -4rem;
}

.hum-wind__separator {
  margin: 0 2rem;
  width: 2px;
  height: 2.5rem;
  background-color: white;
}

.hum__text,
.wind__text {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.hum__container,
.wind__container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.body-content__wrapper {
  display: grid;
  grid-template-columns: 1fr 1.75fr;
  grid-template-rows: 1fr;
  justify-items: center;
  box-sizing: border-box;
  grid-column-gap: 1rem;
  width: 100%;
  padding: 2rem;
}

.forecast__container {
  display: flex;
  flex-flow: row;
  align-items: center;
  align-self: center;
  justify-self: center;
}

.twitter-feed__container {
  margin-top: 1rem;
  width: 100%;
}

.twitter-feed__text {
  color: #0c1066;
  font-size: 1.25rem;
}

.twitter__icon {
  width: 1.5rem;
}

.twitter-feed-tag__text {
  font-size: 0.85rem;
  color: #5f84fb;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.twitter-feed__header {
  display: grid;
  grid-template-rows: 2rem;
  grid-template-columns: 0.5fr 1.5fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
}

.day-weather__container {
  display: flex;
  flex-flow: column;
  margin: 2rem 1.5rem;
  justify-content: center;
  align-items: center;
}

.day-name__text {
  font-size: 1.5rem;
  color: #39437a;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.forecast-condition__icon {
  height: 4rem;
}

.day-temp__text {
  font-size: 1.85rem;
  color: #0c1066;
  letter-spacing: 0.25rem;
  margin: 0.75rem 0;
  text-align: center;
  padding-left: 0.35rem;
}

.day-state__text {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #2b244d;
}
</style>