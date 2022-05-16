import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todoList: [],
		count:0,
	},

	reducers: {
		TODO_INPUT: (state, action) => {
			state.todoList.push(action.payload);
			state.count = state.count +1;
		},
		TODO_TOGGLE: (state, action) => {
			state.todoList = action.payload;
		},
		TODO_REMOVE: (state, action) => {
			state.todoList = action.payload;
			state.count = state.count+1;
		},
	},
});
export const { TODO_INPUT, TODO_TOGGLE, TODO_REMOVE } = todoSlice.actions;
export const todoInput =
	({ id, todoWhat }) =>
	(dispatch) => {
		const response = { id: id, todoWhat:todoWhat, todoCheck: false };
		console.log(response);
		dispatch(TODO_INPUT(response));
	};
export const todoToggle = (item, id) => (dispatch) => {
	const response = item.map((todo)=>todo.id == id ? {...todo, todoCheck: !todo.todoCheck}:todo);
	dispatch(TODO_TOGGLE(response));
};
export const todoRemove = (item, id) => (dispatch) => {
	const response = item.filter(todo => todo.id != id);
	dispatch(TODO_REMOVE(response));
};
export default todoSlice.reducer;
