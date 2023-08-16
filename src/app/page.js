"use client";
import { useState } from "react";
import PopupContent from "./Components/PopupContent";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#FAEA18] h-[100vh] overflow-y-hidden">
      <div className="grid grid-rows-1 grid-cols-[minmax(0,6fr)_minmax(0,4fr)] pt-6">
        <div>
          <img src="/milkybarlogo.png" alt="logo"></img>
        </div>

        <div className="grid grid-cols-2 content-center">
          <div className="pl-4">
            <img src="/icon1.png" alt="souveniars"></img>
          </div>
          <div className="">
            <img src="/icon2.png" alt="homeicon"></img>
          </div>
        </div>
      </div>
      <div className="bg-[url('/background.png')] absolute grid ">
        <div className="pl-4">
          <img
            className="-z-[1]"
            src="heroimage.png"
            alt="passport"
            onClick={openPopup}
            style={{ cursor: "pointer" }}
          ></img>
        </div>
        <div className="grid grid-cols-2 pl-4">
          <img src="/download.png"></img>
        </div>
      </div>{" "}
      {showPopup && (
        <div className="z-[9999] w-full fixed">
          <PopupContent onClose={closePopup} />
        </div>
      )}
    </div>
  );
}

{
  /* <div className="relative w-[331px] top-[4rem] right-[9rem]">
          <img src="/photoselector.png"></img>
        </div>
        <div className="grid grid-rows-2 relative top-[1.5rem] w-[293px] left-[2.6rem] rounded-b-[1rem] bg-gradient-to-b from-white via-[#FAFAFA] to-[#E1E1E1] bg-blend-multiply rotate-[12deg]">
          <div className="text-[#FAEA18] text-center font-[hobeaux] text-20 pt-2 font-extrabold tracking-[0.7px]">
            Continents Explored
          </div>
          <div></div>
        </div> */
}
{
  /* <div className="grid grid-cols-2 rounded-[1rem] h-[227px] w-[300px] rotate-[15deg] bg-gradient-to-b from-white via-[#FAFAFA] to-[#E1E1E1] bg-blend-multiply relative top-[5rem] right-[8rem]">
          <div className="rotate-[-10deg] content-center">
            <img src="/passportpic.png" alt="placeholderimage"></img>
          </div>
          <div>
            <form>
              <label className="text-blue-800 font-bebas-neue text-15 font-semibold">
                Name
              </label>
            </form>
          </div>
        </div> */
}
