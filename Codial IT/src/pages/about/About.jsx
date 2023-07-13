import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import "./Main.scss"
import s from "./About.module.css";

function About() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={s.about }  id="particles-js">
        <div className={s.text4}>Biz haqimizda</div>
        <div className={s.codial}>
          Codial-Zamonaviy kasblar Akademiyasi 2021 yilning 18-yanvar kuni
          Muhammad Amin Naziraliyev tomonidan asos solingan. Hozirga qadar
          akdemiyamizni 500 ga yaqin o’quvchilar bitirgan. <br />
          &nbsp; <br />
          Shu vaqt mobaynida akademiyamiz Marg’ilon shahriga ham o’z filialini
          ochishga ulgurdi. <br />
          Bizning oliy maqsadimiz Farg’ona yoshlariga zamonaviy kasblarni
          o’rgatish va dunyo miqyosida yetakchi o'rinlarga olib chiqish.
        </div>
        <div className="video">
        <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="-NoS3W4qKbA"
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

export default About;
