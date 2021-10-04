<template lang="pug">
  .widget-settings
    p Settings
    .widget-settings__settings-icon(@click='hideSettings')
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
  name: 'WidgetSettings',
})
export default class WidgetSettings extends Vue {
  showSettings = true;

  @Emit()
  private hideSettings(): void {
    this.showSettings = false;
  }
}
</script>

<style scoped lang="scss">
.widget-settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.widget-settings__settings-icon {
  background-image: url('../../assets/icons/close.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
