import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"


function HomePage() {


const navigate=useNavigate();

const {user} = useAuthContext()


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
          window.location.href=`/Instructor?userId=${user._id}`
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