import { useState, useEffect } from "react";
import axios from "axios";
import SelectActivity from "./SelectActivity.jsx";

const Timeline = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const handleActivitySelectClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleActivitySelectClick}>Activity Select</button>
      {showModal === true ? <SelectActivity user={user} /> : null}
    </>
  );
};

export default Timeline;
