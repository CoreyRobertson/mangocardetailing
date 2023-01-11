import React from 'react'
import './header.css'
import carorange2 from '../assets/carorange2.png'

const Header = () => {
    return (
        <div className='header_container' id='home'>
            <div className='header_text-container'>
                <h1>MELBOURNE'S BEST CAR DETAILING SERVICES</h1>
                <button type='button' className='header_button'>Get A Free Quote!</button>
            </div>
            <div className='header_image-container'>
                <img src={carorange2} className='carImage' alt='car'></img>
            </div>
        </div>
    )
}

export default Header