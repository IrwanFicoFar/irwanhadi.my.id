import Link from "next/link";
import React from "react";
import { ButtonNav } from "./Button";

export const Navbar = () => {
  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-end items-center w-full gap-10 px-36 font-medium text-purple-500">
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}
        linkTo="#"
        label="Home"
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}
        linkTo="#about"
        label="About me"
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}
        linkTo="#tools"
        label="Tools"
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}
        linkTo="#project"
        label="Project"
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}
        linkTo="#"
        label="Contact"
      />
    </div>
  );
};
