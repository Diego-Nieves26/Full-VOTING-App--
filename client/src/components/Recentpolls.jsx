import React, { useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";
import QuestionCard from "./QuestionCard";

export default function RecentPolls() {
  const [pollsData, setPollsData] = useState();

  useEffect(() => {
    instance
      .get("/voting")
      .then(({ data }) => setPollsData(data.allVotings))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container__polls">
      <h2>Recent Polls</h2>
      <div className="flex__center">
        {pollsData?.map((item, i) => (
          <QuestionCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
