import React, {Component} from 'react';
import ListItem from './ListItem';

class FinishedListItems extends Component {
    render() {
        const {finishedListItems} = this.props;

        return (
            <div className="finished-to-do-list-items">
                {
                    finishedListItems.length ?
                    <p>{'Finished'}</p>
                    :
                    null
                }
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
