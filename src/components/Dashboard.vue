<template>
<div class="">
	<h3>Hotel Dashboard</h3>
	<hr>
	<button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
	<hr>
	<AddRoom />
	<!-- <Upload /> -->
	<hr>
	<div class="col-md-12">
		<RoomItem
			v-for="(room_item) in this.$store.state.rooms"
			:room="room_item"
		/>
	</div>
</div>
</template>

<script>
import { firebaseApp, roomsRef } from '../firebaseApp'

import AddRoom from './AddRoom.vue'
import RoomItem from './RoomItem.vue'
// import Upload from './Upload.vue'

export default {
	methods: {
		signOut() {
			this.$store.dispatch('signOut')
			firebaseApp.auth().signOut()
		}
	},
	components: {
		AddRoom,
		// Upload,
		RoomItem
	},
	mounted() {
		roomsRef.on('value', snap => {
			let rooms = []
			snap.forEach(room => {
				rooms.push(room.val())
			})
			this.$store.dispatch('addRooms', rooms)
		})
	}
}
</script>