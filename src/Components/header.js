import React, { useState } from 'react'
import './header.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDataValue } from './Datalayer';
// import update from '../App';

function Header({update}) {
  const [{favorite},dispatch] = useDataValue();
  const [place,setplace] = useState("");
  // console.log(place);
  return (
    <div className="Header">
      <div className="header">
        <Link to = "/" className="name">
          <WbSunnyIcon className='name_icon'/>
          <p>Weather.com</p>
        </Link>
        <div className="search">
          <input type="text" placeholder='Search' value = {place} onChange = {(e) => {setplace(e.target.value)}}/>
          <button onClick={() => {update(place)}}><SearchIcon className='search_icon'/></button>
        </div>
        <Link to = "/favorites" className='favorites'>
          Your Favorites({favorite.length})
        </Link>
      </div>
    </div>
  )
}

export default Header