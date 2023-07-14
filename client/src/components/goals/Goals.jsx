import { useState, useEffect } from "react";
import axios from "axios";

const Goals = ({ goalCategory, setGoalCategory }) => {
  const [goals, setGoals] = useState([]);
  const handleGetClick = () => {
    axios.get("/goals").then((result) => {
      console.log(result.data);
    });
  };
  const handlePostClick = () => {
    axios.post("/goals").then(() => {
      console.log("posted");
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
      <button
        onClick={() => {
          handleGetClick();
        }}
      >
        mock get
      </button>
      <button
        onClick={() => {
          handlePostClick();
        }}
      >
        mock post
      </button>
    </>
  );
};

export default Goals;
