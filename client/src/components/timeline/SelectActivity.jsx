import { useState, useEffect } from "react";
import axios from "axios";

const SelectActivity = ({ user }) => {
  const [category, setCategory] = useState("");

  const handleActivityChange = (activity) => {
    console.log("Category: ", category);
    console.log("Activity: ", activity);
  };

  let activitiesHTML = "";
  if (user === "Kevin") {
    if (category === "Productivity") {
      let activities = ["Work", "Gamedev", "Exercise", "Other"];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Task") {
      let activities = [
        "Brush Teeth",
        "Shower",
        "Bathroom",
        "Food Prep",
        "Cleaning",
        "Laundry",
        "Other",
      ];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Leisure") {
      let activities = ["Eating", "Social Media", "Gaming", "Other"];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Rest") {
      let activities = ["Sleep", "Nap", "Other"];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    }
  } else if (user === "Sela") {
    if (category === "Productivity") {
      let activities = [
        "Class",
        "Homework",
        "Crochet",
        "Art",
        "Exercise",
        "Other",
      ];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Task") {
      let activities = [
        "Brush Teeth",
        "Shower",
        "Bathroom",
        "Food Prep",
        "Cleaning",
        "Laundry",
        "Other",
      ];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Leisure") {
      let activities = ["Eating", "Social Media", "Gaming", "Other"];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    } else if (category === "Rest") {
      let activities = ["Sleep", "Nap", "Other"];
      activitiesHTML = activities.map((activity) => (
        <button
          key={activity}
          onClick={() => {
            handleActivityChange(activity);
          }}
        >
          {activity}
        </button>
      ));
    }
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div>Category:</div>
        <button
          className={category === "Productivity" ? "active" : ""}
          onClick={() => {
            setCategory("Productivity");
          }}
        >
          Productivity
        </button>
        <button
          className={category === "Task" ? "active" : ""}
          onClick={() => {
            setCategory("Task");
          }}
        >
          Task
        </button>
        <button
          className={category === "Leisure" ? "active" : ""}
          onClick={() => {
            setCategory("Leisure");
          }}
        >
          Leisure
        </button>
        <button
          className={category === "Rest" ? "active" : ""}
          onClick={() => {
            setCategory("Rest");
          }}
        >
          Rest
        </button>
        {activitiesHTML !== "" ? (
          <>
            <br></br>
            <br></br>
            <div>Activity:</div>
          </>
        ) : null}
        {activitiesHTML}
      </div>
    </div>
  );
};

export default SelectActivity;
