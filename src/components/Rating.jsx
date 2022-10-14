import React from 'react';

const ColoredStar = () => {
    return (
        <img src="../STAR.png" alt="Stars" />
    )
}

const EmptyStar = () => {
    return (
        <img src="../EMPTY_STAR.png" alt="Empty Stars" />
    )
}

const Rating = (props) => {

    return (
        <div className="rating">
            {Array.from({ length: parseInt(props.rating) }, (v, idx) => <ColoredStar key={'colored-' + idx} />)}
            {Array.from({ length: 5 - parseInt(props.rating) }, (v, idx) => <EmptyStar key={'empty-' + idx} />)}
        </div>
    );
};

export default Rating;