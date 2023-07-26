import { useState, useEffect } from "react";
import axios from "axios";

const AddGoal = ({
  setShowModal,
  user,
  goalCategory,
  refreshGoalsKey,
  setRefreshGoalsKey,
  renderedGoals,
}) => {
  const [goal, setGoal] = useState("");
  const [showError, setShowError] = useState(false);

  const handleConfirm = () => {
    if (goal === "") {
      setShowError(true);
      return;
    }
    let quantity = goal.match(/\d+/g);
    if (quantity === null) {
      quantity = [1];
    } else if (quantity.length !== 1) {
      setShowError(true);
      return;
    }
    let body = {
      goal: goal,
      quantity: parseInt(quantity[0]),
      user_: user,
      category: goalCategory,
      order_: renderedGoals.length,
    };
    axios
      .post("/goals", body)
      .then(() => {
        setShowModal(false);
        setRefreshGoalsKey(!refreshGoalsKey);
      })
      .catch(() => {
        console.log("There was an error trying to post /goals");
      });
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setGoal(e.target.value);
    if (showError === true) {
      setShowError(false);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div style={{ color: "rgb(232, 232, 232)" }}>New Goal:</div>
        <input
          value={goal}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Do 10 hours of practice"
          style={{ fontSize: "20px" }}
        />
        {showError ? <div>Error</div> : <br></br>}
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default AddGoal;
