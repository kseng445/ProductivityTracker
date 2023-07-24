import { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard.jsx";

const ActivityList = ({ activities }) => {
  return (
    <div className="activity-list">
      {activities.map((activity) => {
        return <ActivityCard activity={activity} />;
      })}
    </div>
  );
};

export default ActivityList;
