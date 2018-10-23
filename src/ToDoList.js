import React, { Component } from 'react';
import ListItemInput from './ListItemInput';
import ListItems from './ListItems';
import FinishedListItems from './FinishedListItems';

import './react-styles.css';

class ToDoList extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="header">
                    To Do List
                </h1>
                <ListItemInput />
                <ListItems />
                <FinishedListItems />
            </div>
        );
    }
}

export default ToDoList;
