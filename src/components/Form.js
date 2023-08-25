import React, { useState } from "react";

function Form({ addCharacter }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [isSuperhero, setIsSuperhero] = useState(true)
  const [power1, setPower1] = useState("")
  const [power2, setPower2] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCharacter = {
      name: name,
      image: image,
      superhero: isSuperhero,
      power1: power1,
      power2: power2
    }

    addCharacter(newCharacter)

    setName("")
    setImage("")
    setIsSuperhero(true)
    setPower1("")
    setPower2("")
  }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="character-form">
            <h2>Create a new character:</h2>
            <div className="name-container">
                <label>
                    Name:
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                    <label>
                        Image URL:
                        <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
            </div>
            <div >
                <label className="hero-or-villain">
                <input
                    type="radio"
                    value={true}
                    checked={isSuperhero}
                    onChange={() => setIsSuperhero(true)}
                />
                Hero
                </label>
                <label className="hero-or-villain">
                <input
                    type="radio"
                    value={false}
                    checked={!isSuperhero}
                    onChange={() => setIsSuperhero(false)}
                />
                Villain
                </label>
            </div>
            <div className="power-container">
                <label>
                    Power 1:
                    <input
                    type="text"
                    value={power1}
                    onChange={(e) => setPower1(e.target.value)}
                    />
                </label>
                <label>
                    Power 2:
                    <input
                    type="text"
                    value={power2}
                    onChange={(e) => setPower2(e.target.value)}
                    />
                </label>
            <button type="submit">Create Character</button>
            </div>
        </form>
    </div>
  )
}

export default Form;
