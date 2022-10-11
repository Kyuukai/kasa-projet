import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const AccommodationCollapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='accommodationCollapse'>
            <button className='accommodationCollapse__button' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='accommodationCollapse__title'>{props.title}</h3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='accommodationCollapse__icon' />
            </button>
            <div className='accommodationCollapse__content' style={isOpen === true ? { height: "auto", backgroundColor: "#F6F6F6" } : { height: "0px", padding: "0px" }}>
                {props.content}
            </div>
        </div >
    )
};

export default AccommodationCollapse;