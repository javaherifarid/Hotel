<template>
<div class="">
	<h4>Add a Room <input type="checkbox" v-model="showForm"></h4>
	<div class="from" v-if="showForm">
		<div class="from-group">
			<label>Code :</label>
			<input type="text" class="form-control" v-model="room.code">
		</div>
		<div class="from-group">
			<label>Capacity :</label>
			<input type="text" class="form-control" v-model="room.capacity">
		</div>
		<div class="from-group">
			<label>Price :</label>
			<input type="text" class="form-control" v-model="room.price">
		</div>
		<div>
			<file-select v-model="room.file"></file-select>
			<p v-if="file">{{file.name}}</p>
			<!-- <upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false"> -->
			<!-- <button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Upload to server</button> -->
		</div>
		<!-- <button onclick="window.location.href='/Upload'">Upload Image</button><br> -->
		<button class="btn btn-primary" @click="addRoom">AddRoom</button>
		<button onclick="window.location.href='/Dashboard'">Cancel</button>
	</div>
	<h2>
		Rooms List:
	</h2>
</div>
</template>

<script>
import { roomsRef } from '../firebaseApp'
import FileSelect from './FileSelect.vue'

export default {
	components: {
		FileSelect
		},
	data(){
		return{
			room: {
				code: '',
				capacity: '',
				price: '',
				image: '',
				email: ''
			},
			showForm: false
		}
	},

	methods: {
		addRoom(){
			this.room.email = this.$store.state.user.email;
			roomsRef.push(this.room)
			// console.log("asd", this.room)
		}
	}
}
</script>