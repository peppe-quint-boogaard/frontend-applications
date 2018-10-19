<template>
  <div class="float-right">
    <HeadingTitle title="Vervolgtraject" />
    <div class="">
      <h4>BEHANDELING</h4>
      <p>Groep (L)VB & Individueel (L)VB</p>
      <a href="#">Aanvragen</a>
    </div>
    <div class="">
      <h4>BEHANDELING</h4>
      <p>Groep (L)VB & Individueel (L)VB</p>
      <a href="#">Aanvragen</a>
    </div>
  </div>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue'
export default {
  name: 'Traject',
  components: {
    HeadingTitle
  }
}
</script>

<style lang="css">
  .float-right {
    width: 40%;
    float: right;
    /* background-color: red; */
    height: 100%;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }
</style>
