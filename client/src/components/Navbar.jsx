import { useState } from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button
        onClick={() => {
          setPage(0);
        }}
      >
        User
      </button>
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        Timeline
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        Goals
      </button>
      <button
        onClick={() => {
          setPage(3);
        }}
      >
        History
      </button>
    </nav>
  );
};

export default Navbar;
