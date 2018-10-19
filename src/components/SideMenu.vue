<template>
  <nav>
    <SideMenuButton />
  </nav>
</template>

<script>
import SideMenuButton from './../components/SideMenuButton.vue'
export default {
  name: "SideMenu",
  components: {
    SideMenuButton
  }
}
</script>

<style lang="css">
  nav {
    height: 100%;
    padding-top: 3em;
    width: 100%
  }
</style>
