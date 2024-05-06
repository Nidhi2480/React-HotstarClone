import React from 'react'
import disney from '../../media/icons/viewers-disney.png'
import marvel from '../../media/icons/viewers-marvel.png'
import national from '../../media/icons/viewers-national.png'
import pixar from '../../media/icons/viewers-pixar.png'
import starwars from '../../media/icons/viewers-starwars.png'
import hotstarsp from '../../media/icons/hotstarsp.png'
import './companies.css'
function Companies() {
  return (
    <div className="companies-row">
        <div className='item'>
            <img src={disney} alt="companies"/>
            <video autoPlay muted loop>
                <source src="/videos/disney.mp4" type="video/mp4" />
            </video>
        </div>
        <div className='item'>
        <img src={marvel} alt="companies"/>
        <video autoPlay muted loop>
                <source src="/videos/marvel.mp4" type="video/mp4" />
            </video>
        </div>
        <div className='item'>
            <img src={national} alt="companies"/>
            <video autoPlay muted loop>
                <source src="/videos/ngc.mp4" type="video/mp4" />
            </video>
            
        </div>
        <div className='item'>
            <img src={pixar} alt="companies"/>
            <video autoPlay muted loop>
                <source src="/videos/pixar.mp4" type="video/mp4" />
            </video>
            
        </div>
        <div className='item'>
            <img src={starwars} alt="companies"/>
            <video autoPlay muted loop>
                <source src="/videos/starwarss.mp4" type="video/mp4" />
            </video>
            
        </div>
        <div className='item'>
            <img src={hotstarsp} alt="companies"/>
            <video autoPlay muted loop>
                <source src="/videos/hotstarspecials.mp4" type="video/mp4" />
            </video>
            
        </div>
    </div>
  )
}

export default Companies