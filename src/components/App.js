import React from "react";
import weatherData from "../data/weatherData";
import Button from "./Button";
import styles from "./App.module.css";
import WeatherTable from "./WeatherTable";

const currentDay = 0;

function App() {
  return (
    <div class={styles.root}>
      <div class={styles["top-bar"]}>
        <Button label="previous" />
        <h1>{weatherData[currentDay].date}</h1>
        <Button label="next" />
      </div>
      <WeatherTable joona="joo" foo="bar" day={weatherData[currentDay]} />
    </div>
  );
}

export default App;
