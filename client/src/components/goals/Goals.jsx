import { useState, useEffect } from "react";

const Goals = ({ goalCategory, setGoalCategory }) => {
  return (
    <>
      <button
        onClick={() => {
          setGoalCategory(0);
        }}
      >
        Everyday
      </button>
      <button
        onClick={() => {
          setGoalCategory(1);
        }}
      >
        Long-term
      </button>
      <div>{goalCategory === 0 ? "Everyday" : "Long-term"}</div>
    </>
  );
};

export default Goals;
