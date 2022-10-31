import React from "react";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";


  function CorpTrainee() {
    const navigate=useNavigate();

    const [courses,setCourses]=useState()
    const [searchResults, setSearchResults] = useState([])
  
    useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('/api/courses/getCourse')
        const json= await response.json()

        if(response.ok){
        setCourses(json)
        setSearchResults(json)
        }

        if(!response.ok){
          setCourses(json)
          }
    }

    fetchCourses()
      },[])

  return( 
    <div className="CorpTrainee">
    <SearchBar courses={courses} setSearchResults={setSearchResults} />
    <ListPage searchResults={searchResults} />
    <strong>
    I am a corporate Trainee
</strong>

<button
        onClick={() => {
          navigate("/Courses");
        }}
      >
        {" "}
        Courses
      </button>
    
  </div>
  )
}

export default CorpTrainee;

