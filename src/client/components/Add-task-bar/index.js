import React, {Component} from 'react';

class AddTaskBar extends Component {
  render() {
    return (
      <div className="add-task-bar">
          <input type="text" value="" placeholder="Add task description here"/>
          <button name="add-task">+</button>
      </div>  
    )
  }
}

export default AddTaskBar;