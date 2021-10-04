<template lang="pug">
  .weather-widget
    WidgetFront(v-if="!showSettings" v-on:open-settings='openSettings')
    WidgetSettings(v-else v-on:hide-settings='hideSettings')
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

  private openSettings(): void {
    this.showSettings = true;
  }

  private hideSettings(): void {
    this.showSettings = false;
  }
}
</script>

<style scoped lang="scss">
.weather-widget {
  width: 400px;
  background: #cfd6fa;
  padding: 15px;
}
</style>
