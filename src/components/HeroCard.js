import React from "react"

function HeroCard({hero, setFeaturedHero}) {
    return (
      <img src={hero.image} alt={hero.name} onClick={()=> setFeaturedHero(hero)}/>
    )
  }
  
export default HeroCard
