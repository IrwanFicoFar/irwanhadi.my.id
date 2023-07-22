import Link from "next/link";
import React from "react";

export const ButtonNav = ({
  label,
  linkTo,
}: {
  label: string;
  linkTo: string;
}) => {
  return (
    <Link href={linkTo}>
      <div className="py-2 px-6 rounded-xl border-2 border-white border-opacity-0 hover:border-white hover:border-opacity-25 hover:bg-btn-navbar duration-300 hover:text-white">
        {label}
      </div>
    </Link>
  );
};
