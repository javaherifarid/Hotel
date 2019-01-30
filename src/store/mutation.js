import * as types from './mutation-types'

export const mutations = {
	[types.SIGN_IN] (state, user_payload) {
		state.user = user_payload
	},

	[types.SIGN_OUT] (state) {
		state.user = {}
	},

	[types.ADD_ROOMS] (state, rooms_payload){
		state.rooms = rooms_payload
	}
	
	// [types.Upload] (state, rooms_payload){
	// 	state.rooms = rooms_payload
	// }
}