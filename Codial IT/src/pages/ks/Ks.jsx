import React, { useState } from "react";
import s from "./Ks.module.css";
import Banner from "../banners/Banner";
import Login from "../login/Login";
import { Link } from "react-router-dom";

function Ks() {
  const [img, setImg] = useState([
    {
      img: "./assets/ks.png",
      title: "MIcrosoft office",
    },
    {
      img: "./assets/ks2.png",
      title: "Google",
    },
    {
      img: "./assets/ks3.png",
      title: "Notion",
    },
  ]);

  return (
    <div>
      <div className={s.savodhonlik}>
        <div className={s.ks_info}>
          <div className={s.ks_left}>
            <div className={s.ks_title}>
              <h1>
                Kompyuter <br /> savodxonligi
              </h1>
            </div>
            <p>
              Bu kurs 1 oyga mo’ljallangan bo’lib, bunda siz Microsoft
              kompaniyasining Windows operatsion tizimlari hamda Office
              dasturlarini o’rganasiz va hozirda dunyoda trendda bo’layotgan
              yana bir qancha yo’nalishlar o’rgatiladi.
              – Internet davrining qulayliklaridan faol va unumli foydalana oladigan, kundalik turmushda va ish faoliyatingizda elektron pochta, audio-video suhbatlar orqali masofa va vaqtni tejashni o‘rganasiz, internetda o‘zingizga kerakli ma’lumotlarni qidirib topish, tahrirlash, jo‘natish usullarini bilib olasiz.

– Kompyuterdan foydalanishda uni buzub qo‘yishdan, xato qilishdan qo‘rqmaydigan bo‘lasiz. Kompyuterning tuzilishi, qurulmalari, ishlash prinsiplarni bilib olishingiz sizga aqlli texnika ustidan hukmronlikni taqdim etadi.
            </p>
            <div className={s.ks_btn}>
              {" "}
              <Link to="/login">Ro’yxatdan o’tish</Link>
            </div>
          </div>
          <div className={s.box2}>
            <img className="ks_img" src="./assets/savodxonlik.png" alt="" />
          </div>
        </div>

        <div className={s.cards}>
          {img.map((item) => {
            return <Banner item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Ks;
