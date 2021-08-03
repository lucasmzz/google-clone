import React from "react";
import Image from "next/image";
const Avatar = ({ url, className }) => {
  return (
    <Image
      src={url}
      alt="profile_pic"
      height={45}
      width={45}
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 bg-gray-200`}
    />
  );
};

export default Avatar;
