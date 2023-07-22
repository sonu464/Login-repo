import React from "react";
import Card from "../UI/Card";
import classes from "./InvalidInput.module.css";
import Button from "../UI/Button";

const InvalidInput = (props) => {
  return (
    <div>
      <div className={classes.bg} onClick={props.errorHandler} />
      <Card className={classes.invalid}>
        <h2>{props.title}</h2>
        <p className={classes.para}>{props.message}</p>
        <div className={classes.btn}>
          <Button onClick={props.errorHandler} className={classes.btnclr}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InvalidInput;
