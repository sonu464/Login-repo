import React from "react";
import Card from "../UI/Card";
import classes from "./ShowData.module.css";

const ShowData = (props) => {
  return (
    <Card className={classes.users}>
      <ul className="show-data">
        {props.user.map((user, index) => (
          <li key={index}>
            {user.name} ( {user.age} year old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShowData;
