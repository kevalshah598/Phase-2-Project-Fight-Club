import React from 'react';
import VillainCard from './VillainCard';

function VillainList({ characters, setFeaturedVillain }) {
  return (
    <div className="villain-nav">
      {characters.map(villain => (
        <VillainCard
          key={villain.id}
          villain={villain}
          setFeaturedVillain={setFeaturedVillain}
        />
      ))}
    </div>
  );
}

export default VillainList;
