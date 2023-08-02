"use client";

import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";

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
    <div
      className={`${bg} rounded-3xl p-7 hover:scale-110 duration-500 hover:shadow-2xl hover:shadow-blue-800/70`}
    >
      <div className="md:h-32 lg:h-36 xl:h-44 flex items-center justify-center">
        <Image
          src={imageResource}
          alt="section1 image 1"
          width={120}
          height={120}
          objectFit="cover"
        />
      </div>
      <div className="text-white mt-5 py-5 flex items-center justify-center text-center text-xl font-medium">
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
        className="absolute z-20 p-10 w-full lg:w-64 xl:w-72 bg-projectHeader rounded-bl-[40px] rounded-r-[40px] hover:-translate-y-2 duration-500 ease-in-out text-white"
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
        className={`absolute z-10 p-10 lg:w-64 xl:w-72  bg-projectHeaderBack rounded-bl-[40px] rounded-r-[40px] origin-top-left  ${rotate} duration-500 ease-in-out`}
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
  onClick,
}: {
  goTo: string;
  imageResource: string;
  description: string;
  title: string;
  cover: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [rotate, setRotate] = useState<string>("");
  const [skew, setSkew] = useState<string>("-skew-y-6");
  const [showDescription, setShowDescription] = useState<string>("invisible");

  return (
    <button
      onClick={onClick}
      className="text-white relative flex justify-end items-center hover:-translate-y-2 duration-500 ease-in-out"
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
          className={`h-48 overflow-hidden mt-5 py-5 flex items-start justify-start ${showDescription} duration-500 ease-in-out`}
        >
          <p className="text-start">&quot;{description}&quot;</p>
        </div>
      </div>
    </button>
  );
};

export const CardReview = ({
  imageAvatar,
  name,
  role,
  review,
}: {
  imageAvatar: string;
  name: string;
  role: string;
  review: string;
}) => {
  return (
    <div className="text-white bg-reviewCard p-7 border-2 border-white border-opacity-25 flex flex-col gap-8 rounded-3xl hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-800/40 ">
      <div className="">
        <Image src={imageAvatar} width={50} height={50} alt="avatar image" />
        <div className="mt-3">
          <p className="font-medium">{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export const CardService = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="xl:w-[25%] bg-gradient-to-br backdrop-blur-sm from-transparent via-gray-50 via-40% to-transparent p-10 flex flex-col gap-5 rounded-3xl ring ring-gray-50 ring-offset-1 ring-opacity-20 hover:scale-105 duration-500 ease-in-out">
      <p className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-purple-500 text-3xl font-semibold">
        {title}
      </p>
      <p className="text-transparent bg-clip-text bg-gradient-to-bl from-sky-800 to-purple-500 font-medium">
        {description}
      </p>
    </div>
  );
};
