import { ListItemIcon } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todoList: [],
	},

	reducers: {
		TODO_INPUT: (state, action) => {
			/*   state.push(action.payload.values); */

			/* state.todoList = state.todoList.push(action.payload); */
			state.todoList.push(action.payload);
		},
		TODO_TOGGLE: (state, action) => {
			/* console.log(action.payload.item);
            const item = action.payload.item;
            state = {...state, item}; */
		},
		TODO_REMOVE: (state, action) => {},
	},
});
export const { TODO_INPUT, TODO_TOGGLE, TODO_REMOVE } = todoSlice.actions;
export const todoInput =
	({ id, todoWhat }) =>
	(dispatch) => {
		/*     const values={
        id:id+1,
        todoWhat:todoWhat,
        todoCheck:false,
    } */
		/*  const val={values:values}; */

		const response = { id: id + 1, todoWhat, todoCheck: false };
		console.log(response);
		dispatch(TODO_INPUT(response));
		// const val={values:values};
		// dispatch(TODO_INPUT(val));
	};
export const todoToggle = (id, item) => (dispatch) => {
	console.log(id, item);
	item.todoCheck = !item.todoCheck;
	console.log(item);
	const value = { item: item };
	dispatch(TODO_TOGGLE(value));
};
export const todoRemove = (value) => (dispatch) => {
	const val = { value: value };
	dispatch(TODO_REMOVE(val));
};
export default todoSlice.reducer;
