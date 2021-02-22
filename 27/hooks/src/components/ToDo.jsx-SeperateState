import React, { useState, Fragment } from 'react';

const ToDo = (props) => {
    const [toDoName, setToDoName] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleInputChange = (e) => {
        setToDoName(e.target.value);
    };

    const handleToDoAdd = (e) => {
        setToDoList(toDoList.concat(toDoName));
    };

    return (
        <Fragment>
            <input type="text" placeholder="ToDo" onChange={handleInputChange} value={toDoName} />
            <button type="button" onClick={handleToDoAdd}>Add</button>
            <ul>
                {toDoList.map((toDo, i) => {
                    return (<li key={i}>{toDo}</li>);
                })}
            </ul>
        </Fragment>
    );
};

export default ToDo;