import { useState, useEffect } from "react";
import axios from "axios";

const SelectActivity = ({
  user,
  setShowModal,
  refreshActivitiesKey,
  setRefreshActivitiesKey,
  activities,
}) => {
  const [category, setCategory] = useState("");

  const handleActivityChange = (activity) => {
    let currentTimestamp = new Date();
    let body = {
      activity: activity,
      category: category,
      user_: user,
      start_date: currentTimestamp,
    };
    axios
      .post("/timeline", body)
      .then(() => {
        if (activities.length !== 0) {
          // edge case exists where if on one device the first activity (in database) is posted
          // and then on another device that is not refreshed an activity is posted,
          // the second device will think it's also posting the first activity.
          // rn i'm just gonna write dogshit code for the sake of time so i'm gonna ignore that edge case and
          // go to utils.js and modify patchActivityEnd_date
          let body = {
            id: activities[0].id,
            end_date: currentTimestamp,
            user_: user,
          };
          axios
            .patch("/timeline/end_date", body)
            .then(() => {
              setShowModal(false);
              setRefreshActivitiesKey(!refreshActivitiesKey);
            })
            .catch(() => {
              console.log(
                "There was an error trying to patch /timeline/end_date"
              );
            });
        } else {
          console.log(
            `There were no previous activities in the database for user: ${user}. Therefore, the selected activity has been added (posted) to the database, but there was no patch request made to update end_date of any previous activity (because there is no previous activity to update).`
          );
          setShowModal(false);
          setRefreshActivitiesKey(!refreshActivitiesKey);
        }
      })
      .catch(() => {
        console.log("There was an error trying to post /timeline");
      });
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
        "Shopping",
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
        "Shopping",
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
        <div style={{ color: "rgb(232, 232, 232)" }}>Category:</div>
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
            <div style={{ color: "rgb(232, 232, 232)" }}>Activity:</div>
          </>
        ) : null}
        {activitiesHTML}
        <br></br>
        <br></br>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default SelectActivity;
