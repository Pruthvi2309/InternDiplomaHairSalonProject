import React from 'react'
import './Nav1.css'
const nav = () => {
  return (
    <div>
      <header>
        <section className="navsection">
          <nav>
            <ul class="nav-bar">
              <li class="logo"><a href="#"><img src="./images/logo.png" alt="" /></a></li>
              <input type="checkbox" id="check" />
              <span class="menu">
                <li><a to="/" href="#">Home</a ></li>
                <li><a to="/Services" href="#">Services</a></li>
                <li><a to="/Cards" href="#">Product</a></li>
                <li><a to="/Abo" href="#">About</a></li>
                <li><a to="/contact" href="#">Contact</a></li>
                <label for="check" class="close-menu"><i class='bx bx-x'></i></label>
              </span>

              <label for="check" class="open-menu"><i class='bx bx-menu'></i></label>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  )
}

export default nav