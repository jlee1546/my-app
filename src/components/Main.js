import React from "react";

function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--list">
        <li className="main--list-item">Was first released in 2013</li>
        <li className="main--list-item">
          Was originally created by Jordan Walke
        </li>
        <li className="main--list-item">Has well over 100K stars on Github</li>
        <li className="main--list-item">Is maintained by Facebook</li>
        <li className="main--list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}

export default Main;
