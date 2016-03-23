<template>
  <div id="app">
    <navbar></navbar>
    <cars></cars>
        
  </div>
</template>

<script>
import Cars from './components/Cars'
import Navbar from './components/Navbar'

export default {
  components: {
    Cars, Navbar
  }
}
</script>

<style lang="scss">

$bg-color : #E4F2F3;

html {
  height: 100%;
}

body {
  margin: 0;
  background-color: $bg-color;
    font-family: Helvetica, sans-serif;

}

#app {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  box-sizing: border-box;

}

</style>
