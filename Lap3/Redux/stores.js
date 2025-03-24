import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./TodoSlides";

export const store = configureStore({
	reducer: {
		todo: todosReducer,
	},
});