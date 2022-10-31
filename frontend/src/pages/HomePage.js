import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import CourseDetails from "../components/CourseDetails"
import CourseForm from "../components/CourseForm"




function HomePage() {


const navigate=useNavigate();


  return (
    <div>

    <div>
      RUBIX!
      </div>
      
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

      <div>
      <button
        onClick={() => {
          navigate("/IndTrainee");
        }}
      >
        {" "}
        Individual Trainaee
      </button>

      <button
        onClick={() => {
          navigate("/Guest");
        }}
      >
        {" "}
        I am a Guest
      </button> 

      <button
        onClick={() => {
          navigate("/Courses");
        }}
      >
        {" "}
        Courses
      </button>   

</div>

    </div>
  );
}

export default HomePage;