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
  const [rotate, setRotate] = useState<string>("-skew-y-6");

  return (
    <Link
      href={goTo}
      target="_blank"
      className="relative flex justify-end items-center"
    >
      <div
        className="absolute z-20 p-10 w-72 bg-projectHeader rounded-bl-[40px] rounded-r-[40px] hover:-translate-y-2 duration-500 ease-in-out"
        onMouseEnter={() => setRotate("-skew-y-12 -rotate-6 -translate-y-2")}
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

export const CardProject = ({
  imageResource,
  description,
  title,
  cover,
}: {
  goTo: string;
  imageResource: string;
  description: string;
  title: string;
  cover: string;
}) => {
  const [rotate, setRotate] = useState<string>("");
  const [skew, setSkew] = useState<string>("-skew-y-6");
  const [showDescription, setShowDescription] = useState<string>("invisible");

  return (
    <div
      className="relative flex justify-end items-center hover:-translate-y-2 duration-500 ease-in-out"
      onMouseEnter={() => {
        setSkew("");
        setRotate("-rotate-100");
        setShowDescription("");
      }}
      onMouseLeave={() => {
        setSkew("-skew-y-6");
        setRotate("");
        setShowDescription("invisible");
      }}
    >
      <div
        className={`absolute w-full z-20 p-10 flex flex-col bg-projectCard rounded-tr-[40px] rounded-l-[40px]  duration-500 ease-in-out  ${rotate}  origin-bottom-right `}
      >
        <div className="h-48 overflow-hidden mt-5 py-5 flex items-start justify-center text-3xl">
          <p>&quot;{title}&quot;</p>
        </div>
        <div className="relative h-44 flex items-start ">
          <Image
            src={cover}
            alt="project image "
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div
        className={`absolute z-10 p-10 ${skew} flex flex-col w-full bg-gradient-to-br from-sky-800 from-25% to-green-600 rounded-tr-[40px] rounded-l-[40px] origin-bottom-right duration-500 ease-in-out`}
      >
        <div
          className={`relative h-44 flex items-center ${showDescription} duration-500 ease-in-out`}
        >
          <Image
            src={imageResource}
            alt="project image "
            fill
            objectFit="cover"
          />
        </div>
        <div
          className={`h-48 overflow-hidden mt-5 py-5 flex items-start justify-center ${showDescription} duration-500 ease-in-out`}
        >
          <p>&quot;{description}&quot;</p>
        </div>
      </div>
    </div>
  );
};
