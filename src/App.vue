<template>
  <div id="app">
    <header>
      <span>Harvest Check-In</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'

export default {
  name: 'app'
}
</script>

<style scoped>
body {
  margin: 0;
}
</style>
