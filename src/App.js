import React, { Component } from 'react';
import TodoItem from './Components/todo-item';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoItem />
      </div>
    );
  }
}

export default App;
