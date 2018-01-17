import React, { Component } from 'react';
import TodoList from "./Components/todo/list";
import AddItem from "./Components/add-item";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoList list={[
                    {state: false, name: "test"},
                    {state: true, name: "test32"},
                ]} />
                <AddItem />
            </div>
        );
    }
}

export default App;
