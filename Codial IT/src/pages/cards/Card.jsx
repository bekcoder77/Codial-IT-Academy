import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card reveal">
      <img src={item.img} alt="" />
      <h4>{item.title}</h4>
      <ul>
        {item.info.map((inf) => {
          return <li>{inf}</li>;
        })}
      </ul>
      <div className="btn1">
        <Link to={item.link}>Batafsil➡️</Link>
      </div>
    </div>
  );
}

export default Card;
