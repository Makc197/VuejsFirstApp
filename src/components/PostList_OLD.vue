<template>
  <div class="posts panel panel-default">
    <div class="panel-heading"><h1>Posts list</h1></div>
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
  data: function(){
    return {
        posts: [
            {id: 1, title: 'aaaaaaaaaa'},
            {id: 2, title: 'bbbbbbbbbb'}, 
            {id: 3, title: 'cccccccccc'}
        ]
    };
  },
  methods:{
        savePost: function() {

            this.resource.save(this.post)

        },

        getSinglePost: function() {

            this.resource.get({ id: 1 }).then(function(response) {

                this.post = response.data

            })

        },

        getAllPosts: function() {

        const resource = this.$resource('posts')

        var options = {
                params: {
                        _start: 10,
                        _limit: 5
                },
                headers: {
                        'Content-Type': 'application/json'
                }
        }

        resource.get().then(function(response) {

                this.posts = response.data

        }, function(error) {
                // ошибка
        })

    }
  }
}
</script>

<style>

</style>
