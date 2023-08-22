import React from "react";

const ProfilePicture = ({ showDP }) => {
  console.log(showDP);
  return (
    <div>
      <img src={showDP} className="rounded-lg" />
    </div>
  );
};

export default ProfilePicture;
