import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../axios/axiosConfig";
import { bordersColors, colors } from "../constants/colors";
import PieChart from "./PieChart";

// CSS
import "../stylesheet/result.css";

export default function Result() {
  const [pollData, setPollData] = useState();
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/voting/${id}`)
      .then(({ data }) => setPollData(data.voting))
      .catch((err) => console.log(err));
  }, []);

  const labelsGrap = pollData?.answer.map((item) => item.i);
  const countGrap = pollData?.answer.map((item) => item.count);

  const dataGrap = {
    labels: labelsGrap,
    datasets: [
      {
        label: "# of Votes",
        data: countGrap,
        backgroundColor: colors,
        borderColor: bordersColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="result__container flex__center">
      <h2>Thanks for voting! Here are the results</h2>
      <h3>"{pollData?.question}"</h3>
      <div className="flex__center">
        <PieChart classNameID="result" data={dataGrap} />
        <ul className="flex__center">
          {pollData?.answer.map((item) => (
            <li>
              {item.i} <span>{item.count} votes</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
