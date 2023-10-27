import React from 'react';
import "./Hero.css";
import { HiSearch, HiLocationMarker } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          <div className="flexCenter search-bar">
            <div className="search-content">
              <HiSearch color="var(--blue)" size={25} />
              <input type="text" />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
