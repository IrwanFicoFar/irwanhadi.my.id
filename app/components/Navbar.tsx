"use client";
import React, { MouseEventHandler, ReactNode, useState } from "react";
import { ButtonNav } from "./Button";
import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
} from "@react-spring/web";

import { useEffect } from "react";

export const Navbar = ({
  onClickHome,
  onClickAbout,
  onClickTools,
  onClickProject,
  onClickContact,
}: {
  onClickHome: MouseEventHandler<HTMLButtonElement>;
  onClickAbout: MouseEventHandler<HTMLButtonElement>;
  onClickTools: MouseEventHandler<HTMLButtonElement>;
  onClickProject: MouseEventHandler<HTMLButtonElement>;
  onClickContact: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const navAnimation = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
  });

  // const transitions = useTransition(
  //   router.pathname,
  //   (pathname) => ({
  //     pathname,
  //     opacity: 0,
  //   }),
  //   {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   }
  // );

  return (
    <>
      <nav className="hidden lg:flex justify-end items-center w-full gap-10 px-36 font-medium text-purple-500 ">
        <ButtonNav label="Home" onClick={onClickHome} />
        <ButtonNav label="About" onClick={onClickAbout} />
        <ButtonNav label="Tools" onClick={onClickTools} />
        <ButtonNav label="Project" onClick={onClickProject} />
        <ButtonNav label="Contact" onClick={onClickContact} />
      </nav>
      {/* <nav className=" p-4 px-36">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-bold text-lg lg:hidden">
              Your Logo
            </span>
          </div>
          <div className="lg:hidden ">
            <button
              className="text-white focus:outline-none"
              onClick={handleToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <animated.div
          style={navAnimation}
          className="flex-col lg:hidden mt-4 md:mt-0 bg-blue-500"
        >
          <a href="#" className="block text-white py-2 md:py-0">
            Home
          </a>
          <a href="#" className="block text-white py-2 md:py-0">
            About
          </a>
          <a href="#" className="block text-white py-2 md:py-0">
            Services
          </a>
          <a href="#" className="block text-white py-2 md:py-0">
            Contact
          </a>
        </animated.div>
      </nav> */}
    </>
  );
};

export const Sidenavbar = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [index, set] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    // <div className={`flex fill ${styles.container}`} onClick={onClick}>
    <div></div>
    // </div>
  );
};
