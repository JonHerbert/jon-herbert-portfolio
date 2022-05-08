<template>
  <div
    class="
      flex-1
      justify-content-center
      surface-card
      p-4
      m-2
      shadow-2
      border-round
      text-left
    "
  >
    <slot name="card-content"></slot>
  </div>
</template>

<script>
export default {
  name: "Card", 
  props: { 
  },
  setup(props) {
  }
}
</script>

<style scoped>
</style>