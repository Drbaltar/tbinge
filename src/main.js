import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import VueYouTubeEmbed from 'vue-youtube-embed'
import db from './datastore'

Vue.prototype.$db = db
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  }
}).$mount('#app')
