import React, { useState, useEffect } from 'react';
import HeroDisplay from './HeroDisplay';
import VillainDisplay from './VillainDisplay';
import HeroList from './HeroList';
import VillainList from './VillainList'; 
import WinnerCard from './WinnerCard';
import Form from './Form';
import Header from './Header';
import { Outlet } from 'react-router-dom';


function App() {
  const [characters, setCharacters] = useState([])
  const [featuredHero, setFeaturedHero] = useState({})
  const [featuredVillain, setFeaturedVillain] = useState({})
  const [heroRandomNumber, setHeroRandomNumber] = useState(0)
  const [villainRandomNumber, setVillainRandomNumber] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then(res => res.json())
      .then(characters => setCharacters(characters))
  }, [])

  const heroCharacters = characters.filter(character => character.superhero)
  const villainCharacters = characters.filter(character => !character.superhero)

  const addCharacter = (newCharacter) => {
    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, data])
      })
      .catch((error) => {
        console.error("Error adding character:", error)
      })
  }

  function handleAudio(){
    const audioElement = new Audio ("http://localhost:3000/assets/mortal-kombat-9-sound-drop-round-1-fight.mp3")
    audioElement.play()
  }
  
  return (
    <div>
      <Header/>
      <div className="appDiv">
        <HeroList characters={heroCharacters} setFeaturedHero={setFeaturedHero} />
        <HeroDisplay featuredHero={featuredHero} setHeroRandomNumber={setHeroRandomNumber}/>
        <WinnerCard heroNumber={heroRandomNumber} villainNumber={villainRandomNumber} hero={featuredHero} villain={featuredVillain} handleAudio={handleAudio}/>
        <VillainDisplay featuredVillain={featuredVillain} setVillainRandomNumber={setVillainRandomNumber}/>
        <VillainList characters={villainCharacters} setFeaturedVillain={setFeaturedVillain} />
      </div>
        <Form addCharacter={addCharacter}/>
        <Outlet/>
    </div>
  )
}

export default App;