import React from 'react';
import "./Hero.scss";
import heroImage from '../../assets/images/hero-image.png';

export default function Hero() { 
  return ( 
    <div className='hero'>
      <img className='hero__img' src={heroImage} />
      <div className='hero__header'>
        <h1 className='hero__header1'>Special Fresh Meat For You</h1>
        <p className='hero__title'>Featuring 100% Grass-Fed Beef, Free-Range Organic Chicken, Pork Raised</p>
      </div>
    </div>
  )
}