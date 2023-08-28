import React from 'react'
import styled from 'styled-components';
const footer = () => {
    return (
        <Wrapper>
            <div>
                <footer>
                    <div className="footer-content">
                        <h3>New Jersey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.</p>

                        <ul className="socials">
                            <li><a href="#"><i className='bx bxl-facebook-square' ></i></a></li>
                            <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                            <li><a href="#"><i className='bx bxl-google-plus-circle' ></i></a></li>
                            <li><a href="#"><i className='bx bxl-instagram-alt'></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Innobrains. Designed By <span></span></p>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
footer{
    bottom: 0;
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

`;

export default footer;
