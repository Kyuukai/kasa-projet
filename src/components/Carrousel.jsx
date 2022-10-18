import React, { useState } from 'react';

const Carrousel = (props) => {

    const [carrouselIndex, setCarrouselIndex] = useState(0);

    const imgSize = () => {

        const slideshowImg = document.querySelector(".carrousel__container__image");

        if (!slideshowImg) {
            return 0;
        }
        return slideshowImg.width;
    }

    const Next = () => {
        if (carrouselIndex === props.img.length - 1) {
            setCarrouselIndex(0)
        } else {
            setCarrouselIndex(carrouselIndex + 1)
        }
    }

    const Previous = () => {
        if (carrouselIndex === 0) {
            setCarrouselIndex(props.img.length - 1)
        } else {
            setCarrouselIndex(carrouselIndex - 1)
        }
    }

    return (
        <div className="carrousel">

            <div className="carrousel__container" style={{ transform: `translateX(-${carrouselIndex * imgSize()}px)` }}>
                {props.img.map((picture) =>
                    <img
                        className="carrousel__container__image"
                        src={picture}
                        key={picture}
                        alt="Intérieur du Logement"
                    />)}
            </div>

            <div className={"carrousel__controls"}>
                <img
                    src="../ARROW_LEFT.png"
                    className="carrousel__controls__arrow"
                    onClick={Previous}
                />
                <img
                    src="../ARROW_RIGHT.png"
                    className="carrousel__controls__arrow"
                    onClick={Next}
                />
            </div>

            <div className={"carrousel__index"}>{carrouselIndex + 1} / {props.img.length}</div>
        </div>
    );
}

export default Carrousel;