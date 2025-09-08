import React from 'react';
import Header from './components/Header'; // Header
import Footer from './components/Footer'; // Footer
import Hero from './components/Hero'; // Hero
import ContactForm from './components/ContactForm';// ContactForm
import ContentColums from './components/ContentColums';// ContentColums

const App = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero/>
        <ContactForm/>
        <ContentColums/>
    </main>
    <Footer/>
    </>
  )
}



export default App;





