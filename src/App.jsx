import { useState } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel';
import Tagline from './Component/Tagline';
import Footer from './Component/Footer';
import Box from './Component/Box';
import Blogs from './Component/Blogs';
import Container from './Component/Container';
import Consultation from './Component/Consultation';


function App() {
  
  const images = [
   '/images/pixel.jpg',
   
   '/images/download.jpeg',
   
  ];

  return (
    <>
     
    <Navbar/>
    <Carousel images={images} />

    <Tagline/>
    <Consultation/>
    <Container/>
    <Blogs/> 
    <Box/>
    <Footer/>
      
    </>
  )
}

export default App
