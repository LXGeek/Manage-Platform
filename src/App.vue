<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css';
html, body {
  width: 100%;
  height: 100%;
  position: relative;
}
#app {
  height: 100%;
}
</style>
