import React, { useState, useEffect } from "react";
import { getWeatherData } from "../data/weatherData";
import Button from "./Button";
import styles from "./App.module.css";
import WeatherTable from "./WeatherTable";
import Footer from "./Footer";

function App() {
  const [currentDay, setPage] = useState(0);
  const [weatherData, setWeatherData] = useState(null);

  async function getMydata() {
    setWeatherData(await getWeatherData());
  }

  useEffect(() => {
    getMydata();
  }, []);

  const previousPage = () => {
    setPage(currentDay - 1);
  };

  const nextPage = () => {
    setPage(currentDay + 1);
  };

  console.log("weatherData", weatherData);
  console.log("currentDay", currentDay);
  if (weatherData === null) return "loading....";

  return (
    <div class={styles.root}>
      <div class={styles.topBlock}></div>
      <div class={styles.topBar}>
        <Button
          class={styles.prevButton}
          onClick={previousPage}
          label="previous"
          disabled={currentDay === 0}
        />
        <div>
          <h2 class={styles.city}>Espoo Weather</h2>
          <h1 class={styles.date}>{weatherData[currentDay].date}</h1>
        </div>
        <Button
          class={styles.nextButton}
          onClick={nextPage}
          label="next"
          disabled={currentDay === weatherData.length - 1}
        ></Button>
        />
      </div>
      <WeatherTable class={styles.table} day={weatherData[currentDay]} />
      <Footer />
    </div>
  );
}

export default App;
