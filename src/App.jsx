import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [formData, setFormData] = useState({
    theme: "icons", // Default to "icons"
    numberOfPlayers: 1, // Default to 1 player
    gridSize: "4x4", // Default to 4x4 grid
  });

  const handleFormSubmit = (data) => {
    setFormData(data); // Update the form data
    setIsGameOn(true); // Start the game
  };

  const handleRestart = () => {
    setIsGameOn(false); // Go back to the form
  };

  return (
    <main>
      {!isGameOn && <Form handleSubmit={handleFormSubmit} />}
      {isGameOn && (
        <MemoryCard
          handleClick={() => console.log("Card clicked")}
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
