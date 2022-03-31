import classes from './TodoListStyle';
import React from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	IconButton,
	InputBase,
	Button
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import {todoInput, todoToggle, todoRemove} from '../store/todo';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
const TodoList = () => {
	const todos = useSelector((state)=>state.todo);
	console.log(todos);
	const dispatch = useDispatch();
	const formik=useFormik({
		initialValues:{
			todoBar:"",
		},
		onSubmit:values=>{
			dispatch(todoInput(todos.length,values.todoBar));
		}
	});
	const date = (num) => {
		const day_ko = ['일','월','화','수','목','금','토'];
		const nowday = day_ko[num];
		return nowday+"요일";
		//월일 십의자리 수 0잘라내기해보기
	}

	const result=todos.map((item)=>{
		const onToggle = () => {
			dispatch(todoToggle(item.id, item.todoCheck));
		};
		
		const onRemove = () => {
			dispatch(todoRemove(item.id));
		};

		return (
			<Box sx={classes.todo} key={item.id}>
			<CheckCircleOutlineIcon sx={item.todoCheck ? classes.checkBoxTrue : classes.checkBoxFalse} onClick={onToggle}/>
			<Typography sx={item.todoCheck? classes.todoTextTrue : classes.todoTextFalse}>
				{item.todoWhat}
			</Typography>
			<DeleteIcon sx={classes.delete} onClick={onRemove}/>
		</Box>
	);
	});
    return <Box sx={classes.body}>
			<Card sx={classes.card}>
		<Box sx={classes.cardHeader}
		>
			<Box sx={classes.date}>{moment().format('YYYY')+"년 "+moment().format('MM')+"월 "+moment().format('DD')+"일"}</Box>
			<Box sx={classes.day}>{date(moment().day())}</Box>
			<Box sx={classes.todoCount}>{todos.filter(item=>!item.todoCheck).length}개 남음</Box>
		</Box>
		<CardContent sx={classes.cardContent}>
			{result}
		</CardContent>
		<Box component="form" sx={classes.inputWrap} onSubmit={formik.handleSubmit}>
		<InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="할 일이 있거나 없거나 Todolist"
		{...formik.getFieldProps('todoBar')}
	  />
		<IconButton type="submit">
			<AddCircleIcon sx={classes.plus}/>
		</IconButton>
		</Box>
	</Card>
	</Box>;
}
export default TodoList;