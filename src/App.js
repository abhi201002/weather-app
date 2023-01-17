import './App.css';
import {useEffect,useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./Components/header"
import Home from './Components/Home';
import Favorite from './Components/Favorite'
import Footer from './Components/Footer' 

function App() {
  const [data,setData] = useState();
  const [place,setplace] = useState("Jaipur");
  function update(newplace){
    setplace(newplace);
    console.log(place);
  }
  // let Temp;
  const city = place;
  const apiKey = "d70d0a96d88e04be4636f7ab0455ec3e";
  // function Fetch(){
  //   let Data;
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
  //   city +
  //   "&units=metric&appid=" +
  //   apiKey)
  //   .then((response) =>{
  //     Data = response.json();
  //     return Data
  //     console.log(Data)
  //   })
  //   return Data;
  // }
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apiKey)
    .then((response) =>{
      return response.json();
    })
    .then((Data) =>{
      if(Data.cod == 404){
        alert(Data.message);
      }
      else{
        setData(Data);
      }
    })
    // let Data = Fetch();
    // // console.log(Data);
    // if(Data?.cod == 404){
    //   alert(Data?.message);
    // }
    // else{
    //   setData(Data);
    // }
  }, [city])
  console.log(data);
  return (
    <div className="App">
      {/* <h1>Weather app !!!!!!!!!!!!</h1>
      {console.log(data?.current)}
      <p>Temprature is {data?.main?.temp}</p> */}
      <Router>
        <Header update = {update}/>
        <Routes>
          <Route path='/' element = {
            <Home data = {data}/>
          }/>
          <Route path='/favorites' element = {
            <Favorite update = {update}/>
          }/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
