import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccommodationCollapse from '../components/AccommodationCollapse';
import Tag from '../components/Tag';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';

const Accommodation = () => {
    const [logement, setLogement] = useState({
        pictures: ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"],
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
            <img
                className="accommodation__carrousel"
                src={logement.pictures[0]}
                alt={logement.title}
            />
            <div className="accommodation__header">
                <div className="accommodation__header__text">
                    <div className="accommodation__header__text__title">{logement.title}</div>
                    <div className="accommodation__header__text__location">{logement.location}</div>
                </div>
                <div className="accommodation__header__host">
                    <div className="accommodation__header__host__hostName">{logement.host.name}</div>
                    <img
                        className="accommodation__header__host__hostPicture"
                        src={logement.host.picture}
                        alt={logement.host.name}
                    />
                </div>
            </div>
            <div className="accommodation__subheader">
                <div className="accommodation__subheader__tags">
                    {logement.tags.map((tag) => (
                        <Tag key={logement.id + tag} tag={tag} />
                    ))}
                </div>
                <div className="accommodation__subheader__rating">
                    <Rating key={logement.id} rating={logement.rating} />
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