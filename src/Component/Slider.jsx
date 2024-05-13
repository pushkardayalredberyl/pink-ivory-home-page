import React, { useState, useEffect } from 'react';
import style from './Slider.module.css'; // Import CSS for styling

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 5; // Number of slides to show at once

    // Array of company logos
    const slides = [
        "https://pinkivory.com/wp-content/uploads/2023/05/download-removebg-preview.png",
        "https://pinkivory.com/wp-content/uploads/2023/05/Logo_3-removebg-preview-1.png",
        "https://pinkivory.com/wp-content/uploads/2023/05/1519908188305-removebg-preview.png",
        "https://pinkivory.com/wp-content/uploads/2023/05/sobha-developers-logo-A13E8BA5BA-seeklogo.com__1_-removebg-preview.png",
        "https://pinkivory.com/wp-content/uploads/2023/06/WhatsApp_Image_2023-06-01_at_5.03.44_PM-removebg-preview.png",
        "https://pinkivory.com/wp-content/uploads/2023/06/WhatsApp_Image_2023-06-01_at_5.03.31_PM-removebg-preview.png"
    ];

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className={style['slider']}>
            {slides.map((slide, index) => (
                <div key={index} className={index >= currentSlide && index < currentSlide + slidesToShow ? 'slide active' : 'slide'}>
                    <img className="company-slide" src={slide} alt={`Company ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
