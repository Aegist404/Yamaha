import React from 'react'
import './style.css'

const Banner = (props) => {
  return (
    <div>
        <img src="../image/serviceBanner.png" alt="Service" style={{ width: '100%' }} />
        <h1 className='title fw-bold'>{props.title}</h1>
    </div>
  )
}

export default Banner
