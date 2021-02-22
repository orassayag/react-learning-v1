import React from 'react';
import Recpie from './Recpie/Recpie';

const recpies = (props) => {
    return (props.recpies.map((el) =>
        <Recpie
            key={el.id}
            title={el.title}
            description={el.description}
            ingrediencies={el.ingrediencies}
            likesCount={el.likesCount}
            likeRecpie={() => props.likeRecpie(el.id)}
            delete={() => props.delete(el.id)}
            titleChange={(e) => props.titleChange(e, el.id)}
            descriptionChange={(e) => props.descriptionChange(e, el.id)} />
    ));
};

export default recpies;