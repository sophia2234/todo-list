import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSquare, faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faSquare);
library.add(faCheckSquare);

const getContainerClass = (isActive) => isActive ? "active-list-item" : "finished-list-item";
const getTextClass = (isActive) => isActive ? "active-list-item-text" : "finished-list-item-text";
const getButtonClass = (isActive) => isActive ? "active-button" : "finished-button";
const getIconClass = (isActive) => isActive ? "delete-button" : "finished-delete-button";

class ListItem extends Component {
    render() {
        const {item, isActive, onClick} = this.props;

        return (
            <div className={getContainerClass(isActive)}>
                <p className={getTextClass(isActive)}>
                    {item}
                </p>
                <button
                    className={getButtonClass(isActive)}
                    onClick={() => onClick(item)}
                >
                    <FontAwesomeIcon
                        className={getIconClass(isActive)}
                        color="#eeeeee"
                        icon={isActive ? "square" : "check-square"}
                    />
                </button>
            </div>
        );
    }
}

export default ListItem;
