<template>
<div class="from-inline">
	<h3>HOTEL 110</h3>
	<hr><hr>
	<h4>Sign In</h4>
	<div class="form-group">
		<input
			type="text"
			placeholder="email"
			class="form-control"
			v-model="email"
		/>
		<input
			type="password"
			placeholder="password"
			class="form-control"
			v-model="password"
		>
		<hr>
		<button class="btn btn-primary" @click="signIn">Sign In</button>
		<button onclick="window.location.href='/Home'">Cancel</button>
		<hr>
	</div>
	<br>
	<p>{{error.message}}</p>
	<br>
	<router-link to="/signup">Not a user? Sign up</router-link>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
	data(){
		return{
			email: '',
			password: '',
			error:{
				message:''
			}
		}
	},
	methods:{
		signIn(){
			firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
		}
	}
}
</script>