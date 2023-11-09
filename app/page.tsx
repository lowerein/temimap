"use client";

import Image from "next/image";
import RobotIcon from "./components/RobotIcon";
import { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // const intervalId = setInterval(
    //   () =>
    //     setLocation({
    //       x: location.x < 520 ? location.x + 5 : 0,
    //       y: location.y < 520 ? location.y + 5 : 0,
    //     }),
    //   50
    // );

    const intervalId = setInterval(
      () =>
        setLocation({
          x: Math.random() * 520,
          y: Math.random() * 520,
        }),
      200
    );

    return () => clearInterval(intervalId);
  }, [location]);

  return (
    <main className="flex flex-col h-screen p-12">
      <div className="text-3xl font-bold px-1">Temi Delivery</div>

      <div className="flex h-full flex-row items-center justify-between p-24">
        <div className="flex flex-col w-full h-full space-y-2 items-center justify-center">
          <div className="flex flex-row">
            <div className="w-36 text-2xl">From:</div>
            <div className="flex flex-col mx-2 space-y-2">
              <input type="text" className="w-full h-full border" />
              <button className="text-2xl font-bold text-white bg-black">
                Come Here
              </button>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-36 text-2xl">Deliver to:</div>
            <div className="flex flex-col mx-2 space-y-2">
              <input type="text" className="w-full h-full border" />
              <button className="text-2xl font-bold text-white bg-black">
                Deliver
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full grow space-y-3">
          <div className="text-3xl font-bold">Map</div>
          <div className="relative w-full h-full">
            <Image src="/map.png" fill alt="Map" />

            <div
              className="absolute w-8 h-8"
              style={{ left: location.x, top: location.y }}
            >
              <RobotIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
