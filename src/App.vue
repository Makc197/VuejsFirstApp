<template>
  <div id="app" class="container">
    <h1> APP </h1>
    <hr/>
    <post-list></post-list>
    <post-list2></post-list2>
  </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostList2 from './components/PostList2.vue'

export default {
  name: 'app',
  components: {
    'post-list': PostList,
    'post-list2': PostList2
  }
}
</script>

<style>

</style>
