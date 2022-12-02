import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const IRate = () => {
  const {user} = useAuthContext()

  const [rate, setRate] = useState()
  const [error1, setError1] = useState()

  const params = new URLSearchParams(window.location.search);
  const instructor_id = params.get('user_id');
  const inst = {instructor_id : instructor_id}

  useEffect(() => {
    const fetchReviews = async () => {

      const response1 = await fetch('/api/instructors/getIRate',{
        method: 'POST',
        body: JSON.stringify(inst),
        headers: {
          'Content-Type' : 'application/json'
        },
      })
      
      const json1 = await response1.json()


      if (response1.ok) {
        setRate(json1)
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
      <div classname="courses"> 
      <div className="filter">
      <h3>Your Rating!</h3>
        <h4>{rate}</h4>
      </div>
      {error1 && <div className="error">{error1}</div>}
      </div>
    </div>
  )
}



export default IRate