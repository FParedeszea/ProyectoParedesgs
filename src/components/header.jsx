import React, {useState} from "react";
import logo from '../img/logo2.jpg';

const header = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleToggleMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return (
        <>
        <header>
            <div className ="container">
                <div className ="logo">
                    <img src={logo} alt="Paredes G&S Logo"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                        <li><a href="servicios.html">Nuestros Servicios</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <h1>hola</h1>
        </header>
        </>
    )
}

export default header;