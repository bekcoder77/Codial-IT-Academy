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
        <div className="block1 w-[100%] h-[100vh] flex max-[447px]:pt-[100px]">
          <div className="box w-[40%] text-white mt-[150px] ml-[8%] max-[447px]:w-[100%] max-[447px]:ml-0 max-[447px]:p-[40px] ">
            <div className="text-white text-4xl mb-5 max-[447px]:text-[26px] max-[447px]: mt-5">Grafik dizayn</div>
            <p className="max-[447px]:text-[14px]">
              Bu kurs 4 oyga mo’ljallangan. Kurs davomida Adobe Photoshop, Adobe
              Illustrator va Corel Draw kabi dasturlar o’rgatiladi. O’quvchilar
              bilimlarini real SMM dizaynlarda qo’llab ko’rishadi.
              Bu soha vakillari, grafik dizaynerlar, vizual xabarlarni talqin qilish, ularni tartiblash va mijozga taqdim etish ustida ishlaydi. Dizayn ishi mijozning talabiga asoslanishi mumkin, bu talab lingvistik jihatdan ogʻzaki yoki yozma ravishda belgilanadi, yaʼni grafik dizayner mijozning ogʻzaki yoki yozma xabarini grafik koʻrinishga aylantiradi.

Grafik dizayn, qoʻllash sohasiga koʻra har qanday vizual aloqa bilan bogʻliq turli xil sohalarga ega. 
            </p>
            <div className="btn1">
              <Link to="/login">Ro’yxatdan o’tish</Link>
            </div>
          </div>
          <div className="box2">
            <  img className="w-[560px] h-[600px] ml-[15%] mt-[100px] max-[447px]:mt-[140px] max-[447px]:w-[380px] max-[447px]:h-[320px]" src="./assets/dizaynbg.png" alt="" />
          </div>
        </div>
        <div className="block2 flex-wrap flex justify-evenly items-center bg-[rgb(245, 245, 245)] pb-10">
          {img.map((item) => {
            return <Banner item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dizayn;
