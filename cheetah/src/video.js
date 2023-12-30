import React from 'react'

export const Video = () => {
  return (
    <div className='vidio'>
      <h1>PROMOTION</h1>
      <div className="underline"></div>
      <video className='PROMOTION' src="./assets/chugvidio.mp4" autoPlay="autoplay" controls="volume" muted="controls" loop></video>
    </div> 

  )
}
