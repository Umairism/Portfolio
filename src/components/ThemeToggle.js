import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleTheme} style={{ position: "fixed", top: "10px", right: "10px" }}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
