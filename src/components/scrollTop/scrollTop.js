import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import './scroll.css'; // Import your CSS file for styling (if needed)

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to certain point
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      {isVisible && (
        <Fab color="black" onClick={scrollToTop} aria-label="scroll-to-top">
          <ChevronUpIcon  sx={{color : "white"}}/>
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTopButton;
