import Vue from 'vue'

Vue.component('example-component', require('./components/App.vue').default);

const app = new Vue({
  el: '#app'
});
