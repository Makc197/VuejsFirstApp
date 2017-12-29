<template>
  <div class="posts panel panel-default">
    <div class="panel-heading"><h1>Books</h1></div>
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

  data: function() {
    return {
        endpoint: 'book',
        posts: []
    };
  },

  methods:{

        getAllPosts: function() {

            var options = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            this.$http.get(this.endpoint, options).then(function(response) {

                //console.log(response.data)
                this.posts = response.data

            }, function(error) {
                console.log(error)
            })

        }
    },

    created: function() {
        this.getAllPosts()
    }
   
 }
</script>

<style>

</style>
