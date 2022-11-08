import React from "react";

function Navbar(props) {
  console.log(props.darkMode);
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img
        id="react-icon"
        src="../logo192.png"
        alt="React Icon"
        className="nav--icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
