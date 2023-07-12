import { useState } from "react";

const Navbar = ({ page, setPage }) => {
  return (
    <nav>
      <button
        className={page === 0 ? "active" : ""}
        onClick={() => {
          setPage(0);
        }}
      >
        User
      </button>
      <button
        className={page === 1 ? "active" : ""}
        onClick={() => {
          setPage(1);
        }}
      >
        Timeline
      </button>
      <button
        className={page === 2 ? "active" : ""}
        onClick={() => {
          setPage(2);
        }}
      >
        Goals
      </button>
      <button
        className={page === 3 ? "active" : ""}
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
