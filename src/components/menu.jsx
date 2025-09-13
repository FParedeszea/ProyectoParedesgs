import React from 'react';
import { catalogo } from '../data/catalogo';
import '../css/menu.css';

const Menu = ({ onSelectProduct }) => {
  return (
    <div className="menu-container">
      <h2 className="menu-heading">Menú</h2>
      <div className="menu-grid">
        {catalogo.map((catalog) => (
          <div key={catalog.id} className="menu-item" onClick={() => onSelectProduct(catalog)}>
            <img src={catalog.image} alt={catalog.name} className="menu-item-image" />
            <h3 className="menu-item-name">{catalog.name}</h3>
            <span className="menu-item-price">${catalog.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;