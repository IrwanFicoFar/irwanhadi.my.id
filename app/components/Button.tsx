import Link from "next/link";
import React, { MouseEventHandler, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
export const ButtonNav = ({
  label,
  addClass,
  onClick,
}: // handleScrollToElement,
{
  label: string;

  addClass?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  // handleScrollToElement: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  const parallax = useRef<IParallax>(null!);
  return (
    <button onClick={onClick}>
      <div
        className={`py-2 px-6 rounded-xl ${addClass} border-2 border-white border-opacity-0 hover:border-white hover:border-opacity-25 hover:bg-btn-navbar duration-300 hover:text-white`}
      >
        {/* <a onClick={handleScrollToElement}> {label}</a> */}
        {label}
      </div>
    </button>
  );
};
