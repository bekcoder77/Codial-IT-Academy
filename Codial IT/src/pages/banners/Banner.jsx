import React from "react";

function Banner({item}) {
  return (
    <div>
      <div className="w-[350px] h-[280px] text-center  text-white">
        <h2 className="animate__animated animate__bounce animate__delay-2s text-3xl">{item.title}</h2>
        <img className="animate__animated animate__bounce animate__delay-2s ml-10" src={item.img} alt="" />
      </div>
      
    </div>
  );
}

export default Banner;
