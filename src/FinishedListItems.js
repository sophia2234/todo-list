import React, {Component} from 'react';
import ListItem from './ListItem';

class FinishedListItems extends Component {
    render() {
        const {finishedListItems, onClick, deleteFunction} = this.props;

        return (
            <div className="finished-list-items">
                {
                    finishedListItems.map((item) =>
                        <ListItem
                            item={item}
                            isActive={false}
                            onClick={onClick}
                            deleteFunction={deleteFunction}
                        />
                    )
                }
            </div>
        );
    }
}

export default FinishedListItems;
