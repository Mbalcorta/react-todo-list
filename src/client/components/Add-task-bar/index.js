import React, {Component} from 'react';

const styles = {
  bigBar:{
    height: '85px',
    width: '600px'
  }}

class AddTaskBar extends Component {
  



  render() {
    

    return (
      <div className="add-task-bar" style={styles.bigBar}>
          <input type="text" value="" placeholder="Add task description here"/>
          <button name="add-task">+</button>
      </div>  
    )
  }
}

export default AddTaskBar;