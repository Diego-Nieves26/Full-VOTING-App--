import React from "react";
import "./../stylesheet/elections.css";

export default function Elections() {
  return (
    <div className="div-main-elections-container">
      <div>
        <h2>Which Snack is the Best?</h2>
      </div>
      <div className="div-main-elections">
        <div className="div-cheezit">
          <h2>Cheez-It</h2>
          <br />
          <button>Vote Cheez-Its</button>
        </div>
        <div className="div-goldish">
          <h2>Goldfish</h2>
          <br />
          <button>Vote Goldfish</button>
        </div>
      </div>
    </div>
  );
}
