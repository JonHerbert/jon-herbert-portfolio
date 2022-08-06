<template>
  <div
    class="text-800 col-12 px-6 py-8 flex flex-column align-items-center"
    :style="{ backgroundColor: panelColor }"
  >
    <div :class="fatInner ? 'panel-inner' : 'panel-inner50'">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="icons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    content: String,
    panelColor: String,
    fatInner: {
      type: Boolean,
      value: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>

</style>
