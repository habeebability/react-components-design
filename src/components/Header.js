import { ThemeContext } from "./App";
import { useContext } from "react";
function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/SVCClogo.png" alt="SVCC Home page" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley code camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr. Smith &nbsp;&nbsp;
            <span>
              <a href="#">Sign out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
