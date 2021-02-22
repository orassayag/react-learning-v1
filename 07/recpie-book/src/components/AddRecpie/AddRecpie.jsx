import React from 'react';

const addRecpie = (props) => (
    <div className="add-recpie">
        Title: <input type="text" value={props.title || ''} onChange={props.titleChange} /><br />
        Description: <input type="text" value={props.description || ''} onChange={props.descriptionChange} /><br />
        Ingrediencies: <input type="text" value={props.ingrediencies || ''} onChange={props.ingredienciesChange} /><br />
        Total likes: <label>{props.totalLikes}</label><br />
        <button onClick={props.addRecpie}>Add recpie!</button><br />
        <button onClick={props.toggleRecpies}>Show recpies</button>
    </div>
);

export default addRecpie;
