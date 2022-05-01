<template>
  <div
    class="grid grid-nogutter text-800"
    :style="{ backgroundColor: panelColor }"
  >
    <div
      class="col-12 px-6 py-8 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1 title">{{ title }}</span>
        <div
          class="mt-0 mb-4 text-500 text-1xl line-height-2"
          v-html="paragraph"
        ></div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {title: String, subtitle: String, paragraph: String, panelColor: String},
  setup(props) {
    return {
    }
  },
}
</script>

<style>
</style>