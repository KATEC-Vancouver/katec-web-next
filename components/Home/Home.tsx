'use client';
import React, { use, useEffect } from 'react'
import Headline from './Headline/Headline'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      });
    };
    initAos();
  }, []);

        

  return (
    <div className='overflow-hidden'>
      <Headline />  
    </div>
  )
}

export default Home
