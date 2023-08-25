import React from 'react';

function HeroDisplay({ featuredHero }) {
  return (
    <div className="hero-display">
      <h2>{featuredHero.name}</h2>
      <img src={featuredHero.image} alt={featuredHero.name} />
      <h2>{featuredHero.power1}</h2>
      <h2>{featuredHero.power2}</h2>
    </div>
  );
}

export default HeroDisplay;
