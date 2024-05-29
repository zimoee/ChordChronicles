import React from 'react'
import EmailForm from './email.jsx'

function Notifications(){
  return(
    <div>
      <h1>
        Notifications
      </h1>
      <p>
        To get automatic daily notifications (at 9AM) with a customizable reminder message to practice, email your email and desired message below! 
      </p>
      <EmailForm/>
    </div>
  )
}
export default Notifications