<template lang="html">
  <aside class="">
    <h2>Berekende risico:</h2>
    <Rating />
    <SideMenu />
  </aside>
</template>

<script>
import Rating from './../components/Rating.vue'
import SideMenu from './../components/SideMenu.vue'
export default {
  name: "Sidebar",
  components: {
    Rating,
    SideMenu
  }
}
</script>

<style lang="css">
h2 {
  text-align: left;
}
  aside {
    background-color: #F5F9FF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 3em;
  }
</style>
