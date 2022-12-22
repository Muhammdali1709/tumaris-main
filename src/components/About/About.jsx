import React from 'react'
import "./about.scss"
import house from "../../assets/images/house.svg"
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate=useNavigate()
  return (
    <section className="about">
      <div className="container">
        <div className='about__header'>
          <img src={house} alt="go back" onClick={()=>navigate("/")} />
          <span className='about__header__text'>Biz haqimizda</span>
        </div>
        <div className="about__body">
        <h3 className='about__title'>Biz haqimizda</h3>
        <p className='about__text about__description'>Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
        </p>
        <p className='about__text'>
        Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.

        Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

        Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz. 
        </p>
       </div>
      </div>
    </section>
  )
}

export default About
