import Vue from 'vue'
import Axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.prototype.$Fire = new Vue()
Vue.prototype.$Swal = Swal
Vue.prototype.$Toast = Toast
Vue.prototype.$Url = document.location.origin
Vue.prototype.$http = Axios
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '5px'
})

Vue.component('example-component', require('./components/App.vue').default);

const app = new Vue({
  el: '#app'
});
