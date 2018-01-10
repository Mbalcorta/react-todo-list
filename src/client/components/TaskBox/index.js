import React, {Component} from 'react';
import TaskItem from './Task-item'

class TaskBox extends Component {
  render() {
    return (
      <div className="task-box">
        <ul>
          <TaskItem/>
        </ul>
      </div>
    )
  }
}

export default TaskBox;