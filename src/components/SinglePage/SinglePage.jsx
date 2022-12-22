import React, { useRef } from 'react'
import Card from "../Card/Card"
import house from "../../assets/images/house.svg"
import arrowRight from "../../assets/images/chevron-right.svg"
import calendar from "../../assets/images/calendar.svg"
import clock from "../../assets/images/clock.svg"
import online from "../../assets/images/status-online.svg"
import share from "../../assets/images/share.svg"
import facebook from "../../assets/images/facebook-blue.svg"
import thumbir from "../../assets/images/thumbir.svg"
import instagram from "../../assets/images/instagram-blue.svg"
import telegram from "../../assets/images/telegram-blue.svg"
import twitter from "../../assets/images/twitter-blue.svg"
import banner from "../../assets/images/single-page.jpg"
import locationLogo from "../../assets/images/location.svg"
import youtube from "../../assets/images/youtube.svg"
import clockGray from "../../assets/images/clock-gray.svg"
import calendarGray from "../../assets/images/calendar-gray.svg"
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './single.scss'

function SinglePage({ item}) {
  console.log(item);
  const navigate = useNavigate()
  const swiperRef = useRef();
  return (
    <>
      <section className='single'>
        <div className="container">
        <div className="single__header">
          <img src={house} alt="home" onClick={()=>navigate("/")} className="single__header-back" />
          <span className="single__header__text">Biznes</span>
          <img src={arrowRight} alt="arrow right" />
          <span className="single__header__topic">Alisher Isaev</span>
          </div>
          <div className="single__body">
            <div className="single__left">
              <div className="single__left__inner">
              <h4 className="single__left__title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
              </h4>
              <div className="single__left__actions">
                <div className="single__left__date">
                  <img src={calendar} alt="calendar" />
                  <span className='single__left__action__text'>17/12/2002</span>
                </div>
                <div className="single__left__date">
                  <img src={clock} alt="clock" />
                  <span className='single__left__action__text'>17:00</span>
                </div>
                <div className="single__left__date">
                  <img src={online} alt="online" />
                  <span className='single__left__action__text'>Online</span>
                </div>
              </div>
              <div className="single__left__bottom">
                <div className="single__share">
                  <img src={share} alt="share" />
                  <span className="single__share__text">
                    Ulashing
                  </span>
                </div>
                <div className="single__socials">
                  <a href="#" className='single__social'>
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="#" className='single__social'>
                    <img src={thumbir} alt="thumbir" />
                  </a>
                  <a href="#" className='single__social'>
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="#" className='single__social'>
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="#" className='single__social'>
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="single__right">
              <h2 className="single__right__title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
              </h2>
              <p className='single__right__text'>
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
              </p>
              <div className='single__right__img'>
                <img src={banner} alt="banner" />
              </div>
              <p className='single__right__text'>
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.

              Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

              Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz. 
              </p>
              <div className="single__right__actions">
                <a className='single__right__action' href="#">
                  <img src={locationLogo} alt="location" />
                  <span className='single__right__action__text'>Google kartadan qidirish</span>
                </a>
                <a className='single__right__action' href="#">
                  <img src={youtube } alt="location" />
                  <span className='single__right__action__text'>Youtubedan tomosha qiling</span>
                </a>
                <div className='single__right__date'>
                  <img src={calendarGray} alt="calendar" />
                  <span className='single__right__date__text'>12/12/2002</span>
                </div>
                <div className='single__right__date'>
                  <img src={clockGray} alt="calendar" />
                  <span className='single__right__date__text'>13:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recomended">
          <div className="container">
          <h4 className='recomended__title'>Tavsiya etamiz</h4>
          </div>
          <div className="recomended__container">
            <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            }}
            className="recomended__slider"
      >
        {/* <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide> */}
      </Swiper>
          </div>
          <div className="container">
            <div className="recomended__slider__btn">
            <button className='recomended__btn__left' onClick={() => swiperRef.current?.slidePrev()}><i className="fa-solid fa-chevron-left"></i></button>
            <button className='recomended__btn__left' onClick={() => swiperRef.current?.slideNext()}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePage
