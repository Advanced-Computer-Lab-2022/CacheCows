import React from "react";
import { useNavigate, useParams } from "react-router-dom";





function HomePage() {


const navigate=useNavigate();


  return (
    <div>
      
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
      <br />

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
      <br />

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
      <br />

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
      <br />

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
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/Courses");
        }}
      >
        {" "}
        Courses
      </button>
      </div>
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/guest");
        }}
      >
        {" "}
        Guests
      </button>
      </div>

    </div>
  );
}

export default HomePage;