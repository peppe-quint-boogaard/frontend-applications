<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "HeadingTitle",
  props: {
    title: String
  }
}
</script>

<style lang="css">
  h2 {
    font-size: 21px;
    letter-spacing: 1px;
    /* text-transform: lowercase; */
  }
</style>
