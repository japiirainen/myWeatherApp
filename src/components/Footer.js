import React from "react";
import Styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p class={Styles.Footer}>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
