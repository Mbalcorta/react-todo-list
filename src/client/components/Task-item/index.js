import React from 'react';

function TaskItem(props) {  

  const styles = {
    taskDesc:{
      height: '65px',
      width: '575px'
    },
    doneBtn:{
      height:'70px',
      width:'70px',
      marginRight: '15px',
    },
    removeTaskBtn:{
      height:'70px',
      width:'70px',
      marginLeft: '15px'
    },
    saveBtn:{
      height:'70px',
      width:'70px',
      marginLeft: '15px'
    },
    taskItemWrapper:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }


  return (
    <li className="">           
      <div style={styles.taskItemWrapper}>
        <input type="image" id="complete-task" src="./icons/complete-task.svg" style={styles.doneBtn}/>
        <input type="text" id="task-desc" style={styles.taskDesc} placeholder="Task that's supposed to happen"/>
        <input type="image" id="save-task-btn" src="./icons/save-task.svg" style={styles.saveBtn}/>
        <input type="image" id="delete-task-btn" src="./icons/delete-default.svg" style={styles.removeTaskBtn}/>
      </div>
    </li> 
  )  
}

// TaskItem.propTypes = {
//   taskDescription: React.PropTypes.string,
// }

export default TaskItem;