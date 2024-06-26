import React from 'react'
import ProductionHouses from '../../data/Housesdata'
import './companies.css'
function Companies() {
  return (
    <div className="companies-row">
        {ProductionHouses.map((house,_)=>(
                    <div className='item'>
                    <img src={house.pimg} alt="companies"/>
                    <video autoPlay muted loop>
                        <source src={house.pvideo} type="video/mp4" />
                    </video>
                </div>

        ))}
    </div>
  )
}

export default Companies