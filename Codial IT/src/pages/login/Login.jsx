import React from 'react'

function Login() {
  return (
    <div>
          <div className="login reveal" id="login">
        <div className="title">
            Ro’yxatdan o’tish
        </div>
        <div className="body reveal">
            <div className="label">
                Ism: <br/> Familya: <br/>Kursni tanlang: <br/> Codial haqida qayerdan eshitdingiz:
            </div>
            <div className="input">
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
        <div className="btn">Ro’yxatdan o’tish</div>
    </div>
    </div>
  )
}

export default Login