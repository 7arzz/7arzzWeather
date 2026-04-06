import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);

  const API_KEY = "a1e31b59558f9a9fbe6088d4ad5c356f";

  const getWeather = async (city) => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    const data = await res.json();

    if (data.cod !== 200) {
      alert("Kota tidak ditemukan");
      return;
    }

    setWeather(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>

      <SearchBar onSearch={getWeather} />

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
