<template>
  <main class="home">
    <article>
      <section>
        <section class="loading" v-if="loading.value">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
        </section>
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </section>
      <section>
        <FullPanel :title="post.title">
          <template #title>
            <h1 class="text-4xl font-bold mb-4 title">{{ post.title }}</h1>
          </template>
          <template #content>
            <div
              v-if="post"
              class="content mt-0 mb-4 text-500 line-height-2 text-left"
            >
              <img
                v-if="post.image"
                :src="imageUrlFor(post.image).width(480)"
              />

              <SanityBlocks :blocks="blocks" />
            </div>
          </template>
        </FullPanel>
      </section>
    </article>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "@/client";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "@/components/Footer";
import FullPanel from "@/components/FullPanel";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

let post = ref([]);
let blocks = ref([]);
let loading = ref(true);
let error = ref(null);

const imageUrlFor = (source) => {
  return imageBuilder.image(source);
};

onMounted(() => {
  const fetchData = () => {
    loading = true;
    sanity.fetch(query, { slug: useRoute().params.slug }).then(
      (postArticle) => {
        loading = false;
        post.value = postArticle;
        blocks.value = postArticle.body;
      },
      (err) => {
        error.value = err;
      },
    );
  };
  fetchData();
});
</script>

<style scoped></style>
