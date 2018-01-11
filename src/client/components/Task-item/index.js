import React, {Component} from 'react';

class TaskItem extends Component {
  render() {
    return (
      <li className="tasks-">           
        <div className="task-item-wrapper">
          <button name="complete-task-btn">&#10004</button>
          <input type="text" placeholder="Task that's supposed to happen"/>
          <button name="remove-task-btn">&#128465</button>
          <button name="save-edit-btn">&#128465</button>
        </div>
      </li> 
    )
  }
}

export default TaskItem;