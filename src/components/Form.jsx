import React, { useState } from "react";
import RegularButton from "./RegularButton";

function Form({ handleSubmit }) {
  const [theme, setTheme] = useState("icons");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gridSize, setGridSize] = useState("4x4");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ theme, numberOfPlayers, gridSize });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#152938] pt-20 px-6 pb-[116px] flex flex-col items-center gap-[45px] md:pt-[169px] md:px-[57px] md:pb-[168px] md:gap-[78px] lg:pt-[154px] lg:pb-[183px]"
    >
      <h2 className="text-[#FCFCFC] text-[32px] font-bold md:text-[40px]">
        memory
      </h2>
      <div className="bg-[#FCFCFC] rounded-[10px] w-full max-w-[654px] p-6 md:rounded-[20px] md:p-14">
        {/* Theme Selection */}
        <div className="flex flex-col gap-[11px] md:gap-4">
          <label
            htmlFor="category"
            className="text-[15px] font-bold text-[#7191A5] md:text-xl"
          >
            Select Theme
          </label>
          <div id="category" className="flex justify-between items-center">
            <RegularButton
              onClick={() => setTheme("numbers")}
              children={"Numbers"}
              className={`${
                theme === "numbers" ? "bg-[#304859]" : "bg-[#BCCED9]"
              } hover:bg-[#6395B8] rounded-[26px] text-[#FCFCFC] text-base font-bold w-[134px] h-10 md:text-[26px] md:w-3xs md:h-[52px]`}
            />
            <RegularButton
              onClick={() => setTheme("icons")}
              children={"Icons"}
              className={`${
                theme === "icons" ? "bg-[#304859]" : "bg-[#BCCED9]"
              } hover:bg-[#6395B8] rounded-[26px] text-[#FCFCFC] text-base font-bold w-[134px] h-10 md:text-[26px] md:w-3xs md:h-[52px]`}
            />
          </div>
        </div>

        {/* Number of Players */}
        <div className="flex flex-col gap-[11px] mt-6 md:gap-4">
          <label
            htmlFor="no_of_players"
            className="text-[15px] font-bold text-[#7191A5] md:text-xl"
          >
            Number of Players
          </label>
          <div id="no_of_players" className="flex justify-between items-center">
            {["1", "2", "3", "4"].map((player) => (
              <RegularButton
                key={player}
                onClick={() => setNumberOfPlayers(Number(player))}
                children={player}
                className={`${
                  numberOfPlayers === Number(player)
                    ? "bg-[#304859]"
                    : "bg-[#BCCED9]"
                } hover:bg-[#6395B8] rounded-[26px] text-[#FCFCFC] text-base font-bold w-[62px] h-10 md:text-[26px] md:w-[119px] md:h-[52px]`}
              />
            ))}
          </div>
        </div>

        {/* Grid Size */}
        <div className="flex flex-col gap-[11px] mt-6 md:gap-4">
          <label
            htmlFor="grid_size"
            className="text-[15px] font-bold text-[#7191A5] md:text-xl"
          >
            Grid Size
          </label>
          <div id="grid_size" className="flex justify-between items-center">
            {["4x4", "6x6"].map((size) => (
              <RegularButton
                key={size}
                onClick={() => setGridSize(size)}
                children={size}
                className={`${
                  gridSize === size ? "bg-[#304859]" : "bg-[#BCCED9]"
                } hover:bg-[#6395B8] rounded-[26px] text-[#FCFCFC] text-base font-bold w-[134px] h-10 md:text-[26px] md:w-3xs md:h-[52px]`}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <RegularButton
          children={"Start Game"}
          className={
            "w-full h-12 bg-[#FDA214] text-[#FCFCFC] mt-8 rounded-[26px] text-lg font-bold md:mt-[33px] md:h-[70px] md:rounded-[35px] md:text-[32px] hover:bg-[#FFB84A]"
          }
        />
      </div>
    </form>
  );
}

export default Form;
