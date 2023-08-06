import React from 'react'
import './form.css'
import {BiMessageDetail} from 'react-icons/bi'
import Button from '../button/Button'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import ContactImage from '../../images/2.svg'

const Form = () => {
  return (
    <div>
        <div className="form-container">
            <div className="from-content">
                <div className="from-content-container">
                    <div className="form-top">
                       <Button text ="VIA SUPPORT CHAT" icons={<BiMessageDetail/>}/>
                       <Button text ="VIA SUPPORT Call" icons={<FiPhoneCall/>}/>
                    </div>
                    <div className="email-btn">
                    <Button icons={<MdOutlineEmail/>} text="Via Email From"/>
                    </div>
                    <div className="from-input-container">
                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <textarea name="" id="" cols="30" rows="5" placeholder='Your message'></textarea>
                            <Button text=" submit"/>
                        </form>
                    </div>
                </div>
                <div className="form-image">
                    <img src={ContactImage} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form