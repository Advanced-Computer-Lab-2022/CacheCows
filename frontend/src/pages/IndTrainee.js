import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function IndTrainee() {
  const navigate=useNavigate();

  return (
    <div>
      
      
      <button
          onClick={() => {
            navigate("/Courses");
          }}
        >
          {" "}
          Courses
        </button>
        <strong>I am an Individual Trainee
  </strong>
      </div>
    )

}

export default IndTrainee;