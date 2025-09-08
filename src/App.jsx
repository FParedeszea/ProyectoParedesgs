import React from 'react';
import header from './components/header'; // Header
import Footer from './components/Footer'; // Footer
import Hero from './components/Hero'; // Hero
import ContactForm from './components/ContactForm';// ContactForm
import ContentColums from './components/ContentColums';// ContentColums

const App = () => {
  return (
    <>
    <header/>
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





