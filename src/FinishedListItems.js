import React, {Component} from 'react';
import ListItem from './ListItem';

class FinishedListItems extends Component {
    render() {
        const {finishedListItems} = this.props;

        return (
            <div className="finished-list-items">
                {
                    finishedListItems.map((item) =>
                        <ListItem
                            item={item}
                            isActive={false}
                        />
                    )
                }
            </div>
        );
    }
}

export default FinishedListItems;
