'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ThemeButton = () => {
  const [theme, setTheme] = useState(Cookies.get('theme') || 'default');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    Cookies.set('theme', theme, { expires: 365 });
  }, [theme]);

  const handleThemeChange = (themeOption) => {
    setTheme(themeOption);
  };

  return (
    <div className="dropdown dropdown-hover my-auto">
      {/* Trigger Dropdown */}
      <label tabIndex="0" className="btn btn-ghost m-1">
        Theme <svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
      </label>

      {/* Dropdown Content */}
      <ul
        tabIndex="0"
        className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-52 p-2"
      >
        {['light', 'dark', 'system'].map((themeOption) => (
          <li key={themeOption}>
            <a
              className="hover:bg-base-100 cursor-pointer px-4 py-2"
              onClick={() => handleThemeChange(themeOption)}
            >
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeButton;
