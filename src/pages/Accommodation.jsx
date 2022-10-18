import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccommodationCollapse from '../components/AccommodationCollapse';
import Tag from '../components/Tag';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Carrousel from '../components/Carrousel';

const Accommodation = () => {
    const [logement, setLogement] = useState({
        pictures: [],
        title: "",
        location: "",
        host: ",",
        description: "",
        equipments: [],
        rating: "",
        tags: []
    });

    const paramId = useParams();

    useEffect(() => {
        axios
            .get('../logements.json')
            .then((res) => {
                res.data.forEach(element => {
                    if (element.id === paramId.id) {
                        setLogement(element);
                    }
                });
            });
    }, []);

    return (
        <div className="accommodation container fh">
            <Carrousel img={logement.pictures} />
            <div className="accommodation__header">
                <div className="accommodation__header__info">
                    <div className="accommodation__header__info__title">{logement.title}</div>
                    <div className="accommodation__header__info__location">{logement.location}</div>
                    <div className="accommodation__header__info__tags">
                        {logement.tags.map((tag) => (
                            <Tag key={logement.id + tag} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="accommodation__header__misc">
                    <div className="accommodation__header__misc__host">
                        <div className="accommodation__header__misc__host__hostName">{logement.host.name}</div>
                        <img
                            className="accommodation__header__misc__host__hostPicture"
                            src={logement.host.picture}
                            alt={logement.host.name}
                        />
                    </div>
                    <div className="accommodation__header__misc__rating">
                        <Rating key={logement.id} rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className="accommodation__collapse">
                <AccommodationCollapse
                    title="Description"
                    content={logement.description}
                />
                <AccommodationCollapse
                    title="Équipements"
                    content={<ul>
                        {logement.equipments.map((equipement) => (
                            <li key={logement.id + equipement}>{equipement}</li>
                        ))}
                    </ul>}
                />
            </div>
        </div >
    );
};

export default Accommodation;