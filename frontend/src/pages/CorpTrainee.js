import React from "react";
import SearchBar from "../components/SearchBar";
import ListPage from "../components/ListPage";
import { useState, useEffect } from 'react'

  function CorpTrainee() {
    const [courses,setCourses]=useState()
    const [searchResults, setSearchResults] = useState([])
  
    useEffect(()=>{
    const fetchCourses=async ()=>{
        const response= await fetch('/api/courses/getCourses')
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
  </div>
  )
}

export default CorpTrainee;