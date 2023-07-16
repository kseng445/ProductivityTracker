import { useState, useEffect } from "react";
import axios from "axios";
import AddGoal from "./AddGoal.jsx";
import GoalList from "./GoalList.jsx";

const Goals = ({
  goals,
  goalCategory,
  setGoalCategory,
  refreshGoalsKey,
  setRefreshGoalsKey,
  user,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handlePostClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <button
        className={goalCategory === 0 ? "active" : ""}
        onClick={() => {
          setGoalCategory(0);
        }}
      >
        Everyday
      </button>
      <button
        className={goalCategory === 1 ? "active" : ""}
        onClick={() => {
          setGoalCategory(1);
        }}
      >
        Long-term
      </button>
      <br></br>
      <button onClick={handlePostClick}>Add Goal</button>
      <GoalList
        goals={goals}
        goalCategory={goalCategory}
        refreshGoalsKey={refreshGoalsKey}
        setRefreshGoalsKey={setRefreshGoalsKey}
      />
      {showModal ? (
        <AddGoal
          setShowModal={setShowModal}
          user={user}
          goalCategory={goalCategory}
          refreshGoalsKey={refreshGoalsKey}
          setRefreshGoalsKey={setRefreshGoalsKey}
        />
      ) : null}
    </>
  );
};

export default Goals;
