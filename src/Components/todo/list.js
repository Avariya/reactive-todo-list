import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./item";

class TodoList extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        let todoList = [];
        this.props.list.forEach(function (todoItem) {
            todoList.push(<TodoItem text={todoItem.name} checked={todoItem.state}/>)
        });
        return todoList;
    }
}

TodoList.propTypes = {
    list: PropTypes.array
};

export default TodoList;