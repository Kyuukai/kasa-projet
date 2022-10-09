import React from 'react';
import Card from './Card';

const Gallery = (props) => {
    return (
        <div className='container'>
            <div className='gallery'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Gallery;