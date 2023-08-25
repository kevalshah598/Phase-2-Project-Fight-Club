import React from 'react';

function VillainDisplay({ featuredVillain }) {
  return (
    <div className="villain-display">
      <h2>{featuredVillain.name}</h2>
      <img src={featuredVillain.image} alt={featuredVillain.name} />
      <h2>{featuredVillain.power1}</h2>
      <h2>{featuredVillain.power2}</h2>
    </div>
  );
}

export default VillainDisplay;
