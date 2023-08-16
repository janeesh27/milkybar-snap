import { useState } from "react";

const CameraForm = () => {
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage") || "fallback.jpg"
  );

  const handleImageClick = async () => {
    const imageFile = await fetch("path_to_clicked_image.jpg");
    const imageBlob = await imageFile.blob();
    const reader = new FileReader();

    reader.onload = function (event) {
      const base64Image = event.target.result;
      localStorage.setItem("userImage", base64Image);
      setUserImage(base64Image);
    };

    reader.readAsDataURL(imageBlob);
  };

  return (
    <div>
      <img src={userImage} onClick={handleImageClick} alt="User Image" />
    </div>
  );
};

export default CameraForm;
