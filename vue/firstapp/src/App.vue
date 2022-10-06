<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Hello Carzso"/> -->
  <!-- <ComponentOne /> -->
  <!-- <ComponentTwo /> -->
  <!-- <ComponentThree /> -->
  <ComponentFour />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ComponentOne from './components/ComponentOne.vue'
// import ComponentTwo from './components/ComponentTwo.vue'
// import ComponentThree from './components/ComponentThree.vue'
import ComponentFour from './components/ComponentFour.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ComponentOne,
    // ComponentTwo,
    // ComponentThree,
    ComponentFour
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
