import { render } from "react-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import UserSelect from "./components/user/UserSelect.jsx";
import Goals from "./components/goals/Goals.jsx";

const App = () => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState("");
  const [goalCategory, setGoalCategory] = useState(0);

  var pageContent;

  if (page === 0) {
    // user select
    pageContent = (
      <>
        <Navbar page={page} setPage={setPage} />
        <br></br>
        <UserSelect user={user} setUser={setUser} />
      </>
    );
  } else if (page === 1) {
    // timeline
    pageContent = (
      <>
        <Navbar page={page} setPage={setPage} />
        <br></br>
        Timeline Page
      </>
    );
  } else if (page === 2) {
    // goals
    pageContent = (
      <>
        <Navbar page={page} setPage={setPage} />
        <br></br>
        <Goals goalCategory={goalCategory} setGoalCategory={setGoalCategory} />
      </>
    );
  } else if (page === 3) {
    // history
    pageContent = (
      <>
        <Navbar page={page} setPage={setPage} />
        <br></br>
        History Page
      </>
    );
  }

  return <div>{pageContent}</div>;
};

render(<App />, document.getElementById("root"));
