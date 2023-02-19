import React from "react";
import "./../stylesheet/top3polls.css";
import QuestionCard from "./QuestionCard";

export default function Top3polls() {
  return (
    <div className="containt-main">
      <h2>Top 3 Polls</h2>
      <div>
<QuestionCard/>
<QuestionCard/>
<QuestionCard/>
      </div>
    </div>
  );
}
