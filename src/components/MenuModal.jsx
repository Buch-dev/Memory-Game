import React from 'react'
import RegularButton from './RegularButton'

function MenuModal({handleCloseModal, handleNewGame, handleRestart}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#F2F2F2] rounded-lg p-6 w-[300px] flex flex-col gap-4 text-center">
            <RegularButton
              children={"Restart"}
              className={
                "w-full bg-[#FDA214] text-[#FCFCFC] text-lg font-bold h-12 rounded-[26px] hover:bg-[#FFB84A]"
              }
              onClick={handleRestart}
            />
            <RegularButton
              children={"New Game"}
              className={
                "w-full bg-[#DFE7EC] text-[#304859] text-lg font-bold h-12 rounded-[26px] hover:text-[#FCFCFC] hover:bg-[#506D8B]"
              }
              onClick={handleNewGame}
            />
            <RegularButton
              children={"Resume"}
              className={
                "w-full bg-[#DFE7EC] text-[#304859] text-lg font-bold h-12 rounded-[26px] hover:text-[#FCFCFC] hover:bg-[#506D8B]"
              }
              onClick={handleCloseModal}
            />
          </div>
        </div>
  )
}

export default MenuModal
