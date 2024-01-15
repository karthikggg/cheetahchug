import React from 'react'
import { Navbar } from '../navbar'



export const Home = () => {
  return (
    <div className="main">
      <div className='home'>
        <div className="hometext">
          <p>Energy drink</p>
          <h1 className='xe'>Xtreme emergency</h1>
          <p className='grab'>grab your first drink</p>
          <button>buy</button>
        </div>
          <img src="./assets/home.jpg" alt="none" />
      </div>
    </div>
  )
}
