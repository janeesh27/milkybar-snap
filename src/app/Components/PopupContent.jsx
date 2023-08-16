import React from "react";

import { WebcamCapture } from "./Webcam";
const PopupContent = ({ onClose }) => {
  return (
    <div className="grid grid-rows-2  bg-white border-4 border-solid rounded-[23px] mx-4">
      <div className="pt-4 justify-center">
        <div className="h-[365px] w-[314px] border-[2px] mx-auto border-dashed border-gray-600">
          <WebcamCapture />
        </div>
        <div className=" h-[48px] w-[253px] pt-4 mx-auto ">
          <input
            placeholder="Enter you First Name"
            className="text-black p-4 text-center bg-[#979797] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
