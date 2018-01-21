import React from 'react';
import PropTypes from 'prop-types';

var styles = {
  taskDesc:{
    height: '65px',
    width: '575px',
    paddingLeft: '15px',
    borderRadius: '10px',
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


class TaskItem extends React.Component {  
  
  render() { 
    return (
      <li className="">           
        <div style={styles.taskItemWrapper}>
          <input type="image" alt="complete-task" src="./icons/complete-task.svg" style={styles.doneBtn}/>
          <input type="text" id="task-desc" style={styles.taskDesc} placeholder={this.props.taskDescription}/>
          <input type="image" alt="save-task-btn" src="./icons/save-task.svg" style={styles.saveBtn}/>
          <input type="image" alt="delete-task-btn" src="./icons/delete-default.svg" style={styles.removeTaskBtn}/>
        </div>
      </li> 
    )
  }  
}

TaskItem.propTypes = {
  taskDescription: PropTypes.string,
}

TaskItem.defaultProps = {
  taskDescription: "A description of the task at hand",
}

export default TaskItem;