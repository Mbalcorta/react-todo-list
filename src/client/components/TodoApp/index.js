import React, { Component } from 'react';

import UserOnboarding from '../User-onboarding';
import AddTaskBar from '../Add-task-bar';
import TaskBoxName from '../Task-box-name';
import TaskBox from '../TaskBox';

class TodoApp extends Component {

  render() {
  return (
      <div className="grid">
          <UserOnboarding />        
          <AddTaskBar />        
          <TaskBoxName />       
          <TaskBox />
      </div>
    )
  }
}

export default TodoApp;
