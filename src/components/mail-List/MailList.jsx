import React from 'react'
import './mail-list.css'

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Money by watching Anime</h1>
      <span className="mailDesc">Sign up and we will send suggestions to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Your mail' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
