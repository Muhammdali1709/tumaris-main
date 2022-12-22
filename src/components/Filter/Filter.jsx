import React, { useEffect, useState } from 'react'
import Calendar from '../Calendar/Calendar'
import "./filter.scss"
import calendarLogo from "../../assets/images/calendar.svg"
import arrowLogo from "../../assets/images/arrow-down.svg"
import gridLogo from "../../assets/images/view-grid.svg"
import onlineLogo from "../../assets/images/status-online.svg"
import offlineLogo from "../../assets/images/status-offline.svg"
import { HOST } from '../../config/config'
function Filter({category,users}) {
  const [date, setDate] = useState(new Date())
  console.log(users);
  const clickItem = () => {
    const elItem = document.querySelectorAll(".filter__item")
    const elItemInner = document.querySelectorAll(".filter__item__inner")
    const elButton=document.querySelector(".filter__send__btn")
    for (let i = 0; i < elItem.length; i++){
      elItem[i].addEventListener('click', () => {
        elItemInner[i].classList.add("filter__item__inner-active")
        if (elItemInner[i + 1]) {
          elItemInner[i+1].classList.remove("filter__item__inner-active")
        }
        if (elItemInner[i - 1]) {
          elItemInner[i-1].classList.remove("filter__item__inner-active")
        }
      })
    }
    elButton.addEventListener('click', () => {
      for (let i = 0; i < elItem.length; i++){
        elItemInner[i].classList.remove("filter__item__inner-active")
      }
    })
  }
  useEffect(() => {
    clickItem()
  },[])
  return (
    <>
      <ul className='filter'>
        <li className="filter__item">
          <img src={calendarLogo} alt="calendar" className='filter__calendar'/>
          <span className='filter__item__text'>{date.toLocaleDateString().replaceAll(".", "/")}</span>
          <img src={arrowLogo} alt="arrow down" className='filter__arrow'/>
          <div className='filter__item__inner'>
          <Calendar date={date} setDate={ setDate} />
          </div>
        </li>
        <li className="filter__item">
          <img src={gridLogo} alt="calendar" className='filter__calendar'/>
          <span className='filter__item__text'>Bo’lim tanlang</span>
          <img src={arrowLogo} alt="arrow down" className='filter__arrow'/>
          <div className='filter__item__inner' id='filter__item__inner-grid'>
            <div className="filter__item__inner-box">
              {
                category.length && category.map((item,index) => (
                  <div key={index} className='filter__category'>
                    <h4 className='filter__category__title'>{ item.category_title}</h4>
                    {
                      item.subcategories.map(subcategory => (
                        <div key={subcategory.subcategoryid} className='filter__subcategory'>
                          <input type="checkbox" className='filter__checkbox' />
                          <span className='filter__subcategry__title'>{ subcategory.subcategorytitle}</span>
                        </div>
                      ))
                    }
              </div>
                ))
              }
            </div>
          </div>
        </li>
        <li className="filter__item">
          <img src={onlineLogo} alt="online logo" className='filter__calendar'/>
          <span className='filter__item__text'>Online/Offline</span>
          <img src={arrowLogo} alt="arrow down" className='filter__arrow'/>
          <div className='filter__item__inner'>
            <div className="filter__item__inner-box">
              <div className='filter__subcategory'>
                  <img className='filter__item__status' src={onlineLogo} alt="online" />
                  <span className='filter__subcategry__title'>Online</span>
                  <input type="radio" className='filter__radio' name='status' />
              </div>
              <div className='filter__subcategory'>
                  <img className='filter__item__status' src={offlineLogo} alt="offline" />
                  <span className='filter__subcategry__title'>Offline</span>
                  <input type="radio" className='filter__radio' name='status' />
              </div>
          </div>
          </div>
        </li>
        <li className="filter__item" id='filter__item__end'>
          <img src={calendarLogo} alt="calendar" className='filter__calendar'/>
          <span className='filter__item__text'>Ism familiya</span>
          <img src={arrowLogo} alt="arrow down" className='filter__arrow'/>
          <div className='filter__item__inner'>
            <div className="filter__item__inner-box">
              {
                users.map(item => (
                  <div key={item.user_id} className='filter__subcategory' id='filter__changed__subcategory'>
                  <input type="checkbox" className='filter__checkbox' />
                    <span className='filter__subcategry__title'>{ item.fullname}</span>
                </div>
                ))
              }
            </div>
          </div>
        </li>
        <button className='filter__send__btn'>Izlash</button>
      </ul>
    </>
  )
}

export default Filter
