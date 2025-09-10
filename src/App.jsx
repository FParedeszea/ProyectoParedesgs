import React, {useState} from 'react';
import Header from './components/header'; // Header
import Footer from './components/footer'; // Footer
import Hero from './components/hero'; // Hero
import ContactForm from './components/contactForm';// ContactForm
import ContentColums from './components/contentColums';// ContentColums

//Nuevos componentes de los servicios
import ServicesList from './components/servicesList';
import Cart from './components/cart';

const App = () => {
  //validacion de la pagina en uso 
  const [isStorePage, setIsStorePage] = useState(false);

  //Estado para guardar los items en el carrito
  const [cartItems, setCartItems] = useState([]);

  //Funcion que añade elementos al carrito 
  const handleAddToCart = (service) => {
    setCartItems ((prevItems) => [...prevItems, service]);
  }

  //Funcion que remueve elementos adel carrito 
  const handleRemoveToCart = (serviceId) => {
    setCartItems ((prevItems) => prevItems.filter(item => item.id !== serviceId));
  }

  //Validador para moverse de pagina en pagina
  const handleNavigateToStore = () => {
    setIsStorePage(true);
  }

  //Validador para moverse de pagina en pagina
  const handleNavigateToHome = () => {
    setIsStorePage(false);
  }

  return (
    <>
      <Header onNavigateToStore={handleNavigateToStore} onNavigateToHome={handleNavigateToHome} cartCount={cartItems.length}/>
      <main>
          {isStorePage ?(
            <>
              <ServicesList onAddToCart={handleAddToCart}/>
              <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveToCart}/>
            </>
          ) : (
            <>
              <Hero/>
              <ContentColums/>
              <ContactForm/>
            </>
          )}
      </main>
      <Footer/>
    </>
  )
}



export default App;





