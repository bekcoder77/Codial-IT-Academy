import React, { useState } from "react";
import Banner from "../banners/Banner";
import s from "./Fr.module.css";
import Login from "../login/Login";
import { Link } from "react-router-dom";

function Fr() {
  const [front, setFront] = useState([
    {
      img: "./assets/js.png",
      title: "JavaScript",
    },
    {
      img: "./assets/css.png",
      title: "CSS",
    },
    {
      img: "./assets/html.png",
      title: "Html",
    },
  ]);
  return (
    <div>
      <div className={s.frontend}>
        <div className={s.block1}>
          <div className={s.box}>
            <div className={s.text3}>Frontend</div>
            <p>
              Frontend Development kursi 7 oyga mo’ljallangan, darslar eng yangi
              texnologiyalar orqali o’tiladi, bu texnologiya -lar yordamida
              o’quvchilar Web sahifalarhamda tezkor va xavfsiz Web ilovalar
              yaratishlari mumkin. <br />
              &nbsp; <br />
              O’tiladigan darslarimiz barchasi amaliy loyihalardan tashkil
              topgan. Frontend kursini tamomlaydigan o’quvchilarning har biri
              o’zlari yaratgan 30 ta loyihasi bilan bitiradilar.
            </p>

            <div className={s.btn4}>
              {" "}
              <Link to="/login">Ro’yxatdan o’tish</Link>
            </div>
          </div>
          <div className={s.box2}>
            <img src="./assets/frontend.png" alt="" />
          </div>
        </div>
        <div className={s.block2}>
          {front.map((item) => {
            return <Banner item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Fr;
