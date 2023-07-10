import React, { useRef, useState } from "react";
import sty from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import News from "../pages/news/News";
import { AiOutlineBars } from "react-icons/ai";
import {MdClose} from "react-icons/md"

function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [show ,setShow] = useState(false)

window.addEventListener("scroll" ,()=>{
if(window.scrollY > 300){
  setShow(true)
}else{
  setShow(false)
}
})
  return (
    <div>
      <div onClick={()=>{
          document.documentElement.scrollTop =0;
        }} className={show ? "scrollToTop-btn active" : "scrollToTop-btn"}>
          <i className="fa-solid fa-angles-up"></i>
        </div>
      <div className={sty.container}>
        <div className={sty.navbar}>
          <div className={sty.logo}>
            <Link to="/">
              {" "}
              <img src="./assets/logo.png" alt="logo" />{" "}
            </Link>
          </div>
          <div className={sty.nav}>
            <Link to="/">Kurslar</Link>
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/news">Yangiliklar</Link>
            <Link to="/login">Ro’yxatdan o’tish</Link>
          </div>
          <div className={sty.number}>
            <img src="./assets/Group 2.png" alt="" />
            <div className={sty.num}>
              <a href="tel:+99899 820 44 32">+99899 820 44 32</a>
            </div>
{/* 
            <div className="nav_bar">
          <nav ref={navRef} className="nav_links">
          <div onClick={showNavbar}>  <Link to="/project">Projects</Link></div>
          <div onClick={showNavbar}>  <Link to="/Resume">Resume</Link></div>
          <div onClick={showNavbar}>  <Link to="/Contact">Contact</Link></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <MdClose />
            </button>
          </nav>
          <button className="nav-btn m_black" onClick={showNavbar}>
            <AiOutlineBars />
          </button>
        </div> */}
            <div className="nav_bar">
        <nav>
            <div ref={navRef} className={sty.nav_links} >
            <Link to="/">Kurslar</Link> <br />
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/news">Yangiliklar</Link>
            <Link to="/login">Ro’yxatdan o’tish</Link>
            <button className={sty.nav_btn} onClick={showNavbar}>
              <MdClose />
            </button>
          </div>
       </nav>

          <div onClick={showNavbar} className={sty.nav_btn}>
            <i className="fa-solid fa-bars"></i>
          </div>

        </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Navbar;
