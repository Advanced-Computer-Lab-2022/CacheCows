import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function Signup() {


const navigate=useNavigate();


  return (
    <div>
                  <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

      <div>
      <button
        onClick={() => {
          navigate("/InstSignup");
        }}
      >
        {" "}
        Sign up as Instructor!
      </button>
      </div>
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/IndTraineeSignup");
        }}
      >
        {" "}
        Sign up as a Trainee!
      </button>
      </div>
      <br />

      

    </div>
  );
}

export default Signup;