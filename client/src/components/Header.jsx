import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// CSS
import "./../stylesheet/header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <header className="flex__center">
      <h1>Voting APP</h1>
      <div className="contenedor__btn">
        {location == "/" ? (
          <button className="btn" onClick={() => navigate("/polls/new")}>
            Create your own Poll
          </button>
        ) : (
          <button className="btn" onClick={() => navigate("/")}>
            Back to home
          </button>
        )}
      </div>
    </header>
  );
}
