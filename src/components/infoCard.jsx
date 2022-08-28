import React from 'react';

const InfoCard = ({logo, heading, body}) => {
    return (
        <div className={'card'}>
            <div className={'card__logo'}>
                {logo}
            </div>
            <h3>{heading}</h3>
            <p>{body}</p>
        </div>
    );
};

export default InfoCard;