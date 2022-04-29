<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div
      class="
        col-12
        md:col-6
        p-6
        text-center
        md:text-left
        flex
        align-items-center
      "
    >
      <section>
        <span class="block text-6xl font-bold mb-1 title">{{ title }}</span>
        <div class="text-6xl text-primary font-bold mb-3 subtitle">
          {{ subtitle }}
        </div>
        <div>
          <p
            class="mt-0 mb-4 text-500 text-2xl line-height-3"
            v-html="excerpt"
          ></p>
        </div>

        <Button
          label="Learn More"
          type="button"
          class="mr-3 p-button-raised p-ripple"
        ></Button>
        <Button
          label="Live Demo"
          type="button"
          class="p-button-outlined p-ripple"
        ></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden object-fit">
      <img
        :src="require(`@/assets/images/${image}`)"
        alt="Image"
        class="md:ml-auto block"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: ['title', 'subtitle', 'excerpt', 'image'],
  setup(props) {
    let titlePosition = 0;
    let subtitlePosition = 0;
    const speed = 100;
    const title = [...props.title];
    const subtitle = [...props.subtitle];
    let animDone = false;

    const typewriter = () => {
      if(!animDone) {
        document.querySelector('.title').innerHTML = props.title.substring(0, titlePosition) + "<span class='blinker'>\u2590</span>";
        document.querySelector('.subtitle').innerHTML = "";

        if(titlePosition++ != title.length) {
         setTimeout(typewriter, speed);
        }
        else { 
          document.querySelector('.title').innerHTML = props.title.substring(0, titlePosition)
          animDone = true;
       }
      }

      if(animDone) {
        document.querySelector('.subtitle').innerHTML = props.subtitle.substring(0, subtitlePosition) + "<span class='blinker'>\u2590</span>";
        if(subtitlePosition++ != subtitle.length) {
          setTimeout(typewriter, speed);
        }
      }
    }

    onMounted(() => {
      typewriter();
    })

    return {
    }
  },
}
</script>

<style>
.subtitle {
  min-height: 60px;
}
.object-fit img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}
.blinker {
  animation: blinker 1s linear infinite;
  color: var(--primary-color);
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>