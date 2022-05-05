<template>
  <div
    class="text-800 col-12 px-6 py-8 flex flex-column align-items-center"
    :style="{ backgroundColor: panelColor }"
  >
    <span class="col-12 text-6xl font-bold mb-4 title">{{ title }}</span>
    <slot name="content"></slot>
    <slot name="icons"></slot>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {title: String, subtitle: String, content: String, panelColor: String},
  setup(props) {
    return {
    }
  },
}
</script>

<style>
</style>