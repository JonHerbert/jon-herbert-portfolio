<template>
  <div
    :style="
      gradientBg
        ? `background: ${panelColor}`
        : `background-color: ${panelColor}`
    "
  >
    <div :class="fatInner ? 'panel-inner' : 'panel-inner50'">
      <slot name="title"></slot>
      <slot name="content"></slot>
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
    gradientBg: {
      type: Boolean,
      value: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
