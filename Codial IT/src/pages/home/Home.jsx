import React, { useState } from "react";
import "./Home.css";
import Card from "../cards/Card";



function Home() {
  const [data, setData] = useState([
    {
      img: "./assets/card i.png",
      title: "Kompyuter savodxonligi",
      link:"/savodxonlik",
      info: [
        "Word",
        " Microsoft office",
        "  Power point",
        "Typing Master",
        "Notion",
        "Canva",
      ],
    },
    {
      img: "./assets/card i2.png",
      title: "Android dasturlash",
      link:"/android",
      info: [
        "Word",
        " Microsoft office",
        "  Power point",
        "Typing Master",
        "Notion",
        "Canva",
      ],
    },
    {
      img: "./assets/card i3.png",
      title: "Frontend",
      link:"/frontend",
      info: [
        "Word",
        " Microsoft office",
        "  Power point",
        "Typing Master",
        "Notion",
        "Canva",
      ],
    },
    {
      img: "./assets/card i4.png",
      title: "Backend",
      link:"/backend",
      info: [
        "Word",
        " Microsoft office",
        "  Power point",
        "Typing Master",
        "Notion",
        "Canva",
      ],
    },
    {
      img: "./assets/card i5.png",
      title: "Grafik dizayn",
      link:"/dizayn",
      info: [
        "Word",
        " Microsoft office",
        "  Power point",
        "Typing Master",
        "Notion",
        "Canva",
      ],
    },
  ]);

  return (
    <div>
      <header>
        <div className="text1">
          Zamonaviy <span>IT</span> kasblarini biz bilan o’rganing
        </div>
        <div>
          <a
            className="btn"
            href="https://www.youtube.com/channel/UC1WFcPmc93SyNhX80iOfrRQ"
          >
            <img src="./assets/Path 2.png" alt="" />
            <p>Markazimiz haqida batafsil</p>
          </a>
        </div>
      </header>
      <div className="courses" id="courses">
        <div className="cards">
        {data.map((item)=>{
     return   <Card item ={item}/>
        })}
   
        </div>
        <div class="text2 ">
           Bizning manzillar
       </div>
       <div class="buttonlar reveal">
           <div class="btn_far">Farg’ona</div>
           <div class="btn_marg">Marg’ilon</div>
       </div>
       <div class="manzillar reveal">
           <div class="fergana"><a href="https://g.page/Codial?share"><img class="joylashuv1" src="./assets/screenshoteasy (1) 1.png" alt=""/></a></div>
           <div class="margilon"><a href="https://goo.gl/maps/drSowuhmcRcY1K3p6"><img class="joylashuv2" src="./assets/location2 psd 1.png" alt=""/></a></div>
       </div>
      </div>
     
      <div class="login reveal" id="login">
        <div class="text4 text4-1">
            Ro’yxatdan o’tish
        </div>
        <div class="body reveal">
            <div class="label">
                Ism: <br/> Familya: <br/>Kursni tanlang: <br/> Codial haqida qayerdan eshitdingiz:
            </div>
            <div class="input">
                <input type="text" placeholder="Ismingizni kiriting..."/> <br/>

                <input type="text" placeholder="Familyangizni kiriting..."/> <br/>
                <select name="" id="">
                    <option value="">Frontend</option>
                    <option value="">Backend</option>
                    <option value="">Android</option>
                    <option value="">Kompyuter savodxonligi</option>
                    <option value="">Grafik dizayn</option>
                </select> <br/>
                <textarea name="" id="" cols="30" rows="5" placeholder="izoh..."></textarea>
            </div>
        </div>
        <div class="btn5">Ro’yxatdan o’tish</div>
    </div>
    </div>
  );
}

export default Home;
