import React from 'react'
import './Recpie.css';

const recpie = (props) => {
    return (
        <div className="Recpie">
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
            <div>Ingrediencies: {props.ingrediencies[0]} | {props.ingrediencies[1]} | {props.ingrediencies[2]}</div>
            <div>Likes count: {props.likesCount}</div>
            <button onClick={props.likeRecpie}>Like</button><br />
            <button onClick={props.delete}>Delete</button><br /><br />
            <input type="text" onChange={props.titleChange} value={props.title} /><br />
            <input type="text" onChange={props.descriptionChange} value={props.description} /><br />
        </div>
    );
};

export default recpie;