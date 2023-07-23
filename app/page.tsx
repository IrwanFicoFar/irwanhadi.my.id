"use client";

import { animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { CardHeaderProject, CardTools } from "./components/Card";

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
        <ParallaxLayer offset={0.1} speed={0.8} className="z-50">
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
        <ParallaxLayer offset={0.4} speed={0.7} className="mt-28 z-20">
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
          id="about"
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
        <ParallaxLayer
          offset={1.1}
          speed={1.5}
          className="z-40 mt-16 px-36 "
          id="tools"
        >
          <div className="w-full mt-10  flex flex-col justify-center items-center gap-10 ">
            <div className="text-4xl text-white leading-relaxed font-semibold flex flex-col items-center">
              <p>Tech stack to </p>
              <p>build an app</p>
            </div>
            <div>
              <p className="w-[648px] text-center">
                ”My tech stack will always continue to expand as I journey into
                learning new things. The world of technology is ever-evolving,
                and Iam thrilled to keep exploring and understanding the latest,
                relevant technologies in the web development industry.”
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={2.25} className="z-40 mt-16 px-36 ">
          <div className="w-full grid grid-cols-5 gap-5 mt-24">
            <CardTools
              imageResource="/html.png"
              bg="bg-gradient-to-br from-sky-900 to-indigo-800"
              label="HyperText Markup Language"
            />
            <CardTools
              imageResource="/css.png"
              bg="bg-gradient-to-tr from-slate-700 to-orange-800"
              label="Cascading Style Sheets"
            />
            <CardTools
              imageResource="/js.png"
              bg="bg-gradient-to-bl from-purple-800 to-orange-800"
              label="Javascript Language"
            />
            <CardTools
              imageResource="/ts.png"
              bg="bg-gradient-to-tl from-violet-800 to-fuchsia-700"
              label="Typescript Language"
            />
            <CardTools
              imageResource="/node.png"
              bg="bg-gradient-to-br bg-gradient-to-bl from-teal-600 to-blue-900"
              label="Node Javascript"
            />
            <CardTools
              imageResource="/react.png"
              bg="bg-gradient-to-tr from-yellow-900 to-lime-800"
              label="React Javascript Library"
            />
            <CardTools
              imageResource="/next.png"
              bg="bg-gradient-to-bl from-pink-900 to-rose-700"
              label="Next Javascript Framework"
            />
            <CardTools
              imageResource="/tailwind.png"
              bg="bg-gradient-to-tl from-sky-600 to-purple-800"
              label="Tailwind CSS"
            />
            <CardTools
              imageResource="/axios.png"
              bg="bg-gradient-to-br from-gray-500 to-emerald-800"
              label="Axois API Integration"
            />
            <CardTools
              imageResource="/figma.png"
              bg="bg-gradient-to-tr from-violet-700 to-red-800"
              label="Figma UI/UX Design"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={2.1} className="mt-[700px] px-36 ">
          <Image src={"/s4-v1.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={2.3} className=" mt-[700px] px-36 ">
          <Image src={"/s4-v2.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={2} className="mt-[650px] px-36 ">
          <Image src={"/s4-v3.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={1.5}
          className="mt-[600px] flex px-36 gap-16"
          id="project"
        >
          <div className="w-[30%] mt-10  flex flex-col justify-center gap-10 ">
            <div>
              <p>Project List</p>
            </div>
            <div className="text-4xl text-white leading-relaxed font-semibold">
              <p>Meet my latest Project</p>
            </div>
            <div>
              <p className="leading-8">
                Explore my latest projects with responsive, user friendly,
                creative and innovative web experiences. Lets journey together!
              </p>
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-2 items-center justify-end">
            <CardHeaderProject
              goTo="https://github.com/IrwanFicoFar"
              imageResource="/github.png"
              description="Find all the necessary projects that I have uploaded to GitHub."
            />
            <CardHeaderProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/youtube.png"
              description="Explore more about the latest tech stack tutorials on Youtube."
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
