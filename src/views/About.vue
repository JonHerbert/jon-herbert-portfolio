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
        <FullPanel :title="about.title" :panel-color="about.panelColor">
          <template #content>
            <div class="cv mb-8 pt-8">
              <vue-pdf-embed :source="source1" />
            </div>
            <div
              class="text-800 pt-2 pb-6 flex flex-row flex-wrap align-items-center"
            >
              <div class="grid">
                <div class="col-12 md:col-4 mt-1 object-fit">
                  <img
                    :src="`${publicPath}img/images/walking-darcy-dog.png`"
                    style="width: 100%; object-position: center"
                    alt="walking darcy"
                  />
                </div>
                <div class="col-12 md:col-8 text-left line-height-2">
                  <p>
                    As a youngster I was obsessed by two things, computer games
                    and music. When the two combined, even better! I grew up
                    with a family of music lovers who instilled in me a passion
                    for a wide variety of genres and artists from Kate Bush to
                    Vaughn Williams to Jeff Buckley to Fleetwood Mac to Pink
                    Floyd to... I could go on... and frequently do... As a
                    pre-teen I added to this collection of weirdos with a bunch
                    of grunge, metal and electronica - started playing guitar
                    and from the age of 11 decided a musicians life was the only
                    way for me.
                  </p>
                  <p>
                    When I was 18 I left home to... 'start my career as a
                    musician' in Brighton attending the Brighton Institute for
                    Modern Music. After a few years of what felt like punishing
                    competition with other musicians, I realized that performing
                    was not something I wanted or needed to pursue. I loved
                    writing music and had lost that during my time there. It
                    occured to me that my passion didn't need to be my career
                    and that if I kept on pursuing it as I had been I would lose
                    the love of playing instruments - this was unacceptable to
                    me. To this day I still play many instruments and write
                    music, but it's on my own terms and for myself that I do
                    this; to express myself and to keep discovering joy through
                    this medium.
                  </p>
                  <p>
                    I'm interested in interesting things and keep aquiring new
                    hobbies and passions. A few years ago I started learning how
                    to build guitars after I found a love for woodworking, I
                    have loved Arsenal FC for my entire life and follow them
                    with both glee and despair, I love playing and making games
                    and learning about the intricacies and histories of computer
                    games with a strong belief in preserving them as an art
                    form, and I fundementally love coding as both a creative
                    outlet and a constant challenge.
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="col-12 md:col-4 md:flex-order-1 object-fit">
                  <img
                    :src="`${publicPath}img/images/darcy-sleeping.png`"
                    style="width: 100%; object-position: center"
                    alt="darcy sleeping"
                  />
                </div>
                <div
                  class="col-12 md:col-8 md:flex-order-0 text-left line-height-2"
                >
                  <p>
                    I have been a web developer for almost 8 years now. Mostly
                    self taught; learning by doing. I joined Toolkit Websites in
                    December 2017 as an apprentice after a year of teaching
                    myself code. I was 27 at the time so it was a bit of a leap
                    to start over again but I felt this was a great opportunity
                    get better at this new passion whilst also working in the
                    field earning a living. I was also aware that the
                    possibilities for growth both personally and financially in
                    the industry were great and I would be lucky to be doing
                    something I enjoyed. Having worked in the service industry
                    for years I was very happy about that prospect!
                  </p>
                  <p>
                    After a few years, hundred's of websites, thousands's and
                    thousands's of lines of code and after becoming Development
                    Liason at Toolkit, I was offered the chance to work on an
                    app designed by my boss and a few others called MIXO. This
                    would be an app aimed at DJ's replacing iTunes and
                    giving them the ability to swap which software they used.
                    It's a niche project, but has huge potential and plugs a gap
                    that millions of DJ's struggle with when gigging. If you
                    aren't aware, there are many different popular applications
                    for DJ'ing, however they are closed source/proprietry which
                    means they don't integrate with each other. This can be
                    difficult if you work with one software but need to gig with
                    another. <a href="https://www.mixo.dj/" target="_blank">Here's a link to MIXO's page</a> which has a lot more
                    information about what we are building and how to get
                    involved.
                  </p>
                  <p>
                    Currently, I am a Software Test Analyst at MIXO and I also
                    help the Toolkit devs from time to time should an issue
                    arise.
                  </p>
                </div>
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
import VuePdfEmbed from "vue-pdf-embed";

const publicPath = process.env.BASE_URL;

const source1 = ref("/docs/resume.pdf");
const hero = ref({
  title: "Hey! Nice to meet you!",
  subtitle: "My name's Jon, here's a bit about me.",
  excerpt: "",
  image: "markus-spiske-1LLh8k2_YFk-unsplash.jpg",
  button1: "Portfolio",
  button2: "Blog",
});
const about = ref({
  title: "Background",
  panelColor: "var(--surface-d)",
});
</script>
<style lang="scss">
.main-hero {
  height: calc(100vh - 65px);
}

</style>
