import React from "react";
import sty from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={sty.footer}>
        <div className={sty.logo2}>
          {/* <img src="img/logo academiya 1.png" alt=""> */}
          <img src="./assets/flogo.png" alt="logo" />
        </div>
        <div className={sty.tarmoqlar}>
          <a href="https://t.me/codialuz">
            {" "}
            <img src="./assets/tg.png" alt="telegram" />
          </a>
          <a href="https://instagram.com/codial_uz">
            {" "}
            <img src="./assets/ins.png" alt="instagram" />
          </a>
          <a href="https://t.me/https://t.me/codialuz">
            {" "}
            <img src="./assets/f.png" alt="facebook" />
          </a>
        </div>
        <div className={sty.haqida}>
          <div>
            <h5>
              {" "}
              Sahifalar <br /> Biz haqimizda <br /> Kurslar
            </h5>
          </div>
          <div>
            <h5>
              Bog’lanish <br />
              https://t.me/codialuz <br />
              +99899 820 44 32
            </h5>
            <h6>Privacy Policy &nbsp; © created in 2022 </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
