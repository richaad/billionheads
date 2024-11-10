import React from "react";

import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";

const jost = Jost({
  weight: "300",
  subsets: ["latin"],
});
const jost2 = Jost({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const poppins2 = Poppins({
  weight: "300",
  subsets: ["latin"],
});

function Main() {
  return (
    <main className="container mx-auto px-4 mt-32">
      <div className="flex justify-evenly items-start">
        {/* Left Content */}

        <div className="space-y-14">
          <div className="space-y-3">
            <p className={` ${jost.className} text-xl `}>
              Welcome to{" "}
              <span className={` text-yellow-500 text-4xl logo-text`}>
                BILLION HEADS
              </span>
            </p>

            <p
              className={` ${poppins.className} text-lg bg-[#E89100] text-black inline-block text-center font-bold w-[380px] px-4 py-1 rounded-2xl`}
            >
              "WHERE EVERY HEAD COUNTS"
            </p>
          </div>
          <div className="space-y-2 w-[23.9rem]">
            <h2 className="text-3xl font-bold">
              Best Unisex Salon For A Professional Look
            </h2>
            <p className={`${poppins2.className}  text-gray-400`}>
              Billion Heads offers high performance customized facials to
              provide you with visible results.
            </p>
            <div className="flex gap-16">
              <button
                className={` ${jost2.className}  bg-[#E89100] text-black px-4 py-3 rounded-xl hover:bg-[#E5C100] transition-colors`}
              >
                ALL SERVICES
              </button>
              <button
                className={`${jost2.className} border border-[#E89100] text-[#E89100] px-6 py-3 rounded-xl hover:bg-[#E89100] hover:text-black transition-colors`}
              >
                JOIN US
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center bg-gradient-to-br from-[#ba9d44] via-[#FFA500] to-[#DAA520] rounded-t-full p-[3px] shadow-lg shadow-orange-500/50 glow-orange">
          <div className="h-full w-full bg-black rounded-t-full flex justify-center items-center overflow-hidden">
            <video src="/assets/intro.MOV" autoPlay loop  className="w-[20rem] filter brightness-75"></video>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
