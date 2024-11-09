import Image from "next/image";
import React from "react";
import { BsScissors } from "react-icons/bs";
import { GiFingernail } from "react-icons/gi";
import { Poppins } from "next/font/google";
import { Jost } from "next/font/google";
import { GiBeard } from "react-icons/gi";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const jost = Jost({
  weight: "300",
  subsets: ["latin"],
});

<GiFingernail />;
function Service() {
  return (
    <div className="flex flex-col items-center mt-20 w-full ">
      <div className="px-56 py-5 bg-black border-[#e89300bb] border-2 rounded-lg">
        <div className="logo-text text-3xl">OUR SERVICE</div>
      </div>
      <div className="flex justify-evenly w-full ">
        <div className="flex justify-end items-center  relative">
          <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-[11rem]  p-9 w-[18.5rem] text-center flex flex-col items-center gap-2">
              <BsScissors className="size-20 text-[#edbf35]" />
              <p className={`${poppins.className} text-[19px]`}>HAIRCUTS</p>
              <p className={`${jost.className} text-[#9E9E9E] `}>
                Our skilled stylists offer precision haircuts tailored to your
                face shape and personal style.
              </p>
            </div>
            <Image
              src="/design/mirror.png"
              width={300}
              height={300}
              alt="why"
              className="mt-20" // Adjust margin as needed to position below the text
            />
          </div>
        </div>
        <div className=" flex justify-end items-center  relative">
          <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-[11rem]  p-9 w-[18.5rem] text-center flex flex-col items-center gap-2">
              <GiFingernail className="size-20 text-[#edbf35]" />
              <p className={`${poppins.className} text-[19px]`}>
                MANICURE SERVICES
              </p>
              <p className={`${jost.className} text-[#9E9E9E] `}>
                Our manicures feature nail shaping, cuticle care, and polish
                application. Choose from classic, gel, or creative nail art for
                a polished look that enhances your style.
              </p>
            </div>
            <Image
              src="/design/mirror.png"
              width={300}
              height={300}
              alt="why"
              className="mt-20" // Adjust margin as needed to position below the text
            />
          </div>
        </div>
        <div className=" flex justify-end items-center  relative">
          <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-[11rem]  p-9 w-[18.5rem] text-center flex flex-col items-center gap-2">
              <GiBeard className="size-20 text-[#edbf35]" />
              <p className={`${poppins.className} text-[19px]`}>
                BEARD GROOMING
              </p>
              <p className={`${jost.className} text-[#9E9E9E] `}>
                We provide detailed beard trims and shaping services to enhance
                your facial hair.
              </p>
            </div>
            <Image
              src="/design/mirror.png"
              width={300}
              height={300}
              alt="why"
              className="mt-20" // Adjust margin as needed to position below the text
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
