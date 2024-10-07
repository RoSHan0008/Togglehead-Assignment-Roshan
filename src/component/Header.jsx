import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav-menu">
        <div className="nav-item">
          Qualifications <KeyboardArrowDownIcon fontSize="small" />
        </div>
        <div className="nav-item">
          Organizations <KeyboardArrowDownIcon fontSize="small" />
        </div>
        <div className="nav-item">
          Research & Analysis <KeyboardArrowDownIcon fontSize="small" />
        </div>
        <div className="nav-item">
          Lorem ipsum <KeyboardArrowDownIcon fontSize="small" />
        </div>
      </nav>
      <div className="search-enrolment">
      <SearchIcon className="search-icon"/>
        <button className="enrolment-button">Enrolment</button>
      </div>
    </header>
  );
}

export default Header;
