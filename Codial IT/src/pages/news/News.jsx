import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import "./Main.scss"

function News() {
  const [isOpen, setOpen] = useState(false);


  return (
    <div>
      <div className="about">
        <div className="about_title">Yangiliklar</div>
        <div className="codial">
          IT sohasiga qiziqqanlar uchun ajoyib yangilik! Codial'ning yana bir
          filiali ilm ulashishga tayyor! Andijon shahar, Milliy Tiklanish
          ko‘chasi, malaka oshirish instituti tomonga yo‘lingiz tushsa,
          Codial'ga ham bir kirib o‘ting. <br />
          &nbsp; <br />
          Umid qilamizki, tashrifingiz kasb tanlashda siz uchun xayrli bo‘ladi.
          Bu bizning 3-filialimiz hisoblanadi.
        </div>
        <div className="video">
        <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="E_yKY2nUGZ8"
				onClose={() => setOpen(false)} 
			/>
      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW VIDEO
      </button>
        </div>
      </div>
    </div>
  );
}

export default News;
