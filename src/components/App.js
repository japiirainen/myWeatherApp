import React, { useState } from "react";
import weatherData from "../data/weatherData";
import Button from "./Button";
import styles from "./App.module.css";
import WeatherTable from "./WeatherTable";

function App() {
  const [currentDay, setPage] = useState(3);

  const previousPage = () => {
    setPage(currentDay - 1);
  };

  const nextPage = () => {
    setPage(currentDay + 1);
  };

  return (
    <div class={styles.root}>
      <div class={styles["top-bar"]}>
        <Button onClick={previousPage} label="previous" />
        <h1>{weatherData[currentDay].date}</h1>
        <Button onClick={nextPage} label="next" />
      </div>
      <WeatherTable day={weatherData[currentDay]} />
    </div>
  );
}

export default App;
