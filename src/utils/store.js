import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
	reducer: {
		app: AppSlice,
		search: searchSlice,
		chat: chatSlice,
	},
});

export default store;
