import React from 'react'
import './Home1.css'
// import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
		<section class="navsection">	
			<div class="logo">
                <h1>New Jersey</h1>
			</div>
			
			<nav class="sideNav">
				<a to="/" href="#">HOME</a>
				<a to="/service" href="#">services</a>
				<a to="/about" href="#">about</a>
				<a to="/contact" href="#">contact</a>
			</nav>
		</section>   
	
    <section className="banner">
        <div class="banner-text">
            <h1>New Jersey</h1>
            <p>Styling Your Hair is Styling Your Life</p>

            <div class="banner-btn">
                <a href="#"><span></span>Read More</a>
                <a href="#"><span></span>Book Appointment</a>
            </div>
        </div>
    </section>

    
    {/* --Services-- */}
    
    <h1 className='servic'>Services</h1>
    
    <section id="service">
        <div className="service-box">
            <div className="single-service">
                <img src="./Images/images2.jpg"/>
              <div className="overlay"></div>
                <div className="service-desc">
                  <h3>Male</h3>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                  <a href="#"><button className='btn'>View More</button></a>
                </div>
              </div>
          </div>

          {/* -- */}

          <div className="service-box">
            <div className="single-service">
                <img src="./Images/images2.jpg"/>
              <div className="overlay"></div>
                <div className="service-desc">
                  <h3>Female</h3>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                  <a href="#"><button className='btn'>View More</button></a>
                </div>
              </div>
          </div>
      </section>
    {/* -Services- */}
</header>

    {/* --Footer */}
    <footer>
        <div class="footer-content">
            <h3>New Jersey</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.</p>

            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Innobrains. Designed By <span></span></p>
        </div>
    </footer>
    {/* --Foorter-- */}
    </div>
  )
}

export default Home
