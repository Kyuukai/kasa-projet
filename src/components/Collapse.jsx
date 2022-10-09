import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse container'>
            <button className='collapse__button' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='collapse__title'>{props.title}</h3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='collapse__icon' />
            </button>
            <div className='collapse__content' style={isOpen == true ? { height: "auto", backgroundColor: "#F6F6F6" } : { height: "0px" }}>
                {props.content}
            </div>
        </div >
    )
}

export default Collapse;