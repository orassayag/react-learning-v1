import React from 'react';
import Recipe from './Recipe/Recipe';

const recipes = (props) => {
    return (props.recipes.map((el) =>
        <Recipe
            key={el.id}
            title={el.title}
            description={el.description}
            ingrediencies={el.ingrediencies}
            likesCount={el.likesCount}
            likeRecipe={() => props.likeRecipe(el.id)}
            delete={() => props.delete(el.id)}
            titleChange={(e) => props.titleChange(e, el.id)}
            descriptionChange={(e) => props.descriptionChange(e, el.id)} />
    ));
};

export default recipes;