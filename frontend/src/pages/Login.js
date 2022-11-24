import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function Signup() {


const navigate=useNavigate();


  return (
    <div>
      
      <div>
      <button
        onClick={() => {
          navigate("/InstLogin");
        }}
      >
        {" "}
        Login as Instructor!
      </button>
      </div>
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/IndTraineeLogin");
        }}
      >
        {" "}
        Log in as Individual Trainee!
      </button>
      </div>
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/AdminLogin");
        }}
      >
        {" "}
        Log in as Admin!
      </button>
      </div>
      <br />
      <div>
      <button
        onClick={() => {
          navigate("/CorpTraineeLogin");
        }}
      >
        {" "}
        Login as Corporate Trainee!
      </button>
      </div>
      <br />
      <div>
      <button
        onClick={() => {
          navigate("/Signup");
        }}
      >
        {" "}
        New User ? Sign Up Now!
      </button>
      </div>
      <br />

      <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Continue As A Guest
      </button>
      </div>


      
      

      

    </div>
  );
}

export default Signup;