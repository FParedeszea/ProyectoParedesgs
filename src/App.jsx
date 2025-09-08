import React from 'react';
import Header from './components/Header.jsx'; // Header
import Footer from './components/Footer.jsx'; // Footer
import Hero from './components/Hero.jsx'; // Hero
import ContactForm from './components/ContactForm.jsx';// ContactForm
import ContentColums from './components/ContentColums.jsx';// ContentColums

const App = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero/>
        <ContentColums/>
        <ContactForm/>
    </main>
    <Footer/>
    </>
  )
}



export default App;





