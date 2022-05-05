<template>
  <Menubar :model="items" class="menu surface-section">
    <template #item="{ item }">
      <router-link
        :to="item.to"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <Button
          type="button"
          class="p-button p-button-text p-button-text mr-2 p-ripple"
          :href="href"
          @click="navigate"
          :class="{
            'active-link': isActive,
            'active-link-exact': isExactActive,
          }"
          :icon="item.icon"
          :label="item.label"
        />
      </router-link>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';
import { ref } from 'vue';

export default {
  components: {
    Menubar
  },
  setup() {
		const items = ref([
			{
        label: "Home",
        to: "/",
        icon: 'pi pi-fw pi-home' 
      },
      {
        label: "About",
        to: "/about",
        icon: 'pi pi-fw pi-at'
      },
      {
        label: "Portfolio",
        to: "/portfolio",
        icon: 'pi pi-fw pi-th-large'
      },
      {
        label: "Blog",
        to: "/blog",
        icon: 'pi pi-fw pi-book'
      }
    ]);
  	return { items }
  }
}

</script>

<style lang="scss" scoped>
.menu {
  border-radius: 0;
}
</style>