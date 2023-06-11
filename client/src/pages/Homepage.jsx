import React from "react";
import Header from "../components/Header";
import RecentPolls from "../components/RecentPolls";
import Top3Polls from "../components/Top3Polls";

export default function Homepage() {
  return (
    <div className="limit__width">
      <Header />
      <section className="home__polls flex__center">
        <Top3Polls />
        <RecentPolls />
      </section>
    </div>
  );
}
