"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Why from "@/components/why";
import Service from "@/components/service";


const Home = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {width < 900 && (
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
