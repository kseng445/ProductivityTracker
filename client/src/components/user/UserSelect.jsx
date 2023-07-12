import { useState, useEffect } from "react";

const UserSelect = ({ user, setUser }) => {
  return (
    <>
      <button
        onClick={() => {
          setUser("Kevin");
        }}
      >
        Kevin
      </button>
      <button
        onClick={() => {
          setUser("Sela");
        }}
      >
        Sela
      </button>
      <div>{user === "" ? "No user selected" : user + " is now the user"}</div>
    </>
  );
};

export default UserSelect;
