import React from "react";
import Navbar from "./../src/components/Navbar";
import Main from "../src/components/Main";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
    console.log(darkMode);
  }

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
