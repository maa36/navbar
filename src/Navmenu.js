import React from "react";
import Navlist from "./Nav";

const navs = [
  {
    link: "Home",
    etat: false ,
  },
  {
    link: "Services",
    etat: true,
    subnav: [
      
        "For entrepreneurs"
      ,
      
        "For students"
      ,
      
         "For hobbyists"
      
    ],
  },
  {
    link: "Contact",
    etat: false,
  }
];

function Nav() {
  return (
    <div className="menu">
      <Navlist List={navs} />
    </div>
  );
}

export default Nav;
