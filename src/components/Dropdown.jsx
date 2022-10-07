import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dropdown = () => {

    return (
        <div className='dropdown'>
            <h3 className='dropdown__title'>Fiabilité</h3>
            <span className='dropdown__arrow'>A</span><FontAwesomeIcon icon="fa-regular fa-angle-down" />
        </div>
    );
};

export default Dropdown;