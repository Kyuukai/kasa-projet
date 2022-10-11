import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccommodationCollapse from '../components/AccommodationCollapse';
import Tag from '../components/Tag';

const Accommodation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('logements.json')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="accommodation container fh">
            <img
                className="accommodation__carrousel"
                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            />
            <div className="accommodation__header">
                <div className="accommodation__header__title"><p>Cozy loft on the Canal Saint-Martin</p></div>
                <div className="accommodation__header__location"><p>Paris, Île-de-France</p></div>
                <div className="accommodation__header__tags">
                    <Tag
                        tag="Cozy"
                    />
                    <Tag
                        tag="Canal"
                    />
                    <Tag
                        tag="Paris 10"
                    />
                </div>
            </div>
            <div className="accommodation__collapse">
                <AccommodationCollapse
                    title="Description"
                    content="Salut"
                />
                <AccommodationCollapse
                    title="Équipements"
                    content="Salut"
                />
            </div>
        </div >
    );
};

export default Accommodation;