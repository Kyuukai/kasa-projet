import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button className='collapse container' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='collapse__title'>{props.title}</h3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='collapse__icon' />
            </button>
            <div className='collapse__content'>
                {props.content}
            </div>
        </div>
    )
}

export default Collapse;