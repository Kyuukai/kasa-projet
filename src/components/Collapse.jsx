import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Collapse = (props) => {

    return (
        <div className='collapse container'>
            <h3 className='collapse__title'>{props.textMessage}</h3>
            <FontAwesomeIcon icon={faAngleDown} className='collapse__icon' />
        </div>
    );
};

export default Collapse;