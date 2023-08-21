import React from "react";
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="/">about us</a></li>
            <li><a href="/">our services</a></li>
            <li><a href="/">privacy policy</a></li>
            
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">shipping</a></li>
            <li><a href="/">returns</a></li>
            <li><a href="/">order status</a></li>
            <li><a href="/">payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="/">Laptop</a></li>
            <li><a href="/">Mobile</a></li>
            <li><a href="/">Cemera</a></li>
           
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="copyright">
			
				<small>
					{new Date().getFullYear()} &copy; copyright | Online Shop
				</small>
				<br />
			</div>
      </div>
    </div>
 </footer>
  );
};

export default Footer;