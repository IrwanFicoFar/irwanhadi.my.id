import Image from "next/image";
import React from "react";

export const CardTools = ({
  bg,
  imageResource,
  label,
}: {
  bg: string;
  imageResource: string;
  label: string;
}) => {
  return (
    <div className={`${bg} rounded-3xl p-7`}>
      <div className="h-44 flex items-center justify-center">
        <Image
          src={imageResource}
          alt="section1 image 1"
          width={120}
          height={120}
          objectFit="cover"
        />
      </div>
      <div className="mt-5 py-5 flex items-center justify-center text-center text-xl font-medium">
        <p>{label}</p>
      </div>
    </div>
  );
};
