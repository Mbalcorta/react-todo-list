import React from 'react';

function TaskItem(props) {  

  const styles = {
    taskDesc:{
      height: '85px',
      width: '500px'
    }
  }


  return (
    <li className="">           
      <div className="task-item-wrapper">
        <button name="complete-task-btn">Done</button>
        <input type="text" style={styles.taskDesc} placeholder="Task that's supposed to happen"/>
        <button name="remove-task-btn">X</button>
        <button name="save-edit-btn">Save</button>
      </div>
    </li> 
  )  
}

// TaskItem.propTypes = {
//   taskDescription: React.PropTypes.string,
// }

export default TaskItem;