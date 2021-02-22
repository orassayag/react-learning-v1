import React from 'react'
import './Recipe.css';

const recipe = (props) => {
    return (
        <div className="Recipe">
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
            <div>Ingrediencies: {props.ingrediencies[0]} | {props.ingrediencies[1]} | {props.ingrediencies[2]}</div>
            <div>Likes count: {props.likesCount}</div>
            <button onClick={props.likeRecipe}>Like</button>
        </div>
    );
};

export default recipe;