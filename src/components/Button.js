import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button disabled={props.disabled} class={styles.button} type="button">
      {props.label ? props.label : ""}
    </button>
  );
};

export default Button;
