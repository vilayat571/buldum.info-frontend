import React from "react";
import Nav from "../components/Navbar/Nav";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col pb-20 items-center">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
