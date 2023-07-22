import Link from "next/link";
import React from "react";
import { ButtonNav } from "./Button";

export const Navbar = () => {
  return (
    <div className="absolute top-0 pt-28 flex justify-end items-center w-full gap-12 px-36 font-medium text-fuchsia-300">
      <ButtonNav linkTo="#" label="Home" />
      <ButtonNav linkTo="#" label="About me" />
      <ButtonNav linkTo="#" label="Tools" />
      <ButtonNav linkTo="#" label="Project" />
      <ButtonNav linkTo="#" label="Contact" />
      <ButtonNav linkTo="#" label="Vlog" />
    </div>
  );
};
