import React from 'react'
import sty from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import Home from "../pages/home/Home";


function Navbar() {
  return (
    <div>
      <div className={sty.container}>
      <div className={sty.navbar}>
        <div className={sty.telmenular}>
            <i  className="fa-solid fa-bars"></i>
        </div>
        <div className={sty.menular}>
            <a href="#courses">Kurslar</a> <br />
            <a href="biz-haqimizda.html">Biz haqimizda</a> <br />
            <a href="#">Yangiliklar</a> <br />
            <a href="#login">Ro’yxatdan o’tish</a>
        </div>
        <div className={sty.logo}>
            <Link to="/"> <img src="./assets/logo.png" alt="logo" />  </Link>
        </div>
        <div className={sty.nav}>
            <a href="#courses">Kurslar</a>
            <a href="biz-haqimizda.html">Biz haqimizda</a>
            <a href="#">Yangiliklar</a>
            <a href="#login">Ro’yxatdan o’tish</a>
        </div>
        <div className={sty.number}>
          <img src="./assets/Group 2.png" alt="" />
            
            <div className={sty.num}><a href="tel:+99899 820 44 32">+99899 820 44 32</a></div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar