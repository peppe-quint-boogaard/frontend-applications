<template>
  <main>
    <Selectoption />
    <Traject />
  </main>
</template>

<script>
import Selectoption from './../components/Selectoption.vue'
import Traject from './../components/Traject.vue'

export default {
  name: 'Main',
  components: {
    Selectoption,
    Traject
  }
}
</script>

<style lang="css">
  main {
    background-color: #F5F9FF;
    grid-column: 2 / 5;
    grid-row: 2 / 3;
    padding: 3em;
  }

  main > div:first-child {
    width: 50%;
    float: left;
  }
</style>
