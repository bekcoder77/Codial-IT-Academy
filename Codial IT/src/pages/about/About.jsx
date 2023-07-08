import React from 'react'
import s from "./About.module.css";


function About() {
  return (
    <div>
          <div className={s.about} id="particles-js">
        <div className={s.text4}>
            Biz haqimizda
        </div>
        <div className={s.codial}>
            Codial-Zamonaviy kasblar Akademiyasi 2021 yilning 18-yanvar kuni
            Muhammad  Amin Naziraliyev tomonidan  asos solingan. Hozirga qadar
            akdemiyamizni 500 ga yaqin o’quvchilar bitirgan. <br/>
            &nbsp; <br/>
            Shu vaqt mobaynida akademiyamiz Marg’ilon shahriga ham o’z filialini ochishga ulgurdi. <br/>
            Bizning oliy maqsadimiz Farg’ona yoshlariga zamonaviy kasblarni o’rgatish va dunyo miqyosida yetakchi o'rinlarga olib chiqish.
        </div>
        <div className="video">
        <iframe width="460" height="280" src="https://www.youtube.com/embed/-NoS3W4qKbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>
  )
}

export default About