import React from 'react'
import { Link } from 'react-router-dom';
import { useDataValue } from './Datalayer'
import './favorite.css'
import Weather from './Weather';

function Favorite({update}) {
  const [{favorite},dispatch] = useDataValue();
  const remove = (id) => {
    dispatch({
      type: "REMOVE_CITY",
      id : id
    })
  }
  return (
    <div className="Favorite">
      <div className="favorite">
        <h2>Your Favorites</h2>
          {favorite.length ? favorite?.map((e) => {
            return(
              <>
              <div className="weather">
                <Link to='/' className='weather_link' onClick={() => {update(e?.name)}}>
                  <Weather city = {e?.name} id = {favorite?.indexOf(e) + 1}/>
                </Link>
                <button className='remove' onClick={() => {remove(e?.id)}}>Remove</button>
              </div>
              <hr />
              </>
            )
          }) : "No Favorites"}
      </div>
    </div>
  )
}

export default Favorite