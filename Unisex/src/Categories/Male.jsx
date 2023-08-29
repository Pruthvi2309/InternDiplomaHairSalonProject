// import React from 'react'
// import './Male1.css'
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

const card = () => {
  // const url = "http://localhost:4000/male";
  const [data, setData] = useState([]);

  
  const typeId = '2'; // Replace this with the actual type ID you want to fetch
const fetchdata = async () => {
  try {
    const response = await fetch(`http://localhost:4000/cards/${typeId}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });

    const responseData = await response.json();
    setData(responseData);
  } catch (error) {
    console.error('Error fetching data', error);
  }
}


  useEffect(()=>{
    fetchdata();
  }, []);

  return (
    <Wrapper>
      <div>
        {/* --- */}
        <section className='banner'>
          <h1 className='heading'><u>Male Categories</u></h1>
          <div className="middle">
            
            {data.map((elem)=>{
              return (

           
                <a className="btn" href="#" key={elem.subtype_id}>  
                <div className="img-overlay">
                  <img src="images/barber.jpg" alt="" className="card-img-top" />
                  <div className="overlay">
                    <a href="#" className='common-heading'>{elem.category}</a>
                  </div>
                  <div className="card-body">
                    <h3>Clean Up & More</h3>
                    <hr />
                    <table>
                      <tr>
                        <td>{elem.category}</td>
                        <td id='price'>{elem.price}<i class='bx bx-rupee'></i></td>
                      </tr>
                      {/* <tr>
                        <td>{elem.category}</td>
                        <td id='price'>{elem.price}<i class='bx bx-rupee'></i></td>
                      </tr> */}
                    </table>
                    <button className='button'><span>Book Now</span></button>
                  </div>
                </div>
              </a>
              
             )
            })}
            {/* -- */}
            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Facial</a>
                </div>
                <div className="card-body">
                  <h3>Facial</h3>
                  <hr /> */}
                  {/* <li className='list'>DRY SKIN / 1200<i class='bx bx-rupee'></i></li>
              <li className='list'>BRIGHTNESS / 1350<i class='bx bx-rupee'></i></li>
              <li className='list'>ALL TYPE OF SKIN / 1650<i class='bx bx-rupee'></i></li>
              <li className='list'>SENSITIVE SKIN / 1850<i class='bx bx-rupee'></i></li> */}
                  {/* <table>
                    <tr>
                      <td>DRY SKIN</td>
                      <td id='price'>1200<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>BRIGHTNESS</td>
                      <td id='price'>1350<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>ALL TYPE OF SKIN</td>
                      <td id='price'>1650<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>SENSITIVE SKIN</td>
                      <td id='price'>1850<i class='bx bx-rupee'></i></td>
                    </tr>
                  </table>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* -- */}
            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Massage</a>
                </div>
                <div className="card-body">
                  <h3>Massage</h3>
                  <hr /> */}
                  {/* <li className='list'>FACE MASSAGE / 200<i class='bx bx-rupee'></i></li>
              <li className='list'>GOLD MASSAGE / 250<i class='bx bx-rupee'></i></li>
              <li className='list'>DIAMOND MASSAGE / 300<i class='bx bx-rupee'></i></li>
              <li className='list'>PLATINUM MASSAGE / 350<i class='bx bx-rupee'></i></li>
              <li className='list'>PEARL MASSAGE / 400<i class='bx bx-rupee'></i></li> */}

                  {/* <table>
                    <tr>
                      <td>FACE MASSAGE</td>
                      <td id='price'>200<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>GOLD MASSAGE</td>
                      <td id='price'>250<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>DIAMOND MASSAGE</td>
                      <td id='price'>300<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>PEARL MASSAGE</td>
                      <td id='price'>400<i class='bx bx-rupee'></i></td>
                    </tr>
                  </table>

                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* -- */}
            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Head Massage</a>
                </div>
                <div className="card-body">
                  <h3>Head Massage</h3>
                  <hr />
                  <table>
                    <tr>
                      <td>HEAD MASSAGE</td>
                      <td id='price'>120<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>HEAD MASSAGE & SHAMPOO</td>
                      <td id='price'>150<i class='bx bx-rupee'></i></td>
                    </tr>
                  </table>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* -- */}
            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Black Mask</a>
                </div>
                <div className="card-body">
                  <h3>Black Mask</h3>
                  <hr />
                  <table>
                    <tr>
                      <td>FACE</td>
                      <td id='price'>300<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>NECK</td>
                      <td id='price'>300<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>UNDER-ARMS</td>
                      <td id='price'>200<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>PALM</td>
                      <td id='price'>200<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>HALF ARMS</td>
                      <td id='price'>200<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>FULL ARMS</td>
                      <td id='price'>300<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>HALF LEGS</td>
                      <td id='price'>300<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>FULL LEGS</td>
                      <td id='price'>1000<i class='bx bx-rupee'></i></td>
                    </tr>
                    <tr>
                      <td>FULL BODY</td>
                      <td id='price'>1500<i class='bx bx-rupee'></i></td>
                    </tr>
                  </table>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* -- */}
            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Waxing</a>
                </div>
                <div className="card-body">
                  <h3>Waxing</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>D-Tan</a>
                </div>
                <div className="card-body">
                  <h3>D-Tan</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Manicure</a>
                </div>
                <div className="card-body">
                  <h3>Manicure</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Pedicure</a>
                </div>
                <div className="card-body">
                  <h3>Pedicure</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}
{/* 
            <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Hair Color</a>
                </div>
                <div className="card-body">
                  <h3>Hair Color</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}

            {/* <a className="btn" href="#">
              <div className="img-overlay">
                <img src="images/barber.jpg" alt="" className="card-img-top" />
                <div className="overlay">
                  <a href="#" className='common-heading'>Hair Styling</a>
                </div>
                <div className="card-body">
                  <h3>Hair Styling</h3>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button className='button'><span>Book Now</span></button>
                </div>
              </div>
            </a> */}
            {/* --  */}
          </div>
        </section>
        {/* --- */}
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap'); 

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
}

.heading{
	text-align: center;
	margin-top: 2px;
	font-size: 35px;
	font-weight: 600;
}

.middle{
	position: absolute;
	top: 88%;
	transform: translateY(-50%);			
	width: 100%;
	text-align: center;
	margin-right: 25px;
	display: block;
}

.btn{
	border-radius: 20px;
	display: inline-block;
	letter-spacing: 0.5px;
	text-decoration: none;
	width: 450px;
	height: 240px;
	background: #fff;
	box-shadow: 0 10px 20px -5px #00000070;
	margin: 20px;
	color: #0000ff;
	overflow: hidden;
}

/* -- OVERLAY HOVER CODE -- */
.img-overlay{
    position: relative;
    overflow: hidden;
}

.img-overlay .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 100%;
    background: linear-gradient( #333333, #86592d);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: all 0.3s linear;
    border-radius: 7px;
}

.img-overlay:hover > .overlay{
    transform: translateY(0);
    opacity: 0.8;
    /* cursor: pointer; */
}

.img-overlay .common-heading{
    margin: 0;
    color: #fff;
	font-size: 1.6rem;
    text-decoration: none;
	opacity: 5;
}
/* -- -- */
hr{
	margin: 5px;
	margin-left: 164px;
}

.card-img-top{
    height: 240px;
    width: 160px;
	background-size: cover;
	background-position: left;
    display: flex;
    float: left;
	border-radius: 10px;
}

.card-body{
    color: #000;
}

.card-body h3{
	margin-top: 18px;
}

.card-body p{
	font-size: 12px;
}

.list{
  padding-left: 11rem;
  // letter-spacing: 1px;
  font-size: 15px ;
  list-style: none;
  text-align: left;
}

table,tr,td{
  padding-left: 15px;
  text-align: left;
  padding-bottom: 2px;
}

#price{
  padding-left: 30px;
}

.card-body .button{
	font-weight: 500;
	margin-top: 15px;
	padding: 2px 15px;
	border: 1px solid #000;
	border-radius: 15px;
	background: transparent;
}

@media (max-width: 576px) {

    .heading{
      margin-left: 80px;
    }

    .middle{
        position: absolute;
	    top: 180%;		
	    width: 100%;
    }

    .card-img-top {
        height: 180px;
        width: 120px;
    }
}

`;

export default card;
