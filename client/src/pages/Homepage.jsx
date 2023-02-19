import React from "react";
import Recentpolls from "../components/recentpolls";
import Header from "./../components/Header";
import Top3polls from "./../components/Top3polls";
//import "../stylesheet/.css";

export default function Homepage() {
  return (
    <div className="limit__width">
      <Header />
      <div className="div-2">
        <Top3polls />
        <Recentpolls />
      </div>
    </div>
  );
}
