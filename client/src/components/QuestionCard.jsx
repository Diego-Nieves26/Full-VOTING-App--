import React from "react";
import { useNavigate } from "react-router-dom";
import PieChart from "../components/PieChart";
import { bordersColors, colors } from "../constants/colors";
import "../stylesheet/questioncard.css";

function getDateDifferences(createDate) {
  const currentDate = new Date();
  const difference = currentDate.getTime() - createDate.getTime();

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day(s) ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `Lees than 1 minute ago`;
  }
}

export default function QuestionCard({ data }) {
  const navigate = useNavigate();
  const createDate = new Date(data?.createDate);
  const agoDate = getDateDifferences(createDate);
  const labelsGrap = data?.answer.map((item) => item.i);
  const countGrap = data?.answer.map((item) => item.count);

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
    <div className="question__card">
      <PieChart data={dataGrap} />
      <div style={{ paddingBottom: "50px" }}>
        <h3>{data?.question}</h3>
        <p>({agoDate})</p>
      </div>
      <div className="question__card_btn">
        <button onClick={() => navigate(`/polls/${data?._id}`)}>Vote</button>
        <button onClick={() => navigate(`/result/${data?._id}`)}>
          Results
        </button>
      </div>
    </div>
  );
}
