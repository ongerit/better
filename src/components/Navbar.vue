<template>
  <nav class="nav">
    <h1>{{ msg }}</h1>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Awesomecarsite.com'
    }
  }
}
</script>

<style lang="scss">

$pale-teal : #76bcc2;
$white : #fff;

h1{
	color:$white;
	float: left;
}

nav{
  width: 100%;
  height: 64px;
  background:$pale-teal;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  padding:0  16px;
}


</style>
