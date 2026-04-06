export default function WeatherCard({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{data.name}</h2>
      <p>{data.main.temp}°C</p>
      <p>{data.weather[0].main}</p>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="icon"
      />
    </div>
  );
}
