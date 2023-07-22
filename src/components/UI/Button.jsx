import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <p>
      <button
        className={`${classes.button} ${props.className}`}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </p>
  );
};

export default Button;
