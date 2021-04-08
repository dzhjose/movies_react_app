import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import {FiSun} from 'react-icons/fi';
import {RiMoonClearFill} from 'react-icons/ri';

const ButtonDarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <label>
    {
      isDark() ? <FiSun size="2em"/> : <RiMoonClearFill size="2em"/>
    }
      
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        style={{display:'none'}}
      ></input>
    </label>
  );
};

export default ButtonDarkMode;
