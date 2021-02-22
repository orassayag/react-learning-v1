import React from 'react';

const List = (props) => {
    console.log('Rendering the list...');

    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id} onClick={props.onClickHandler.bind(this, item.id)}>{item.name}</li>
            ))}
        </ul>
    );
};

export default List;