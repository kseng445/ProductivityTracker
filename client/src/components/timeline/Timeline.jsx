import { useState, useEffect } from "react";
import axios from "axios";
import ActivityList from "./ActivityList.jsx";
import SelectActivity from "./SelectActivity.jsx";

const Timeline = ({
  user,
  activities,
  refreshActivitiesKey,
  setRefreshActivitiesKey,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleActivitySelectClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleActivitySelectClick}>Activity Select</button>
      <ActivityList activities={activities} />
      {showModal === true ? (
        <SelectActivity
          user={user}
          setShowModal={setShowModal}
          refreshActivitiesKey={refreshActivitiesKey}
          setRefreshActivitiesKey={setRefreshActivitiesKey}
          activities={activities}
        />
      ) : null}
    </>
  );
};

export default Timeline;
