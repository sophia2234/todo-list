import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSquare, faCheckSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faSquare);
library.add(faCheckSquare);
library.add(faTrash);

const getContainerClass = (isActive) => isActive ? "active-list-item" : "finished-list-item";
const getTextClass = (isActive) => isActive ? "active-list-item-text" : "finished-list-item-text";

class ListItem extends Component {
    render() {
        const {item, isActive, onClick} = this.props;

        return (
            <div className={getContainerClass(isActive)}>
                <p className={getTextClass(isActive)}>
                    {item}
                </p>
                {
                    isActive ?
                        <button
                            className="active-button"
                            onClick={() => onClick(item)}
                        >
                            <FontAwesomeIcon
                                color="#eeeeee"
                                icon="square"
                            />
                        </button>
                        :
                        <div>
                            <button
                                className="finished-button"
                                onClick={() => onClick(item)}
                            >
                                <FontAwesomeIcon
                                    color="#eeeeee"
                                    icon="check-square"
                                />
                            </button>
                            <button
                                className="finished-button"
                                onClick={() => console.log('Not implemented yet!')}
                            >
                                <FontAwesomeIcon
                                    color="#eeeeee"
                                    icon="trash"
                                />
                            </button>
                        </div>
                }
            </div>
        );
    }
}

export default ListItem;
