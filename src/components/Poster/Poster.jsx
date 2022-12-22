import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./poster.scss"
import house from "../../assets/images/house.svg"
import Input from "../Input/Input"
import CompanyForm from "../CompanyForm/CompanyForm"
import PersonForm from "../PersonForm/PersonForm"
import FileUpload from '../FileUpload/FileUpload'
import {HOST} from "../../config/config"
function Poster() {
  const navigate = useNavigate()
  const [category,setCategory]=useState([])
  const [subcategory,setSubCategory]=useState([])
  const [radio,setRadio]=useState(true)
  const allCategories = () => {
    fetch(`${HOST}/categories`).then(res => res.json()).then(data => setCategory(data.data))
  }
  const allSubcategories = () => {
    fetch(`${HOST}/subcategories`).then(res => res.json()).then(data => setSubCategory(data.data))
  }
  useEffect(() => {
    allCategories()
    allSubcategories()
  },[])
  return (
    <section className='poster'>
      <div className="container">
      <div className='about__header'>
          <img src={house} alt="go back" onClick={()=>navigate("/")} />
          <span className='about__header__text'>E'lon berish</span>
      </div>
        <h3 className="poster__title">
          E'lon berish
        </h3>
          <form className='poster__form__date'>
          <div className="poster__date__actions">
          <h4 className='poster__date__title'>Vaqtni va yo'nalishni tanlang</h4>
          <span className='poster__date__label'>O’tkaziladigan sanani kiriting</span>
            <div className="poster__date__inputs">
              <Input className="poster__calendar" type="date"/>
              <Input className="poster__calendar" type="time" />
            </div>
            <div className="poster__directions">
              <div className="poster__date__inputs" id='poster__directions__select'>
                <div className="poster__date__wrapper">
                <span className='poster__date__label' style={{ "color": "#333" }}>Yo’nalishni belgilang</span>
                <select className='poster__direction'>
                    {
                      category.length && category.map((item,index) => (
                        <option key={index} value={item.category_id}>{ item.category_title}</option>
                      ))
                 }
                </select>
                </div>
                <div className="poster__date__wrapper">
                <span className='poster__date__label' style={{ "color": "#333" }}>Ichki yo’nalishn</span>
                <select className='poster__direction'>
                    {
                      subcategory.length && subcategory.map((item,index) => {
                         return <option key={index} value={item.subcategoryid}>{ item.subcategorytitle}</option>
                      })
                    }
                </select>
                </div>
              </div>
            </div>
            <div className="poster__directions">
            <div className="poster__date__inputs" id='poster__directions__select'>
                <div className="poster__date__wrapper">
                <span className='poster__date__label' style={{ "color": "#333" }}>Tadbir turi</span>
                <div className="poster__status">
                  <Input type="button" className="poster__status__btn" value="Online" />
                  <Input type="button" className="poster__status__btn" value="Offline"/>
                </div>
                </div>
                <div className="poster__date__wrapper">
                <span className='poster__date__label' style={{ "color": "#333" }}>Link kiriting</span>
                <div className="poster__status">
                    <Input type="url" className="poster__video__link"/>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="poster__radio__wrapper">
          <h3 className='poster__company__title'>Tashkilotchi</h3>
            <label htmlFor="poster__jismoniy" className='poster__company__label'>
            <span className='poster__company__type'>Jismoniy shaxs</span>
            <input type="radio" id='poster__jismoniy' className='poster__company__radio__input'  checked={radio} name='poster__company__radio'onChange={()=>setRadio(!radio)} />
          </label>
          <label htmlFor="poster__yuridik" className='poster__company__label'>
           <span className='poster__company__type'>Yuridik shaxs</span>
            <input type="radio" id='poster__yuridik' name='poster__company__radio' className='poster__company__radio__input' onChange={()=>setRadio(!radio)}/>
          </label>
          </div>
          <div className="poster__date__actions poster__company__actions">
            {
              radio ? <PersonForm/> : <CompanyForm/>
            }
          </div>
          <div className="poster__date__actions">
            <p className='poster__data__suptitle'>Post</p>
            <Input type="text" className="poster__data__title" placeholder="MAVZUNI SARLAVHASI" style={{ "padding": "0", "width": "100%" }} />
            <div className="poster__description__wrapper">
              <span className='poster__description__suptitle'>Description</span>
              <Input type="text" className="poster__description__title" placeholder="Description"/>
            </div>
            <div className="poster__file__wrapper">
              <span className='poster__description__suptitle'>Rasm yuklash</span>
              <FileUpload className="poster__file" />
              <p className='poster__file__rule'>Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin</p>
            </div>
            <div className="poster__text__wrapper">
              <span className='poster__description__suptitle'>Mavzu matni</span>
              <textarea className='poster__text' rows="20" cols="30" placeholder='Mavzu matni'></textarea>
            </div>
            <div className='poster__send__btns'>
              <button className='poster__send post__ignore'>Bekor qilish</button>
              <button className='poster__send'>E'lonni yuborish</button>
            </div>
          </div>
          </form>
      </div>
    </section>
  )
}

export default Poster
