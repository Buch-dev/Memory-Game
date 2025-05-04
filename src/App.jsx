import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [formData, setFormData] = useState({
    theme: "", // Default to "icons"
    numberOfPlayers: "", // Default to 1 player
    gridSize: "", // Default to 4x4 grid
  });

  const playSound = () => {
    const audio = new Audio('/audio/sound.wav')
    audio.play()
  }

  const handleFormSubmit = (data) => {
    setFormData(data); // Update the form data
    setIsGameOn(true); // Start the game
    playSound()
  };

  const handleRestart = () => {
    setIsGameOn(false); // Go back to the form
    playSound()
  };

  return (
    <main>
      {!isGameOn && <Form handleSubmit={handleFormSubmit} />}
      {isGameOn && (
        <MemoryCard
          handleClick={() => playSound()}
          choice={formData.theme}
          gridSize={formData.gridSize}
          numberOfPlayers={formData.numberOfPlayers}
          handleRestart={handleRestart}
        />
      )}
    </main>
  );
}

export default App;
