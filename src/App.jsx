import { useState } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel';
import Tagline from './Component/Tagline';
import Footer from './Component/Footer';
import Box from './Component/Box';
import Blogs from './Component/Blogs';
import Container from './Component/Container';
import Consultation from './Component/Consultation';
import Design from './Component/Design';
import Slider from './Component/Slider';
import Projects from './Component/Projects';
import Percentage from './Component/Percentage';


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
    <Design/>
    <Slider/>
    <Projects/>
    <Consultation/>
    <Percentage/>
    
    
    
    <Footer/>
      
    </>
  )
}

export default App
