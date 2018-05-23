// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//import router from './router';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ionicons.min.css';

Vue.use(VueResource);
Vue.config.productionTip = false;

//Vue.http.options.root = 'http://jsonplaceholder.typicode.com';
Vue.http.options.root = 'http://yii-study/en/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  template: '<appl-tmpl/>',
  components: {
      'appl-tmpl': App 
  }
})
