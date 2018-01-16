import React, { Component } from 'react';
import TodoItem from './Components/todo-item';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoItem text="test" checked={false} />
      </div>
    );
  }
}

export default App;
