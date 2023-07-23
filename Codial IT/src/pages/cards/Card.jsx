import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Card({ item }) {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'linear',
      delay: 100,
    });
  },[])
  return (
    <div 
       className="card  ">
      <img   className="animate__animated animate__fadeInLeft" src={item.img} alt="" />
      <h4   className="animate__animated animate__fadeInLeft text-xl">{item.title} </h4>
      <ul  >
        {item.info.map((inf,idx) => {
          return <li key={idx} className="animate__animated animate__fadeInLeft">{inf}</li>;
        })}
      </ul>
      <div className="btn1 ml-[13%] w-[70%] animate__animated animate__bounce animate__delay-2s">
        <Link to={item.link} className="">Batafsil➡️</Link>
      </div>
    </div>
  );
}

export default Card;
