<template>
  <div class="">
    <h1>{{ rating }}</h1>
    <p v-if='rating < "2"'>Het risico op een zware maatregel is laag</p>
    <p v-else-if='rating < "5"'>Het risico op een zware maatregel is middelmatig</p>
    <p v-else>Het risico op een zware maatregel is hoog</p>
  </div>
</template>

<script>
export default {
  data () {
    var q1 = 0.9
    var q2 = 0.1111123
    var q3 = 0.1434324
    var q4 = 0.015391
    var num = q1 + q2 + q3 + q4
    ''
    return {
       rating: Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + num ) ) ) * 100 ).toFixed( 2 ) ) + '%',
    }
  }
}



</script>

<style lang="css">
div {
  text-align: left;
}
</style>
