import { useState, useEffect } from "react";
import axios from "axios";
import GoalCard from "./GoalCard.jsx";

const GoalList = ({ goals, goalCategory }) => {
  return (
    <div className="goal-list">
      {goals.map((goal) => {
        return (
          <GoalCard
            goal={goal.goal}
            current={goal.current}
            quantity={goal.quantity}
            id={goal.id}
          />
        );
      })}
    </div>
  );
};

export default GoalList;
