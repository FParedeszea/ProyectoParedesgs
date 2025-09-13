import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import '../css/realTimeOrders.css';

const RealTimeOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Crea una consulta a la colección 'orders' y las ordena por el campo 'timestamp'
    const q = query(collection(db, 'ordenes'), orderBy('timestamp', 'desc'));

    // Configura un listener en tiempo real con onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const liveOrders = [];
      querySnapshot.forEach((doc) => {
        liveOrders.push({ id: doc.id, ...doc.data() });
      });
      setOrders(liveOrders);
    });

    // Esta función de retorno se ejecuta cuando el componente se desmonta
    // para detener el listener y evitar fugas de memoria
    return () => unsubscribe();
  }, []); // El array vacío asegura que el useEffect se ejecute solo una vez al montar el componente

  return (
    <div className="realtime-orders-container">
      <h2 className="realtime-orders-heading">Pedidos en Tiempo Real</h2>
      <div className="orders-grid">
        {orders.length === 0 ? (
          <p className="no-orders-message">No hay pedidos pendientes.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <h3 className="order-card-title">Mesa {order.table}</h3>
              <ul className="order-card-items">
                {order.items.map((item, index) => (
                  <li key={index} className="order-card-item">
                    {item.name}
                  </li>
                ))}
              </ul>
              <p className="order-card-total">Total: ${order.total}</p>
              <span className="order-card-status">{order.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RealTimeOrders;