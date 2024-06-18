"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const currentPoint = { x: 0, y: 0 };
    const targetPoint = { x: 0, y: 0 };

    function lerp() {
      const dx = targetPoint.x - currentPoint.x;
      const dy = targetPoint.y - currentPoint.y;
      currentPoint.x += dx * 0.03;
      currentPoint.y += dy * 0.03;
      setX(currentPoint.x);
      setY(currentPoint.y);
    }

    const handleMouseMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      targetPoint.x = clientX;
      targetPoint.y = clientY;
    };

    function animateCursor() {
      lerp();
      requestAnimationFrame(animateCursor);
    }

    document.addEventListener("pointermove", handleMouseMove);
    animateCursor(); // Start the animation loop

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={
        {
          "--x": `${x}px`,
          "--y": `${y}px`,
        } as React.CSSProperties
      }
      className="cursor hidden md:block"
    />
  );
}
