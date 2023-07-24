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
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [renderedGoals, setRenderedGoals] = useState([]);

  const handlePostClick = () => {
    setShowModal(true);
  };

  const handleEditClick = () => {
    setShowEditOptions(!showEditOptions);
  };

  const handleReset = () => {
    let goalIds = [];
    for (let i = 0; i < renderedGoals.length; i++) {
      goalIds.push(renderedGoals[i].id);
    }
    axios
      .patch("/goals/reset", goalIds)
      .then(() => {
        console.log("Successfully reset everyday goals");
        setRefreshGoalsKey(!refreshGoalsKey);
      })
      .catch(() => {
        console.log("There was an error trying to patch /goals/reset");
      });
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
      <button onClick={handleEditClick}>⚙</button>
      {goalCategory === 0 ? <button onClick={handleReset}>Reset</button> : null}
      <GoalList
        goals={goals}
        goalCategory={goalCategory}
        refreshGoalsKey={refreshGoalsKey}
        setRefreshGoalsKey={setRefreshGoalsKey}
        showEditOptions={showEditOptions}
        renderedGoals={renderedGoals}
        setRenderedGoals={setRenderedGoals}
      />
      {showModal ? (
        <AddGoal
          setShowModal={setShowModal}
          user={user}
          goalCategory={goalCategory}
          refreshGoalsKey={refreshGoalsKey}
          setRefreshGoalsKey={setRefreshGoalsKey}
          renderedGoals={renderedGoals}
        />
      ) : null}
    </>
  );
};

export default Goals;
