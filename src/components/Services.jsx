import React from 'react'
import './services.css'
import { AiOutlineCar } from 'react-icons/ai'
import { GiCarSeat } from 'react-icons/gi'
import { FaRegHandshake } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='services_container' id='services'>

            <div className='services_card-container'>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>MOBILE CAR DETAILING</h1>
                        <AiOutlineCar className='services_icon' />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>INTERIOR CLEANING</h1>
                        <GiCarSeat className='services_icon' />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className='services_card'>
                    <div className='services_card-heading_container'>

                        <h1>PRE-SALE DETAILING</h1>
                        <FaRegHandshake className='services_icon' />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type='button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services