import React from 'react'
import './About.css'
import { Carousel } from 'react-bootstrap';

const Aboutus = () => {
  return (
    <div>
      <section className="section">
        <h1 className='heading'><u>About Us</u></h1>
        <div className='banner'>
        <img src="Images/logo.png" alt="Barber Image" className='img' />


            <h1 className='title'>New Jersey Unisex Salon</h1>
            <p><i>Welcome to New Jersey, where beauty meets elegance and pampering is our expertise!

At New Jersey, we believe that every individual deserves to look and feel their absolute best. We are a premier salon that offers a wide range of luxurious beauty and grooming services, designed to enhance your natural beauty and boost your confidence.

Our team of highly skilled and passionate professionals is committed to providing you with an exceptional experience from the moment you step through our doors. We take pride in creating a warm and inviting atmosphere where you can unwind and escape the stresses of everyday life.

With years of experience in the industry, our stylists, estheticians, and technicians are experts in their respective fields. </i></p>

        </div>
 



    {/* <!-- Carousel wrapper --> */}
    

        <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
             =
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"/>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                    doloremque.
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
           
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"/>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis.
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"/>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                    doloremque.
                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
            data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
            data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

{/* <!-- Carousel wrapper --> */}


      </section>  
    </div>
  )
}

export default Aboutus