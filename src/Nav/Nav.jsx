import React, { useState, useEffect, useRef } from 'react';
import './Nav1.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wrapper>
      <section className="navsection">
        <nav ref={menuRef}>
          <ul className="nav-bar">
            <li className="logo">
              <a href="#">
                <img src="./images/NJ-Logo.png" alt="" />
              </a>
            </li>
            <input type="checkbox" id="check" />
            <span className={`menu ${menuOpen ? 'open' : ''}`}>

              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/Cards">Product</NavLink>
              </li>
              <li>
                <NavLink to="/Abo">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <label htmlFor="check" className="close-menu" onClick={toggleMenu}>
                <i className="bx bx-x"></i>
              </label>
            </span>

            <label htmlFor="check" className="open-menu" onClick={toggleMenu}>
              <i className="bx bx-menu"></i>
            </label>
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  --color1: #000;
  --color2: #181818;
}

.nav-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: #fff;
  position: relative;
  background-color: #000;
  padding: 12px 20px;
  column-gap: 40rem;
}

.logo img {
  width: 40px;
}

.menu {
  display: flex;
}

.menu li {
  padding-left: 45px;
}

.menu li a {
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  transition: 0.15s ease-in-out;
  position: relative;
  text-transform: uppercase;
}


nav a:after {
  content: '';
  width: 0%;
  height: 2px;
  background: #3498db;
  display: block;
  margin: auto;
  transition: 0.6s;
}

nav a:hover:after {
  width: 100%;
}

.open-menu,
.close-menu {
  position: absolute;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
}

.open-menu {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.close-menu {
  top: 20px;
  right: 20px;
}

#check {
  display: none;
}

@media(max-width: 1346px){
  .logo img{
    float: left;
}

.menu{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 100;
  background: #181818;
  opacity: .9;
  transition: all 0.2s ease-in-out;
}

.menu li{
  margin-top: 40px;
}

.menu li a{
  padding: 10px;
}

.open-menu, .close-menu{
  display: block;
}

#check:checked ~ .menu{
  right: 0;
}

}

`;

export default Nav;