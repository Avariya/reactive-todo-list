import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddItem extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this._textModified = this._textModified.bind(this);
        this._addItem = this._addItem.bind(this);
    }

    _addItem(event) {
        event.preventDefault();
        //todo input text is 'this.state.text' we need to store it somewhere
    }

    _textModified(event) {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    render() {
        return (<label>
            <input type="text" onChange={this._textModified} value={this.props.defaultText} />
            <button onClick={this._addItem}>Add</button>
        </label>);
    }
}

AddItem.propTypes = {
    defaultText: PropTypes.string
};

AddItem.defaultProps = {
    defaultText: ''
};

export default AddItem;