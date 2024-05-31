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
          <h2>Practice tips:</h2>
          <ul>
            <li>Divide time into shorter sessions</li>
            <li>Set a goal</li>
            <li>Record yourself</li>
          </ul>

        </section>

        <section className = "calendar-section">
          <img src = '/images/2024_calendar.png' alt = 'Chord Chronicles Calendar' />
        </section>

        <section className = "practice-section">
          <h2>Things to focus on:</h2>
          <ol>
            <li>Band music</li>
            <li>Dynamics</li>
            <li>Tone</li>
            <li>Scales</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
export default Home