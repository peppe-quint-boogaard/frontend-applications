<template>
  <header>
    <!-- <h1>{{ msg }}</h1>
    <span></span> -->
    <HeadingTitle title="Kind veilig thuis" />
  </header>
</template>

<script>
import HeadingTitle from './../components/HeadingTitle.vue'

export default {
  name: 'Header',
  components: {
    HeadingTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background-color: #0095FA;
  border-bottom: 3px solid #3E4044;
  padding: 1em 3em;
  color: #F5F9FF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  grid-column: 1 / 5;
}
h1 {
  margin: 0;
  color: #F5F9FF;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
