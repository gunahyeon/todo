import { ListItemIcon } from '@mui/material';
import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice ({
    name:"todo",
    initialState:[],
    reducers:{
        TODO_INPUT:(state,action)=>{
            state.push(action.payload.values);
        },
        TODO_TOGGLE:(state,action)=>{
            console.log(action.payload.values.todoCheck);
            // const key=action.payload.values.id;
            // state={...state, todoCheck:!todoCheck};
            // stateid=action.payload.values.id;
            // state.todoCheck=action.payload.values.todoCheck;
            // const count = state.indexOf(1);
            // console.log(count);
            // state.map((item)=>item.id === action.payload.values.id ? {...item, todoCheck:action.payload.values.todoCheck} : console.log("못찾음"));
            // state.todoCheck=action.payload.values.todoCheck;
            console.log(action.payload.values.id+"번 토글")
            state.map((item)=>item.id === action.payload.values.id ? { ...item, todoCheck: item.todoCheck } : console.log(item.id));
            // state.todoCheck = {...state, ["todoCheck"]:action.payload.values.todoCheck};
        },
        TODO_REMOVE:(state,action)=>{

        }
    }
});
export const {TODO_INPUT,TODO_TOGGLE,TODO_REMOVE} = todoSlice.actions;
export const todoInput=(id,todoWhat)=>(dispatch)=>{
    const values={
        id:id+1,
        todoWhat:todoWhat,
        todoCheck:false,
    }
    const val={values:values};
    dispatch(TODO_INPUT(val));
    // const val={values:values};
    // dispatch(TODO_INPUT(val));
}
export const todoToggle=(id, todoCheck)=>(dispatch)=>{
    const values={
        id:id,
        todoCheck: !todoCheck,
    }
    console.log(values);
    const val={values:values};
    dispatch(TODO_TOGGLE(val));
}
export const todoRemove=(value)=>(dispatch)=>{
    const val={value:value};
    dispatch(TODO_REMOVE(val));
}
export default todoSlice.reducer;