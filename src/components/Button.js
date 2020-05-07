import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      class={styles.button}
      type="button"
    >
      <span> {props.label ? props.label : ""}</span>
    </button>
  );
};

export default Button;
