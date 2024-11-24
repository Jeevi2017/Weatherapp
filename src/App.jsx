
// import { useState } from 'react';
// import './App.css';
// import searchIcon from './assets/search.png';
// import clearIcon from './assets/clear.png';
// import drizzleIcon from './assets/drizzle.png';
// import humidityIcon from './assets/humidity.png';
// import rainIcon from './assets/rain.jpeg';
// import snowIcon from './assets/snow.png';
// import cloudIcon from './assets/cloud.png';
// import windIcon from './assets/wind.jpeg';

// // Component name starts with an uppercase letter
// const WeatherDetails = ({ icon, temp, city,country,lat ,log,humidity,wind}) => {
//   return (
//     <>
//       <div className="image">
//         <img src={icon} alt="Weather Icon" />
//       </div>
//       <div className="temp">{temp}°C</div>
//       <div className="location">{city}</div>
//       <div className="country">{country}</div>
//       <div className="cord">
//         <div>
//           <span className="lat">latitude</span>
//           <span>{lat}</span>
//         </div>
//         <div>
//           <span className="log">longitude</span>
//           <span>{log}</span>
//         </div>
//       </div>
//       <div  className="data-container">
//         <div className="element">
//           <img 
//   src={humidityIcon} 
//   alt="humidity" 
//   className="icon" 
//   style={{ width: '50px', height: '50px' }} 
// />

//           <div className="data">
//             <div className="humidity-percentage">{humidity}%</div>
//             <div className="text">Humidity</div>
//           </div>
//         </div>
//         <div className="element">
//           <img 
//   src={windIcon} 
//   alt="wind" 
//   className="icon" 
//   style={{ width: '50px', height: '50px' }}
// />

//           <div className="data">
//             <div className="wind-percentage">{wind} km/hr</div>
//             <div className="text">wind speed</div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// function App() {
//   let api_key="fac02b7a2cc0c56797df50d3f5eb1d58";
//   const[text,setText]=useState("chennai")
//   const [icon, setIcon] = useState(snowIcon); // Default icon
//   const [temp, setTemp] = useState(0); // Default temperature
//   const [city, setCity] = useState("Chennai"); // Default city (enclosed in quotes)
//   const [country, setCountry] = useState("IN"); 
//   const[lat, setlat]=useState(0);
//   const[log, setlog]=useState(0);
//   const [humidity,setHumidity]=useState(0);
//   const [wind,setWind]=useState(0);
//   const search=async()=>{
    
//     let url='https://api.openweathermap.org/data/2.5/weather?q=london&apid=${api_key}&units=metric';

//     try{

//     }catch(error){
//      console.error("An error occured:",error.message)
//     }
//     finally{

//     }
//   }

//   const handleCity=(e)=>{
//     setText(e.target.value)
//   };

//   const handlekeyDown=(e)=>{
//     if(e.key=== "Enter"){
//       search()
//     }
    
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="input-container">
//           <input
//             type="text"
//             className="cityInput"
//             placeholder="Search city"
//             onChange={handleCity} 
//             value={text}
//             onKeyDown={handlekeyDown}
           
//           />
//           <div className="search-icon">
//             <img src={searchIcon} alt="Search Icon" />
//           </div>
//         </div>
//         {/* Pass props correctly to the component */}
//         <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from 'react';
import './App.css';
import searchIcon from './assets/search.png';
import clearIcon from './assets/clear.png';
import drizzleIcon from './assets/drizzle.png';
import humidityIcon from './assets/humidity.png';
import rainIcon from './assets/rain.jpeg';
import snowIcon from './assets/snow.png';
import cloudIcon from './assets/cloud.png';
import windIcon from './assets/wind.jpeg';

// Component name starts with an uppercase letter
const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Weather Icon" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img 
            src={humidityIcon} 
            alt="humidity" 
            className="icon" 
            style={{ width: '50px', height: '50px' }} 
          />
          <div className="data">
            <div className="humidity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img 
            src={windIcon} 
            alt="wind" 
            className="icon" 
            style={{ width: '50px', height: '50px' }}
          />
          <div className="data">
            <div className="wind-percentage">{wind} km/hr</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  let api_key = "fac02b7a2cc0c56797df50d3f5eb1d58";
  const [text, setText] = useState("chennai");
  const [icon, setIcon] = useState(snowIcon); // Default icon
  const [temp, setTemp] = useState(0); // Default temperature
  const [city, setCity] = useState("Chennai"); // Default city
  const [country, setCountry] = useState("IN"); 
  const [lat, setlat] = useState(0);
  const [log, setlog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();

      // Update state variables with API response data
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setlat(data.coord.lat);
      setlog(data.coord.lon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      // Update icon based on weather condition
      const weatherCondition = data.weather[0].main.toLowerCase();
      if (weatherCondition.includes("rain")) {
        setIcon(rainIcon);
      } else if (weatherCondition.includes("snow")) {
        setIcon(snowIcon);
      } else if (weatherCondition.includes("cloud")) {
        setIcon(cloudIcon);
      } else if (weatherCondition.includes("drizzle")) {
        setIcon(drizzleIcon);
      } else {
        setIcon(clearIcon);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Search city"
            onChange={handleCity} 
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div className="search-icon" onClick={search}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
        {/* Pass props correctly to the component */}
        <WeatherDetails 
          icon={icon} 
          temp={temp} 
          city={city} 
          country={country} 
          lat={lat} 
          log={log} 
          humidity={humidity} 
          wind={wind} 
        />
      </div>
    </>
  );
}

export default App;
