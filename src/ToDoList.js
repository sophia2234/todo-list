import React, {Component} from 'react';

import ListItemInput from './ListItemInput';
import ActiveListItems from './ActiveListItems';
import FinishedListItems from './FinishedListItems';

import './react-styles.css';

class ToDoList extends Component {
    _addItemToList = () => {
        const currentListItem = this.state.currentListItem;

        if (currentListItem.length) {
            this.setState({
                ...this.state,
                currentListItem: '',
                listItems: [
                    ...this.state.listItems,
                    currentListItem
                ]
            });
        }
    };

    _setCurrentToDoListItem = (currentText) => {
        this.setState({
            ...this.state,
            currentListItem: currentText.target.value
        });
    };

    _markItemAsFinished = (finishedItem) => {
        const currentListItems = this.state.listItems;
        const indexOfFinishedItem = currentListItems.indexOf(finishedItem.toString());

        currentListItems.splice(indexOfFinishedItem, 1);

        this.setState({
            ...this.state,
            listItems: currentListItems,
            finishedListItems: [
                ...this.state.finishedListItems,
                finishedItem
            ]
        })

    };

    _markItemAsActive = (activeItem) => {
        const currentFinishedListItems = this.state.finishedListItems;
        const indexOfActiveItem = currentFinishedListItems.indexOf(activeItem.toString());

        currentFinishedListItems.splice(indexOfActiveItem, 1);

        this.setState({
            ...this.state,
            listItems: [
                ...this.state.listItems,
                activeItem
            ],
            finishedListItems: currentFinishedListItems
        })

    };

    constructor(props) {
        super(props);
        this.setCurrentToDoListItem = this._setCurrentToDoListItem.bind(this);
        this.addItemToList = this._addItemToList.bind(this);
        this.markItemAsFinished = this._markItemAsFinished.bind(this);
        this.markItemAsActive = this._markItemAsActive.bind(this);

        this.state = {
            currentListItem: '',
            listItems: [],
            finishedListItems: []
        };
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    To Do List
                </h1>
                <ListItemInput
                    className="item-input"
                    currentInput={this.state.currentListItem}
                    onTextChange={this.setCurrentToDoListItem}
                    onSubmit={this.addItemToList}
                />
                <ActiveListItems
                    className="active-items"
                    listItems={this.state.listItems}
                    onClick={this.markItemAsFinished}
                />
                <FinishedListItems
                    className="finished-items"
                    finishedListItems={this.state.finishedListItems}
                    onClick={this.markItemAsActive}
                />
            </div>
        );
    }
}

export default ToDoList;
