import React from "react";
import "./../stylesheet/yourquestion.css";

export default function Yourquestion() {
  return (
    <div className="div-main">
      <div className="div-question">
        <div className="div-card1">
          <h3>Your question :</h3>
          <div className="class-question">
            <input type="text" required="" />
          </div>
          <p></p>
          <button className="btn-submit">Submit Poll</button>
        </div>
      </div>

      <div className="div-option">
        <div>
          <h2>Option 1:</h2>
          <input type="text" name="" required="" />
        </div>
        <div>
          <h2>Option 2:</h2>
          <input type="text" name="" required="" />
        </div>
        <div>
          <h2>Option 3:</h2>
          <input type="text" name="" />
        </div>
        <div>
          <h2>Option 4: </h2>
          <input type="text" name="" />
        </div>
      </div>
    </div>
  );
}
