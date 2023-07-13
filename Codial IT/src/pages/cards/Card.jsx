import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div 
    className="card  ">
      <img className="animate__animated animate__fadeInLeft" src={item.img} alt="" />
      <h4 className="animate__animated animate__fadeInLeft text-xl">{item.title} </h4>
      <ul>
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
