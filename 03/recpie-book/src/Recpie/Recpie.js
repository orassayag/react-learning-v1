import React from 'react'
import './Recpie.css';

const recpie = (props) => {
    return (
        <div className="Recpie">
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
            <div>Ingrediencies: {props.ingrediencies[0]} | {props.ingrediencies[1]} | {props.ingrediencies[2]}</div>
            <div>Likes count: {props.likesCount}</div>
            <button onClick={props.likeRecpie}>Like</button>
        </div>
    );
};

export default recpie;