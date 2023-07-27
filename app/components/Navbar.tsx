import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { ButtonNav } from "./Button";

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
  return (
    <div className="flex justify-end items-center w-full gap-10 px-36 font-medium text-purple-500">
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}

        label="Home"
        onClick={onClickHome}
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}

        label="About me"
        onClick={onClickAbout}
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}

        label="Tools"
        onClick={onClickTools}
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}

        label="Project"
        onClick={onClickProject}
      />
      <ButtonNav
        // handleScrollToElement={handleScrollToAbout}

        label="Contact"
        onClick={onClickContact}
      />
    </div>
  );
};
