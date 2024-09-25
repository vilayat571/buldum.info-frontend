import React from "react";
import Nav from "../components/Navbar/Nav";
import Foot from "../components/Footer/Foot";
import { motion } from "framer-motion";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const widthOfLayout = "xl:w-7/10 md:w-3/4 px-4 sm:w-11/12 lg:w-3/4";

  return (
    <motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <div className="flex flex-col w-full items-center">
      <div className="bg-white flex items-center sticky top-0 left-0 justify-center w-full">
        <Nav widthOfLayout={widthOfLayout} />
      </div>
      <div className={`${widthOfLayout} flex items-center flex-col`}>
        {children}
      </div>
      <div className="bg-white flex justify-center flex-col h-auto items-center mt-12 w-full">
        <Foot widthOfLayout={widthOfLayout} />
      </div>
    </div>
    </motion.div>
  );
};

export default Layout;
