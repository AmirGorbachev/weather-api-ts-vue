<template lang="pug">
  .weather-widget
    WidgetFront(v-if="!showSettings" :open-settings='openSettings')
    WidgetSettings(v-else)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WidgetFront from './WidgetFront.vue';
import WidgetSettings from './WidgetSettings.vue';

@Component({
  name: 'WeatherWidget',
  components: {
    WidgetFront,
    WidgetSettings,
  },
})
export default class WeatherWidget extends Vue {
  mounted() {
    this.$store.dispatch('weather/loadData');
  }

  private showSettings: Boolean = false;

  openSettings() {
    this.showSettings = true;
  }
}
</script>

<style scoped lang="scss">
.weather-widget {
  width: 400px;
  background: #cfd6fa;
  padding: 10px;
}
</style>
