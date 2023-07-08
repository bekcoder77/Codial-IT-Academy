import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div class="card reveal">
            <img src={item.img} alt="" />
            <h4>{item.title}</h4>
            <ul>
              <li>Word</li>
              <li>Excel</li>
              <li>Microsoft office</li>
              <li>Power point</li>
              <li>Typing Master</li>
              <li>Notion</li>
              <li>Canva</li>
            </ul>
            {/* <a href="savodxonlik.html">
              <div class="btn1">Batafsil</div>
            </a> */}

           <div className="btn1">
           <Link to={item.link}>Batafsil</Link>
           </div>
      </div>
  );
}

export default Card;
