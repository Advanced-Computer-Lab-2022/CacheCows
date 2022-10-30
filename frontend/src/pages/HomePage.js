import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div>

    <div>
      RUBIX!
      </div>
      <div>
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        {" "}
        About us
      </button>
      </div>

      <div>
      <button
        onClick={() => {
          navigate("/Admin");
        }}
      >
        {" "}
        Admin
      </button>
      </div>

      <div>
      <button
        onClick={() => {
          navigate("/Instructor");
        }}
      >
        {" "}
        Instructor
      </button>
      </div>

      <div>
      <button
        onClick={() => {
          navigate("/CorpTrainee");
        }}
      >
        {" "}
        Corporate Trinaee
      </button>
      </div>

      <div>
      <button
        onClick={() => {
          navigate("/IndTrainee");
        }}
      >
        {" "}
        Individual Trainaee
      </button>
      </div>
      

    </div>
  );
}

export default HomePage;