import React, { useState } from 'react';
import logo from '../img/logo2.jpg';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import '../css/header.css'
 


const header = ({ onNavigateToStore, onNavigateToHome, cartCount}) => {
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
                            <li><a href="#" onClick={onNavigateToHome}>Inicio</a></li>
                            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                            <li><a href="#" onClick={onNavigateToStore}>Nuestros Servicios</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className="cart-icon-container" onClick={onNavigateToStore}>
                        <ShoppingCartIcon className="cart-icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </div>
                    <button className="menu-toggle" aria-label="Abrir menú" onClick={handleToggleMenu}>☰</button>
                </div>
            </header>
            <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
                <nav onClick={handleToggleMenu}>
                    <ul>
                        <li><a href="#" onClick={onNavigateToHome}>Inicio</a></li>
                        <li><a href="#" onClick={onNavigateToStore}>Servicios</a></li>
                        <li><a href="#noticias">Noticias</a></li>
                        <li><a href="#nosotros">Sobre Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default header;