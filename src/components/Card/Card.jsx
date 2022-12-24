import React from 'react'
// import thumbnail from "../../assets/images/adv1.jpg"
import user from "../../assets/images/user.svg"
import chart from "../../assets/images/chart.svg"
import calendar from "../../assets/images/calendar.svg"
import online from "../../assets/images/status-online.svg"
import clock from "../../assets/images/clock.svg"
import eye from "../../assets/images/eye.svg"
import "./card.scss"
function Card(props) {
  return (
    <>
      <article className='card'{...props}>
        <div className="card__img">
          <img src={"https://picsum.photos/200/300"} alt="thumbnail" className='card__thumbnail' />
        </div>
        <div className="card__body">
          <h4 className="card__title">
            {
              props.data.title
            }
          </h4>
          <div className="card__body__inner">
            <div className="card__body__left">
            <div className="card__info">
              <img src={user} alt="user logo" />
                <div className="card__text" id='card__author'>{props.data.speaker}</div>
            </div>
            <div className="card__info">
              <img src={calendar} alt="user logo" />
                <div className="card__text" id='card__author'>{`${new Date(props.data.date).getDate()}/${new Date(props.data.date).getMonth()}/${new Date(props.data.date).getFullYear()}`}</div>
            </div>
            <div className="card__info">
              <img src={online} alt="onlime logo" />
                <div className="card__text" id='card__author'>{  props.data.status}</div>
            </div>
            </div>
            <div className="card__body__right">
            <div className="card__info">
              <img src={chart} alt="chart logo" />
                <div className="card__text" id='card__author'>{ props.data.proffesion}</div>
            </div>
            <div className="card__info">
              <img src={clock} alt="user logo" />
                <div className="card__text" id='card__author'>{ props.data.vaqt}</div>
            </div>
            <div className="card__info">
              <img src={eye} alt="onlime logo" />
                <div className="card__text" id='card__author'>{ props.data.status}</div>
            </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card
