import React, { useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";
import QuestionCard from "./QuestionCard";

export default function Top3Polls() {
  const [pollsData, setPollsData] = useState();

  useEffect(() => {
    instance
      .get("/voting/top")
      .then(({ data }) => setPollsData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container__polls">
      <h2>Top 3 Polls</h2>
      <div className="flex__center">
        {pollsData?.map((item, i) => (
          <QuestionCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
