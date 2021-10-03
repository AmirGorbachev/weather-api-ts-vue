<template lang="pug">
  .widget-front
    .widget-front__head
      p.widget-front__location London, UK
      .widget-front__settings-icon vfvf
    .widget-front__content
      .widget-front__temperature.temperature
        .temperature__icon
        span.temperature__value 7 C
      p.widget-front__description Feels like -3 C. Broken clouds. Light breeze
      .widget-front__data.widget-front__data_icons
      .widget-front__data.widget-front__data_descriptions
        .widget-front__data-item
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'WidgetFront',
})
export default class WidgetFront extends Vue {
  mounted() {
    this.$store.dispatch('weather/loadData');
  }
}
</script>

<style scoped lang="scss">
.widget-front {
}

.widget-front__head {
}

.widget-front__location {
}

.widget-front__settings-icon {
  background-image: url('../../assets/icons/settings.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
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
}

.widget-front__data {
  &_icons {
  }

  &_descriptions {
  }
}

.widget-front__data-item {
}
</style>
