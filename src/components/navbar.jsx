import {NavLink} from "react-router-dom"
import "./navbar.css"
import React from 'react'

function Navbar(){
  return(
    
    <nav>
        <ul id = "navbar">
          <li><NavLink to="/home"><img src="./images/homeicon.png"width="50" height="50"/></NavLink></li>
          <li><NavLink to="/calendar"><img src="./images/calendaricon.png"width="50" height="50"/></NavLink></li>
          <li><NavLink to="/notifications"><img src="./images/notificationsicon.png"width="50" height="50"/></NavLink></li>
        </ul>
    </nav>
  )

}

export default Navbar