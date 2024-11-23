
import React from 'react'
import Headline from './Headline/Headline'
import Footer from './Footer/Footer'
import LogoTicker from './LogoTicker/LogoTicker'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Headline />  
      <LogoTicker />
      <Footer />
    </div>
  )
}

export default Home
