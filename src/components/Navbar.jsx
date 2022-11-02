import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">{title}</div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Profiles",
};

export default Navbar;
