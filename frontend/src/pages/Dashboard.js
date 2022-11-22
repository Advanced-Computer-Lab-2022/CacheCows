import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import CourseDetails from "../components/CourseDetails"

const Dashboard = () => {
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses/getCourses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="course">
      <div className="All Courses">
        {courses && courses.map((course) => (
          <CourseDetails course={course} key={course._id} />
        ))}
      </div> 
    </div>
  )
}



export default Dashboard;