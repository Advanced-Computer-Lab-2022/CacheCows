import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const CRate = () => {
  const {user} = useAuthContext()

  const [rate, setRate] = useState()
  const [error1, setError1] = useState()

  const params = new URLSearchParams(window.location.search);
  const course_id = params.get('course_id');
  const crs = {course_id : course_id}

  useEffect(() => {
    const fetchReviews = async () => {

      const response1 = await fetch('/api/courses/getCRate',{
        method: 'POST',
        body: JSON.stringify(crs),
        headers: {
          'Content-Type' : 'application/json'
        },
      })
      
      const json1 = await response1.json()


      if (response1.ok) {
        setRate(json1.course_rating)
      }
      if(!response1.ok){
        setRate()
        setError1(json1.error)
        console.log('No Rating Yet',json1)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="course">
      <div className="filter">
      <h3>Course Rating!</h3>
        <h4>{rate}</h4>
      </div>
      {error1 && <div className="error">{error1}</div>}
      </div>

  )
}



export default CRate