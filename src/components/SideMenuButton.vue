<template>
  <div class="nav-buttons">
    <button v-bind:key="item.id" v-for="item in items" @click="activeButton(item.id)">{{ item.labeltext }}</button>
  </div>
</template>

<script>
import { serverBus } from './../main.js'

export default {
  name: 'SideMenuButton',
  components: {
    items: ''
  },
  data () {
    return {
      items: [
        { labeltext: "Algemeen", id: 0 },
        { labeltext: "Ouders", id: 1 },
        { labeltext: "Onderwijs", id: 2 },
        { labeltext: "Huisvesting", id: 3 },
        { labeltext: "Werk & Opleiding", id: 4 },
        { labeltext: "Justitie", id: 5 }
      ]
    }
  },
  methods: {
    activeButton: function(item) {
      console.log(item)
      serverBus.$emit('countNumber', item);
    }
  }
}
</script>

<style lang="css">
  button {
    font-size: 12px;
    letter-spacing: 1px;
    width: 100%;
    font-weight: bolder;
    background:none;
    border: none;
    border-bottom: 3px solid #3E4044;
    color: #3E4044;
    height: 50px;
    text-transform: uppercase;
    outline: none;
}

button:first-child {
  border-top: 3px solid #3E4044;
}

button:hover {
  cursor: pointer;
}

button:active {
  outline: none;
}

button.active {
   background-color: #EB6B2A;
   color: #F5F9FF;
}
</style>
