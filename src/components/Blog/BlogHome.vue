<template>
  <main class="home">
    <article class="posts">
      <section class="loading" v-if="loading.value">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </section>
      <section v-if="error" class="error">
        {{ error }}
      </section>
      <section class="container grid">
        <div v-for="post in posts" class="post-item col" :key="post._id">
          <router-link :to="`/blog/${post.slug.current}`">
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
          </router-link>
        </div>
      </section>
    </article>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import sanity from "@/client.js";
import Footer from "@/components/Footer";

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

let posts = ref([]);
let loading = ref(true);
let error = ref(null);

onMounted(() => {
  const fetchData = () => {
    loading = true;
    sanity.fetch(query).then(
      (blogPosts) => {
        loading = false;
        posts.value = blogPosts;
      },
      (err) => {
        error.value = err;
      },
    );
  };
  fetchData();
});
</script>

<style lang="scss" scoped>
.home h1 {
  text-align: center;
}
.container {
  margin: 0 auto;
  max-width: 42em;
  width: 100%;
}
.post-item {
  box-sizing: border-box;
  background-color: var(--surface-d);
  text-align: left;
  margin: 10px;
  position: relative;
  height: 200px;
}
.post-item a {
  color: white;
  text-decoration: none;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 5px 20px;
}
</style>
