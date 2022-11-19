import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function Signup() {


const navigate=useNavigate();


  return (
    <div>
      
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