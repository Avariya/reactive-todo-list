import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddItem extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            text: props.inputText
        };

        this._textModified = this._textModified.bind(this);
        this._addItem = this._addItem.bind(this);
    }

    _addItem = (event) => {
        event.preventDefault();
        console.log(this.state.text);
    };

    _textModified = (event) => {
        this.setState({text: event.target.value});
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this._addItem}>
                <input type="text" onChange={this._textModified} value={this.state.text} />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

AddItem.propTypes = {
    inputText: PropTypes.string
};

AddItem.defaultProps = {
    inputText: ''
};

export default AddItem;