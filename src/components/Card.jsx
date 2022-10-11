import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ appartement }) => {
    return (
        <Link to={`/accommodation/${appartement.id}`} className='card'>
            <img
                className='card__image'
                src={appartement.cover}
                alt={appartement.title}
            />
            {<h3 className='card__title'>{appartement.title}</h3>}
        </Link>
    );
};

export default Card;