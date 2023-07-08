import React, { useState } from "react";
import s from "./And.module.css";
import Login from "../login/Login";
import { Link } from "react-router-dom";

import Banner from "../banners/Banner";

function And() {
  const [ad, setAd] = useState([
    {
        img: "./assets/andro3.png",

        title: "Kotlin",
    },
    {
      img: "./assets/andro1.png",
      title: "Android studio",
    },
    {
        img: "./assets/andro2.png",

      title: "Java",
    },
  ]);
  return (
    <div>
      <div className={s.android}>
        <div className={s.androidblock1}>
          <div className={s.androidbox}>
            <div className={s.title}><h1>Android Dasturlash</h1></div>
            <p>
              Kursimizning Kotlin qismida shu tillar sintaksisidan boshlab OOP,
              algoritmlar ni tuzish usullari, ma’lumotlar tuzilmasi, konsul
              rehimida turli xil loyihalar qilish va o’quvchilar turli xildagi
              loyihalarni yarata oladi. <br />
              &nbsp; <br />
              Android qismida esa Android studio dasturlash muhitida soddava
              murakkab view elementlari, Layoutlar, menu, animation, xotiradan
              foydalanish usullari, permission, camera and gallery, database,
              (Sqlite, room, realm) service (Rest API imkoniyatlari, firebase
              imkoniyatlaridan foydalana olish) bundan tashqari git
              texnologiyalari bilan jamoaviy ishlashni shakllantirish.
            </p>
            <a href="http://127.0.0.1:5500/index.html#login">
            <div className="btn4"><Link to="/login">Ro’yxatdan o’tish</Link></div>
            </a>
          </div>
          <div className={s.androidimg}>
            <img src="./assets/android.png" alt="" />
          </div>
        </div>
        <div className={s.block2}>
          {ad.map((item) => {
            return <Banner item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default And;
