import React from "react";
import { useState } from "react";
import { WebcamCapture } from "./Webcam";
const PopupContent = ({ onClose, setShowDP }) => {
  const [firstName, setFirstName] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleFirstNameChange = (event) => {
    const inputValue = event.target.value;
    const isValid = /^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 30;
    setFirstName(inputValue);
    setIsValidFirstName(isValid);
    localStorage.setItem("enteredName", inputValue);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    onClose();
  };

  return (
    <div className="bg-white h-[470px] border-4 border-solid rounded-[23px] mx-4">
      <div className="pt-4">
        <div className="h-[315px] w-[314px] border-[2px] mx-auto border-dashed border-gray-600">
          <WebcamCapture setShowDP={setShowDP} />
        </div>
        <div className=" h-[30px] w-[253px] pt-4 mx-auto">
          <input
            placeholder="Enter your First Name"
            className={`text-black p-2 text-center bg-[#979797] rounded-md ${
              isValidFirstName ? "" : "border-red-500"
            }`}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {!isValidFirstName && (
            <p className="text-red-500 text-xs mt-1">Invalid First Name</p>
          )}
        </div>
        <div className="mt-8 w-[50px] mx-auto">
          <button
            className="p-2 text-center bg-[#0294C2] border-5 border-white border-solid rounded-[10px] shadow-md"
            onClick={closePopup}
          >
            Save
          </button>
        </div>
        <div className="absolute">
          <div className="relative bottom-[25.7rem] left-[17.5rem]">
            <img
              src="/close.png"
              onClick={closePopup}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
