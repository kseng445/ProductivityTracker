import { useState, useEffect } from "react";
import axios from "axios";
import formatTime from "../../helpers/formatTime.js";

const ActivityCard = ({ activity, user }) => {
  var duration;
  var durationString;
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
    durationString = formatTime(duration);
  } else {
    let start_date = new Date(activity.start_date);
    let end_date = new Date(activity.end_date);
    duration = Math.floor((end_date.getTime() - start_date.getTime()) / 60000);
    durationString = formatTime(duration);
  }

  if (user === "Kevin") {
    return (
      <div
        className="activity-card"
        style={{
          height: `${duration * 3}px`,
          width: "300px",
          borderRadius: "10px",
          minHeight: "20px",
          background:
            activity.category === "Productivity"
              ? `linear-gradient(310deg, #202020 0% 10%, green 100%)`
              : activity.category === "Task"
              ? `linear-gradient(310deg, #202020 0% 10%, blue 100%)`
              : activity.category === "Leisure"
              ? `linear-gradient(310deg, #202020 0% 10%, orange 100%)`
              : activity.category === "Rest"
              ? `linear-gradient(310deg, #202020 0% 10%, gray 100%)`
              : "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="activity-text">
          {activity.activity + ": " + durationString}
        </div>
      </div>
    );
  } else if (user === "Sela") {
    return (
      <div
        className="activity-card"
        style={{
          height: `${duration * 3}px`,
          width: "300px",
          borderRadius: "10px",
          minHeight: "20px",
          background:
            activity.category === "Productivity"
              ? `linear-gradient(310deg, #202020 0% 10%, green 100%)`
              : activity.category === "Task"
              ? `linear-gradient(310deg, #202020 0% 10%, purple 100%)`
              : activity.category === "Leisure"
              ? `linear-gradient(310deg, #202020 0% 10%, pink 100%)`
              : activity.category === "Rest"
              ? `linear-gradient(310deg, #202020 0% 10%, gray 100%)`
              : "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="activity-text">
          {activity.activity + ": " + durationString}
        </div>
      </div>
    );
  }
};

export default ActivityCard;
