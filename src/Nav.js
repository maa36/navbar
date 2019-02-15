import React from "react";

const Navlist = (props) =>
  props.List.map((n, i) =>{
    if (n.etat === true) {      
      return (
        <div className="service">
          <a key={i} href="#" className="navmenu">
            {n.link}
          </a>
          <div className="dropdown-content">
            {n.subnav.map((p, j) => {
            return <a href="#" key={j} className="navmenu"> {p} </a>
            })
             }
          </div>
        </div>
      );
    }
    return (
      <a key={i} href="#" className="navmenu">
        {n.link}
      </a>
    );
  }
  )

export default Navlist;
