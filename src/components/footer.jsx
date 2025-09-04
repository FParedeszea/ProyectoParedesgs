import React, {useState} from "react";
import fb from '../img/facebook.avif'


const footer = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleToggleMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-links">
                        <p>&copy; 2025 Paredes G&S. Todos los derechos reservados.</p>
                        <ul>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Políticas de Privacidad</a></li>
                            <li><a href="#">Libro de Reclamaciones</a></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <a href="#" target="_blank"><img src={fb} alt="Facebook"/></a>
                        <a href="#" target="_blank"><img src="img\instagram.avif" alt="Instagram"/></a>
                        <a href="#" target="_blank"><img src="img\tiktok.avif" alt="Tiktok"/></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;