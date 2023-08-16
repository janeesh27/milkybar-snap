import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 314,
  height: 365,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image == "" ? (
          <Webcam
            audio={false}
            height={365}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={314}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
          >
            <img scr="/retakebutton.png" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
          >
            <img scr="/shutterbutton.png" />
            yoo
          </button>
        )}
      </div>
    </div>
  );
};
