import React from "react";
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

function MemoryCard({ handleClick, choice, gridSize, numberOfPlayers, handleRestart }) {
  const [flippedCards, setFlippedCards] = React.useState([]);

  const handleCardClick = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
    handleClick(index);
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
  const numberArray = Array.from({ length: 16 }, (_, i) => i + 1); // [1, 2, 3, ..., 16]

  // Shuffle and pick 8 unique items based on the user's choice
  const shuffledItems =
    choice === "icons"
      ? fontAwesomeIcons.sort(() => Math.random() - 0.5).slice(0, 8)
      : numberArray.sort(() => Math.random() - 0.5).slice(0, 8);

  // Duplicate the items and shuffle again for the memory game
  const memoryItems = [...shuffledItems, ...shuffledItems].sort(
    () => Math.random() - 0.5
  );

  // Render memory cards
  const memoryCards = memoryItems.map((item, index) => (
    <li
      key={index}
      className="w-[72.53px] h-[72.53px] rounded-full flex items-center justify-center text-2xl bg-[#BCCED9] text-[#FCFCFC] text-[40px] font-bold cursor-pointer hover:bg-[#FDA214] transition duration-300 ease-in-out transform hover:scale-105"
    >
      <button>
        {choice === "icons" ? (
          <FontAwesomeIcon icon={item} />
        ) : (
          <span>{item}</span>
        )}
      </button>
    </li>
  ));

  // Use gridSize and choice to adjust the game logic
  const gridClass = gridSize === "4x4" ? "grid-cols-4" : "grid-cols-6";

  return (
    <div className="p-6">
      {/* Logo and Menu */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#152938]">memory</h2>
        <RegularButton
          children={"Menu"}
          className={
            "w-[78px] h-10 rounded-[26px] text-base bg-[#FDA214] text-[#FCFCFC] font-bold"
          }
        />
      </div>
      <button onClick={handleRestart}>Restart</button>
      {/* Memory Game Section */}
      <ul
        className={`grid ${gridClass} gap-[12.29px] justify-items-center mt-20`}
        onClick={handleClick}
      >
        {memoryCards}
      </ul>

      {/* Time and Moves */}
      <div className="flex items-center justify-between mt-[102px]">
        <div className="flex flex-col items-center justify-center w-[151px] h-[70px] rounded-[5px] bg-[#DFE7EC]">
          <label
            htmlFor="time"
            className="text-[15px] text-[#7191A5] font-bold"
          >
            Time
          </label>
          <h3 id="time" className="text-2xl text-[#304859] font-bold">
            1:53
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[151px] h-[70px] rounded-[5px] bg-[#DFE7EC]">
          <label
            htmlFor="time"
            className="text-[15px] text-[#7191A5] font-bold"
          >
            Moves
          </label>
          <h3 id="time" className="text-2xl text-[#304859] font-bold">
            39
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;
