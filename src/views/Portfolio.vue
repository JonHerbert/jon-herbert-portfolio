<template>
  <main class="home">
    <article>
      <section v-for="(header, index) in headers" :key="header">
        <FullPanel
          :title="header"
          :fat-inner="true"
          :panel-color="panelColor"
          :gradient-bg="false"
        >
          <template #title>
            <h2 class="text-6xl font-bold mb-4 mt-0 pt-6 title">
              {{ header }}
            </h2>
            <h3 v-if="index == 0">
              Below are some of the websites I have built over the last 4 years.
            </h3>
            <h3 v-else-if="index == 1">
              Below are some of the game ideas and prototypes I have been
              working on. More details can be found in my blog for some of
              these.
            </h3>
            <h3 v-else-if="index == 2">
              Below are some of the unfinished project ideas I have been working
              on.
            </h3>
          </template>
          <template #content>
            <div v-if="index == 0" class="portContent mt-4">
              <a :id="index" class="anchor" :name="header" />
              <Card
                v-for="item in portfolioData.webportfolio"
                :key="item.title"
                :title="item.title"
                :image="item.img"
                :url="item.url"
                :text="item.text"
              />
            </div>
            <div v-else-if="index == 1" class="portContent">
              <a :id="index" class="anchor" :name="header" />
              <Card
                v-for="item in portfolioData.gameportfolio"
                :key="item.title"
                :title="item.title"
                :image="item.img"
                :url="item.url"
                :text="item.text"
              />
            </div>
            <div v-else-if="index == 2" class="portContent">
              <a :id="index" class="anchor" :name="header" />
              <Card
                v-for="item in portfolioData.projectportfolio"
                :key="item.title"
                :title="item.title"
                :image="item.img"
                :url="item.url"
                :text="item.text"
              />
            </div>
          </template>
        </FullPanel>
      </section>
    </article>

    <Sidebar
      v-model:visible="visibleRight"
      class="sidebar"
      :base-z-index="10000"
      :dismissable="true"
      position="right"
    >
      <div class="text-left">
        <a
          v-for="(header, index) in headers"
          :key="header"
          :href="`#${index}`"
          :class="{ active: index == currentSection }"
        >
          {{ header }}
        </a>
      </div>
    </Sidebar>
    <footer>
      <Footer />
    </footer>
    <Button
      class="sidebar-btn"
      icon="pi pi-arrow-left"
      @click="visibleRight = !visibleRight"
    />
  </main>
</template>

<script setup>
import FullPanel from "@/components/FullPanel";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import portfolioData from "@/assets/json/portfolio.json";
import { ref, onMounted } from "vue";

const headers = ["Website Portfolio", "Game Portfolio", "Project Portfolio"];
const panelColor = "var(--surface-d)";
const currentSection = ref("");
const visibleRight = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute("id");
        }
      });
    },
    {
      rootMargin: "0px 0px -90% 0px",
    },
  );
  document.querySelectorAll("article > section .anchor").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>
.sidebar-btn {
  position: fixed;
  top: 100px;
  right: 0;
}
.p-sidebar-content {
  padding-top: 2em;
}
.p-sidebar-content div {
  position: sticky;
  top: 20px;
}
.p-sidebar-content > div > a {
  display: block;
  color: var(--primary);
  text-decoration: none;
  border-left: 1px solid transparent;
  font-size: 1.2rem;
  padding: 0.25em 1em;
}
.p-sidebar-content > div > a.active {
  font-weight: bold;
  font-style: italic;
  border-left: 1px solid var(--surface-a);
}
.p-sidebar .p-sidebar-header .p-sidebar-close:focus,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus .p-link:focus,
.p-menubar .p-menubar-button:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.portContent {
  position: relative;
  display: inline-grid;
  gap: 3.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.anchor {
  position: absolute;
  top: -170px;
}
.external-link {
  text-decoration: none;
  color: #1c2127;
  background: #5eead4;
  border: 1px solid #5eead4;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  text-align: center;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  align-self: start;
}
.portfolio-img {
  width: 100%;
  border: 2px solid #fff;
}
</style>
