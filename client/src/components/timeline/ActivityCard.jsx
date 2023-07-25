import { useState, useEffect } from "react";
import axios from "axios";

const ActivityCard = ({ activity }) => {
  var duration;
  if (activity.end_date === null) {
    let currentTimestamp = new Date();
    let start_date = new Date(activity.start_date);
    start_date = new Date(
      Date.UTC(
        start_date.getFullYear(),
        start_date.getMonth(),
        start_date.getDate(),
        start_date.getHours(),
        start_date.getMinutes(),
        start_date.getSeconds(),
        start_date.getMilliseconds()
      )
    );
    duration = Math.floor(
      (currentTimestamp.getTime() - start_date.getTime()) / 60000
    );
  } else {
    let start_date = new Date(activity.start_date);
    let end_date = new Date(activity.end_date);
    duration = Math.floor((end_date.getTime() - start_date.getTime()) / 60000);
  }

  return (
    <div
      className="activity-card"
      style={{
        height: `${duration * 3}px`,
        minHeight: "20px",
        backgroundColor:
          activity.category === "Productivity"
            ? "green"
            : activity.category === "Task"
            ? "blue"
            : activity.category === "Leisure"
            ? "yellow"
            : activity.category === "Rest"
            ? "gray"
            : "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="activity-text">
        {activity.activity + ": " + duration + "m"}
      </div>
    </div>
  );
};

export default ActivityCard;
