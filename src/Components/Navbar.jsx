import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle, faBell, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ handleData }) => {
  const [login, setLogin] = useState(false);
  const [bg, setBg] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setLogin(false);
        setBg(false);
      }
    };

    document.body.addEventListener('click', handleClickOutsideNavbar);

    return () => {
      document.body.removeEventListener('click', handleClickOutsideNavbar);
    };
  }, []);

  function displayLog() {
    setLogin(!login);
    setBg(!bg);
  }

  handleData(bg);

  return (
    <>
      <div className={bg ? "blurred Nav" : "Nav"} ref={navbarRef}>
        <h2>GRAPHIC</h2>

        <div>
          <input type="text" className="input" placeholder="Search for news" />
          <div className="searchButton">
            <FontAwesomeIcon className="srchIcon" icon={faSearch} />
          </div>
        </div>

        <div className="btnButtons">
          <button className="btnSign" onClick={displayLog}>Sign in</button>
          <FontAwesomeIcon onClick={displayLog} icon={faUserCircle} className="faUser" />
        </div>
      </div>

      {login && (
        <div className="sideBar">
          <h4 style={{ textAlign: "center", color: "gray" }}>Welcome to GRAPHIC</h4>

          <div className='mainLinks'>
            <Link to="/Home" className='link'>Home</Link>
            <Link to="/International" className='link'>International</Link>
          </div>

          <div className="mainButton">
            <button className="btnSignin">Sign in</button>
            <button className="btnCreate">
              <span>Create an Account</span>
            </button>
          </div>

          <div className="notifyButton">
            <button>
              Home&nbsp;
              <FontAwesomeIcon icon={faHome} />
            </button>
            <button className="btnBell">
              Subscribe&nbsp;
              <FontAwesomeIcon className="bell" icon={faBell} />
            </button>
          </div>

          <div className="AboutPage"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
