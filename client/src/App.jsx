import { render } from "react-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import UserSelect from "./components/userselect/UserSelect.jsx";

const App = () => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState("");

  var pageContent;

  if (page === 0) {
    // user select
    pageContent = (
      <>
        <Navbar setPage={setPage} />
        <UserSelect setUser={setUser} />
      </>
    );
  } else if (page === 1) {
    // timeline
    pageContent = (
      <>
        <Navbar setPage={setPage} />
        Timeline Page
      </>
    );
  } else if (page === 2) {
    // goals
    pageContent = (
      <>
        <Navbar setPage={setPage} />
        Goals Page
      </>
    );
  } else if (page === 3) {
    // history
    pageContent = (
      <>
        <Navbar setPage={setPage} />
        History Page
      </>
    );
  }

  return <div>{pageContent}</div>;
};

render(<App />, document.getElementById("root"));
