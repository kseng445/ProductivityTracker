import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import axios from "axios";

const GoalCard = ({
  goal,
  current,
  quantity,
  id,
  order_,
  refreshGoalsKey,
  setRefreshGoalsKey,
  showEditOptions,
  tentativeOrder,
  setTentativeOrder,
}) => {
  const handleAdd = () => {
    if (current < quantity) {
      let body = {
        id: id,
        current: current + 1,
      };
      axios
        .patch("/goals/current", body)
        .then(() => {
          console.log("Successfully updated current + 1");
          setRefreshGoalsKey(!refreshGoalsKey);
        })
        .catch(() => {
          console.log("There was an error trying to patch /goals/current");
        });
    } else {
      console.log("You have already reached your goal!");
    }
  };

  const handleSubtract = () => {
    if (current > 0) {
      let body = {
        id: id,
        current: current - 1,
      };
      axios
        .patch("/goals/current", body)
        .then(() => {
          console.log("Successfully updated current - 1");
          setRefreshGoalsKey(!refreshGoalsKey);
        })
        .catch(() => {
          console.log("There was an error trying to patch /goals/current");
        });
    } else {
      console.log("You can't go below 0!");
    }
  };

  const handleOrderChange = (direction) => {
    let tempOrder = tentativeOrder.slice();
    for (let i = 0; i < tempOrder.length; i++) {
      if (tempOrder[i] === order_) {
        if (direction === "up") {
          if (i !== 0) {
            [tempOrder[i], tempOrder[i - 1]] = [tempOrder[i - 1], tempOrder[i]];
            break;
          } else {
            console.log("Cannot move top-most positioned goal up");
          }
        } else if (direction === "down") {
          if (i !== tempOrder.length - 1) {
            [tempOrder[i], tempOrder[i + 1]] = [tempOrder[i + 1], tempOrder[i]];
            break;
          } else {
            console.log("Cannot move bottom-most positioned goal down");
          }
        }
      }
    }
    setTentativeOrder(tempOrder);
  };

  return (
    <div className="goal-card">
      <div>{goal}</div>
      <ProgressBar current={current} quantity={quantity} />
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
      {showEditOptions ? (
        <>
          <button onClick={() => handleOrderChange("up")}>↑</button>
          <button onClick={() => handleOrderChange("down")}>↓</button>
          <button>Remove</button>
        </>
      ) : null}
    </div>
  );
};

export default GoalCard;
