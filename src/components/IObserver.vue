<template>
  <div :ref="sentinalName" />
</template>

<script>
export default {
  name: "IObserver",
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    };
  },
  watch: {
    isIntersectingElement: function (value) {
      this.$emit("on-intersection-element", value);
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalName];

    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true;
      } else {
        this.isIntersectingElement = false;
      }
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
};
</script>
