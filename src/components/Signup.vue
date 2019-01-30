<template>
<div class="from-inline">
	<h3>HOTEL 110</h3>
	<hr><hr>
	<h4>Sign Up</h4>
	<div class="form-group">
		<input
			type="text"
			placeholder="name"
			class="form-control"
			v-model="name"
		>
		sex:
		<input name="name" type="radio" value="Male">Male
		<br><input name="name" type="radio" value="Female"> Female
		
		<input
			type="text"
			placeholder="phonenumber"
			class="form-control"
			v-model="phonenumber"
		>
		<input
			type="text"
			placeholder="email"
			class="form-control"
			v-model="email"
		>
		<input
			type="password"
			placeholder="password"
			class="form-control"
			v-model="password"
		>
		<input
			type="password"
			placeholder="confirm"
			class="form-control"
			v-model="confirm"
		>
		<hr>
		<button class="btn btn-primary" @click="signUp">Sign Up</button>
		<button onclick="window.location.href='/Home'">Cancel</button>
		<hr>
	</div>
	<br>
	<p>{{error.message}}</p>
	<br>
	<router-link to="/signin">Already a user? Sign in</router-link>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
	data(){
		return{
			name: '',
			phonenumber: '',
			email: '',
			password: '',
			confirmpassword: '',
			error:{
				message:''
			}
		}
	},
	methods:{
		signUp (){
			firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
		}
	}
}
</script>