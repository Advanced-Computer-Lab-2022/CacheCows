import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import CourseDetails from "../components/CourseDetails";

function IndTrainee() {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
          
    
      const x = {query};
      const response = await fetch('/api/courses/getCourse', {
        method: 'GET',
        body: JSON.stringify(x),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json = await response.json()

    if(!response) {
        setCourses(json.error)
    }
    if(response.ok){
      setCourses(json);
    }
      

    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app" >
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
          {courses && courses.map((course) => (
          <CourseDetails course={course} key={course._id} />
        ))}
    </div>
  );
}

export default IndTrainee;