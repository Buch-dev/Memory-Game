import React from "react";

function TimeMoves({ formatTime, time, moves }) {
  return (
    <div className="flex items-center justify-between mt-[102px] max-w-[540px] mx-auto">
      <div className="flex flex-col items-center justify-center w-[151px] h-[70px] rounded-[5px] bg-[#DFE7EC] md:flex-row md:w-[255px] md:rounded-[10px] md:justify-between md:p-5">
        <label
          htmlFor="time"
          className="text-[15px] text-[#7191A5] font-bold md:text-lg"
        >
          Time
        </label>
        <h3
          id="time"
          className="text-2xl text-[#304859] font-bold md:text-[32px]"
        >
          {formatTime(time)}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center w-[151px] h-[70px] rounded-[5px] bg-[#DFE7EC] md:flex-row md:w-[255px] md:rounded-[10px] md:justify-between md:p-5">
        <label
          htmlFor="moves"
          className="text-[15px] text-[#7191A5] font-bold md:text-lg"
        >
          {moves === 1 ? "Move" : "Moves"}
        </label>
        <h3
          id="moves"
          className="text-2xl text-[#304859] font-bold md:text-[32px]"
        >
          {moves}
        </h3>
      </div>
    </div>
  );
}

export default TimeMoves;
