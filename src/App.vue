<template>
<div id="app">
	<header>
		<button @click="show = !show">
			<i class="ion-navicon"></i>
		</button>
	</header>

	<aside v-show="show" transition="slide">
    <ul>
        <li @click="activeComponent = 'post-list'" class="list-item-link"><h4>Products</h4> </li> 
        <li @click="activeComponent = 'post-list2'" class="list-item-link"><h4>Books</h4> </li>
    </ul>
	</aside>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-8">
      <h1> APP </h1>
      <hr/>
      <component :is="activeComponent"></component>
    </div>
  </div>
</div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostList2 from './components/PostList2.vue'

export default {
  name: 'app',
  data() {
  	return {
  		show: true,
      activeComponent: null,
  	}
  },
  components: {
    'post-list': PostList,
    'post-list2': PostList2
  }
}
</script>

<style scoped>

.list-item-link {
  display: block;
  cursor: pointer;
}

body{
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
    background-color: #f5f5f5;
}

header{
    width:100%;
    height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 80;
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.095);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
}

aside {
    background-color: #fff;
    width: 250px;
    position: fixed ;
    top: 55px;
    left: 0;
    bottom: 0px;
    z-index: 1;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

aside h2{
    font-weight: 300;
    color: #afafaf;
}

button {
    background: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    outline: none;
    color: #9f9f9f;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;
}
button:active {
    background-color: rgba(0,0,0,0.1);
}

.slide-transition {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
}

.slide-enter, .slide-leave {
    left: -100%; 
}

</style>
