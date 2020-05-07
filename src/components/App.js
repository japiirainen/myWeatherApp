import React, { useState } from "react";
import weatherData from "../data/weatherData";
import Button from "./Button";
import styles from "./App.module.css";
import WeatherTable from "./WeatherTable";
import Footer from "./Footer";

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
      <div class={styles.topBlock}></div>
      <div class={styles.topBar}>
        <Button
          class={styles.prevButton}
          onClick={previousPage}
          label="previous"
        />
        <h1 class={styles.date}>{weatherData[currentDay].date}</h1>
        <Button class={styles.nextButton} onClick={nextPage} label="next" />
      </div>
      <WeatherTable class={styles.table} day={weatherData[currentDay]} />
      <Footer />
    </div>
  );
}

export default App;
