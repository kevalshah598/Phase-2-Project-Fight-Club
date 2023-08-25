import React from "react"

function VillainCard({villain, setFeaturedVillain}) {
    return (
      <img src={villain.image} alt={villain.name} onClick={()=> setFeaturedVillain(villain)}/>
    )
  }
  
export default VillainCard
