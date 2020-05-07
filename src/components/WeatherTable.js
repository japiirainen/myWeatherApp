import React from "react";
//import styles from "./WeatherTable.module.css";

const WeatherTable = (props) => {
  console.log("props", props);

  return (
    <table>
      <tbody>
        <tr>
          <td>Temperature:</td>
          <td>{`${props.day.temp} °C`} </td>
        </tr>
        <tr>
          <td>Humidity:</td>
          <td>{`${props.day.hum} %`}</td>
        </tr>
        <tr>
          <td>Wind:</td>
          <td>{`${props.day.wind.speed} m/s  ${props.day.wind.direction}`}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;
