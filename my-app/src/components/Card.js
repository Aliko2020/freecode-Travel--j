import React from 'react'
import kakum from './images/base.jpg'
import location from './images/location.png'


const Card = (props) => {
  console.log(props);
  return (
    <div className='card'>
        <div className='image'>
          <img src={kakum} alt="image one" />
        </div>
        <div className='details'>
          <p className='location'><span className='country'><img src={location} alt="" />{props.location}</span><span className='map'><a href={props.mapUrl}>View on google Map</a></span></p>
          <h2 className='name'>{props.title}</h2>
          <p className='date'><span className='from'>{props.startDate}</span>-<span className='to'>{props.endDate}</span></p>
          <p className='description'>{props.description}</p>
        </div>
       
    </div>
  )
}

export default Card