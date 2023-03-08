import React, { Children } from "react";
import { FaBars, FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaUserAlt />,
    },
    {
      path: "/comments",
      name: "Comments",
      icon: <FaUserAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaUserAlt />,
    },
    {
      path: "/productlist",
      name: "Productlist",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icons">{item.icon}</div>
            <div className="icons">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default sidebar;
