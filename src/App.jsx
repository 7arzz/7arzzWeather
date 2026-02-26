import { useState } from "react";
import "./App.css";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1e31b59558f9a9fbe6088d4ad5c356f&units=metric`,
      );

      if (!response.ok) {
        throw new Error("Kota tidak ditemukan");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>7arzz Weather </h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Cek</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-box">
          <h2>{weather.name}</h2>
          <p>🌡 {weather.main.temp}°C</p>
          <p>🌥 {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
// const API_KEY = import.meta.env.VITE_API_KEY;
// console.log("API KEY:", API_KEY);
