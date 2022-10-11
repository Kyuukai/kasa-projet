import React from 'react';

const Card = ({ appartement }) => {
    return (
        <div className='card'>
            <img
                className='card__image'
                src={appartement.cover}
                alt={appartement.title}
            />
            {<h3 className='card__title'>{appartement.title}</h3>}
        </div>
    );
};

export default Card;