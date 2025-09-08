import React, {useState} from "react";

const contentColums = () => {
    return(
        <section className="content-columns" id="sobre-nosotros">
            <div className="nosotros">
                <div className="quienessomos">
                    <h4>QUIENES SOMOS</h4>
                    <p>PAREDES G&S empresa dedicada a los servicios generales cuyo objetivo es solucionar las necesidades de nuestros clientes, nos caracterizamos por brindar servicios personalizados, de primera calidad y precios competitivos.

    ​

    Nuestro equipo de profesionales de alto nivel cuenta con el respaldo y la experiencia necesaria para asesorarte y resolver todo aquello que tus espacios necesiten.</p>
                </div>   
                <div className="misionyvision">
                    <div className="mision">
                        <h3>Misión</h3>
                        <p>Brindar servicios generales de alta calidad para proteger, mantener y optimizar cada espacio de nuestros clientes, garantizando tranquilidad y confianza los 365 días del año.</p>
                    </div>
                    <div className="Visión">
                        <h3>Visión</h3>
                        <p>Ser la empresa líder en servicios generales en el país, reconocidos por nuestra calidad, eficiencia y compromiso en el cuidado integral de hogares, empresas e instituciones.</p>
                    </div>
                </div>
            </div>
            <div className="category-menu">
                <h4>SERVICIOS POR CATEGORIA</h4>
                <ul>
                    <li><a href="#servicios-domesticos">Servicios Domesticos</a></li>
                    <li><a href="#servicios-de-seguridad">Servicios de Seguridad</a></li>
                    <li><a href="#servicios-de-acabados">Servicios de Acabados</a></li>
                    <li><a href="#servicios-plus">Servicios Plus</a></li>
                </ul>
            </div>
        </section>
    );
};

export default contentColums;