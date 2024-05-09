import { useState } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel';
import Tagline from './Component/Tagline';
import Footer from './Component/Footer';
import Box from './Component/Box';
import Blogs from './Component/Blogs';
import Container from './Component/Container';


function App() {
  
  const images = [
   '/Users/pushkardayal/Desktop/HomePage/Pink Ivory/src/assets/download (2).jpeg',
   '/Users/pushkardayal/Desktop/HomePage/Pink Ivory/src/assets/download (3).jpeg',
   '/Users/pushkardayal/Desktop/HomePage/Pink Ivory/src/assets/download.jpeg',
   '/Users/pushkardayal/Desktop/HomePage/Pink Ivory/src/assets/pixel.jpg'
  ];

  return (
    <>
     
    <Navbar/>
    <Carousel images={images} />

    <Tagline/>
    <Container/>
    <Blogs/> 
    <Box/>
    <Footer/>
      
    </>
  )
}

export default App
