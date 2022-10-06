<template>
  <Header />
  <TodoList />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    TodoList,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
