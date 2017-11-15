<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="newmsg">
    <button @click="changeMsg">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'test',

  data () {
    return {
      msg: 'message',
      newmsg: 'new'
    }
  },

  methods: {
    changeMsg () {
      this.msg = this.newmsg
    }
  }
}
</script>

<style>

</style>
