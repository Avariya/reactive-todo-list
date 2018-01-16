import React, {Component} from 'react';
import Toggle from 'react-toggle';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <Toggle aria-label="some label" value="test"/>
            </div>
        );
    }
}

export default TodoItem;