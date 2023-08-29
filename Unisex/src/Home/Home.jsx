import React from 'react'
// import './Home1.css'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Home = () => {
    return (
        <Wrapper>
            <div>
                <header>
                    <section className="navsection">
                        <nav>
                            <ul class="nav-bar">
                                <li class="logo"><img src="./images/logo.png" alt="" /></li>
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

                    <section className="banner">
                        <div className="banner-text">
                            <h1>New Jersey</h1>
                            <p>Styling Your Hair is Styling Your Life</p>

                            <div className="banner-btn">
                                <a href="#"><span></span>Read More</a>
                                <NavLink to="/Appiontment" href="#"><span></span>Book Appointment</NavLink>
                            </div>
                        </div>
                    </section>
                    {/* --Services-- */}
                </header>
                <h1 className='servic'>Services</h1>

                <section id="service">
                    <div className="service-box">
                        <div className="single-service">
                            <img src="./images/pic-1.jpg" />
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Male</h3>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                                <a href="#"><button className='btn'>View More</button></a>
                            </div>
                        </div>
                    </div>

                    {/* -- */}

                    <div className="service-box">
                        <div className="single-service">
                            <img src="./images/pic-2.jpg" />
                            <div className="overlay"></div>
                            <div className="service-desc">
                                <h3>Female</h3>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                                <a href="#"><button className='btn'>View More</button></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --Footer */}
                {/* <footer>
        <div className="footer-content">
            <h3>New Jersey</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.</p>

            <ul className="socials">
                <li><a href="#"><i class='bx bxl-facebook-square' ></i></a></li>
                <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                <li><a href="#"><i class='bx bxl-google-plus-circle' ></i></a></li>
                <li><a href="#"><i class='bx bxl-instagram-alt'></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Innobrains. Designed By <span></span></p>
        </div>
    </footer> */}
                {/* --Foorter-- */}
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
	width: 100%;
	height: 100vh;
    justify-content:center;
    align-items:center;
    background: linear-gradient(rgba(0,0,0,0.5),#663300), url(./images/banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}


// body{
//     --color1: #FFF;
//     --color2: #181818;
//   }

  .nav-bar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #fff ;
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
    background: #fff;
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


.banner-text{
    text-align: center;
    color: #fff;
    padding-top: 180px;
}

.banner-text h1{
    font-size: 130px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-family: 'Kaushan Script', cursive;
}

.banner-text p{
    font-size: 18px;
    font-style: italic;
}

.banner-btn{
    margin: 70px auto 0;
}

.banner-btn a{
    /* width: 150px; */
    text-decoration: none;
    display: inline-block;
    margin: 0 10px;
    padding: 12px 14px; 
    /* box-shadow: 0 10px 20px -5px #00000070; */
    color: #fff;
    border: 1px solid #fff;
    position: relative;
    z-index: 1;
    transition: color 0.5s;
}

.banner-btn a span{
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: -1;
    transition: 0.5s;
}

.banner-btn a:hover span{
    width: 100%;
}

.banner-btn a:hover{
    color: #000;
}

/* == Services == */

.servic{
	display: flex;
	justify-content: center;
	font-size: 40px;
    font-family: 'Kaushan Script', cursive;
}

#service{
	margin-top: 10px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 3.5%;
}

.service-box{
    width: 80%;
    /* display: flex;
    flex-wrap: wrap;*/
    justify-content: space-around;
    margin: auto;
}

.single-service{
    flex-basis: 48%;
    text-align: center;
    border-radius: 7px;
    margin-bottom: 20px;
    color: #fff;
    position: relative;
}

.single-service img{
    width: 100%;
    border-radius: 7px;
}

.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 7px;
    cursor: pointer;
    background: linear-gradient(rgba(0,0,0,0.5),#663300);
    opacity: 0;
    transition: 1s;
}

.single-service:hover .overlay{
    opacity: 1;
}

.service-desc{
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: 1s;
}

.service-desc h3{
	font-size: 28px;
}

hr{
    background: #fff;
    height: 2px;
    border: 0;
    margin: 15px auto;
    width: 60%;
}

.service-desc p{
    font-size: 14px;
}

.single-service:hover .service-desc{
    bottom: 40%;
    opacity: 1;
}

.btn{
	padding: 4px 16px;
	margin-top: 8px;
	border: 2px solid #fff;
	background-color: #663300;
	box-shadow: 0 10px 20px -5px #00000070;
	color: #fff;
	border-radius: 50px;
}

/* Footer- */

footer{
    position: absolute;
    bottom: -125%;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;
    font-family: 'poppins', sans-serif;
    padding-top: 35px;
    color: #fff;
    width: 100%;
}

.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.footer-content h3{
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
}

.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
}

.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}

.socials li{
    margin: 0 10px;
}

.socials a i{
    font-size: 1.2rem;
    color: ghostwhite;
    transition: 0.2s linear;
}

.socials li a i:hover{
    color: #33ff33;
}

.footer-bottom{
    background: #000;
    /* width: 100vw; */
    padding: 20px 0;
    text-align: center;
}

.footer-bottom p{
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 400;
}

 /* Mobile Styles */
 @media(max-width: 768px) {

    header {
        width: 100%;
        height: 100.5vh;
        padding: 20px 0;
        background-position: center;
        background-size: cover;
    }
    
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

     nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    nav a {
        font-size: 16px;
        margin: 5px 0;
    }

     .banner-text {
        padding-top: 100px;
    }
    
    .banner-text h1 {
        font-size: 80px;
        margin-top: 25%;
    }

    .banner-text p{
        font-size: 18px;
        margin-top: 2%;
    }

    
    .banner-btn{
        margin: 6%;
    }

    .banner-btn a{   
        padding: 8px 12px;
    } 


    .servic {
        // margin-top: 106%;
        font-size: 30px;
    }
    
    #service {
        grid-template-columns: 1fr;
        margin-top: 20px;
    }
    
    .single-service {
        flex-basis: 100%;
        margin-bottom: 40px;
    }
 
    footer {
        bottom: -100%;
        padding-top: 20px;
    }
    
    .footer-content h3 {
        font-size: 1.4rem;
        line-height: 2rem;
    }
    
    .socials li {
        margin: 0 15px;
    }
    
}
`;


export default Home
