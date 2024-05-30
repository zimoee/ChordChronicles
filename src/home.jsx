import React from 'react'
import './home.css'

function Home(){
  return(
    <div className = "app-container">
      <header>
        <h1>Chord Chronicles</h1>
        <h3>Streaks: [] continuous days of practice!</h3>
      </header>

      <a href = 'https://docs.google.com/document/d/1YhQfQHkd7DaPHRUmBo0Zgr7NFo4RhPzfCcLVNUz6uHM/edit?usp=sharing'>
        <button className = 'userdoc-button'>User Documentation</button>
      </a>

      <main>
        <section className = "goals-section">
          <h2>Goals</h2>
          <p>[Enter goals]</p>

        </section>

        <section className = "calendar-section">
          <img src = 'public/images/calendar_image.png' alt = 'Chord Chronicles Calendar' />
        </section>

        <section className = "practice-section">
          <h2>Things to practice:</h2>
          <p>[Enter practice]</p>
        </section>
      </main>
    </div>
  )
}
export default Home