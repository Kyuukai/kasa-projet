import React from 'react';

const Tag = (props) => {

    return (
        <div>
            <div className='tag'>
                <div className='tag__title'>{props.tag}</div>
            </div>
        </div>
    );
};

export default Tag;