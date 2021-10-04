<template lang="pug">
  .widget-settings
    p {{locationsArray}}
    .widget-settings__head
      p.widget-settings__title Settings
      .widget-settings__close-btn(@click='hideSettings')
    .widget-settings__location-list(ref='locationList')
      .widget-settings__location-item(v-for='location in locationsArray' :key='location' draggable="true")
        .widget-settings__content
          .widget-settings__drag-icon
          p.widget-settings__value {{location}}
        .widget-settings__remove-btn(@click='removeLocation(location)')
    .widget-settings__footer.footer
      p.footer__title Add Location: {{inputValue}}
      .footer__form
        input.footer__input(type='text' v-model='inputValue')
        button.footer__add-btn(@click='addNewLocation') +
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import dragAndDrop from '../../helpers/dragAndDrop';

@Component({
  name: 'WidgetSettings',
})
export default class WidgetSettings extends Vue {
  mounted() {
    dragAndDrop(
      'widget-settings__location-list',
      'widget-settings__location-item'
    );
  }

  private showSettings = true;
  private inputValue = '';

  private get locationsArray(): Object {
    return this.$store.getters['weather/locationsData'];
  }

  private addNewLocation(): void {
    this.$store.commit('weather/pushNewLocation', this.inputValue);
    this.inputValue = '';
    this.update();
  }

  private removeLocation(location: String): void {
    this.$store.commit('weather/removeLocation', location);
    this.update();
  }

  @Emit()
  private update(): void {}

  @Emit()
  private hideSettings(): void {
    this.showSettings = false;
  }
}
</script>

<style scoped lang="scss">
.widget-settings {
}

.widget-settings__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.widget-settings__title {
}

.widget-settings__close-btn {
  background-image: url('../../assets/icons/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.widget-settings__location-list {
  margin-top: 15px;
}

.widget-settings__location-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 5px;
  margin: 10px 0;
  cursor: move;
}

.widget-settings__content {
  display: flex;
  align-items: center;
}

.widget-settings__drag-icon {
  background-image: url('../../assets/icons/burger.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

.widget-settings__value {
}

.widget-settings__remove-btn {
  background-image: url('../../assets/icons/basket.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.widget-settings__footer.footer {
  margin-top: 35px;
}

.footer__title {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
}

.footer__form {
  display: flex;
  align-items: center;
}

.footer__input {
  width: 100%;
  margin-right: 15px;
  height: 25px;
}

.footer__add-btn {
  font-size: 30px;
  border-radius: 50%;
  padding: 2px 10px;
  background: white;
  cursor: pointer;
}

.selected {
  opacity: 0.6;
}
</style>
