<template lang="pug">
  .widget-front
    .widget-front__head
      //- pre weatherData: {{weatherData}}
      p.widget-front__location {{weatherData.name}}, {{weatherData.sys.country}}
      .widget-front__settings-icon(click='openSettings')
    .widget-front__content
      .widget-front__temperature.temperature
        .temperature__icon
        span.temperature__value {{weatherData.main.temp}}&#176;C
      p.widget-front__description Feels like {{weatherData.main.feels_like}}&#176;C. {{weatherData.weather[0].description}}
      .widget-front__data.widget-front__data_icons
        .widget-front__data-item.data-item
          .data-item__icon Wind:&nbsp;
          .data-item__value {{weatherData.wind.speed}}m/s {{weatherData.wind.deg}}
        .widget-front__data-item.data-item
          .data-item__icon Pressure:&nbsp;
          .data-item__value {{weatherData.main.pressure}}hPa
      .widget-front__data.widget-front__data_descriptions
        .widget-front__data-item.data-item
          .data-item__title Humidity:&nbsp;
          .data-item__value {{weatherData.main.humidity}}%
        .widget-front__data-item.data-item
          .data-item__title Visibility:&nbsp;
          .data-item__value {{weatherData.visibility / 1000}} km
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'WidgetFront',
})
export default class WidgetFront extends Vue {
  private get weatherData(): Object {
    const weatherData = this.$store.getters['weather/weatherData'];
    console.log(878);

    return weatherData.main ? weatherData : {};
  }

  @Emit()
  openSettings(): void {
    console.log(878);
    this.showSettings = true;
  }
}
</script>

<style scoped lang="scss">
.widget-front {
}

.widget-front__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.widget-front__location {
}

.widget-front__settings-icon {
  background-image: url('../../assets/icons/settings.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.widget-front__content {
}

.widget-front__temperature.temperature {
}

.temperature__icon {
}

.temperature__value {
}

.widget-front__description {
  margin-top: 10px;
  margin-bottom: 25px;
}

.widget-front__data {
  display: flex;
  justify-content: space-between;

  &_icons {
  }

  &_descriptions {
  }
}

.widget-front__data-item.data-item {
  text-align: left;
  width: 50%;
  display: flex;
  padding: 5px 0;
}

.data-item__icon {
}

.data-item__title {
}

.data-item__value {
}
</style>
