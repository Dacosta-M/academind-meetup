import React from "react";
import MainNavigation from "./MainNavigation";
import './Layout.css' 

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation/>
        <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
