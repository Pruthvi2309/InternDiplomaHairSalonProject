import React from 'react'
import styled from 'styled-components';
const footer = () => {
    return (
        <Wrapper>
            <div>
                <footer>
                    <div className="footer-content">
                        <h3>New Jersey</h3>
                        <p></p>

                        <ul className="socials">
                            <li><a href="https://www.facebook.com/Newjersyanand/"><i class='bx bxl-facebook-square' ></i></a></li>
                            <li><a href="https://goo.gl/maps/cCjS3M5rw6o59fuRA"><i class='bx bxs-map'></i></a></li>
                            <li><a href="https://www.google.com/search?q=new+jersey+unisex+salon&client=opera-gx&hs=CSc&sca_esv=560634299&sxsrf=AB5stBjk363S3klZ1HVPdWK9ic5NdBcVJg%3A1693213468288&ei=HGPsZKmfEYT_wAOSwonYDw&oq=new+jersey+unis&gs_lp=Egxnd3Mtd2l6LXNlcnAiD25ldyBqZXJzZXkgdW5pcyoCCAEyBBAjGCcyBxAjGIoFGCcyChAAGIAEGBQYhwIyChAAGIAEGBQYhwIyBRAAGIAEMgsQLhiABBjHARivATIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkjJLVC_CVjxJnACeAGQAQCYAeUBoAG0CaoBBTAuMy4zuAEDyAEA-AEBwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAgUQLhiABMICBhAAGBYYHsICCxAAGIoFGLEDGJECwgIIEAAYigUYkQLCAgsQABiABBixAxiDAcICCBAuGIoFGJECwgILEC4YgwEYsQMYgATiAwQYACBBiAYBkAYJ&sclient=gws-wiz-serp#lrd=0x395e4ff3c556af0d:0xe1c3c55b598e6c71,1,,,,"><i class='bx bxl-google-plus-circle' ></i></a></li>
                            <li><a href="https://www.instagram.com/newjerseyunisexsalon/"><i class='bx bxl-instagram-alt'></i></a></li>
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
    // position: absolute;
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
    z-index: 99;
    // display: none;
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
