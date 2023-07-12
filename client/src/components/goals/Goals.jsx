import { useState, useEffect } from "react";

const Goals = ({ goalCategory, setGoalCategory }) => {
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
    </>
  );
};

export default Goals;
