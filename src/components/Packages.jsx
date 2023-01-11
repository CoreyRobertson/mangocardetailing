import React from 'react'
import './packages.css'
const Packages = () => {
    return (
        <div className='packages_container' id='packages'>
            <div className='packages_container-card_container'>
                <div className='card'>
                    <h1>PACKAGE 2</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
                <div className='card_main'>
                    <h1>PACKAGE 1</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
                <div className='card'>
                    <h1>PACKAGE 3</h1>
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                        <li>Detail 4</li>
                    </ul>
                    <button type='button' className='card_button'>Enquire Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Packages