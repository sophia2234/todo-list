import React, { Component } from 'react';
import ListItemInput from './ListItemInput';
import ActiveListItems from './ActiveListItems';
import FinishedListItems from './FinishedListItems';

import './react-styles.css';

class ToDoList extends Component {
    _addItemToList = () => {
        const currentListItem = this.state.currentListItem;
        this.setState({
            ...this.state,
            currentListItem: '',
            listItems: [
                ...this.state.listItems,
                currentListItem
            ]
        });
    };

    _setCurrentToDoListItem = (currentText) => {
        this.setState({
            ...this.state,
            currentListItem: currentText.target.value
        });
    };

    _markItemAsDone = (finishedItem) => {
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

    constructor(props) {
        super(props);
        this.setCurrentToDoListItem = this._setCurrentToDoListItem.bind(this);
        this.addItemToList = this._addItemToList.bind(this);
        this.markItemAsDone = this._markItemAsDone.bind(this);

        this.state = {
            currentListItem: '',
            listItems: [],
            finishedListItems: []
        };
    }

    render() {
        return (
            <div className="App">
                <h1 className="header">
                    To Do List
                </h1>
                <ListItemInput
                    currentInput={this.state.currentListItem}
                    onTextChange={this.setCurrentToDoListItem}
                    onSubmit={this.addItemToList}
                />
                <ActiveListItems
                    listItems={this.state.listItems}
                    onClick={this.markItemAsDone}
                />
                <FinishedListItems
                    finishedListItems={this.state.finishedListItems}
                />
            </div>
        );
    }
}

export default ToDoList;
