import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import CRate from "../components/CRate";
import { useNavigate } from "react-router-dom";


// components
import CReviewDetails from "../components/CReviewDetails";
import Countryform from "../components/CountryForm";

const Country = () => {
  const user = useAuthContext()




 

  const navigate=useNavigate();

  return (
    <div className="pagesplain">
            <button className="back" onClick={() => navigate(-1)}> ❮ Back </button>


  
    <br></br>
    <br></br>
 
      <div classname="courses"> 
      <Countryform></Countryform>

      <br />
      
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>  <br></br>
    </div>
  )
}



export default Country