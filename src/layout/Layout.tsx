import React from "react";
import Nav from "../components/Navbar/Nav";
import Foot from "../components/Footer/Foot";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col  items-center">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
