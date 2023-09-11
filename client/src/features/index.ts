import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
	theme: "dark" | "light";
};

const initialState: TinitialState = {
	theme: "dark",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setTheme: (state, { payload }) => {
			const root = document.documentElement;
			root.dataset.theme = payload;
			state.theme = payload;
			localStorage.setItem("theme", payload);
		},
	},
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;
