<template>
  <div id="app">
    <p>
      If the user has not given access to geolocation, then the default city is
      Moscow.
    </p>
    <p>Cities for the test: Moscow, London, Pekin, Paris</p>
    <div class="widget">
      <WeatherWidget />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WeatherWidget from './components/WeatherWidget/WeatherWidget.vue';

@Component({
  components: {
    WeatherWidget,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 60px;
}

.widget {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
