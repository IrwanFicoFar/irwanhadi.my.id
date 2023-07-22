"use client";

import { animated, useSpring } from "@react-spring/web";

export default function Home() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  return (
    <main className="min-h-screen">
      <div className="text-white bg-section1 px-36 py-28 min-h-screen">
        <animated.div
          onClick={handleClick}
          style={{
            width: 80,
            height: 80,
            background: "#ff6d6d",
            borderRadius: 8,
            ...springs,
          }}
        />
      </div>
    </main>
  );
}
