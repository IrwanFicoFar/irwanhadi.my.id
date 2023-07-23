"use client";

import { animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  const parallax = useRef<IParallax>(null!);

  return (
    <main className="min-h-screen">
      <Parallax
        style={{ top: 0 }}
        ref={parallax}
        pages={4}
        className="bg-bgDefault"
      >
        <ParallaxLayer offset={0} speed={0.2} className="z-10">
          <Image src={"/s1-v0.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.8} className="top-1 z-50">
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1} className="mt-16 z-10">
          <Image src={"/s1-v1.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={0.7}
          className="mt-5 z-40 flex px-36"
        >
          <div className="w-[50%] mt-10  flex flex-col gap-5 text-transparent bg-clip-text bg-gradient-to-r from-white from-10% via-orange-300 via-70% to-red-300 to-90%">
            <p className="text-6xl font-bold">Discover The Code,</p>
            <p className="text-6xl font-bold">Learn The Craft,</p>
            <p className="text-6xl font-bold">Excel as Developer.</p>
          </div>
          <div className="w-[50%] relative h-96">
            <Image
              src={"/s1-img1.png"}
              alt="section1 image 1"
              width={204}
              height={134}
              className="flex-shrink-0 absolute top-0 left-0 "
            />
            <Image
              src={"/s1-img2.png"}
              alt="section1 image 1"
              width={494}
              height={301}
              className="flex-shrink-0 absolute top-16 left-16 "
            />
            <Image
              src={"/s1-img3.png"}
              alt="section1 image 1"
              width={255}
              height={176}
              className="flex-shrink-0 absolute top-72 left-0 "
            />
            <Image
              src={"/s1-img4.png"}
              alt="section1 image 1"
              width={375}
              height={249}
              className="flex-shrink-0 absolute top-64 right-0 "
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.4}
          speed={0.7}
          className="mt-28 z-20"
          id="about"
        >
          <Image
            src={"/s1-v2.png"}
            alt="parallax-2"
            width={2000}
            height={900}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.8} className="mt-28 z-30">
          <Image
            src={"/Vector 3.png"}
            alt="parallax-2"
            width={2000}
            height={900}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.7}
          speed={0.6}
          className="z-20 bg-bgDefault mt-52 h-[1048px]"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.9}
          className="z-40 flex mt-32 px-36 "
        >
          <div className="w-[50%] mt-10  flex flex-col justify-center gap-10 ">
            <div className="relative rounded-lg  text-3xl font-medium bg-btn-navbar flex h-16 w-72 justify-center items-center border-white border-2 border-opacity-25">
              <p>Hi I am Irwan</p>
              <Image
                src={"/hand.png"}
                alt="section1 image 1"
                width={50}
                height={50}
                className="absolute -top-4 -left-4 flex-shrink-0"
              />
            </div>
            <div className="text-4xl text-white leading-relaxed font-semibold">
              <p>
                As a <span className="text-purple-500">Frontend Engineer</span>,
                I am enthusiastic about{" "}
                <span className="text-purple-500">Learning</span> and{" "}
                <span className="text-purple-500">Developing</span> in the field
                of web development.
              </p>
            </div>
            <div>
              <p>
                I am dedicated to mastering the necessary technologies and
                frameworks for creating impressive user interfaces. Currently
                skills to work with React.ts and its infrastructure, build
                responsive web, and design UI Figma. I enjoy collaborating with
                experienced professionals to contribute to innovative web
                applications.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <Image
              src={"/s2-img1.png"}
              alt="section1 image 1"
              width={500}
              height={500}
              className="flex-shrink-0"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
