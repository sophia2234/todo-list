import React, {Component} from 'react';

class ActiveListItems extends Component {
    render() {
        const {item, isActive, onClick} = this.props;

        return (
            <div>
                <p>{item}</p>
                {
                    isActive ?
                        <button
                            onClick={() =>onClick(item)}
                        >
                            {'Done!'}
                        </button>
                        :
                        <p>{'finished'}</p>

                }
            </div>
        );
    }
}

export default ActiveListItems;
