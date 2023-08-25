import React from 'react';
import HeroCard from './HeroCard';

function HeroList({ characters, setFeaturedHero }) {
  return (
    <div className="hero-nav">
      {characters.map(hero => (
        <HeroCard
          key={hero.id}
          hero={hero}
          setFeaturedHero={setFeaturedHero}
        />
      ))}
    </div>
  );
}

export default HeroList;
