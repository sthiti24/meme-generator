import React from 'react'
import trollFace from '../images/TrollFace.png'

export default function Navbar()
{
    return (
        <div className='navbar'>
            <img src={trollFace} alt=""></img>
            <h2>Meme Generator</h2>
        </div>
    )
}