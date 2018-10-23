import React, {Component} from 'react';
import {Button, OutlinedInput} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const addItemToList = (item) => {
    console.log('adding to list', item);
};

const setCurrentToDoListItem = (currentText) => {
    console.log('setting list item', currentText);
};

class ListItemInput extends Component {
    render() {
        return (
            <div className="to-do-input-container">
                <OutlinedInput
                    autoFocus={true}
                    className="to-do-input"
                    label="To Do"
                    labelWidth={0}
                    notched={true}
                    onChange={(event) => setCurrentToDoListItem(event.target.value)}
                />
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="Add"
                    onClick={(event) => addItemToList(event.target.value)}
                >
                    <AddIcon
                        color="#fff"
                    />
                </Button>
            </div>
        );
    }
}

export default ListItemInput;
