import { useState, useEffect } from "react";
import axios from "axios";
import AddGoal from "./AddGoal.jsx";
import GoalList from "./GoalList.jsx";

const Goals = ({ goalCategory, setGoalCategory, user }) => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleGetClick = () => {
    axios.get("/goals").then((result) => {
      console.log(result.data);
      setGoals(result.data);
    });
  };
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
      <button onClick={handleGetClick}>mock get</button>
      <button onClick={handlePostClick}>Add Goal</button>
      <GoalList goals={goals} goalCategory={goalCategory} />
      {showModal ? (
        <AddGoal
          setShowModal={setShowModal}
          user={user}
          goalCategory={goalCategory}
        />
      ) : null}
    </>
  );
};

export default Goals;
