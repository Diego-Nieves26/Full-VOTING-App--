import React from "react";
import { Link } from "react-router-dom";

export default function QuestionCard() {
  return (
    <div className="card1">
      <img
        src="https://cdn-icons-png.flaticon.com/512/126/126484.png"
        alt="grafico"
      />
      <div>
        <Link to="/polls/1">Best Hause ? </Link>
        <p>
          Gryffindor: 0 Slytherin: 0 Ravenclow:0 <br />
          (lees than 1 minute ago)
        </p>
      </div>
    </div>
  );
}
