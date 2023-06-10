import React from 'react';

const Card = ({ imageUrl, title, subtitle, buttonLabel, onButtonClick }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="Card" className="card-image" />
            <h2 className="card-title">{title}</h2>
            <h3 className="card-subtitle">{subtitle}</h3>
            <button className="card-button" onClick={onButtonClick}>
                {buttonLabel}
            </button>
        </div>
    );
};

export default Card;
