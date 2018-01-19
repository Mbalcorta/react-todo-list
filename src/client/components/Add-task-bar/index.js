import React from 'react';



function AddTaskBar(props){
  const style = {
    AddTaskBar:{
      height: '85px',
      width: '600px',
      fontFamily: 'Lucinda',
      borderRadius: '15px 50px 15px',
    },
    addBtn: {
      height:'85px',
      width:'125px',
      borderRadius: '15px 50px 15px',
      marginLeft: '20px'
    }
  }
  
  return (
    <div className="add-task-bar">
        <input type="text" value="" style={style.AddTaskBar} value={props.taskDescription}/>
        <button name="add-task" style={style.addBtn}>+</button>
    </div>  
  )
}



export default AddTaskBar;