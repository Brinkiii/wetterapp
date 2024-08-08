import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchWeatherData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.42&longitude=6.88&hourly=temperature_2m`
        );

        if (!res.ok)
          throw new Error("Something went wrong fetching the weather data.");

        const data = await res.json();
        console.log(data);
        console.log(data.hourly);
      } catch (err) {
        console.error(err.message) < setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWeatherData();
  }, []);

  return <></>;
}

export default App;
