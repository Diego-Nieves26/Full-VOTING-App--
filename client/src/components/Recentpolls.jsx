import React from "react";
import "./../stylesheet/recentpolls.css";
import QuestionCard from "./QuestionCard";

export default function Recentpolls() {
  return (
    <div className="containt-main-recent">
      <h2>Recent Polls</h2>
      <div className="container__polls">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}
