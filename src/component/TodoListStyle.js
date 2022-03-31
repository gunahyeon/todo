//backgroundColor:#e9ecef;
//끝난일:#dee2e6
//빨간색:#ff6b6b
//할일:#38d9a9 24pxcircle 20c997
//할일검정:#495057
const TodoListStyle = {
	body: {
		backgroundColor: "#e9ecef",
        display: "flex",
		justifyContent: "center",
		width: "100vw",
		minHeight: "100vh",
		margin: "auto",
		alignItems: "center",
		height: "auto",
	},
    card: {
        width:"380px",
    },
    cardHeader:{
        display: "flex",
        flexDirection:"column",
        padding:"16px",
        borderBottom : "1px solid #ced4da",
    },
    date : {
        margin:"0",
        fontWeight:"700",
        fontSize: "1.5rem",
        lineHeight: "1.334",
        letterSpacing: "0em",
        display: "block",
    },
    day : {
        margin:"0",
        fontWeight:"600",
        fontSize:"1rem",
        lineHeight:"1.5",
        letterSpacing:"0.00938em",
        color:"rgba(0,0,0,0.6)",
        display:"block",
    },
    todoCount : {
        color: "#20c997",
        fontSize:"14px",
        marginTop:"20px",
        fontWeight:"600",
    },
    cardContent:{
        borderBottom:"1px solid #ced4da",
        padding:"16px",
        height:"300px",
        overflow:"auto",
        '&::-webkit-scrollbar': {
            width:"1px",
           },
          '&::-webkit-scrollbar-thumb': {
              width:"1px",
           },
    },
    todo:{
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between",
        padding:"8px 0 8px 0",
    },
    checkBoxTrue:{
        margin:"0",
        color:"#20c997",
    },
    checkBoxFalse:{
        margin:"0",
        color:"#495057",
    },
    todoTextTrue:{
        color:"#dee2e6",
        fontSize:"14px",
        paddingTop:"3px",
        marginLeft:"4px",
        textAlign:"left",
        flexGrow:"1",
    },
    todoTextFalse:{
        color:"#495057",
        fontSize:"14px",
        paddingTop:"3px",
        marginLeft:"4px",
        textAlign:"left",
        flexGrow:"1",
    },
    delete:{
        color:"#dee2e6",
        "&:hover":{
            color: "#ff6b6b",
        },
    },
    inputWrap:{
        display:"flex",
        padding:"10px",
    },
    plus:{
        color:"#20c997",
            "&:hover":{
            opacity: "0.9",
        },
    },
    helperText:{
        fontSize:"1px",
        color:"dee2e6",
    },
};
export default TodoListStyle;