import { useState, useContext } from "react";
import { ThemeContext } from "./Layout";

function SpeakersToolbar({ showSessions, setShowSessions }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <div className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select
                  value={theme}
                  name=""
                  id=""
                  className="form-control theme"
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
