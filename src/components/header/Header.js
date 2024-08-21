import { AiOutlineMoon, AiFillSun } from "react-icons/ai";
import "./header.css";

function Header({ isDark, onToggleDark }) {
  return (
    <div className="header">
      <h1>devfinder</h1>
      <button className="theme-toggle-btn" onClick={onToggleDark}>
        {isDark ? (
          <span>
            Light <AiFillSun />
          </span>
        ) : (
          <span>
            Dark <AiOutlineMoon />
          </span>
        )}
      </button>
    </div>
  );
}

export default Header;
