import React from "react";
import { NavLink } from "react-router-dom";

function Header()
{
    const navLinkStyles = ({ isActive }) => {
        return {
            color : isActive ? "#FFBB5C" :"white",
            fontWeight: isActive ? "bold" : "normal",
     
        };
      };
    return(
        <div className="header">
        <div className="nav">
        <li><NavLink to='/' style={navLinkStyles}>Home</NavLink></li>
        <li><NavLink to='/about' style={navLinkStyles}> About Us </NavLink></li>
        <li><NavLink to='/contact' style={navLinkStyles}> Contact Us </NavLink></li>
        </div>
            
        </div>
    )
}
export default Header;