<template lang="pug">
  .widget-front
    .widget-front__settings-icon(@click='openSettings')
    .widget-front__location-item(v-for='weatherData in weatherDataArray' :key='weatherData.id')
      .widget-front__head
        //- pre weatherData: {{weatherData}}
        p.widget-front__location {{weatherData.name}}, {{weatherData.sys.country}}
      .widget-front__content
        .widget-front__temperature.temperature
          .temperature__icon
          p.temperature__value {{weatherData.main.temp}}&#176;C
        p.widget-front__description Feels like {{weatherData.main.feels_like}}&#176;C. {{weatherData.weather[0].description}}
        .widget-front__data.widget-front__data_icons
          .widget-front__data-item.data-item
            p.data-item__icon Wind:&nbsp;
            p.data-item__value {{weatherData.wind.speed}}m/s {{weatherData.wind.deg}}
          .widget-front__data-item.data-item
            p.data-item__icon Pressure:&nbsp;
            p.data-item__value {{weatherData.main.pressure}}hPa
        .widget-front__data.widget-front__data_descriptions
          .widget-front__data-item.data-item
            p.data-item__title Humidity:&nbsp;
            p.data-item__value {{weatherData.main.humidity}}%
          .widget-front__data-item.data-item
            p.data-item__title Visibility:&nbsp;
            p.data-item__value {{weatherData.visibility / 1000}} km
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'WidgetFront',
})
export default class WidgetFront extends Vue {
  private showSettings = false;

  private get weatherDataArray(): Object {
    return this.$store.getters['weather/weatherData'];
  }

  @Emit()
  private openSettings(): void {
    this.showSettings = true;
  }
}
</script>

<style scoped lang="scss">
.widget-front {
  font-size: 18px;
  position: relative;
}

.widget-front__settings-icon {
  background-image: url('../../assets/icons/settings.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  right: 0;
}

.widget-front__location-item {
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid black;

  &:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
    border-bottom: 1px solid transparent;
  }
}

.widget-front__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.widget-front__location {
}

.widget-front__content {
}

.widget-front__temperature.temperature {
}

.temperature__icon {
}

.temperature__value {
  font-size: 24px;
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
