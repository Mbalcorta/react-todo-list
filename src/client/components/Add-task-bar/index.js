import React from 'react';



function AddTaskBar(props){
  const style = {
    AddTaskBar:{
      height: '85px',
      width: '600px',
      fontFamily: 'Lucinda',
      borderRadius: '15px 45px 15px',
    },
    addBtn: {
      height:'100px',
      width:'100px',
      marginLeft: '25px',
    } 
  }
  
  return (
    <div className="add-task-bar">      
      <input type="text" style={style.AddTaskBar} value={props.taskDescription}/>
      <input type="image" src="./icons/addTask-default.svg" name="add-task" style={style.addBtn}/>
    </div>    
  )
}



export default AddTaskBar;