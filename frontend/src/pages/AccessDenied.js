import React from "react";
import rubixgif from '../assets/Rubix.gif';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


function AccessDenied() {
  const navigate=useNavigate();

  return (
  <div className="pagesplain">
                <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>

<br></br>
<br></br>
<br></br>
<div>You Are Not Authorized to Access This Page</div>;

<div>
            
            <Box
            component="img"
            sx={{ height: 438, width: 825 , padding : 0, margins: 0}}
            alt="Logo"
            src={rubixgif}
            />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
  </div>
  
)}

export default AccessDenied;