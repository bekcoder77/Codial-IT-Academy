import React from "react";

function Banner({item}) {
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
        <img src={item.img} alt="" />
      </div>
      
    </div>
  );
}

export default Banner;
