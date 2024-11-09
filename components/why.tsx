import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { Sen } from "next/font/google";
import { Jost } from "next/font/google";
import { TbRazor } from "react-icons/tb";
import { BsScissors } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";

const jost = Jost({
  weight: "300",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const poppins2 = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const sen = Sen({
  weight: "500",
  subsets: ["latin"],
});

function Why() {
  return (
    <>
      <div className="relative">
        <Image
          className="absolute left-[-117px] top-[-26rem]"
          src="/design/curve-logo.png"
          width={600}
          height={600}
          alt="why"
        />
        <div className="py-32 flex justify-end items-end px-32">
          <div className="flex flex-col justify-center">
            <div className="absolute p-10 w-[33rem] text-center">
              <h1 className={` ${poppins.className} text-[25px] font-bold `}>
                WHY CHOOSE BILLION HEADS ?
              </h1>
              <p className={` ${poppins2.className}`}>
                Unleash the best version of you!
              </p>
              <p className={`${sen.className} text-[#9E9E9E] `}>
                At Billion Heads, we prioritize the use of high-quality,
                sustainable products that cater to all hair types and styles. We
                believe providing our clients with knowledge is important.
              </p>
            </div>
            <Image
              src="/design/HMirror.png"
              width={600}
              height={600}
              alt="why"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0000008c] flex justify-evenly py-10">
        <div className="flex flex-col items-center gap-4">
          <TbRazor className="size-20 text-[#ffd900]" />
          <h1 className="logo-text text-5xl">200</h1>
          <p className={`${jost.className} uppercase`}>Shaves</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <BsScissors className="size-20 text-[#ffd900]" />

          <h1 className="logo-text text-5xl">200</h1>
          <p className={`${jost.className} uppercase`}>HAIRCUTS</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaShop className="size-20 text-[#ffd900]" />
          <h1 className="logo-text text-5xl">200</h1>
          <p className={`${jost.className} uppercase`}>OPEN SHOPS</p>
        </div>
      </div>
    </>
  );
}

export default Why;
