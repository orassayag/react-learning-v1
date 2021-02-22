import React from 'react'
import './Recipe.css';

const recipe = (props) => {
    return (
        <div className="Recipe">
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
            <div>Ingrediencies: {props.ingrediencies[0]} | {props.ingrediencies[1]} | {props.ingrediencies[2]}</div>
            <div>Likes count: {props.likesCount}</div>
            <button onClick={props.likeRecipe}>Like</button><br />
            <button onClick={props.delete}>Delete</button><br /><br />
            <input type="text" onChange={props.titleChange} value={props.title} /><br />
            <input type="text" onChange={props.descriptionChange} value={props.description} /><br />
        </div>
    );
};

export default recipe;