import React from 'react'
import { useDataValue } from './Datalayer';
import StarIcon from '@mui/icons-material/Star';
import './home.css'

function Home({data}) {
  const [state,dispatch] = useDataValue();
  var date = new Date(data?.dt * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  const add = () => {
    document.querySelector(".place_icon").style.color = "rgb(255,222,54)"
    dispatch({
      type: "SET_CITY",
      city: {name: data?.name,id: data?.id},
    })
  }
  const remove = () =>{
    // console.log("yes")
    document.querySelector(".place_icon").style.color = "black"
    dispatch({
      type: "REMOVE_CITY",
      city: {name: data?.name,id: data?.id},
    })
    state?.m.delete(data?.name);
  }
  return (
    <div className="Home">
      <div className="home">
        <div className="place">
          <h2>{data?.name} · {data?.sys.country}</h2>
          <button  onClick={state?.m?.has(data?.name) ? () => {remove()} :() =>{add()}}><StarIcon className='place_icon'/></button>
        </div>
        <div className="temp">
          <strong>{data?.main.temp}</strong>°C as of {hours}:{minutes.substr(-2)}:{seconds.substr(-2)} UTC
        </div>
        <div className="max_min">
          Day <strong>{data?.main.temp_max}</strong>°C · Night <strong>{data?.main.temp_min}</strong>°C
        </div>
        <br />
        <hr />
        <div className="others">
          <div>Feels like {data?.main.feels_like}°C</div>
          <hr />
          <div>Humidity {data?.main.humidity}%</div>
          <hr />
          <div>Pressure {data?.main.pressure}mb</div>
          <hr />
          <div>Wind Speed {data?.wind.speed}km/h at {data?.wind.deg}°</div>
          <hr />
          <div>Visibility {data?.visibility}m</div>
        </div>
      </div>
    </div>
  )
}

export default Home