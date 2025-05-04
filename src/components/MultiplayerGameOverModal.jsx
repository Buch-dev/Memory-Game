import React from "react";
import RegularButton from "./RegularButton";

function MultiplayerGameOverModal({ scores, handleRestart, handleNewGame }) {
  // Determine the highest score
  const highestScore = Math.max(...scores);

  // Find all players with the highest score
  const winners = scores
    .map((score, index) => ({ player: index + 1, score }))
    .filter((player) => player.score === highestScore);

  // Check if there is a tie
  const isTie = winners.length > 1;

  // Sort players by score in descending order
  const sortedScores = scores
    .map((score, index) => ({ player: index + 1, score }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#F2F2F2] rounded-lg p-6 w-[327px] md:w-[654px] flex flex-col gap-4 text-center md:px-14 md:pt-[51px] md:pb-[69px] md:gap-10 md:rounded-[20px]">
        <div className="flex flex-col gap-[9px] md:gap-4">
          <h2 className="text-2xl font-bold text-[#152938] md:text-5xl">
            {isTie ? "It's a Tie!" : `Player ${winners[0].player} Wins!`}
          </h2>
          <p className="text-sm text-[#7191A5] font-bold md:text-lg">
            Game over! Here are the results…
          </p>
        </div>

        <ul className="text-lg text-[#304859] font-bold flex flex-col gap-2 md:gap-4">
          {sortedScores.map(({ player, score }) => (
            <li
              key={player}
              className={`rounded-[5px] h-12 flex items-center justify-between px-4 py-3 md:h-[72px] md:rounded-[10px] md:px-8 md:py-[15px] ${
                winners.some((w) => w.player === player) ? "bg-[#152938] text-[#FCFCFC]" : "bg-[#DFE7EC]"
              }`}
            >
              <p className="text-[13px] md:text-lg">
                Player {player}{" "}
                {winners.some((w) => w.player === player) ? "(Winner!)" : ""}
              </p>
              <h3 className="text-xl md:text-[32px]">{score} Pairs</h3>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:mt-4 md:gap-3.5">
          <RegularButton
            children={"Restart"}
            className={
              "w-full bg-[#FDA214] text-[#FCFCFC] text-lg font-bold h-12 rounded-[26px] hover:bg-[#FFB84A] md:h-[52px]"
            }
            onClick={handleRestart}
          />
          <RegularButton
            children={"Setup New Game"}
            className={
              "w-full bg-[#DFE7EC] text-[#304859] text-lg font-bold h-12 rounded-[26px] hover:text-[#FCFCFC] hover:bg-[#506D8B] md:h-[52px]"
            }
            onClick={handleNewGame}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiplayerGameOverModal;
