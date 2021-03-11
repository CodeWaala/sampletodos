import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
    }

    const closeMenu = () => {
        setNavbarOpen(false)
      }

    return (
        <div className="navbar">
         <nav>
          <button onClick={handleToggle}>
           {navbarOpen ? (
              <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
              <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about-app" onClick={closeMenu}>About App</Link>
            </li>
            <li>
              <Link to="/about-author" onClick={closeMenu}>About Author</Link>
            </li>
          </ul>
         </nav>
        </div>
    )
}

export default NavBar;
