import { useState, useEffect } from "react";

const ProgressBar = ({ current, quantity }) => {
  var progress = (current / quantity) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-value"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
