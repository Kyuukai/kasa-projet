import React from 'react';

const Card = ({ appartement }) => {
    return (
        <a href={`/accomodation/${appartement.id}`} className='card'>
            <img
                className='card__image'
                src={appartement.cover}
                alt={appartement.title}
            />
            {<h3 className='card__title'>{appartement.title}</h3>}
        </a>
    );
};

export default Card;