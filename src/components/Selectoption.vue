<template>
  <div class="">
    <ul>
      <li v-bind:key="question.question" v-for="question in questions[this.item]">
        {{ question.question }}
        <i class="material-icons">keyboard_arrow_down</i>
        <select @change="valueBus(options.value)">
          <option selected="true" disabled>Kies een optie</option>
          <option v-bind:key="options.value" v-for="options in question.options" >{{ options.label }}</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
import questions from './../Questions.js'
import options from './../Questions.js'
import {serverBus} from './../main.js'

export default {
  name: 'Selectoption',
  data () {
    return {
      selected: '',
      questions,
      options,
      item: 0
    }
  },
  methods: {
    valueBus: function(value) {
      console.log(value);
    }
  },
  created () {
    serverBus.$on('countNumber', (item) => {
      this.item = item;
    });
  }
}
</script>

<style lang="css">
li {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width:100%;
  position: relative;
  margin-bottom: 1em;
}

select {
  -webkit-appearance: none;
  background: transparent;
  border: 2px solid #3E4044;
  border-radius: 0;
  color: #3E4044;
  font-size: 12px;
  font-weight: bold;
  height: 50px;
  padding: 1em;
  opacity: .5;
  outline: none;
}

select:hover {
  cursor: pointer;
}

li > i {
  /* z-index: 100; */
  position: absolute;
  top: 50px;
  right: 10px;
  opacity: .5;
}

</style>
