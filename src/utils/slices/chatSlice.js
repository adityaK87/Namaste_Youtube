import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_LIVECHAT_COUNT } from "../constants";

const chatSlice = createSlice({
	name: "chat",
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			state.messages.splice(YOUTUBE_LIVECHAT_COUNT, 1);
			state.messages.unshift(action.payload);
		},
	},
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
