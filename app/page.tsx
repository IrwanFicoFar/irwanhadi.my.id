"use client";

import { animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import {
  CardHeaderProject,
  CardProject,
  CardReview,
  CardService,
  CardTools,
} from "./components/Card";
import Link from "next/link";
import { Footer } from "./components/Footer";

import S1image1 from "@/public/s1-img1.png";
import S1image2 from "@/public/s1-img2.png";
import S1image3 from "@/public/s1-img3.png";
import S1image4 from "@/public/s1-img4.png";

import S5image1 from "@/public/s5-v01.png";
import S5image2 from "@/public/s5-v02.png";
import S5image3 from "@/public/s5-v03.png";
import S5image4 from "@/public/s5-v04.png";
import S5image5 from "@/public/s5-v05.png";
import { Modal } from "./components/Modal";

// const ComponenFooter = dynamic(() => import('./components/Footer'), { ssr: false });

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pageParallax, setPageParallax] = useState(5);

  const handleRezise = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setPageParallax(4);
    } else if (screenWidth < 768) {
      setPageParallax(7);
    }
  };

  React.useEffect(() => {
    handleRezise();
    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  console.log(pageParallax);

  const parallax = useRef<IParallax>(null!);
  return (
    <main className="min-h-screen">
      <Parallax
        style={{ top: 0 }}
        ref={parallax}
        pages={pageParallax}
        className="bg-bgDefault"
      >
        <ParallaxLayer offset={0} speed={0.9} className="z-10">
          <Image src={"/s1-v0.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.8} className="z-50">
          <Navbar
            onClickHome={() => parallax.current.scrollTo(0)}
            onClickAbout={() => parallax.current.scrollTo(0.6)}
            onClickTools={() => parallax.current.scrollTo(1.05)}
            onClickProject={() => parallax.current.scrollTo(1.7)}
            onClickContact={() => parallax.current.scrollTo(3)}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1} className="mt-16 z-10">
          <Image src={"/s1-v1.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.7}
          className="md:mt-16 z-40 flex flex-col md:flex-row px-10 ms:px-16 md:px-24 lg:px-36"
        >
          <div className="w-full md:w-[50%] mt-10 text-4xl sm:text-5xl lg:text-6xl flex flex-col font-bold gap-5 text-transparent bg-clip-text bg-gradient-to-r from-white from-10% via-orange-300 via-70% to-red-300 to-90%">
            <p>Discover The Code,</p>
            <p>Learn The Craft,</p>
            <p>Excel as Developer.</p>
          </div>
          <div className="w-full md:w-[50%] relative h-96 pr-10 ">
            <Image
              src={S1image1}
              alt="section1 image 1"
              width={204}
              height={134}
              className="flex-shrink-0 absolute top-0 left-0 hidden sm:block"
            />
            <Image
              src={S1image2}
              alt="section1 image 1"
              width={494}
              height={301}
              className="flex-shrink-0 absolute top-16 left-2 sm:left-16 "
            />
            <Image
              src={S1image3}
              alt="section1 image 1"
              width={255}
              height={176}
              className="flex-shrink-0 absolute top-44 sm:top-72 left-0 "
            />
            <Image
              src={S1image4}
              alt="section1 image 1"
              width={375}
              height={249}
              className="flex-shrink-0 absolute top-56 sm:top-64 right-0 "
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.6} className="mt-28 z-20">
          <Image src={"/s1-v2.png"} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.4} className="mt-28 z-30">
          <Image
            src={"/Vector 3.png"}
            alt="parallax-2"
            fill
            objectFit="cover"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.7}
          speed={0.6}
          className="z-10 bg-bgDefault mt-52 h-[1048px]"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={0.7}
          className="z-40 flex flex-col lg:flex-row gap-5 mt-[500px] md:mt-32 px-10 ms:px-16 md:px-24 lg:px-36 "
          id="about"
        >
          <div className="w-full lg:w-[50%] mt-10  flex flex-col justify-center gap-10 ">
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
            <div className="sm:text-2xl md:text-4xl text-white leading-relaxed font-semibold">
              <p>
                As a <span className="text-purple-500">Frontend Engineer</span>,
                I am enthusiastic about{" "}
                <span className="text-purple-500">Learning</span> and{" "}
                <span className="text-purple-500">Developing</span> in the field
                of web development.
              </p>
            </div>
            <div className="text-white">
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
          <div className="w-full lg:w-[50%] flex items-center justify-center">
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
          className="z-40 mt-[1000px] md:mt-[500px] lg:mt-16 px-10 ms:px-16 md:px-24 lg:px-36 "
          id="tools"
        >
          <div className="w-full mt-10  flex flex-col justify-center items-center gap-10 ">
            <div className="text-4xl text-white leading-relaxed font-semibold flex flex-col items-center">
              <p>Tech stack to </p>
              <p>build an app</p>
            </div>
            <div>
              <p className="w-full md:w-[648px] text-center text-white">
                ”My tech stack will always continue to expand as I journey into
                learning new things. The world of technology is ever-evolving,
                and Iam thrilled to keep exploring and understanding the latest,
                relevant technologies in the web development industry.”
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1.9}
          className="z-40 mt-[1300px] md:mt-[600px] lg:mt-16 px-10 ms:px-16 md:px-24 lg:px-36 "
        >
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-24">
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
            <div className="hidden lg:flex">
              <CardTools
                imageResource="/next.png"
                bg="bg-gradient-to-bl from-pink-900 to-rose-700"
                label="Next Javascript Framework"
              />
            </div>
            <div className="hidden lg:flex">
              <CardTools
                imageResource="/tailwind.png"
                bg="bg-gradient-to-tl from-sky-600 to-purple-800"
                label="Tailwind CSS"
              />
            </div>
            <div className="hidden xl:flex">
              <CardTools
                imageResource="/axios.png"
                bg="bg-gradient-to-br from-gray-500 to-emerald-800"
                label="Axois API Integration"
              />
            </div>
            <div className="hidden xl:flex">
              <CardTools
                imageResource="/figma.png"
                bg="bg-gradient-to-tr from-violet-700 to-red-800"
                label="Figma UI/UX Design"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={2.1}
          className="mt-[2900px]  sm:mt-[2800px] md:mt-[1800px] lg:mt-[1000px] xl:mt-[700px] "
        >
          <Image src={"/s4-v1.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={2.3}
          className="mt-[2900px]  sm:mt-[2800px] md:mt-[1800px] lg:mt-[1000px]  xl:mt-[700px] "
        >
          <Image src={"/s4-v2.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={2}
          className="mt-[2850px]  sm:mt-[2750px] md:mt-[1750px] lg:mt-[950px] xl:mt-[650px]"
        >
          <Image src={"/s4-v3.png"} alt="parallax-1" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={1.5}
          className="mt-[2550px]  sm:mt-[2650px] md:mt-[1750px] lg:mt-[1000px] xl:mt-[600px] flex flex-col gap-y-72 xl:flex-row px-10 ms:px-16 md:px-24 lg:px-36  gap-16"
        >
          <div className="xl:w-[30%] mt-10  flex flex-col justify-center gap-10 text-white">
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
          <div className="lg:w-[70%] grid grid-cols-1 sm:grid-cols-2  gap-96 sm:gap-3 md:gap-16 xl:gap-2 items-center justify-end">
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
          className="flex justify-center mt-[2400px] sm:mt-[2000px] md:mt-[1200px] lg:mt-[600px] xl:mt-[150px]"
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
        <ParallaxLayer
          offset={2.4}
          speed={1.7}
          className="px-10 md:px-16 lg:px-24 xl:gap-44 2xl:px-56  mt-[2900px] sm:mt-[2500px] md:mt-[1500px] lg:mt-[800px] xl:mt-[300px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[600px] sm:gap-x-10 sm:gap-y-[600px] md:gap-5 lg:gap-10 xl:gap-16">
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/education.png"
              description="Education Hub is a web platform used to facilitate prospective students in obtaining detailed
              information about the schools they are interested in or finding the right school for them."
              cover="/education.png"
              title="Education-Hub"
              onClick={toggleModal}
            />
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/event.png"
              description="designed for creating and managing
              events. Users can create their events directly on this platform. Additionally, can explore various other ossibilities events by accessing on the main page."
              cover="/event.png"
              title="Event Planner App"
              onClick={toggleModal}
            />
            <CardProject
              goTo="https://www.youtube.com/channel/UC9uy_umt8ZsMjjj2N2vQYtA"
              imageResource="/pokemon.png"
              description="Pokemon App is a platform that showcases a comprehensive list of Pokemon. Users can obtain
              detailed information about each Pokemon by simply clicking on its respective image."
              cover="/pokemon.png"
              title="Catch Pokemon App"
              onClick={toggleModal}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.2}
          className="mt-[3400px] sm:mt-[2600px] md:mt-[1300px] lg:mt-[800px] xl:mt-[300px]  px-10 sm:px-24 md:px-36"
        >
          <div className="text-xl sm:tex-3xl md:text-4xl text-white leading-relaxed font-semibold text-center">
            <p>What They Says</p>
            <div className="flex justify-center">
              <p className="text-sm font-medium mt-5 lg:w-[700px] xl:w-96">
                &quot;I am gathering reviews from those who collaborated with me
                on the project, including input from friends, mentor, and client
                feedback.&quot;
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.8}
          className="mt-[4700px] sm:mt-[3700px] md:mt-[2100px] lg:mt-[1500px] xl:mt-[900px] px-10 sm:px-16 md:px-24 lg:px-28 xl:px-32 2xl:px-36 z-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-24">
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
          className="mt-[4700px] sm:mt-[3700px] md:mt-[2200px] lg:mt-[1400px] xl:mt-[700px]  2xl:mt-[700px] flex justify-center z-10"
        >
          <Image src={S5image1} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.6}
          className="mt-[5400px] sm:mt-[4300px] md:mt-[2700px] lg:mt-[1900px] xl:mt-[1200px] 2xl:mt-[1200px]  z-10"
        >
          <Image src={S5image2} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.5}
          className="mt-[5500px] sm:mt-[4300px] md:mt-[2800px] lg:mt-[2000px]  xl:mt-[1300px] 2xl:mt-[1400px] z-10"
        >
          <Image src={S5image3} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.4}
          className="mt-[5800px] sm:mt-[4600px] md:mt-[3000px] lg:mt-[2000px]  xl:mt-[1350px] 2xl:mt-[1400px] z-10"
        >
          <Image src={S5image4} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.3}
          className="mt-[5800px] sm:mt-[4500px] md:mt-[3000px] lg:mt-[2100px]  xl:mt-[1600px] 2xl:mt-[1600px] z-10"
        >
          <Image src={S5image5} alt="parallax-2" fill objectFit="cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.3}
          className="mt-[4700px] sm:mt-[4000px] md:mt-[2500px] lg:mt-[1800px] xl:mt-[1200px] z-10"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed font-semibold text-center">
            <p>What can I do for You ?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={1.1}
          className="mt-[4400px] sm:mt-[3800px]  md:mt-[2400px] lg:mt-[1800px] xl:mt-[1200px] z-10"
        >
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-10 sm:px-26 md:px-24  mx-auto ">
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
          className="mt-[5150px] sm:mt-[4300px]  md:mt-[2900px] lg:mt-[2200px] xl:mt-[1750px] 2xl:mt-[1500px]  flex justify-center z-10"
        >
          <div className="w-[60%] sm:w-[70%] md:w-[50%] flex flex-col items-center gap-10 text-white">
            <p className="text-2xl sm:text-3xl md:text-4xl  font-semibold text-center">
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
              <p className="text-2xl sm:text-3xl md:text-4xl">Contact me</p>
            </Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1.5}
          className="mt-[5700px] sm:mt-[4000px]  md:mt-[2400px] lg:mt-[1400px] xl:mt-[900px] 2xl:mt-[900px] z-10"
        >
          <Image
            src={"/footer-vector.png"}
            alt="footer"
            fill
            objectFit="cover"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.7}
          className="mt-[4100px] sm:mt-[3100px] md:mt-[2000px]  lg:mt-[1300px] xl:mt-[900px] z-10"
        >
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
      <Modal isOpen={modalOpen} onClose={toggleModal}>
        <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
        <p className="text-gray-700">
          You can add any content you want inside the modal.
        </p>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Close Modal
        </button>
      </Modal>
    </main>
  );
}
