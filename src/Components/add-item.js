import React, {Component} from 'react';

class AddItem extends Component
{
    render() {
        return (<label>
            <input type="text" />
            <button>Add</button>
        </label>);
    }
}

export default AddItem;