import React from 'react';

const Thumbnail = ({imgSrc,classes}) => {
    return (

        <figure className={classes}>
            <img src={imgSrc} alt="Miel"/>
        </figure>
    );
};

export default Thumbnail;