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
    this.showSettings = true
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
