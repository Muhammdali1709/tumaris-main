import React from 'react'
import Input from '../Input/Input'
import "./personForm.scss"
function PersonForm() {
  return (
    <div className='person__input__wrapper'>
      <label htmlFor="person__input__box">
        <span className='person__input__name'>Ismi sharifi</span>
        <Input type="text" id="person__input__box" className="person__input" placeholder="Mirsidiq Mirzokirov" />
      </label>
      <label htmlFor="person__input__box">
        <span className='person__input__name'>Professiya</span>
        <Input type="text" id="person__input__box" className="person__input" placeholder="Web dasturchi" />
      </label>
      <label htmlFor="person__input__box">
        <span className='person__input__name'>Telefon raqami</span>
        <Input type="text" placeholder="+998" id="person__input__box" className="person__input" />
      </label>
      <label htmlFor="person__input__box">
        <span className='person__input__name'>Qo’shimcha tel raqam</span>
        <Input type="text" placeholder="+998" id="person__input__box" className="person__input" />
      </label>
    </div>
  )
}

export default PersonForm
