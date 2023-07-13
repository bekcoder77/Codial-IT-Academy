import React, { useRef, useState } from "react";
import "./Home.css";
import Card from "../cards/Card";

function Home() {
  const [map , setMap] = useState(false)

  const [data, setData] = useState([
    {
      img: "./assets/card i.png",
      title: "Kompyuter savodxonligi",
      link: "/savodxonlik",
      info: [
        "Word",
        " Microsoft office",
        "  Power ",
        "Typing ",
        "Notion",
        "Canva",
      ],
    },
    {
      img: "./assets/card i2.png",
      title: "Android dasturlash",
      link: "/android",
      info: [
        " Kotlin  ",
        "  Android studio  ",
        " Java    ",
        "View   ",
        " Database  ",
        "  Rest API ",
      ],
    },
    {
      img: "./assets/card i3.png",
      title: "Frontend",
      link: "/frontend",
      info: ["Html", " Css ", "  Bootstrap ", "JavaScript ", "React", "Jquery"],
    },
    {
      img: "./assets/card i4.png",
      title: "Backend",
      link: "/backend",
      info: ["Python", " Postgresql", "  Docker ", "Flask microframework ","Node Js" , "Firebase"],
    },
    {
      img: "./assets/card i5.png",
      title: "Grafik dizayn",
      link: "/dizayn",
      info: [
        "Adobe photoshop",
        " Adobe illustrator",
        "  Corel Draw ",
        "Dizayn texnologiyasi ",
        "SMM",
        "Docker"
      ],
    },
  ]);


  return (
    <div>
      <header>
        <div className="text1 animate__animated animate__fadeInLeft">
          Zamonaviy <span>IT</span> kasblarini biz bilan o’rganing
        </div>
        <div>
          <a
            className="btn animate__animated animate__fadeInLeft"
            href="https://www.youtube.com/channel/UC1WFcPmc93SyNhX80iOfrRQ"
          >
            <img src="./assets/Path 2.png" alt="" />
            <p>Markazimiz haqida batafsil</p>
          </a>
        </div>
      </header>
      
      <div className="courses" id="courses">
        <div className="cards">
          {data.map((item, idx) => {
            return <Card key={idx} item={item} />;
          })}
        </div>
        <div data-aos="fade-right" className="text2 ">Bizning manzillar</div>
        <div  className="btns">
          <div  data-aos="fade-right" className="btn_far">Farg’ona</div>
          <div  data-aos="fade-left" className="btn_marg">Marg’ilon</div>
        </div>
        <div data-aos="flip-right" className="location reveal">
          <iframe  
            className="ferghana_map animate__animated animate__fadeInLeft"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5838634666966!2d71.7827102!3d40.382975099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83d394a3a5c9%3A0xaa21a6bf41cf03e!2sCodial%20ta&#39;lim%20markazi!5e0!3m2!1sru!2s!4v1688801577232!5m2!1sru!2s"
            loading="lazy"
          ></iframe>

          <iframe 
            className="marglan_map animate__animated animate__fadeInRight "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97184.77155914574!2d71.6842331!3d40.430465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb7779b4ece427%3A0x84b57780132a51d4!2sCodial%20%E2%80%94%20Zamonaviy%20Kasblar%20Akademiyasi!5e0!3m2!1sru!2s!4v1688801481432!5m2!1sru!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
