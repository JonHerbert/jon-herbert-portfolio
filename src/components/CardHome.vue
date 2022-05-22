<template>
  <div
    class="flex flex-column col-12 md:col-6 xl:col-4 surface-card p-4 border-round border-bg text-left"
  >
    <slot name="card-content"></slot>
  </div>
</template>

<script>
export default {
  name: "CardHome",
  props: ["title", "url", "image", "text"],
  setup() {
    let publicPath = process.env.BASE_URL;
    return {
      publicPath,
    };
  },
};
</script>

<style scoped>
.border-bg {
  border: 5px solid var(--surface-d);
}
</style>
