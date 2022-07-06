<template>
  <div class="home">
    <main>
      <article>
        <section v-for="(header, index) in headers" :key="header">
          <FullPanel :title="header" :panel-color="panelColor">
            <template #title>
              <h2 class="text-6xl font-bold mb-4 title">{{ header }}</h2>
              <h3>
                Below are some of the websites I have built over the last 4
                years.
              </h3>
            </template>
            <template #content>
              <div class="portContent mt-4" v-if="index == 0">
                <a class="anchor" :name="header" :id="index"></a>
                <Card
                  v-for="item in portfolioData.portfolio"
                  v-motion
                  :initial="{
                    opacity: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: '100',
                      delay: 200,
                    },
                  }"
                  :visible="{
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: '100',
                      delay: 200,
                    },
                  }"
                  :enter="{
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: '100',
                      delay: 200,
                    },
                  }"
                  :title="item.title"
                  :image="item.img"
                  :url="item.url"
                  :text="item.text"
                  :key="item.title"
                >
                </Card>

                https://www.orchard-daynursery.co.uk/
                https://www.matthewwinchester.com/
                https://www.evansandknight.com/ http://www.angliataxis.net/
                http://www.kartcomponents.com/ https://www.sallydunham.co.uk/
                http://www.farquharsonduffysculpture.com
                http://www.immunopsychiatry.com/ https://www.tgnh.co.uk/
                https://www.malci.co.uk/ https://www.sustaingroup.co.uk/
                http://www.portcullis-construction.co.uk/
                https://www.cspfoodservicesltd.co.uk/
                http://www.polarisactuaries.com/ https://www.atamis.co.uk/
                https://www.michael-henbury.uk/ http://www.skoona.com/
                https://www.handinhandgroup.com/
                https://www.internationalteachersolutions.com/
              </div>
              <div class="portContent" v-else-if="index == 1">
                <a class="anchor" :name="header" :id="index"></a>
                <p>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Cras ultricies ligula sed magna dictum
                  porta. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Pellentesque
                  in ipsum id orci porta dapibus.
                </p>

                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Pellentesque
                  in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Cras ultricies
                  ligula sed magna dictum porta. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus.
                </p>

                <p>
                  Curabitur aliquet quam id dui posuere blandit. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus. Cras
                  ultricies ligula sed magna dictum porta. Nulla quis lorem ut
                  libero malesuada feugiat. Proin eget tortor risus. Sed
                  porttitor lectus nibh.
                </p>

                <p>
                  Pellentesque in ipsum id orci porta dapibus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Pellentesque
                  in ipsum id orci porta dapibus.
                </p>
                <p>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Cras ultricies ligula sed magna dictum
                  porta. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Pellentesque
                  in ipsum id orci porta dapibus.
                </p>

                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Pellentesque
                  in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Cras ultricies
                  ligula sed magna dictum porta. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus.
                </p>

                <p>
                  Curabitur aliquet quam id dui posuere blandit. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus. Cras
                  ultricies ligula sed magna dictum porta. Nulla quis lorem ut
                  libero malesuada feugiat. Proin eget tortor risus. Sed
                  porttitor lectus nibh.
                </p>

                <p>
                  Pellentesque in ipsum id orci porta dapibus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Pellentesque
                  in ipsum id orci porta dapibus.
                </p>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur aliquet quam id dui posuere blandit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                  sapien massa, convallis a pellentesque nec, egestas non nisi.
                  Cras ultricies ligula sed magna dictum porta.
                </p>

                <p>
                  Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                  orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia Curae; Donec velit
                  neque, auctor sit amet aliquam vel, ullamcorper sit amet
                  ligula. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>

                <p>
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula. Curabitur aliquet quam id dui
                  posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt.
                </p>

                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Quisque velit nisi, pretium ut lacinia in, elementum
                  id enim. Nulla porttitor accumsan tincidunt. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Nulla
                  porttitor accumsan tincidunt.
                </p>
              </div>
              <div class="portContent" v-else-if="index == 2">
                <a class="anchor" :name="header" :id="index"></a>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur aliquet quam id dui posuere blandit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                  sapien massa, convallis a pellentesque nec, egestas non nisi.
                  Cras ultricies ligula sed magna dictum porta.
                </p>

                <p>
                  Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                  orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia Curae; Donec velit
                  neque, auctor sit amet aliquam vel, ullamcorper sit amet
                  ligula. Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>

                <p>
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula. Curabitur aliquet quam id dui
                  posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt.
                </p>

                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Quisque velit nisi, pretium ut lacinia in, elementum
                  id enim. Nulla porttitor accumsan tincidunt. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Nulla
                  porttitor accumsan tincidunt.
                </p>
              </div>
            </template>
          </FullPanel>
        </section>
      </article>
    </main>

    <section>
      <Footer />
    </section>
  </div>
  <Sidebar
    class="sidebar"
    v-model:visible="visibleRight"
    :baseZIndex="10000"
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
  <Button
    class="sidebar-btn"
    icon="pi pi-arrow-left"
    @click="visibleRight = !visibleRight"
  />
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
