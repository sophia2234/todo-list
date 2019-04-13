import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faPlus);

class ListItemInput extends Component {
    render() {
        const {currentInput, onTextChange, onSubmit} = this.props;

        return (
            <div className="new-list-item-input-container">
                <input
                    className="new-list-item-input"
                    value={currentInput}
                    onChange={onTextChange}
                />
                <button
                    className="new-list-item-button"
                    onClick={onSubmit}
                >
                    <FontAwesomeIcon
                        className="new-list-item-icon"
                        color="#eee"
                        icon="plus"
                    />
                </button>
            </div>
        );
    }
}

export default ListItemInput;
