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
  const [menu, setMenu] = useState(false)

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
    <div >
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

            <div className={"nav_bar"} style={menu ? {display:"block", width:"100%", background:"black", position:"fixed", top:0,left:0} : {display: "none"}}>
          <nav ref={navRef} className="nav_links">
          <div onClick={showNavbar}>  <Link to="/project">Projects</Link></div>
          <div onClick={showNavbar}>  <Link to="/Resume">Resume</Link></div>
          <div onClick={showNavbar}>  <Link to="/Contact">Contact</Link></div>
            <button className="nav-btn nav-close-btn" style={{
              position: "absolute",
              top:20,
              right: 10,
              padding: " 10px",
              fontSize: "18px",
              background: "cadetblue",
              color:'white',
              border:'none',
              cursor:"pointer"
            }} onClick={()=> setMenu(false)}>
              <MdClose />
            </button>
          </nav>
      
        </div> 
            <div className="nav_bar">
        <nav>
            <div ref={navRef} className={sty.nav_links} >
            <Link to="/">Kurslar</Link> <br />
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/news">Yangiliklar</Link>
            <Link to="/login">Ro’yxatdan o’tish</Link>showNavbar
            <button className={sty.nav_btn} onClick={showNavbar}>
              <MdClose />
            </button>
          </div>
       </nav>

          <div onClick={()=> setMenu(true)} className={sty.nav_btn}>
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
