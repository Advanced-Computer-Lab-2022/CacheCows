import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import instructor from '../assets/teacher2.png';
import indtrainee from '../assets/indtrainee.png';
import corptrainee from '../assets/corporate.png';
import admin from '../assets/admin.png';


function Signup() {


const navigate=useNavigate();


  return (
    <div>
      
      

      <div>
                      {''}

                      
                     </div>
                     


      <div>

      <button className="buttonlogin">
        <Link onClick={() => window.location.href=`/InstLogin`}>
                <Box
                  component="img"
                  sx={{ height: 150, width: 150 , padding : 0, margins: 0, 
                    backgroundColor: '#33266e',
                    '&:hover': {
                      backgroundColor: '#a6607c',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  alt="Logo"
                  src={instructor}
                />
              </Link>
              <br />
              Instructor
              
      </button>

      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;


      <button className="buttonlogin">
        <Link onClick={() => window.location.href=`/IndTraineeLogin`}>
                <Box
                  component="img"
                  sx={{ height: 150, width: 150 , padding : 0, margins: 0, 
                    backgroundColor: '#33266e',
                    '&:hover': {
                      backgroundColor: '#a6607c',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  alt="Logo"
                  src={indtrainee}
                />
              </Link>
              <br />
              Individual Trainee
      </button>

          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;



      <button className="buttonlogin">
        <Link onClick={() => window.location.href=`/CorpTraineeLogin`}>
                <Box
                  component="img"
                  sx={{ height: 150, width: 150 , padding : 0, margins: 0, 
                    backgroundColor: '#33266e',
                    '&:hover': {
                      backgroundColor: '#a6607c',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  alt="Logo"
                  src={corptrainee}
                />
              </Link>
              <br />
              Corporate Trainee
      </button>

      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;



      <button className="buttonlogin">
        <Link onClick={() => window.location.href=`/AdminLogin`}>
                <Box
                  component="img"
                  sx={{ height: 150, width: 150 , padding : 0, margins: 0, 
                    backgroundColor: '#33266e',
                    '&:hover': {
                      backgroundColor: '#a6607c',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  alt="Logo"
                  src={admin}
                />
              </Link>
              <br />
              Admin
      </button>
      </div>
      <br />

      
      
      <br />
      <div>
      <button
        onClick={() => {
          navigate("/Signup");
        }}
      >
        {" "}
        New User ? 
        <br></br>
        Sign Up Now!
      </button>
      </div>
      <br />

      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

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