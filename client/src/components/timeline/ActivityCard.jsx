import { useState, useEffect } from "react";
import axios from "axios";

const ActivityCard = ({ activity }) => {
  console.log(activity);
  return (
    <div className="activity-card">
      <div>{activity.category + ": " + activity.activity}</div>
    </div>
  );
};

export default ActivityCard;
