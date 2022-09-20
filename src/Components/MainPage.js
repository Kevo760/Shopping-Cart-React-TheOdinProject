import React from 'react';
import '../Styles/MainPage.css';
import vidBackground from '../Files/vids/bg.mp4'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='main-page'>

      
      <div className='main-box'>

        <span className='main-page-text'>Grab some preworkout and get ENRAGED to destroy your workout!</span>
        
        <Link to='/shop'>
        <button className='shop-btn'>SHOP NOW</button>
        </Link>
        
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