import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import axios from "axios";

const GoalCard = ({
  goal,
  current,
  quantity,
  id,
  refreshGoalsKey,
  setRefreshGoalsKey,
}) => {
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
          console.log("Successfully updated current + 1");
          setRefreshGoalsKey(!refreshGoalsKey);
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
          console.log("Successfully updated current - 1");
          setRefreshGoalsKey(!refreshGoalsKey);
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
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default GoalCard;
