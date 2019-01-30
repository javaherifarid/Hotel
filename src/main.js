import Vue from 'vue'
import Vuefire from 'vuefire'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'
import 'vue2-dropzone/dist/vue2Dropzone.css'


Vue.use(Vuefire)
Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
// import Upload from './components/Upload.vue'


const router = new VueRouter({
	mode: 'history',
	routes:[
	{ path: '/dashboard', component: Dashboard },
	{ path: '/signin', component: Signin },
	{ path: '/signup', component: Signup },
	{ path: '/home', component: Home },
	{ path: '/about', component: About },
	// { path: '/upload', component: Upload }
	]
})

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch('signIn', user)
		router.push('/dashboard')
	} else {
		router.replace('/Home')
	}
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})