<template>
  <div class="home">
    <section>
      <Hero
        :title="hero.title"
        :subtitle="hero.subtitle"
        :excerpt="hero.excerpt"
        :image="hero.image"
        class="main-hero"
      />
    </section>
    <section>
      <FullPanel
        :title="fed.title"
        :paragraph="fed.paragraph"
        :panel-color="fed.panelColor"
      />
    </section>
    <section>
      <FullPanel
        :title="cms.title"
        :paragraph="cms.paragraph"
        :panel-color="cms.panelColor"
      />
    </section>
    <section>
      <FullPanel
        :title="seo.title"
        :paragraph="seo.paragraph"
        :panel-color="seo.panelColor"
      />
    </section>
    <section>
      <FullPanel
        :title="des.title"
        :paragraph="des.paragraph"
        :panel-color="des.panelColor"
      />
    </section>
    <section>
      <FullPanel
        :title="pro.title"
        :paragraph="pro.paragraph"
        :panel-color="pro.panelColor"
      />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import FullPanel from '@/components/FullPanel'

export default {
  name: "Home",
  components: {
    Hero, FullPanel
  },
  setup() {
    return { 
      hero: {
        title: 'Jon Herbert',
        subtitle: 'Web Developer',
        excerpt: 'Expert Front-End Development <br/> Multiple CMS Experience <br/> SEO Optimization <br/> Design & Logos <br/> Project Management',
        image: 'markus-spiske-1LLh8k2_YFk-unsplash.jpg'
      },
      fed: {
        title: 'Front End Development',
        paragraph: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>',
        panelColor: "var(--surface-a)"
      },
      cms: {
        title: 'CMS Experience',
        paragraph: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>',
        panelColor: "var(--surface-d)"
      },
      seo: {
        title: 'SEO Optimization',
        paragraph: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>',
        panelColor: "var(--surface-a)"
      },
      des: {
        title: 'Design',
        paragraph: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>',
        panelColor: "var(--surface-d)"
      },
      pro: {
        title: 'Project Management',
        paragraph: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.</p><p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>',
        panelColor: "var(--surface-a)"
      }
    }
  }
}
</script>

<style scoped>
.main-hero {
  min-height: calc(100vh - 65px);
}
</style>