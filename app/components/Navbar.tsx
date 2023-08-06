"use client";
import React, { MouseEventHandler, ReactNode, useState } from "react";
import { ButtonNav } from "./Button";
import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
} from "@react-spring/web";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import IconImage from "@/public/irwan.png";

export const Navbar = ({
  handleOpen,
  onClickHome,
  onClickAbout,
  onClickTools,
  onClickProject,
  onClickContact,
}: {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
  onClickHome: MouseEventHandler<HTMLButtonElement>;
  onClickAbout: MouseEventHandler<HTMLButtonElement>;
  onClickTools: MouseEventHandler<HTMLButtonElement>;
  onClickProject: MouseEventHandler<HTMLButtonElement>;
  onClickContact: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <nav className="absolute top-5 hidden lg:flex justify-end items-center w-full gap-10 px-36 font-medium text-purple-500 ">
        <ButtonNav label="Home" onClick={onClickHome} />
        <ButtonNav label="About" onClick={onClickAbout} />
        <ButtonNav label="Tools" onClick={onClickTools} />
        <ButtonNav label="Project" onClick={onClickProject} />
        <ButtonNav label="Contact" onClick={onClickContact} />
      </nav>
      <nav className="flex lg:hidden justify-end items-center w-full gap-10 px-10 sm:px-16 md:px-24 font-medium text-purple-500 ">
        <button className="text-3xl" onClick={handleOpen}>
          <HiMenuAlt3 />
        </button>
      </nav>
    </>
  );
};

export const Sidenavbar = ({
  isOpen,
  closeSideNav,
  onClickHome,
  onClickAbout,
  onClickTools,
  onClickProject,
  onClickContact,
}: {
  isOpen: boolean;
  closeSideNav: MouseEventHandler<HTMLButtonElement>;
  onClickHome: MouseEventHandler<HTMLButtonElement>;
  onClickAbout: MouseEventHandler<HTMLButtonElement>;
  onClickTools: MouseEventHandler<HTMLButtonElement>;
  onClickProject: MouseEventHandler<HTMLButtonElement>;
  onClickContact: MouseEventHandler<HTMLButtonElement>;
}) => {
  const navAnimation = useSpring({
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
  });
  return (
    <animated.div
      style={navAnimation}
      className="flex-col p-5 lg:hidden md:mt-0 bg-blue-500 z-50"
    >
      <div className="flex justify-center py-10">
        <button onClick={closeSideNav} className="text-4xl">
          <HiX />
        </button>
      </div>
      <div className="flex flex-col">
        <ButtonNav
          label="Home"
          onClick={(e) => {
            onClickHome(e);
            closeSideNav(e);
          }}
        />
        <ButtonNav
          label="About"
          onClick={(e) => {
            onClickAbout(e);
            closeSideNav(e);
          }}
        />
        <ButtonNav
          label="Tools"
          onClick={(e) => {
            onClickTools(e);
            closeSideNav(e);
          }}
        />
        <ButtonNav
          label="Project"
          onClick={(e) => {
            onClickProject(e), closeSideNav(e);
          }}
        />
        <ButtonNav
          label="Contact"
          onClick={(e) => {
            onClickContact(e), closeSideNav(e);
          }}
        />
      </div>
    </animated.div>
  );
};
