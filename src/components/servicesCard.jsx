import React from "react";
import '../css/serviceCard.css'

const ServiceCard = ({ service, onAddToCart}) => {
    return (
        <div className="service-card">
        <img
            src={service.image}
            alt={service.name}
            className="service-card-image"
        />
            <div className="service-card-content">
                <h3 className="service-card-name">{service.name}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-card-actions">
                <span className="service-card-price">
                    ${service.price.toFixed(2)}
                </span>
                <button
                    onClick={() => onAddToCart(service)}
                    className="add-to-cart-button"
                >
                    Añadir al Carrito
                </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;