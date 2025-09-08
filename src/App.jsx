import React from 'react';
import Header from './components/header'; // Header
import Footer from './components/footer'; // Footer
import Hero from './components/hero'; // Hero
import ContactForm from './components/contactForm';// ContactForm
import ContentColums from './components/contentColums';// ContentColums

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





