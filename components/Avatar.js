import React from "react";
import Image from "next/image";
const Avatar = ({ url, className }) => {
  return (
    <div className="ml-auto">
      <Image
        src={url}
        alt="profile_pic"
        height={50}
        width={50}
        className={`h-10 p-2 rounded-full cursor-pointer transition duration-150 transform hover:scale-105 bg-gray-200 ${className}`}
      />
    </div>
  );
};

export default Avatar;
