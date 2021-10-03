<template lang="pug">
  .widget-settings
    p WidgetSettings
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'WidgetSettings',
})
export default class WidgetSettings extends Vue {}
</script>

<style scoped lang="scss"></style>
