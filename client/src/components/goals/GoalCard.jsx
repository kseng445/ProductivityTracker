import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import axios from "axios";

const GoalCard = ({ goal, current, quantity, id }) => {
  const handleAdd = () => {
    if (current < quantity) {
      var body = {
        id: id,
        current: current + 1,
      };
      console.log();
      axios
        .patch("/goals/current", body)
        .then(() => {
          // make goal list refresh or something after current is updated
          console.log("Successfully updated current++");
        })
        .catch(() => {
          console.log("There was an error trying to patch /goals");
        });
    } else {
      console.log("You have already reached your goal!");
    }
  };

  const handleSubtract = () => {
    if (current > 0) {
      var body = {
        id: id,
        current: current - 1,
      };
      console.log();
      axios
        .patch("/goals/current", body)
        .then(() => {
          // make goal list refresh or something after current is updated
          console.log("Successfully updated current++");
        })
        .catch(() => {
          console.log("There was an error trying to patch /goals");
        });
    } else {
      console.log("You can't go below 0!");
    }
  };

  return (
    <div className="goal-card">
      <div>{goal}</div>
      <ProgressBar current={current} quantity={quantity} />
      <div>{current + "/" + quantity}</div>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default GoalCard;
