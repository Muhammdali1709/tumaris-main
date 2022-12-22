import React, { useEffect, useState,useContext, createContext } from 'react'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import boy from "../../assets/images/boy.png"
import boy2 from "../../assets/images/boy2.png"
import "./main.scss"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { HOST } from '../../config/config'
import SinglePage from '../SinglePage/SinglePage'
function Main() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [users,setUsers]=useState([])
  const allCards =() => {
    fetch(`${HOST}/cards`).then(res=>res.json()).then(data=>setData(data.data))
  }
  const allCategories = () => {
    fetch(`${HOST}/categories`).then(res => res.json()).then(data => setCategory(data.data))
  }
  const allUsers = () => {
    fetch(`${HOST}/users/get`).then(res => res.json()).then(data => setUsers(data.data))
  }
  useEffect(() => {
    allCategories()
    allCards()
    allUsers()
  },[])
  return (
    <>
      <main className='main'>
        <section className="hero">
          <div className="container">
            <h1 className='hero__title'>Eng so’ngi master klasslar va tadbirlar bizning saytda</h1>
            <Filter category={category} users={users} />
          </div>
        </section>
        <section className="news">
          <div className="container">
            <h3 className='news__title'>Oxirgi e'lonlar</h3>
            <div className="news__flex">
              {
                data.length && data.map(item => (
                  <Card key={item.id} onClick={() => {
                    <SinglePage item={item} />
                    navigate("/singlePage")
                  }} data={item} />
                ))
              }
            </div>
          <button className="load-more">
            Ko'proq ko'rish
          </button>
          </div>
        </section>
        <section className='info'>
          <div className="container">
            <div className="info__inner">
              <div className="info__box-left">
                <h3 className='info__box__title'>E’LONLARINGIZNI BIZNI SAYTDA BERING</h3>
                <div className="info__box__img">
                  <img src={boy} alt="model"  />
                </div>
              </div>
              <div className="info__box-right">
                <h3 className='info__box__title'>ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h3>
                <div className="info__box__img" id='info__boy__img'>
                  <img src={boy2} alt="model"  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
