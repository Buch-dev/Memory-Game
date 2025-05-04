import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faBug,
  faBreadSlice,
  faFaceMeh,
  faFaceGrin,
  faFaceKiss,
  faHandPeace,
  faMask,
  faRobot,
  faFaceDizzy,
  faPoop,
  faAppleWhole,
  faAnchorLock,
  faBaby,
  faBacon,
  faBacteria,
  faBan,
  faBell,
  faCab,
  faCalculator,
  faCake,
  faCalendarDay,
  faCandyCane,
  faDashboard,
  faDatabase,
  faDesktop,
  faDirections,
  faEyeDropper,
} from "@fortawesome/free-solid-svg-icons";
import RegularButton from "./RegularButton";
import "../App.css"; // Import your CSS file
import GameOverModal from "./GameOverModal";
import MenuModal from "./MenuModal";
import TimeMoves from "./TimeMoves";
import PlayerInfo from "./PlayerInfo";
import MultiplayerGameOverModal from "./MultiplayerGameOverModal";

function MemoryCard({
  handleClick,
  choice,
  gridSize,
  numberOfPlayers,
  handleRestart,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState(0); // Timer state in seconds
  const [flippedCards, setFlippedCards] = useState([]); // Track flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // Track matched cards
  const [moves, setMoves] = useState(0); // Track moves
  const [isGameOver, setIsGameOver] = useState(false); // Track game over state
  const [currentPlayer, setCurrentPlayer] = useState(0); // Track the current player's turn
  const [scores, setScores] = useState(
    Array(numberOfPlayers).fill(0) // Initialize scores for all players
  );

  // Sound
  const playSound = () => {
    const audio = new Audio('/audio/sound.wav')
    audio.play()
  }

  // Timer logic
  useEffect(() => {
    let timer;
    if (!isGameOver) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup interval on component unmount or when isGameOver changes
  }, [isGameOver]);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNewGame = () => {
    handleRestart(); // Reset the game
    setIsModalOpen(false); // Close the modal
  };

  // Restart game logic
  const restartGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setScores(Array(numberOfPlayers).fill(0));
    setCurrentPlayer(0);
    setIsGameOver(false);
    setIsModalOpen(false)
  };

  // Array of Font Awesome icons
  const fontAwesomeIcons = [
    faDog,
    faBug,
    faBreadSlice,
    faFaceMeh,
    faFaceGrin,
    faFaceKiss,
    faHandPeace,
    faMask,
    faRobot,
    faFaceDizzy,
    faPoop,
    faAppleWhole,
    faAnchorLock,
    faBaby,
    faBacon,
    faBacteria,
    faBan,
    faBell,
    faCab,
    faCalculator,
    faCake,
    faCalendarDay,
    faCandyCane,
    faDashboard,
    faDatabase,
    faDesktop,
    faDirections,
    faEyeDropper,
  ];

  // Array of numbers
  const numberArray = Array.from({ length: 36 }, (_, i) => i + 1); // [1, 2, 3, ..., 36]

  // Determine the number of unique items based on grid size
  const uniqueItemsCount = gridSize === "4x4" ? 8 : 18;

  // Memoize shuffled items to prevent re-shuffling on every render
  const shuffledItems = useMemo(() => {
    const items =
      choice === "icons"
        ? fontAwesomeIcons
            .sort(() => Math.random() - 0.5)
            .slice(0, uniqueItemsCount)
        : numberArray
            .sort(() => Math.random() - 0.5)
            .slice(0, uniqueItemsCount);

    return [...items, ...items].sort(() => Math.random() - 0.5); // Duplicate and shuffle
  }, [choice, gridSize]);

  // Check if the game is over
  useEffect(() => {
    if (matchedCards.length === shuffledItems.length) {
      setIsGameOver(true); // Set game over state
    }
  }, [matchedCards, shuffledItems]);

  // Handle card click
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) {
      return; // Prevent flipping more than two cards or flipping already matched cards
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prevMoves) => prevMoves + 1); // Increment moves
      const [firstIndex, secondIndex] = newFlippedCards;

      if (shuffledItems[firstIndex] === shuffledItems[secondIndex]) {
        // Cards match
        setMatchedCards((prevMatched) => [
          ...prevMatched,
          firstIndex,
          secondIndex,
        ]);

        // Update the current player's score
        setScores((prevScores) => {
          const newScores = [...prevScores];
          newScores[currentPlayer] += 1;
          return newScores;
        });
      } else {
        // Switch to the next player after a short delay
        setTimeout(() => {
          setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % numberOfPlayers);
        }, 1000);
      }

      // Flip cards back after a short delay if they don't match
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Render memory cards
  const memoryCards = shuffledItems.map((item, index) => (
    <li
      key={index}
      className={`${
        gridSize === "4x4"
          ? "w-[72.53px] h-[72.53px] text-2xl md:w-[118px] md:h-[118px]" // Classes for 4x4 grid
          : "w-[46.876px] h-[46.876px] md:w-[82px] md:h-[82px]" // Classes for 6x6 grid
      } rounded-full flex items-center justify-center bg-[#304859] text-[#FCFCFC] text-[40px] font-bold cursor-pointer hover:bg-[#FDA214] transition duration-300 ease-in-out transform hover:scale-105 ${
        matchedCards.includes(index)
          ? "bg-[#BCCED9]" // Background color for matched cards
          : flippedCards.includes(index)
          ? "bg-[#FDA214]"
          : "bg-[#152938]"
      }`}
      onClick={() => handleCardClick(index)}
    >
      <button className="flex items-center justify-center w-full h-full">
        {/* Render Font Awesome icon or number based on choice */}
        {flippedCards.includes(index) || matchedCards.includes(index) ? (
          choice === "icons" ? (
            <FontAwesomeIcon
              className={`${gridSize === "6x6" ? "text-2xl" : ""}`}
              icon={item}
            />
          ) : (
            <span>{item}</span>
          )
        ) : null}
      </button>
    </li>
  ));

  // Use gridSize to adjust the grid layout
  const gridClass =
    gridSize === "4x4"
      ? "grid-cols-4 gap-[12.29px] md:gap-5 md:max-w-[532px] mx-auto"
      : "grid-cols-6 gap-[9.12px] md:gap-4 md:max-w-[532px] mx-auto";

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="p-6 md:pt-[37px] md:pl-[39px] md:pb-12 md:pr-10">
      {/* Logo and Menu */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#152938] md:text-[40px]">
          memory
        </h2>

        {/* Menu Button for Mobile */}
        <RegularButton
          onClick={handleMenuClick}
          children={"Menu"}
          className={
            "w-[78px] h-10 rounded-[26px] text-base bg-[#FDA214] text-[#FCFCFC] font-bold md:hidden"
          } // Hidden on tablet and larger screens
        />

        {/* Restart and New Game Buttons for Tablet and Larger Screens */}
        <div className="hidden md:flex gap-4">
          <RegularButton
            onClick={restartGame}
            children={"Restart"}
            className={
              "w-[127px] h-[52px] rounded-[26px] text-xl bg-[#FDA214] text-[#FCFCFC] font-bold hover:bg-[#FFB84A]"
            }
          />
          <RegularButton
            onClick={handleNewGame}
            children={"New Game"}
            className={
              "w-[149px] h-[52px] rounded-[26px] text-xl bg-[#DFE7EC] text-[#304859] font-bold hover:bg-[#506D8B] hover:text-[#FCFCFC]"
            }
          />
        </div>
      </div>

      {/* Modal for Game Over */}
      {isGameOver && numberOfPlayers === 1 && (
        <GameOverModal
          formatTime={formatTime}
          time={time}
          moves={moves || 0}
          handleRestart={restartGame}
          handleNewGame={handleNewGame}
        />
      )}
      {isGameOver && numberOfPlayers > 1 && (
        <MultiplayerGameOverModal
          scores={scores}
          handleRestart={restartGame}
          handleNewGame={handleNewGame}
        />
      )}

      {/* Modal */}
      {isModalOpen && (
        <MenuModal
          handleCloseModal={handleCloseModal}
          handleNewGame={handleNewGame}
          handleRestart={restartGame}
        />
      )}

      {/* Memory Game Section */}
      <ul
        className={`grid ${gridClass} justify-items-center mt-20`}
        onClick={handleClick}
      >
        {memoryCards}
      </ul>

      {/* Time and Moves */}
      {numberOfPlayers === 1 && (
        <TimeMoves formatTime={formatTime} time={time} moves={moves} />
      )}

      {/* Player Information */}
      <PlayerInfo
        numberOfPlayers={numberOfPlayers}
        currentPlayer={currentPlayer}
        scores={scores}
      />
    </div>
  );
}

export default MemoryCard;
