import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/appSlice";

const store = configureStore({
	reducer: {
		app: AppSlice,
	},
});

export default store;
