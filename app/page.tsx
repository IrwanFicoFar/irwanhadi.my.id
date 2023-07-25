"use client";

import { animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";
import {
  CardHeaderProject,
  CardProject,
  CardReview,
  CardService,
  CardTools,
} from "./components/Card";
import { ButtonNav } from "./components/Button";
import Link from "next/link";
import { Footer } from "./components/Footer";

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
          <Image src={"/s1-v2.png"} alt="parallax-2" fill objectFit="cover" />
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
          offset={0.8}
          speed={0.7}
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
        <ParallaxLayer
          offset={2}
          speed={1.2}
          className="flex justify-center"
          id="project"
        >
          <Link
            href={"https://github.com/IrwanFicoFar"}
            target="_blank"
            className="relative rounded-3xl  text-3xl font-medium bg-btn-navbar flex gap-5 h-16 w-72 justify-center items-center border-white border-2 border-opacity-25 hover:scale-105 duration-500 ease-in-out"
          >
            <p>More project</p>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={1.7} className="px-56">
          <div className="grid grid-cols-3 gap-16">
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/education.png"
              description="Education Hub is a web platform used to facilitate prospective students in obtaining detailed
              information about the schools they are interested in or finding the right school for them."
              cover="/education.png"
              title="Education-Hub"
            />
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/event.png"
              description="designed for creating and managing
              events. Users can create their events directly on this platform. Additionally, can explore various other ossibilities events by accessing on the main page."
              cover="/event.png"
              title="Event Planner App"
            />
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/pokemon.png"
              description="Pokemon App is a platform that showcases a comprehensive list of Pokemon. Users can obtain
              detailed information about each Pokemon by simply clicking on its respective image."
              cover="/pokemon.png"
              title="Catch Pokemon App"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.2} className="mt-24 px-36">
          <div className="text-4xl text-white leading-relaxed font-semibold text-center">
            <p>What They Says</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.8}
          className="mt-[500px] px-36 z-20"
        >
          <div className="grid grid-cols-3 gap-24">
            <CardReview
              imageAvatar="/avatar4.png"
              name="Satrio Wibodo"
              role="Backend Education-Hub "
              review="“Irwan has one of my team good collaboration with him. very open minded to discuss about project.“"
            />
            <CardReview
              imageAvatar="/avatar5.png"
              name="Zakaria"
              role="Frontend AltaBookBridge"
              review="“Very Excited to collaboration with Irwan that man has always motivated person and ambition. “"
            />
            <CardReview
              imageAvatar="/avatar6.png"
              name="Hisnun"
              role="Headmaster MI NW Jerua"
              review="“Thanks to Irwan.  build awesome and function website for school. it very helpful for us. “"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.5}
          className="mt-[400px] flex justify-center z-10"
        >
          <Image src={"/s5-v01.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.6} className="mt-[800px] z-10">
          <Image src={"/s5-v02.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.5} className="mt-[1000px] z-10">
          <Image src={"/s5-v03.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.4} className="mt-[1100px] z-10">
          <Image src={"/s5-v04.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.3} className="mt-[1300px] z-10">
          <Image src={"/s5-v05.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.3} className="mt-[800px] z-10">
          <div className="text-4xl text-white leading-relaxed font-semibold text-center">
            <p>What can I do for You ?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.1} className="mt-[850px] z-10">
          <div className="flex justify-center gap-20 mx-auto">
            <CardService
              title="🌐 Frontend"
              description="I'll turn your cool designs into a beautiful and responsive
            website with react and its infrastruktur for both desktop and mobile. Let's team up and make your
            web dreams a reality! 🌟"
            />
            <CardService
              title="🎨 IU Design"
              description="With Figma's power, I'll design stunning interfaces and seamless interactions, bringing your website to life. Let's create an exceptional user experience together! 🚀"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1}
          className="mt-[1200px]  flex justify-center z-10"
        >
          <div className="w-[50%] flex flex-col items-center gap-10">
            <p className="text-4xl text-white font-semibold text-center">
              Have a Project to Build ?
            </p>
            <p>let’s collaborate, I’ll help you my best</p>
            <Link
              href={"https://wa.me/083807106747"}
              target="_blank"
              className="relative rounded-lg  text-3xl font-medium bg-btn-navbar flex gap-5 h-16 w-72 justify-center items-center border-white border-2 border-opacity-25 hover:scale-105 duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M2.67962 3.5426L4.51512 1.70711C4.90564 1.31658 5.5388 1.31658 5.92933 1.70711L10.7373 6.51512C11.1279 6.90564 11.1279 7.53881 10.7373 7.92933L8.75605 9.91062C8.50361 10.1631 8.44102 10.5487 8.60068 10.868C10.4466 14.5599 13.4401 17.5534 17.132 19.3993C17.4513 19.559 17.8369 19.4964 18.0894 19.244L20.0707 17.2627C20.4612 16.8721 21.0944 16.8721 21.4849 17.2627L26.2929 22.0707C26.6834 22.4612 26.6834 23.0944 26.2929 23.4849L24.4574 25.3204C22.346 27.4317 19.0035 27.6693 16.6148 25.8777L10.9619 21.6381C9.21838 20.3304 7.66955 18.7816 6.3619 17.0381L2.12226 11.3852C0.330722 8.99652 0.568272 5.65395 2.67962 3.5426Z"
                  stroke="white"
                />
              </svg>
              <p>Contact me</p>
            </Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.5} className="mt-[400px] z-10">
          <Image
            src={"/footer-vector.png"}
            alt="footer"
            fill
            objectFit="cover"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.7} className="mt-[550px] z-10">
          <Footer
            discord="https://discord.com/channels/irwan_fico_far"
            linkedIn="https://www.linkedin.com/in/irwan-hadi-b7775a126/"
            instagram="https://www.instagram.com/irwan_fico_far/"
            facebook="https://www.facebook.com/irwan.hadi25"
            youtube="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
            cv="https://drive.google.com/file/d/1rxPkk9rrC8q0ApFYFjyP_q_GRvsACbMs/view?usp=sharing"
          />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
