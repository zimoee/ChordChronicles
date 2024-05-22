import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './home';
import Calendar from './components/Calendar';
import Notifications from './notifications';

export default function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

// import React from 'react'
// import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
// import Navbar from './components/navbar'
// import Home from './home.jsx'
// import Calendar from './components/calendar'
// import Notifications from './notifications.jsx'
// import Settings from './settings.jsx'

// export default function App(){
//   return(
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path = 'home' element = {<Home/>}/>
//         <Route path ='calendar' element = {<Calendar/>} />
//         <Route path ='notifications' element = {<Notifications/>} />
//         <Route path ='settings' element = {<Settings/>} />
//         <Route path ='*' element = {<Navigate to = '/home'/>}/>
//       </Routes>
//     </Router>
//   )
// }