"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { RadioTower } from "lucide-react";
import Link from "next/link";
export function ImagesSliderDemo() {
  const images = [
    "/images/ufc.jpg",
    "/images/football.jpg",
    "/images/boxing.jpg",
    "/images/f1.jpg",
  ];
  return (
    <>
      <div className=" w-full h-screen top-0 left-0 absolute z-0 bg-black/20" />

      <ImagesSlider
        className="absolute h-screen w-full top-0 left-0 -z-10"
        images={images}
      >
        <span className="hidden" />
      </ImagesSlider>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className=" z-10 h-[calc(100vh-50px)] w-full flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The Ultimate HD Experience, <br /> Ad-Free.
        </motion.p>
        <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
          <Link href={"/pricing"}>
            <button className="relative select-none outline-0 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none  ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="outline-0 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View Premium Plans
              </span>
            </button>
          </Link>
          <Link href={"/live"}>
            <button className="p-[3px] relative cursor-pointer ">
              <div className="absolute inset-0 bg-primary rounded-lg" />
              <div className="px-4 py-2 flex gap-1 items-center  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent  font-bold group ">
                LIVE STREAM{" "}
                <RadioTower className="animate-pulse stroke-red-500 group-hover:stroke-white" />
              </div>
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
