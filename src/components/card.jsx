import React from "react";
import './card.scss';

const Card = ({ img, title, description, link, alt }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img src={img} alt={alt} />
                <div className="card-overlay">
                    <div className="card-text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
