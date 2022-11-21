import React from 'react'
import "./Heading.css";


export const Heading = () => {
  return (
    <div className='heading'>
        <div className='nav'>
          <h1>Movies<span>Point</span></h1>
          <ul>
            <li>Movies</li>
            <li>WebSeries</li>
            <li>Tv</li>
            <li>Sports</li>
            <li>Kids</li>
          </ul>
          <div className='login'>
            <button >SUBSCRIBE</button>
            <button className='log'>LOGIN</button>
          </div>
        </div>
      
        
    </div>
  )
}

