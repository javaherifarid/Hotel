<template>
<div class="col-md-8">
	<div class="room-card">
		<ul class="list-group list-group-flush">
			<li class="list-group-item">Code: {{room.code}}</li>
			<li class="list-group-item">Capacity: {{room.capacity}}</li>
			<li class="list-group-item">Price: {{room.price}}</li>
			<li class="list-group-item">Image: {{room.file}}</li>
			<li class="list-group-item">Host: {{room.email}}</li>
		</ul>
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props:['room']
}
</script>