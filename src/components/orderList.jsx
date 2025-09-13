import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../css/orderList.css';

const OrderList = ({ orderItems, onClearOrder }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSendOrder = async () => {
    // Si el carrito está vacío, no se puede enviar
    if (orderItems.length === 0) {
      setMessage('El pedido está vacío.');
      return;
    }

    // Si no se ha ingresado un número de mesa, se lo pide al usuario
    if (!tableNumber) {
      setMessage('Por favor, ingresa un número de mesa.');
      return;
    }

    // Se establece el estado de envío y se muestra un mensaje
    setIsSending(true);
    setMessage('Enviando pedido...');

    // Se prepara el objeto con los datos del pedido
    const orderData = {
      table: tableNumber,
      items: orderItems,
      total: calculateTotal(),
      status: 'Pendiente',
      // Aquí se podrían agregar más datos, como la fecha y hora
    };

    try {
      // Se añade el documento a la colección 'ordenes' en Firestore
      await addDoc(collection(db, 'ordenes'), orderData);
      setMessage('¡Pedido enviado con éxito!');
      onClearOrder(); // Limpia el pedido después de enviarlo
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      setMessage('Hubo un error al enviar el pedido. Inténtalo de nuevo.');
    } finally {
      setIsSending(false); // Restaura el estado de envío
    }
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Tu Pedido</h2>
      
      {/* Input para el número de mesa */}
      <input 
        type="text" 
        placeholder="Número de mesa"
        value={tableNumber} 
        onChange={(e) => setTableNumber(e.target.value)} 
        className="table-input"
      />

      {/* Lista de productos en el pedido */}
      <ul className="order-list">
        {orderItems.map((item) => (
          <li key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      
      {/* Muestra el total del pedido si hay productos */}
      {orderItems.length > 0 && (
        <div className="order-total">
          <strong>Total: ${calculateTotal()}</strong>
        </div>
      )}

      {/* Botón para enviar el pedido */}
      <button 
        onClick={handleSendOrder} 
        disabled={isSending} 
        className="send-order-button"
      >
        {isSending ? 'Enviando...' : 'Enviar Pedido'}
      </button>

      {/* Mensaje de estado */}
      {message && <p className="order-message">{message}</p>}
    </div>
  );
};

export default OrderList;