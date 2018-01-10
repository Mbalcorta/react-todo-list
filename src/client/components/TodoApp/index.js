import React, { Component } from 'react';

import UserOnboarding from '../user-onboarding';
import AddTaskBar from '../Add-task-bar';
import TaskBoxName from '../Task-box-name';

class TodoApp extends Component {

  render() {
  return (
      <div>
          <UserOnboarding/>        
          <AddTaskBar/>        
          <TaskBoxName/>       
          <TaskBox/>
      </div>
    )
  }
}

export default TodoApp;
