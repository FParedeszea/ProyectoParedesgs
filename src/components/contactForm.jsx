import React, {useState} from "react";

const contactForm = () => {

    const [ formData, setFormData ] = useState({
        nombre: '',
        telefono: '',
        email: '',
        servicio: '',
        fecha: '',
        hora: '',
        comentarios: '',
    });

    const [ message, setMessage ] = useState('');
    const [ isError, setIsError] = useState(false);

    
    const handleChange =(e) => {
       const { name, value } = e.target;
       setFormData(prevData => ({ ...prevData, [name]: value}));
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        let isValid = true;
        let messages = [];

        //Validacion del nombre
        if (formData.nombre.trim() === '') {
            isValid = false;
            messages.push('El nombre completo es obligatorio.');
            nombreInput.classList.add('error');
        }

        const phoneNumber = formData.telefono.replace(/\D/g, '');
        if (phoneNumber.length < 9) {
            isValid = false;
            messages.push('El número celular debe tener al menos 9 dígitos.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            isValid = false;
            messages.push('Por favor, ingresa un correo electrónico válido.');
        }

         if (isValid) {
            setIsError(false);
            setMessage('¡Formulario enviado con éxito! Te contactaremos pronto.');
            setFormData({
                nombre: '',
                telefono: '',
                email: '',
                servicio: '',
                fecha: '',
                hora: '',
                comentarios: '',
            });
        } else {
            setIsError(true);
            setMessage(messages.join('<br>'));
        }


    }

    return(
        <>
           <section id="contacto" className="contact-form-section">
                <div className="container">
                    <h2>Contáctanos para tu Servicio</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombres y Apellidos:</label>
                            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="servicio">Tipo de Servicio:</label>
                            <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange} required>
                                <option value="">Seleccione un servicio</option>
                                <option value="cerrajeria">Cerrajería</option>
                                <option value="albanileria">Albañilería</option>
                                <option value="gasfiteria">Gasfitería</option>
                                <option value="electricista">Electricista</option>
                                <option value="pintura">Pintura</option>
                                <option value="limpieza">Limpieza a Domicilio</option>
                                <option value="consultas-medicas">Consultas Médicas Online</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hora">Hora:</label>
                            <input type="time" id="hora" name="hora" value={formData.hora} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comentarios">Comentarios:</label>
                            <textarea id="comentarios" name="comentarios" rows="5" value={formData.comentarios} onChange={handleChange} ></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <p className="form-message" dangerouslySetInnerHTML={{ __html: message }} style={{ color: isError ? 'red' : 'green' }}></p>
                </div>
            </section>
        </>
    );
};

export default contactForm;