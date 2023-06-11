import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { instance } from "../axios/axiosConfig";
import { notifyError, notifySuccess } from "../constants/alerts";
import ToastAlert from "./ToastAlert";

// CSS
import "./../stylesheet/yourquestion.css";

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: "",
      answer: [
        { i: "", count: 0 },
        { i: "", count: 0 },
      ],
    },
  });
  const navigate = useNavigate();
  const [disabledBtn, setDisabledBtn] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "answer",
  });

  const onSubmit = (data) => {
    setDisabledBtn(true);
    const currentDate = new Date();

    data.count = 0;
    data.createDate = currentDate;

    instance
      .post(`/voting/new`, data)
      .then(({ data }) => {
        notifySuccess("Survey created");
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
    <form
      className="create__quetion flex__center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3>Your question :</h3>
        <input type="text" {...register("question", { required: true })} />
        {errors.question && (
          <span className="inp__req">This field is required</span>
        )}
      </div>
      <div className="flex__center options__container">
        {fields.map((item, index) => (
          <div key={item.id}>
            <label>{`Option ${index + 1}`}:</label>
            <input
              type="text"
              {...register(`answer[${index}].i`, { required: true })}
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar
            </button>
            {errors.answer?.[index] && (
              <span className="inp__req">This field is required</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex__center">
        <button
          type="button"
          className="btn"
          onClick={() => append({ count: 0 })}
        >
          Add option
        </button>
        <button
          className="btn"
          style={{ pointerEvents: disabledBtn ? "none" : "initial" }}
        >
          Submit Poll
        </button>
        <ToastAlert />
      </div>
    </form>
  );
}
