<template>
  <div id="app" class="container">
    <h1> APP </h1>
    <hr/>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from './components/postlist.vue'

export default {
  name: 'app',
  components: {
    'post-list': PostList
  }
}
</script>

<style>

</style>
