"use client";
import React from "react";
import {useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Why from "@/components/why";
import Service from "@/components/service";


const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div
      style={{
        backgroundImage: "url('design/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen   text-white overflow-hidden"
      ref={ref}
    >
      {window.innerWidth < 900 && (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
        <p>Please use a larger screen to view this content.</p>
      </div>
    )}
      <Navbar page="home" />
      <Main/>
      <Why/>
      <Service/>
    </div>
  );
};

export default Home;
