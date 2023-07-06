import { useState, useEffect } from "react";

const UserSelect = ({ setUser }) => {
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
    </>
  );
};

export default UserSelect;
