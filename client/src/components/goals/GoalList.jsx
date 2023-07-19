import { useState, useEffect } from "react";
import axios from "axios";
import GoalCard from "./GoalCard.jsx";
import isAscending from "../../helpers/isAscending.js";

const GoalList = ({
  goals,
  goalCategory,
  refreshGoalsKey,
  setRefreshGoalsKey,
  showEditOptions,
  renderedGoals,
  setRenderedGoals,
}) => {
  const [sortedGoals, setSortedGoals] = useState([]);
  const [tentativeOrder, setTentativeOrder] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    // initial renders
    var tempGoals = [];
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].category === goalCategory) {
        tempGoals.push(goals[i]);
      }
    }
    tempGoals.sort((a, b) => {
      return a.order_ - b.order_;
    });
    var tempTentativeOrder = [];
    for (let i = 0; i < tempGoals.length; i++) {
      tempTentativeOrder.push(tempGoals[i].order_);
    }
    setIsInitialRender(true);
    setSortedGoals(tempGoals);
    setRenderedGoals(tempGoals);
    setTentativeOrder(tempTentativeOrder);
    console.log("renderedGoals: ", tempGoals);
    console.log("tentativeOrder: ", tempTentativeOrder);
  }, [goalCategory, goals]);

  useEffect(() => {
    if (isInitialRender === true) {
      setIsInitialRender(false);
    } else {
      let tempGoals = [];
      for (let i = 0; i < tentativeOrder.length; i++) {
        for (let j = 0; i < sortedGoals.length; j++) {
          if (sortedGoals[j].order_ === tentativeOrder[i]) {
            tempGoals.push(sortedGoals[j]);
            break;
          }
        }
      }
      setRenderedGoals(tempGoals);
    }
  }, [tentativeOrder]);

  useEffect(() => {
    // if showEditOptions === false && tentativeOrder is not sorted by ascending (or empty),
    // then make patch requests to to update order_s according to tentativeOrder
    // update refreshGoalsKey to fetch updated goals
    if (
      showEditOptions === false &&
      !isAscending(tentativeOrder) &&
      tentativeOrder.length !== 0
    ) {
      let idsAndOrder_s = [];
      for (let i = 0; i < renderedGoals.length; i++) {
        if (renderedGoals[i].order_ !== i) {
          let tempObj = {
            id: renderedGoals[i].id,
            order_: i,
          };
          idsAndOrder_s.push(tempObj);
        }
      }
      axios
        .patch("/goals/order_", idsAndOrder_s)
        .then(() => {
          console.log("Successfully updated goal orders");
          setRefreshGoalsKey(!refreshGoalsKey);
        })
        .catch(() => {
          console.log("There was an error trying to patch /goals/order_");
        });
    }
  }, [showEditOptions]);

  return (
    <div className="goal-list">
      {renderedGoals.map((goal) => {
        return (
          <GoalCard
            goal={goal.goal}
            current={goal.current}
            quantity={goal.quantity}
            id={goal.id}
            order_={goal.order_}
            refreshGoalsKey={refreshGoalsKey}
            setRefreshGoalsKey={setRefreshGoalsKey}
            showEditOptions={showEditOptions}
            tentativeOrder={tentativeOrder}
            setTentativeOrder={setTentativeOrder}
          />
        );
      })}
    </div>
  );
};

export default GoalList;
