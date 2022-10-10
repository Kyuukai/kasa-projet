import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('logements.json')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='container'>
            <div className='gallery'>
                <ul className='gallery__card'>{data.map((appartement, index) => (
                    <Card key={index} appartement={appartement} />
                ))}
                </ul>
            </div>
        </div>
    );
};

export default Gallery;