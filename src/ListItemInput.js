import React, {Component} from 'react';

class ListItemInput extends Component {
    render() {
        const {currentInput, onTextChange, onSubmit} = this.props;
        return (
            <div className="to-do-input-container">
                <input
                    type="text"
                    value={currentInput}
                    onChange={onTextChange}
                />
                <button
                    onClick={onSubmit}
                >
                    {'Add'}
                </button>
            </div>
        );
    }
}

export default ListItemInput;
