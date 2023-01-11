import React from 'react'
import './locations.css'
import map from '../assets/map.JPG'

const Locations = () => {
    return (
        <div className='locations_container' id='locations'>
            <div className='locations_text-container'>
                <h2>THE LOCATIONS WE SERVICE</h2>
                <ul>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                    <li>Location</li>
                </ul>
            </div>
            <img src={map}></img>
        </div>
    )
}

export default Locations