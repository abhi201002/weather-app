import React from 'react'
import './weather.css'

function Weather({city,id}) {
  return (
    <>
    <div className="Weather">
        {id}. {city}
    </div>
    </>
  )
}

export default Weather