<template>
  <main class="home">
    <article>
      <section>
        <Hero
          :title="hero.title"
          :subtitle="hero.subtitle"
          :excerpt="hero.excerpt"
          :image="hero.image"
          :button1="hero.button1"
          :button2="hero.button2"
          class="main-hero"
        />
      </section>
      <section>
        <FullPanel
          :title="fed.title"
          :panel-color="fed.panelColor"
          :fat-inner="true"
          :gradient-bg="true"
        >
          <template #content>
            <div
              class="text-800 px-6 py-6 flex flex-row flex-wrap align-items-center"
            >
              <div
                class="col-12 md:col-7 mt-0 pl-0 text-500 text-1xl line-height-2 text-left"
              >
                <p>
                  Creating responsive and user friendly websites is a passion
                  for me. I have spent the last 7 years working hard to become a
                  better developer in this regard, starting as a self taught
                  programmer to becoming the Development Liason at Toolkit
                  Websites in the UK.
                </p>
                <p>
                  Each site in my varied portfolio was carefully created based
                  on modern design principles and the clients needs.
                </p>
                <p>
                  I currently use VueJS 3 for the website build, including a
                  number of plugins and extras that make it even better. For the
                  user created content I use Sanity.io which is a customizable
                  CMS that I will explain further below. The backend (or server
                  hosting) is more open as it is dependant on a few different
                  factors.
                </p>
              </div>
              <div class="col-12 md:col-5 hidden-xs-down">
                <img
                  :src="`${publicPath}img/images/devices-2.png`"
                  class="backgroundImg"
                  alt="devices"
                />
              </div>
              <div class="flex flex-wrap col-12 justify-content-center md:pt-4">
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/HTML5_logo_and_wordmark.svg"
                    alt=""
                    class="lang-icon p-2"
                  />
                </div>
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/CSS3_logo_and_wordmark.svg"
                    alt=""
                    class="lang-icon p-2"
                  />
                </div>
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/Javascript-shield.svg"
                    alt=""
                    class="lang-icon p-2"
                  />
                </div>
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/sass-1-logo-svg-vector.svg"
                    alt=""
                    class="lang-icon-2 p-2"
                  />
                </div>
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/Bootstrap_logo.svg"
                    alt=""
                    class="lang-icon-2 p-2"
                  />
                </div>
                <div class="flex align-items-center justify-content-center">
                  <img
                    src="@/assets/icons/Vue.js_Logo_2.svg"
                    alt=""
                    class="lang-icon-2 p-2"
                  />
                </div>
              </div>
            </div>
          </template>
        </FullPanel>
      </section>
      <section>
        <FullPanel
          :title="cms.title"
          :fat-inner="true"
          :panel-color="cms.panelColor"
          :gradient-bg="false"
        >
          <template #content>
            <div
              class="text-800 sm:px-6 pt-2 pb-6 flex flex-row flex-wrap align-items-center"
            >
              <div class="flex flex-wrap flex-column sm:flex-row">
                <Card>
                  <template #card-content>
                    <a href="https://www.sanity.io/"
                      ><img
                        src="@/assets/icons/sanity.svg"
                        style="width: 200px"
                        alt=""
                        class="lang-icon-3 p-2"
                      />
                    </a>
                    <div class="font-medium text-500 mb-3">
                      <p>
                        Sanity.io is a fantastic 'Headless' Content Management
                        System designed to be customized and extended entirely
                        by the developers using it. This means that as an
                        independent developer, I am able to create a system
                        designed directly for the client; adding or removing, as
                        needed, components that make updating or editing your
                        website as easy as possible.
                      </p>
                      <p>
                        'Headless' refers to the idea that the content added and
                        made by any of your designers, developers, content
                        creators or yourself can be presented in any way you
                        like. For example, if you had two online shops but
                        wanted one place where you could add, edit or remove
                        products, this would be possible as each store could
                        just retrieve the content it needed from your product
                        database. Another example would be if you had an old
                        site that needed to be updated to a more modern,
                        repsonsive architecture, your content would not need to
                        be changed to fit into the new system. Instead, you can
                        choose what your front-end would be (there are lots of
                        choices!) and simply serve your content from Sanity!
                      </p>
                      <p>
                        AS they put it: "We designed Sanity to free
                        organizations from the trappings of typical content
                        management systems (CMS) that force you to think of your
                        content in the context of web pages and content
                        hierarchies."
                      </p>
                    </div>
                  </template>
                </Card>
                <Card>
                  <template #card-content>
                    <a href="https://wordpress.org/"
                      ><img
                        src="@/assets/icons/WordPress_blue_logo.svg"
                        style="width: 200px"
                        alt=""
                        class="lang-icon-3 p-2"
                    /></a>
                    <div class="font-medium text-500 mb-3">
                      <p>
                        Wordpress is the most popular and used CMS in the world.
                        It's been around for around 20 years and has a lot of
                        support, plugins and features.
                      </p>
                      <p>
                        Whilst it is popular, I find it to be a bit overkill for
                        a lot of clients. It can also be a bit complicated to
                        use for some people.
                      </p>
                      <p>
                        Personally, I feel that Sanity is more modern and
                        extensible and comes without all of the cumbersome and
                        mostly uneeded modules that have built up over the years
                        with Wordpress, allowing developers and their clients an
                        easier workflow.
                      </p>
                    </div>
                  </template>
                </Card>
                <Card>
                  <template #card-content>
                    <a href="https://www.toolkitwebsites.co.uk/"
                      ><img
                        src="@/assets/icons/toolkit-webdesign.svg"
                        style="width: 300px"
                        alt=""
                        class="lang-icon-3 p-2"
                    /></a>
                    <div class="font-medium text-500 mb-3">
                      <p>
                        Toolkit Websites was founded around 20 years ago and has
                        a bespoke CMS called The Toolkit. Unlike Sanity and
                        Wordpress it is proprietary rather than open source.
                        Meaning, when you buy a website with Toolkit you get
                        phone support, hosting, domain, design and everything
                        that a small business needs in a single package.
                      </p>
                      <p>
                        Having worked for Toolkit for several years I can attest
                        to their work ethic and the pride they take in creating
                        and maintaining good websites. They continuously work on
                        upgrading The Toolkit to make sure it remains modern and
                        that all of their websites are easy to use for both the
                        client and the end-user. They have recently added the
                        ability to create e-commerce sites opening up a whole
                        new avenue for clients to capitalize on their web
                        traffic.
                      </p>
                      <p>
                        I may be biased as the majority of my portfolio comes
                        from working on Toolkit websites over the last few
                        years, but I would recommend them to any client that
                        would benefit from ongoing support and require medium to
                        large websites.
                      </p>
                    </div>
                  </template>
                </Card>
              </div>
            </div>
          </template>
        </FullPanel>
      </section>
      <section>
        <FullPanel
          :title="des.title"
          :panel-color="des.panelColor"
          :gradient-bg="false"
        >
          <template #content>
            <div
              class="text-800 px-4 py-4 flex flex-row flex-wrap align-items-center"
            >
              <div class="mt-0 text-500 text-1xl line-height-2">
                <p>
                  Whilst I am not a designer by profession and certainly
                  wouldn't categorize myself as one, I have years of experience
                  in both Adobe Photoshop & Illustrator, and Affinity Designer &
                  Photo for which I have edited photos, and created custom logos
                  and icons for many websites.
                </p>
                <p>
                  I am a firm believer in simple, minimialistic design that is
                  aimed at making the website as user friendly as possible.
                  After all, it is the users you are trying to reach and market
                  to that will be using the website. This is something often
                  missed by wanting the website to be flashy and exciting and is
                  sometimes considered more important than functionality.
                  Ideally, both would be followed - form and function - but if
                  function isn't working for your users, they will simply leave
                  your website.
                </p>
                <blockquote>
                  <i>
                    "...the most recent study, conducted by Forrester
                    Consulting, suggests that two seconds is the new threshold
                    in terms of an average online shopper's expectation for a
                    Web page to load, while 40 percent of shoppers will wait no
                    more than three seconds before abandoning a retail or travel
                    site."
                    <br />
                    - SmartBear
                  </i>
                </blockquote>
              </div>
            </div>
          </template>
        </FullPanel>
      </section>
      <section>
        <FullPanel
          :title="seo.title"
          :panel-color="seo.panelColor"
          :gradient-bg="false"
        >
          <template #content>
            <div
              class="text-800 px-4 py-4 flex flex-row flex-wrap align-items-center"
            >
              <div class="mt-0 text-500 text-1xl line-height-2">
                <p>
                  SEO (Search Engine Optimization) is an important area to
                  consider in today's internet. Whilst there are other search
                  engines besides Google (i.e. Bing, Yahoo etc.) nothing comes
                  close to them in terms of web traffic.
                </p>
                <p>
                  SEO is an entire field in it's own right that is overlooked by
                  smaller business and can often be even more expensive than the
                  cost of building and hosting a website. This is because it is
                  a highly specialized and ever-changing landscape. Google keeps
                  there algorithms secret but do let us know in generalities
                  what helps and what costs placement on a Google search result.
                  Aside from paid advertisements which are at the top of most
                  searches, research shows that the top 3 results count for over
                  90% of engagement.
                </p>
                <p>
                  Before completing a website, I QA the entire thing through
                  various SEO tools to see if there is anything that could
                  improve a websites score. Speed, responsiveness, image size
                  and many other aspects are all considered as a basic way to
                  get a very good score.
                </p>
              </div>
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

<script setup scoped>
import { ref } from "vue";
import Hero from "@/components/Hero";
import FullPanel from "@/components/FullPanel";
import Footer from "@/components/Footer";
import Card from "@/components/CardHome";

const publicPath = process.env.BASE_URL;

const hero = ref({
  title: "Jon Herbert",
  subtitle: "Web Developer",
  excerpt:
    "Expert Front-End Development <br/> Multiple CMS Experience <br/> SEO Optimization <br/> Design & Logos <br/> Project Management",
  image: "markus-spiske-1LLh8k2_YFk-unsplash.jpg",
  button1: "About",
  button2: "Portfolio",
});
const fed = ref({
  title: "Front End Development",
  panelColor:
    "linear-gradient(180deg, var(--surface-e) 81%, var(--surface-d) 19%);",
});
const cms = ref({
  title: "CMS Experience",
  panelColor: "var(--surface-d)",
});
const seo = ref({
  title: "SEO Optimization",
  panelColor: "var(--surface-d)",
});
const des = ref({
  title: "Design",
  panelColor: "var(--surface-a)",
});
</script>

<style scoped>
.main-hero {
  height: calc(100vh - 65px);
}
.lang-icon {
  height: 100px;
}
.lang-icon-2 {
  height: 80px;
}
.lang-icon-3 {
  filter: brightness(0) invert(1);
}
.fade {
  animation: fade 1s ease forwards;
}
.backgroundImg {
  width: 100%;
  object-fit: cover;
}
@keyframes fade {
  to {
    opacity: 0.25;
  }
}
@media (max-width: 575px) {
  .hidden-xs-down {
    display: none !important;
  }
}
</style>
