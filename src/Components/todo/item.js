import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" checked={this.props.checked} />
                    {this.props.text}
                </label>
            </div>
        );
    }
}

TodoItem.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default TodoItem;