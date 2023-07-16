import { render } from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import UserSelect from "./components/user/UserSelect.jsx";
import Goals from "./components/goals/Goals.jsx";

const App = () => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState("");
  const [goals, setGoals] = useState([]);
  const [goalCategory, setGoalCategory] = useState(0);
  const [refreshGoalsKey, setRefreshGoalsKey] = useState(true);

  useEffect(() => {
    if (user !== "") {
      var query = {
        params: {
          user_: user,
        },
      };
      axios.get("/goals", query).then((result) => {
        console.log(result.data);
        setGoals(result.data);
      });
    }
  }, [user, refreshGoalsKey]);

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
        <Goals
          goals={goals}
          goalCategory={goalCategory}
          setGoalCategory={setGoalCategory}
          refreshGoalsKey={refreshGoalsKey}
          setRefreshGoalsKey={setRefreshGoalsKey}
          user={user}
        />
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
