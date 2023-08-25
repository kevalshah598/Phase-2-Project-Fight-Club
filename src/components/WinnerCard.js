import React, { useState } from 'react';

function WinnerCard({ hero, villain, handleAudio }) {
  const [fightResult, setFightResult] = useState(null)
  const [showWinner, setShowWinner] = useState(false)

  const handleFightClick = () => {
    const heroRandomNumber = Math.floor(Math.random() * 11)
    const villainRandomNumber = Math.floor(Math.random() * 11)
    handleAudio()

    if (heroRandomNumber > villainRandomNumber) {
      setFightResult(hero.name)
    } else if (villainRandomNumber > heroRandomNumber) {
      setFightResult(villain.name)
    }

    setTimeout(() => {
      setShowWinner(true)
    }, 3000)
  }

  const heroWins = (featuredHero) => (
    <div className="hero-display">
      <img src={featuredHero.image} alt={featuredHero.name} />
    </div>
  )

  const villainWins = (featuredVillain) => (
    <div className="villain-display">
      <img src={featuredVillain.image} alt={featuredVillain.name} />
    </div>
  );

  return (
    <div className="winner-card">
      {fightResult && showWinner ? (  
        <div className="reset-button">
          <h2>{fightResult} wins!</h2>
          {fightResult === hero.name ? heroWins(hero) : villainWins(villain)}
          <button className="button-56" onClick={() => { setFightResult(null); setShowWinner(false) }}>Reset</button>
        </div>
      ) : (
        <div className="button-container">
          <h2>Let the battle begin!</h2>
          <button className="button-56" onClick={handleFightClick}>Fight</button>
        </div>
      )}
    </div>
  );
}
export default WinnerCard;
