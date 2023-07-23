import Link from "next/link";
import React from "react";

export const ButtonNav = ({
  label,
  linkTo,
}: // handleScrollToElement,
{
  label: string;
  linkTo: string;
  // handleScrollToElement: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <Link href={linkTo}>
      <div className="py-2 px-6 rounded-xl border-2 border-white border-opacity-0 hover:border-white hover:border-opacity-25 hover:bg-btn-navbar duration-300 hover:text-white">
        {/* <a onClick={handleScrollToElement}> {label}</a> */}
        {label}
      </div>
    </Link>
  );
};
