import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 All Rights Reserved Vardhan Jakka</p>

        <div className="social-icons">

          <a href="https://github.com/Vardhanjakka"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/jakka-gnanavardhan-420443287/"><FaLinkedin/></a>
          <a href="https://www.instagram.com/__awesome_me_vardhan___?igsh=cHU4MWY5YWVqYWdr"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;