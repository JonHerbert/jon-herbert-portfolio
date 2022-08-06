<template>
  <main class="home">
    <article>
      <section>
        <div class="loading" v-if="loading.value">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
        </div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </section>
      <section>
        <FullPanel :title="post.title">
          <template #title>
            <h1 class="text-5xl font-bold mb-4 title">{{ post.title }}</h1>
          </template>
          <template #content>
            <section
              v-if="post"
              class="grid content text-2xl mt-0 mb-4 text-500 line-height-3 text-left"
            >
              <img
                v-if="post.image"
                :src="imageUrlFor(post.image).width(480)"
              />

              <SanityBlocks :blocks="blocks" :serializers="serializers" />
            </section>
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
import { ref, onMounted, h } from "vue";

const imageBuilder = imageUrlBuilder(sanity);
const imageUrlFor = (source) => {
  return imageBuilder.image(source);
};
const serializers = {
  types: {
    image: (data) => {
      return h("figure", [
        h("img", {
          src: imageUrlFor(data).width(300).url(),
          alt: data.caption,
          class: data._key,
        }),
        h("figcaption", data.caption),
      ]);
    },
  },
};

let post = ref([]);
let blocks = ref([]);
let loading = ref(true);
let error = ref(null);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
  "bodyImage": body[_type == "image"].asset-> {"asset": {
    _id,
    url
  }},
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

<style>
.content figure {
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
}
.content figure figcaption {
  font-style: italic;
  font-size: 1rem;
}
</style>
