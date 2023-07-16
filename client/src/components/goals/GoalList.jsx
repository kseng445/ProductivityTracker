import { useState, useEffect } from "react";
import axios from "axios";
import GoalCard from "./GoalCard.jsx";

const GoalList = ({
  goals,
  goalCategory,
  refreshGoalsKey,
  setRefreshGoalsKey,
}) => {
  const [renderedGoals, setRenderedGoals] = useState([]);

  useEffect(() => {
    var tempGoals = [];
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].category === goalCategory) {
        tempGoals.push(goals[i]);
      }
      setRenderedGoals(tempGoals);
    }
  }, [goalCategory, goals]);

  return (
    <div className="goal-list">
      {renderedGoals.map((goal) => {
        return (
          <GoalCard
            goal={goal.goal}
            current={goal.current}
            quantity={goal.quantity}
            id={goal.id}
            refreshGoalsKey={refreshGoalsKey}
            setRefreshGoalsKey={setRefreshGoalsKey}
          />
        );
      })}
    </div>
  );
};

export default GoalList;
