import React, {Component} from 'react';
import ListItem from './ListItem';

class ActiveListItems extends Component {
    render() {
        const {listItems, onClick} = this.props;

        return (
            <div className="active-list-items">
                {
                    listItems.map((item) =>
                        <ListItem
                            item={item}
                            isActive={true}
                            onClick={onClick}
                        />
                    )
                }
            </div>
        );
    }
}

export default ActiveListItems;
