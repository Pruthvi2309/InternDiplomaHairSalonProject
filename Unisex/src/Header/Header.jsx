import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <div>
                <header>
                    <section className="navsection">

                        <nav>
                            <ul class="nav-bar">
                                <li class="logo"><a href="#"><img src="./images/logo.png" alt="" /></a></li>
                                <input type="checkbox" id="check" />
                                <span class="menu">
                                    <li><NavLink to="/" href="#">Home</NavLink></li>
                                    <li><NavLink to="/Services" href="#">Services</NavLink></li>
                                    <li><NavLink to="/Cards" href="#">Product</NavLink></li>
                                    <li><NavLink to="/Abo" href="#">About</NavLink></li>
                                    <li><NavLink to="/contact" href="#">Contact</NavLink></li>
                                    <label for="check" class="close-menu"><i class='bx bx-x'></i></label>
                                </span>

                                <label for="check" class="open-menu"><i class='bx bx-menu'></i></label>
                            </ul>
                        </nav>
                    </section>
                </header>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

*{
	margin: 0;
	padding: 0;
    box-sizing:border-box;
	font-family: 'Poppins', sans-serif;
}

header{
	// width: 100%;
	// height: 100vh;
    justify-content:center;
    align-items:center;
}

  .nav-bar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #000 ;
    position: relative;
    background-color: transparent;
    padding: 12px 20px;
    column-gap: 40rem;
  }

  .logo img{
    width: 40px;
  }

  .menu{
    display: flex;
  }

  .menu li{
    padding-left: 45px;
  }

  .menu li a{
    display: inline-block;
    font-size: 20px;
    text-decoration: none;
    color: var(--color1);
    text-align: center;
    transition: 0.15s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }


nav a:after{
    content: '';
    width: 0%;
    height: 2px;
    background: #000;
    display: block;
    margin: auto;
    transition: 0.6s;
  }
  
nav a:hover:after{
    width: 100%;
}
  .open-menu, .close-menu{
    position: absolute;
    // color: var(--color1);
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
  }

  .open-menu{
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .close-menu{
    top: 20px;
    right: 20px;
  }

  #check{
    display: none;
  }
  `;
export default Header
