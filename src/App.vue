<template>
  <TopMenu />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";

export default {
  components: {
    TopMenu,
  },
};
</script>

<style lang="scss">
html {
  font-size: 16px;
}

body {
  margin: 0;
  background-color: var(--surface-section);
}

#app {
  font-family: "Nunito", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

main.home {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: calc(100vh - 65px);
}

h1,
h2,
h3,
h4,
h5,
h6,
.title {
  font-family: "Expletus Sans", cursive;
}

p {
  font-family: "Nunito", monospace;
  color: var(--text-color);
}

.p-button {
  border-radius: 0 !important;
}

.panel-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.panel-inner50 {
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.object-fit img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}
</style>
