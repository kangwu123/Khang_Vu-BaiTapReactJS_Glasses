import { useState } from "react";
import dataGlasses from "./dataGlasses.json";
import Glasses from "./Glasses";
import ShowUp from "./ShowUp";

const ChangeGlasses = () => {
  const [listGlasses] = useState(dataGlasses)

  const [currentGlasses, setCurrentGlasses] = useState(null)

  const getInfoFromGlasses = (selectedGlasses) => {
    setCurrentGlasses(selectedGlasses)
  }
  // Render all Glasses UI
  const renderGlassesUI = () => {
    return listGlasses.map((glasses) => {
      return (
        <Glasses key={glasses.id} glassesProp={glasses} onSelectedGlasses={getInfoFromGlasses} />
      )
    })
  }
  const handleResetGlasses = () => {
    setCurrentGlasses(null)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <img src="./img/model.jpg" alt="model" className="w-[300px] relative" />

      {currentGlasses && (
        <ShowUp key={currentGlasses.id} glassesProp={currentGlasses} />
      )}

      <div className="bg-blue-100 backdrop-blur-md rounded-2xl shadow-lg p-6 w-fit mx-auto flex flex-wrap justify-center gap-5 border border-gray-200">
        {renderGlassesUI()}

        <button
          className="flex items-center justify-center p-2 bg-red-400 text-white font-semibold rounded-xl shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 w-25 h-20"
          onClick={() => handleResetGlasses()}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ChangeGlasses;
