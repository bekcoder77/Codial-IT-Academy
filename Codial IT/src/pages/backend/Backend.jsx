import React, { useState } from "react";
import s from "./Backend.module.css";
import Banner from "../banners/Banner";
import Login from "../login/Login";
import { Link } from "react-router-dom";

function Backend() {

    const [backend, setBackend] = useState([
        {
          img: "./assets/backend3.png",
          title: "Python",
        },
        {
          img: "./assets/backend2.png",
          title: "Postgresql",
        },
        {
          img: "./assets/backend1.png",
          title: "Django",
        },
      ]);
  return (
    <div>
         <div class={s.backend}>
        <div class={s.block1}>
            <div class={s.box}>
                <div class={s.text3}>
                    Backend
                </div>
                <p>
                    Ushbu kurs 9 oyga mo’ljallangan bo’lib eng so’ngi texnologiyalarda darslar o’tiladi. <br/>
                    &nbsp; <br/>
                    O’quvchilar kurs uchun tayyorlangan loyihalarni bajarishadi va ularni test qilish bilan bir qatorda deploy qilishni ham sinab ko’rishadi. <br/>
                    &nbsp; <br/>
                    Kurs davomida yana Frilans platformalari haqida ham
                    ma’lumot beramiz.
                </p>
                <div className="btn4"><Link to="/login">Ro’yxatdan o’tish</Link></div>

            
            </div>
            <div class={s.box2}>
                <img src="./assets/backend.png" alt=""/>
            </div>
        </div>
        <div class={s.block2}>
          {backend.map((item)=>{
            return <Banner  item={item}/>
          })}
        </div>
    </div>
    </div>
  )
}

export default Backend