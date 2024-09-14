import React from "react";
import Nav from "../components/Navbar/Nav";
import Foot from "../components/Footer/Foot";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const widthOfLayout = "xl:w-7/10 md:w-3/4  sm:w-11/12 lg:w-3/4";

  return (
    <div className="flex flex-col w-full items-center">
      <div className="bg-white flex items-center justify-center w-full">
        <Nav widthOfLayout={widthOfLayout} />
      </div>
      <div className={`${widthOfLayout} flex items-center flex-col`}>{children}</div>
      <div className="bg-white flex justify-center h-40 items-center mt-12 w-full">
        <Foot widthOfLayout={widthOfLayout} />
      </div>
    </div>
  );
};

export default Layout;
