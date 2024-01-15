import React from 'react'
import { Navbar } from '../navbar'



export const Home = () => {
  return (
    <div className="main">
      <div className='home'>
        <div className="hometext">
          <h1>CHEETAH CHUG.</h1>
          <h1 className='xe'>Xtreme emergency</h1>
          <p className='grab'>Cheetah chug is appreciated all over the world by atheletes, students as well as in demanding professions and long-distance travel.</p>
          <button>buy</button>
        </div>
          <img src="./assets/home.jpg" alt="none" />
      </div>
    </div>
  )
}
