import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function Guest() {
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
    
      <strong>I am a Guest
</strong>

    </div>
  )

}

export default Guest;