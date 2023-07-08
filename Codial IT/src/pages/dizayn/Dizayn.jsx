import React, { useState } from "react";
import "./Dizayn.css";
import Banner from "../banners/Banner";
import Login from "../login/Login";
import { Link } from "react-router-dom";

function Dizayn() {
  const [img, setImg] = useState([
    {
      img: "./assets/dizayn.png",
      title: "Corel Draw",
    },
    {
      img: "./assets/dizayn2.png",
      title: "Illustrator",
    },
    {
      img: "./assets/dizayn3.png",
      title: "Photoshop",
    },
  ]);
  return (
    <div>
      <div className="dizayn">
        <div className="block1">
          <div className="box">
            <div className="text3">Grafik dizayn</div>
            <p>
              Bu kurs 4 oyga mo’ljallangan. Kurs davomida Adobe Photoshop, Adobe
              Illustrator va Corel Draw kabi dasturlar o’rgatiladi. O’quvchilar
              bilimlarini real SMM dizaynlarda qo’llab ko’rishadi.
            </p>
            <div className="btn4">
              <Link to="/login">Ro’yxatdan o’tish</Link>
            </div>
          </div>
          <div className="box2 dizaynimg">
            <img src="./assets/dizaynbg.png" alt="" />
          </div>
        </div>
        <div className="block2">
          {img.map((item) => {
            return <Banner item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dizayn;
