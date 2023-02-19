import React from "react";
import "./../stylesheet/header.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <div>
      <div className="header">
        <h1>Voting Dojo</h1>
      </div>
      <div className="contenedor__btn">
        {location == "/" ? (
          <button
            utton
            className="btn-create"
            onClick={() => navigate("/polls/new")}
          >
            Create your own Poll
          </button>
        ) : location === "/polls/new" ? (
          <button utton className="btn-create" onClick={() => navigate("/")}>
            Bck to home
          </button>
        ) : location === "/result" ? (
          <button utton className="btn-create" onClick={() => navigate("/")}>
            Back to home
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
