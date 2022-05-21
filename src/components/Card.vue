<template>
  <div
    class="flex flex-column col-12 md:col-6 xl:col-4 surface-card p-4 border-round border-bg text-left"
  >
    <h3>{{ title }}</h3>
    <a :href="url"
      ><img
        :src="`${publicPath}img/images/${image}`"
        class="portfolio-img"
        alt=""
      />
    </a>
    <div class="font-medium text-500 mb-3">
      <p>{{ text }}</p>
    </div>
    <a
      class="p-button p-component p-button-raised p-ripple external-link"
      :href="url"
      target="_blank"
      >Visit</a
    >
    <slot name="card-content"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
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
