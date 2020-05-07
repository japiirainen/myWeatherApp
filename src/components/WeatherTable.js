import React from "react";
import styles from "./WeatherTable.module.css";

const WeatherTable = (props) => {
  console.log("props", props);

  return (
    <table class={styles.table}>
      <tbody>
        <tr class={styles.trTemp}>
          <td>Temperature:</td>
          <td>{`${props.day.temp} °C`} </td>
        </tr>
        <tr class={styles.trHum}>
          <td>Humidity:</td>
          <td>{`${props.day.hum} %`}</td>
        </tr>
        <tr class={styles.trWind}>
          <td>Wind:</td>
          <td>{`${props.day.wind.speed} m/s  ${props.day.wind.direction}`}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;
