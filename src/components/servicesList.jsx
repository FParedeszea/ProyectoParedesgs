import React from "react";
import ServiceCard from "./servicesCard";
import { services } from "../data/services"
import '../css/serviceList.css'

const ServicesList = ({ onAddToCart }) => {
    return (
         <div className="service-list-container">
            <h2 className="services-heading">Nuestros Servicios</h2>
            <div className="services-grid">
                {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onAddToCart={onAddToCart}
                />
                ))}
            </div>
        </div>
    );
}

export default ServicesList;