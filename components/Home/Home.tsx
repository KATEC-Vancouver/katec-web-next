'use client';
import React, { use, useEffect } from 'react'
import Headline from './Headline/Headline'
import Footer from './Footer/Footer'
import LogoTicker from './LogoTicker/LogoTicker'
import Worldmap from './Worldmap/Worldmap'
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
      <Worldmap />
      <LogoTicker />
    </div>
  )
}

export default Home
