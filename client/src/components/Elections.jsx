import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../axios/axiosConfig";
import { notifyError, notifySuccess } from "../constants/alerts";
import "./../stylesheet/elections.css";
import ToastAlert from "./ToastAlert";

const colors = ["#f68b1f", "#1560bd", "#29ab87"];

function Option({ option, questionData, disabledBtn, setDisabledBtn }) {
  const index = Math.floor(Math.random() * 3) + 0;
  const navigate = useNavigate();

  const voteForThisOption = () => {
    setDisabledBtn(true);

    let arrayAnswer = questionData.answer;
    let updatedOption = questionData.answer.find(
      (elem) => elem._id === option._id
    );
    updatedOption.count = updatedOption.count + 1;
    const optionIndex = questionData.answer.findIndex(
      (elem) => elem._id === option._id
    );
    arrayAnswer[optionIndex] = updatedOption;

    const updatedDate = {
      answer: arrayAnswer,
      count: questionData.count + 1,
    };

    instance
      .put(`/voting/update/${questionData._id}`, updatedDate)
      .then(({ data }) => {
        notifySuccess("Vote sent");
        setTimeout(() => {
          navigate("/");
        }, 6000);
      })
      .catch((err) => {
        notifyError("An error occurred");
        setDisabledBtn(false);
      });
  };

  return (
    <div className="question__option flex__center">
      <h3>{option.i}</h3>
      <button
        className="btn"
        style={{
          "--bg-color": colors[index],
          pointerEvents: disabledBtn ? "none" : "initial",
          opacity: disabledBtn ? 0.5 : 1,
        }}
        onClick={voteForThisOption}
      >
        Vote "{option.i}"
      </button>
    </div>
  );
}

export default function Elections() {
  const [pollData, setPollData] = useState();
  const [disabledBtn, setDisabledBtn] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/voting/${id}`)
      .then(({ data }) => setPollData(data.voting))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="elections flex__center">
      <h2>{pollData?.question}</h2>
      <div>
        {pollData?.answer.map((item) => (
          <Option
            option={item}
            questionData={pollData}
            disabledBtn={disabledBtn}
            setDisabledBtn={setDisabledBtn}
            key={item._id}
          />
        ))}
      </div>
      <ToastAlert />
    </section>
  );
}
