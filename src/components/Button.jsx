import React from "react";
import styles from "./css/button.module.css";

function Button({ children, bg, color }) {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: bg, color: color }}
    >
      {children}
    </button>
  );
}

export default Button;
