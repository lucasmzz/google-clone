import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile_pic"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 bg-gray-200 ${className}`}
    />
  );
};

export default Avatar;
