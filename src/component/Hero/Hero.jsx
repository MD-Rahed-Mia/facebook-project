import React from 'react'
import HeroIcon from './../../assets/hero.png';


import "./Hero.scss"


export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-img">
        <img src={HeroIcon} alt="hero img" />
      </div>
      <div className="hero-title">
        <h1>One <span>Way</span>, One <span>Stop</span>, One <span>Solution</span></h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis numquam qui impedit reiciendis officiis ut cum possimus ea inventore.</p>
        
      </div>
    </div>
  )
}
