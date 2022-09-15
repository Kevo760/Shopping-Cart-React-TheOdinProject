import React from 'react';
import '../Styles/MainPage.css';
import vidBackground from '../Files/vids/bg.mp4'

function Main() {
  return (
    <div className='main-page'>

      
      <div className='main-box'>
        <span className='main-page-text'>Grab some preworkout and get ENRAGED to destroy your workout!</span>
        <button className='shop-btn'>SHOP NOW</button>
      </div>

      <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      src={vidBackground}
      id='vid-background'
      >

      </video>
    </div>
  )
}

export default Main