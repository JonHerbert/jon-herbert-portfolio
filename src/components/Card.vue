<template>
  <div class="flex flex-column surface-card p-4 border-round text-left card">
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
.card {
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  transition: transform 1s;
}
.card:hover {
  transform: scale(1.1) !important;
}
</style>
