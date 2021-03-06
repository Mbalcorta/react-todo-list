import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoApp from '../TodoApp';

export default class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={TodoApp} />            
          </Switch>
      </div>
    );
  }
}