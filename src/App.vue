<template>
  <div id="app">
    <Header msg="Kind veilig thuis"/>
    <Main />
    <Sidebar />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Main from './views/Main.vue'
import Sidebar from './views/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 15vh 1fr 1fr;
  grid-gap: 1em;
  height: 100%;
}

body {
  background-color: #F5F9FF;
  color: #3E4044;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
</style>
