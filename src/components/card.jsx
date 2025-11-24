import React from "react";
import './card.scss';
import { Link } from 'react-router-dom';



const Card = ({ img, title, description, link, alt }) => {
    return (
        <Link to={link} >
            <div className="card">
                <img src={img} alt={alt} />
                <div className="card-overlay">
                    <div className="card-text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
