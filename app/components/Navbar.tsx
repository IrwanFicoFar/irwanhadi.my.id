import Link from "next/link";
import React from "react";
import { ButtonNav } from "./Button";

export const Navbar = () => {
  return (
    <div className="flex justify-end items-center w-full gap-10 px-36 font-medium text-purple-500">
      <ButtonNav linkTo="#" label="Home" />
      <ButtonNav linkTo="#about" label="About me" />
      <ButtonNav linkTo="#tools" label="Tools" />
      <ButtonNav linkTo="#" label="Project" />
      <ButtonNav linkTo="#" label="Contact" />
      <ButtonNav linkTo="#" label="Vlog" />
    </div>
  );
};
