import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
	reducer: {
		app: AppSlice,
		search: searchSlice,
	},
});

export default store;
