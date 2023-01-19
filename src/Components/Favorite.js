import React from 'react'
import { Link } from 'react-router-dom';
import { useDataValue } from './Datalayer'
import './favorite.css'
import Weather from './Weather';

function Favorite({update}) {
  const [state,dispatch] = useDataValue();
  const remove = (city) => {
    dispatch({
      type: "REMOVE_CITY",
      city : {name: city?.name,id: city?.id}
    })
    state?.m.delete(city?.name);
  }
  return (
    <div className="Favorite">
      <div className="favorite">
        <h2>Your Favorites</h2>
          {state?.favorite.length ? state?.favorite?.map((e) => {
            return(
              <>
              <div className="weather">
                <Link to='/' className='weather_link' onClick={() => {update(e?.name)}}>
                  <Weather city = {e?.name} id = {state?.favorite?.indexOf(e) + 1}/>
                </Link>
                <button className='remove' onClick={() => {remove(e)}}>Remove</button>
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