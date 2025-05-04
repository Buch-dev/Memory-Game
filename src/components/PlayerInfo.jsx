import React from "react";

function PlayerInfo({ numberOfPlayers, currentPlayer, scores }) {
  return (
    <div>
      {numberOfPlayers !== 1 && (
        <div className="flex gap-6 justify-between items-center mt-[102px]">
          {Array.from({ length: numberOfPlayers }).map((_, index) => (
            <div
              key={index}
              className={`relative rounded-[5px] w-full h-[70px] py-2.5 px-3.5 justify-center flex flex-col items-center gap-0.5 ${
                currentPlayer === index ? "bg-[#FDA214]" : "bg-[#BCCED9]"
              }`}
            >
              {/* Arrow for the current player */}
              {currentPlayer === index && (
                <div className="absolute -top-[10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#FDA214]"></div>
              )}

              <h3
                className={`text-[15px] font-bold ${
                  currentPlayer === index ? "text-[#FCFCFC]" : "text-[#7191A5]"
                }`}
              >
                P{index + 1}
              </h3>
              <p
                className={`text-2xl font-bold text-[#304859] ${
                  currentPlayer === index ? "text-[#FCFCFC]" : "text-[#7191A5]"
                }`}
              >
                {scores[index]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayerInfo;
