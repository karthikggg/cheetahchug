import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";


export const Singleingrediants = ({ingrediant}) => {
    const [ing , seting ] = useState(false)
    let display;
    ing ? display='display' : display='displaynone';

  return (
    <div className='single' onClick={()=>seting(!ing)}>
        <div className='ing-w'  >
            <div>{ingrediant.name}</div>
            <FaChevronRight className={ing ? 'rotate' : 'rotateback'}/>
        </div>
        <div className={display}>{ingrediant.content}</div>
    </div>
  )
}
