import React from 'react';

const Banner = (props) => {
    return (
        <div className='banner-homepage container'>
            <img src={props.imgUrl} alt="Bannière du Site" />
            <h3>{props.textMessage}</h3>
        </div>
    );
};

export default Banner;