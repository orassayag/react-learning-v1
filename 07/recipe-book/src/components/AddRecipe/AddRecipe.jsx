import React from 'react';

const addRecipe = (props) => (
    <div className="add-recipe">
        Title: <input type="text" value={props.title || ''} onChange={props.titleChange} /><br />
        Description: <input type="text" value={props.description || ''} onChange={props.descriptionChange} /><br />
        Ingrediencies: <input type="text" value={props.ingrediencies || ''} onChange={props.ingredienciesChange} /><br />
        Total likes: <label>{props.totalLikes}</label><br />
        <button onClick={props.addRecipe}>Add recipe!</button><br />
        <button onClick={props.togglerecipes}>Show recipes</button>
    </div>
);

export default addRecipe;