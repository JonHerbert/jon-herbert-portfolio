<template>
  <TopMenu />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue"

export default {
  components: {
    TopMenu
  }
}
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
  font-family: "Fira Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
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
  font-family: "Fira Mono", monospace;
  color: var(--text-color);
}

.p-button {
  border-radius: 0 !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
