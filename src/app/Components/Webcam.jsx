import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 314,
  height: 315,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    localStorage.setItem("capturedImage", imageSrc);
  });

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image == "" ? (
          <Webcam
            audio={false}
            height={315}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={314}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div className="absolute">
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="relative text-red-600 bottom-[5rem] left-[8rem]"
          >
            <img src="/retakebutton.png" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="relative text-red-600 bottom-[5rem] left-[8rem]"
          >
            <img src="/shutterbutton.png" />
          </button>
        )}
      </div>
    </div>
  );
};
