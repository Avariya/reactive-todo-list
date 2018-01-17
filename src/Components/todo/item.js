import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.state
        };

        this._changeState.bind(this);
    }

    _changeState = (event) => {
        this.setState({
            checked: event.target.checked
        });
    };

    render() {
        return (
            <div>
                <label>
                        <input type="checkbox" checked={this.state.checked} onChange={this._changeState} />
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

TodoItem.defaultProps = {
    state: false
};

export default TodoItem;