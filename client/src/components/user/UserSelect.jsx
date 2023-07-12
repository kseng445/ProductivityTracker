import { useState, useEffect } from "react";

const UserSelect = ({ user, setUser }) => {
  return (
    <>
      <button
        className={user === "Kevin" ? "active" : ""}
        onClick={() => {
          setUser("Kevin");
        }}
      >
        Kevin
      </button>
      <button
        className={user === "Sela" ? "active" : ""}
        onClick={() => {
          setUser("Sela");
        }}
      >
        Sela
      </button>
    </>
  );
};

export default UserSelect;
