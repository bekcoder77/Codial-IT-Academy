import React from "react";

function Banner({item}) {
  return (
    <div>
      <div>
        <h2 className="animate__animated animate__bounce animate__delay-2s">{item.title}</h2>
        <img className="animate__animated animate__bounce animate__delay-2s" src={item.img} alt="" />
      </div>
      
    </div>
  );
}

export default Banner;
