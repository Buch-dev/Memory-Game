import React from "react";
import RegularButton from "./RegularButton";

function GameOverModal({
  formatTime,
  time,
  moves,
  handleRestart,
  handleNewGame,
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#F2F2F2] rounded-lg px-6 pb-6 pt-8 w-[327px] flex flex-col text-center">
        <h2 className="text-2xl font-bold text-[#152938]">You did it!</h2>
        <p className="text-sm font-bold text-[#7191A5] mt-[9px]">
          Game over! Here’s how you got on…
        </p>
        <div className="bg-[#DFE7EC] flex items-center justify-between p-4 w-full rounded-[5px] mt-6">
          <p className="text-[13px] font-bold text-[#7191A5]">Time Elapsed:</p>
          <h3 className="font-bold text-[20px] text-[#304859]">
            {formatTime(time)}
          </h3>
        </div>
        <div className="bg-[#DFE7EC] flex items-center justify-between p-4 w-full rounded-[5px] mt-2">
          <p className="text-[13px] font-bold text-[#7191A5]">Moves Taken:</p>
          <h3 className="font-bold text-[20px] text-[#304859]">{moves || 0} Moves</h3>
        </div>
        <RegularButton
          children={"Restart"}
          className={
            "w-full bg-[#FDA214] mt-6 text-[#FCFCFC] text-lg font-bold h-12 rounded-[26px] hover:bg-[#FFB84A]"
          }
          onClick={handleRestart}
        />
        <RegularButton
          children={"Setup New Game"}
          className={
            "w-full bg-[#DFE7EC] text-[#304859] mt-4 text-lg font-bold h-12 rounded-[26px] hover:text-[#FCFCFC] hover:bg-[#506D8B]"
          }
          onClick={handleNewGame}
        />
      </div>
    </div>
  );
}

export default GameOverModal;
