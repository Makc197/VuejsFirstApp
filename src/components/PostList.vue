<template>
  <div class="posts panel panel-default">
    <div class="panel-heading"><h1>Products</h1></div>
    <table class="table">
        <tr>
          <th>ID</th><th>Title</th> 
        </tr>
        <tr v-for="post in posts">
          <td>{{post.id}}</td><td>{{post.title}}</td> 
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  created: function() {
     this.getAllPosts();
  },
  data: function(){
    return {
        posts: []
    };
  },
  methods:{
        getAllPosts: function() {
        const resource = this.$resource('product')
        var options = {
            params: {
                _start: 10,
                _limit: 5
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };

        resource.get().then(
            function(response) {
                this.posts = response.data
            }, 
            function(error) {
            }
        );

    }
  }
}
</script>

<style>

</style>
