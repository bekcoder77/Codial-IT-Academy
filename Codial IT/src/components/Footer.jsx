import React from 'react'
import sty from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <div class={sty.footer}>
        <div class={sty.logo2}>
            {/* <img src="img/logo academiya 1.png" alt=""> */}
            <img src="./assets/flogo.png" alt="logo" />
        </div>
        <div class={sty.tarmoqlar}>
            <a href="https://t.me/https://t.me/codialuz"> <img src="./assets/tg.png" alt="telegram" /></a>
            <a href="https://instagram.com/codial_uz"> <img src="./assets/ins.png" alt="instagram" /></a>
            <a href="https://t.me/https://t.me/codialuz"> <img src="./assets/f.png" alt="facebook" /></a>
          
        </div>
        <div class={sty.haqida}>
            <div>
                <h5> Sahifalar <br />  Biz haqimizda <br />  Kurslar</h5>
            </div>
            <div>
                <h5>Bog’lanish <br/>https://codial.uz <br/>+99899 820 44 32</h5>
                <h6>Privacy Policy &nbsp; © created in 2022   </h6>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer