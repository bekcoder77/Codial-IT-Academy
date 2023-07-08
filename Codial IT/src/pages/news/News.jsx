import React from "react";
import s from "./News.module.css";

function News() {
  return (
    <div>
      <div className={s.news}>
        <div className={s.title}>Yangiliklar</div>
        <div className={s.codial}>
          IT sohasiga qiziqqanlar uchun ajoyib yangilik! Codial'ning yana bir
          filiali ilm ulashishga tayyor! Andijon shahar, Milliy Tiklanish
          ko‘chasi, malaka oshirish instituti tomonga yo‘lingiz tushsa,
          Codial'ga ham bir kirib o‘ting. <br />
          &nbsp; <br />
          Umid qilamizki, tashrifingiz kasb tanlashda siz uchun xayrli bo‘ladi.
          Bu bizning 3-filialimiz hisoblanadi.
        </div>
        <div className="video">
          <iframe
            width="460"
            height="300"
            src="https://www.youtube.com/embed/E_yKY2nUGZ8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default News;
