import Image from "next/image";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {
  page: string;
}

function Navbar({ page }: NavbarProps) {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
      className={`transition-all duration-500 ${
        shouldAnimate
          ? "fixed w-full px-10 z-[50] bg-black flex-row flex items-center justify-between"
          : "flex flex-col justify-center items-center"
      }`}
    >
    <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: shouldAnimate ? 0.9 : 1 }}
        transition={{ duration: 0.5 }}
       
        className={` ${shouldAnimate ? "py-5" : "py-10"} `}
      >
        <Image
          src="/logo.png"
          width={shouldAnimate ? 200 : 320}
          height={shouldAnimate ? 200 : 320}
          alt={""}
        />
      </motion.div>

      <motion.div
        className={`${inter.className} gap-5 flex`}
        initial={{ opacity: 1 }}
        animate={{ opacity: shouldAnimate ? 1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href=""
          className={` ${page == "home" ? "text-white" : "text-gray-500 hover:text-white"}  `}
        >
          HOME
        </a>
        <a
          href=""
          className={` ${page == "service" ? "text-white" : "text-gray-500 hover:text-white"}  `}
        >
          SERVICES
        </a>
        <a
          href=""
          className={` ${page == "aboutus" ? "text-white" : "text-gray-500 hover:text-white"}  `}
        >
          ABOUT US
        </a>
        <a
          href=""
          className={` ${
            page == "franchising" ? "text-white" : "text-gray-500 hover:text-white"
          }  `}
        >
          FRANCHISING
        </a>
      </motion.div>

      <AnimatePresence>
        {!shouldAnimate && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 top-0"
          >
            <Image src="/design/curve.png" width={150} height={150} alt={""} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
