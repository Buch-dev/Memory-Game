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
      <div className="bg-[#F2F2F2] rounded-lg px-6 pb-6 pt-8 w-[327px] flex flex-col text-center md:w-[654px] md:px-14 md:pt-[51px] md:pb-[69px]">
        <h2 className="text-2xl font-bold text-[#152938] md:text-5xl">You did it!</h2>
        <p className="text-sm font-bold text-[#7191A5] mt-[9px] md:mt-4 md:text-lg">
          Game over! Here’s how you got on…
        </p>
        <div className="bg-[#DFE7EC] flex items-center justify-between p-4 w-full rounded-[5px] mt-6 md:mt-10 md:rounded-[10px] md:px-8">
          <p className="text-[13px] font-bold text-[#7191A5] md:text-[18px]">Time Elapsed</p>
          <h3 className="font-bold text-[20px] text-[#304859] md:text-[32px]">
            {formatTime(time)}
          </h3>
        </div>
        <div className="bg-[#DFE7EC] flex items-center justify-between p-4 w-full rounded-[5px] mt-2 md:mt-4 md:rounded-[10px] md:px-8">
          <p className="text-[13px] font-bold text-[#7191A5] md:text-[18px]">Moves Taken</p>
          <h3 className="font-bold text-[20px] text-[#304859] md:text-[32px]">{moves || 0} Moves</h3>
        </div>
        <div className="flex flex-col gap-4 mt-6 md:flex-row md:mt-10 md:gap-3.5">
        <RegularButton
          children={"Restart"}
          className={
            "w-full bg-[#FDA214] text-[#FCFCFC] text-lg font-bold h-12 rounded-[26px] hover:bg-[#FFB84A] md:h-[52px] md:text-xl"
          }
          onClick={handleRestart}
        />
        <RegularButton
          children={"Setup New Game"}
          className={
            "w-full bg-[#DFE7EC] text-[#304859] text-lg font-bold h-12 rounded-[26px] hover:text-[#FCFCFC] hover:bg-[#506D8B] md:h-[52px] md:text-xl"
          }
          onClick={handleNewGame}
        />
        </div>
        
      </div>
    </div>
  );
}

export default GameOverModal;
