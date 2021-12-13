<template>
  <Indecision />
  <!--<Counter :start="10" title="Entraron" />
  //<Counter :start="15"/>-->
</template>

<script>
//import Counter from './components/Counter'
import Indecision from "./components/Indecision";
export default {
  name: 'App',
  components: {
  //  Counter,
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
