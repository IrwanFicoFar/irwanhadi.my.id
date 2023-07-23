"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

export const CardHeaderProject = ({
  goTo,
  imageResource,
  description,
}: {
  goTo: string;
  imageResource: string;
  description: string;
}) => {
  const [rotate, setRotate] = useState<string>("");

  return (
    <Link
      href={goTo}
      target="_blank"
      className="relative flex justify-end items-center"
    >
      <div
        className="absolute z-20 p-10 w-72 bg-projectHeader rounded-bl-[40px] rounded-r-[40px] hover:-translate-y-2 duration-500 ease-in-out"
        onMouseEnter={() => setRotate("-skew-y-12 -rotate-6")}
        onMouseLeave={() => setRotate("-skew-y-6 ")}
      >
        <div className="flex items-center ">
          <Image
            src={imageResource}
            alt="section1 image 1"
            width={120}
            height={120}
            objectFit="cover"
          />
        </div>
        <div className="mt-5 py-5 flex items-center justify-center">
          <p>&quot;{description}&quot;</p>
        </div>
      </div>
      <div
        className={`absolute z-10 p-10 w-72  bg-projectHeaderBack rounded-bl-[40px] rounded-r-[40px] origin-top-left  ${rotate} duration-500 ease-in-out`}
      >
        <div className="flex items-center invisible">
          <Image
            src={imageResource}
            alt="section1 image 1"
            width={120}
            height={120}
            objectFit="cover"
          />
        </div>
        <div className="mt-5 py-5 flex items-center justify-center invisible">
          <p>&quot;{description}&quot;</p>
        </div>
      </div>
    </Link>
  );
};
