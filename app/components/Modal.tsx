import React, { ReactNode } from "react";
import { animated, config, useSpring } from "@react-spring/web";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
    },
    config: config.stiff, // Customize tension and friction for a smooth animation
  });

  const transition = useSpring({
    from: { transform: "scale(0.5)", opacity: 0 },
    to: {
      transform: isOpen ? "scale(1)" : "scale(0.5)",
      opacity: isOpen ? 1 : 0,
    },
    config: config.wobbly,
  });

  if (!isOpen) return null;

  return (
    <animated.div
      style={fade}
      className={"fixed inset-0 flex items-center justify-center z-50"}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <animated.div style={transition}>
        <div className=" bg-white p-6 rounded shadow-md"> {children}</div>
      </animated.div>
    </animated.div>
  );
};
